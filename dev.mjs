import esbuild from "esbuild";
import process from "node:process";

const isBuild = process.argv.includes("--build");

const externalDbPlugin = {
	name: "external-db",
	setup(build) {
		build.onResolve({ filter: /^#db$/ }, (args) => {
			return {
				path: "https://cefiti.web.app/db.js",
				external: true,
			};
		});
	},
};

const commonConfig = {
	bundle: true,
	outdir: "./public",
	sourcemap: true,
	format: "esm",
	jsx: "automatic",
	target: ["es2017"],
	define: {
		"process.env.NODE_ENV": isBuild ? '"production"' : '"development"',
	},
	metafile: true,
};

/** @type {esbuild.BuildOptions} */
const appConfig = {
	...commonConfig,
	entryPoints: ["./src/index.tsx", "./src/sw.js"],
	minify: true,
	plugins: [externalDbPlugin],
};

if (isBuild) {
	try {
		await esbuild.build(appConfig);
		console.log("Build complete successfully");
	} catch (error) {
		console.error("Build failed:", error);
		process.exit(1);
	}
} else {
	const appContext = await esbuild.context(appConfig).catch((err) => {
		console.error("App context error:", err);
		process.exit(1);
	});

	await appContext.rebuild();
	await appContext.watch();

	const serveResult = await appContext.serve({
		servedir: "./public",
		host: "localhost",
		port: 3001,
	});

	console.log(`Listening on http://localhost:${serveResult.port}`);
}

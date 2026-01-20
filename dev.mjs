import esbuild from "esbuild";
import process from "node:process";

const isBuild = process.argv.includes("--build");

const externalDbPlugin = {
	name: "external-db",
	setup(build) {
		build.onResolve({ filter: /^#db$/ }, (args) => {
			return {
				path: "./db.js",
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

/** @type {esbuild.BuildOptions} */
const dbConfig = {
	...commonConfig,
	entryPoints: ["./src/db.ts"],
	minify: false, // Keeping db.js readable
};

if (isBuild) {
	try {
		await Promise.all([esbuild.build(appConfig), esbuild.build(dbConfig)]);
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

	const dbContext = await esbuild.context(dbConfig).catch((err) => {
		console.error("DB context error:", err);
		process.exit(1);
	});

	await Promise.all([appContext.rebuild(), dbContext.rebuild()]);
	await Promise.all([appContext.watch(), dbContext.watch()]);

	const serveResult = await appContext.serve({
		servedir: "./public",
		host: "localhost",
		port: 3001,
	});

	console.log(`Listening on http://localhost:${serveResult.port}`);
}

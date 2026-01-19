import esbuild from "esbuild";
import process from "node:process";

const isBuild = process.argv.includes("--build");

/** @type {esbuild.BuildOptions} */
const config = {
	entryPoints: ["./src/index.tsx", "./src/sw.js", "./src/db.ts"],
	bundle: true,
	outdir: "./public",
	minify: true,
	sourcemap: true,
	format: "esm",
	jsx: "automatic",
	target: ["es2017"],
	define: {
		"process.env.NODE_ENV": isBuild ? '"production"' : '"development"',
	},
	metafile: true,
	alias: {
		"#db": "./db.js",
		preact: "https://esm.sh/preact@10.28.2",
		"@preact/signals": "https://esm.sh/@preact/signals@2.5.1",
	},
	external: ["./db.js", "https://esm.sh/*"],
};

if (isBuild) {
	try {
		await esbuild.build(config);
		console.log("Build complete successfully");
	} catch (error) {
		console.error("Build failed:", error);
		process.exit(1);
	}
} else {
	const context = await esbuild.context(config).catch((err) => {
		console.error("ESBuild context error:", err);
		process.exit(1);
	});

	await context.rebuild();
	await context.watch();

	const serveResult = await context.serve({
		servedir: "./public",
		host: "localhost",
		port: 3001,
	});

	console.log(`Listening on http://${serveResult.host}:${serveResult.port}`);
}

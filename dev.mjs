import esbuild from "esbuild";
import fs from "fs"

const context = await esbuild
  .context({
    entryPoints: [
      "./src/index.tsx", './src/sw.js'
    ],
    bundle: true,
    outdir: "./public",
    minify: true,
    sourcemap: true,
    format: 'esm',
    jsx: 'automatic',
    define: {
      //"process.env.NODE_ENV": isDevServer ? '"development"' : '"production"',
       "process.env.npm_package_version": '"'+ process.env.npm_package_version+'"'
    },
    //loader: { '.db.js': 'copy' },
    external: ["./*.db.js"],
    //assetNames: 'public/[name]',
    metafile: true,
  })
  .catch(() => {
    console.log("ERROR");
    process.exit(1);
  });

await context.rebuild();

await context.watch();

const serveResult = await context.serve({
  servedir: "./public",
  host: "localhost",
  port: 3001
});

console.log(`Listening on http://${serveResult.host}:${serveResult.port}`);

//fs.writeFileSync('meta.json', JSON.stringify(context.metafile))

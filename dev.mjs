import fs from 'node:fs'
import process from 'node:process'
import esbuild from 'esbuild'

const project =
  process.argv.slice(2).find((arg) => !arg.startsWith('--')) || 'cefiti'
const baseDir = `./${project}`
const isBuild = process.argv.includes('--build')

if (!fs.existsSync(baseDir)) {
  console.error(`Project directory ${baseDir} does not exist.`)
  process.exit(1)
}

const externalDbPlugin = {
  name: 'external-db',
  setup(build) {
    build.onResolve({ filter: /^#db$/ }, () => {
      return {
        path: 'https://cefiti.web.app/db.js',
        external: true,
      }
    })
    build.onResolve({ filter: /^#municipios$/ }, () => {
      return {
        path: 'https://cefiti.web.app/municipios.js',
        external: true,
      }
    })
    build.onResolve({ filter: /^#db-next$/ }, () => {
      return {
        path: 'https://cefiti.web.app/db-next.js',
        external: true,
      }
    })
    build.onResolve({ filter: /^#legislacao$/ }, () => {
      return {
        path: 'https://cefiti.web.app/legislacao.js',
        external: true,
      }
    })
  },
}

const commonConfig = {
  bundle: true,
  outdir: `${baseDir}/public`,
  sourcemap: true,
  format: 'esm',
  jsx: 'automatic',
  target: ['es2017'],
  define: {
    'process.env.NODE_ENV': isBuild ? '"production"' : '"development"',
  },
  metafile: true,
  charset: 'utf8',
  alias: {
    '#municipios': './cefiti-new/public/municipios.js',
  },
  loader: {
    '.gif': 'file',
    '.png': 'file',
    '.jpg': 'file',
    '.svg': 'file',
  },
}

const entryPoints = [`${baseDir}/src/index.tsx`]
if (fs.existsSync(`${baseDir}/src/leg.tsx`)) {
  entryPoints.push(`${baseDir}/src/leg.tsx`)
}
if (fs.existsSync(`${baseDir}/src/sw.js`)) {
  entryPoints.push(`${baseDir}/src/sw.js`)
}

/** @type {esbuild.BuildOptions} */
const appConfig = {
  ...commonConfig,
  entryPoints,
  minify: true,
  plugins:
    ['cefiti', 'cefiti-new', 'cefiti-admin'].includes(project) && isBuild
      ? [externalDbPlugin]
      : [],
}

if (isBuild) {
  try {
    await esbuild.build(appConfig)
    console.log(`Build for ${project} complete successfully`)
  } catch (error) {
    console.error(`Build for ${project} failed:`, error)
    process.exit(1)
  }
} else {
  const appContext = await esbuild.context(appConfig).catch((err) => {
    console.error(`App context error for ${project}:`, err)
    process.exit(1)
  })

  await appContext.rebuild()
  await appContext.watch()

  const serveResult = await appContext.serve({
    servedir: `${baseDir}/public`,
    host: 'localhost',
    port: project === 'cefiti' ? 3001 : 3002,
  })

  console.log(`${project} listening on http://localhost:${serveResult.port}`)
}

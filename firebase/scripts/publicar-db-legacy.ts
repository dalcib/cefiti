import { execSync } from 'node:child_process'
import { existsSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'

async function publicarLegacy() {
  console.log('Starting legacy database publication from src/db.ts...')

  try {
    const publicDir = join(process.cwd(), 'public')
    if (!existsSync(publicDir)) {
      mkdirSync(publicDir)
    }

    const inputPath = join(process.cwd(), '..', 'cefiti', 'src', 'db.ts')
    const outputPath = join(publicDir, 'db.js')

    console.log(`Transforming ${inputPath} to ${outputPath}...`)

    // Use esbuild to strip types and generate ESM
    // We don't use --bundle to avoid pulling in dependencies, just transform the file.
    execSync(
      `npx esbuild "${inputPath}" --format=esm --outfile="${outputPath}"`,
      { stdio: 'inherit' },
    )

    console.log('\nLocal legacy database (db.js) generated successfully!')
    console.log('Deploying to Firebase Hosting...')
  } catch (error) {
    const err = error as Error
    console.error('\nFAILED to publish legacy database:', err.message)
    process.exit(1)
  }
}

publicarLegacy()

import { render } from 'preact'
import { App } from './app.tsx'

const container = document.getElementById('root')
if (!container) {
  throw new Error('Root container missing in index.html')
}

render(<App />, container)

import { render } from 'preact'
import { App } from './app.tsx'
import './css/main.css'
import './css/estilo-template.css'
import './css/estilo-menu.css'
import './css/app.css'
import './css/admin.css'

const container = document.getElementById('root')
if (!container) {
  throw new Error('Root container missing in index.html')
}

render(<App />, container)

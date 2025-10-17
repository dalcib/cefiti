import { render } from 'preact'
import { App } from './app.tsx'

/* import './css/estilo-abas.css'
import './css/estilo-formulario.css'
import './css/estilo-impressao.css'
import './css/estilo-link.css'
import './css/estilo-menu.css'
import './css/estilo-tabela.css'
import './css/estilo-template.css' */
import './css/main.css'
import './css/app.css'

const container = document.getElementById('root')
if (!container) {
  throw new Error('Root container missing in index.html')
}

render(<App />, container)

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./sw.js')
    .then(() => {
      console.log('Service worker registered!')
    })
    .catch((error) => {
      console.warn('Error registering service worker:')
      console.warn(error)
    })
}

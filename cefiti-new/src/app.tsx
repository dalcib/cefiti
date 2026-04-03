import Base from './base.tsx'
import { Botton } from './botton.tsx'
import Form from './form.tsx'
import { Head } from './head.tsx'
import Result from './result.tsx'
import Status from './status.tsx'
import { store } from './store.ts'

export const App = () => (
  <div id="resolucao">
    <Head />
    <div id="corpo">
      <div id="conteúdo">
        {store.view === 'home' && <Form />}
        {store.view === 'result' && <Result />}
        {store.view === 'base' && <Base />}
        {store.view === 'status' && <Status />}
      </div>
    </div>
    <Botton />
  </div>
)

import Base from './base.tsx'
import { Botton } from './botton.tsx'
import Form from './form.tsx'
import { Head } from './head.tsx'
import Result from './result.tsx'
import Status from './status.tsx'
import { storeUi } from './store-ui.ts'

export const App = () => (
  <div id="resolucao">
    <Head />
    <div id="corpo">
      <div id="conteúdo">
        {storeUi.view === 'home' && <Form />}
        {storeUi.view === 'result' && <Result />}
        {storeUi.view === 'base' && <Base />}
        {storeUi.view === 'status' && <Status />}
      </div>
    </div>
    <Botton />
  </div>
)

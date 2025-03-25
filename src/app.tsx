import Base from './base.tsx'
import Result from './result.tsx'
import Form from './form.tsx'
import { Head } from './head.tsx'
import { Botton } from './botton.tsx'

export const App = () => (
  <div id="resolucao">
    <Head />
    <div id="corpo">
      <div id="conteúdo">
        <Form />
        <Result />
        <Base />
      </div>
    </div>
    <Botton />
  </div>
)

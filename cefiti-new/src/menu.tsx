import { storeUi } from './store-ui'

const Menu = () => {
  //const store = useStore()
  return (
    <div id="moldura-navegacao-global">
      <div id="navegacao-global">
        <p>
          <span>
            <button type="button" onClick={() => storeUi.handleMenu('Base')}>
              Regras
            </button>
          </span>
          <span>
            <button type="button" onClick={() => storeUi.handleMenu('Status')}>
              Status
            </button>
          </span>
          <span title="Para salvar o resultado como PDF, utilize o navegador Chrome, e altere a impressora para 'Salvar como PDF' na página de impressão">
            <button type="button" onClick={() => storeUi.handleMenu('Print')}>
              Imprimir
            </button>
          </span>
          <span>
            <button type="button" onClick={() => storeUi.handleMenu('Nova')}>
              NOVA CONSULTA
            </button>
          </span>
        </p>
      </div>
    </div>
  )
}

export default Menu

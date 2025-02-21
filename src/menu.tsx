import { useStore } from './store'

const Menu = () => {
  const store = useStore()
  return (
    <div id="moldura-navegacao-global">
      <div id="navegacao-global">
        <p>
          <span>
            <a href="#" onClick={() => store.handleMenu('Base')}>
              Ver Base de Dados
            </a>
          </span>
          <span title="Para salvar o resultado como PDF, utilize o navegador Chrome, e altere a impressora para 'Salvar como PDF' na página de impressão">
            <a href="#" onClick={() => store.handleMenu('Print')}>
              Imprimir
            </a>
          </span>
          <span>
            <a href="#" onClick={() => store.handleMenu('Nova')}>
              NOVA CONSULTA
            </a>
          </span>
        </p>
      </div>
    </div>
  )
}

export default Menu

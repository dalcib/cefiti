import { version } from './../package.json'
import Menu from './menu.tsx'

export const Head = () => (
  <>
    <div id="moldura-topo" /* style={{ display: 'flex' }} */>
      <div id="topo">
        <div id="identificacao-ministerio">
          <span>
            <span className="ministerio-text">
              Ministério da Agricultura e Pecuária
            </span>
            <div id="imagemGov">
              <a
                href="http://www.brasil.gov.br"
                target="_blank"
                rel="noopener noreferrer"
                id="brasilgov"
                className="visually-hidden"
                aria-label="Governo Federal do Brasil"
              >
                Brasil.gov.br
              </a>
            </div>
          </span>
        </div>
        <div id="identificacao-sistema" style={{ float: 'none' }}>
          <br />
          <div
            style={{
              float: 'right',
              color: '#fff',
              padding: '5px 10px 5px 15px',
            }}
          >
            <p>Versão {version}</p>
          </div>
          <h1>CEFiTI</h1>
          <div
            style={{
              float: 'right',
              color: '#fff',
              padding: '5px 10px 5px 15px',
            }}
          >
            <p>Data: {new Date().toLocaleDateString('pt-BR')}</p>
          </div>
          <h2>
            Catálogo de Exigências Fitossanitárias para o Trânsito Interestadual
          </h2>
        </div>
        <div id="dados-login" />
      </div>
    </div>
    <Menu />
  </>
)

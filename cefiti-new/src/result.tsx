import { useSignal } from '@preact/signals'
import { storeDb } from './store-db.ts'
import { storeUi } from './store-ui.ts'
import type { PestSearchResult } from './types'

function Result() {
  const isExpanded = useSignal(false)
  if (!storeDb.completed) return <div />

  return (
    <div>
      <br />
      <h3>
        Exigências Fitossanitárias para o trânsito de {storeDb.dados.prod} de{' '}
        {storeDb.dados.hospVul} <i>({storeDb.dados.hospSci})</i> de{' '}
        {storeDb.dados.municipioOrigem} - {storeDb.dados.orig} para{' '}
        {storeDb.dados.municipioDestino} - {storeDb.dados.dest}
      </h3>
      <div className={storeDb.empty ? '' : 'hidden'}>
        <br />
        <br />
        <span className="empty">
          <div>
            <p>SEM EXIGÊNCIAS PARA O TRÂNSITO</p>
          </div>
        </span>
        <br />
      </div>

      {storeDb.result.map((pest: PestSearchResult, i: number) => {
        return (
          <div key={`${pest.id}${i}`}>
            <hr />
            <h4 className="h4" style={{ textAlign: 'left', float: 'left' }}>
              <i>{pest.prag}</i> - {pest.pragc}
            </h4>
            <a
              className="small"
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.google.com.br/search?site=imghp&tbm=isch&q=${pest.prag}`}
              style={{ textAlign: 'right', float: 'right' }}
            >
              [FOTOS DA PRAGA]
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {'          '}
            <br />
            {pest.files?.map((file, iii) => {
              return (
                <div key={`${file.id}${iii}`}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`leg.html?id=${file.id}`}
                  >
                    {file.leg}, de {file.data}
                  </a>
                  <br />
                </div>
              )
            })}
            {pest.rules.map((rule, ruleIdx) => (
              <div key={`${pest.id}-rule-${ruleIdx}`}>
                <span className="small underline">{rule.desc}</span>
                <br />
                <span className="small underline">
                  {rule.status_origem.join(', ')}
                </span>{' '}
                para{' '}
                <span className="small underline">
                  {rule.status_destino.join(', ')}
                </span>
                {rule.exig?.map((exig, ii) => {
                  return (
                    <div style={{ margin: '6px' }} key={`${ruleIdx}-${ii}`}>
                      <span>
                        {ii + 1} - {exig}
                      </span>
                    </div>
                  )
                })}
                <span className="small underline">
                  Embasamento legal: {rule.leg}
                </span>
                <br />
                <br />
              </div>
            ))}
          </div>
        )
      })}

      <div className={storeDb.empty ? 'hidden' : ''}>
        <button
          type="button"
          onClick={() => (isExpanded.value = !isExpanded.value)}
          className="pointer underline"
          style={{
            margin: '15px 0',
            textAlign: 'center',
            color: '#0056b3',
            fontSize: '1.1em',
            fontWeight: 'bold',
            background: 'none',
            border: 'none',
            width: '100%',
            cursor: 'pointer',
          }}
          aria-expanded={isExpanded.value}
        >
          {isExpanded.value ? '⏶ ' : '⏷ '} Para trânsito nacional de partida de
          importação ou exportação, clique aqui
        </button>

        {isExpanded.value && (
          <div
            style={{
              padding: '15px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              backgroundColor: '#fbfbfb',
              marginBottom: '20px',
            }}
          >
            <hr />
            <h4 className="h4">TRÂNSITO NACIONAL DE PARTIDA IMPORTADA</h4>
            <div style={{ margin: '6px' }}>
              <span>
                1 – SE A PARTIDA AINDA NÃO FOI INTERNALIZADA PELO MAPA E ESTIVER
                EM TRÂNSITO A UMA ÁREA ALFANDEGADA NO INTERIOR DO BRASIL:
              </span>
              <br />
              <span>
                - Certificado Fitossanitário ou Certificado Fitossanitário de
                Reexportação;
              </span>
            </div>
            <div style={{ margin: '6px' }}>
              <span>
                2 – SE A PARTIDA JÁ FOI INTERNALIZADA PELO MAPA E ESTIVER EM
                TRÂNSITO AO PONTO DE DESTINO DECLARADO NA IMPORTAÇÃO:
              </span>
              <br />
              <span>
                - Cópia autenticada do Certificado Fitossanitário ou do
                Certificado Fitossanitário de Reexportação;{' '}
              </span>
              <br />
              <span>
                - Original ou cópia autenticada do Requerimento para
                Fiscalização de Produtos Agropecuários, emitido pelo MAPA;
              </span>
            </div>
            <div style={{ margin: '6px' }}>
              <span>
                3 – SE A PARTIDA JÁ FOI INTERNALIZADA PELO MAPA E ESTIVER SAINDO
                DO DESTINO DECLARADO NA IMPORTAÇÃO, EM DIREÇÃO A QUALQUER UF:
              </span>
              <br />
              <span>
                - Cumprir os requisitos fitossanitários para o trânsito
                interestadual.
              </span>
            </div>
            <hr />
            <h4 className="h4">TRÂNSITO NACIONAL DE PARTIDA EXPORTADA</h4>
            <div style={{ margin: '6px' }}>
              <span>
                1 – SE A PARTIDA JÁ ESTIVER COM CERTIFICADO FITOSSANITÁRIO NO
                INTERIOR DO BRASIL, EM TRÂNSITO PARA PONTO DE EGRESSO:
              </span>
              <br />
              <span>- Certificado Fitossanitário.</span>
            </div>
            <hr />
            <h4 className="h4">LEGISLAÇÃO GERAL</h4>
            <a target="_blank" href="leg.html?id=IN28-2016" rel="noreferrer">
              Instrução Normativa MAPA Nº 28, de 24 de agosto de 2016
            </a>
            <br />
            <hr />
          </div>
        )}
      </div>
      <div style={{ textAlign: 'center' }}>
        <button
          onClick={() => storeUi.handleMenu('Voltar')}
          className="form-button"
          type="button"
        >
          Voltar
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button
          onClick={() => storeUi.handleMenu('Nova')}
          className="form-button"
          type="button"
        >
          Nova Consulta
        </button>
      </div>
    </div>
  )
}

export default Result

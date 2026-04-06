import { storeDb } from './store-db.ts'
import { storeUi } from './store-ui.ts'
import type { PestSearchResult } from './types'

function Result() {
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
        <hr />
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

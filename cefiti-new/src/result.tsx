import { type PestSearchResult, store } from './store.ts'

function Result() {
  return (
    <div>
      <div className={store.completed && store.searched ? '' : 'hidden'}>
        <br />
        <h3>
          Exigências Fitossanitárias para o trânsito de {store.dados.prod} de{' '}
          {store.dados.hospVul} <i>({store.dados.hospSci})</i> de{' '}
          {store.dados.municipioOrigem} - {store.dados.orig} para{' '}
          {store.dados.municipioDestino} - {store.dados.dest}
        </h3>
        <div className={store.empty ? '' : 'hidden'}>
          <br />
          <br />
          <span className="empty">
            <div>
              <p>SEM EXIGÊNCIAS PARA O TRÂNSITO</p>
            </div>
          </span>
          <br />
        </div>

        {store.result.map((pest: PestSearchResult, i: number) => {
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
                      href={`leg/${file.id}.pdf`}
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

        <div className={store.empty ? 'hidden' : ''}>
          <hr />
        </div>
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={() => store.handleMenu('Voltar')}
            className="form-button"
            type="button"
          >
            Voltar
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button
            onClick={() => store.handleMenu('Nova')}
            className="form-button"
            type="button"
          >
            Nova Consulta
          </button>
        </div>
      </div>
    </div>
  )
}

export default Result

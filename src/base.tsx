import { useStore } from './store.ts'

const Base = () => {
  const store = useStore()
  return store.exibeBase ?
      <div>
        <br />
        <table style={{ width: '100%' }} className="table-grid">
          <caption>Exigências</caption>
          <thead>
            <tr>
              <th style={{ width: '10%' }}>Descrição</th>
              <th style={{ width: '20%' }}>Hospedeiro</th>
              <th style={{ width: '10%' }}>Partida</th>
              <th style={{ width: '10%' }}>Origem</th>
              <th style={{ width: '10%' }}>Destino</th>
              <th style={{ width: '15%' }}>Legislação</th>
              <th style={{ width: '30%' }}>Exigências</th>
            </tr>
          </thead>
          <tbody>
            {store.db.map((item: Db, i: number) => {
              return (
                <tr key={i}>
                  <td style={{ width: '10%' }}>
                    <span>{item.desc}</span>
                  </td>
                  <td style={{ width: '20%' }} className="italic">
                    <span>{item.hosp.toString()}</span>
                  </td>
                  <td style={{ width: '10%' }}>
                    <span>{item.part.toString()}</span>
                  </td>
                  <td style={{ width: '10%' }}>
                    <span>{item.orig.toString()}</span>
                  </td>
                  <td style={{ width: '10%' }}>
                    <span>{item.dest.toString()}</span>
                  </td>
                  <td style={{ width: '15%' }}>
                    {item.files.map((file) => (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        key={file.link}
                        href={`leg/${file.link}`}
                      >
                        {file.leg}
                      </a>
                    ))}
                    <br />
                    <br />
                    <span>{item.pragc}</span>
                    <br />
                    <br />
                    <span className="italic">{item.prag}</span>
                  </td>
                  <td style={{ width: '30%' }}>
                    <div style={{ margin: '6px' }}>
                      {item.exig.map((exigen, ix) => {
                        return (
                          <p key={ix}>
                            {ix + 1} - {exigen}
                          </p>
                        )
                      })}
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
          <tfoot className="form-barra-botoes">
            <tr>
              <td />
            </tr>
          </tfoot>
        </table>
      </div>
    : <div />
}

export default Base

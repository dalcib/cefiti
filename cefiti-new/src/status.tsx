import { Fragment, type JSX } from 'preact'
import { type DB_StatusMunicipio, pragas, status_municipio } from '#db-next'
import { municipiosBrutos } from '#municipios'

const municipalityMap = new Map<number, string>()
municipalityMap.set(9999, 'Todos')

if (municipiosBrutos) {
  for (const raw of municipiosBrutos) {
    const id = Number.parseInt(raw.slice(2, 6), 10)
    const name = raw.slice(6).trim()
    municipalityMap.set(id, name)
  }
}

const Status = () => {
  // Group data by Pest to create separator rows
  const pestGroups = (status_municipio as unknown as DB_StatusMunicipio[]).map(
    (p) => {
      const pragaInfo = pragas.find((pr) => pr.prag === p.praga)
      return {
        praga: p.praga,
        nomeComum: pragaInfo?.pragc || '',
        statuses: p.status.map((s) => ({
          status: s.status_fitossanitário,
          states: s.estados.map((e) => ({
            uf: e.uf,
            municipios: e.municipios
              .map((mId: number) => municipalityMap.get(mId) || String(mId))
              .sort((a, b) => a.localeCompare(b))
              .join(', '),
          })),
        })),
      }
    },
  )

  const cellStyle: JSX.CSSProperties = {
    border: '1px solid #ccc',
    padding: '8px',
    verticalAlign: 'top',
  }

  const headerStyle: JSX.CSSProperties = {
    ...cellStyle,
    background: '#f9f9f9',
    fontWeight: 'normal',
    fontSize: '1.1em',
  }

  return (
    <div>
      <br />
      <table
        style={{ width: '100%', borderCollapse: 'collapse' }}
        className="table-grid"
      >
        <caption>Status Fitossanitário por Município</caption>
        <thead>
          <tr>
            <th style={{ ...cellStyle, width: '15%' }}>Status</th>
            <th style={{ ...cellStyle, width: '5%' }}>UF</th>
            <th style={{ ...cellStyle, width: '80%' }}>Municípios</th>
          </tr>
        </thead>
        <tbody>
          {pestGroups.map((pGroup, pi) => (
            <Fragment key={pi}>
              {/* Pest Separator Row */}
              <tr>
                <td colSpan={3} style={headerStyle}>
                  <strong className="italic">{pGroup.praga}</strong>
                  {pGroup.nomeComum && (
                    <>
                      {' - '}
                      <strong>{pGroup.nomeComum}</strong>
                    </>
                  )}
                </td>
              </tr>
              {/* Status and Municipality Rows */}
              {pGroup.statuses.map((sGroup, si) => (
                <Fragment key={`${pi}-${si}`}>
                  {sGroup.states.map((state, ssi) => (
                    <tr key={`${pi}-${si}-${ssi}`}>
                      {ssi === 0 && (
                        <td rowSpan={sGroup.states.length} style={cellStyle}>
                          {sGroup.status}
                        </td>
                      )}
                      <td style={cellStyle}>{state.uf}</td>
                      <td style={cellStyle}>{state.municipios}</td>
                    </tr>
                  ))}
                </Fragment>
              ))}
            </Fragment>
          ))}
        </tbody>
        <tfoot className="form-barra-botoes">
          <tr>
            <td colSpan={3} />
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default Status

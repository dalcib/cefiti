import { store } from '../store'

export function StatusMunicipiosView() {
  const { statusMunicipios: state } = store.views

  const STATUS_LIST = [
    'Área Com Ocorrência',
    'Área Livre de Praga',
    'Área Sem Registro',
    'Área Sem Registro de UF Com Ocorrência',
    'UF Sem Registro',
    'Zona Tampão',
    'Área de SMR',
    'Área de Status Desconhecido',
    'Área Sob Erradicação',
  ]

  const getInStatus = () => {
    if (!state.currentEntry || !state.selectedStatus || !state.selectedUF) return []
    const statusObj = state.currentEntry.status.find(
      (s) => s.status_fitossanitário === state.selectedStatus,
    )
    if (!statusObj) return []
    const stateObj = statusObj.estados.find((e) => e.uf === state.selectedUF)
    return stateObj ? stateObj.municipios : []
  }

  const getAvailable = () => {
    if (!state.selectedUF) return []
    const inStatus = getInStatus()
    return state.municipios.filter(
      (m) => m.uf === state.selectedUF && !inStatus.includes(m.code),
    )
  }

  const handlePragaChange = (praga: string) => {
    state.selectedPraga = praga
    store.updateStatusMunicipiosEntry()
  }

  const handleInclude = () => {
    if (!state.currentEntry || !state.selectedStatus || !state.selectedUF) return
    const newEntry = { ...state.currentEntry }
    let statusObj = newEntry.status.find(
      (s) => s.status_fitossanitário === state.selectedStatus,
    )
    if (!statusObj) {
      statusObj = { status_fitossanitário: state.selectedStatus, estados: [] }
      newEntry.status.push(statusObj)
    }
    let stateObj = statusObj.estados.find((e) => e.uf === state.selectedUF)
    if (!stateObj) {
      const stateData = store.estados.find((e) => e.UF === state.selectedUF)
      stateObj = { uf: state.selectedUF, ibge: stateData?.ibge || 0, municipios: [] }
      statusObj.estados.push(stateObj)
    }

    stateObj.municipios = Array.from(
      new Set([...stateObj.municipios, ...state.selectedInAvailable]),
    ).sort((a, b) => a - b)

    state.currentEntry = newEntry
    state.selectedInAvailable = []
  }

  const handleExclude = () => {
    if (!state.currentEntry || !state.selectedStatus || !state.selectedUF) return
    const newEntry = { ...state.currentEntry }
    const statusObj = newEntry.status.find(
      (s) => s.status_fitossanitário === state.selectedStatus,
    )
    if (!statusObj) return
    const stateObj = statusObj.estados.find((e) => e.uf === state.selectedUF)
    if (!stateObj) return

    stateObj.municipios = stateObj.municipios.filter(
      (id) => !state.selectedInStatus.includes(id),
    )
    state.currentEntry = newEntry
    state.selectedInStatus = []
  }

  const handleSave = async () => {
    if (!state.currentEntry) return
    try {
      await store.saveStatusMunicipio(state.currentEntry)
      alert('Dados salvos com sucesso!')
    } catch (error) {
      console.error('Error saving status:', error)
      alert('Erro ao salvar dados.')
    }
  }

  if (store.loading.pragas || store.loading.estados || store.loading.status_municipios)
    return <p>Carregando dados...</p>

  return (
    <div id="conteudo">
      <div style="margin-bottom: 20px;">
        <h4>STATUS FITOSSANITÁRIO POR MUNICÍPIO</h4>
      </div>
      <div
        className="card"
        style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px;"
      >
        <div>
          <label htmlFor="praga-select">PRAGA</label>
          <select
            id="praga-select"
            className="form-select"
            value={state.selectedPraga}
            style="width: 100%; padding: 5px;"
            onChange={(e) => handlePragaChange((e.target as HTMLSelectElement).value)}
          >
            <option value="">Selecione a Praga</option>
            {store.pragas.map((p) => (
              <option key={p.prag} value={p.prag}>
                {p.prag}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="status-select">STATUS</label>
          <select
            id="status-select"
            className="form-select"
            value={state.selectedStatus}
            style="width: 100%; padding: 5px;"
            onChange={(e) =>
              (state.selectedStatus = (e.target as HTMLSelectElement).value)
            }
          >
            <option value="">Selecione o Status</option>
            {STATUS_LIST.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="estado-select">ESTADO</label>
          <select
            id="estado-select"
            className="form-select"
            value={state.selectedUF}
            style="width: 100%; padding: 5px;"
            onChange={(e) =>
              (state.selectedUF = (e.target as HTMLSelectElement).value)
            }
          >
            <option value="">Selecione o Estado</option>
            {store.estados.map((e) => (
              <option key={e.UF} value={e.UF}>
                {e.estado} ({e.UF})
              </option>
            ))}
          </select>
        </div>
      </div>

      {state.selectedPraga && state.selectedStatus && state.selectedUF && (
        <div className="card" style="margin-top: 20px;">
          <h5>ASSOCIAÇÃO DE MUNICÍPIOS</h5>
          <br />
          <div style="display: flex; gap: 20px; align-items: stretch; height: 400px;">
            <div style="flex: 1; display: flex; flex-direction: column;">
              <label htmlFor="avail-muni-select">Municípios Disponíveis</label>
              <select
                id="avail-muni-select"
                multiple
                className="form-textarea"
                style="flex-grow: 1; margin-top: 5px; font-size: 0.9em;"
                onInput={(e) => {
                  const opts = (e.target as HTMLSelectElement).selectedOptions
                  state.selectedInAvailable = Array.from(opts).map((o) => Number(o.value))
                }}
              >
                {getAvailable().map((m) => (
                  <option key={m.id} value={m.code}>
                    {m.nome}
                  </option>
                ))}
              </select>
            </div>

            <div style="display: flex; flex-direction: column; justify-content: center; gap: 10px;">
              <button
                type="button"
                className="form-button"
                style="padding: 10px; font-weight: bold; min-width: 40px;"
                onClick={handleInclude}
                title="Incluir selecionados"
              >
                &gt;
              </button>
              <button
                type="button"
                className="form-button"
                style="padding: 10px; font-weight: bold; min-width: 40px;"
                onClick={handleExclude}
                title="Excluir selecionados"
              >
                &lt;
              </button>
            </div>

            <div style="flex: 1; display: flex; flex-direction: column;">
              <label htmlFor="status-muni-select">
                Municípios com este Status
              </label>
              <select
                id="status-muni-select"
                multiple
                className="form-textarea"
                style="flex-grow: 1; margin-top: 5px; font-size: 0.9em;"
                onInput={(e) => {
                  const opts = (e.target as HTMLSelectElement).selectedOptions
                  state.selectedInStatus = Array.from(opts).map((o) => Number(o.value))
                }}
              >
                {getInStatus().map((code) => {
                  const m = state.municipios.find(
                      (m) => m.uf === state.selectedUF && m.code === code,
                  )
                  return (
                    <option key={code} value={code}>
                      {m ? m.nome : code}
                    </option>
                  )
                })}
              </select>
            </div>
          </div>
          <br />
          <button
            type="button"
            className="form-button"
            style="width: 100%; padding: 10px; font-size: 1.1em;"
            onClick={handleSave}
          >
            SALVAR ALTERAÇÕES PARA ESTA PRAGA / ESTADO
          </button>
        </div>
      )}
    </div>
  )
}

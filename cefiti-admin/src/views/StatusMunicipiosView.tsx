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
    <div>
      <h1>Status Fitossanitário por Município</h1>
      <div
        className="card"
        style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem;"
      >
        <div>
          <label htmlFor="praga-select">Praga</label>
          <select
            id="praga-select"
            value={state.selectedPraga}
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
          <label htmlFor="status-select">Status</label>
          <select
            id="status-select"
            value={state.selectedStatus}
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
          <label htmlFor="estado-select">Estado</label>
          <select
            id="estado-select"
            value={state.selectedUF}
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
        <div className="card">
          <div style="display: flex; gap: 2rem; align-items: stretch; height: 400px;">
            <div style="flex: 1; display: flex; flex-direction: column;">
              <label htmlFor="avail-muni-select">Municípios Disponíveis</label>
              <select
                id="avail-muni-select"
                multiple
                style="flex-grow: 1; margin-top: 0.5rem;"
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

            <div style="display: flex; flex-direction: column; justify-content: center; gap: 1rem;">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleInclude}
                aria-label="Incluir municípios selecionados"
              >
                &gt;
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleExclude}
                aria-label="Excluir municípios selecionados"
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
                style="flex-grow: 1; margin-top: 0.5rem;"
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
          <button
            type="button"
            className="btn btn-primary"
            style="margin-top: 2rem; width: 100%;"
            onClick={handleSave}
          >
            Salvar Alterações
          </button>
        </div>
      )}
    </div>
  )
}

import { store } from '../store'

export function StatusMunicipiosView() {
  const { statusMunicipios: state } = store.views

  const isDirty = () => {
    if (!state.currentEntry) return false
    return JSON.stringify(state.currentEntry) !== state.originalEntryJson
  }

  const confirmChange = () => {
    if (isDirty()) {
      const ok = confirm(
        'Existem alterações não salvas nesta associação. Deseja descartar?',
      )
      if (ok) {
        state.currentEntry = JSON.parse(state.originalEntryJson)
        return true
      }
      return false
    }
    return true
  }

  const getInStatus = (): Record<string, string> => {
    if (!state.currentEntry || !state.selectedStatus || !state.selectedUF)
      return {}
    const statusObj = state.currentEntry.status.find(
      (s) => s.status_fitossanitário === state.selectedStatus,
    )
    if (!statusObj) return {}
    const stateObj = statusObj.estados.find((e) => e.uf === state.selectedUF)
    return stateObj ? stateObj.municipios : {}
  }

  const getInStatusList = () => {
    const inStatusMap = getInStatus()
    return Object.keys(inStatusMap).sort()
  }

  const getAvailable = () => {
    if (!state.selectedUF) return []
    const inStatusMap = getInStatus()
    return state.municipios.filter(
      (m) => m.uf === state.selectedUF && !(m.id.slice(2) in inStatusMap),
    )
  }

  const handlePragaChange = (praga: string) => {
    if (!confirmChange()) return
    state.selectedPraga = praga
    state.selectedStatus = ''
    state.selectedUF = ''
    store.updateStatusMunicipiosEntry()
  }

  const handleStatusChange = (status: string) => {
    if (!confirmChange()) return
    state.selectedStatus = status
    state.selectedUF = ''
  }

  const handleUFChange = (uf: string) => {
    if (!confirmChange()) return
    state.selectedUF = uf
  }

  const addStatus = (status: string) => {
    if (!state.currentEntry) return
    if (state.currentEntry.status.some((s) => s.status_fitossanitário === status))
      return
    const newEntry = { ...state.currentEntry }
    newEntry.status.push({ status_fitossanitário: status, estados: [] })
    state.currentEntry = newEntry
    state.selectedStatus = status
    state.selectedUF = ''
    state.showAddStatus = false
  }

  const addEstado = (uf: string) => {
    if (!state.currentEntry || !state.selectedStatus) return
    const statusObj = state.currentEntry.status.find(
      (s) => s.status_fitossanitário === state.selectedStatus,
    )
    if (!statusObj) return
    if (statusObj.estados.some((e) => e.uf === uf)) return

    const stateData = store.estados.find((e) => e.UF === uf)
    const newEntry = { ...state.currentEntry }
    const updatedStatusObj = newEntry.status.find(
      (s) => s.status_fitossanitário === state.selectedStatus,
    )
    updatedStatusObj?.estados.push({
      uf,
      ibge: stateData?.ibge || 0,
      municipios: {},
    })
    state.currentEntry = newEntry
    state.selectedUF = uf
    state.showAddEstado = false
  }

  const handleInclude = () => {
    if (!state.currentEntry || !state.selectedStatus || !state.selectedUF)
      return
    const newEntry: DB_StatusMunicipio = JSON.parse(
      JSON.stringify(state.currentEntry),
    )
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
      stateObj = {
        uf: state.selectedUF,
        ibge: stateData?.ibge || 0,
        municipios: {},
      }
      statusObj.estados.push(stateObj)
    }

    const inStatus = stateObj.municipios
    state.selectedInAvailable.forEach((code) => {
      if (code === '9999-TODOS') {
        inStatus['9999'] = 'Todos'
        return
      }
      const muni = state.municipios.find((m) => m.id === code)
      if (muni) {
        inStatus[muni.id.slice(2)] = muni.nome
      }
    })

    state.currentEntry = newEntry
    state.selectedInAvailable = []
  }

  const handleExclude = () => {
    if (!state.currentEntry || !state.selectedStatus || !state.selectedUF)
      return
    const newEntry: DB_StatusMunicipio = JSON.parse(
      JSON.stringify(state.currentEntry),
    )
    const statusObj = newEntry.status.find(
      (s) => s.status_fitossanitário === state.selectedStatus,
    )
    if (!statusObj) return
    const stateObj = statusObj.estados.find((e) => e.uf === state.selectedUF)
    if (!stateObj) return

    const inStatus = stateObj.municipios
    state.selectedInStatus.forEach((code) => {
      delete inStatus[code]
    })

    state.currentEntry = newEntry
    state.selectedInStatus = []
  }

  const handleSave = async () => {
    if (!state.currentEntry) return

    // 1. Pruning: Remove empty states and empty statuses before saving
    const prunedEntry: DB_StatusMunicipio = JSON.parse(
      JSON.stringify(state.currentEntry),
    )
    prunedEntry.status = prunedEntry.status
      .map((s) => ({
        ...s,
        estados: s.estados.filter((e) => Object.keys(e.municipios).length > 0),
      }))
      .filter((s) => s.estados.length > 0)

    // 2. Validation: "Todos" (9999) cannot coexist with other municipalities in the same status
    for (const s of prunedEntry.status) {
      for (const e of s.estados) {
        const codes = Object.keys(e.municipios)
        if (codes.includes('9999') && codes.length > 1) {
          alert(
            `Erro: O status "${s.status_fitossanitário}" no estado ${e.uf} contém "Todos" e outros municípios selecionados. Se "Todos" estiver presente, não pode haver outros municípios.`,
          )
          return
        }
      }
    }

    try {
      await store.saveStatusMunicipio(prunedEntry)
      alert('Dados salvos com sucesso!')
      state.selectedPraga = ''
      state.selectedStatus = ''
      state.selectedUF = ''
      state.currentEntry = null
    } catch (error) {
      console.error('Error saving status:', error)
      alert('Erro ao salvar dados.')
    }
  }

  if (
    store.loading.pragas ||
    store.loading.estados ||
    store.loading.status_municipios
  )
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
            onChange={(e) =>
              handlePragaChange((e.target as HTMLSelectElement).value)
            }
          >
            <option value="">Selecione a Praga</option>
            {store.pragas.map((p) => (
              <option key={p.prag} value={p.prag}>
                {p.prag}
              </option>
            ))}
          </select>
        </div>
        <div style="position: relative;">
          <label htmlFor="status-select">STATUS</label>
          <div style="display: flex; gap: 5px;">
            <select
              id="status-select"
              className="form-select"
              value={state.selectedStatus}
              style="flex: 1; padding: 5px;"
              onChange={(e) =>
                handleStatusChange((e.target as HTMLSelectElement).value)
              }
            >
              <option value="">Selecione o Status</option>
              {state.currentEntry?.status.map((s) => (
                <option
                  key={s.status_fitossanitário}
                  value={s.status_fitossanitário}
                >
                  {s.status_fitossanitário}
                </option>
              ))}
            </select>
            <button
              type="button"
              className="form-button"
              style="padding: 0 10px;"
              onClick={() => (state.showAddStatus = !state.showAddStatus)}
              title="Adicionar novo status a esta praga"
            >
              +
            </button>
          </div>
          {state.showAddStatus && (
            <div
              className="card"
              style="position: absolute; top: 100%; left: 0; right: 0; z-index: 10; margin-top: 5px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"
            >
              <p style="margin-bottom: 5px; font-weight: bold; font-size: 0.8em;">
                ADICIONAR STATUS:
              </p>
              <select
                className="form-select"
                style="width: 100%; padding: 5px; font-size: 0.9em;"
                onChange={(e) => addStatus((e.target as HTMLSelectElement).value)}
              >
                <option value="">Escolha um status do catálogo...</option>
                {store.catalogos.status_fitossanitario
                  .filter(
                    (cat) =>
                      cat !== 'Todas as Áreas' &&
                      !state.currentEntry?.status.some(
                        (s) => s.status_fitossanitário === cat,
                      ),
                  )
                  .map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
              </select>
            </div>
          )}
        </div>
        <div style="position: relative;">
          <label htmlFor="uf-select">ESTADO</label>
          <div style="display: flex; gap: 5px;">
            <select
              id="uf-select"
              className="form-select"
              value={state.selectedUF}
              style="flex: 1; padding: 5px;"
              onChange={(e) =>
                handleUFChange((e.target as HTMLSelectElement).value)
              }
            >
              <option value="">Selecione o Estado</option>
              {state.currentEntry?.status
                .find((s) => s.status_fitossanitário === state.selectedStatus)
                ?.estados.map((e) => {
                  const estado = store.estados.find((est) => est.UF === e.uf)
                  return (
                    <option key={e.uf} value={e.uf}>
                      {estado?.estado || e.uf} ({e.uf})
                    </option>
                  )
                })}
            </select>
            <button
              type="button"
              className="form-button"
              style="padding: 0 10px;"
              onClick={() => (state.showAddEstado = !state.showAddEstado)}
              title="Adicionar novo estado a este status"
              disabled={!state.selectedStatus}
            >
              +
            </button>
          </div>
          {state.showAddEstado && (
            <div
              className="card"
              style="position: absolute; top: 100%; left: 0; right: 0; z-index: 10; margin-top: 5px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"
            >
              <p style="margin-bottom: 5px; font-weight: bold; font-size: 0.8em;">
                ADICIONAR ESTADO:
              </p>
              <select
                className="form-select"
                style="width: 100%; padding: 5px; font-size: 0.9em;"
                onChange={(e) => addEstado((e.target as HTMLSelectElement).value)}
              >
                <option value="">Escolha um estado...</option>
                {store.estados
                  .filter((est) => {
                    const statusObj = state.currentEntry?.status.find(
                      (s) => s.status_fitossanitário === state.selectedStatus,
                    )
                    return !statusObj?.estados.some((e) => e.uf === est.UF)
                  })
                  .map((e) => (
                    <option key={e.UF} value={e.UF}>
                      {e.estado} ({e.UF})
                    </option>
                  ))}
              </select>
            </div>
          )}
        </div>
      </div>

      {state.selectedPraga && state.selectedStatus && state.selectedUF && (
        <div className="card" style="margin-top: 20px;">
          <h5>ASSOCIAÇÃO DE MUNICÍPIOS</h5>
          <div style="display: flex; gap: 20px; align-items: flex-start; margin-top: 15px;">
            <div style="flex: 1; display: flex; flex-direction: column; gap: 5px;">
              <label htmlFor="avail-muni-select" style="margin: 0;">Municípios Disponíveis</label>
              <select
                id="avail-muni-select"
                multiple
                className="form-textarea"
                style="height: 300px; font-size: 0.9em; width: 100%;"
                onInput={(e) => {
                  const opts = (e.target as HTMLSelectElement).selectedOptions
                  state.selectedInAvailable = Array.from(opts).map((o) => o.value)
                }}
              >
                {(!('9999' in getInStatus())) && (
                  <option value="9999-TODOS">TODOS OS MUNICÍPIOS</option>
                )}
                {getAvailable().map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.nome}
                  </option>
                ))}
              </select>
            </div>

            <div style="display: flex; flex-direction: column; justify-content: center; gap: 10px; height: 320px;">
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

            <div style="flex: 1; display: flex; flex-direction: column; gap: 5px;">
              <label htmlFor="status-muni-select" style="margin: 0;">
                Municípios com este Status
              </label>
              <select
                id="status-muni-select"
                multiple
                className="form-textarea"
                style="height: 300px; font-size: 0.9em; width: 100%;"
                onInput={(e) => {
                  const opts = (e.target as HTMLSelectElement).selectedOptions
                  state.selectedInStatus = Array.from(opts).map((o) => o.value)
                }}
              >
                {getInStatusList().map((code) => {
                  const nameInMap = getInStatus()[code]
                  return (
                    <option key={code} value={code}>
                      {nameInMap || code}
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
            SALVAR ALTERAÇÕES PARA ESTA PRAGA/STATUS
          </button>
        </div>
      )}
    </div>
  )
}

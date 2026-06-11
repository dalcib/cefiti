import L from 'leaflet'
import { effect } from '@preact/signals'
import { type DB_StatusMunicipio, store } from '../store'

let disposeEffect: (() => void) | null = null
let mapInstance: L.Map | null = null
let stateOutlineLayer: L.GeoJSON | null = null
let fillLayer: L.GeoJSON | null = null
let lastUF = ''
let cachedGeoJSON: any = null
let cachedStateGeoJSON: any = null

export function StatusMunicipiosView() {
  const { statusMunicipios: state } = store.views

  const mapRefCallback = (el: HTMLDivElement | null) => {
    if (el) {
      if (mapInstance) {
        if (disposeEffect) {
          disposeEffect()
          disposeEffect = null
        }
        mapInstance.remove()
        mapInstance = null
      }

      mapInstance = L.map(el, {
        zoomControl: true,
        attributionControl: false,
      })

      disposeEffect = effect(() => {
        const activeUF = state.selectedUF
        const activeStatus = state.selectedStatus
        const currentEntry = state.currentEntry

        // Track changes to current entry and selected municipalities
        const inStatusObj = getInStatus()
        const selectedMuniCodesStr = JSON.stringify(inStatusObj)

        if (!activeUF || !activeStatus || !currentEntry) {
          if (stateOutlineLayer) stateOutlineLayer.remove()
          if (fillLayer) fillLayer.remove()
          return
        }

        const estadoObj = store.estados.find((e) => e.UF === activeUF)
        if (!estadoObj) return
        const ibgeCode = estadoObj.ibge

        const updateLayers = (stateGeo: any, munGeo: any) => {
          if (!mapInstance) return

          // Clear old layers
          if (stateOutlineLayer) stateOutlineLayer.remove()
          if (fillLayer) fillLayer.remove()

          // 1. Render state outline
          stateOutlineLayer = L.geoJSON(stateGeo, {
            style: {
              color: '#34495e',
              weight: 2,
              fillOpacity: 0,
              interactive: false,
            },
          }).addTo(mapInstance)

          // Fit bounds
          mapInstance.fitBounds(stateOutlineLayer.getBounds())

          // 2. Render filled municipalities
          const selectedMuniCodes = getInStatus()
          const isAllSelected = '9999' in selectedMuniCodes

          // Filter features
          const filteredFeatures = munGeo.features.filter((feature: any) => {
            if (isAllSelected) return true
            const codarea = feature.properties.codarea
            if (!codarea) return false
            const code4 = codarea.slice(2, 6)
            return code4 in selectedMuniCodes
          })

          const filteredGeo = {
            type: 'FeatureCollection',
            features: filteredFeatures,
          }

          fillLayer = L.geoJSON(filteredGeo, {
            style: {
              fillColor: '#d32f2f',
              fillOpacity: 0.6,
              stroke: false,
              interactive: false,
            },
          }).addTo(mapInstance)
        }

        if (lastUF !== activeUF || !cachedGeoJSON) {
          lastUF = activeUF
          cachedGeoJSON = null
          cachedStateGeoJSON = null

          Promise.all([
            fetch(
              `https://servicodados.ibge.gov.br/api/v2/malhas/${ibgeCode}?formato=application/vnd.geo+json`,
            ).then((r) => r.json()),
            fetch(
              `https://servicodados.ibge.gov.br/api/v2/malhas/${ibgeCode}?formato=application/vnd.geo+json&resolucao=5`,
            ).then((r) => r.json()),
          ])
            .then(([stateGeo, munGeo]) => {
              cachedStateGeoJSON = stateGeo
              cachedGeoJSON = munGeo
              updateLayers(stateGeo, munGeo)
            })
            .catch((err) => {
              console.error('Error loading geodata:', err)
            })
        } else {
          updateLayers(cachedStateGeoJSON, cachedGeoJSON)
        }
      })
    } else {
      if (disposeEffect) {
        disposeEffect()
        disposeEffect = null
      }
      if (mapInstance) {
        mapInstance.remove()
        mapInstance = null
      }
      stateOutlineLayer = null
      fillLayer = null
      cachedGeoJSON = null
      cachedStateGeoJSON = null
      lastUF = ''
    }
  }

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
    if (
      state.currentEntry.status.some((s) => s.status_fitossanitário === status)
    )
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
      <div className="view-title-container">
        <h4>STATUS FITOSSANITÁRIO POR MUNICÍPIO</h4>
      </div>
      <div className="card grid-3col">
        <div>
          <label htmlFor="praga-select">PRAGA</label>
          <select
            id="praga-select"
            className="form-select"
            value={state.selectedPraga}
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
        <div className="relative-container">
          <label htmlFor="status-select">STATUS</label>
          <div style="display: flex; gap: 5px;">
            <select
              id="status-select"
              className="form-select"
              value={state.selectedStatus}
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
            {!store.isReadOnly && (
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => (state.showAddStatus = !state.showAddStatus)}
                title="Adicionar novo status a esta praga"
              >
                +
              </button>
            )}
          </div>
          {state.showAddStatus && !store.isReadOnly && (
            <div className="card popup-card">
              <p className="form-legend">ADICIONAR STATUS:</p>
              <select
                className="form-select"
                onChange={(e) =>
                  addStatus((e.target as HTMLSelectElement).value)
                }
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
        <div className="relative-container">
          <label htmlFor="uf-select">ESTADO</label>
          <div style="display: flex; gap: 5px;">
            <select
              id="uf-select"
              className="form-select"
              value={state.selectedUF}
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
            {!store.isReadOnly && (
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => (state.showAddEstado = !state.showAddEstado)}
                title="Adicionar novo estado a este status"
                disabled={!state.selectedStatus}
              >
                +
              </button>
            )}
          </div>
          {state.showAddEstado && !store.isReadOnly && (
            <div className="card popup-card">
              <p className="form-legend">ADICIONAR ESTADO:</p>
              <select
                className="form-select"
                onChange={(e) =>
                  addEstado((e.target as HTMLSelectElement).value)
                }
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
          <div className="muni-association-container">
            <div className="muni-list-box">
              <label htmlFor="avail-muni-select" style="margin: 0;">
                Municípios Disponíveis
              </label>
              <select
                id="avail-muni-select"
                multiple
                className="form-textarea"
                style="height: 300px;"
                disabled={store.isReadOnly}
                onInput={(e) => {
                  const opts = (e.target as HTMLSelectElement).selectedOptions
                  state.selectedInAvailable = Array.from(opts).map(
                    (o) => o.value,
                  )
                }}
              >
                {!('9999' in getInStatus()) && (
                  <option value="9999-TODOS">TODOS OS MUNICÍPIOS</option>
                )}
                {getAvailable().map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.nome}
                  </option>
                ))}
              </select>
            </div>

            <div className="muni-actions-center">
              <button
                type="button"
                className="btn btn-primary"
                style="min-width: 40px;"
                onClick={handleInclude}
                disabled={store.isReadOnly}
                title="Incluir selecionados"
              >
                &gt;
              </button>
              <button
                type="button"
                className="btn btn-primary"
                style="min-width: 40px;"
                onClick={handleExclude}
                disabled={store.isReadOnly}
                title="Excluir selecionados"
              >
                &lt;
              </button>
            </div>

            <div className="muni-list-box">
              <label htmlFor="status-muni-select" style="margin: 0;">
                Municípios com este Status
              </label>
              <select
                id="status-muni-select"
                multiple
                className="form-textarea"
                style="height: 300px;"
                disabled={store.isReadOnly}
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
          
          <div
            id="map-container"
            style={{
              height: '400px',
              backgroundColor: '#f8f9fa',
              border: '1px solid #ddd',
              borderRadius: '4px',
              marginTop: '20px',
              marginBottom: '20px',
              position: 'relative',
              overflow: 'hidden',
              zIndex: 1,
            }}
            ref={mapRefCallback}
          />
          
          <br />
          {!store.isReadOnly && (
            <button
              type="button"
              className="btn btn-primary btn-full"
              onClick={handleSave}
            >
              SALVAR ALTERAÇÕES PARA ESTA PRAGA/STATUS
            </button>
          )}
        </div>
      )}
    </div>
  )
}

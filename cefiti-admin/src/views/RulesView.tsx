import { store } from '../store'

// O STATUS_LIST agora é obtido do store.catalogos.status_fitossanitario

const PART_OPTIONS = [
  'frutos',
  'mudas',
  'estacas',
  'flores',
  'plantas',
  'sementes',
  'partes de plantas',
  'veículos',
  'embalagens',
]

export function RulesView() {
  const { rules: state } = store.views

  const handleEdit = (r: any) => {
    state.editing = { ...r }
    state.isNew = false
  }

  const handleAdd = () => {
    state.editing = {
      prag: '',
      desc: '',
      part: [],
      status_origem: [],
      status_destino: [],
      exig: [],
      leg: '',
    }
    state.isNew = true
  }

  const handleSave = async (e: Event) => {
    e.preventDefault()
    if (!state.editing) return

    try {
      await store.saveRule(state.editing)
      state.editing = null
    } catch (error) {
      console.error('Error saving rule:', error)
      alert('Erro ao salvar regra.')
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm(`Deseja realmente excluir esta regra?`)) return
    try {
      await store.deleteRule(id)
    } catch (error) {
      console.error('Error deleting rule:', error)
      alert('Erro ao excluir regra.')
    }
  }

  const toggleItem = (list: string[], item: string) => {
    return list.includes(item)
      ? list.filter((i) => i !== item)
      : [...list, item]
  }

  if (store.loading.rules) return <p>Carregando regras...</p>

  if (state.editing) {
    return (
      <div id="conteudo">
        <div className="view-header">
          <h4>{state.isNew ? 'NOVA REGRA' : 'EDITAR REGRA'}</h4>
          <button
            type="button"
            className="btn btn-neutral"
            onClick={() => (state.editing = null)}
          >
            VOLTAR
          </button>
        </div>
        <div>
          <form onSubmit={handleSave} className="card">
            <h5>DADOS DA REGRA</h5>
            <br />
            <div className="grid-2col">
              <div>
                <label htmlFor="prag-select">Praga</label>
                <select
                  id="prag-select"
                  className="form-select"
                  value={state.editing.prag}
                  required
                  onChange={(e) =>
                    (state.editing!.prag = (
                      e.target as HTMLSelectElement
                    ).value)
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
              <div>
                <label htmlFor="leg-input">Legislação</label>
                <input
                  id="leg-input"
                  type="text"
                  className="form-text"
                  value={state.editing.leg}
                  required
                  onInput={(e) =>
                    (state.editing!.leg = (e.target as HTMLInputElement).value)
                  }
                  placeholder="Ex: Portaria nº 123/2024"
                />
              </div>
            </div>

            <div className="view-title-container">
              <label htmlFor="rule-desc">
                Descrição Curta / Título da Regra
              </label>
              <input
                id="rule-desc"
                type="text"
                className="form-text"
                value={state.editing.desc}
                required
                onInput={(e) =>
                  (state.editing!.desc = (e.target as HTMLInputElement).value)
                }
              />
            </div>

            <div className="view-title-container">
              <fieldset className="form-fieldset">
                <legend className="form-legend">PARTES DO HOSPEDEIRO</legend>
                <div className="checkbox-list">
                  {PART_OPTIONS.map((part) => (
                    <label key={part} className="checkbox-item">
                      <input
                        type="checkbox"
                        checked={state.editing!.part.includes(part)}
                        onChange={() =>
                          (state.editing!.part = toggleItem(
                            state.editing!.part,
                            part,
                          ))
                        }
                      />
                      {part}
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>

            <div className="grid-2col" style="align-items: start;">
              <fieldset className="form-fieldset">
                <legend className="form-legend">STATUS NA ORIGEM</legend>
                <div className="checkbox-list">
                  {store.catalogos.status_fitossanitario.map((st) => (
                    <label key={st} className="checkbox-item">
                      <input
                        type="checkbox"
                        checked={state.editing!.status_origem.includes(st)}
                        onChange={() =>
                          (state.editing!.status_origem = toggleItem(
                            state.editing!.status_origem,
                            st,
                          ))
                        }
                      />
                      {st}
                    </label>
                  ))}
                </div>
              </fieldset>
              <fieldset className="form-fieldset">
                <legend className="form-legend">STATUS NO DESTINO</legend>
                <div className="checkbox-list">
                  {store.catalogos.status_fitossanitario.map((st) => (
                    <label key={st} className="checkbox-item">
                      <input
                        type="checkbox"
                        checked={state.editing!.status_destino.includes(st)}
                        onChange={() =>
                          (state.editing!.status_destino = toggleItem(
                            state.editing!.status_destino,
                            st,
                          ))
                        }
                      />
                      {st}
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>

            <div style="margin-top: 10px; border-top: 1px solid #eee; padding-top: 5px; width: 100%; display: block; clear: both;">
              <div className="view-header" style="margin-bottom: 4px;">
                <label
                  htmlFor="exig-list"
                  style="font-weight: bold; font-size: 1rem; margin: 0;"
                >
                  Exigências
                </label>
                <button
                  type="button"
                  className="btn btn-success"
                  style="font-size: 0.75rem;"
                  onClick={() => {
                    state.editing!.exig = [...state.editing!.exig, '']
                  }}
                >
                  + ADICIONAR EXIGÊNCIA
                </button>
              </div>
              <div id="exig-list" className="exig-list-container">
                {state.editing.exig.map((item, index) => (
                  <div key={index} className="exig-item">
                    <div className="exig-index">{index + 1}</div>
                    <textarea
                      className="form-textarea exig-textarea"
                      value={item}
                      onInput={(e) => {
                        const newList = [...state.editing!.exig]
                        newList[index] = (e.target as HTMLTextAreaElement).value
                        state.editing!.exig = newList
                      }}
                      placeholder={`Descreva a exigência ${index + 1}...`}
                    />
                    <button
                      type="button"
                      className="btn btn-danger"
                      style="width: 22px; height: 22px; font-size: 0.8rem; flex-shrink: 0; padding: 0;"
                      onClick={() => {
                        if (confirm(`Excluir a exigência #${index + 1}?`)) {
                          state.editing!.exig = state.editing!.exig.filter(
                            (_, i) => i !== index,
                          )
                        }
                      }}
                      title="Excluir exigência"
                    >
                      ✕
                    </button>
                  </div>
                ))}
                {state.editing.exig.length === 0 && (
                  <div style="font-size: 0.85rem; color: #999; font-style: italic; margin: 2px 0; text-align: center; background: #fdfdfd; padding: 10px; border: 1px dashed #ddd; border-radius: 6px;">
                    Nenhuma exigência adicionada ainda.
                  </div>
                )}
              </div>
            </div>
            <br />
            <button className="btn btn-primary btn-full" type="submit">
              SALVAR REGRA
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div id="conteudo">
      <div className="view-header">
        <h4>EXIGÊNCIAS FITOSSANITÁRIAS (REGRAS)</h4>
        <button type="button" className="btn btn-primary" onClick={handleAdd}>
          NOVA REGRA
        </button>
      </div>
      <div>
        <table className="table-grid" style="width: 100%;">
          <thead>
            <tr>
              <th style="width: 15%;">Praga</th>
              <th style="width: 35%;">Descrição / Desc</th>
              <th style="width: 20%;">Partes</th>
              <th style="width: 15%;">Legislação</th>
              <th style="width: 15%;">Ações</th>
            </tr>
          </thead>
          <tbody>
            {store.rules.map((r) => (
              <tr key={r.id}>
                <td>
                  <strong>{r.prag}</strong>
                </td>
                <td>{r.desc}</td>
                <td style="font-size: 0.85rem; color: #666;">
                  {r.part.join(', ')}
                </td>
                <td style="text-align: center;">{r.leg}</td>
                <td style="text-align: center;">
                  <button
                    type="button"
                    className="btn btn-primary"
                    style="font-size: 0.8em; padding: 2px 8px;"
                    onClick={() => handleEdit(r)}
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    style="font-size: 0.8em; padding: 2px 8px; margin-left: 5px;"
                    onClick={() => handleDelete(r.id ?? '')}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

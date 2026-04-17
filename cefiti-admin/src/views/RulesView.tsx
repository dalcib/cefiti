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
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
          <h4>{state.isNew ? 'NOVA REGRA' : 'EDITAR REGRA'}</h4>
          <button
            type="button"
            className="form-button"
            style="background: #ccc; color: #333;"
            onClick={() => (state.editing = null)}
          >
            VOLTAR
          </button>
        </div>
        <div>
          <form onSubmit={handleSave} className="card">
            <h5>DADOS DA REGRA</h5>
            <br />
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
              <div>
                <label htmlFor="prag-select">Praga</label>
                <select
                  id="prag-select"
                  className="form-select"
                  value={state.editing.prag}
                  required
                  onChange={(e) =>
                    (state.editing!.prag = (e.target as HTMLSelectElement).value)
                  }
                  style="width: 100%; padding: 5px;"
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
                  style="width: 100%; padding: 5px;"
                  placeholder="Ex: Portaria nº 123/2024"
                />
              </div>
            </div>

            <div style="margin-top: 10px;">
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

            <div style="margin-top: 10px;">
              <fieldset style="border: 1px solid #eee; padding: 10px; margin: 0;">
                <legend style="margin-bottom: 5px; font-weight: bold; background: #fff; padding: 0 5px; font-size: 0.85rem;">
                  PARTES DO HOSPEDEIRO
                </legend>
                <div style="display: flex; flex-wrap: wrap; gap: 4px; align-items: flex-start; align-content: flex-start;">
                  {PART_OPTIONS.map((part) => (
                    <label
                      key={part}
                      style="font-weight: normal; cursor: pointer; display: flex; align-items: flex-start; gap: 4px; background: #f9f9f9; padding: 2px 8px; border: 1px solid #eee; border-radius: 4px; font-size: 0.85rem;"
                    >
                      <input
                        type="checkbox"
                        style="margin-top: 3px;"
                        checked={state.editing!.part.includes(part)}
                        onChange={() =>
                          (state.editing!.part = toggleItem(state.editing!.part, part))
                        }
                      />
                      {part}
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>

            <div style="margin-top: 15px; display: grid; grid-template-columns: 1fr 1fr; gap: 20px; align-items: start;">
              <fieldset style="border: 1px solid #eee; padding: 10px; margin: 0;">
                <legend style="margin-bottom: 5px; font-weight: bold; background: #fff; padding: 0 5px; font-size: 0.85rem;">
                  STATUS NA ORIGEM
                </legend>
                <div style="display: flex; flex-wrap: wrap; gap: 4px; align-items: flex-start; align-content: flex-start;">
                  {store.catalogos.status_fitossanitario.map((st) => (
                    <label
                      key={st}
                      style="display: flex; align-items: flex-start; gap: 4px; font-weight: normal; cursor: pointer; background: #f9f9f9; padding: 2px 8px; border: 1px solid #eee; border-radius: 4px; font-size: 0.85rem;"
                    >
                      <input
                        type="checkbox"
                        style="margin-top: 3px;"
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
              <fieldset style="border: 1px solid #eee; padding: 10px; margin: 0;">
                <legend style="margin-bottom: 5px; font-weight: bold; background: #fff; padding: 0 5px; font-size: 0.85rem;">
                  STATUS NO DESTINO
                </legend>
                <div style="display: flex; flex-wrap: wrap; gap: 4px; align-items: flex-start; align-content: flex-start;">
                  {store.catalogos.status_fitossanitario.map((st) => (
                    <label
                      key={st}
                      style="display: flex; align-items: flex-start; gap: 4px; font-weight: normal; cursor: pointer; background: #f9f9f9; padding: 2px 8px; border: 1px solid #eee; border-radius: 4px; font-size: 0.85rem;"
                    >
                      <input
                        type="checkbox"
                        style="margin-top: 3px;"
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
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px; width: 100%;">
                <label htmlFor="exig-list" style="font-weight: bold; font-size: 1rem; margin: 0;">Exigências</label>
                <button
                  type="button"
                  className="form-button"
                  style="padding: 2px 10px; font-size: 0.75rem; background: #28a745; border: none; border-radius: 4px;"
                  onClick={() => {
                    state.editing!.exig = [...state.editing!.exig, '']
                  }}
                >
                  + ADICIONAR EXIGÊNCIA
                </button>
              </div>
              <div
                id="exig-list"
                style="display: flex; flex-direction: column; gap: 2px; width: 100%;"
              >
                {state.editing.exig.map((item, index) => (
                  <div
                    key={index}
                    style="display: flex; gap: 4px; width: 100%; align-items: stretch;"
                  >
                    <div style="display: flex; align-items: center; justify-content: center; background: #eee; min-width: 22px; border-radius: 4px; font-weight: bold; font-size: 0.8rem; color: #666;">
                      {index + 1}
                    </div>
                    <textarea
                      className="form-textarea"
                      value={item}
                      onInput={(e) => {
                        const newList = [...state.editing!.exig]
                        newList[index] = (e.target as HTMLTextAreaElement).value
                        state.editing!.exig = newList
                      }}
                      placeholder={`Descreva a exigência ${index + 1}...`}
                      style="flex: 1; min-height: 50px; padding: 6px; font-size: 0.9rem; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; width: 100%; display: block; margin: 0;"
                    />
                    <button
                      type="button"
                      className="form-button"
                      style="background: #dc3545; width: 22px; height: 22px; color: white; border: none; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; flex-shrink: 0; padding: 0;"
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
            <button
              className="form-button"
              type="submit"
              style="width: 100%; padding: 8px;"
            >
              SALVAR REGRA
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div id="conteudo">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <h4>EXIGÊNCIAS FITOSSANITÁRIAS (REGRAS)</h4>
        <button type="button" className="form-button" onClick={handleAdd}>
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
                    className="form-button"
                    style="font-size: 0.8em; padding: 2px 5px; margin-right: 5px;"
                    onClick={() => handleEdit(r)}
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    className="form-button"
                    style="font-size: 0.8em; padding: 2px 5px; background: #dc3545;"
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

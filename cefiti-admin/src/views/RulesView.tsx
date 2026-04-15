import { store } from '../store'

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
  'Todas as Áreas',
]

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
                <label htmlFor="leg-select">Legislação</label>
                <select
                  id="leg-select"
                  className="form-select"
                  value={state.editing.leg}
                  required
                  onChange={(e) =>
                    (state.editing!.leg = (e.target as HTMLSelectElement).value)
                  }
                  style="width: 100%; padding: 5px;"
                >
                  <option value="">Selecione a Legislação</option>
                  {store.legislacoes.map((l) => (
                    <option key={l.id} value={l.id}>
                      {l.id}
                    </option>
                  ))}
                </select>
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

            <div style="margin-top: 10px; display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
              <fieldset style="border: 1px solid #eee; padding: 10px; margin: 0;">
                <legend style="margin-bottom: 5px; font-weight: bold; background: #fff; padding: 0 5px;">
                  PARTES DO HOSPEDEIRO
                </legend>
                <div style="display: flex; flex-wrap: wrap; gap: 5px;">
                  {PART_OPTIONS.map((part) => (
                    <label
                      key={part}
                      style="font-weight: normal; cursor: pointer; display: flex; align-items: center; gap: 5px; background: #f9f9f9; padding: 2px 8px; border: 1px solid #eee; border-radius: 4px;"
                    >
                      <input
                        type="checkbox"
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
              <div>
                <label htmlFor="exig-textarea">
                  Exigências (IDs ou frases separadas por quebra de linha)
                </label>
                <textarea
                  id="exig-textarea"
                  className="form-textarea"
                  value={state.editing.exig.join('\n')}
                  onInput={(e) =>
                    (state.editing!.exig = (e.target as HTMLTextAreaElement).value
                      .split('\n')
                      .filter((l) => l.trim()))
                  }
                  placeholder="Ex: Exigência 1&#10;Exigência 2"
                  style="width: 100%; min-height: 100px; padding: 5px;"
                />
              </div>
            </div>

            <div style="margin-top: 15px; display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
              <fieldset style="border: 1px solid #eee; padding: 10px; margin: 0;">
                <legend style="margin-bottom: 5px; font-weight: bold; background: #fff; padding: 0 5px;">
                  STATUS NA ORIGEM
                </legend>
                <div style="max-height: 200px; overflow-y: auto; background: #f9f9f9; padding: 5px; border: 1px solid #eee;">
                  {STATUS_LIST.map((st) => (
                    <label
                      key={st}
                      style="display: block; font-weight: normal; margin-bottom: 2px; cursor: pointer; padding: 2px;"
                    >
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
              <fieldset style="border: 1px solid #eee; padding: 10px; margin: 0;">
                <legend style="margin-bottom: 5px; font-weight: bold; background: #fff; padding: 0 5px;">
                  STATUS NO DESTINO
                </legend>
                <div style="max-height: 200px; overflow-y: auto; background: #f9f9f9; padding: 5px; border: 1px solid #eee;">
                  {STATUS_LIST.map((st) => (
                    <label
                      key={st}
                      style="display: block; font-weight: normal; margin-bottom: 2px; cursor: pointer; padding: 2px;"
                    >
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

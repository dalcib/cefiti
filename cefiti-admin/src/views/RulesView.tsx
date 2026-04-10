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
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <h1>{state.isNew ? 'Nova Regra' : 'Editar Regra'}</h1>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => (state.editing = null)}
          >
            Voltar
          </button>
        </div>
        <div className="card">
          <form onSubmit={handleSave}>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div>
                <label htmlFor="prag-select">Praga</label>
                <select
                  id="prag-select"
                  value={state.editing.prag}
                  required
                  onChange={(e) =>
                    (state.editing!.prag = (e.target as HTMLSelectElement).value)
                  }
                  style="width: 100%; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 4px;"
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
                  value={state.editing.leg}
                  required
                  onChange={(e) =>
                    (state.editing!.leg = (e.target as HTMLSelectElement).value)
                  }
                  style="width: 100%; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 4px;"
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

            <div style="margin-top: 1rem;">
              <label htmlFor="rule-desc">
                Descrição Curta / Título da Regra
              </label>
              <input
                id="rule-desc"
                type="text"
                value={state.editing.desc}
                required
                onInput={(e) =>
                  (state.editing!.desc = (e.target as HTMLInputElement).value)
                }
              />
            </div>

            <div style="margin-top: 1rem; display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
              <fieldset style="border: none; padding: 0; margin: 0;">
                <legend style="margin-bottom: 0.5rem; font-weight: bold;">
                  Partes do Hospedeiro
                </legend>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; padding: 0.5rem; border: 1px solid #eee;">
                  {PART_OPTIONS.map((part) => (
                    <label
                      key={part}
                      style="font-weight: normal; cursor: pointer; display: flex; align-items: center; gap: 0.25rem;"
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
                  Exigências (IDs ou frases separadas por vírgula)
                </label>
                <textarea
                  id="exig-textarea"
                  value={state.editing.exig.join('\n')}
                  onInput={(e) =>
                    (state.editing!.exig = (e.target as HTMLTextAreaElement).value
                      .split('\n')
                      .filter((l) => l.trim()))
                  }
                  placeholder="Ex: Exigência 1&#10;Exigência 2"
                  style="width: 100%; min-height: 100px; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 4px;"
                />
              </div>
            </div>

            <div style="margin-top: 1.5rem; display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
              <fieldset style="border: none; padding: 0; margin: 0;">
                <legend style="margin-bottom: 0.5rem; font-weight: bold;">
                  Status na Origem
                </legend>
                <div style="max-height: 200px; overflow-y: auto; padding: 0.5rem; border: 1px solid #eee;">
                  {STATUS_LIST.map((st) => (
                    <label
                      key={st}
                      style="display: block; font-weight: normal; margin-bottom: 0.25rem; cursor: pointer;"
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
              <fieldset style="border: none; padding: 0; margin: 0;">
                <legend style="margin-bottom: 0.5rem; font-weight: bold;">
                  Status no Destino
                </legend>
                <div style="max-height: 200px; overflow-y: auto; padding: 0.5rem; border: 1px solid #eee;">
                  {STATUS_LIST.map((st) => (
                    <label
                      key={st}
                      style="display: block; font-weight: normal; margin-bottom: 0.25rem; cursor: pointer;"
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

            <button
              className="btn btn-primary"
              type="submit"
              style="margin-top: 2rem; width: 100%;"
            >
              Salvar Regra
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <h1>Exigências Fitossanitárias (Regras)</h1>
        <button type="button" className="btn btn-primary" onClick={handleAdd}>
          + Nova Regra
        </button>
      </div>
      <div className="card">
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="border-bottom: 2px solid var(--border-color); text-align: left;">
              <th style="padding: 0.5rem;">Praga</th>
              <th style="padding: 0.5rem;">Descrição / Desc</th>
              <th style="padding: 0.5rem;">Partes</th>
              <th style="padding: 0.5rem;">Legislação</th>
              <th style="padding: 0.5rem;">Ações</th>
            </tr>
          </thead>
          <tbody>
            {store.rules.map((r) => (
              <tr
                key={r.id}
                style="border-bottom: 1px solid var(--border-color);"
              >
                <td style="padding: 0.5rem;">
                  <strong>{r.prag}</strong>
                </td>
                <td style="padding: 0.5rem;">{r.desc}</td>
                <td style="padding: 0.5rem; font-size: 0.85rem; color: #666;">
                  {r.part.join(', ')}
                </td>
                <td style="padding: 0.5rem;">{r.leg}</td>
                <td style="padding: 0.5rem;">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => handleEdit(r)}
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    style="margin-left: 0.5rem; color: var(--danger-color);"
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

import { store } from '../store'

export function HospedeirosView() {
  const { hospedeiros: state } = store.views

  const handleEdit = (h: any) => {
    state.editing = { ...h }
    state.isNew = false
  }

  const handleAdd = () => {
    const maxId = store.hospedeiros.reduce((max, h) => Math.max(max, h.id), 0)
    state.editing = { id: maxId + 1, nomeSci: '', nomeVul: [] }
    state.isNew = true
  }

  const handleSave = async (e: Event) => {
    e.preventDefault()
    if (!state.editing) return

    try {
      await store.saveHospedeiro(state.editing)
      state.editing = null
    } catch (error) {
      console.error('Error saving hospedeiro:', error)
      alert('Erro ao salvar hospedeiro.')
    }
  }

  const handleDelete = async (h: any) => {
    if (!confirm(`Deseja realmente excluir o hospedeiro ${h.nomeSci}?`)) return
    try {
      await store.deleteHospedeiro(h.id)
    } catch (error) {
      console.error('Error deleting hospedeiro:', error)
      alert('Erro ao excluir hospedeiro.')
    }
  }

  const addVul = () => {
    if (!state.vulInput.trim() || !state.editing) return
    if (!state.editing.nomeVul.includes(state.vulInput.trim())) {
      state.editing.nomeVul = [...state.editing.nomeVul, state.vulInput.trim()]
    }
    state.vulInput = ''
  }

  const removeVul = (v: string) => {
    if (!state.editing) return
    state.editing.nomeVul = state.editing.nomeVul.filter((item) => item !== v)
  }

  if (store.loading.hospedeiros) return <p>Carregando hospedeiros...</p>

  if (state.editing) {
    return (
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <h1>{state.isNew ? 'Novo Hospedeiro' : 'Editar Hospedeiro'}</h1>
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
            <div>
              <label htmlFor="hosp-id">ID (Numérico)</label>
              <input
                id="hosp-id"
                type="number"
                value={state.editing.id}
                readOnly
                style={{ backgroundColor: '#eee' }}
              />
            </div>
            <div>
              <label htmlFor="nomeSci">Nome Científico</label>
              <input
                id="nomeSci"
                type="text"
                value={state.editing.nomeSci}
                required
                onInput={(e) =>
                  (state.editing!.nomeSci = (e.target as HTMLInputElement).value)
                }
              />
            </div>
            <div>
              <label htmlFor="vul-input">Nomes Vulgares</label>
              <div style="display: flex; gap: 0.5rem; margin-bottom: 0.5rem;">
                <input
                  id="vul-input"
                  type="text"
                  value={state.vulInput}
                  onInput={(e) =>
                    (state.vulInput = (e.target as HTMLInputElement).value)
                  }
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault()
                      addVul()
                    }
                  }}
                />
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={addVul}
                >
                  Adicionar
                </button>
              </div>
              <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                {state.editing.nomeVul.map((v) => (
                  <span
                    key={v}
                    style="background: #e9ecef; padding: 0.25rem 0.5rem; border-radius: 4px; display: flex; align-items: center; gap: 0.5rem;"
                  >
                    {v}
                    <button
                      type="button"
                      style="cursor: pointer; color: var(--danger-color); font-weight: bold; background: none; border: none; padding: 0;"
                      onClick={() => removeVul(v)}
                      aria-label={`Remover ${v}`}
                    >
                      &times;
                    </button>
                  </span>
                ))}
              </div>
            </div>
            <button
              className="btn btn-primary"
              type="submit"
              style="margin-top: 1rem;"
            >
              Salvar
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <h1>Manutenção de Hospedeiros</h1>
        <button type="button" className="btn btn-primary" onClick={handleAdd}>
          + Novo Hospedeiro
        </button>
      </div>
      <div className="card">
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="border-bottom: 2px solid var(--border-color); text-align: left;">
              <th style="padding: 0.5rem;">ID</th>
              <th style="padding: 0.5rem;">Nome Científico</th>
              <th style="padding: 0.5rem;">Nomes Vulgares</th>
              <th style="padding: 0.5rem;">Ações</th>
            </tr>
          </thead>
          <tbody>
            {store.hospedeiros.map((h) => (
              <tr
                key={h.id}
                style="border-bottom: 1px solid var(--border-color);"
              >
                <td style="padding: 0.5rem;">{h.id}</td>
                <td style="padding: 0.5rem;">{h.nomeSci}</td>
                <td style="padding: 0.5rem;">{h.nomeVul.join(', ')}</td>
                <td style="padding: 0.5rem;">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => handleEdit(h)}
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    style="margin-left: 0.5rem; color: var(--danger-color);"
                    onClick={() => handleDelete(h)}
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

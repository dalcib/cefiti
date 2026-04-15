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
      <div id="conteudo">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
          <h4>{state.isNew ? 'NOVO HOSPEDEIRO' : 'EDITAR HOSPEDEIRO'}</h4>
          <button
            type="button"
            className="form-button"
            onClick={() => (state.editing = null)}
            style="background: #ccc; color: #333;"
          >
            VOLTAR
          </button>
        </div>
        <div>
          <form onSubmit={handleSave} className="card">
            <h5>DADOS DO HOSPEDEIRO</h5>
            <br />
            <div>
              <label htmlFor="hosp-id">ID (Numérico)</label>
              <input
                id="hosp-id"
                type="number"
                className="form-text"
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
                className="form-text"
                value={state.editing.nomeSci}
                required
                onInput={(e) =>
                  (state.editing!.nomeSci = (e.target as HTMLInputElement).value)
                }
              />
            </div>
            <div>
              <label htmlFor="vul-input">Nomes Vulgares</label>
              <div style="display: flex; gap: 10px; margin-bottom: 10px;">
                <input
                  id="vul-input"
                  type="text"
                  className="form-text"
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
                  className="form-button"
                  onClick={addVul}
                >
                  ADICIONAR
                </button>
              </div>
              <div style="display: flex; flex-wrap: wrap; gap: 5px;">
                {state.editing.nomeVul.map((v) => (
                  <span
                    key={v}
                    style="background: #e9ecef; padding: 5px 10px; border: 1px solid #ccc; border-radius: 4px; display: flex; align-items: center; gap: 5px;"
                  >
                    {v}
                    <button
                      type="button"
                      style="cursor: pointer; color: #dc3545; font-weight: bold; background: none; border: none; padding: 0;"
                      onClick={() => removeVul(v)}
                      aria-label={`Remover ${v}`}
                    >
                      &times;
                    </button>
                  </span>
                ))}
              </div>
            </div>
            <br />
            <button
              className="form-button"
              type="submit"
            >
              SALVAR
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div id="conteudo">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <h4>MANUTENÇÃO DE HOSPEDEIROS</h4>
        <button type="button" className="form-button" onClick={handleAdd}>
          NOVO HOSPEDEIRO
        </button>
      </div>
      <div>
        <table className="table-grid" style="width: 100%;">
          <thead>
            <tr>
              <th style="width: 10%;">ID</th>
              <th style="width: 40%;">Nome Científico</th>
              <th style="width: 30%;">Nomes Vulgares</th>
              <th style="width: 20%;">Ações</th>
            </tr>
          </thead>
          <tbody>
            {store.hospedeiros.map((h) => (
              <tr key={h.id}>
                <td>{h.id}</td>
                <td>{h.nomeSci}</td>
                <td>{h.nomeVul.join(', ')}</td>
                <td style="text-align: center;">
                  <button
                    type="button"
                    className="form-button"
                    style="font-size: 0.8em; padding: 2px 5px; margin-right: 5px;"
                    onClick={() => handleEdit(h)}
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    className="form-button"
                    style="font-size: 0.8em; padding: 2px 5px; background: #dc3545;"
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

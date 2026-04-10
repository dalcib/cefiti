import { store } from '../store'

export function PragasView() {
  const { pragas: state } = store.views

  const handleEdit = (praga: any) => {
    state.editing = { ...praga }
    state.isNew = false
  }

  const handleAdd = () => {
    state.editing = { prag: '', pragc: '', hosp: [], files: [] }
    state.isNew = true
  }

  const handleSave = async (e: Event) => {
    e.preventDefault()
    if (!state.editing) return

    try {
      await store.savePraga(state.editing)
      state.editing = null
    } catch (error) {
      console.error('Error saving praga:', error)
      alert('Erro ao salvar praga.')
    }
  }

  const handleDelete = async (prag: string) => {
    if (!confirm(`Deseja realmente excluir a praga ${prag}?`)) return
    try {
      await store.deletePraga(prag)
    } catch (error) {
      console.error('Error deleting praga:', error)
      alert('Erro ao excluir praga.')
    }
  }

  if (store.loading.pragas) return <p>Carregando pragas...</p>

  if (state.editing) {
    return (
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <h1>{state.isNew ? 'Nova Praga' : 'Editar Praga'}</h1>
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
              <label htmlFor="prag">Nome Científico</label>
              <input
                id="prag"
                type="text"
                value={state.editing.prag}
                readOnly={!state.isNew}
                required
                onInput={(e) =>
                  (state.editing!.prag = (e.target as HTMLInputElement).value)
                }
                style={!state.isNew ? { backgroundColor: '#eee' } : {}}
              />
            </div>
            <div>
              <label htmlFor="pragc">Nome Comum</label>
              <input
                id="pragc"
                type="text"
                value={state.editing.pragc}
                required
                onInput={(e) =>
                  (state.editing!.pragc = (e.target as HTMLInputElement).value)
                }
              />
            </div>
            <button className="btn btn-primary" type="submit">
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
        <h1>Manutenção de Pragas</h1>
        <button type="button" className="btn btn-primary" onClick={handleAdd}>
          + Nova Praga
        </button>
      </div>
      <div className="card">
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="border-bottom: 2px solid var(--border-color); text-align: left;">
              <th style="padding: 0.5rem;">Nome Científico</th>
              <th style="padding: 0.5rem;">Nome Comum</th>
              <th style="padding: 0.5rem;">Ações</th>
            </tr>
          </thead>
          <tbody>
            {store.pragas.map((praga) => (
              <tr
                key={praga.prag}
                style="border-bottom: 1px solid var(--border-color);"
              >
                <td style="padding: 0.5rem;">{praga.prag}</td>
                <td style="padding: 0.5rem;">{praga.pragc}</td>
                <td style="padding: 0.5rem;">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => handleEdit(praga)}
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    style="margin-left: 0.5rem; color: var(--danger-color);"
                    onClick={() => handleDelete(praga.prag)}
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

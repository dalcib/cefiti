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
      <div id="conteudo">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
          <h4>{state.isNew ? 'NOVA PRAGA' : 'EDITAR PRAGA'}</h4>
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
            <h5>DADOS DA PRAGA</h5>
            <br />
            <div>
              <label htmlFor="prag">Nome Científico</label>
              <input
                id="prag"
                type="text"
                className="form-text"
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
                className="form-text"
                value={state.editing.pragc}
                required
                onInput={(e) =>
                  (state.editing!.pragc = (e.target as HTMLInputElement).value)
                }
              />
            </div>
            <br />
            <button className="form-button" type="submit">
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
        <h4>MANUTENÇÃO DE PRAGAS</h4>
        <button type="button" className="form-button" onClick={handleAdd}>
          NOVA PRAGA
        </button>
      </div>
      <div>
        <table className="table-grid" style="width: 100%;">
          <thead>
            <tr>
              <th style="width: 40%;">Nome Científico</th>
              <th style="width: 40%;">Nome Comum</th>
              <th style="width: 20%;">Ações</th>
            </tr>
          </thead>
          <tbody>
            {store.pragas.map((praga) => (
              <tr key={praga.prag}>
                <td>{praga.prag}</td>
                <td>{praga.pragc}</td>
                <td style="text-align: center;">
                  <button
                    type="button"
                    className="form-button"
                    style="font-size: 0.8em; padding: 2px 5px; margin-right: 5px;"
                    onClick={() => handleEdit(praga)}
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    className="form-button"
                    style="font-size: 0.8em; padding: 2px 5px; background: #dc3545;"
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

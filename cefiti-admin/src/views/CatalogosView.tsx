import { store } from '../store'

export function CatalogosView() {
  const { catalogos: state } = store.views

  const addStatus = async () => {
    if (!state.newStatus.trim()) return
    const updated = [
      ...store.catalogos.status_fitossanitario,
      state.newStatus.trim(),
    ]
    try {
      await store.saveCatalogos(updated)
      state.newStatus = ''
    } catch (error) {
      console.error('Error adding status:', error)
      alert('Erro ao adicionar status.')
    }
  }

  const removeStatus = async (s: string) => {
    if (!confirm(`Deseja remover o status "${s}"?`)) return
    const updated = store.catalogos.status_fitossanitario.filter(
      (item) => item !== s,
    )
    try {
      await store.saveCatalogos(updated)
    } catch (error) {
      console.error('Error removing status:', error)
      alert('Erro ao remover status.')
    }
  }

  if (store.loading.catalogos) return <p>Carregando catálogos...</p>

  return (
    <div>
      <h1>Gerenciamento de Catálogos</h1>
      <div className="card">
        <h3>Status Fitossanitários</h3>
        <p style="color: #666; font-size: 0.9rem;">
          Esses valores são usados nas listas de seleção do sistema.
        </p>

        <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1.5rem;">
          <label htmlFor="new-status-input">Novo Status</label>
          <div style="display: flex; gap: 0.5rem;">
            <input
              id="new-status-input"
              type="text"
              placeholder="Ex: Área Livre de Praga"
              value={state.newStatus}
              onInput={(e) =>
                (state.newStatus = (e.target as HTMLInputElement).value)
              }
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault()
                  addStatus()
                }
              }}
            />
            <button
              type="button"
              className="btn btn-primary"
              onClick={addStatus}
            >
              Adicionar
            </button>
          </div>
        </div>

        <ul style="list-style: none; padding: 0;">
          {store.catalogos.status_fitossanitario.map((s) => (
            <li
              key={s}
              style="display: flex; justify-content: space-between; align-items: center; padding: 0.5rem; border-bottom: 1px solid #eee;"
            >
              {s}
              <button
                type="button"
                className="btn btn-secondary"
                style="color: var(--danger-color); padding: 0.25rem 0.5rem;"
                onClick={() => removeStatus(s)}
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

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
    try {
      const usage = await store.checkStatusInUse(s)
      if (usage.inUse) {
        alert(
          `Não é possível remover o status "${s}" pois ele está sendo utilizado em:\n\n` +
            usage.locations.join('\n') +
            '\n\nRemova as associações antes de excluir este status do catálogo.',
        )
        return
      }
    } catch (e) {
      console.error('Error checking status usage:', e)
    }

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
    <div id="conteudo">
      <div style="margin-bottom: 20px;">
        <h4>GERENCIAMENTO DE CATÁLOGOS</h4>
      </div>
      <div className="card">
        <h5>STATUS FITOSSANITÁRIOS</h5>
        <p style="color: #666; font-size: 0.9rem; margin-bottom: 20px;">
          Esses valores são usados nas listas de seleção do sistema.
        </p>

        <div style="display: flex; flex-direction: column; gap: 5px; margin-bottom: 20px;">
          <label htmlFor="new-status-input">NOVO STATUS</label>
          <div style="display: flex; gap: 10px;">
            <input
              id="new-status-input"
              type="text"
              className="form-text"
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
              className="form-button"
              onClick={addStatus}
            >
              ADICIONAR
            </button>
          </div>
        </div>

        <ul style="list-style: none; padding: 0; border: 1px solid #eee; border-radius: 4px;">
          {store.catalogos.status_fitossanitario.map((s, idx) => (
            <li
              key={s}
              style={`display: flex; justify-content: space-between; align-items: center; padding: 10px; ${idx < store.catalogos.status_fitossanitario.length - 1 ? 'border-bottom: 1px solid #eee;' : ''} background: ${idx % 2 === 0 ? '#fff' : '#f9f9f9'};`}
            >
              <span style="font-weight: 500;">{s}</span>
              <button
                type="button"
                className="form-button"
                style="color: #fff; background: #dc3545; padding: 2px 10px; font-size: 0.85em;"
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

import { store } from '../store'

export function PerfilView() {
  const { perfil: state } = store.views

  const handleSave = async (e: Event) => {
    e.preventDefault()
    if (!state.editing) return

    try {
      await store.saveAuthorizedUser(state.editing)
      alert('Perfil atualizado com sucesso!')
    } catch (error) {
      console.error('Error saving profile:', error)
      alert('Erro ao atualizar perfil.')
    }
  }

  if (!state.editing) return <p>Carregando perfil...</p>

  return (
    <div id="conteudo">
      <div className="view-header">
        <h4>MEUS DADOS PESSOAIS</h4>
      </div>
      <div>
        <form onSubmit={handleSave} className="card">
          <h5>INFORMAÇÕES DO USUÁRIO</h5>
          <br />
          <div>
            <label htmlFor="perfil-email">E-mail</label>
            <input
              id="perfil-email"
              type="email"
              className="form-text readonly-input"
              value={state.editing.email}
              readOnly
            />
            <small className="muted-text">
              O e-mail é a sua identidade e não pode ser alterado aqui.
            </small>
          </div>
          <br />
          <div>
            <label htmlFor="perfil-nome">Nome Completo</label>
            <input
              id="perfil-nome"
              type="text"
              className="form-text"
              value={state.editing.nome}
              required
              onInput={(e) =>
                (state.editing!.nome = (e.target as HTMLInputElement).value)
              }
            />
          </div>
          <div>
            <label htmlFor="perfil-cargo">Cargo / Função</label>
            <input
              id="perfil-cargo"
              type="text"
              className="form-text"
              value={state.editing.cargo}
              required
              onInput={(e) =>
                (state.editing!.cargo = (e.target as HTMLInputElement).value)
              }
            />
          </div>
          <div>
            <label htmlFor="perfil-lotacao">Lotação (Unidade/Estado)</label>
            <input
              id="perfil-lotacao"
              type="text"
              className="form-text"
              value={state.editing.lotacao}
              required
              onInput={(e) =>
                (state.editing!.lotacao = (e.target as HTMLInputElement).value)
              }
            />
          </div>
          <div>
            <label htmlFor="perfil-p">Perfil de Acesso</label>
            <input
              id="perfil-p"
              type="text"
              className="form-text readonly-input"
              value={state.editing.perfil.toUpperCase()}
              readOnly
            />
            <small className="muted-text">
              Somente administradores podem alterar o perfil de acesso.
            </small>
          </div>
          <br />
          <button className="form-button" type="submit">
            ATUALIZAR MEUS DADOS
          </button>
        </form>
      </div>
    </div>
  )
}

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { version } from './../package.json'
import { auth } from './firebase'
import { type AdminView, store } from './store'
import { CatalogosView } from './views/CatalogosView'
import { HospedeirosView } from './views/HospedeirosView'
import { LegislacoesView } from './views/LegislacoesView'
import { PragasView } from './views/PragasView'
import { RulesView } from './views/RulesView'
import { StatusMunicipiosView } from './views/StatusMunicipiosView'

export function App() {
  if (store.authLoading) {
    return (
      <div style="display: flex; height: 100vh; align-items: center; justify-content: center;">
        <p>Carregando...</p>
      </div>
    )
  }

  if (store.view === 'login') {
    return <LoginView />
  }

  return (
    <div className="admin-layout">
      <aside className={`sidebar ${store.sidebarOpen ? '' : 'closed'}`}>
        <div className="sidebar-header">CEFiTI Admin</div>
        <nav className="sidebar-nav">
          <NavItem view="dashboard" label="Painel de Controle" icon="📊" />
          <NavItem view="pragas" label="Pragas" icon="🪲" />
          <NavItem view="hospedeiros" label="Hospedeiros" icon="🌿" />
          <NavItem view="legislacoes" label="Legislações" icon="📜" />
          <NavItem view="rules" label="Regras" icon="⚖️" />
          <NavItem
            view="status_municipios"
            label="Status Municipais"
            icon="📍"
          />
          <NavItem view="catalogos" label="Catálogos" icon="📁" />
        </nav>
        <div style="padding: 1rem; border-top: 1px solid rgba(255,255,255,0.1); font-size: 0.8rem; opacity: 0.8; display: flex; align-items: center; gap: 0.5rem; margin-top: auto;">
          <img
            src={store.user?.photoURL || ''}
            alt="Avatar"
            style="width: 24px; height: 24px; border-radius: 50%;"
          />
          <span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
            {store.user?.email}
          </span>
        </div>
        <div style="padding: 1rem; font-size: 0.8rem; opacity: 0.5;">
          Versão {version}
        </div>
      </aside>

      <div className="main-container">
        <header className="header">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => store.toggleSidebar()}
            aria-label="Alternar menu lateral"
          >
            ☰
          </button>
          <div style="display: flex; align-items: center; gap: 1rem;">
            <span>{store.user?.email}</span>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => store.logout()}
            >
              Sair
            </button>
          </div>
        </header>

        <main className="content">
          <CurrentView />
        </main>
      </div>
    </div>
  )
}

function NavItem({
  view,
  label,
  icon,
}: {
  view: AdminView
  label: string
  icon: string
}) {
  const active = store.view === view
  return (
    <button
      type="button"
      className={`nav-item ${active ? 'active' : ''}`}
      onClick={() => store.setView(view)}
      style="width: 100%; text-align: left;"
    >
      <span style="font-size: 1.2rem; margin-right: 0.5rem;">{icon}</span>
      <span>{label}</span>
    </button>
  )
}

function LoginView() {
  const login = async () => {
    const provider = new GoogleAuthProvider()
    try {
      await signInWithPopup(auth, provider)
    } catch (error) {
      console.error('Login failed:', error)
      alert('Falha no login. Verifique o console para mais detalhes.')
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 style="margin-top: 0">Acesso Restrito</h2>
        <p>Por favor, faça login para continuar.</p>
        <button
          type="button"
          className="btn btn-primary"
          style="width: 100%; margin-top: 1rem;"
          onClick={login}
        >
          Entrar com Google
        </button>
      </div>
    </div>
  )
}

function CurrentView() {
  switch (store.view) {
    case 'dashboard':
      return (
        <div>
          <h1>Painel de Controle</h1>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-top: 1rem;">
            <div className="card" style="text-align: center;">
              <h3>Sistema Ativo</h3>
              <p style="font-size: 3rem; margin: 0.5rem 0;">✅</p>
              <p>Firestore Conectado</p>
            </div>
            <button
              type="button"
              className="card"
              onClick={() => store.setView('pragas')}
              style="cursor: pointer; text-align: center; border: none; font: inherit; background: white;"
            >
              <h3>Manutenção</h3>
              <p style="font-size: 3rem; margin: 0.5rem 0;">⚙️</p>
              <p>Acesse o menu lateral</p>
            </button>
            <div className="card" style="text-align: center;">
              <h3>Admin</h3>
              <p style="font-size: 1rem; margin-top: 1rem;">
                {store.user?.displayName}
              </p>
              <p style="font-size: 0.8rem; color: #666;">{store.user?.email}</p>
            </div>
          </div>
          <div className="card" style="margin-top: 2rem;">
            <h2>Bem-vindo ao sistema de manutenção do CEFiTI.</h2>
            <p>
              Este sistema permite a edição direta dos dados no Firestore
              utilizados pela aplicação pública.
            </p>
            <p style="color: var(--danger-color); font-weight: bold;">
              ⚠️ Atenção: Todas as alterações são salvas em tempo real no banco
              de dados de produção.
            </p>
          </div>
        </div>
      )
    case 'pragas':
      return <PragasView />
    case 'hospedeiros':
      return <HospedeirosView />
    case 'legislacoes':
      return <LegislacoesView />
    case 'rules':
      return <RulesView />
    case 'status_municipios':
      return <StatusMunicipiosView />
    case 'catalogos':
      return <CatalogosView />
    default:
      return <div>View não encontrada: {store.view}</div>
  }
}

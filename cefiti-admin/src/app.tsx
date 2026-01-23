import { version } from './../package.json'

export function App() {
  return (
    <div style="font-family: sans-serif; padding: 2rem;">
      <h1>CEFiTI Admin</h1>
      <p>Welcome to the admin interface. This is a new Preact project.</p>
      <p style="color: #666;">Versão {version}</p>
    </div>
  )
}

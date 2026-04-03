import { deepSignal } from '../../cefiti/src/deep-signals.ts'
import { storeDb } from './store-db.ts'
import type { AppView } from './types'

export class StoreUi {
  view: AppView = 'home'
  exibeBase: boolean = false
  searched: boolean = false

  constructor() {
    this.initRouter()
  }

  private initRouter() {
    if (typeof window !== 'undefined') {
      window.addEventListener('popstate', () => {
        const hash = window.location.hash.slice(1) || 'home'
        if (['home', 'result', 'base', 'status'].includes(hash)) {
          this.view = hash as AppView
          this.searched = hash === 'result'
          this.exibeBase = hash === 'base'
        }
      })
      const hash = window.location.hash.slice(1)
      if (hash && ['home', 'result', 'base', 'status'].includes(hash)) {
        this.view = hash as AppView
        this.searched = hash === 'result'
        this.exibeBase = hash === 'base'
      }
    }
  }

  navigate(v: AppView) {
    this.view = v
    this.searched = v === 'result'
    this.exibeBase = v === 'base'
    if (typeof window !== 'undefined') {
      const hash = v === 'home' ? '' : `#${v}`
      if (window.location.hash !== hash) {
        const url = hash || window.location.pathname
        window.history.pushState(null, '', url)
      }
    }
  }

  handleMenu(i: string) {
    if (i === 'Base') {
      this.navigate('base')
    }
    if (i === 'Status') {
      this.navigate('status')
    }
    if (i === 'Nova') {
      storeDb.clean()
      this.navigate('home')
    }
    if (i === 'Voltar') {
      this.navigate('home')
    }
    if (i === 'Print') {
      window.print()
    }
  }
}

export const storeUi = deepSignal(new StoreUi())

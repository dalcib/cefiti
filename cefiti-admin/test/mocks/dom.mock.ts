// Mock DOM environment for Preact
const noop = () => {}

// Minimal Node implementation
export class Node {
  parentNode: Node | null = null
  nextSibling: Node | null = null
  previousSibling: Node | null = null
  childNodes: Node[] = []
  get firstChild() {
    return this.childNodes[0] || null
  }
  get lastChild() {
    return this.childNodes[this.childNodes.length - 1] || null
  }
  appendChild(child: Node) {
    if (child.parentNode) child.parentNode.removeChild(child)
    child.parentNode = this
    if (this.lastChild) {
      this.lastChild.nextSibling = child
      child.previousSibling = this.lastChild
    }
    this.childNodes.push(child)
    return child
  }
  removeChild(child: Node) {
    const idx = this.childNodes.indexOf(child)
    if (idx === -1) return
    if (child.previousSibling)
      child.previousSibling.nextSibling = child.nextSibling
    if (child.nextSibling)
      child.nextSibling.previousSibling = child.previousSibling
    this.childNodes.splice(idx, 1)
    child.parentNode = null
    child.nextSibling = null
    child.previousSibling = null
    return child
  }
}

export class Text extends Node {
  nodeType = 3
  _data: string
  constructor(data: string) {
    super()
    this._data = data
  }
  get data() {
    return this._data
  }
  set data(v) {
    this._data = v
  }
}

export class Element extends Node {
  nodeType = 1
  nodeName: string
  _value: string = ''
  style = {}
  attributes: Record<string, string> = {}

  constructor(nodeName: string) {
    super()
    this.nodeName = nodeName
  }

  setAttribute(k: string, v: string) {
    this.attributes[k] = v
  }
  getAttribute(k: string) {
    return this.attributes[k]
  }
  addEventListener() {}
  removeEventListener() {}
}

export const doc = {
  createElement: (tag: string) => new Element(tag.toUpperCase()),
  createTextNode: (text: string) => new Text(text),
  body: new Element('BODY'),
  documentElement: new Element('HTML'),
}

// biome-ignore lint/suspicious/noTsIgnore: direct global modification for test environment
// @ts-ignore
globalThis.window = {
  document: doc,
  // biome-ignore lint/suspicious/noExplicitAny: mock implementation
  requestAnimationFrame: (cb: any) => setTimeout(() => cb(Date.now()), 0),
  cancelAnimationFrame: clearTimeout,
  console: console,
  location: { href: '', search: '', hash: '', protocol: 'file:' },
  navigator: { userAgent: 'Node' },
  addEventListener: noop,
  removeEventListener: noop,
  // biome-ignore lint/suspicious/noExplicitAny: mock implementation
} as any

// biome-ignore lint/suspicious/noTsIgnore: direct global modification for test environment
// @ts-ignore
globalThis.document = doc

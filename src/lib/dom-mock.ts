// Mock DOM environment for Preact
const noop = () => { }

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
  insertBefore(newNode: Node, referenceNode: Node | null) {
    if (!referenceNode) return this.appendChild(newNode)
    if (newNode.parentNode) newNode.parentNode.removeChild(newNode)
    const idx = this.childNodes.indexOf(referenceNode)
    if (idx === -1) return // Should fail
    newNode.parentNode = this
    newNode.nextSibling = referenceNode
    newNode.previousSibling = referenceNode.previousSibling
    if (referenceNode.previousSibling)
      referenceNode.previousSibling.nextSibling = newNode
    referenceNode.previousSibling = newNode
    this.childNodes.splice(idx, 0, newNode)
    return newNode
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
  get nodeValue() {
    return this._data
  }
  set nodeValue(v) {
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

  get textContent(): string {
    return this.childNodes
      .map((c) => (c instanceof Text ? c.data : (c as Element).textContent))
      .join('')
  }
  set textContent(v) {
    this.childNodes.forEach((c) => (c.parentNode = null))
    this.childNodes = []
    if (v) this.appendChild(new Text(v))
  }

  get value() {
    return this._value
  }
  set value(v) {
    this._value = v
  }

  setAttribute(k: string, v: string) {
    this.attributes[k] = v
  }
  getAttribute(k: string) {
    return this.attributes[k]
  }
  removeAttribute(k: string) {
    delete this.attributes[k]
  }
  addEventListener() { }
  removeEventListener() { }
}

export const doc = {
  createElement: (tag: string) => new Element(tag.toUpperCase()),
  createElementNS: (_ns: string, tag: string) => new Element(tag.toUpperCase()),
  createTextNode: (text: string) => new Text(text),
  activeElement: null,
  body: new Element('BODY'),
  documentElement: new Element('HTML'),
}

globalThis.window = {
  document: doc,
  requestAnimationFrame: (cb: any) => setTimeout(cb, 0),
  cancelAnimationFrame: clearTimeout,
  console: console,
  history: { replaceState: noop, pushState: noop },
  location: { href: '', search: '', hash: '' },
  navigator: { userAgent: 'Node' },
  Node: Node,
  Element: Element,
  Text: Text,
  Event: class Event { },
} as any

// @ts-expect-error
globalThis.document = doc

globalThis.requestAnimationFrame = globalThis.window.requestAnimationFrame

globalThis.cancelAnimationFrame = globalThis.window.cancelAnimationFrame
// @ts-expect-error
globalThis.Node = Node
// @ts-expect-error
globalThis.Element = Element
// @ts-expect-error
globalThis.Text = Text

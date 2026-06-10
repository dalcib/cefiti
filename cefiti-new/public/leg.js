var pa=Object.defineProperty,ua=Object.defineProperties;var Aa=Object.getOwnPropertyDescriptors;var Me=Object.getOwnPropertySymbols;var ga=Object.prototype.hasOwnProperty,va=Object.prototype.propertyIsEnumerable;var me=(a,e,o)=>e in a?pa(a,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[e]=o,E=(a,e)=>{for(var o in e||(e={}))ga.call(e,o)&&me(a,o,e[o]);if(Me)for(var o of Me(e))va.call(e,o)&&me(a,o,e[o]);return a},w=(a,e)=>ua(a,Aa(e));var b=(a,e,o)=>me(a,typeof e!="symbol"?e+"":e,o);var oe,O,Ue,fa,k,xe,Fe,Le,Be,ge,pe,ue,Ia,Y={},ee=[],ha=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,re=Array.isArray;function M(a,e){for(var o in e)a[o]=e[o];return a}function ve(a){a&&a.parentNode&&a.parentNode.removeChild(a)}function ba(a,e,o){var i,r,n,t={};for(n in e)n=="key"?i=e[n]:n=="ref"?r=e[n]:t[n]=e[n];if(arguments.length>2&&(t.children=arguments.length>3?oe.call(arguments,2):o),typeof a=="function"&&a.defaultProps!=null)for(n in a.defaultProps)t[n]===void 0&&(t[n]=a.defaultProps[n]);return W(a,t,i,r,null)}function W(a,e,o,i,r){var n={type:a,props:e,key:o,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:r==null?++Ue:r,__i:-1,__u:0};return r==null&&O.vnode!=null&&O.vnode(n),n}function j(a){return a.children}function K(a,e){this.props=a,this.context=e}function y(a,e){if(e==null)return a.__?y(a.__,a.__i+1):null;for(var o;e<a.__k.length;e++)if((o=a.__k[e])!=null&&o.__e!=null)return o.__e;return typeof a.type=="function"?y(a):null}function Sa(a){if(a.__P&&a.__d){var e=a.__v,o=e.__e,i=[],r=[],n=M({},e);n.__v=e.__v+1,O.vnode&&O.vnode(n),fe(a.__P,n,e,a.__n,a.__P.namespaceURI,32&e.__u?[o]:null,i,o==null?y(e):o,!!(32&e.__u),r),n.__v=e.__v,n.__.__k[n.__i]=n,Ge(i,n,r),e.__e=e.__=null,n.__e!=o&&we(n)}}function we(a){if((a=a.__)!=null&&a.__c!=null)return a.__e=a.__c.base=null,a.__k.some(function(e){if(e!=null&&e.__e!=null)return a.__e=a.__c.base=e.__e}),we(a)}function ze(a){(!a.__d&&(a.__d=!0)&&k.push(a)&&!ae.__r++||xe!=O.debounceRendering)&&((xe=O.debounceRendering)||Fe)(ae)}function ae(){for(var a,e=1;k.length;)k.length>e&&k.sort(Le),a=k.shift(),e=k.length,Sa(a);ae.__r=0}function ye(a,e,o,i,r,n,t,s,l,d,m){var c,u,A,p,S,g,h,v=i&&i.__k||ee,D=e.length;for(l=Oa(o,e,v,l,D),c=0;c<D;c++)(A=o.__k[c])!=null&&(u=A.__i!=-1&&v[A.__i]||Y,A.__i=c,g=fe(a,A,u,r,n,t,s,l,d,m),p=A.__e,A.ref&&u.ref!=A.ref&&(u.ref&&Ie(u.ref,null,A),m.push(A.ref,A.__c||p,A)),S==null&&p!=null&&(S=p),(h=!!(4&A.__u))||u.__k===A.__k?l=je(A,l,a,h):typeof A.type=="function"&&g!==void 0?l=g:p&&(l=p.nextSibling),A.__u&=-7);return o.__e=S,l}function Oa(a,e,o,i,r){var n,t,s,l,d,m=o.length,c=m,u=0;for(a.__k=new Array(r),n=0;n<r;n++)(t=e[n])!=null&&typeof t!="boolean"&&typeof t!="function"?(typeof t=="string"||typeof t=="number"||typeof t=="bigint"||t.constructor==String?t=a.__k[n]=W(null,t,null,null,null):re(t)?t=a.__k[n]=W(j,{children:t},null,null,null):t.constructor===void 0&&t.__b>0?t=a.__k[n]=W(t.type,t.props,t.key,t.ref?t.ref:null,t.__v):a.__k[n]=t,l=n+u,t.__=a,t.__b=a.__b+1,s=null,(d=t.__i=Pa(t,o,l,c))!=-1&&(c--,(s=o[d])&&(s.__u|=2)),s==null||s.__v==null?(d==-1&&(r>m?u--:r<m&&u++),typeof t.type!="function"&&(t.__u|=4)):d!=l&&(d==l-1?u--:d==l+1?u++:(d>l?u--:u++,t.__u|=4))):a.__k[n]=null;if(c)for(n=0;n<m;n++)(s=o[n])!=null&&(2&s.__u)==0&&(s.__e==i&&(i=y(s)),He(s,s));return i}function je(a,e,o,i){var r,n;if(typeof a.type=="function"){for(r=a.__k,n=0;r&&n<r.length;n++)r[n]&&(r[n].__=a,e=je(r[n],e,o,i));return e}a.__e!=e&&(i&&(e&&a.type&&!e.parentNode&&(e=y(a)),o.insertBefore(a.__e,e||null)),e=a.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function Pa(a,e,o,i){var r,n,t,s=a.key,l=a.type,d=e[o],m=d!=null&&(2&d.__u)==0;if(d===null&&s==null||m&&s==d.key&&l==d.type)return o;if(i>(m?1:0)){for(r=o-1,n=o+1;r>=0||n<e.length;)if((d=e[t=r>=0?r--:n++])!=null&&(2&d.__u)==0&&s==d.key&&l==d.type)return t}return-1}function Ve(a,e,o){e[0]=="-"?a.setProperty(e,o==null?"":o):a[e]=o==null?"":typeof o!="number"||ha.test(e)?o:o+"px"}function Q(a,e,o,i,r){var n,t;e:if(e=="style")if(typeof o=="string")a.style.cssText=o;else{if(typeof i=="string"&&(a.style.cssText=i=""),i)for(e in i)o&&e in o||Ve(a.style,e,"");if(o)for(e in o)i&&o[e]==i[e]||Ve(a.style,e,o[e])}else if(e[0]=="o"&&e[1]=="n")n=e!=(e=e.replace(Be,"$1")),t=e.toLowerCase(),e=t in a||e=="onFocusOut"||e=="onFocusIn"?t.slice(2):e.slice(2),a.l||(a.l={}),a.l[e+n]=o,o?i?o.u=i.u:(o.u=ge,a.addEventListener(e,n?ue:pe,n)):a.removeEventListener(e,n?ue:pe,n);else{if(r=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in a)try{a[e]=o==null?"":o;break e}catch(s){}typeof o=="function"||(o==null||o===!1&&e[4]!="-"?a.removeAttribute(e):a.setAttribute(e,e=="popover"&&o==1?"":o))}}function ke(a){return function(e){if(this.l){var o=this.l[e.type+a];if(e.t==null)e.t=ge++;else if(e.t<o.u)return;return o(O.event?O.event(e):e)}}}function fe(a,e,o,i,r,n,t,s,l,d){var m,c,u,A,p,S,g,h,v,D,R,V,J,x,N,T=e.type;if(e.constructor!==void 0)return null;128&o.__u&&(l=!!(32&o.__u),n=[s=e.__e=o.__e]),(m=O.__b)&&m(e);e:if(typeof T=="function")try{if(h=e.props,v="prototype"in T&&T.prototype.render,D=(m=T.contextType)&&i[m.__c],R=m?D?D.props.value:m.__:i,o.__c?g=(c=e.__c=o.__c).__=c.__E:(v?e.__c=c=new T(h,R):(e.__c=c=new K(h,R),c.constructor=T,c.render=Da),D&&D.sub(c),c.state||(c.state={}),c.__n=i,u=c.__d=!0,c.__h=[],c._sb=[]),v&&c.__s==null&&(c.__s=c.state),v&&T.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=M({},c.__s)),M(c.__s,T.getDerivedStateFromProps(h,c.__s))),A=c.props,p=c.state,c.__v=e,u)v&&T.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),v&&c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(v&&T.getDerivedStateFromProps==null&&h!==A&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(h,R),e.__v==o.__v||!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(h,c.__s,R)===!1){e.__v!=o.__v&&(c.props=h,c.state=c.__s,c.__d=!1),e.__e=o.__e,e.__k=o.__k,e.__k.some(function(B){B&&(B.__=e)}),ee.push.apply(c.__h,c._sb),c._sb=[],c.__h.length&&t.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(h,c.__s,R),v&&c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(A,p,S)})}if(c.context=R,c.props=h,c.__P=a,c.__e=!1,V=O.__r,J=0,v)c.state=c.__s,c.__d=!1,V&&V(e),m=c.render(c.props,c.state,c.context),ee.push.apply(c.__h,c._sb),c._sb=[];else do c.__d=!1,V&&V(e),m=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++J<25);c.state=c.__s,c.getChildContext!=null&&(i=M(M({},i),c.getChildContext())),v&&!u&&c.getSnapshotBeforeUpdate!=null&&(S=c.getSnapshotBeforeUpdate(A,p)),x=m!=null&&m.type===j&&m.key==null?$e(m.props.children):m,s=ye(a,re(x)?x:[x],e,o,i,r,n,t,s,l,d),c.base=e.__e,e.__u&=-161,c.__h.length&&t.push(c),g&&(c.__E=c.__=null)}catch(B){if(e.__v=null,l||n!=null)if(B.then){for(e.__u|=l?160:128;s&&s.nodeType==8&&s.nextSibling;)s=s.nextSibling;n[n.indexOf(s)]=null,e.__e=s}else{for(N=n.length;N--;)ve(n[N]);Ae(e)}else e.__e=o.__e,e.__k=o.__k,B.then||Ae(e);O.__e(B,e,o)}else n==null&&e.__v==o.__v?(e.__k=o.__k,e.__e=o.__e):s=e.__e=Ea(o.__e,e,o,i,r,n,t,l,d);return(m=O.diffed)&&m(e),128&e.__u?void 0:s}function Ae(a){a&&(a.__c&&(a.__c.__e=!0),a.__k&&a.__k.some(Ae))}function Ge(a,e,o){for(var i=0;i<o.length;i++)Ie(o[i],o[++i],o[++i]);O.__c&&O.__c(e,a),a.some(function(r){try{a=r.__h,r.__h=[],a.some(function(n){n.call(r)})}catch(n){O.__e(n,r.__v)}})}function $e(a){return typeof a!="object"||a==null||a.__b>0?a:re(a)?a.map($e):M({},a)}function Ea(a,e,o,i,r,n,t,s,l){var d,m,c,u,A,p,S,g=o.props||Y,h=e.props,v=e.type;if(v=="svg"?r="http://www.w3.org/2000/svg":v=="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),n!=null){for(d=0;d<n.length;d++)if((A=n[d])&&"setAttribute"in A==!!v&&(v?A.localName==v:A.nodeType==3)){a=A,n[d]=null;break}}if(a==null){if(v==null)return document.createTextNode(h);a=document.createElementNS(r,v,h.is&&h),s&&(O.__m&&O.__m(e,n),s=!1),n=null}if(v==null)g===h||s&&a.data==h||(a.data=h);else{if(n=n&&oe.call(a.childNodes),!s&&n!=null)for(g={},d=0;d<a.attributes.length;d++)g[(A=a.attributes[d]).name]=A.value;for(d in g)A=g[d],d=="dangerouslySetInnerHTML"?c=A:d=="children"||d in h||d=="value"&&"defaultValue"in h||d=="checked"&&"defaultChecked"in h||Q(a,d,null,A,r);for(d in h)A=h[d],d=="children"?u=A:d=="dangerouslySetInnerHTML"?m=A:d=="value"?p=A:d=="checked"?S=A:s&&typeof A!="function"||g[d]===A||Q(a,d,A,g[d],r);if(m)s||c&&(m.__html==c.__html||m.__html==a.innerHTML)||(a.innerHTML=m.__html),e.__k=[];else if(c&&(a.innerHTML=""),ye(e.type=="template"?a.content:a,re(u)?u:[u],e,o,i,v=="foreignObject"?"http://www.w3.org/1999/xhtml":r,n,t,n?n[0]:o.__k&&y(o,0),s,l),n!=null)for(d=n.length;d--;)ve(n[d]);s||(d="value",v=="progress"&&p==null?a.removeAttribute("value"):p!=null&&(p!==a[d]||v=="progress"&&!p||v=="option"&&p!=g[d])&&Q(a,d,p,g[d],r),d="checked",S!=null&&S!=a[d]&&Q(a,d,S,g[d],r))}return a}function Ie(a,e,o){try{if(typeof a=="function"){var i=typeof a.__u=="function";i&&a.__u(),i&&e==null||(a.__u=a(e))}else a.current=e}catch(r){O.__e(r,o)}}function He(a,e,o){var i,r;if(O.unmount&&O.unmount(a),(i=a.ref)&&(i.current&&i.current!=a.__e||Ie(i,null,e)),(i=a.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(n){O.__e(n,e)}i.base=i.__P=null}if(i=a.__k)for(r=0;r<i.length;r++)i[r]&&He(i[r],e,o||typeof a.type!="function");o||ve(a.__e),a.__c=a.__=a.__e=void 0}function Da(a,e,o){return this.constructor(a,o)}function Xe(a,e,o){var i,r,n,t;e==document&&(e=document.documentElement),O.__&&O.__(a,e),r=(i=typeof o=="function")?null:o&&o.__k||e.__k,n=[],t=[],fe(e,a=(!i&&o||e).__k=ba(j,null,[a]),r||Y,Y,e.namespaceURI,!i&&o?[o]:r?null:e.firstChild?oe.call(e.childNodes):null,n,!i&&o?o:r?r.__e:e.firstChild,i,t),Ge(n,a,t)}oe=ee.slice,O={__e:function(a,e,o,i){for(var r,n,t;e=e.__;)if((r=e.__c)&&!r.__)try{if((n=r.constructor)&&n.getDerivedStateFromError!=null&&(r.setState(n.getDerivedStateFromError(a)),t=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(a,i||{}),t=r.__d),t)return r.__E=r}catch(s){a=s}throw a}},Ue=0,fa=function(a){return a!=null&&a.constructor===void 0},K.prototype.setState=function(a,e){var o;o=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=M({},this.state),typeof a=="function"&&(a=a(M({},o),this.props)),a&&M(o,a),a!=null&&this.__v&&(e&&this._sb.push(e),ze(this))},K.prototype.forceUpdate=function(a){this.__v&&(this.__e=!0,a&&this.__h.push(a),ze(this))},K.prototype.render=j,k=[],Fe=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Le=function(a,e){return a.__v.__b-e.__v.__b},ae.__r=0,Be=/(PointerCapture)$|Capture$/i,ge=0,pe=ke(!1),ue=ke(!0),Ia=0;function Oe(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var L=Oe();function aa(a){L=a}var U={exec:()=>null};function f(a,e=""){let o=typeof a=="string"?a:a.source,i={replace:(r,n)=>{let t=typeof n=="string"?n:n.source;return t=t.replace(P.caret,"$1"),o=o.replace(r,t),i},getRegex:()=>new RegExp(o,e)};return i}var _a=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch(a){return!1}})(),P={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:a=>new RegExp(`^( {0,3}${a})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:a=>new RegExp(`^ {0,${Math.min(3,a-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:a=>new RegExp(`^ {0,${Math.min(3,a-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:a=>new RegExp(`^ {0,${Math.min(3,a-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:a=>new RegExp(`^ {0,${Math.min(3,a-1)}}#`),htmlBeginRegex:a=>new RegExp(`^ {0,${Math.min(3,a-1)}}<(?:[a-z].*>|!--)`,"i"),blockquoteBeginRegex:a=>new RegExp(`^ {0,${Math.min(3,a-1)}}>`)},Ca=/^(?:[ \t]*(?:\n|$))+/,Ra=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Ta=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Z=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,qa=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Pe=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,oa=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,ra=f(oa).replace(/bull/g,Pe).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Na=f(oa).replace(/bull/g,Pe).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Ee=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Ma=/^[^\n]+/,De=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,xa=f(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",De).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),za=f(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Pe).getRegex(),ce="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",_e=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Va=f("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",_e).replace("tag",ce).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),ia=f(Ee).replace("hr",Z).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ce).getRegex(),ka=f(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",ia).getRegex(),Ce={blockquote:ka,code:Ra,def:xa,fences:Ta,heading:qa,hr:Z,html:Va,lheading:ra,list:za,newline:Ca,paragraph:ia,table:U,text:Ma},Ze=f("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Z).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ce).getRegex(),Ua=w(E({},Ce),{lheading:Na,table:Ze,paragraph:f(Ee).replace("hr",Z).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Ze).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ce).getRegex()}),Fa=w(E({},Ce),{html:f(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",_e).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:U,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:f(Ee).replace("hr",Z).replace("heading",` *#{1,6} *[^
]`).replace("lheading",ra).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()}),La=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Ba=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,na=/^( {2,}|\\)\n(?!\s*$)/,wa=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,G=/[\p{P}\p{S}]/u,le=/[\s\p{P}\p{S}]/u,Re=/[^\s\p{P}\p{S}]/u,ya=f(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,le).getRegex(),sa=/(?!~)[\p{P}\p{S}]/u,ja=/(?!~)[\s\p{P}\p{S}]/u,Ga=/(?:[^\s\p{P}\p{S}]|~)/u,$a=f(/link|precode-code|html/,"g").replace("link",new RegExp("\\[(?:[^\\[\\]`]|(?<a>`+)[^`]+\\k<a>(?!`))*?\\]\\((?:\\\\[\\s\\S]|[^\\\\\\(\\)]|\\((?:\\\\[\\s\\S]|[^\\\\\\(\\)])*\\))*\\)")).replace("precode-",_a?"(?<!`)()":"(^^|[^`])").replace("code",new RegExp("(?<b>`+)[^`]+\\k<b>(?!`)")).replace("html",/<(?! )[^<>]*?>/).getRegex(),ta=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,Ha=f(ta,"u").replace(/punct/g,G).getRegex(),Xa=f(ta,"u").replace(/punct/g,sa).getRegex(),da="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Za=f(da,"gu").replace(/notPunctSpace/g,Re).replace(/punctSpace/g,le).replace(/punct/g,G).getRegex(),Ja=f(da,"gu").replace(/notPunctSpace/g,Ga).replace(/punctSpace/g,ja).replace(/punct/g,sa).getRegex(),Qa=f("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Re).replace(/punctSpace/g,le).replace(/punct/g,G).getRegex(),Wa=f(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,G).getRegex(),Ka="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",Ya=f(Ka,"gu").replace(/notPunctSpace/g,Re).replace(/punctSpace/g,le).replace(/punct/g,G).getRegex(),eo=f(/\\(punct)/,"gu").replace(/punct/g,G).getRegex(),ao=f(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),oo=f(_e).replace("(?:-->|$)","-->").getRegex(),ro=f("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",oo).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),se=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,io=f(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",se).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),ca=f(/^!?\[(label)\]\[(ref)\]/).replace("label",se).replace("ref",De).getRegex(),la=f(/^!?\[(ref)\](?:\[\])?/).replace("ref",De).getRegex(),no=f("reflink|nolink(?!\\()","g").replace("reflink",ca).replace("nolink",la).getRegex(),Je=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Te={_backpedal:U,anyPunctuation:eo,autolink:ao,blockSkip:$a,br:na,code:Ba,del:U,delLDelim:U,delRDelim:U,emStrongLDelim:Ha,emStrongRDelimAst:Za,emStrongRDelimUnd:Qa,escape:La,link:io,nolink:la,punctuation:ya,reflink:ca,reflinkSearch:no,tag:ro,text:wa,url:U},so=w(E({},Te),{link:f(/^!?\[(label)\]\((.*?)\)/).replace("label",se).getRegex(),reflink:f(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",se).getRegex()}),he=w(E({},Te),{emStrongRDelimAst:Ja,emStrongLDelim:Xa,delLDelim:Wa,delRDelim:Ya,url:f(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Je).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:f(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Je).getRegex()}),to=w(E({},he),{br:f(na).replace("{2,}","*").getRegex(),text:f(he.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()}),ie={normal:Ce,gfm:Ua,pedantic:Fa},H={normal:Te,gfm:he,breaks:to,pedantic:so},co={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Qe=a=>co[a];function q(a,e){if(e){if(P.escapeTest.test(a))return a.replace(P.escapeReplace,Qe)}else if(P.escapeTestNoEncode.test(a))return a.replace(P.escapeReplaceNoEncode,Qe);return a}function We(a){try{a=encodeURI(a).replace(P.percentDecode,"%")}catch(e){return null}return a}function Ke(a,e){var n;let o=a.replace(P.findPipe,(t,s,l)=>{let d=!1,m=s;for(;--m>=0&&l[m]==="\\";)d=!d;return d?"|":" |"}),i=o.split(P.splitPipe),r=0;if(i[0].trim()||i.shift(),i.length>0&&!((n=i.at(-1))!=null&&n.trim())&&i.pop(),e)if(i.length>e)i.splice(e);else for(;i.length<e;)i.push("");for(;r<i.length;r++)i[r]=i[r].trim().replace(P.slashPipe,"|");return i}function z(a,e,o){let i=a.length;if(i===0)return"";let r=0;for(;r<i;){let n=a.charAt(i-r-1);if(n===e&&!o)r++;else if(n!==e&&o)r++;else break}return a.slice(0,i-r)}function Ye(a){let e=a.split(`
`),o=e.length-1;for(;o>=0&&!e[o].trim();)o--;return e.length-o<=2?a:e.slice(0,o+1).join(`
`)}function lo(a,e){if(a.indexOf(e[1])===-1)return-1;let o=0;for(let i=0;i<a.length;i++)if(a[i]==="\\")i++;else if(a[i]===e[0])o++;else if(a[i]===e[1]&&(o--,o<0))return i;return o>0?-2:-1}function mo(a,e=0){let o=e,i="";for(let r of a)if(r==="	"){let n=4-o%4;i+=" ".repeat(n),o+=n}else i+=r,o++;return i}function ea(a,e,o,i,r){let n=e.href,t=e.title||null,s=a[1].replace(r.other.outputLinkReplace,"$1");i.state.inLink=!0;let l={type:a[0].charAt(0)==="!"?"image":"link",raw:o,href:n,title:t,text:s,tokens:i.inlineTokens(s)};return i.state.inLink=!1,l}function po(a,e,o){let i=a.match(o.other.indentCodeCompensation);if(i===null)return e;let r=i[1];return e.split(`
`).map(n=>{let t=n.match(o.other.beginningSpace);if(t===null)return n;let[s]=t;return s.length>=r.length?n.slice(r.length):n}).join(`
`)}var te=class{constructor(a){b(this,"options");b(this,"rules");b(this,"lexer");this.options=a||L}space(a){let e=this.rules.block.newline.exec(a);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(a){let e=this.rules.block.code.exec(a);if(e){let o=this.options.pedantic?e[0]:Ye(e[0]),i=o.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:o,codeBlockStyle:"indented",text:i}}}fences(a){let e=this.rules.block.fences.exec(a);if(e){let o=e[0],i=po(o,e[3]||"",this.rules);return{type:"code",raw:o,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:i}}}heading(a){let e=this.rules.block.heading.exec(a);if(e){let o=e[2].trim();if(this.rules.other.endingHash.test(o)){let i=z(o,"#");(this.options.pedantic||!i||this.rules.other.endingSpaceChar.test(i))&&(o=i.trim())}return{type:"heading",raw:z(e[0],`
`),depth:e[1].length,text:o,tokens:this.lexer.inline(o)}}}hr(a){let e=this.rules.block.hr.exec(a);if(e)return{type:"hr",raw:z(e[0],`
`)}}blockquote(a){let e=this.rules.block.blockquote.exec(a);if(e){let o=z(e[0],`
`).split(`
`),i="",r="",n=[];for(;o.length>0;){let t=!1,s=[],l;for(l=0;l<o.length;l++)if(this.rules.other.blockquoteStart.test(o[l]))s.push(o[l]),t=!0;else if(!t)s.push(o[l]);else break;o=o.slice(l);let d=s.join(`
`),m=d.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");i=i?`${i}
${d}`:d,r=r?`${r}
${m}`:m;let c=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(m,n,!0),this.lexer.state.top=c,o.length===0)break;let u=n.at(-1);if((u==null?void 0:u.type)==="code")break;if((u==null?void 0:u.type)==="blockquote"){let A=u,p=A.raw+`
`+o.join(`
`),S=this.blockquote(p);n[n.length-1]=S,i=i.substring(0,i.length-A.raw.length)+S.raw,r=r.substring(0,r.length-A.text.length)+S.text;break}else if((u==null?void 0:u.type)==="list"){let A=u,p=A.raw+`
`+o.join(`
`),S=this.list(p);n[n.length-1]=S,i=i.substring(0,i.length-u.raw.length)+S.raw,r=r.substring(0,r.length-A.raw.length)+S.raw,o=p.substring(n.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:i,tokens:n,text:r}}}list(a){var o,i;let e=this.rules.block.list.exec(a);if(e){let r=e[1].trim(),n=r.length>1,t={type:"list",raw:"",ordered:n,start:n?+r.slice(0,-1):"",loose:!1,items:[]};r=n?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=n?r:"[*+-]");let s=this.rules.other.listItemRegex(r),l=!1;for(;a;){let m=!1,c="",u="";if(!(e=s.exec(a))||this.rules.block.hr.test(a))break;c=e[0],a=a.substring(c.length);let A=mo(e[2].split(`
`,1)[0],e[1].length),p=a.split(`
`,1)[0],S=!A.trim(),g=0;if(this.options.pedantic?(g=2,u=A.trimStart()):S?g=e[1].length+1:(g=A.search(this.rules.other.nonSpaceChar),g=g>4?1:g,u=A.slice(g),g+=e[1].length),S&&this.rules.other.blankLine.test(p)&&(c+=p+`
`,a=a.substring(p.length+1),m=!0),!m){let h=this.rules.other.nextBulletRegex(g),v=this.rules.other.hrRegex(g),D=this.rules.other.fencesBeginRegex(g),R=this.rules.other.headingBeginRegex(g),V=this.rules.other.htmlBeginRegex(g),J=this.rules.other.blockquoteBeginRegex(g);for(;a;){let x=a.split(`
`,1)[0],N;if(p=x,this.options.pedantic?(p=p.replace(this.rules.other.listReplaceNesting,"  "),N=p):N=p.replace(this.rules.other.tabCharGlobal,"    "),D.test(p)||R.test(p)||V.test(p)||J.test(p)||h.test(p)||v.test(p))break;if(N.search(this.rules.other.nonSpaceChar)>=g||!p.trim())u+=`
`+N.slice(g);else{if(S||A.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||D.test(A)||R.test(A)||v.test(A))break;u+=`
`+p}S=!p.trim(),c+=x+`
`,a=a.substring(x.length+1),A=N.slice(g)}}t.loose||(l?t.loose=!0:this.rules.other.doubleBlankLine.test(c)&&(l=!0)),t.items.push({type:"list_item",raw:c,task:!!this.options.gfm&&this.rules.other.listIsTask.test(u),loose:!1,text:u,tokens:[]}),t.raw+=c}let d=t.items.at(-1);if(d)d.raw=d.raw.trimEnd(),d.text=d.text.trimEnd();else return;t.raw=t.raw.trimEnd();for(let m of t.items){if(this.lexer.state.top=!1,m.tokens=this.lexer.blockTokens(m.text,[]),m.task){if(m.text=m.text.replace(this.rules.other.listReplaceTask,""),((o=m.tokens[0])==null?void 0:o.type)==="text"||((i=m.tokens[0])==null?void 0:i.type)==="paragraph"){m.tokens[0].raw=m.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),m.tokens[0].text=m.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let u=this.lexer.inlineQueue.length-1;u>=0;u--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[u].src)){this.lexer.inlineQueue[u].src=this.lexer.inlineQueue[u].src.replace(this.rules.other.listReplaceTask,"");break}}let c=this.rules.other.listTaskCheckbox.exec(m.raw);if(c){let u={type:"checkbox",raw:c[0]+" ",checked:c[0]!=="[ ]"};m.checked=u.checked,t.loose?m.tokens[0]&&["paragraph","text"].includes(m.tokens[0].type)&&"tokens"in m.tokens[0]&&m.tokens[0].tokens?(m.tokens[0].raw=u.raw+m.tokens[0].raw,m.tokens[0].text=u.raw+m.tokens[0].text,m.tokens[0].tokens.unshift(u)):m.tokens.unshift({type:"paragraph",raw:u.raw,text:u.raw,tokens:[u]}):m.tokens.unshift(u)}}if(!t.loose){let c=m.tokens.filter(A=>A.type==="space"),u=c.length>0&&c.some(A=>this.rules.other.anyLine.test(A.raw));t.loose=u}}if(t.loose)for(let m of t.items){m.loose=!0;for(let c of m.tokens)c.type==="text"&&(c.type="paragraph")}return t}}html(a){let e=this.rules.block.html.exec(a);if(e){let o=Ye(e[0]);return{type:"html",block:!0,raw:o,pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:o}}}def(a){let e=this.rules.block.def.exec(a);if(e){let o=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),i=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:o,raw:z(e[0],`
`),href:i,title:r}}}table(a){var t;let e=this.rules.block.table.exec(a);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let o=Ke(e[1]),i=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),r=(t=e[3])!=null&&t.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],n={type:"table",raw:z(e[0],`
`),header:[],align:[],rows:[]};if(o.length===i.length){for(let s of i)this.rules.other.tableAlignRight.test(s)?n.align.push("right"):this.rules.other.tableAlignCenter.test(s)?n.align.push("center"):this.rules.other.tableAlignLeft.test(s)?n.align.push("left"):n.align.push(null);for(let s=0;s<o.length;s++)n.header.push({text:o[s],tokens:this.lexer.inline(o[s]),header:!0,align:n.align[s]});for(let s of r)n.rows.push(Ke(s,n.header.length).map((l,d)=>({text:l,tokens:this.lexer.inline(l),header:!1,align:n.align[d]})));return n}}lheading(a){let e=this.rules.block.lheading.exec(a);if(e){let o=e[1].trim();return{type:"heading",raw:z(e[0],`
`),depth:e[2].charAt(0)==="="?1:2,text:o,tokens:this.lexer.inline(o)}}}paragraph(a){let e=this.rules.block.paragraph.exec(a);if(e){let o=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:o,tokens:this.lexer.inline(o)}}}text(a){let e=this.rules.block.text.exec(a);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(a){let e=this.rules.inline.escape.exec(a);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(a){let e=this.rules.inline.tag.exec(a);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(a){let e=this.rules.inline.link.exec(a);if(e){let o=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(o)){if(!this.rules.other.endAngleBracket.test(o))return;let n=z(o.slice(0,-1),"\\");if((o.length-n.length)%2===0)return}else{let n=lo(e[2],"()");if(n===-2)return;if(n>-1){let t=(e[0].indexOf("!")===0?5:4)+e[1].length+n;e[2]=e[2].substring(0,n),e[0]=e[0].substring(0,t).trim(),e[3]=""}}let i=e[2],r="";if(this.options.pedantic){let n=this.rules.other.pedanticHrefTitle.exec(i);n&&(i=n[1],r=n[3])}else r=e[3]?e[3].slice(1,-1):"";return i=i.trim(),this.rules.other.startAngleBracket.test(i)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(o)?i=i.slice(1):i=i.slice(1,-1)),ea(e,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(a,e){let o;if((o=this.rules.inline.reflink.exec(a))||(o=this.rules.inline.nolink.exec(a))){let i=(o[2]||o[1]).replace(this.rules.other.multipleSpaceGlobal," "),r=e[i.toLowerCase()];if(!r){let n=o[0].charAt(0);return{type:"text",raw:n,text:n}}return ea(o,r,o[0],this.lexer,this.rules)}}emStrong(a,e,o=""){let i=this.rules.inline.emStrongLDelim.exec(a);if(!(!i||!i[1]&&!i[2]&&!i[3]&&!i[4]||i[4]&&o.match(this.rules.other.unicodeAlphaNumeric))&&(!(i[1]||i[3])||!o||this.rules.inline.punctuation.exec(o))){let r=[...i[0]].length-1,n,t,s=r,l=0,d=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(d.lastIndex=0,e=e.slice(-1*a.length+r);(i=d.exec(e))!==null;){if(n=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!n)continue;if(t=[...n].length,i[3]||i[4]){s+=t;continue}else if((i[5]||i[6])&&r%3&&!((r+t)%3)){l+=t;continue}if(s-=t,s>0)continue;t=Math.min(t,t+s+l);let m=[...i[0]][0].length,c=a.slice(0,r+i.index+m+t);if(Math.min(r,t)%2){let A=c.slice(1,-1);return{type:"em",raw:c,text:A,tokens:this.lexer.inlineTokens(A)}}let u=c.slice(2,-2);return{type:"strong",raw:c,text:u,tokens:this.lexer.inlineTokens(u)}}}}codespan(a){let e=this.rules.inline.code.exec(a);if(e){let o=e[2].replace(this.rules.other.newLineCharGlobal," "),i=this.rules.other.nonSpaceChar.test(o),r=this.rules.other.startingSpaceChar.test(o)&&this.rules.other.endingSpaceChar.test(o);return i&&r&&(o=o.substring(1,o.length-1)),{type:"codespan",raw:e[0],text:o}}}br(a){let e=this.rules.inline.br.exec(a);if(e)return{type:"br",raw:e[0]}}del(a,e,o=""){let i=this.rules.inline.delLDelim.exec(a);if(i&&(!i[1]||!o||this.rules.inline.punctuation.exec(o))){let r=[...i[0]].length-1,n,t,s=r,l=this.rules.inline.delRDelim;for(l.lastIndex=0,e=e.slice(-1*a.length+r);(i=l.exec(e))!==null;){if(n=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!n||(t=[...n].length,t!==r))continue;if(i[3]||i[4]){s+=t;continue}if(s-=t,s>0)continue;t=Math.min(t,t+s);let d=[...i[0]][0].length,m=a.slice(0,r+i.index+d+t),c=m.slice(r,-r);return{type:"del",raw:m,text:c,tokens:this.lexer.inlineTokens(c)}}}}autolink(a){let e=this.rules.inline.autolink.exec(a);if(e){let o,i;return e[2]==="@"?(o=e[1],i="mailto:"+o):(o=e[1],i=o),{type:"link",raw:e[0],text:o,href:i,tokens:[{type:"text",raw:o,text:o}]}}}url(a){var o,i;let e;if(e=this.rules.inline.url.exec(a)){let r,n;if(e[2]==="@")r=e[0],n="mailto:"+r;else{let t;do t=e[0],e[0]=(i=(o=this.rules.inline._backpedal.exec(e[0]))==null?void 0:o[0])!=null?i:"";while(t!==e[0]);r=e[0],e[1]==="www."?n="http://"+e[0]:n=e[0]}return{type:"link",raw:e[0],text:r,href:n,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(a){let e=this.rules.inline.text.exec(a);if(e){let o=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:o}}}},_=class be{constructor(e){b(this,"tokens");b(this,"options");b(this,"state");b(this,"inlineQueue");b(this,"tokenizer");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||L,this.options.tokenizer=this.options.tokenizer||new te,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let o={other:P,block:ie.normal,inline:H.normal};this.options.pedantic?(o.block=ie.pedantic,o.inline=H.pedantic):this.options.gfm&&(o.block=ie.gfm,this.options.breaks?o.inline=H.breaks:o.inline=H.gfm),this.tokenizer.rules=o}static get rules(){return{block:ie,inline:H}}static lex(e,o){return new be(o).lex(e)}static lexInline(e,o){return new be(o).inlineTokens(e)}lex(e){e=e.replace(P.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let o=0;o<this.inlineQueue.length;o++){let i=this.inlineQueue[o];this.inlineTokens(i.src,i.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,o=[],i=!1){var r,n,t;for(this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(P.tabCharGlobal,"    ").replace(P.spaceLine,""));e;){let s;if((n=(r=this.options.extensions)==null?void 0:r.block)!=null&&n.some(d=>(s=d.call({lexer:this},e,o))?(e=e.substring(s.raw.length),o.push(s),!0):!1))continue;if(s=this.tokenizer.space(e)){e=e.substring(s.raw.length);let d=o.at(-1);s.raw.length===1&&d!==void 0?d.raw+=`
`:o.push(s);continue}if(s=this.tokenizer.code(e)){e=e.substring(s.raw.length);let d=o.at(-1);(d==null?void 0:d.type)==="paragraph"||(d==null?void 0:d.type)==="text"?(d.raw+=(d.raw.endsWith(`
`)?"":`
`)+s.raw,d.text+=`
`+s.text,this.inlineQueue.at(-1).src=d.text):o.push(s);continue}if(s=this.tokenizer.fences(e)){e=e.substring(s.raw.length),o.push(s);continue}if(s=this.tokenizer.heading(e)){e=e.substring(s.raw.length),o.push(s);continue}if(s=this.tokenizer.hr(e)){e=e.substring(s.raw.length),o.push(s);continue}if(s=this.tokenizer.blockquote(e)){e=e.substring(s.raw.length),o.push(s);continue}if(s=this.tokenizer.list(e)){e=e.substring(s.raw.length),o.push(s);continue}if(s=this.tokenizer.html(e)){e=e.substring(s.raw.length),o.push(s);continue}if(s=this.tokenizer.def(e)){e=e.substring(s.raw.length);let d=o.at(-1);(d==null?void 0:d.type)==="paragraph"||(d==null?void 0:d.type)==="text"?(d.raw+=(d.raw.endsWith(`
`)?"":`
`)+s.raw,d.text+=`
`+s.raw,this.inlineQueue.at(-1).src=d.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title},o.push(s));continue}if(s=this.tokenizer.table(e)){e=e.substring(s.raw.length),o.push(s);continue}if(s=this.tokenizer.lheading(e)){e=e.substring(s.raw.length),o.push(s);continue}let l=e;if((t=this.options.extensions)!=null&&t.startBlock){let d=1/0,m=e.slice(1),c;this.options.extensions.startBlock.forEach(u=>{c=u.call({lexer:this},m),typeof c=="number"&&c>=0&&(d=Math.min(d,c))}),d<1/0&&d>=0&&(l=e.substring(0,d+1))}if(this.state.top&&(s=this.tokenizer.paragraph(l))){let d=o.at(-1);i&&(d==null?void 0:d.type)==="paragraph"?(d.raw+=(d.raw.endsWith(`
`)?"":`
`)+s.raw,d.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=d.text):o.push(s),i=l.length!==e.length,e=e.substring(s.raw.length);continue}if(s=this.tokenizer.text(e)){e=e.substring(s.raw.length);let d=o.at(-1);(d==null?void 0:d.type)==="text"?(d.raw+=(d.raw.endsWith(`
`)?"":`
`)+s.raw,d.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=d.text):o.push(s);continue}if(e){let d="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(d);break}else throw new Error(d)}}return this.state.top=!0,o}inline(e,o=[]){return this.inlineQueue.push({src:e,tokens:o}),o}inlineTokens(e,o=[]){var l,d,m,c,u,A;this.tokenizer.lexer=this;let i=e,r=null;if(this.tokens.links){let p=Object.keys(this.tokens.links);if(p.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(i))!==null;)p.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(i=i.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(i))!==null;)i=i.slice(0,r.index)+"++"+i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let n;for(;(r=this.tokenizer.rules.inline.blockSkip.exec(i))!==null;)n=r[2]?r[2].length:0,i=i.slice(0,r.index+n)+"["+"a".repeat(r[0].length-n-2)+"]"+i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);i=(m=(d=(l=this.options.hooks)==null?void 0:l.emStrongMask)==null?void 0:d.call({lexer:this},i))!=null?m:i;let t=!1,s="";for(;e;){t||(s=""),t=!1;let p;if((u=(c=this.options.extensions)==null?void 0:c.inline)!=null&&u.some(g=>(p=g.call({lexer:this},e,o))?(e=e.substring(p.raw.length),o.push(p),!0):!1))continue;if(p=this.tokenizer.escape(e)){e=e.substring(p.raw.length),o.push(p);continue}if(p=this.tokenizer.tag(e)){e=e.substring(p.raw.length),o.push(p);continue}if(p=this.tokenizer.link(e)){e=e.substring(p.raw.length),o.push(p);continue}if(p=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(p.raw.length);let g=o.at(-1);p.type==="text"&&(g==null?void 0:g.type)==="text"?(g.raw+=p.raw,g.text+=p.text):o.push(p);continue}if(p=this.tokenizer.emStrong(e,i,s)){e=e.substring(p.raw.length),o.push(p);continue}if(p=this.tokenizer.codespan(e)){e=e.substring(p.raw.length),o.push(p);continue}if(p=this.tokenizer.br(e)){e=e.substring(p.raw.length),o.push(p);continue}if(p=this.tokenizer.del(e,i,s)){e=e.substring(p.raw.length),o.push(p);continue}if(p=this.tokenizer.autolink(e)){e=e.substring(p.raw.length),o.push(p);continue}if(!this.state.inLink&&(p=this.tokenizer.url(e))){e=e.substring(p.raw.length),o.push(p);continue}let S=e;if((A=this.options.extensions)!=null&&A.startInline){let g=1/0,h=e.slice(1),v;this.options.extensions.startInline.forEach(D=>{v=D.call({lexer:this},h),typeof v=="number"&&v>=0&&(g=Math.min(g,v))}),g<1/0&&g>=0&&(S=e.substring(0,g+1))}if(p=this.tokenizer.inlineText(S)){e=e.substring(p.raw.length),p.raw.slice(-1)!=="_"&&(s=p.raw.slice(-1)),t=!0;let g=o.at(-1);(g==null?void 0:g.type)==="text"?(g.raw+=p.raw,g.text+=p.text):o.push(p);continue}if(e){let g="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(g);break}else throw new Error(g)}}return o}},de=class{constructor(a){b(this,"options");b(this,"parser");this.options=a||L}space(a){return""}code({text:a,lang:e,escaped:o}){var n;let i=(n=(e||"").match(P.notSpaceStart))==null?void 0:n[0],r=a.replace(P.endingNewline,"")+`
`;return i?'<pre><code class="language-'+q(i)+'">'+(o?r:q(r,!0))+`</code></pre>
`:"<pre><code>"+(o?r:q(r,!0))+`</code></pre>
`}blockquote({tokens:a}){return`<blockquote>
${this.parser.parse(a)}</blockquote>
`}html({text:a}){return a}def(a){return""}heading({tokens:a,depth:e}){return`<h${e}>${this.parser.parseInline(a)}</h${e}>
`}hr(a){return`<hr>
`}list(a){let e=a.ordered,o=a.start,i="";for(let t=0;t<a.items.length;t++){let s=a.items[t];i+=this.listitem(s)}let r=e?"ol":"ul",n=e&&o!==1?' start="'+o+'"':"";return"<"+r+n+`>
`+i+"</"+r+`>
`}listitem(a){return`<li>${this.parser.parse(a.tokens)}</li>
`}checkbox({checked:a}){return"<input "+(a?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:a}){return`<p>${this.parser.parseInline(a)}</p>
`}table(a){let e="",o="";for(let r=0;r<a.header.length;r++)o+=this.tablecell(a.header[r]);e+=this.tablerow({text:o});let i="";for(let r=0;r<a.rows.length;r++){let n=a.rows[r];o="";for(let t=0;t<n.length;t++)o+=this.tablecell(n[t]);i+=this.tablerow({text:o})}return i&&(i=`<tbody>${i}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+i+`</table>
`}tablerow({text:a}){return`<tr>
${a}</tr>
`}tablecell(a){let e=this.parser.parseInline(a.tokens),o=a.header?"th":"td";return(a.align?`<${o} align="${a.align}">`:`<${o}>`)+e+`</${o}>
`}strong({tokens:a}){return`<strong>${this.parser.parseInline(a)}</strong>`}em({tokens:a}){return`<em>${this.parser.parseInline(a)}</em>`}codespan({text:a}){return`<code>${q(a,!0)}</code>`}br(a){return"<br>"}del({tokens:a}){return`<del>${this.parser.parseInline(a)}</del>`}link({href:a,title:e,tokens:o}){let i=this.parser.parseInline(o),r=We(a);if(r===null)return i;a=r;let n='<a href="'+a+'"';return e&&(n+=' title="'+q(e)+'"'),n+=">"+i+"</a>",n}image({href:a,title:e,text:o,tokens:i}){i&&(o=this.parser.parseInline(i,this.parser.textRenderer));let r=We(a);if(r===null)return q(o);a=r;let n=`<img src="${a}" alt="${q(o)}"`;return e&&(n+=` title="${q(e)}"`),n+=">",n}text(a){return"tokens"in a&&a.tokens?this.parser.parseInline(a.tokens):"escaped"in a&&a.escaped?a.text:q(a.text)}},qe=class{strong({text:a}){return a}em({text:a}){return a}codespan({text:a}){return a}del({text:a}){return a}html({text:a}){return a}text({text:a}){return a}link({text:a}){return""+a}image({text:a}){return""+a}br(){return""}checkbox({raw:a}){return a}},C=class Se{constructor(e){b(this,"options");b(this,"renderer");b(this,"textRenderer");this.options=e||L,this.options.renderer=this.options.renderer||new de,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new qe}static parse(e,o){return new Se(o).parse(e)}static parseInline(e,o){return new Se(o).parseInline(e)}parse(e){var i,r;this.renderer.parser=this;let o="";for(let n=0;n<e.length;n++){let t=e[n];if((r=(i=this.options.extensions)==null?void 0:i.renderers)!=null&&r[t.type]){let l=t,d=this.options.extensions.renderers[l.type].call({parser:this},l);if(d!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(l.type)){o+=d||"";continue}}let s=t;switch(s.type){case"space":{o+=this.renderer.space(s);break}case"hr":{o+=this.renderer.hr(s);break}case"heading":{o+=this.renderer.heading(s);break}case"code":{o+=this.renderer.code(s);break}case"table":{o+=this.renderer.table(s);break}case"blockquote":{o+=this.renderer.blockquote(s);break}case"list":{o+=this.renderer.list(s);break}case"checkbox":{o+=this.renderer.checkbox(s);break}case"html":{o+=this.renderer.html(s);break}case"def":{o+=this.renderer.def(s);break}case"paragraph":{o+=this.renderer.paragraph(s);break}case"text":{o+=this.renderer.text(s);break}default:{let l='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return o}parseInline(e,o=this.renderer){var r,n;this.renderer.parser=this;let i="";for(let t=0;t<e.length;t++){let s=e[t];if((n=(r=this.options.extensions)==null?void 0:r.renderers)!=null&&n[s.type]){let d=this.options.extensions.renderers[s.type].call({parser:this},s);if(d!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){i+=d||"";continue}}let l=s;switch(l.type){case"escape":{i+=o.text(l);break}case"html":{i+=o.html(l);break}case"link":{i+=o.link(l);break}case"image":{i+=o.image(l);break}case"checkbox":{i+=o.checkbox(l);break}case"strong":{i+=o.strong(l);break}case"em":{i+=o.em(l);break}case"codespan":{i+=o.codespan(l);break}case"br":{i+=o.br(l);break}case"del":{i+=o.del(l);break}case"text":{i+=o.text(l);break}default:{let d='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(d),"";throw new Error(d)}}}return i}},ne,X=(ne=class{constructor(a){b(this,"options");b(this,"block");this.options=a||L}preprocess(a){return a}postprocess(a){return a}processAllTokens(a){return a}emStrongMask(a){return a}provideLexer(a=this.block){return a?_.lex:_.lexInline}provideParser(a=this.block){return a?C.parse:C.parseInline}},b(ne,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens","emStrongMask"])),b(ne,"passThroughHooksRespectAsync",new Set(["preprocess","postprocess","processAllTokens"])),ne),uo=class{constructor(...a){b(this,"defaults",Oe());b(this,"options",this.setOptions);b(this,"parse",this.parseMarkdown(!0));b(this,"parseInline",this.parseMarkdown(!1));b(this,"Parser",C);b(this,"Renderer",de);b(this,"TextRenderer",qe);b(this,"Lexer",_);b(this,"Tokenizer",te);b(this,"Hooks",X);this.use(...a)}walkTokens(a,e){var i,r;let o=[];for(let n of a)switch(o=o.concat(e.call(this,n)),n.type){case"table":{let t=n;for(let s of t.header)o=o.concat(this.walkTokens(s.tokens,e));for(let s of t.rows)for(let l of s)o=o.concat(this.walkTokens(l.tokens,e));break}case"list":{let t=n;o=o.concat(this.walkTokens(t.items,e));break}default:{let t=n;(r=(i=this.defaults.extensions)==null?void 0:i.childTokens)!=null&&r[t.type]?this.defaults.extensions.childTokens[t.type].forEach(s=>{let l=t[s].flat(1/0);o=o.concat(this.walkTokens(l,e))}):t.tokens&&(o=o.concat(this.walkTokens(t.tokens,e)))}}return o}use(...a){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return a.forEach(o=>{let i=E({},o);if(i.async=this.defaults.async||i.async||!1,o.extensions&&(o.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){let n=e.renderers[r.name];n?e.renderers[r.name]=function(...t){let s=r.renderer.apply(this,t);return s===!1&&(s=n.apply(this,t)),s}:e.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let n=e[r.level];n?n.unshift(r.tokenizer):e[r.level]=[r.tokenizer],r.start&&(r.level==="block"?e.startBlock?e.startBlock.push(r.start):e.startBlock=[r.start]:r.level==="inline"&&(e.startInline?e.startInline.push(r.start):e.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(e.childTokens[r.name]=r.childTokens)}),i.extensions=e),o.renderer){let r=this.defaults.renderer||new de(this.defaults);for(let n in o.renderer){if(!(n in r))throw new Error(`renderer '${n}' does not exist`);if(["options","parser"].includes(n))continue;let t=n,s=o.renderer[t],l=r[t];r[t]=(...d)=>{let m=s.apply(r,d);return m===!1&&(m=l.apply(r,d)),m||""}}i.renderer=r}if(o.tokenizer){let r=this.defaults.tokenizer||new te(this.defaults);for(let n in o.tokenizer){if(!(n in r))throw new Error(`tokenizer '${n}' does not exist`);if(["options","rules","lexer"].includes(n))continue;let t=n,s=o.tokenizer[t],l=r[t];r[t]=(...d)=>{let m=s.apply(r,d);return m===!1&&(m=l.apply(r,d)),m}}i.tokenizer=r}if(o.hooks){let r=this.defaults.hooks||new X;for(let n in o.hooks){if(!(n in r))throw new Error(`hook '${n}' does not exist`);if(["options","block"].includes(n))continue;let t=n,s=o.hooks[t],l=r[t];X.passThroughHooks.has(n)?r[t]=d=>{if(this.defaults.async&&X.passThroughHooksRespectAsync.has(n))return(async()=>{let c=await s.call(r,d);return l.call(r,c)})();let m=s.call(r,d);return l.call(r,m)}:r[t]=(...d)=>{if(this.defaults.async)return(async()=>{let c=await s.apply(r,d);return c===!1&&(c=await l.apply(r,d)),c})();let m=s.apply(r,d);return m===!1&&(m=l.apply(r,d)),m}}i.hooks=r}if(o.walkTokens){let r=this.defaults.walkTokens,n=o.walkTokens;i.walkTokens=function(t){let s=[];return s.push(n.call(this,t)),r&&(s=s.concat(r.call(this,t))),s}}this.defaults=E(E({},this.defaults),i)}),this}setOptions(a){return this.defaults=E(E({},this.defaults),a),this}lexer(a,e){return _.lex(a,e!=null?e:this.defaults)}parser(a,e){return C.parse(a,e!=null?e:this.defaults)}parseMarkdown(a){return(e,o)=>{let i=E({},o),r=E(E({},this.defaults),i),n=this.onError(!!r.silent,!!r.async);if(this.defaults.async===!0&&i.async===!1)return n(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return n(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return n(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(r.hooks&&(r.hooks.options=r,r.hooks.block=a),r.async)return(async()=>{let t=r.hooks?await r.hooks.preprocess(e):e,s=await(r.hooks?await r.hooks.provideLexer(a):a?_.lex:_.lexInline)(t,r),l=r.hooks?await r.hooks.processAllTokens(s):s;r.walkTokens&&await Promise.all(this.walkTokens(l,r.walkTokens));let d=await(r.hooks?await r.hooks.provideParser(a):a?C.parse:C.parseInline)(l,r);return r.hooks?await r.hooks.postprocess(d):d})().catch(n);try{r.hooks&&(e=r.hooks.preprocess(e));let t=(r.hooks?r.hooks.provideLexer(a):a?_.lex:_.lexInline)(e,r);r.hooks&&(t=r.hooks.processAllTokens(t)),r.walkTokens&&this.walkTokens(t,r.walkTokens);let s=(r.hooks?r.hooks.provideParser(a):a?C.parse:C.parseInline)(t,r);return r.hooks&&(s=r.hooks.postprocess(s)),s}catch(t){return n(t)}}}onError(a,e){return o=>{if(o.message+=`
Please report this to https://github.com/markedjs/marked.`,a){let i="<p>An error occurred:</p><pre>"+q(o.message+"",!0)+"</pre>";return e?Promise.resolve(i):i}if(e)return Promise.reject(o);throw o}}},F=new uo;function I(a,e){return F.parse(a,e)}I.options=I.setOptions=function(a){return F.setOptions(a),I.defaults=F.defaults,aa(I.defaults),I};I.getDefaults=Oe;I.defaults=L;I.use=function(...a){return F.use(...a),I.defaults=F.defaults,aa(I.defaults),I};I.walkTokens=function(a,e){return F.walkTokens(a,e)};I.parseInline=F.parseInline;I.Parser=C;I.parser=C.parse;I.Renderer=de;I.TextRenderer=qe;I.Lexer=_;I.lexer=_.lex;I.Tokenizer=te;I.Hooks=X;I.parse=I;var Io=I.options,ho=I.setOptions,bo=I.use,So=I.walkTokens,Oo=I.parseInline;var Po=C.parse,Eo=_.lex;var ma=[{id:"IN02-2014",texto:`MINISTÉRIO DA AGRICULTURA, PECUÁRIA E ABASTECIMENTO

GABINETE DO MINISTRO

INSTRUÇÃO NORMATIVA Nº 2, DE 6 DE FEVEREIRO DE 2014

O MINISTRO DE ESTADO DA AGRICULTURA, PECUÁRIA E ABASTECIMENTO, no uso das atribuições que lhe confere o art. 87, parágrafo único, inciso II, da Constituição, tendo em vista o disposto no Decreto nº 24.114, de 12 de abril de 1934, no Decreto no 5.741, de 30 de março de 2006, e o que consta dos Processos no 21000.004565/1998-69 e nº 21000.000179/2002-45, resolve:

Art. 1º Estabelecer as medidas a serem adotadas pelo produtor, importador, comerciante ou detentor de
plantas e partes de plantas de espécies do gênero Vitis, para prevenção, controle e erradicação da praga *Xanthomonas campestris pv. viticola*, agente etiológico do cancro bacteriano da videira.

Art. 2º As medidas fitossanitárias a serem adotadas em áreas de produção de frutos, em campos de plantas
fornecedoras de material de propagação, ou em quaisquer áreas com existência de plantas do gênero Vitis, em Unidades da Federação (UFs) sem ocorrência da praga, estão estabelecidas a seguir.
§ 1º As medidas fitossanitárias a serem adotadas pelo produtor, proprietário, arrendatário ou ocupante a qualquer título, de propriedade com plantas do gênero Vitis são:
I - utilização de material propagativo livre da praga;
II - impedimento da entrada na propriedade, de pessoas e equipamentos provenientes de áreas com
ocorrência da praga, sem as devidas medidas profiláticas; e
III - inspeção visual frequente das plantas e comunicação imediata ao Órgão Oficial de Defesa
Agropecuária sobre qualquer suspeita de ocorrência da praga.
§ 2º As medidas fitossanitárias a serem adotadas pelo Órgão Oficial de Defesa Agropecuária são:
I - levantamentos de detecção a cada ciclo produtivo, realizando inspeção visual de ramos, folhas,
inflorescências e cachos, obedecendo a uma casualização em ziguezague, sendo amostradas:
a) seis plantas dentro da área e quatro plantas na bordadura, para áreas de até um hectare; ou b) doze plantas dentro da área e oito plantas na bordadura, para áreas de mais de um até cinco hectares, ou adoção de uma proporcionalidade, para áreas maiores de cinco hectares;
II - concentração dos levantamentos nas áreas com variedades mais suscetíveis e no período de condições
ambientais favoráveis a ocorrência da praga; e
III - coleta e envio de material com sintomas para diagnóstico laboratorial.
§ 3º Em caso de confirmação, por laudo laboratorial, da presença de *Xanthomonas campestris pv. viticola* em UFs sem ocorrência da praga, devem ser adotadas as seguintes medidas para erradicação do foco:
I - eliminação pelo produtor, proprietário, arrendatário ou ocupante a qualquer título da propriedade, por
meio de arranquio e queima, de todas as plantas e partes de plantas do talhão ou do lote no viveiro, inclusive as ervas daninhas;
II - proibição, pelo Órgão Oficial de Defesa Agropecuária, do plantio de variedades mais suscetíveis a
*Xanthomonas campestris pv. viticola* no local da erradicação, durante três anos; e
III - inspeção conjunta pelo produtor e pelo Órgão Oficial de Defesa Agropecuária, da área afetada e
talhões circunvizinhos daqueles erradicados, a cada trinta dias, no período de condições ambientais favoráveis a ocorrência da praga, e a cada sessenta dias, no período de condições ambientais menos favoráveis, durante dois ciclos produtivos, com a finalidade de eliminar novos focos.

Art. 3º As medidas fitossanitárias a serem adotadas em áreas de produção de frutos, em campos de plantas
fornecedoras de material de propagação, ou em quaisquer áreas com existência de plantas do gênero Vitis, em Unidades da Federação (UFs) com ocorrência da praga, estão estabelecidas conforme a seguir:
§ 1º As medidas fitossanitárias a serem adotadas pelo produtor, proprietário, arrendatário ou ocupante a qualquer titulo, de propriedade com plantas do gênero Vitis, são:
I - impedimento da entrada na propriedade que se localize em município sem ocorrência da praga, de
pessoas e equipamentos provenientes de municípios com ocorrência da praga, sem as devidas medidas profiláticas;
II - realização de podas nos meses de menores índices pluviométricos, para as variedades mais
suscetíveis;
III - desinfestação, após cada utilização, de equipamentos, de ferramentas para poda e de material de
colheita, com produtos sanitizantes recomendados pela pesquisa; e
IV - eliminação de todo o material resultante das podas, por meio de enterrio ou queima, para as
variedades mais suscetíveis e sintomáticas.
§ 2º As medidas fitossanitárias a serem adotadas pelo Órgão Oficial de Defesa Agropecuária são:
I - levantamentos de detecção e delimitação a cada ciclo produtivo, realizando inspeção visual de ramos,
folhas, inflorescências e cachos;
II - concentração dos levantamentos nas áreas com variedades mais suscetíveis e no período de condições
ambientais favoráveis a ocorrência da praga; e
III - coleta e envio de material com sintomas para diagnóstico laboratorial.
§ 3º Caso seja detectada a presença da praga em município sem ocorrência, dentro de UFs com ocorrência da praga, devem ser adotadas as mesmas medidas para erradicação do foco descritas no § 3º do art. 2º desta Instrução Normativa.

Art. 4º As medidas fitossanitárias para produção de mudas estão estabelecidas a seguir, sendo
complementares à legislação brasileira sobre sementes e mudas.
§ 1º As medidas fitossanitárias a serem adotadas pelo produtor de mudas de videira são:
I - manutenção do viveiro cercado com a finalidade de restringir o ingresso de pessoas estranhas ao
serviço;
II fornecimento de vestimentas e botas que deverão ser utilizadas exclusivamente no viveiro;
III - desinfestação dos equipamentos e ferramentas utilizados na produção, com produtos sanitizantes
recomendados pela pesquisa;
IV - realização de inspeções visuais em todo o viveiro semanalmente, concentrando-se nas variedades
mais suscetíveis e nos períodos de condições ambientais favoráveis a ocorrência da praga; e
V - comunicação imediata ao Órgão Oficial de Defesa Agropecuária sobre qualquer suspeita de
ocorrência da praga.
§ 2º As medidas fitossanitárias a serem adotadas pelos Órgãos Oficiais de Defesa Agropecuária são:

I - inspeções para verificação de que os campos de plantas fornecedoras de material de propagação,
borbulheiras, jardins clonais e quaisquer outros locais que forneçam material de propagação sejam conduzidos sob as medidas fitossanitárias constantes nesta Instrução Normativa;
II - coleta e envio de material com sintomas para diagnóstico laboratorial; e
III - exigência de que, quando confirmada a presença de *Xanthomonas campestris pv. viticola* por laudo
laboratorial, as mudas de todo o lote sejam eliminadas por meio de queima.

Art. 5º Os levantamentos para detecção e delimitação das áreas de ocorrência da praga e a orientação aos
produtores e viveiristas sobre as variedades suscetíveis e sobre as medidas obrigatórias de prevenção, controle e erradicação estabelecidas nesta Instrução Normativa, são de responsabilidade dos Órgãos Oficiais de Defesa Agropecuária.
§ 1º Quando se detectar material suspeito de infecção por *Xanthomonas campestris pv. viticola*, coleta-se amostra para diagnóstico em laboratório da Rede Nacional de Laboratórios Agropecuários do Sistema Unificado de Atenção à Sanidade Agropecuária.
§ 2º Caso o diagnóstico laboratorial confirme a presença da praga, devem ser adotadas às expensas do produtor, importador, comerciante ou detentor, todas as medidas exigidas para prevenção, controle e erradicação da praga.
§ 3º Os Órgãos Oficiais de Defesa Agropecuária devem realizar inspeções durante o ciclo produtivo da cultura, a fim de verificar o cumprimento das medidas estabelecidas nesta Instrução Normativa.
§ 4º Os Órgãos Oficiais de Defesa Agropecuária devem encaminhar os relatórios decorrentes das inspeções ao Serviço responsável pela Sanidade Vegetal na Superintendência Federal de Agricultura (SFA) da UF, que por sua vez encaminha cópia ao Departamento de Sanidade Vegetal - DSV, Secretaria de Defesa Agropecuária - SDA, Ministério da Agricultura, Pecuária e Abastecimento- MAPA.

Art. 6º O trânsito de plantas e partes de plantas do gênero Vitis provenientes de UF com ocorrência
comprovada da praga com destino a UF sem ocorrência da praga somente é permitido nos seguintes casos:
I - quando se tratar de mudas acompanhadas de Permissão de Trânsito de Vegetais (PTV) com a seguinte
Declaração Adicional:
"As mudas foram obtidas por micropropagação e indexadas para *Xanthomonas campestris pv. viticola*";
II - quando se tratar de frutos exclusivamente para consumo in natura e acompanhados de PTV com a
seguinte Declaração Adicional:
"Os frutos foram produzidos em propriedade onde são adotadas as medidas de prevenção e controle do cancro bacteriano da videira, previstas na legislação fitossanitária"; e
III - quando se tratar de material vegetal para fins de pesquisa institucional - caso em que os Órgãos
Estaduais de Defesa Agropecuária das UFs de origem e de destino atenderão a solicitação do pesquisador, por se tratar de interesse nacional em obtenção de conhecimento sobre a praga - desde que obrigatoriamente cumpridos os seguintes procedimentos:
a) o material deve transitar acompanhado de PTV com a seguinte Declaração Adicional: "O material foi lacrado na origem, sob número de lacre X, e embalado de maneira a garantir a não dispersão da praga";
b) PTV será emitida após o recebimento de uma via do Termo de Compromisso, assinada pelo pesquisador, o qual se responsabiliza pela não dispersão da praga, e pela esterilização do material após a realização da pesquisa;
c) Órgão Estadual de Defesa Agropecuária da UF de destino deve manter uma segunda via do Termo de Compromisso assinada, com anotação da identificação da PTV que acompanhou o material; e d) o Órgão Estadual de Defesa Agropecuária da UF de origem do material deve comunicar o envio, ao Órgão Estadual de Defesa Agropecuária da UF de destino.

Art. 7º Cabe ao Serviço responsável pela Sanidade Vegetal da SFA na UF a supervisão da execução das
medidas previstas nesta Instrução Normativa.
Parágrafo único. As ações a serem executadas pelas Unidades da Federação originam-se de convênios firmados junto ao MAPA, nos termos do art. 157 do Decreto nº 5.741, de 30 de março de 2006.

Art. 8º Esta Instrução Normativa entra em vigor decorridos 30 (trinta) dias após a sua publicação.

Art. 9º Fica revogada a Instrução Normativa nº 9, de 20 de abril de 2006.

ANTÔNIO ANDRADE
D.O.U., 07/02/2014 - Seção 1`},{id:"IN02-2018",texto:`MINISTÉRIO DA AGRICULTURA, PECUÁRIA E ABASTECIMENTO

GABINETE DA SDA

INSTRUÇÃO NORMATIVA Nº 2, DE 19 DE JANEIRO DE 2018

O SECRETÁRIO DE DEFESA AGROPECUÁRIA, DO MINISTÉRIO DA AGRICULTURA, PECUÁRIA E ABASTECIMENTO, no uso das atribuições que lhe conferem os arts. 18 e 53 do Anexo I do Decreto nº 8.852, de 20 de setembro de 2016, tendo em vista o disposto no Decreto nº 24.114, de 12 de abril de 1934, no Decreto nº 5.741, de 30 de março de 2006, no Decreto nº 5.759, de 17 de abril de 2006, na Instrução Normativa nº 28, de 20 de julho de 2017, e o que consta do Processo nº 21000.053608/2017-63, resolve:

Art. 1º Fica estabelecida a Classificação de Risco de introdução e
dispersão da praga *Bactrocera carambolae* das Unidades da Federação sem ocorrência da praga, conforme anexo.

Art. 2º Esta Instrução Normativa entra em vigor na data de sua
publicação.

##### Classificação de Risco por Unidade da Federação

 **BAIXO:** Mato Grosso do Sul, Ceará, Rio Grande do Norte, Paraíba, Pernambuco, Bahia, Alagoas, Sergipe, Minas Gerais, Espírito Santo, Rio de Janeiro, São Paulo, Paraná, Santa Catarina e Rio Grande do Sul.
**MÉDIO:** Acre, Piauí, Rondônia, Goiás e Distrito Federal 
**ALTO:** Amazonas, Tocantins, Mato Grosso e Maranhão Este conteúdo não substitui o publicado na versão certificada.`},{id:"IN08-2012",texto:`MINISTÉRIO DA AGRICULTURA, PECUÁRIA E ABASTECIMENTO

GABINETE DO MINISTRO

INSTRUÇÃO NORMATIVA Nº 8, DE 17 DE ABRIL DE 2012

O MINISTRO DE ESTADO, INTERINO, DA AGRICULTURA, PECUÁRIA E ABASTECIMENTO,
no uso da atribuição que lhe confere o art. 87, parágrafo único, inciso II, da Constituição, tendo em vista o disposto no Decreto nº 5.741, de 30 de março de 2006, no Decreto nº 24.114, de 12 de abril de 1934, e o que consta do Processo nº 21000.005697/2008-41, resolve:

Art. 1º Proibir o trânsito de vegetais e suas partes das espécies *Citrus spp.*, *Cocos nucifera*, *Acacia sp.*,
*Azadirachta indica*, *Melia azedarach* e *Sorghum bicolor*, hospedeiras do Ácaro Hindu dos Citros (*Schizotetranychus hindustanicus*), quando oriundas de Unidades da Federação (UF) onde seja constatada, por laudo laboratorial oficial, a presença da praga. *(Redação dada pela Instrução Normativa* *6/2013/MAPA)*
_____________________________________________________________________ *Redações* *Anteriores* 

Parágrafo único. Excetuam-se desta proibição o material in vitro e a madeira serrada de todas as espécies relacionadas no caput deste artigo, assim como os frutos de *Cocos nucifera* secos e descascados.
*(Acrescentado pela Instrução Normativa 6/2013/MAPA)*

Art. 2º Os frutos de *Citrus spp.* provenientes de UF com ocorrência da praga poderão transitar para outras UFs desde que passem por beneficiamento seguido de inspeção.
§ 1º O beneficiamento deverá constar de, no mínimo, imersão de frutos em solução de hipoclorito de sódio a 200 ppm por 10 minutos, seguida de lavagem com solução de detergente neutro, escovação, secagem e aplicação de cera.
§ 2º A inspeção será realizada pelo Responsável Técnico habilitado para Certificação Fitossanitária de Origem em amostra representativa de cada partida, colhida de acordo com a seguinte tabela:
| Tamanho da partida (nº de caixas) | Tamanho da amostra | Quantidade de frutos a inspecionar (kg) |
| --- | --- | --- |
| 001 a 500 | 1,0% | 5 |
| 501 a 2000 | 0,5% | 10 |
| 2001 a 5000 | 0,2% | 15 |
| 5001 a 20000 | 0,1% | 20 |
| mais de 20001 | 0,05% | 30 |

§ 3º O Certificado Fitossanitário de Origem - CFO ou Certificado Fitossanitário de Origem Consolidado - CFOC deverá conter a seguinte Declaração Adicional: "Os frutos foram imersos em solução de hipoclorito de sódio a 200 ppm por 10 minutos, seguido de lavagem com solução de detergente neutro, escovação, secagem e aplicação de cera e encontram-se livres do Ácaro Hindu dos Citros".
§ 4º Para o trânsito de frutos, será exigida a Permissão de Trânsito de Vegetais (PTV) devidamente embasada em Certificado Fitossanitário de Origem (CFO) ou Certificado Fitossanitário de Origem Consolidado (CFOC) com a seguinte Declaração Adicional:

"A partida atende às exigências constantes da Instrução Normativa nº [número desta Instrução Normativa] e encontra-se livre do Ácaro Hindu dos Citros".

Art. 3º Excetuam-se das exigências descritas nesta Instrução Normativa os vegetais hospedeiros e suas partes, oriundos de Área Livre da Praga (ALP) *Schizotetranichus hindustanicus*, oficialmente instituída pelo Ministério da Agricultura, Pecuária e Abastecimento, devendo essa condição ser atestada por PTV embasada em CFO ou CFOC com a seguinte Declaração Adicional:
"A partida é proveniente de Área Livre da Praga Ácaro Hindu dos Citros".

Art. 4º Esta Instrução Normativa entra em vigor na data de sua publicação.

Art. 5º Fica revogada a Instrução Normativa nº 34, de 8 de setembro de 2009 .

JOSÉ CARLOS VAZ

D.O.U., 18/04/2012 - Seção 1`},{id:"IN112-2020",texto:`DIÁRIO OFICIAL DA UNIÃO
Publicado em: 15/12/2020 | Edição: 239 | Seção: 1 | Página: 10
Órgão: Ministério da Agricultura, Pecuária e Abastecimento/Secretaria de Defesa Agropecuária

INSTRUÇÃO NORMATIVA Nº 112, DE 11 DE DEZEMBRO DE 2020

Institui o Plano Nacional de Prevenção e Vigilância de Moniliophthora roreri - PNPV/Monilíase.

O SECRETÁRIO DE DEFESA AGROPECUÁRIA DO MINISTÉRIO DA AGRICULTURA, PECUÁRIA E ABASTECIMENTO, no uso das atribuições que lhe conferem os arts. 21 e 63 do Anexo I do Decreto nº 10.253, de 20 de fevereiro de 2020, tendo em vista o disposto no Decreto nº 24.114, de 12 de abril de 1934, no Decreto nº 5.759, de 17 de abril de 2006, no Decreto nº 5.741, de 30 de março de 2006, no Decreto nº 8.133, de 28 de outubro de 2013, no Decreto nº 8.762, de 10 de maio de 2016, na Instrução Normativa nº 45, de 22 de agosto de 2018, na Instrução Normativa nº 39, de 1 de outubro de 2018, na Portaria nº 131, de 27 de junho de 2019, e o que consta do Processo nº 21000.007096/2019-25, resolve:

CAPÍTULO I
DAS DISPOSIÇÕES GERAIS

Art. 1º Instituir no âmbito do Programa Nacional de Prevenção e Vigilância de Pragas Quarentenárias Ausentes, o Plano Nacional de Prevenção e Vigilância de Moniliophthora roreri - PNPV/Monilíase, na forma desta Instrução Normativa.

Art. 2º O PNPV/Monilíase estabelece as diretrizes e os procedimentos operacionais para aplicação de medidas preventivas e de contenção, supressão e erradicação de focos de Moniliophthora roreri por meio de:
I - educação fitossanitária;
II - capacitação;
III - elaboração, coordenação e execução de ações fitossanitárias para prevenção; e
IV - elaboração, coordenação e execução de ações fitossanitárias para contingência.

Art. 3º O PNPV/Monilíase será coordenado pela área competente do Departamento de Sanidade Vegetal e Insumos Agrícolas, da Secretaria de Defesa Agropecuária, do Ministério da Agricultura, Pecuária e Abastecimento, visando identificar, propor e articular a implementação de ações fitossanitárias para a prevenção e contingência relacionadas à praga no Brasil.
Parágrafo único. O Departamento de Sanidade Vegetal e Insumos Agrícolas poderá convidar representantes de entidades públicas federais, estaduais e da iniciativa privada, vinculadas à pesquisa e à produção agropecuária para realizar ações do PNPV/Monilíase, cujas atividades, não remuneradas, serão consideradas de relevante interesse público.

Art. 4º Compete às Superintendências Federais de Agricultura, Pecuária e Abastecimento nas Unidades da Federação, por meio de suas unidades de sanidade vegetal:
I - implementar, executar e coordenar as ações do PNPV/Monilíase, em articulação com o Órgão Estadual de Defesa Sanitária Vegetal - OEDSV, com entidades e instituições de pesquisa agropecuária e com o setor produtivo, na respectiva Unidade da Federação - UF;
II - coordenar a capacitação dos agentes responsáveis pela execução das ações previstas neste PNPV/Monilíase; e
III - coordenar e implementar ações de educação fitossanitária junto a produtores, técnicos e população em geral.

CAPÍTULO II
DAS AÇÕES FITOSSANITÁRIAS PARA PREVENÇÃO DE MONILIOPHTHORA RORERI

Art. 5º As ações fitossanitárias para prevenção de Moniliophthora roreri serão aplicadas a partir da vigência desta Instrução Normativa, enquanto for considerada praga quarentenária ausente, priorizada conforme legislação específica.
Parágrafo único As áreas para a adoção das ações fitossanitárias previstas no caput serão definidas pelas Superintendências Federais de Agricultura, Pecuária e Abastecimento considerando a presença de hospedeiros suscetíveis a Moniliophthora roreri e a existência de pontos de ingresso de produtos vegetais oriundos de países onde a praga está presente.

Art. 6º As Superintendências Federais de Agricultura, Pecuária e Abastecimento deverão realizar em articulação com os Órgãos Estaduais de Defesa Sanitária Vegetal - OEDSV, levantamentos fitossanitários específicos de detecção da praga Moniliophthora roreri.
§ 1º A metodologia de levantamento específico de detecção será detalhada pelo Departamento de Sanidade Vegetal e Insumos Agrícolas e seguirá as diretrizes da Norma Internacional de Medidas Fitossanitárias nº 6 - Diretrizes para Vigilância.
§ 2º O levantamento deverá ser realizado anualmente, no período de frutificação do cacaueiro, do cupuaçuzeiro e de outras espécies dos gêneros Theobroma e Herrania.

Art. 7º O Departamento de Sanidade Vegetal e Insumos Agrícolas definirá diretrizes para a fiscalização e o controle de trânsito em portos, aeroportos e postos de fronteira para orientar as unidades de Vigilância Agropecuária Internacional nas ações específicas para a prevenção da introdução de Moniliophthora roreri.

Art. 8º O Departamento de Sanidade Vegetal e Insumos Agrícolas divulgará Alertas Quarentenários relacionados à praga Moniliophthora roreri.

Art. 9º . O Departamento de Sanidade Vegetal e Insumos Agrícolas fará gestão junto aos órgãos públicos que regulamentam o transporte aéreo, marítimo, fluvial e rodoviário do País, para que informem aos seus usuários da proibição de importação de material propagativo de plantas reconhecidamente hospedeiras de Moniliophthora roreridos países com presença da praga, bem como dos riscos relacionados a outros artigos regulamentados capazes de disseminar o fungo.

CAPÍTULO III
DAS AÇÕES FITOSSANITÁRIAS PARA A CONTINGÊNCIA DE MONILIOPHTHORA RORERI

Art. 10. As suspeitas de ocorrência de Moniliophthora roreri em levantamentos de detecção ou em decorrência de notificação deverão ser investigadas pela Superintendência Federal de Agricultura, Pecuária e Abastecimento em articulação com o OEDSV.
§ 1º A notificação da suspeita poderá ser efetuada por entidades federais, estaduais, municipais e da iniciativa privada, ou por qualquer cidadão, devendo ser encaminhada à Superintendência Federal de Agricultura, Pecuária e Abastecimento, a quem compete iniciar o processo de apuração.
§ 2º A suspeita de ocorrência da praga Moniliophthora rorerideverá ser imediatamente comunicada ao Departamento de Sanidade Vegetal e Insumos Agrícolas pela Superintendência Federal de de Agricultura, Pecuária e Abastecimento.
§ 3º Após recebida a notificação, deverá ser realizada diligência visando à apuração da suspeita por meio de coleta de amostra do material vegetal e envio a um laboratório oficial do Ministério da Agricultura, Pecuária e Abastecimento para identificação do agente causal.
§ 4º Os procedimentos de coleta, identificação e envio da amostra, assim como os aspectos de biossegurança a serem seguidos, serão elaborados e atualizados pelo Departamento de Sanidade Vegetal e Insumos Agrícolas.

Art. 11. Como medida cautelar, o agente público competente da Superintendência Federal de de Agricultura, Pecuária e Abastecimento ou do OEDSV/UF poderá determinar a interdição total ou parcial da propriedade e a suspensão imediata de atividades que promovam a disseminação da praga.
§ 1º Caso o proprietário ou preposto não adote as ações fitossanitárias determinadas ou as promova de forma negligente, colocando em risco outras áreas de produção, o Ministério da Agricultura, Pecuária e Abastecimento promoverá representação junto ao Ministério Público para apuração de responsabilidade.
§ 2º Caso não seja confirmada a ocorrência, a propriedade será imediatamente desinterditada.

Art. 12. Confirmada a ocorrência da praga, será estabelecida, mediante Portaria, a área sob quarentena formada pelo raio de 1 km, a partir do ponto de detecção da praga.
§ 1º A Superintendência Federal de Agricultura, Pecuária e Abastecimento, em parceria com o OEDSV, iniciará imediatamente na área sob quarentena as ações fitossanitárias de contenção, supressão e erradicação, em áreas de produção comercial ou não comercial, conforme orientação do Departamento de Sanidade Vegetal e Insumos Agrícolas.
§ 2º A medida cautelar de que trata o art. 12 deverá ser mantida, e caso não tenha sido aplicada, deverá ser interditada imediatamente a propriedade, total ou parcialmente, e deverão ser suspensas as atividades que promovam a disseminação da praga.
§ 3º As amêndoas fermentadas e secas de cacau, classificadas como Tipo I e II poderão ser comercializadas, desde que sejam acondicionadas em sacarias novas.
§ 4º Para outros artigos regulamentados, não hospedeiros de Moniliophthora roreri, mas capazes de disseminar a praga existente na área delimitada, poderão ser adotadas medidas fitossanitárias de desinfestação, conforme definição do Departamento de Sanidade Vegetal e Insumos Agrícolas, visando evitar a disseminação da praga.

Art. 13. A Superintendência Federal de Agricultura, Pecuária e Abastecimento, em parceria com o OEDSV, realizará levantamento de delimitação nas áreas circunvizinhas à área de quarentena conforme procedimento definido pelo Departamento de Sanidade Vegetal e Insumos Agrícolas.
Parágrafo único. No caso de novas detecções da praga durante as ações de levantamento fitossanitário aplicar-se-ão os procedimentos previstos no art. 12.

Art. 14. Alternativas que impeçam a dispersão da praga poderão ser definidas pelo Departamento de Sanidade Vegetal e Insumos Agrícolas.

Art. 15. Caberá exclusivamente ao Departamento de Sanidade Vegetal e Insumos Agrícolas a comunicação oficial da primeira detecção em território nacional da praga Moniliophthora roreri.

CAPÍTULO IV
DISPOSIÇÕES FINAIS

Art. 16. Não havendo novas detecções de frutos infectados por Moniliophthora roreri durante duas safras da cultura, após a última detecção da praga, as ações fitossanitárias de contingência na área sob quarentena serão concluídas.

Art. 17. Os órgãos com mandato ou atribuição para execução de atividades relativas à defesa agropecuária nas unidades da federação atuarão na fiscalização do cumprimento desta Instrução Normativa.

Art. 18. As instituições, públicas ou privadas, que receberem missões técnicas internacionais ou realizarem pesquisa ou treinamentos em países de ocorrência da praga deverão adotar procedimentos mínimos de biossegurança visando evitar a introdução da praga no Brasil conforme procedimentos definidos pelo Departamento de Sanidade Vegetal e Insumos Agrícolas.

Art. 19. Esta Instrução Normativa entra em vigor na data de 04 de janeiro de 2021.

JOSÉ GUILHERME TOLLSTADIUS LEAL`},{id:"IN17-2005",texto:`MINISTÉRIO DA AGRICULTURA, PECUÁRIA E ABASTECIMENTO

SECRETARIA DE DEFESA AGROPECUÁRIA

INSTRUÇÃO NORMATIVA Nº 17, DE 31 DE MAIO DE 2005
Decreto nº 5.351, de 21 de janeiro de 2005, tendo em vista o disposto no Regulamento de Defesa

do Processo nº 21000.010414/2004-59, resolve:

Art. 1º Aprovar os PROCEDIMENTOS PARA A CARACTERIZAÇÃO, IMPLANTAÇÃO E
MANUTENÇÃO DE ÁREA LIVRE DA SIGATOKA NEGRA e os PROCEDIMENTOS PARA
IMPLANTAÇÃO E MANUTENÇÃO DO SISTEMA DE MITIGAÇÃO DE RISCO PARA SIGATOKA
NEGRA - Mycosphaerella fijiensis (Morelet) Deighton, constantes dos Anexos I e II desta Instrução Normativa.
§ 1º Nas Unidades da Federação onde a praga não foi detectada, deverá ser comprovada a condição de Área Livre da Sigatoka Negra ao Departamento de Sanidade Vegetal - DSV, desta Secretaria, para reconhecimento oficial, no prazo de 180 (cento e oitenta) dias, a partir da data de publicação desta Instrução Normativa.
§ 2º Ficam convalidados os prazos vincendos estabelecidos conforme a Instrução Normativa nº 41, de 21 de junho de 2002, para a manutenção dos Locais de Produção Livres e das Áreas Livres da Sigatoka Negra reconhecidos pelo MAPA.

Art. 2º O trânsito de frutos de bananeira nas Unidades da Federação - UF somente poderá ocorrer nos
seguintes casos: *(Redação dada pela Instrução Normativa 4/2012/SDA/MAPA)* _____________________________________________________________________ *Redações* *Anteriores*
I - entre Áreas Livres de Sigatoka Negra; *(Acrescentado pela Instrução Normativa 4/2012/SDA/MAPA)*
II - entre UF sem ocorrência de Sigatoka Negra, ressalvadas as Áreas Livres; *(Acrescentado pela*
*Instrução Normativa 4/2012/SDA/MAPA)*
III - de Área Livre de Sigatoka Negra para área com ocorrência da praga; *(Acrescentado pela Instrução*
*Normativa 4/2012/SDA/MAPA)*
IV - de UF sem ocorrência de Sigatoka Negra para área com ocorrência da praga; *(Acrescentado pela*
*Instrução Normativa 4/2012/SDA/MAPA)*
V - entre áreas com ocorrência de Sigatoka Negra, vedada a passagem por Área Livre ou UF considerada
de ocorrência da praga, que tenha solicitado a revisão de sua condição fitossanitária, nos termos do § 1º do art. 11; ou *(Acrescentado pela Instrução Normativa 4/2012/SDA/MAPA)*
VI - de Unidade de Produção sob Sistema de Mitigação de Risco para Sigatoka Negra para as demais
áreas. *(Acrescentado pela Instrução Normativa 4/2012/SDA/MAPA)*

Art. 3º Proibir o trânsito de mudas de Musa spp e seus cultivares micropropagados, entre as Unidades da
Federação, que não forem:
I - pré-aclimatadas ou aclimatadas em estufas ou casas de vegetação; e

II - tratadas com fungicidas registrados, 10 (dez) dias antes de sua expedição para as Unidades da
Federação.
III - transportadas ainda in vitro. *(Acrescentado(a) pelo(a) Instrução Normativa 21/2005/SDA/MAPA)*

Art. 4º Proibir o trânsito de mudas de bananeira, não micropropagadas, que não sejam provenientes de
bananais de Áreas Livres de Sigatoka Negra. *(Redação dada pela Instrução Normativa*
*4/2012/SDA/MAPA)*
_____________________________________________________________________ *Redações* *Anteriores*

Art. 5º No interesse de instituições de pesquisa científica, será permitido o trânsito de material genético de
Musa spp e seus cultivares, para estudo, acompanhado de Autorização Declaratória emitida pela Área de Sanidade Vegetal da Superintendência Federal da Agricultura - SFA na Unidade da Federação de origem do material.
§ 1º O material genético de que trata o caput deste artigo deverá ser transportado em recipiente lacrado, devendo o número do lacre constar da Autorização Declaratória.
§ 2º A SFA no Estado emitente deverá comunicar, à SFA no Estado de destino, a remessa do material.
§ 3º O interessado deverá comunicar a SFA de destino quando do recebimento do material para que haja inspeção do mesmo.

Art. 6º Proibir o trânsito de bananas em cacho em todo o território nacional.

Art. 7º O trânsito de plantas ou partes de plantas de Helicônias obedecerá aos mesmos critérios e medidas
previstos para o trânsito de mudas, partes de plantas e frutos de banana.

Art. 8º O trânsito de plantas, mudas micropropagadas ou partes de plantas de bananeira (Musa spp e seus
cultivares) obedecerá à legislação de certificação fitossanitária de origem, a certificação fitossanitária de origem consolidada e permissão de trânsito de vegetais vigente.
Parágrafo único. Fica proibido o trânsito de folhas de bananeira ou parte da planta no acondicionamento de qualquer produto.

Art. 9º Os órgãos estaduais de defesa sanitária vegetal serão responsáveis por garantir que, nas áreas
infestadas, os bananais abandonados, as bananeiras abandonadas e os cultivos de Helicônias abandonados e sem controle da praga serão eliminados, não cabendo aos proprietários, arrendatários ou ocupantes a qualquer título, de imóveis ou propriedades, indenização no todo ou em parte das plantas eliminadas.
Parágrafo único. Os bananais e bananeiras abandonados e cultivos plantas e partes de plantas de Helicônias deverão ser inspecionados e, sendo comprovada a presença da praga Sigatoka Negra, serão eliminados por métodos mecânicos ou químicos.

Art. 10. O DSV, por intermédio da Coordenação Geral de Proteção de Plantas - CGPP, coordenará as
atividades de prevenção e controle da Sigatoka Negra em todo o território nacional e as Secretarias de Agricultura ou os órgãos estaduais de defesa sanitária vegetal fiscalizarão e executarão as atividades no âmbito estadual, em cumprimento a esta Instrução Normativa.

Art. 11. As ocorrências da praga Sigatoka Negra deverão ser notificadas às autoridades fitossanitárias
federais ou estaduais, que repassarão imediatamente as informações ao DSV, desta Secretaria de Defesa Agropecuária.
§ 1º A UF onde ocorreu detecção de Sigatoka Negra poderá solicitar a revisão de sua condição

fitossanitária após 5 (cinco) anos sem a presença da praga. *(Acrescentado pela Instrução Normativa*
*4/2012/SDA/MAPA)*
§ 2º O reconhecimento de Área Livre de Sigatoka Negra em município onde houve detecção da praga somente poderá ocorrer após 10 (dez) anos sem novas detecções. *(Acrescentado pela Instrução* *Normativa 4/2012/SDA/MAPA)* § 3º O Órgão Estadual de Defesa Sanitária Vegetal - OEDSV, responsável pela solicitação, deverá realizar levantamento fitossanitário anual em 5% (cinco por cento) das propriedades produtoras de banana e 2% (dois por cento) das propriedades produtoras de helicônias, abrangendo áreas homogêneas onde a praga é considerada presente. *(Acrescentado pela Instrução Normativa 4/2012/SDA/MAPA)* § 4º A unidade de sanidade vegetal da respectiva SFA deverá supervisionar os levantamentos realizados pelo OEDSV, emitindo Parecer Técnico acerca de sua realização. *(Acrescentado pela Instrução* *Normativa 4/2012/SDA/MAPA)*

Art. 12. O descumprimento das exigências desta Instrução Normativa configurará os crimes previstos no
art. 259, do Código Penal, e no art. 61, da Lei nº 9.605, de 12 de fevereiro de 1998, podendo implicar o cancelamento do reconhecimento oficial de Área Livre da Sigatoka Negra.

Art. 13. Esta Instrução Normativa entra em vigor na data de sua publicação.

Art. 14. Fica revogada a Instrução Normativa nº 41, de 21 de junho de 2002.
GABRIEL ALVES MACIEL
ANEXO I
PROCEDIMENTOS PARA CARACTERIZAÇÃO, IMPLANTAÇÃO E MANUTENÇÃO DE ÁREA
LIVRE DA SIGATOKA NEGRA - Mycosphaerella fijiensis (Morelet) Deighton PARA EFEITO
DESTES PROCEDIMENTOS,
CONSIDERA-SE:
ÁREA LIVRE DE PRAGA - área onde uma praga específica não ocorre, sendo esse fato demonstrado por evidência científica e na qual, de forma apropriada, essa condição está sendo mantida oficialmente.
ÁREA INFESTADA - área urbana ou rural, com a delimitação de seus limites, onde foi detectada a praga.
1 - CARACTERIZAÇÃO DA CULTURA DA BANANA E SITUAÇÃO DA SIGATOKA NEGRA NA
UNIDADE DA FEDERAÇÃO (realizado pelo Órgão Estadual de Defesa de Sanidade Vegetal - OEDSV, da Unidade da Federação) 1.1 - Descrever a situação da cultura da banana na Unidade da Federação (área plantada, variedades cultivadas, estimativa de produção, destino da produção, sistemas de cultivo - tecnologias aplicadas e procedimentos de colheita e pós-colheita, quantidade de mão-de-obra empregada na cadeia produtiva - direta e indireta).
1.2 - Apresentar, em mapa cartográfico, as rotas de trânsito de banana no estado.
1.3 - Elaborar mapa georreferenciado, identificando:
1.3.1 - Áreas de produção comercial; e

1.3.2 - Focos de ocorrência da praga.
1.4 - Fornecer informações sobre dados climatológicos da região.
2 - DIRETRIZES PARA LEVANTAMENTOS FITOSSANITÁRIOS DA SIGATOKA NEGRA
2.1 - Levantamento para Detecção da Praga (conduzido pelo OEDSV da Unidade da Federação, em uma área sem relato de ocorrência da praga, para determinar se a praga está presente).
2.1.1 - Amostragem das áreas a serem inspecionadas:
2.1.1.1 - Em área sem relato de ocorrência da praga, inspecionar 1% das propriedades ou quarteirões; e 2.1.1.2 - Em Área Livre, inspecionar 2% das propriedades ou quarteirões.
2.1.2 - Amostragem das plantas a serem inspecionadas:
2.1.2.1 - Em área urbana e área rural não comercial, inspecionar no mínimo 3 plantas adultas, próximas do florescimento, por hectare; e 2.1.2.2 - Em área de produção comercial, inspecionar no mínimo 5 plantas adultas, próximas do florescimento, por hectare.
2.1.3 - Periodicidade dos levantamentos nas propriedades rurais com produção não comercial e zonas urbanas as inspeções deverão ser realizadas pelo OEDSV a cada 3 meses.
2.2 - Levantamento para Delimitação da Praga (conduzido pelo OEDSV da Unidade da Federação para estabelecer os limites de uma área considerada como infestada por uma praga).
2.2.1 - Num raio de 0 a 10 km do foco da praga, inspecionar 3 plantas adultas, próximas do florescimento, por hectare, em 50% das propriedades.
2.2.2 - Num raio de 10 a 30 km do foco da praga, inspecionar 3 plantas adultas, próximas do florescimento, por hectare, em 30% das propriedades.
2.2.3 - Num raio de 30 a 70 km do foco da praga, inspecionar 3 plantas adultas, próximas do florescimento, por hectare, em 10% das propriedades.
2.2.4 - Nas estradas que sejam rotas de risco para a praga, inspecionar 3 plantas adultas, próximas do florescimento, por hectare, em 50% das propriedades existentes às suas margens.
2.3 - Monitoramento para certificação da produção e manutenção do reconhecimento de Área Livre da Sigatoka Negra:
2.3.1 - A metodologia de monitoramento será definida de acordo com as condições do produtor, podendo ser adotada:
2.3.1.1 - estações de pré-aviso bioclimático (modelo da Empresa de Pesquisa Agropecuária de Santa Catarina);
2.3.1.2 - pré-aviso biológico (modelo da Empresa de Pesquisa Agropecuária de Minas Gerais); e 2.3.1.3 - bosques de bananeiras de cultivares indicadoras, resistentes à Sigatoka Amarela, mas suscetíveis à Sigatoka Negra (no mínimo 20 mudas das cultivares Terra, D'Angola, Nam, Pioneira e Tropical), que serão observadas semanalmente pelo técnico responsável, que deverá comunicar ao OEDSV qualquer suspeita.

3 - DELIMITAÇÃO E MEDIDAS OFICIAIS ADOTADAS PARA CARACTERIZAÇÃO DA ÁREA
LIVRE DA SIGATOKA NEGRA
3.1 - Considerar uma distância mínima de 70km de possíveis fontes de infestação da praga.
3.2 - Obedecer aos limites oficialmente reconhecidos (estradas, rios, etc.).
3.3 - Descrever a existência de possíveis barreiras naturais que dificultem o avanço da praga.
3.4 - Documentar os levantamentos oficiais realizados para a declaração de Área Livre da Praga.
3.5 - Elaborar Plano Emergencial a ser aplicado em caso de surgimento de foco da praga na Área Livre da Praga.
3.6 - Elaborar mapa georreferenciado com as propriedades que possuem plantios comerciais de banana dentro dos limites da Área Livre da Sigatoka Negra.
3.7 - Fazer o cadastramento das propriedades da Área Livre da Praga atendendo os seguintes itens:
3.7.1 - Nome do produtor;
3.7.2 - Situação fundiária da propriedade;
3.7.3 - Localização da propriedade com GPS;
3.7.4 - Identificação das cultivares e idade dos plantios de banana em produção e formação;
3.7.5 - Estimativa da produção anual (kg);
3.7.6 - Destino da produção; e 3.7.7 - Nome do Responsável Técnico.
3.8 - Relacionar os Fiscais Estaduais cadastrados para emissão da Permissão de Trânsito de Vegetais - PTV, designados para atuar na região da Área Livre da Praga, que deverão:
3.8.1 - Fiscalizar as Casas de Embalagens para garantir que nelas não tenham sido processadas bananas de áreas não cadastradas;
3.8.2 - Inspecionar as propriedades cadastradas para verificação da conformidade com as medidas fitossanitárias estabelecidas por este regulamento; e 3.8.3. A fiscalização de defesa vegetal, quando necessário, deverá lacrar a carga emitindo as PTVs nas próprias casas de embalagens ou nas barreiras de fiscalização fitossanitárias mais próximas das casas de embalagens, anotando o número dos lacres nas PTVs. *(Redação dada pela Instrução Normativa*
*4/2012/SDA/MAPA)*
_____________________________________________________________________ *Redações* *Anteriores* 3.9 - Mapa georreferenciado das barreiras fitossanitárias existentes para o controle do trânsito, com descrição dos recursos materiais e humanos de cada barreira e escalas de plantão dos Fiscais Estaduais.
3.10 - Regulamentação, pela autoridade competente da Unidade da Federação, de medidas de prevenção a serem adotadas obrigatoriamente, entre as quais:
3.10.1 - Implantar mecanismos que garantam que os veículos que entrem na Área Livre sejam

desinfetados;
3.10.2 - Aplicar os métodos de manejo recomendados;
3.10.3 - Introduzir somente material de propagação livre da praga;
3.10.4 - Manter o registro dos procedimentos de cultivo, medidas e levantamentos fitossanitários executados no período de reconhecimento; e 3.10.5 - Notificar ao OEDSV qualquer presença suspeita ou efetiva da praga.
3.11 - O OEDSV da Unidade da Federação deverá encaminhar ao DSV, por meio da Superintendência Federal da Agricultura - SFA, relatórios bimensais sobre todas as atividades desenvolvidas na Área Livre da Sigatoka Negra.
4 - SUPERVISÃO PARA MANUTENÇÃO DA SITUAÇÃO DE ÁREA LIVRE DA SIGATOKA
NEGRA
4.1 - O OEDSV da Unidade da Federação deverá supervisionar todos os setores envolvidos no processo de certificação, garantindo a realização de todos os levantamentos e medidas fitossanitárias de controle estabelecidas por este regulamento.
4.2 - O DSV, em conjunto com ÁREA DE SANIDADE VEGETAL DA IFA na Unidade da Federação, deverá realizar, no mínimo, uma auditoria por ano nas Áreas Livres.
5 - IDENTIFICAÇÃO DO PRODUTO E SEGURANÇA FITOSSANITÁRIA DA PARTIDA
5.1 - Utilizar embalagens plásticas higienizadas.
5.2 - As embalagens de madeira deverão ser novas, de primeiro uso ou de papelão.
5.3 - A identificação nas embalagens deverá ser fixa e não colada, em conformidade com as normas específicas.
5.4. A carga destinada à outra Área Livre de Sigatoka Negra, que transitar por Unidade da Federação com ocorrência da praga, deverá estar amarrada e lacrada, garantindo a origem do produto. *(Redação dada* *pela Instrução Normativa 4/2012/SDA/MAPA)* _____________________________________________________________________ *Redações* *Anteriores* 5.5 - Declaração Adicional constando que a partida é originária de Área Livre da Sigatoka Negra.
6 - RECONHECIMENTO DA SITUAÇÃO DE ÁREA LIVRE DA SIGATOKA NEGRA
6.1 - O DSV deverá analisar o processo e proceder à auditoria técnica para verificar a conformidade na aplicação das medidas fitossanitárias estabelecidas por este regulamento.
6.2 - A Secretaria de Defesa Agropecuária - SDA deverá publicar ato de reconhecimento oficial da situação da área e dar ampla divulgação a todas as SFAs e aos OEDSVs.
ANEXO II
PROCEDIMENTOS PARA IMPLANTAÇÃO E MANUTENÇÃO DO SISTEMA DE MITIGAÇÃO DE
RISCO PARA A PRAGA SIGATOKA NEGRA - Mycosphaerella fijiensis (Morelet) Deighton 1 - SISTEMA DE MITIGAÇÃO DE RISCO - SMR: integração de diferentes medidas de manejo de risco

de pragas das quais pelo menos duas atuam independentemente com efeito acumulativo, para atingir o nível apropriado de segurança fitossanitária.
2 - IMPLANTAÇÃO: o SMR poderá ser implantado nas áreas onde for detectada a presença da Sigatoka Negra, possibilitando ao produtor a manutenção de sua atividade e comercialização do seu produto nas Unidades da Federação.
3 - IDENTIFICAÇÃO DA PROPRIEDADE (levantamento realizado pelo OEDSV):
3.1 - nome do proprietário / meeiro / arrendatário;
3.2 - nome da propriedade;
3.3 - localização georreferenciada;
3.4 - área total da propriedade, em hectares;
3.5 - área com bananeiras (idade, cultivares, estimativa de produção); e 3.6 - área com outras culturas (especificar: idade, variedades).
4 - CADASTRAMENTO DA UNIDADE DE PRODUÇÃO
4.1 - Unidade de Produção - UP: área cultivada com bananeiras, cadastrada junto ao OEDSV para implantação do SMR.
4.2 - O proprietário deverá solicitar o cadastramento da UP ao OEDSV.
4.3 - Para efeito de rastreabilidade, o OEDSV, após o cadastramento da UP, emitirá para cada UP um código alfanumérico.
4.4 - Identificar o Responsável Técnico - RT e número do seu cadastramento no OEDSV.
4.5 - Identificar o destino da produção.
4.6 - O proprietário deverá assinar o Termo de Adesão junto ao OEDSV.
4.7 - O proprietário deverá informar no prazo máximo de 30 (trinta) dias, ao OEDSV, a mudança do RT, quando ocorrer.
5 - EXECUÇÃO DE PRÁTICAS AGRÍCOLAS
5.1 - Executar Práticas Agrícolas para a cultura da banana.
5.2 - A parte da folha que apresentar sintomas da Sigatoka Negra deverá ser podada.
5.3 - Adotar o manejo integrado da Sigatoka Negra, incluindo, se necessário, controle químico com produtos registrados no Ministério da Agricultura, Pecuária e Abastecimento - MAPA.
5.4 - Poderão ser utilizados métodos alternativos de aplicação de agrotóxicos recomendados por entidades oficiais de pesquisa.
5.5 - Fazer o plantio de cultivares tolerantes recomendadas pela pesquisa e certificadas.
5.6 - A metodologia de monitoramento será definida de acordo com as condições do produtor, para indicar o momento mais propício para executar o controle químico.

5.7 - Adotar, quando for o caso, sistemas orgânicos de produção ou o sistema de produção integrada de banana (PIB).
6 - CUIDADOS NO PÓS-COLHEITA NAS CASAS DE EMBALAGEM
6.1 - Identificar, com base no Certificado Fitossanitário de Origem - CFO, os lotes de banana que entram na Casa de Embalagem quando originários de outras UPs.
6.2 - Os cachos deverão ser previamente despencados na UP.
6.3 - As pencas deverão ser higienizadas com produtos recomendados por entidades oficiais de pesquisa.
6.4 - Utilizar caixas plásticas higienizadas acompanhadas de declaração de higienização emitida por empresa credenciada pelo OEDSV; caixas de madeira somente novas e não retornáveis ou caixas de papelão descartáveis.
6.5 - A emissão do CFO, Certificado Fitossanitário de Origem Consolidado - CFOC e PTV obedecerão à legislação vigente.
6.5.1 - Para as cargas que atendem ao disposto nesta Instrução Normativa, os Responsáveis Técnicos e os Fiscais Estaduais, nos documentos de suas competências, farão constar a seguinte declaração adicional:
"A partida é originária de Unidade de Produção onde foi implantado o Sistema de Mitigação de Risco para Sigatoka Negra" 6.6 - Todos os procedimentos deverão ser registrados por seus respectivos responsáveis.
6.7 - As bananas que não passarem por Casas de Embalagens só poderão ser comercializadas no próprio estado de origem.
7 - VISTORIA DA CASA DE EMBALAGEM
7.1 - As Casas de Embalagem que beneficiam frutos para exportação deverão ser cadastradas junto ao OEDSV da UF.
7.2 - O OEDSV da UF fará a vistoria da Casa de Embalagem emitindo o Laudo de Vistoria que, não havendo nada em contrário, receberá o cadastramento.
7.3 - É proibido o cadastramento de Casas de Embalagem localizadas em Centrais de Abastecimento - CEASAs ou locais similares.
8 - INSPEÇÃO / FISCALIZAÇÃO
8.1 - O OEDSV realizará as inspeções nas UPs e Casas de Embalagens cadastradas.
9 - CONTROLES E RELATÓRIOS
9.1 - O RT responsável pelo acompanhamento da UP deverá elaborar relatório trimestral, encaminhando-o ao OEDSV ate o 5º dia útil.
9.2 - Os relatórios enviados pelos RTs serão analisados pelo OEDSV, que determinará a necessidade ou não da implementação de ações corretivas.
9.3 - O OEDSV encaminhará, trimestralmente, relatórios à SFA.
9.4 - A SFA, após análise e consolidação das informações, enviará, trimestralmente, os relatórios ao DSV para acompanhamento, avaliação e parecer.

10 - PENALIDADES
10.1 - A UP, a Casa de Embalagem ou o RT poderão ter os seus cadastros cancelados quando não forem atendidas as exigências e responsabilidades previstas, respectivamente, nesta Instrução Normativa.
D.O.U., 03/06/2005`},{id:"IN17-2009",texto:`MINISTÉRIO DA AGRICULTURA, PECUÁRIA E ABASTECIMENTO

SECRETARIA DE DEFESA AGROPECUÁRIA

INSTRUÇÃO NORMATIVA Nº 17, DE 27 DE MAIO DE 2009

e o que consta do Processo nº 21000.003714/2007-24, resolve:

Art. 1º Regulamentar os critérios para reconhecimento e manutenção de Áreas Livres da Praga Ralstonia solanacearum raça 2 (ALP Moko da Bananeira), visando atender exigências quarentenárias de países importadores, na forma do Anexo I, desta Instrução Normativa.

Art. 2º Regulamentar os critérios para implantação e manutenção da aplicação de medidas integradas em um enfoque de Sistemas para o Manejo de Risco de pragas para Moko da Bananeira (SMR Moko da Bananeira), visando atender exigências quarentenárias de países importadores, na forma do Anexo II, desta Instrução Normativa.

Art. 3º Proibir o trânsito de mudas e rizomas de bananeira e helicônias, produzidas em Unidades da Federação (UF) com ocorrência de *Ralstonia solanacearum raça 2*, salvo nos casos de mudas:
I - produzidas em ALP Moko da Bananeira, existente na UF;
II - transportadas ainda in vitro; e
III - micropropagadas, desde que sem contato com o solo local, da aclimatação ao transporte.

Art. 4º As condições previstas nos incisos II e III, do art. 3º, desta Instrução Normativa, deverão ser descritas no documento para informações complementares do Certificado Fitossanitário de Origem (CFO), que conterá a seguinte declaração adicional: "As mudas encontram- se livres de *Ralstonia solanacearum raça 2*.".
Parágrafo único. Em caso de trânsito interestadual, a fiscalização estadual deverá lacrar a carga, emitindo a Permissão de Trânsito de Vegetais (PTV), nos locais de produção ou nas barreiras de fiscalização fitossanitária mais próximas destes, anotando o número do lacre na mesma, e transcrevendo as informações complementares e a declaração adicional, constante do caput.

Art. 5º Para o trânsito interestadual de mudas produzidas em ALP Moko da Bananeira, será exigida a PTV, fundamentada em CFO, contendo a seguinte declaração adicional: "As mudas foram produzidas em Área Livre de *Ralstonia solanacearum raça 2*, oficialmente reconhecida pelo Ministério da Agricultura, Pecuária e Abastecimento.".
Parágrafo único. A carga das mudas previstas no caput deverá ser lacrada pela fiscalização estadual, anotando o número do lacre na PTV.

Art. 6º Para o trânsito interestadual de mudas produzidas em UF com ausência de Ralstonia solanacearum raça 2, será exigida a PTV contendo a seguinte declaração adicional: "As mudas se encontram livres de *Ralstonia solanacearum raça 2*.".
Parágrafo único. Quando em trânsito por UF com a presença da praga, tendo como destino ALP Moko da Bananeira ou UF sem presença de *Ralstonia solanacearum raça 2*, a carga deverá ser lacrada na UF de origem, devendo o fiscal responsável anotar o número do lacre na PTV.

Art. 7º Restringir a entrada, em ALP Moko da Bananeira, de frutos de banana e inflorescências de helicônias produzidos em UF com ocorrência de *Ralstonia solanacearum raça 2*.
Parágrafo único. Para entrada dos produtos a que se refere o caput, em ALP Moko da Bananeira, será exigida a PTV, contendo uma das seguintes declarações adicionais: "Os frutos ou inflorescências foram produzidos em Área Livre de *Ralstonia solanacearum raça 2* oficialmente reconhecida pelo Ministério da Agricultura, Pecuária e Abastecimento" ou "Os frutos ou inflorescências foram produzidos sob aplicação de medidas integradas em um enfoque de Sistemas para o Manejo de Risco da praga *Ralstonia solanacearum raça 2*".

Art. 8º Para o trânsito interestadual de frutos de banana e inflorescências de helicônias produzidos em UF com ausência de *Ralstonia solanacearum raça 2*, será exigida a PTV apenas para comprovação da origem.

Art. 9º Para a entrada em UF com ausência de *Ralstonia solanacearum raça 2*, de frutos de banana e inflorescências de helicônias produzidos em UF com presença da praga, será exigida a PTV, fundamentada em CFO.
§ 1º No caso de frutos ou inflorescências não produzidos sob SMR Moko da Bananeira, o CFO deverá conter a seguinte declaração adicional: "Os frutos ou inflorescências foram produzidos em UP onde não foi observada a presença de *Ralstonia solanacearum raça 2*, nos últimos doze meses".
§ 2º Para frutos ou inflorescências produzidos sob SMR Moko da Bananeira, o CFO deverá conter a seguinte declaração adicional: "Os frutos ou inflorescências foram produzidos sob aplicação de medidas integradas em um enfoque de Sistemas para o Manejo de Risco da praga *Ralstonia solanacearum raça 2*".

Art. 10. O trânsito de plantas de bananeira e helicônias e de suas partes, para estudo em instituições de pesquisa científica, deverá ser autorizado pela área de sanidade vegetal da Superintendência Federal de Agricultura, Pecuária e Abastecimento (SFA), na UF de origem do material.
§ 1º Não se aplica o disposto no caput deste artigo no caso de trânsito entre UF's com ocorrência de Moko da Bananeira.
§ 2º O material de que trata o caput deste artigo deverá ser transportado em compartimento lacrado.
§ 3º A SFA na UF de origem deverá comunicar a remessa do material previsto no caput, com no mínimo setenta e duas horas de antecedência, à SFA na UF de destino.
§ 4º A instituição destinatária quando do recebimento do material deverá comunicar imediatamente a SFA na UF de destino, para inspeção do mesmo.
§ 5º Caso o material inspecionado apresente sintomas de Moko da Bananeira, serão coletadas amostras para realização de análise em laboratório oficial ou credenciado pelo Ministério da Agricultura, Pecuária e Abastecimento (MAPA), devendo o material ficar retido na instituição destinatária até a emissão do laudo laboratorial conclusivo.
§ 6º Confirmada contaminação por *Ralstonia solanacearum raça 2*, do material constante do parágrafo anterior, serão adotadas as seguintes providências:
I - o material retido será destruído, não cabendo qualquer tipo de indenização; e
II - não serão expedidas novas autorizações para a instituição de origem do material contaminado pelo
prazo de um ano.

Art. 11. O material propagativo, os frutos de banana ou as inflorescências de helicônia apreendidos pela fiscalização de defesa sanitária vegetal, em desacordo com o previsto nesta Instrução Normativa, serão sumariamente destruídos, ou determinado o retorno à origem, não cabendo ao infrator qualquer tipo de indenização, sem prejuízo das demais sanções estabelecidas pela legislação própria.

Parágrafo único. A destruição citada no caput deste artigo deverá ser feita com emprego de métodos e materiais que assegurem a completa inutilização do material propagativo, frutos ou inflorescências, com eliminação do patógeno.

Art. 12. Detecção de Moko da Bananeira em UF na qual a praga estiver ausente ou em ALP Moko da Bananeira deverá ser imediatamente comunicada à SFA da UF correspondente, que informará ao Órgão Estadual de Defesa Sanitária Vegetal (OEDSV), da Instância Intermediária do Sistema Unificado de Atenção à Sanidade Agropecuária, bem como à Secretaria de Defesa Agropecuária (SDA) do MAPA.
§ 1º O OEDSV deverá realizar levantamentos fitossanitários anuais, na UF sem presença de *Ralstonia solanacearum raça 2*, exceto ALP Moko da Bananeira, informando os resultados à SFA correspondente.
§ 2º Caso sejam detectados focos de *Ralstonia solanacearum raça 2*, deverão ser aplicadas as medidas previstas nas seções IV e V, do Anexo I, desta Instrução Normativa.

Art. 13. Em casos excepcionais, com aprovação ou por determinação da SDA/MAPA, quaisquer atividades atribuídas às Instâncias Intermediárias do Sistema Unificado de Atenção à Sanidade Agropecuária, por esta Instrução Normativa e seus Anexos, poderão ser executadas pela Instância Central e Superior.

Art. 14. A SDA/MAPA, diretamente ou representada pela área de sanidade vegetal da SFA na UF correspondente, deverá realizar, no mínimo, uma auditoria por ano nas ALP's Moko da Bananeira e nas UF's que implantarem o SMR Moko da Bananeira.

Art. 15. Esta Instrução Normativa entra em vigor cento e oitenta dias da data de sua publicação.

INÁCIO AFONSO KROETZ

ANEXO I
CAPÍTULO I
DO RECONHECIMENTO E MANUTENÇÃO DE ALP MOKO DA BANANEIRA
Seção I Das definições

Art. 1º Denominar-se-á ALP Moko da Bananeira, uma área onde a praga *Ralstonia solanacearum raça 2*
não ocorre, sendo isto demonstrado por evidência científica e na qual, de forma apropriada, esta condição está sendo mantida oficialmente.

Art. 2º Denominar-se-á praga ausente, quando não for detectada pela vigilância geral a presença desta em determinada área, condição que deve ser comprovada por meio de registros específicos.

Art. 3º Entender-se-á por erradicação da doença, as medidas a serem adotadas para eliminação completa da bactéria *Ralstonia solanacearum raça 2*.

Art. 4º Denominar-se-á área perifocal, aquela abrangida pela distância de dez metros a partir do foco ou do perímetro dos viveiros contaminados, podendo ser ampliada até o máximo de vinte metros ou reduzida até o mínimo de cinco metros, a critério das Instâncias Intermediárias do Sistema Unificado de Atenção à Sanidade Agropecuária, nas áreas geográficas sob sua circunscrição.

Art. 5º Denominar-se-á foco, a planta ou as plantas infectadas por *Ralstonia solanacearum raça 2*.

Seção II

Do procedimento para reconhecimento oficial de ALP Moko da Bananeira

Art. 6º O OEDSV deverá realizar levantamento fitossanitário nas áreas a serem reconhecidas como livres de Moko da Bananeira.
§ 1º Os levantamentos deverão ser realizados em cada uma das regiões homogêneas da UF, de maneira a se obter uma cobertura geográfica representativa.
§ 2º O levantamento será realizado em dez por cento da área cultivada com banana e cinco por cento da área cultivada com helicônia, na UF, segundo dados do Instituto Brasileiro de Geografia e Estatística (IBGE), de maneira proporcional à produção das regiões citadas no parágrafo anterior.
§ 3º Será inspecionado um por cento das touceiras de cada propriedade amostrada, selecionando pontos aleatórios, georreferenciados, a partir dos quais serão examinadas cinco touceiras consecutivas.
§ 4º Caso sejam observadas plantas com sintomas de Moko da Bananeira, devem ser coletadas amostras para diagnóstico em laboratório oficial ou credenciado pelo MAPA.

Art. 7º As atividades concernentes ao levantamento fitossanitário e os resultados obtidos, inclusive laudos laboratoriais, devem constar em relatório específico.

Art. 8º O OEDSV deverá encaminhar à SFA, para posterior encaminhamento à SDA/MAPA, visando o reconhecimento de ALP Moko da Bananeira, solicitação acompanhada dos seguintes documentos:
I - ofício solicitando o reconhecimento da ALP Moko da Bananeira;
II - delimitação da ALP Moko da Bananeira, considerando limites administrativos, acidentes geográficos, rodovias, ferrovias e hidrovias;
III - mapa com indicação das regiões que possuem plantios comerciais de banana ou helicônias dentro dos limites da ALP Moko da Bananeira;
IV - mapa indicando as rotas de risco e barreiras fitossanitárias existentes para o controle do trânsito de vegetais;
V - descrição dos recursos materiais e humanos de cada barreira fitossanitária e escalas de plantão dos Fiscais Estaduais;
VI - número de propriedades cadastradas para produção de banana e helicônias;
VII - área cultivada com banana e helicônia na UF, e produção segundo estatísticas oficiais; e
VIII - relatórios específicos dos levantamentos fitossanitários realizados.

Art. 9º A área de sanidade vegetal da SFA que receber a solicitação acompanhada da documentação prevista no art. 8º, deste Anexo II, deverá providenciar a formalização de processo administrativo, anexar parecer técnico sobre o cumprimento das disposições desta Instrução Normativa e encaminhar o processo à SDA/MAPA.

Art. 10. A SDA/MAPA deverá analisar o processo e proceder à auditoria técnica, para verificar a conformidade na aplicação das medidas fitossanitárias estabelecidas por esta Instrução Normativa.
Parágrafo único. A realização da auditoria de que trata o caput deste artigo poderá ser delegada à área de sanidade vegetal da SFA.

Art. 11. A SDA/MAPA deverá analisar o relatório da auditoria e emitir parecer técnico conclusivo sobre a possibilidade de reconhecimento da ALP Moko da Bananeira.

Art. 12. A SDA/MAPA deverá publicar, em meio oficial, ato de reconhecimento da ALP Moko da Bananeira, por tempo indeterminado.
Seção III Da manutenção da Área Livre de *Ralstonia solanacearum raça 2*

Art. 13. Após o reconhecimento oficial da ALP Moko da Bananeira, o OEDSV deverá realizar inspeções fitossanitárias semestrais, no mínimo, em bananais comerciais ou domésticos, localizados tanto na zona rural como urbana, bem como em viveiros produtores de mudas de banana e helicônias, objetivando manter a condição de ALP.
§ 1º Com base nas inspeções semestrais, deverá ser elaborado relatório técnico, apresentando as seguintes informações:
I - período de referência do relatório;
II - número de propriedades cadastradas;
III - listagem das propriedades inspecionadas;
IV - cópias de laudos laboratoriais, quando houver coleta de amostras para diagnóstico fitossanitário de
*Ralstonia solanacearum raça 2*;
V - focos erradicados;
VI - quantidade de CFO e PTV emitidos no período de referência do relatório;
VII - quantidade de partidas de banana e helicônias inspecionadas nas barreiras fitossanitárias; e
VIII - ocorrências fitossanitárias nas barreiras.
§ 2º Outras informações poderão ser acrescentadas a critério do OEDSV.
§ 3º O relatório deverá ser encaminhado à SFA correspondente, que emitirá parecer técnico sobre o mesmo e enviará toda a documentação à SDA/MAPA.
§ 4º A documentação será analisada pela SDA/MAPA que, se for o caso, poderá determinar a adoção de ações corretivas.

Art. 14. O descumprimento das disposições previstas nesta seção III, implicará na perda do reconhecimento oficial da ALP Moko da Bananeira.
Seção IV Da inspeção e erradicação de focos no campo

Art. 15. Nas inspeções realizadas pelo OEDSV, sendo detectada planta com sintoma de Moko da Bananeira, deverá ser coletada amostra que será encaminhada para análise em laboratório oficial ou credenciado pelo MAPA, para emissão de laudo conclusivo.

Art. 16. De posse do laudo conclusivo, e em caso de resultado positivo, o OEDSV notificará o proprietário, arrendatário ou ocupante a qualquer título do estabelecimento, determinando prazo para realização de vistoria e eliminação de todas as plantas sintomáticas, bem como daquelas adjacentes localizadas dentro da área perifocal, mediante métodos mecânicos ou químicos, com manejo para evitar rebrota, não podendo ocorrer replantio na área durante um ano.

§ 1º A eliminação de que trata o caput deste artigo compete ao proprietário, arrendatário ou ocupante a qualquer título do estabelecimento, não lhe cabendo qualquer tipo de indenização.
2º As propriedades onde for comprovada a presença do Moko da Bananeira serão interditadas, pelo OEDSV, não podendo ocorrer saída de plantas e partes de plantas de bananeira e helicônia, até que sejam tomadas as providências necessárias à erradicação dos focos.
§ 3º Os proprietários, arrendatários ou ocupantes a qualquer titulo de imóveis rurais e urbanos, que tiverem bananeiras erradicadas, ficam obrigados a eliminar, às suas expensas, as rebrotas que porventura apareçam após a erradicação das plantas.
§ 4º Se o proprietário, arrendatário ou ocupante a qualquer título do estabelecimento ou seu representante legal não eliminar as plantas no prazo definido na notificação, o OEDSV providenciará a eliminação das mesmas nas áreas amostradas, sendo imputados ao proprietário, arrendatário ou ocupante os custos decorrentes dessa operação, sem prejuízo das demais sanções estabelecidas pelas legislações estadual e federal de defesa sanitária vegetal.

Art. 17. A não erradicação das plantas na área perifocal, em até sessenta dias após a data de emissão do laudo laboratorial, implicará na perda do reconhecimento oficial da condição de ALP Moko da Bananeira.

Art. 18. O OEDSV deverá realizar inspeção fitossanitária na área abrangida por um raio de cinco quilômetros a partir do foco de Moko da Bananeira.
Seção V Da inspeção e erradicação de focos em viveiros de bananeiras

Art. 19. O OEDSV promoverá inspeções semestrais em dez por cento do número de viveiros existentes na ALP Moko da Bananeira, enviando material suspeito para análise em laboratório oficial ou credenciado pelo MAPA, objetivando manter a condição de área livre.

Art. 20. O local do viveiro deve estar delimitado, com boas condições de drenagem, para não possibilitar a entrada de águas invasoras e, ser protegido contra o acesso de pessoas não autorizadas e de animais.

Art. 21. A área reservada para a instalação do viveiro não pode ser aproveitada simultaneamente para qualquer outra finalidade diferente da produção de mudas, e nem apresentar histórico da ocorrência de Moko da Bananeira, nos últimos dois anos.

Art. 22. Os viveiros onde for comprovada a presença do Moko da Bananeira serão interditados pelo OEDSV, e será feita a eliminação total das suas plantas, bem como dos demais viveiros situados na área perifocal, não podendo ocorrer replantio dos mesmos nos próximos dois anos.
Parágrafo único. Existindo bananal próximo a viveiros contaminados, serão eliminadas as plantas situadas na área perifocal.

Art. 23. As eliminações de que trata o art. 21, deste Anexo I, compete ao proprietário, arrendatário ou ocupante a qualquer título do estabelecimento, não cabendo qualquer tipo de indenização.

Art. 24. Se o proprietário, arrendatário ou ocupante a qualquer título do estabelecimento ou seu representante legal não eliminar as mudas no prazo definido na notificação, o OEDSV providenciará a eliminação das mesmas, sendo imputados ao proprietário, arrendatário ou ocupante, os custos decorrentes dessa operação, sem prejuízo das demais sanções estabelecidas pelas legislações estadual e federal de defesa sanitária vegetal.

Art. 25. A não erradicação dos viveiros com plantas infectadas, em até sessenta dias após a data de emissão do laudo laboratorial, implicará na perda do reconhecimento oficial da ALP Moko da Bananeira.

ANEXO II
CAPÍTULO I
DA IMPLANTAÇÃO E MANUTENÇÃO DO SMR MOKO DA BANANEIRA
Seção I Das definições

Art. 1º Denominar-se-á SMR Moko da Bananeira, à integração de diferentes medidas de manejo de risco de pragas, das quais pelo menos duas atuam independentemente, com efeito acumulativo, para atingir o nível apropriado de segurança fitossanitária.

Art. 2º Entender-se-á por erradicação, as medidas a serem adotadas para eliminação completa da bactéria *Ralstonia solanacearum raça 2*.
Seção II Do procedimento para aplicação de medidas integradas em um enfoque de Sistemas para o Manejo de Risco para Moko da Bananeira (SMR Moko da Bananeira)

Art. 3º O SMR Moko da Bananeira, poderá ser implantado de modo a evitar restrições ao trânsito de frutos de banana e inflorescências de helicônias.

Art. 4º Caberá ao OEDSV promover e organizar a inscrição das UP's que adotarem o SMR Moko da Bananeira.
§ 1º O proprietário interessado, deverá solicitar a inscrição da UP, no SMR Moko da Bananeira, ao OEDSV.
§ 2º Caso a UP já esteja inscrita em algum outro cadastro do OEDSV, poderão ser aproveitados os dados para compor o cadastro de SMR Moko da Bananeira.
§ 3º O código de identificação da UP inscrita no SMR Moko da Bananeira, deverá ser o mesmo instituído pelas normas referentes à certificação fitossanitária de origem.

Art. 5º Deverão ser adotadas as seguintes práticas:
§ 1º Nos cultivos de bananeiras:
I - nas regiões onde ocorrem estirpes transmissíveis por insetos, proteger as inflorescências,
imediatamente ao seu surgimento, envolvendo-as com sacos de polietileno, mantendo-os até a emissão da última penca, caso retire a proteção, remover a inflorescência masculina (mangará, coração ou umbigo);
II - em caso de planta suspeita, realizar corte nos frutos para confirmar a presença ou ausência de
sintomas; e
III - comercializar os frutos sempre despencados, descartando os cachos que apresentarem sintomas
durante o despencamento.
§ 2º Nos cultivos de helicônias:
I - inspecionar periodicamente touceiras e novas brotações, por meio de corte do pseudocaule,
desinfestando os equipamentos de corte; e
II - tratar a água dos tanques de lavagem das inflorescências com dois por cento de hipoclorito de sódio

ativo, antes do descarte, para evitar a disseminação do patógeno na área;
§ 3º Nos cultivos de bananeiras e helicônias:
I - plantar mudas produzidas em ALP Moko da Bananeira;
II - proceder desinfestação de ferramentas utilizadas em desbaste, desfolha, corte do coração e colheita,
após o trabalho em no máximo dez touceiras, utilizando uma das seguintes soluções:
a) formaldeído/água (1:3);
b) formaldeído ( 5%);
c) formol (10%); e d) desinfestantes à base de creosol, hipoclorito de sódio ou cálcio, álcool ou amônia quaternária;
III - substituir capina manual ou mecânica por roçagem do mato ou uso de herbicidas; e
IV - erradicar imediatamente os focos de Moko da Bananeira, bem como as plantas existentes no raio de cinco metros dos mesmos, não podendo ocorrer replantio durante um ano.

Art. 6º O OEDSV não aceitará inscrição de UP localizada numa distância inferior a vinte metros de um foco de Moko da Bananeira.

Seção III Dos controles e sanções

Art. 7º A inscrição de nova UP no cadastro de SMR Moko da Bananeira deverá ser comunicada à SFA pelo OEDSV em um prazo de cinco dias úteis.

Art. 8º A listagem atualizada das UP's incluídas no SMR Moko da Bananeira deverá ser encaminhada à SFA, por meio de mídia impressa e eletrônica, trimestralmente ou sempre que solicitado pela SDA/MAPA.
Parágrafo único. A SFA encaminhará a listagem de que trata o caput à SDA/MAPA.

Art. 9º O responsável técnico pela UP informará ao OEDSV sobre a ocorrência de focos de Moko da Bananeira, e os respectivos procedimentos de erradicação adotados.

Art. 10. O OEDSV realizará inspeções trimestrais em amostra aleatória das UP's cadastradas, determinando a necessidade ou não da implementação de ações corretivas.

Art. 11. O OEDSV encaminhará relatórios trimestrais à SFA, apresentando os resultados das inspeções realizadas.
§ 1º Após análise e emissão de parecer técnico, pela SFA, os relatórios deverão ser encaminhados à SDA/MAPA.
§ 2º A SDA/MAPA poderá determinar a necessidade de ações corretivas, inclusive a exclusão de UP do cadastro de SMR.

Art. 12. São consideradas irregularidades na manutenção do SMR Moko da Bananeira:
I - localização geográfica (coordenadas) da UP em desacordo com o informado;
II - área de plantio em desacordo com o informado na inscrição da UP;
III - emissão de CFO sem registro no Livro de Acompanhamento;
IV - inexistência do Livro de Acompanhamento;
V - não realização das práticas previstas no art. 5º, deste Anexo II; e
VI - emissão de CFO com declaração adicional de SMR Moko da Bananeira para frutos produzidos em
UP que não esteja regularmente inscrita no sistema.

Art. 13. Constatada qualquer das situações previstas nos incisos I, II, III e IV, art. 12, deste Anexo II, o OEDSV notificará o proprietário, estabelecendo prazo de trinta dias para correção das irregularidades.
§ 1º A não correção da irregularidade prevista no inciso I, implica na suspensão do registro da UP, no SMR Moko da Bananeira, até que seja atendida a determinação do OEDSV.
§ 2º A não correção das irregularidades previstas nos incisos II, II, e IV implica na suspensão do registro da UP, no SMR Moko da Bananeira, pelo período de seis meses.

Art. 14. Constatada qualquer das situações previstas nos incisos V e VI, art. 12, deste Anexo II, o OEDSV excluirá a UP do SMR Moko da Bananeira.
Parágrafo único. Também, em caso de embaraço ou impedimento à fiscalização agropecuária oficial, a UP será excluída do SMR Moko da Bananeira, sem prejuízo das demais sanções cabíveis.

Art. 15. A aplicação das sanções previstas nesta seção III, do Anexo II, deverá ser comunicada, imediatamente, à SFA, que dará conhecimento da decisão à SDA/MAPA.

Art. 16. O proprietário de UP excluída do SMR Moko da Bananeira, não poderá solicitar novo cadastramento, mesmo de outra UP, pelo prazo de doze meses, da data da exclusão.

D.O.U., 29/05/2009 - Seção 1`},{id:"IN20-2013",texto:`MINISTÉRIO DA AGRICULTURA, PECUÁRIA E ABASTECIMENTO

GABINETE DO MINISTRO

INSTRUÇÃO NORMATIVA Nº 20, DE 20 DE JUNHO DE 2013

O MINISTRO DE ESTADO DA AGRICULTURA, PECUÁ- RIA E ABASTECIMENTO, no uso da atribuição que lhe confere o art. 87, parágrafo único, inciso II, da Constituição, o art. 2º do Decreto nº 5.741, de 30 de março de 2006, tendo em vista o disposto no Decreto nº 24.114, de 12 de abril de 1934, na Lei nº 7.802, de 11 de julho de 1989, no Decreto nº 5.153, de 23 de julho de 2004, no Decreto nº 4.074, de 4 de janeiro de 2002, na Instrução Normativa nº 54, de 4 de dezembro de 2007, na Instrução Normativa nº 55, de 4 de dezembro de 2007, e o que consta do Processo nº 21000.010758/2012-78, resolve:

Art. 1º Instituir o Programa Nacional de Prevenção e Controle do Cancro Europeu das Pomáceas
(Neonectria galligena) - PNCEP com a finalidade de estabelecer os critérios e procedimentos para a contenção da praga, e Grupo com o objetivo de propor, acompanhar e avaliar as ações para a implementação e o desenvolvimento do PNCEP no âmbito do Ministério da Agricultura, Pecuária e Abastecimento- MAPA.
Parágrafo único. Para efeitos desta Instrução Normativa, ficam aprovados os modelos de declaração da situação do cancro europeu no pomar, constante do Anexo I, e de declaração da situação do cancro europeu no viveiro, constante do Anexo II.

Art. 2º As ações previstas no PNCEP serão coordenadas pelo Departamento de Sanidade Vegetal da
Secretaria de Defesa Agropecuária - DSV/SDA.
CAPÍTULO I
DO GRUPO NACIONAL PARA A IMPLEMENTAÇÃO E O DESENVOLVIMENTO DO PNCEP

Art. 3º O Grupo previsto no art. 1º será integrado por representantes, titulares e suplentes, dos seguintes
órgãos:
I - Departamento de Sanidade Vegetal - DSV/SDA/MAPA, sendo o seu Diretor o coordenador do Grupo;
II - Coordenação-Geral de Proteção de Plantas - CGPP/DSV/SDA/MAPA, cujo representante exercerá a
coordenação Técnico-Executiva;
III - Superintendência Federal de Agricultura - SFA nos Estados do Rio Grande do Sul, Santa Catarina e
Paraná;
IV - Secretaria de Estado de Agricultura, Pecuária e Agronegócio do Rio Grande do Sul - SEAPA;
V - Companhia Integrada de Desenvolvimento Agrícola de Santa Catarina - CIDASC/SC;
VI - Agência de Defesa Agropecuária do Paraná - ADAPAR;
VII - Centro Nacional de Pesquisa de Uva e Vinho da EMBRAPA - CNPUV/EMBRAPA;
VIII - Empresa de Pesquisa Agropecuária e Extensão Rural do Estado de Santa Catarina - EPAGRI;
IX - Instituto Agronômico do Paraná - IAPAR; e
X - Associação Brasileira dos Produtores de Maçã - ABPM.

Art. 4º O coordenador do Grupo poderá convidar representantes de outros órgãos e entidades, públicas ou

privadas, para participarem dos seus trabalhos ou reuniões.

Art. 5º São atribuições do Coordenador do PNCEP:
I - acompanhar o desenvolvimento do programa;
II - analisar e consolidar os relatórios semestrais apresentados;
III - remeter anualmente à Secretaria de Defesa Agropecuária - SDA/MAPA e aos membros do Grupo
relatório sobre as atividades e resultados obtidos pelo Programa;
IV - avaliar os resultados alcançados e sugerir medidas corretivas.

Art. 6º São atribuições do Grupo:
I - elaborar o cronograma de atividades;
II - analisar propostas de métodos para o controle da praga e aprovar sua adoção pelo PNCEP;
III - recomendar pesquisas visando ao controle do Cancro Europeu das Pomáceas no Brasil; e
IV - indicar ações visando à educação sanitária e à formação e treinamento dos profissionais envolvidos
no PNCEP.
CAPÍTULO II
DOS CRITÉRIOS E PROCEDIMENTOS A SEREM ADOTADOS NO PNCEP
Seção I Da produção e comercialização

Art. 7º A produção, o beneficiamento e o transporte de material propagativo e de frutos de pomáceas
provenientes de Unidades da Federação com ocorrência comprovada de Cancro Europeu das Pomáceas, para fins de certificação fitossanitária de origem e de trânsito de vegetais, obedecerá ao estabelecido nas Instruções Normativas nos 54 e 55, ambas de 4 de dezembro de 2007.
§ 1º A partida deverá seguir acompanhada do Certificado Fitossanitário de Origem (CFO) ou do Certificado Fitossanitário de Origem Consolidado (CFOC) até o momento da emissão da Permissão de Trânsito de Vegetais (PTV).
§ 2º Para frutos, deverá constar nos documentos previstos no § 1º deste artigo a seguinte Declaração Adicional: "Na unidade de produção e Unidade de Consolidação - UC foram adotados os procedimentos de controle e prevenção previstos nesta norma e os frutos não apresentam sintomas de Neonectria galligena".
§ 3º Quando tratar-se de material propagativo, exceto material in vitro, deverá constar nos documentos previstos no § 1º deste artigo a seguinte Declaração Adicional: "A Unidade de produção foi inspecionada oficialmente durante o período de produção e não foi constatada a presença de sintomas de infecção pela praga Neonectria galligena ".
§ 4º Os procedimentos de higienização a serem observados durante o processamento dos frutos são os seguintes:
I - na colheita, deve-se proceder à higienização de equipamentos, embalagens, local de trabalho e
trabalhadores;

II - realizar e implementar anualmente uma avaliação de risco, devidamente documentada e atualizada
que abranja os aspectos de higiene na colheita e transporte do produto;
III - na colheita, disponibilizar instalações sanitárias e lavagem de mãos a menos de 500 (quinhentos)
metros do local de trabalho;
IV - na empacotadora, realizar uma avaliação de riscos sobre higiene, atualizada anualmente e definir os
procedimentos de controle;
V - disponibilizar para os trabalhadores da empacotadora instalações sanitárias limpas, próximas de sua
área de trabalho, mas sem que abram para essa área, a não ser que a porta se feche de forma automática;
VI - na empacotadora, os trabalhadores devem cumprir as instruções sobre higiene durante o manuseio
dos produtos frescos.
Seção II Das Medidas de Prevenção e Controle em Pomares

Art. 8º No período de poda, deverão ser obedecidas as seguintes práticas:
I - pulverização das pomáceas com fungicidas protetores antes do início de cada poda e até 7 (sete) dias
após; e
II - quando necessária a poda verde, executá-la até o final de janeiro de cada ano.

Art. 9º Em Unidades de Produção - UPs com incidência de até 1% (um por cento), as plantas com
sintomas deverão ser arrancadas e incineradas.

Art. 10. Nas UPs com incidência superior a 1% (um por cento) de plantas com sintomas do fungo
Neonectria galligena, deverão ser realizados os seguintes procedimentos:
I - eliminação e incineração dos ramos menores de 3 (três) centímetros de diâmetro que apresentarem
cancros, sendo realizadas no mínimo duas intervenções no período vegetativo e outras duas no período de repouso;
II - limpeza e tratamento de cancro em ramos maiores de 3 (três) centímetros de diâmetro, sendo
realizadas no mínimo duas intervenções no período vegetativo e outras duas no período de repouso e os segmentos retirados dos cancros cobertos com solo;
III - quando o tronco estiver comprometido em até 50% (cinquenta por cento) do perímetro pela praga,
este deverá ser limpo e desinfetado com álcool 70% (setenta por cento) seguido da aplicação de pastas fungicidas;
IV - as plantas que apresentarem o tronco comprometido com cancros maiores de 50% (cinquenta por
cento) do seu perímetro deverão ser arrancadas e incineradas;
V - as plantas tratadas ou podadas deverão ser identificadas para que, nos ciclos seguintes, possa se
verificar a eficácia das práticas;
VI - as plantas identificadas que apresentarem novas lesões deverão ser removidas e incineradas;
VII - todas as ferramentas utilizadas na remoção dos ramos com cancros e na retirada dos tecidos afetados
pelos cancros deverão ser limpas com um desinfetante.
Parágrafo único. As plantas com menos de 3 (três) anos que apresentarem sintomas deverão ser eliminadas.

Art. 11. No período de queda das folhas e início de brotação, deverão ser realizados os seguintes
procedimentos para as pulverizações dos pomares:
I - tratamentos com fungicidas protetores durante as fases:
10% (dez por cento) da queda de folhas, 90% (noventa por cento) da queda de folhas e 30 (trinta) dias após.
II - na fase de 50% (cinquenta por cento) de queda de folhas, deverá ser realizado um tratamento com
fungicida curativo associado um protetor; e
III - no início da brotação, as plantas deverão ser pulverizadas com fungicidas protetores.

Art. 12. Para os pomares que tenham sido afetados por granizo, deverão ser realizadas duas pulverizações
com intervalo de 7 (sete) dias com uma combinação de fungicidas protetores, curativo e fosfito.

Art. 13. Para o controle da podridão dos frutos causada pelo fungo Neonectria galligena, deverá ser
pulverizado fungicida curativo no estádio fenológico de queda de pétalas e até 15 (quinze) dias antes da colheita.
Seção III Das Medidas de Prevenção e Controle em Unidades de Produção de Mudas (Viveiros)

Art. 14. Os viveiros de pomáceas deverão obedecer aos seguintes procedimentos:
I - estar localizados a pelo menos 10 km (dez quilômetros) de distância de pomares com registro de
ocorrência da praga Neonectria galligena;
II - o Responsável Técnico do viveiro deverá solicitar ao Órgão Estadual de Defesa Sanitária Vegetal -
OEDSV a inscrição da UP com antecedência mínima de 90 (noventa) dias antes do plantio;
III - as mudas deverão ser pulverizadas, no mínimo, mensalmente com fungicidas protetores alternados
com fungicidas curativos;
IV - sempre que realizada uma prática que cause ferimentos, as plantas deverão ser pulverizadas com
fungicidas protetores antes do início da prática e até 7 (sete) dias após a mesma.
Seção IV Dos Procedimentos a Serem Adotados e das Obrigações

Art. 15. O OEDSV deverá realizar anualmente levantamento nos pomares comerciais visando determinar
a ocorrência de Neonectria galligena.

Art. 16. O OEDSV procederá às inspeções das UPs de mudas no período da pré-comercialização, com
vistas à detecção do fungo Neonectria galligena e:
I - quando detectadas plantas com sintomas do fungo Neonectria galligena, deverá ser coletada amostra e
enviada para análise em laboratório credenciado pelo MAPA, sendo que as mudas somente poderão ser comercializadas após comprovação laboratorial da ausência da praga;
II - se o resultado da análise indicar a presença do fungo Neonectria galligena, as plantas da UP deverão
ser arrancadas e incineradas às custas do produtor.

Art. 17. O Responsável Técnico de mudas deverá proceder a levantamento no período de

pré-comercialização em 100% (cem por cento) do material de propagação de todas as UPs de mudas e:
I - quando detectadas plantas com sintomas do fungo Neonectria galligena, deverá ser coletada amostra e
enviada para análise em laboratório credenciado pelo MAPA, sendo que as mudas somente poderão ser comercializadas após comprovação laboratorial da ausência da praga;
II - se o resultado da análise indicar a presença do fungo Neonectria galligena, as plantas da unidade de
produção deverão ser arrancadas e incineradas às custas do produtor; e
III - os resultados referentes às análises mencionadas nos incisos I e II deste artigo deverão ser
encaminhados ao OEDSV, conforme modelo estabelecido no Anexo I desta Instrução Normativa.
Parágrafo único. Os levantamentos mencionados no caput deverão ser realizados antes da fiscalização do OEDSV, prevista no art. 18.

Art. 18. O OEDSV deverá encaminhar ao MAPA os resultados dos levantamentos e das inspeções de UPs
de mudas previstos nos arts. 16 e 17, bem como das demais ações realizadas na prevenção e controle da praga Neonectria galligena.

Art. 19. O Responsável Técnico do pomar deverá declarar ao OEDSV até o dia 15 de outubro de cada ano
a presença ou não do fungo Neonectria galligena e o número de plantas infectadas, conforme modelo estabelecido no Anexo II desta Instrução Normativa.
CAPÍTULO III
DISPOSIÇÕES FINAIS

Art. 20. As Superintendências Federais de Agricultura, Pecuária e Abastecimento nos Estados do RS, SC
e PR deverão acompanhar a execução das ações previstas no PNCEP, bem como a adoção de medidas corretivas.

Art. 21. Os pomares onde não forem adotadas as medidas estabelecidas nesta Instrução Normativa e
contaminados por Neonectria galligena, comprovado por laudo laboratorial oficial, deverão ser destruídos às custas do proprietário.

Art. 22. Para atendimento do PNCEP, deverão ser utilizados fungicidas registrados no MAPA.

Art. 23. Esta Instrução Normativa entra em vigor na data de sua publicação.
ANTÔNIO ANDRADE
ANEXO I
DECLARAÇÃO DA SITUAÇÃO DO CANCRO EUROPEU NO VIVEIRO
ANO DA SAFRA ____________

| Nome do produtor/empresa: |  |
| --- | --- |
| Endereço: |  |
| Município: | CEP: |
| CNPJ/CPF: | UF: |
| Código da Unidade de Produção nº |  |
| Inscrição no RENASEM nº |  |
| Após inspeção realizada na unidade de produção anteriormente codificada, declaro que a detecção de plantas sintomáticas para cancro europeu deu-se de forma: |  |

| ( ) Positiva |  |  |  |
| --- | --- | --- | --- |
| ( ) Negativa |  |  |  |
| Caso for positivo preencher os dados a seguir: |  |  |  |
| Lote | Espécie | Cultivar | Representatividade |
|  |  |  | do Lote |
| Dados do Responsável Técnico |  |  |  |
| Nome Responsável Técnico |  |  | CREA |
| Habilitação nº |  |  |  |
| Local e Data |  |  |  |
| Assinatura e carimbo |  |  |  |

ANEXO II
DECLARAÇÃO DA SITUAÇÃO DO CANCRO EUROPEU NO POMAR
ANO DA SAFRA: ____________

| Nome do produtor/empresa: |  |  |  |
| --- | --- | --- | --- |
| Endereço: |  |  |  |
| Município: |  |  | CEP: |
| CNPJ/CPF: |  |  | UF: |
| Código da Unidade de Produção nº |  |  |  |
| Área: |  |  |  |
| Após inspeção realizada na unidade de produção acima relacionada, declaro que a detecção de plantas sintomáticas para cancro europeu deu-se de forma: |  |  |  |
| ( ) Positiva |  |  |  |
| ( ) Negativa |  |  |  |
| Caso for positivo preencher os dados a seguir: |  |  |  |
| Espécie | Cultivar | Idade | Origem das Mudas |
| Dados do Responsável Técnico |  |  |  |
| Nome Responsável Técnico |  | CREA |  |
| Habilitação nº |  |  |  |
| Local e Data |  |  |  |
| Assinatura e carimbo |  |  |  |

D.O.U., 21/06/2013 - Seção 1`},{id:"IN21-2018",texto:`MINISTÉRIO DA AGRICULTURA, PECUÁRIA E ABASTECIMENTO GABINETE DO MINISTRO

GABINETE DO MINISTRO

INSTRUÇÃO NORMATIVA Nº 21, DE 25 DE ABRIL DE 2018

DOU de 11/05/2018 (nº 90, Seção 1, pág. 9)

O MINISTRO DE ESTADO DA AGRICULTURA, PECUÁRIA E ABASTECIMENTO, no uso da atribuição que lhe confere o art. 87, parágrafo único, inciso II, da Constituição, tendo em vista o disposto no Decreto nº 8.852, de 20 de setembro de 2016, no Decreto nº 24.114, de 12 de abril de 1934, no Decreto nº 75.061, de 9 de dezembro de 1974, no Decreto nº 5.741, de 30 de março de 2006, no Decreto nº 5.759, de 17 de abril de 2006, na Instrução Normativa MAPA nº 52, de 20 de novembro de 2007, e o que consta do Processo nº 21000.004701/2018-25, resolve:
CAPÍTULO I
DAS DISPOSIÇÕES GERAIS

Art. 1º - Ficam instituídos, em todo o território nacional, na forma desta Instrução Normativa, os critérios e procedimentos para o
estabelecimento e manutenção do status fitossanitário relativo à praga denominada Cancro Cítrico (*Xanthomonas citri subsp. citri*).
Parágrafo único - As opções de status fitossanitário de que trata o *caput* são:
I - Área Sem Ocorrência;
II - Área Livre de Praga - ALP;
III - Área sob Sistema de Mitigação de Risco - SMR; e
IV - Área sob Erradicação.

Art. 2º - As medidas de erradicação ou supressão do Cancro Cítrico, obrigatórias para todos os imóveis públicos ou privados que
possuam plantas de espécies ou híbridos dos gêneros Citrus, Fortunella ou Poncirus, para fins comerciais ou não, situados em zona rural ou urbana, serão executadas conforme o disposto nesta Instrução Normativa.
§ 1º - Em áreas onde seja epidemiologicamente inviável a adoção de medidas de erradicação, para viabilizar o trânsito de material de propagação vegetativa e de frutos cítricos com destino às áreas previstas no art. 1º, serão adotadas as medidas constantes nesta Instrução Normativa.
§ 2º - O Órgão Estadual de Defesa Sanitária Vegetal - OEDSV poderá requerer reconhecimento de status fitossanitário para distintas áreas da Unidade da Federação - UF, observado o cumprimento das disposições desta Instrução Normativa.

Art. 3º - O reconhecimento do status fitossanitário para o Cancro Cítrico das áreas previstas no art. 1º desta Instrução Normativa fica
condicionado à observância, pelos respectivos OEDSV, dos requisitos estabelecidos nesta norma.
§ 1º - Até o reconhecimento oficial pelo Ministério da Agricultura, Pecuária e Abastecimento - MAPA, do status fitossanitário requerido pelo OEDSV, a respectiva Unidade da Federação (UF) será definida como de status fitossanitário desconhecido para o Cancro Cítrico.
§ 2º - Não poderá ser emitida Permissão de Trânsito Vegetal (PTV) para as partidas de material de propagação vegetativa e de frutos cítricos, provenientes de área com status fitossanitário desconhecido para o Cancro Cítrico.
§ 3º - A unidade da sanidade vegetal da Superintendência Federal de Agricultura - SFA/MAPA/UF supervisionará os trabalhos relativos aos procedimentos para caracterização e manutenção do status fitossanitário requerido pelo OEDSV.
§ 4º - O envio de amostra de controle oficial para diagnóstico fitossanitário em Laboratório Oficial ou credenciado pelo MAPA não se caracteriza como trânsito vegetal.
§ 5º - O envio de que trata o parágrafo anterior deverá ser realizado em condições de acondicionamento adequadas, de tal forma que garanta a integridade da amostra e a segurança fitossanitária do seu transporte.
CAPÍTULO II
PROCEDIMENTOS PARA CARACTERIZAÇÃO E MANUTENÇÃO DO STATUS FITOSSANITÁRIO DE ÁREA SEM
OCORRÊNCIA DE CANCRO CÍTRICO
Seção I Do Procedimento para Reconhecimento Oficial do Status Fitossanitário de Área sem Ocorrência de Cancro Cítrico

Art. 4º - Denomina-se como Área Sem Ocorrência de Cancro Cítrico aquela onde a ausência da praga foi demonstrada por meio de
levantamento fitossanitário de detecção.

Art. 5º - O reconhecimento, pelo MAPA, do status fitossanitário de Área Sem Ocorrência de Cancro Cítrico fica condicionado à
realização de levantamentos fitossanitários na respectiva área, pelo OEDSV.
§ 1º - Os levantamentos fitossanitários serão realizados em, no mínimo, dez por cento dos imóveis com produção comercial de cítricos, de maneira a se obter uma cobertura geográfica representativa.
§ 2º - A inspeção deve ser realizada em, no mínimo, vinte por cento das plantas cítricas de cada imóvel, de acordo com uma das seguintes alternativas, percorrendo-se:
I - todas as ruas e inspecionando-se uma a cada cinco plantas; ou
II - uma a cada cinco ruas e inspecionando-se todas as plantas da rua, necessariamente iniciando-se na rua da bordadura.
§ 3º - Para cada imóvel com produção comercial de citros inspecionado, dentro do raio mínimo de um quilômetro, serão inspecionadas todas as plantas cítricas existentes em imóveis de produção não comercial, imóveis urbanos e áreas públicas.
§ 4º - Serão inspecionadas todas as plantas cítricas nos:
I - viveiros;
II - campos de plantas fornecedoras de material de propagação sem origem genética comprovada;
III - campos de produção de porta-enxertos;
IV - jardins clonais; e
V - borbulheiras.
§ 5º - As plantas com sintomas suspeitos de Cancro Cítrico, detectadas durante os levantamentos a que se refere este artigo, deverão ter amostras coletadas e enviadas a Laboratório Oficial ou credenciado pelo MAPA, para análises de diagnóstico fitossanitário.
§ 6º - Comprovada oficialmente a ocorrência de Cancro Cítrico na localidade reconhecida como Área Sem Ocorrência de Cancro Cítrico, o OEDSV deverá, imediatamente, comunicar a unidade de sanidade vegetal da Superintendência Federal de Agricultura, do Ministério da Agricultura, Pecuária e Abastecimento na UF (SFA/MAPA/UF), que notificará o Departamento de Sanidade Vegetal da Secretaria de Defesa Agropecuária (DSV/SDA/MAPA), observando-se as disposições desta Instrução Normativa.

Art. 6º - Além dos levantamentos fitossanitários, o OEDSV deverá também realizar:
I - cadastramento de todos os imóveis de produção comercial de citros, com os seguintes dados:
a) nome do(s) produtor(es);
b) endereço e localização geográfica do imóvel, com base no datum oficial brasileiro (SIRGAS2000);
c) identificação das cultivares e idade dos plantios de citros em produção e em formação;
d) estimativa da produção anual, em toneladas; e e) nome do Responsável Técnico (RT), quando couber;
II - cadastramento de todos os viveiros, campos de plantas fornecedoras de material de propagação sem origem genética
comprovada, campos de produção de porta-enxertos, jardins clonais e borbulheiras de plantas cítricas, com os seguintes dados:
a) nome do produtor;
b) endereço e localização geográfica, com base no datum oficial brasileiro (SIRGAS2000);
c) estimativa da produção anual, por tipo de material propagativo; e d) nome do RT.
Parágrafo único - Para os efeitos desta Instrução Normativa considera-se produtor o proprietário, arrendatário ou ocupante do imóvel a qualquer título.

Art. 7º - É condição, para avaliação do status fitossanitário de Área Sem Ocorrência de Cancro Cítrico, o encaminhamento pelo
OEDSV à unidade de sanidade vegetal da SFA/MAPA/UF, que fará posterior encaminhamento ao DSV/SDA/MAPA, dos seguintes documentos:
I - ofício do OEDSV solicitando a avaliação de reconhecimento;
II - mapa indicando localização das barreiras fitossanitárias existentes para o controle do trânsito de vegetais;

III - descrição dos recursos materiais e humanos de cada barreira fitossanitária e regime de escalas de funcionamento; e
IV - relatório das atividades concernentes aos levantamentos fitossanitários e os resultados obtidos.
Parágrafo único - Os documentos relativos aos levantamentos descritos no art. 5º, inclusive os laudos de diagnóstico fitossanitário, e os cadastros descritos no art. 6º deverão estar devidamente arquivados e disponíveis à fiscalização.

Art. 8º - A unidade de sanidade vegetal da SFA/MAPA/UF que receber a documentação prevista no art. 7º desta Instrução
Normativa, deverá instruir processo administrativo próprio, elaborar parecer técnico sobre o cumprimento das disposições desta norma e encaminhar a demanda ao DSV/SDA/MAPA.
Parágrafo único - No parecer técnico de que trata o *caput* deverá constar a manifestação técnica sobre os documentos mencionados no parágrafo único do art. 7º.

Art. 9º - O DSV/SDA/MAPA analisará o processo e emitirá parecer técnico de avaliação quanto ao cumprimento dos requisitos para
reconhecimento do status fitossanitário de Área Sem Ocorrência de Cancro Cítrico.

Art. 10 - A SDA/MAPA, mediante parecer técnico conclusivo favorável do DSV/SDA/MAPA, publicará ato de reconhecimento oficial
do status fitossanitário de Área Sem Ocorrência de Cancro Cítrico.
Seção II Da Manutenção do Status Fitossanitário de Área sem Ocorrência de Cancro Cítrico

Art. 11 - A manutenção do reconhecimento oficial do status fitossanitário de Área Sem Ocorrência de Cancro Cítrico fica
condicionada à realização, pelo OEDSV de, no mínimo, um levantamento fitossanitário por ano, conforme procedimento descrito no art. 5º desta Instrução Normativa.
§ 1º - Com base nos levantamentos fitossanitários, será elaborado relatório técnico, contendo as seguintes informações:
I - período de referência do relatório;
II - relação dos imóveis produtores de citros inspecionados; e
III - quantidade e resultado de laudos de diagnóstico fitossanitário, quando houver coleta de amostras para fins de diagnóstico
fitossanitário.
§ 2º - O relatório deverá ser encaminhado pelo OEDSV à unidade de sanidade vegetal da SFA/MAPA/UF correspondente, que instruirá processo administrativo próprio, emitirá parecer técnico e enviará o processo contendo toda a documentação ao DSV/ SDA/
MAPA.
§ 3º - A documentação será analisada pelo DSV/SDA/MAPA, que emitirá parecer técnico de avaliação quanto ao cumprimento dos requisitos para manutenção do status fitossanitário de Área Sem Ocorrência de Cancro Cítrico.
§ 4º - A SDA/MAPA, mediante parecer técnico favorável do DSV/SDA/MAPA, comunicará oficialmente ao OEDSV a manutenção do status fitossanitário de Área Sem Ocorrência de Cancro Cítrico.

Art. 12 - O descumprimento das disposições previstas nesta Seção implicará na mudança do status fitossanitário de Área Sem
Ocorrência de Cancro Cítrico para status fitossanitário desconhecido.
Seção III Do Trânsito de Material Vegetal

Art. 13 - Na emissão do Certificado Fitossanitário de Origem (CFO) ou de Certificado Fitossanitário de Origem Consolidado (CFOC),
deverá ser adotada uma das seguintes Declaração Adicional (DA):
I - para fruto: "Os frutos são originários de Área Sem Ocorrência de Cancro Cítrico (*Xanthomonas citri subsp. citri*), oficialmente
reconhecida"; ou
II - para material de propagação: "O material de propagação é originário de Área Sem Ocorrência de Cancro Cítrico (Xanthomonas
citri subsp. citri), oficialmente reconhecida".

Art. 14 - Para o trânsito, o material vegetal de propagação e frutos cítricos provenientes de Área Sem Ocorrência de Cancro Cítrico,
deverá ser acompanhado de Permissão de Transito de Vegetais - PTV, embasada em CFO ou CFOC, com a transcrição das DAs especificadas no art. 13 desta Instrução Normativa.
CAPÍTULO III
PROCEDIMENTOS PARA CARACTERIZAÇÃO, IMPLANTAÇÃO E MANUTENÇÃO DO STATUS FITOSSANITÁRIO DE ÁREA
LIVRE DE PRAGA PARA O CANCRO CÍTRICO
Seção I Do Procedimento para Reconhecimento Oficial do Status Fitossanitário de Área Livre da Praga (ALP) para o Cancro Cítrico

Art. 15 - Denomina-se como ALP para o Cancro Cítrico, uma área onde não ocorra a referida praga, demonstrado por evidência
científica, e na qual, de forma apropriada, essa condição é oficialmente mantida.

Art. 16 - O reconhecimento, pelo MAPA, do status fitossanitário de ALP para o Cancro Cítrico, fica condicionado à realização de
levantamentos fitossanitários pelo OEDSV na pretendida área, obedecidos os procedimentos previstos nos parágrafos 1º, 2º, 3º, 4º e 5º, do art. 5º, e do cadastramento previsto no art. 6º desta Instrução Normativa.

Art. 17 - É condição, para avaliação do status fitossanitário de ALP para o Cancro Cítrico, o encaminhamento pelo OEDSV à
unidade de sanidade vegetal da SFA/MAPA/UF, dos documentos e informações previstos nos incisos I, II, III e IV, do art. 7º, desta Instrução Normativa, e ainda o que segue:
I - documento descritivo da delimitação da ALP para o Cancro Cítrico, considerando limites territoriais, acidentes geográficos,
rodovias, ferrovias e hidrovias; e
II - plano emergencial a ser aplicado em caso de surgimento de foco de Cancro Cítrico na ALP.

Art. 18 - Mesmo que a ALP para o Cancro Cítrico não corresponda à totalidade da área da UF, deverão ser fornecidas as seguintes
informações relativas à citricultura em toda a UF:
I - área plantada por variedade, em hectares;
II - área e distribuição dos locais de produção de material propagativo;
III - mapa da UF, identificando:
a) as regiões de produção comercial de citros; e b) áreas com ocorrência de Cancro Cítrico;
IV - distâncias de isolamento entre a ALP e locais de ocorrência de Cancro Cítrico, com informações do embasamento técnico desse
isolamento.

Art. 19 - A unidade de sanidade vegetal da SFA/MAPA/UF que receber a solicitação de reconhecimento, acompanhada da
documentação prevista nos arts. 17 e 18 desta Instrução Normativa, deverá instruir processo administrativo próprio, elaborar parecer técnico sobre o cumprimento das disposições desta norma e encaminhar o processo ao DSV/SDA/MAPA.
Parágrafo único - No parecer técnico deverá constar, além de outras, informações sobre os documentos mencionados no parágrafo único do art. 7º.

Art. 20 - O DSV/SDA/MAPA deverá analisar o processo e proceder à auditoria técnica, para verificar a conformidade dos
procedimentos estabelecidos por esta Instrução Normativa.
Parágrafo único - A auditoria de que trata o *caput* deste artigo poderá ser realizada, a critério do DSV, por Auditor Fiscal Federal Agropecuário - AFFA, de outras unidades de sanidade vegetal das SFA/MAPA/UF.

Art. 21 - O DSV/SDA/MAPA deverá analisar o relatório da auditoria e emitir parecer técnico de avaliação sobre o cumprimento dos
requisitos de reconhecimento do status fitossanitário de ALP para o Cancro Cítrico.

Art. 22 - A SDA/MAPA, mediante parecer técnico favorável, publicará ato de reconhecimento oficial do status fitossanitário de ALP
para o Cancro Cítrico.
Seção II Da Manutenção do Status Fitossanitário de ALP para o Cancro Cítrico

Art. 23 - A manutenção do reconhecimento oficial do status fitossanitário de ALP para o Cancro Cítrico fica condicionada à
realização, pelo OEDSV de, no mínimo, um levantamento fitossanitário por ano, obedecidos os procedimentos previstos nos parágrafos 1º, 2º, 3º, 4º e 5º, do art. 5º desta Instrução Normativa.
§ 1º - Com base no levantamento fitossanitário, será elaborado relatório técnico, contendo as seguintes informações:
I - período de referência do relatório;
II - relação dos imóveis com produção de citros inspecionados;
III - número e resultados de laudos laboratoriais de diagnóstico fitossanitário, quando houver coleta de amostras para diagnóstico
fitossanitário relativo a Cancro Cítrico;
IV - quantidade de CFO e PTV emitidos no período de referência do relatório;
V - quantidade de partidas de citros inspecionadas nas barreiras fitossanitárias; e
VI - ocorrências fitossanitárias relacionadas a Cancro Cítrico observadas nas barreiras.
§ 2º - O relatório deverá ser encaminhado à unidade de sanidade vegetal da SFA/MAPA/UF correspondente, que instruirá processo administrativo próprio, emitirá parecer técnico e enviará toda a documentação ao DSV/SDA/MAPA.

§ 3º - A documentação será analisada pelo DSV/SDA/MAPA, que emitirá parecer técnico de avaliação quanto ao cumprimento dos requisitos de reconhecimento da manutenção do status fitossanitário de ALP para o Cancro Cítrico.
§ 4º - A SDA/MAPA, mediante parecer técnico favorável do DSV/SDA/MAPA, comunicará oficialmente ao OEDSV a manutenção do status fitossanitário de ALP para o Cancro Cítrico.

Art. 24 - O descumprimento das disposições previstas nesta Instrução Normativa implicará na mudança do status fitossanitário de
ALP para o Cancro Cítrico para o de status fitossanitário desconhecido, devendo ser adotadas as medidas previstas nesta Instrução Normativa.
Seção III Das Ações de Supervisão e Auditoria

Art. 25 - Além das supervisões realizadas pela unidade de sanidade vegetal da SFA/MAPA/UF, conforme previsto no parágrafo 3º do
art. 3º, o DSV/SDA/MAPA, em conjunto com a unidade de sanidade vegetal da SFA/MAPA/UF, deverá realizar, no mínimo, uma auditoria por ano na ALP.
Parágrafo único - A auditoria de que trata o *caput* deste artigo poderá ser realizada, a critério do DSV, por Auditor Fiscal Federal Agropecuário - AFFA, de outras unidades de sanidade vegetal das SFA/MAPA/UF.
Seção IV Do Trânsito de Material Vegetal

Art. 26 - Na emissão do CFO/CFOC, deverá ser adotada as seguintes DAs:
I - para frutos: "Os frutos são originários de Área Livre de Praga para o Cancro Cítrico (*Xanthomonas citri subsp. citri*) oficialmente
reconhecida"; e
II - para material de propagação: "O material de propagação é originário de Área Livre de Praga para o Cancro Cítrico (Xanthomonas
citri subsp. citri) oficialmente reconhecida".

Art. 27 - O trânsito de frutos e de material de propagação proveniente de ALP deverá ser acompanhado de PTV, embasada em CFO
ou CFOC, com a transcrição das DAs especificadas no art. 26.
CAPÍTULO IV
CRITÉRIOS E PROCEDIMENTOS PARA CARACTERIZAÇÃO, IMPLANTAÇÃO, MANUTENÇÃO E RECONHECIMENTO DO
STATUS FITOSSANITÁRIO DE ÁREA SOB SISTEMA DE MITIGAÇÃO DE RISCO (SMR) PARA O CANCRO CÍTRICO
Seção I Da Caracterização para Implantação do SMR para o Cancro Cítrico e dos Seus Objetivos

Art. 28 - Denomina-se Sistema de Mitigação de Risco (SMR) para o Cancro Cítrico a integração de diferentes medidas de manejo de
risco, pelo menos duas das quais atuam independentemente, e que, cumulativamente, atingem o nível apropriado de proteção contra a praga.

Art. 29 - O estabelecimento do SMR para o Cancro Cítrico tem como objetivo:
I - reduzir o potencial de inóculo visando à proteção de áreas ainda sem a ocorrência da praga Cancro Cítrico;
II - permitir o trânsito, para outras UFs, de frutos cítricos oriundos de áreas de ocorrência da praga Cancro Cítrico; e
III - permitir a exportação de frutos cítricos oriundos de áreas de ocorrência da praga Cancro Cítrico para países que reconheçam o
SMR como medida fitossanitária.

Art. 30 - O SMR para o Cancro Cítrico de que trata esta Instrução Normativa consiste na aplicação das seguintes medidas:
I - cadastro de imóveis com produção comercial de citros;
II - inscrição de Unidade de Produção (UP) e Unidade de Consolidação (UC);
III - aplicação de medidas de manejo durante o ciclo de cultivo;
IV - habilitação da UP, mediante vistoria prévia, para colheita;
V - emissão de CFO, CFOC e PTV;
VI - vistoria e inspeção de frutos nas UPs e UCs; e
VII - tratamento higienizante de frutos, pós-colheita.
Seção II Da Implantação e Manutenção do Status Fitossanitário de Área sob SMR para o Cancro Cítrico

Art. 31 - O reconhecimento, pelo MAPA do status fitossanitário de Área sob SMR para o Cancro Cítrico, fica condicionado à
realização de levantamento fitossanitário pelo OEDSV na pretendida área, obedecidos os procedimentos previstos nos parágrafos 1º, 2º, 3º, 4º e 5º do art. 5º desta Instrução Normativa.

Art. 32 - Para implantação do status de Área sob SMR para o Cancro Cítrico, o OEDSV deverá cadastrar os imóveis que produzam e
comercializem frutos cítricos localizados na área pretendida.
§ 1º - O imóvel identificado como sem ocorrência de Cancro Cítrico, poderá ter discriminada essa situação em seu cadastro.
§ 2º - A discriminação referida no parágrafo anterior poderá ser solicitada pelo RT, desde que apresente relatório de vistoria realizada para identificar plantas suspeitas de contaminação, conforme procedimento descrito no parágrafo 2º do art. 5º desta Instrução Normativa, com resultado negativo para a presença de Cancro Cítrico.
§ 3º - A vistoria referida no parágrafo anterior será realizada, no mínimo, uma vez por trimestre, devendo o RT encaminhar ao OEDSV relatório semestral, com os resultados de cada UP, desde que não tenham sido encontradas plantas com sintomas de Cancro Cítrico.
§ 4º - O relatório do primeiro semestre deverá ser entregue até quinze de julho e o do segundo semestre até quinze de janeiro.
§ 5º - Caberá ao OEDSV padronizar o formato e o controle do recebimento do relatório das vistorias.
§ 6º - A solicitação de que trata o parágrafo 2º deste artigo deverá ser homologada pelo OEDSV, que poderá estabelecer critérios para atendimento da demanda.
§ 7º - Os imóveis mencionados no parágrafo 1º deste artigo deverão adotar as medidas previstas nos incisos I, III, IV, V e VI do art.
41, ficando desobrigadas daquelas estabelecidas nos arts. 42 e 43 desta Instrução Normativa.
§ 8º - Diagnosticada a presença de Cancro Cítrico, o imóvel fica sujeito a cumprir também as medidas estabelecidas nos arts. 42 e 43 desta Instrução Normativa.

Art. 33 - Para adesão ao SMR para o Cancro Cítrico, o produtor deverá solicitar ao OEDSV o cadastramento de seu imóvel com
produção comercial de citros e a inscrição de todas as UPs.
§ 1º - Para o cadastramento do imóvel e inscrição da UP, referidos no *caput* deste artigo, o produtor apresentará solicitação formal ao OEDSV, conforme disposto na legislação de Certificação Fitossanitária de Origem, no mínimo cento e vinte dias antes da colheita, fornecendo as seguintes informações:
a) nome(s) do(s) produtor(es);
b) denominação do imóvel, área total, endereço e localização geográfica com base no datum oficial brasileiro (SIRGAS2000);
c) identificação das cultivares e idade dos plantios de citros em produção e formação;
d) estimativa da produção anual, em toneladas; e e) nome do Responsável Técnico.
§ 2º - Caso o imóvel já esteja cadastrado ou as UPs já estejam inscritas no OEDSV, poderão ser aproveitados os dados para compor o cadastro do SMR para o Cancro Cítrico.
§ 3º - É condição para manutenção da UP no SMR para o Cancro Cítrico a renovação anual da inscrição, respeitando-se o prazo de, no mínimo, sessenta dias antes do início da colheita.

Art. 34 - Para inscrição da UC destinada ao processamento de frutos cítricos provenientes de UP sob SMR para o Cancro Cítrico,
deverá ser observado o que determina a legislação de CFO/CFOC e deverá ter equipamentos e instalações:
I - apropriados para a higienização de frutos, embalagens e veículos;
II - para desvitalização do Cancro Cítrico; e
III - para destruição de frutos imprestáveis e dos demais restos vegetais.
Parágrafo único - Caso a UC já esteja inscrita no OEDSV, poderão ser aproveitados os dados para compor o cadastro das UC inscritas no SMR.

Art. 35 - Para inscrição da UC destinada ao recebimento de fruto processado e embalado, e que tenha por finalidade o envio de
frutos cítricos para outras UFs, deverá ser observado o que determina a legislação de CFO/CFOC, não sendo exigido os equipamentos e instalações previstas no artigo anterior.
§ 1º - A UC descrita no *caput* desse artigo não poderá realizar operação de classificação e reembalagem, ficando suas operações restritas ao fracionamento e reorganização de cargas.
§ 2º - A UC deverá manter o registro de origem e destino de cada lote de citros comercializado.

Art. 36 - O OEDSV deverá encaminhar relação atualizada das UCs habilitadas para o processamento ou distribuição de frutos
cítricos provenientes de SMR à unidade de sanidade vegetal da SFA/MAPA/UF, até a primeira quinzena do mês de maio de cada ano.

Art. 37 - É condição para avaliação do status fitossanitário de Área sob SMR para o Cancro Cítrico, o encaminhamento pelo OEDSV
de solicitação de reconhecimento e do relatório do levantamento determinado nos parágrafos 1º, 2º, 3º, 4º e 5º do art. 5º, à unidade de sanidade vegetal da SFA/MAPA/UF, que elaborará parecer técnico de avaliação quanto ao cumprimento dos requisitos para reconhecimento do status fitossanitário e encaminhará ao DSV/ SDA/ MAPA.
Parágrafo único - A unidade de sanidade vegetal da SFA/MAPA/UF que receber a documentação prevista no *caput* deste artigo, deverá instruir processo administrativo próprio, elaborar parecer técnico sobre o cumprimento das disposições desta norma e encaminhar ao DSV/SDA/MAPA.

Art. 38 - O DSV/SDA/MAPA deverá analisar o processo e emitir parecer técnico de avaliação quanto ao cumprimento dos requisitos
para reconhecimento do status fitossanitário de Área Sob SMR de Cancro Cítrico.

Art. 39 - A SDA/MAPA, mediante parecer técnico conclusivo favorável do DSV/SDA/MAPA, publicará ato de reconhecimento oficial
do status fitossanitário de Área Sob SMR de Cancro Cítrico.

Art. 40 - A manutenção do reconhecimento oficial do status fitossanitário de SMR para o Cancro Cítrico fica condicionada ao
cumprimento do disposto nesta Instrução Normativa, comprovada por meio de auditoria realizada pela unidade de sanidade vegetal da SFA/ MAPA/ UF.
Parágrafo único - A auditoria de que trata o *caput* deste artigo poderá ser realizada, a critério do DSV/SDA/MAPA, por AFFA de outras unidades de sanidade vegetal das SFA/MAPA/UF.
Seção III Das Medidas a Serem Adotadas

Art. 41 - Para reduzir o potencial de inóculo da praga e, consequentemente, o número de frutos contaminados na área, devem ser
adotadas durante o cultivo as seguintes medidas de manejo para as plantas cítricas nos imóveis sob SMR:
I - uso, preferencialmente, de cultivares menos suscetíveis ao Cancro Cítrico, recomendadas pela pesquisa, para novos plantios;
II - retirada de frutos infestados, os quais serão destruídos ou enviados para unidades de processamento de suco;
III - tratamentos fitossanitários preventivos;
IV - manejo integrado do minador dos citros (Phyllocnistis citrella);
V - descontaminação de ferramentas e máquinas; e
VI - uso de quebra ventos, com espécies recomendadas pela pesquisa, quando necessário.
§ 1º - O OEDSV poderá determinar a adoção de medidas complementares de manejo, desde que tecnicamente fundamentadas.
§ 2º - As medidas de manejo adotadas durante o cultivo em UP, em imóveis sob SMR, serão informadas pelo RT no livro de acompanhamento de campo.
§ 3º - Os frutos descritos no inciso II poderão ser encaminhados para indústria localizada em UF limítrofe, exceto se estiver localizada em ALP ou Área Sem Ocorrência de Cancro Cítrico, desde que sejam transportados em veículo fechado ou coberto, lacrado, acompanhados de PTV, na qual deverá constar o número do lacre e a DA: "Frutos contaminados com Cancro Cítrico (*Xanthomonas citri subsp. citri*) destinados exclusivamente à indústria".
§ 4º - Cabe ao OEDSV regulamentar o trânsito interno de frutos provenientes de suas áreas sob o SMR para o Cancro Cítrico e destinados à indústria localizada dentro do seu território.
Seção IV Da Habilitação para Colheita

Art. 42 - Para habilitação da UP ou de seus talhões específicos para colheita, deverá ser realizada vistoria prévia com objetivo de
verificar a incidência do Cancro Cítrico nos frutos.
§ 1º - A vistoria prévia de que trata o *caput* deste artigo será supervisionada pelo RT, e será realizada, no máximo, trinta dias antes da colheita.
§ 2º - Caso a colheita se estenda por vários meses, a vistoria deverá ser repetida a cada noventa dias.

Art. 43 - Deverão ser vistoriados dez mil frutos por UP, observando vinte frutos por planta, com caminhamento aleatório dentro da UP
e inspecionando todos os lados da planta.
§ 1º - Em UP com até quinhentas plantas, todas as plantas deverão ser vistoriadas, observando-se, no mínimo, vinte frutos por planta.

§ 2º - O RT fará as anotações no livro de acompanhamento de campo, sob supervisão do OEDSV.
§ 3º - O RT deverá apresentar ao OEDSV o relatório de vistoria das UPs em até dez dias após o término da vistoria.
§ 4º - Caberá ao OEDSV padronizar o formato e o controle do recebimento do relatório a ser apresentado pelo RT.

Art. 44 - Após o recebimento do relatório de vistoria, o OEDSV emitirá, em até sete dias, o Termo de Habilitação de Colheita para
cada UP ou para seus talhões específicos, que apresentem, no máximo, um por cento de frutos com sintomas de Cancro Cítrico.
Parágrafo único - Os frutos de UP ou de seus talhões específicos que tiverem sua habilitação de colheita indeferida, somente poderão:
I - transitar dentro da UF de acordo com o que for estabelecido pelo OEDSV; ou
II - ser enviados para indústria de suco localizada em UF limítrofe, exceto em Área Livre ou Área Sem Ocorrência, desde que o
transporte seja realizado de acordo com o estabelecido no parágrafo 3º do art. 41 desta Instrução Normativa.

Art. 45 - O OEDSV encaminhará relação atualizada das UPs ou de seus talhões específicos dentro de cada UP, habilitadas para
colheita, à unidade de sanidade vegetal da SFA/MAPA/UF, semestralmente ou sempre que solicitado pelo DSV/SDA/MAPA.
Seção V Do Processamento dos Frutos

Art. 46 - Os frutos cítricos produzidos em UP ou em seus talhões específicos, com habilitação de colheita deferida, deverão
ingressar na UC localizada dentro da mesma área homologada para o SMR onde está a UP, acompanhados de CFO com a seguinte
DA:
"Os frutos foram produzidos em UP, de imóvel cadastrado no SMR para o Cancro Cítrico, que apresentou até um por cento de frutos com sintomas de Cancro Cítrico (*Xanthomonas citri subsp. citri*)".
§ 1º - Os frutos na UC deverão ser separados e armazenados de acordo com o respectivo CFO.
§ 2º - Caso o processamento seja em UC ou indústria localizada em UF limítrofe, a partida deverá ser transportada em veículo fechado ou coberto, lacrado e acompanhada de PTV contendo o número do lacre e a DA constante no CFO, conforme descrito no *caput* deste artigo, acrescida de:
I - "e se destinam a indústria.", quando for esse o destino; ou
II - "e se destinam ao beneficiamento em Unidade de Consolidação.".
§ 3º - Cabe ao OEDSV regulamentar o trânsito interno de frutos provenientes de suas áreas sob o SMR para o Cancro Cítrico (*Xanthomonas citri subsp. citri*) e destinados à indústria localizada dentro do seu território.

Art. 47 - Os frutos provenientes de imóveis sem ocorrência do Cancro Cítrico poderão ingressar em UC ou indústria localizada em
outras UFs, transportados em veículo fechado ou coberto e acompanhados de PTV embasada em CFO ou CFOC, com a seguinte DA: "Os frutos são provenientes de imóvel sem ocorrência do Cancro Cítrico (*Xanthomonas citri subsp. citri*), localizado em Área sob SMR", acrescida de "e se destinam a indústria"; ou "e se destinam ao beneficiamento em Unidade de Consolidação", conforme o destino.
I - ocorrendo interceptação, no destino, de frutos com sintomas, esses serão enviados, pelo OEDSV, para análise de diagnóstico de
Cancro Cítrico e o fato comunicado ao OEDSV de origem;
II - até a obtenção do laudo laboratorial com resultado da análise para Cancro Cítrico, não poderá ser emitida PTV para partidas
provenientes da UP de origem;
III - o OEDSV comunicará o resultado da análise laboratorial ao OEDSV de origem que, em caso positivo, fará a mudança no
cadastro do imóvel, o qual passará a executar, também, as medidas estabelecidas nos arts. 42 e 43 desta Instrução Normativa.

Art. 48 - Na chegada da partida de frutos à UC e durante o processamento, deverão ocorrer vistorias, para detecção de frutos com
sintomas de Cancro Cítrico, sob supervisão do RT.
§ 1º - A partida que tiver, na chegada à UC ou no processamento, frutos com a presença de sintomas de Cancro Cítrico, para que possa ser incluída no CFOC, deverá ser reprocessada para retirada de frutos sintomáticos, os quais deverão ser destruídos ou encaminhados a indústria de suco, localizada dentro da área de SMR, desde que transportado em veículo fechado ou coberto.
§ 2º - Os frutos contaminados e restos de material vegetal provenientes da limpeza da UC e dos veículos transportadores deverão ser diariamente segregados e destruídos, no mínimo, semanalmente, devendo o RT registrar no livro de acompanhamento da UC, o peso dos frutos contaminados destruídos, a data e a forma da destruição.
§ 3º - Caso os frutos contaminados sejam destinados à indústria e não sejam transportados no mesmo dia, esses deverão ser armazenados de forma segura, fora da área de processamento, para que não venham a ser fonte de contaminação.

Art. 49 - Durante o processamento, os frutos deverão ser submetidos à higienização, conforme as seguintes opções:

I - imersão em solução com Hipoclorito de Sódio a duzentos ppm, pH sete, durante dois minutos; ou
II - outros métodos ou produtos para higienização, homologados pela pesquisa e reconhecidos pelo DSV/ SDA/ MAPA.
Seção VI Do Trânsito de Material Vegetal

Art. 50 - Na emissão do CFOC, deverá ser adotada a seguinte DA: "Os frutos são originários de Unidade de Produção onde foi
implantado o Sistema de Mitigação de Risco (SMR) reconhecido oficialmente, foram higienizados por imersão em solução com Hipoclorito de Sódio a duzentos ppm, pH sete, durante dois minutos e se encontram sem sintomas de Cancro Cítrico (*Xanthomonas citri subsp. citri*)".

Art. 51 - O trânsito de frutos cítricos deverá ser realizado em veículo fechado ou coberto, seja para transporte a granel, em
embalagens descartáveis ou em caixas plásticas retornáveis.
§ 1º - Na opção pela caixa plástica retornável, as caixas deverão ser higienizadas por pulverização ou imersão em solução de cloreto de benzalcônio (amônio quaternário), cento e vinte e cinco gramas por litro, na concentração de um décimo percentual.
§ 2º - O RT encarregado da certificação na origem deverá acrescentar no CFO e CFOC, além do disposto no art. 50 a seguinte DA:
I - se higienizadas por pulverização: "As caixas plásticas retornáveis foram higienizadas por pulverização em solução de cloreto de
benzalcônio (amônio quaternário) 125 (cento e vinte e cinco) gramas/litro, na concentração de 0,1% (um décimo percentual)";
II - se higienizadas por imersão: "As caixas plásticas retornáveis foram higienizadas por imersão em solução de cloreto de
benzalcônio (amônio quaternário) 125 (cento e vinte e cinco) gramas/litro, na concentração de 0,1% (um décimo percentual)".
§ 3º - Poderá ser utilizado outro produto de eficácia comprovada para higienização das caixas plásticas retornáveis, desde que reconhecido pelo DSV/SDA/MAPA.

Art. 52 - Os materiais de propagação de cítricos somente poderão transitar para outras UFs ou para ALP quando produzido:
I - em ambiente protegido, desde que distante, no mínimo, trinta metros de qualquer planta cítrica, observada a legislação específica
da UF para esse sistema de cultivo;
II - a céu aberto, desde que distante, no mínimo, trinta metros de qualquer planta cítrica e mil e duzentos metros de foco de Cancro
Cítrico.
§ 1º - Verificada a ocorrência de Cancro Cítrico em material de propagação sob ambiente protegido, serão aplicadas as medidas previstas no art. 82 desta Instrução Normativa.
§ 2º - Verificada a ocorrência de Cancro Cítrico em material de propagação à céu aberto, todo material será destruído, ficando a área interditada por um período de cento e oitenta dias para produção desse material.
§ 3º - Verificada a ocorrência de foco de Cancro Cítrico na área de isolamento prevista no inciso II, o material de propagação não poderá ser comercializado para outras UF ou ALP.
§ 4º - O material que atender as exigências acima mencionadas, poderá transitar para outras UF ou para ALP acompanhado de PTV, embasada em CFO, com a seguinte DA: "O material de propagação é proveniente de Área sob SMR, se encontra livre de Cancro Cítrico (*Xanthomonas citri subsp. citri*) e foi produzido conforme preconiza a legislação específica em vigor".
Seção VII Outras Medidas

Art. 53 - A UP e a UC terão suas inscrições canceladas quando não forem atendidas as exigências previstas nesta Instrução
Normativa.

Art. 54 - Em Áreas sob SMR para Cancro Cítrico, no imóvel com produção comercial de plantas cítricas que o produtor não aderiu ao
SMR e nos imóveis com plantas cítricas sem finalidade comercial, deverão ser executadas as seguintes medidas:
I - pulverização de todas as plantas cítricas, no raio de trinta metros a partir da planta diagnosticada contaminada com Cancro
Cítrico, com calda cúprica na concentração de um décimo percentual de cobre metálico;
II - descontaminação de máquinas e ferramentas com solução de Hipoclorito de Sódio a duzentos ppm, pH sete durante dois
minutos ou solução de cloreto de benzalcônio (amônio quaternário), cento e vinte e cinco gramas por litro, na concentração de um décimo percentual; e
III - adoção, preferencialmente, de cultivares menos suscetíveis ao Cancro Cítrico, recomendadas pelos órgãos de pesquisas, para
implantação de novos plantios.
§ 1º - Caso o OEDSV verifique, a qualquer tempo, o não cumprimento do que determina este artigo, deverá notificar imediatamente o produtor a executar as medidas ali especificadas, dentro do prazo determinado.
§ 2º - Encerrado o prazo a que se refere o parágrafo 1º deste artigo, e persistindo as inconformidades, o OEDSV executará as medidas fitossanitárias necessárias, às custas do produtor, o que poderá incluir a eliminação de plantas diagnosticadas com Cancro Cítrico.

Art. 55 - O DSV/SDA/MAPA, em conjunto com a unidade de sanidade vegetal das SFA/MAPA/UF, poderá a qualquer tempo, realizar
auditoria no SMR para o Cancro Cítrico.
Parágrafo único - A auditoria de que trata o *caput* deste artigo poderá ser realizada, a critério do DSV/SDA/MAPA, por AFFA de outras unidades de sanidade vegetal das SFA/ MAPA/ UF.

Art. 56 - O descumprimento das disposições previstas nesta Instrução Normativa implicará na mudança do status fitossanitário de
Área sob SMR para o Cancro Cítrico para o de status fitossanitário desconhecido.
CAPÍTULO V
PROCEDIMENTOS PARA CARACTERIZAÇÃO, IMPLANTAÇÃO E MANUTENÇÃO DO STATUS FITOSSANITÁRIO DE ÁREA SOB
ERRADICAÇÃO DO CANCRO CÍTRICO
Seção I Do Procedimento para Reconhecimento Oficial do Status Fitossanitário como Área Sob Erradicação do Cancro Cítrico

Art. 57 - Denomina-se como status fitossanitário de Área sob Erradicação do Cancro Cítrico, uma área onde a praga ocorre, porém
não se encontra amplamente distribuída, e na qual são empregadas medidas oficiais de prevenção, de vigilância e de controle por meio da eliminação sistemática de plantas cítricas contaminadas e daquelas suspeitas de contaminação com Cancro Cítrico, com o objetivo de erradicar a praga.

Art. 58 - O reconhecimento, pelo MAPA, do status fitossanitário de Área Sob Erradicação do Cancro Cítrico, fica condicionado à
realização de levantamento fitossanitário na área de interesse pelo OEDSV e dos cadastramentos previstos no art. 6º desta Instrução Normativa.
§ 1º - O levantamento fitossanitário será realizado em, no mínimo, cinco por cento das Unidades de Produção (UP) com produção comercial de citros, de maneira a se obter uma cobertura geográfica representativa.
§ 2º - Para cada imóvel com produção comercial de citros que contém a UP inspecionada, dentro do raio mínimo de duzentos metros, serão inspecionadas todas as plantas cítricas existentes em imóveis rurais de produção não comercial de citros, imóveis urbanos e áreas públicas.
§ 3º - O levantamento fitossanitário será realizado de acordo com os procedimentos previstos nos parágrafos 2º, 4º e 5º, do art. 5º desta Instrução Normativa.
§ 4º - Também deverão ser fornecidas as seguintes informações:
I - área e distribuição dos locais de produção de material propagativo;
II - mapeamento das áreas de ocorrência de Cancro Cítrico; e
III - Distância de isolamento entre os locais de produção de material de propagação e as áreas de ocorrência de Cancro Cítrico, com
informações do embasamento técnico desse isolamento.

Art. 59 - É condição, para avaliação do status fitossanitário de Área Sob Erradicação para o Cancro Cítrico, o encaminhamento pelo
OEDSV à unidade de sanidade vegetal da SFA/MAPA/UF dos documentos e dados previstos nos incisos I e IV, do art. 7º, desta Instrução Normativa.
Parágrafo único - Além dos documentos previstos no *caput* , a solicitação deve estar acompanhada do documento descritivo de delimitação da Área Sob Erradicação para o Cancro Cítrico, considerando limites territoriais, acidentes geográficos, rodovias, ferrovias e hidrovias.

Art. 60 - A unidade de sanidade vegetal da SFA/MAPA/UF que receber a documentação prevista no art. 59 desta Instrução
Normativa, deverá instruir processo administrativo próprio, elaborar parecer técnico sobre o cumprimento das disposições desta norma e encaminhar o processo ao DSV/SDA/MAPA.
Parágrafo único - No parecer técnico deverá constar, além de outras, informações sobre os documentos mencionados no parágrafo único do art. 7º desta Instrução Normativa.

Art. 61 - O DSV/SDA/MAPA deverá analisar o processo e emitir parecer técnico de avaliação sobre o cumprimento dos requisitos
para reconhecimento oficial do status fitossanitário de Área sob Erradicação do Cancro Cítrico.

Art. 62 - A SDA/MAPA, mediante parecer técnico favorável do DSV/SDA/MAPA, publicará ato de reconhecimento oficial do status
fitossanitário de Área sob Erradicação do Cancro Cítrico.
Seção II Da Manutenção do Status Fitossanitário de Área sob Erradicação do Cancro Cítrico

Art. 63 - A manutenção do reconhecimento oficial do status fitossanitário de Área sob Erradicação para o Cancro Cítrico fica
condicionada à realização, pelo OEDSV, de no mínimo um levantamento fitossanitário por ano, conforme procedimento descrito no art. 58 desta Instrução Normativa.

§ 1º - Com base nos levantamentos fitossanitários será elaborado relatório técnico, contendo as seguintes informações:
I - período de referência do relatório;
II - listagem de imóveis inspecionados com produção comercial de citros e respectivas UPs;
III - número de plantas cítricas inspecionadas;
IV - número de plantas cítricas infectadas;
V - número de plantas cítricas eliminadas; e
VI - quantidade de CFO e PTV emitidos no período de referência do relatório.
§ 2º - O relatório deverá ser encaminhado pelo OEDSV à unidade de sanidade vegetal da SFA/MAPA/UF correspondente, que instruirá processo administrativo próprio, emitirá parecer técnico e enviará o processo ao DSV/SDA/MAPA.
§ 3º - O processo será analisado pelo DSV/SDA/MAPA que emitirá parecer técnico de avaliação sobre o cumprimento dos requisitos para manutenção do status fitossanitário de Área sob Erradicação do Cancro Cítrico, de acordo com os critérios técnicos dispostos nesta Instrução Normativa.
§ 4º - A SDA/MAPA, mediante parecer técnico favorável do DSV/SDA/MAPA, comunicará oficialmente ao OEDSV a manutenção do status fitossanitário de Área sob Erradicação do Cancro Cítrico.

Art. 64 - O descumprimento das disposições previstas nesta Seção implicará na mudança do status fitossanitário de Área sob
Erradicação do Cancro Cítrico, para o de status fitossanitário desconhecido, não podendo, nesse caso, ser emitida a PTV para plantas cítricas e suas partes.

Art. 65 - Além das supervisões realizadas pela unidade de sanidade vegetal da SFA/MAPA/UF, conforme previsto no parágrafo 3º do
art. 3º, essa unidade deverá realizar, no mínimo, uma auditoria por ano na Área sob Erradicação do Cancro Cítrico.
Parágrafo único - A auditoria de que trata o *caput* deste artigo poderá ser realizada, a critério do DSV/SDA/MAPA, por AFFA de outras unidades de unidade de sanidade vegetal das SFA/ MAPA/ UF.
Seção III Do Trânsito de Material Vegetal Proveniente de Área sob Erradicação de Cancro Cítrico

Art. 66 - Os frutos das plantas cítricas que não apresentaram contaminação por Cancro Cítrico, provenientes de imóvel interditado,
conforme disposto no art. 72, somente poderão transitar para outras UF ou para ALP após realizada a erradicação do foco, conforme prescrito no art. 79, e procedendo-se à higienização dos frutos em UC inscrita, conforme as seguintes opções:
I - imersão em Hipoclorito de Sódio a duzentos ppm, pH sete, durante dois minutos; ou
II - outros produtos ou métodos de higienização reconhecidos pelo DSV/SDA/MAPA.
§ 1º - O CFO deverá conter a seguinte Declaração Adicional (DA): "Os frutos são provenientes de plantas sadias de imóvel sob supervisão oficial, localizado em Área sob Erradicação, e encontram-se livres de Cancro Cítrico (*Xanthomonas citri subsp. citri*)".
§ 2º - A PTV será embasada em CFO ou CFOC com a seguinte DA: "Os frutos são provenientes de plantas sadias de imóvel sob supervisão oficial, localizado em Área sob Erradicação, foram higienizados com Hipoclorito de Sódio a duzentos ppm, pH sete, durante dois minutos e encontram-se livres de *Xanthomonas citri subsp. citri*".
§ 3º - O trânsito de frutos cítricos de imóvel sob supervisão oficial deverá ser realizado conforme o descrito no art. 51 desta Instrução Normativa.
§ 4º - Para frutos destinados à indústria não se aplica a higienização prevista no *caput* desse artigo.
§ 5º - A PTV, no caso previsto no parágrafo anterior, será embasada em CFO ou Certificado Fitossanitário de Origem Consolidado (CFOC) com a seguinte DA: "Os frutos são provenientes de plantas sadias de imóvel sob supervisão oficial, localizado em Área sob Erradicação, e se destinam à indústria.".

Art. 67 - Os frutos cítricos provenientes de imóveis sem ocorrência do Cancro Cítrico poderão transitar para outras UFs ou para ALP
acompanhados de PTV, fundamentada em CFO ou CFOC, com a seguinte DA: "Os frutos são provenientes de imóvel sem ocorrência do Cancro Cítrico (*Xanthomonas citri subsp. citri*), localizado em Área sob Erradicação.".

Art. 68 - Os materiais de propagação de espécies cítricas somente poderão transitar para outra UF ou para ALP quando produzidos
em imóvel sem ocorrência de Cancro Cítrico, e acompanhados de PTV, embasada em CFO, com a seguinte DA: "O material de propagação é proveniente de Área sob Erradicação e foi produzido em imóvel sem ocorrência de Cancro Cítrico (*Xanthomonas citri subsp. citri*), conforme preconiza a legislação específica vigente".
CAPÍTULO VI
CRITÉRIOS E PROCEDIMENTOS PARA ERRADICAÇÃO DO CANCRO CÍTRICO
Seção I

Da Execução dos Levantamentos

Art. 69 - Nos imóveis com produção comercial de citros, deverá ser realizada, sob supervisão do RT, no mínimo, uma vistoria por
trimestre, para identificar plantas suspeitas de contaminação com Cancro Cítrico.
§ 1º - O RT deverá apresentar ao OEDSV relatório semestral com os resultados das vistorias nos imóveis, dentro do prazo previsto no parágrafo 4º, do art. 32 desta Instrução Normativa.
§ 2º - Ocorrendo detecção de plantas suspeitas de contaminação, o RT deverá comunicar de imediato ao OEDSV, para coleta e envio de amostras ao laboratório de controle oficial ou credenciado pelo MAPA, para análises de diagnóstico fitossanitário.
§ 3º - Caberá ao OEDSV padronizar o formato e o controle do recebimento do relatório a ser apresentado pelo produtor.

Art. 70 - O OEDSV deverá fiscalizar os imóveis com produção comercial de citros para verificar à realização das vistorias estipuladas
no art. 69 desta Instrução Normativa, a veracidade das informações dos relatórios entregues, e, principalmente, a existência de plantas que possam estar contaminadas com Cancro Cítrico.
Parágrafo único - Na inspeção, qualquer planta com sintomas de Cancro Cítrico será identificada, terá amostra coletada e encaminhada para diagnóstico fitossanitário em laboratório de controle oficial ou credenciado pelo MAPA, adotando-se os critérios previstos nesta Instrução Normativa.

Art. 71 - Em imóveis com produção não comercial de citros, localizados em áreas urbanas ou rurais, públicas ou privadas, compete
ao OEDSV a realização de inspeções e, caso haja suspeita de ocorrência de Cancro Cítrico, a adoção das medidas previstas no parágrafo único do art. 70 desta Instrução Normativa.
Seção II Da Interdição

Art. 72 - No caso da suspeita de Cancro Cítrico, o OEDSV coletará amostra a ser enviada a laboratório de controle oficial ou
credenciado pelo MAPA, e, como medida cautelar, interditará imediatamente o imóvel, mediante lavratura de Auto de Interdição, ficando temporariamente proibida a saída de frutos cítricos e de qualquer material de propagação.
Parágrafo único - Para cada imóvel rural ou urbano, com finalidade comercial ou não, com suspeita da ocorrência do Cancro Cítrico, o OEDSV deverá instruir processo administrativo próprio, contendo os seguintes documentos:
I - Termo de Fiscalização do Imóvel;
II - Ficha de Coleta de Amostra para diagnóstico fitossanitário ou documento equivalente; e
III - Auto de Interdição do Imóvel.

Art. 73 - O imóvel em que o laudo de diagnóstico fitossanitário do laboratório for positivo para a presença de Cancro Cítrico
permanecerá interditado, devendo o referido laudo ser juntado ao processo a que se refere o parágrafo único do art. 72 desta Instrução Normativa.
Parágrafo único - Caso o laudo de diagnóstico fitossanitário for negativo, o imóvel será desinterditado mediante a lavratura de Termo de Desinterdição.

Art. 74 - Confirmada a presença de Cancro Cítrico, os imóveis vizinhos com presença de plantas cítricas ou material de propagação,
na área abrangida pelo raio de erradicação previsto nos arts. 80 e 81, serão também interditados e notificados para vistoria imediata de todas as plantas cítricas.
§ 1º - Os demais imóveis limítrofes serão notificados para vistoria imediata de todas as plantas cítricas.
§ 2º - A vistoria de que trata este artigo será realizada sob supervisão do RT e do OEDSV, atendido os dispostos nos arts. 69, 70 e 72 desta Instrução Normativa.

Art. 75 - Para cada imóvel limítrofe interditado em função da abrangência do raio de erradicação, o OEDSV deverá instruir processo
administrativo próprio, contendo os seguintes documentos:
I - original do Termo de Fiscalização do Imóvel;
II - cópia do Laudo de Diagnóstico Fitossanitário; e
III - original do Auto de Interdição do Imóvel.

Art. 76 - Nos imóveis interditados serão aplicadas as medidas para erradicação do foco, previstas nos arts. 79 a 83 desta Instrução
Normativa.
§ 1º - A saída de frutos cítricos do imóvel interditado, só será permitida após a erradicação do foco, passando o imóvel a ser considerado sob supervisão oficial.
§ 2º - Somente será permitido o plantio de plantas hospedeiras do Cancro Cítrico na área perifocal após a desinterdição do imóvel.

§ 3º - No período de interdição, será permitido o plantio de plantas cítricas nas demais áreas do imóvel, exceto a instalação de viveiros de mudas cítricas, que só poderá ocorrer após a desinterdição.

Art. 77 - O OEDSV dará continuidade aos processos administrativos citados no parágrafo único do art. 72 e no art. 75, desta
Instrução Normativa, juntando o Auto de Destruição de Plantas.

Art. 78 - O OEDSV encaminhará semestralmente à unidade de sanidade vegetal da SFA/MAPA/UF, o relatório dos trabalhos
realizados.
Seção III Da Erradicação do Cancro Cítrico

Art. 79 - Comprovada oficialmente a ocorrência do Cancro Cítrico, serão adotadas todas as medidas para a sua erradicação, por um
dos seguintes métodos:
I - eliminação da planta foco e pulverização de todas as plantas cítricas, no raio de trinta metros, com calda cúprica na concentração
de um décimo percentual de cobre metálico; ou
II - eliminação da planta foco e de todas as plantas cítricas contidas na área perifocal de raio mínimo de trinta metros;
§ 1º - Entende-se por foco a planta ou as plantas cítricas contaminadas, mediante a comprovação por laudo de diagnóstico fitossanitário.
§ 2º - Após a eliminação das plantas, deverão ser efetuadas vistorias, supervisionadas pelo RT habilitado para emissão de CFO e pelo OEDSV, observando-se o seguinte:
I - as vistorias devem ser realizadas em todas as plantas cítricas do imóvel, até completar dois anos sem a constatação de novos
focos de Cancro Cítrico; e
II - para o método de eliminação da planta foco, prevista no inciso I do *caput* deste artigo, as vistorias serão realizadas
mensalmente, e no máximo a cada sessenta dias para o método previsto no inciso II.
§ 3º - Nos imóveis rurais e urbanos que tiverem plantas cítricas erradicadas, ficam os produtores obrigados a manejar o pomar de modo a evitar novas brotações dessas plantas.

Art. 80 - Existindo viveiros, campos de plantas fornecedoras de material de propagação sem origem genética comprovada, campos
de produção de porta-enxertos, jardins clonais e borbulheiras de plantas cítricas a céu aberto, num raio mínimo de duzentos metros a partir do foco, a propriedade será interditada e todo o material de propagação deverá ser eliminado pelo produtor, sob supervisão do OEDSV.
§ 1º - As áreas a que se refere o *caput* deste artigo, se existentes num raio de mil metros a partir do foco, serão interditadas pelo
OEDSV.
§ 2º - As áreas interditadas permanecerão sob vigilância e responsabilidade do seu RT, por um período de cento e oitenta dias, com vistorias a cada trinta dias, sendo supervisionadas pelo OEDSV.

Art. 81 - Existindo produção de material de propagação de citros em estruturas individualizadas protegidas por tela de malha e com
cobertura impermeável, num raio de duzentos metros a partir do foco em planta cítrica, todo o imóvel será interditado por um período de cento e vinte dias, e permanecerá sob vigilância e responsabilidade do seu RT, com vistorias a cada trinta dias, sendo supervisionado pelo OEDSV.

Art. 82 - Verificada a ocorrência do Cancro Cítrico em material de propagação sob estruturas individualizadas protegidas por tela de
malha e com cobertura impermeável, deverão ser eliminadas todas as plantas da estrutura onde foi detectado o foco do Cancro Cítrico, permanecendo todo o imóvel interditado por um período de cento e vinte dias.
§ 1º - A estrutura individualizada onde for detectada o foco de Cancro Cítrico, deverá permanecer sem plantas durante todo o período de interdição.
§ 2º - As demais estruturas individualizadas, por ventura existentes, deverão ser vistoriadas, a cada trinta dias, com supervisão do RT e do OEDSV.

Art. 83 - O imóvel com produção comercial de fruto e com viveiros, campos de plantas fornecedoras de material de propagação sem
origem genética comprovada, campos de produção de portaenxertos, jardins clonais ou borbulheiras, será interditado se detectada a presença da praga em material de propagação.
I - comprovada oficialmente a ocorrência de Cancro Cítrico, todo o material de propagação vegetativa será eliminado;
II - após a eliminação do foco, deverá ser realizada vistoria, sob a supervisão do RT e do OEDSV, de todas as plantas cítricas da
área de produção.
III - não sendo detectada a presença de Cancro Cítrico, os frutos poderão transitar para outras UF ou para ALP desde que seja
realizada a higienização prevista no art. 66 desta Instrução Normativa.

IV - somente poderá ser cultivado citros na área erradicada, se após o período de cento e oitenta dias, com vistorias realizadas a
cada trinta dias, sob supervisão do RT e do OEDSV, não for detectada a ocorrência de Cancro Cítrico.
Seção IV Da Desinterdição

Art. 84 - Para a desinterdição do imóvel devem ser atendidas as seguintes condições:
I - parecer conclusivo do OEDSV relacionado a finalização dos trabalhos de erradicação e ao cumprimento das vistorias previstas
nos artigos 79 a 83 desta Instrução Normativa; e
II - constatação da ausência:
a) de replantio de plantas cítricas na área perifocal;
b) do surgimento de novos focos; e c) de rebrotas ou sementeiras das plantas removidas, durante o período de interdição.

Art. 85 - Atendido o que consta no art. 84 desta Instrução Normativa o OEDSV emitirá Termo de Desinterdição, que deverá ser
juntado ao respectivo processo administrativo.
CAPÍTULO VII
DAS DISPOSIÇÕES FINAIS E TRANSITÓRIAS

Art. 86 - Aos imóveis que tenham sido interditados com base na Portaria nº 291, de 23 de julho de 1997, deverão ser aplicadas as
medidas previstas nesta Instrução Normativa, correspondentes ao status assumido pela área onde eles estão inseridos.

Art. 87 - Os proprietários, arrendatários ou ocupantes a qualquer título, de imóveis rurais ou urbanos, são obrigados a executar, às
suas custas, nos respectivos imóveis e no prazo que lhes for determinado, todas as medidas de erradicação do Cancro Cítrico constantes desta Instrução Normativa.

| § 1º - Quando não executadas as medidas previstas no caput deste artigo, o OEDSV deverá aplicá-las, compulsoriamente, por conta |
| --- |
| dos proprietários, arrendatários ou ocupantes a qualquer título. |

conta dos proprietários, arrendatários ou ocupantes a qualquer título.
§ 2º - Os proprietários, arrendatários ou ocupantes a qualquer título, cujos imóveis tenham plantas cítricas eliminadas por força das ações de erradicação do Cancro Cítrico, não terão direito a qualquer tipo de indenização.

Art. 88 - As DAs, presentes nesta Instrução Normativa poderão ser alteradas, a qualquer tempo, pelo DSV/SDA/MAPA, para
adequação ou para atender requisitos fitossanitários de importação específicos.

Art. 89 - Fica revogada a Instrução Normativa nº 37, de 5 de setembro de 2016.

Art. 90 - Esta Instrução Normativa entra em vigor na data de sua publicação.
BLAIRO MAGGI`},{texto:`MINISTÉRIO DA AGRICULTURA, PECUÁRIA E ABASTECIMENTO

GABINETE DO MINISTRO

INSTRUÇÃO NORMATIVA Nº 28, DE 24 DE AGOSTO DE 2016

DOU de 25/08/2016 (nº 164, Seção 1, pág. 6)

O MINISTRO DE ESTADO DA AGRICULTURA, PECUÁRIA E ABASTECIMENTO, no uso das atribuições que lhe confere o art. 87, parágrafo único, inciso II, da Constituição, tendo em vista o disposto no art. 2º do Decreto nº 5.741, de 30 de março de 2006, no Decreto nº 24.114, de 12 de abril de 1934, e o que consta do Processo nº 21000.006486/2013­92, resolve:

Art. 1º ­ Fica Aprovada a Norma Técnica para a utilização da Permissão de Trânsito de Vegetais ­ PTV desta
Instrução Normativa.
CAPÍTULO I
DA UTILIZAÇÃO DA PTV
Seção I Da Exigência e do Uso da PTV

Art. 2º ­ A PTV é o documento emitido para acompanhar o trânsito da partida de plantas ou produtos
vegetais, de acordo com as normas de defesa sanitária vegetal, e para subsidiar, conforme o caso, a emissão do Certificado Fitossanitário ­ CF e do Certificado Fitossanitário de Reexportação ­ CFR, com declaração adicional do Ministério da Agricultura, Pecuária e Abastecimento ­ Mapa.
Parágrafo único ­ O controle do trânsito de plantas ou de produtos vegetais envolve o transporte interno rodoviário, aéreo, hidroviário e ferroviário.

Art. 3º ­ A PTV será exigida para o trânsito de partida de plantas ou de produtos vegetais com potencial de
veicular praga quarentenária presente, praga não quarentenária regulamentada, praga de interesse da Unidade da Federação ­ UF e por exigência de país importador, salvo quando for dispensada em norma específica da praga.
Parágrafo único ­ Entende­se por praga de interesse de UF aquela de importância econômica, cuja disseminação possa ocorrer por meio de trânsito de plantas e de produtos vegetais e que seja objeto de programa oficial de prevenção ou controle na mesma UF, reconhecido pelo Departamento de Sanidade Vegetal ­ DSV.

Art. 4º ­ A emissão da PTV será fundamentada em Certificado Fitossanitário de Origem ­ CFO ou em
Certificado Fitossanitário de Origem Consolidado ­ CFOC para o trânsito de partidas de plantas ou de produtos vegetais, nos seguintes casos:
I ­ para as pragas regulamentadas, na UF de ocorrência ou de risco desconhecido, salvo quando a normativa específica dispensar a certificação; II ­ para comprovar a origem de Área Livre de Praga ­ ALP, Local Livre de Praga ­ LLP, Sistema de Mitigação de Riscos de Praga ­ SMRP ou Área de Baixa Prevalência de Praga ­ ABPP, reconhecida pelo Mapa; e III ­ para atender exigência específica de certificação fitossanitária de origem para praga de interesse de UF, com aprovação do DSV, ou por exigência de Organização Nacional de Proteção Fitossanitária ­ ONPF de país importador.
Parágrafo único ­ Entende­se por UF de risco desconhecido como sendo aquela em que o Órgão Estadual de Defesa Sanitária ­ OEDSV, não realiza levantamentos anuais para comprovação da não ocorrência de praga regulamentada.

Art. 5º ­ Não será exigido PTV para plantas e produtos vegetais cuja exigência seja laudo laboratorial,
certificado de tratamento, atestado de origem genética, termo de conformidade ou certificado de sementes ou mudas.
Parágrafo único ­ Para material de propagação com níveis de tolerância estabelecidos para pragas não quarentenárias regulamentadas, serão utilizados o Atestado de Origem Genética, ou o Termo de Conformidade, ou o Certificado de Sementes ou de Mudas, conforme a categoria da semente ou da muda, previstos na legislação de sementes e mudas, como documentos de trânsito.

Art. 6º ­ A PTV fundamentará a emissão do CF e do CFR, quando houver exigência de Declaração Adicional
­ DA referente a inspeção na origem.
Parágrafo único ­ Esta exigência não se aplica quando houver a emissão do CF na origem, por força de acordo bilateral ou de norma específica.

Art. 7º ­ A partida acompanhada de CF ou de CFR emitido por Fiscal Federal Agropecuário ­ FFA do Mapa,
na origem, deverá ser lacrada, ficando isenta da exigência da emissão da PTV durante o trânsito interno até o ponto de egresso.

Art. 8º ­ Os termos da utilizados na emissão da PTV serão fornecidos pelo Mapa ou farão parte do requisito
oficial da ONPF do país importador.
Seção II Da Emissão e Controle da PTV

Art. 9º ­ O OEDSV deverá utilizar o formulário da PTV, conforme o modelo apresentado no Anexo I e I­A,
desta Instrução Normativa.
§ 1º ­ A identificação numérica da PTV será em ordem crescente, com código numérico da UF, seguida do ano, com dois dígitos, e número sequencial de seis dígitos.
§ 2º ­ O código numérico da UF seguirá o padrão do Instituto Brasileiro de Geografia e Estatística ­ IBGE.

Art. 10 ­ O OEDSV, como Instância Intermediária do Sistema Unificado de Atenção à Sanidade Agropecuária
­ Suasa, estabelecerá procedimentos próprios de controle sobre a impressão do formulário da PTV, sua distribuição, assinatura e a emissão pelos Responsáveis Técnicos habilitados.
CAPÍTULO II
DA HABILITAÇÃO DE RESPONSÁVEL TÉCNICO DE OEDSV

Art. 11 ­ Para oficializar a habilitação, o Responsável Técnico ­ RT, deverá preencher e assinar duas vias do
Termo de Habilitação ­ TH, conforme o Anexo II, ficando a cargo do OEDSV o encaminhamento de uma via à Superintendência Federal de Agricultura ­ SFA na UF, para sua inclusão no Cadastro Nacional dos Responsáveis Técnicos Habilitados para emissão da PTV.
§ 1º ­ O número do Termo de Habilitação fornecido pelo OEDSV será composto do código numérico da UF, ano da habilitação, com dois dígitos, e numeração sequencial.
§ 2º ­ O Mapa disponibilizará o Cadastro Nacional dos Responsáveis Técnicos Habilitados para a emissão da PTV, do qual constará o nome do RT, o número do termo de habilitação, OEDSV de lotação, local de atuação e a assinatura.

§ 3º ­ O RT habilitado para a emissão da PTV deverá ser submetido, no máximo a cada três anos, a curso de treinamento e de capacitação técnica sobre normas de sanidade vegetal.
CAPÍTULO III
DA EMISSÃO DA PTV

Art. 12 ­ A PTV, no caso de emissão manual, somente poderá ser emitida e assinada por um Engenheiro
Agrônomo ou Engenheiro Florestal, em suas respectivas áreas de competência profissional, habilitado e inscrito no Cadastro Nacional dos Responsáveis Técnicos Habilitados para a emissão da PTV, pertencentes ao quadro do OEDSV e que exerçam atividade de fiscalização agropecuária.
§ 1º ­ O CFO ou CFOC deverá ser anexado à via da PTV destinada ao OEDSV, para fins de rastreabilidade no processo.
§ 2º ­ Será dispensada a exigência prevista no parágrafo anterior quando houver sistema informatizado que permita a verificação dos documentos que fundamentem a PTV e a rastreabilidade do processo.

Art. 13 ­ A PTV poderá ser emitida eletronicamente em sistema informatizado, desde que a certificação
fitossanitária de origem seja fiscalizada permanentemente e homologada pelo RT habilitado para emissão de
PTV.
§ 1º ­ O OEDSV deverá garantir a segurança do sistema informatizado e disponibilizar consulta ao site para verificar a autenticidade dos documentos.
§ 2º ­ A homologação da certificação fitossanitária de origem pelo RT habilitado para emissão de PTV se dará mediante uso de senha pessoal, de assinatura eletrônica ou de outra medida de segurança equivalente.
§ 3º ­ A PTV eletrônica dispensará a assinatura se estiver vinculada ao Engenheiro Agrônomo ou Florestal habilitado que homologar a certificação fitossanitária de origem.
§ 4º ­ A emissão da PTV poderá ser realizada pelo produtor de Unidade de Produção ­ UP ou proprietário de Unidade de Consolidação ­ UC, através de sistema informatizado disponibilizado pelo OEDSV.

Art. 14 ­ Na emissão de PTV fundamentada em outra PTV, deverá ser assegurada a manutenção da
identidade, da rastreabilidade e da condição fitossanitária do produto.

Art. 15 ­ A PTV será emitida para o produto importado com potencial de veicular Praga Quarentenária
Presente, a partir da UF declarada como destino da partida pelo importador, devendo ainda obedecer às exigências a seguir:
I ­ a partida importada seguirá no trânsito interno, do ponto de ingresso ao ponto de destino declarado, amparada pela cópia autenticada do CF ou do CFR, o Requerimento para Fiscalização de Produtos Agropecuários, emitido pelo Serviço de Vigilância Agropecuária do Mapa do ponto de ingresso da partida; II ­ a partida importada poderá ser distribuída para outra UF desde que o OEDSV estabeleça mecanismos de controle para assegurar a manutenção da conformidade fitossanitária e a rastreabilidade no processo de certificação; III ­ a declaração adicional constante do CF ou do CFR será transcrita para o campo específico da PTV, devendo ser incluído o número do CF e do Requerimento para Fiscalização de Produtos Agropecuários, nos casos em que houver exigência para o trânsito interno; IV ­ o OEDSV deverá arquivar cópia do CF ou do CFR e cópia do Requerimento para Fiscalização de Produtos Agropecuários, junto à via da PTV destinada ao controle do OEDSV, para efeito de rastreabilidade; e

V ­ o produto importado poderá compor lote de produto formado em UC, devendo ser incluído nos registros do livro de acompanhamento o número do CF ou do CFR e do TF, para a manutenção da rastreabilidade no processo de certificação.

Art. 16 ­ A PTV poderá ser emitida para a partida embarcada na mesma UF de produção, quando houver
necessidade de constar do CF ou do CFR declaração adicional do Mapa para atender exigência da ONPF do país importador.

Art. 17 ­ A PTV será emitida nas barreiras fitossanitárias estaduais, móveis ou fixas, ou em unidade do
OEDSV.

Art. 18 ­ A PTV será emitida em duas vias, com a seguinte destinação:
I ­ 1ª via: acompanha a partida no trânsito; e II ­ 2ª via: OEDSV, para arquivo junto com o CFO, CFOC, PTV, CF, CFR, Requerimento para Fiscalização de Produtos Agropecuários.
§ 1º ­ No caso de emissão eletrônica será admitida a emissão de uma única via para acompanhar a partida no trânsito de vegetais.
§ 2º ­ A PTV terá validade de até 30 (trinta) dias, ficando a cargo do emitente estabelecer o prazo.
§ 3º ­ Cada produto deverá estar relacionado individualmente, por nome científico, nome comum e cultivar ou clone, sendo exigida a identificação da UP ou do lote consolidado, a relação da quantidade correspondente e a respectiva Declaração Adicional.
§ 4º ­ Uma PTV poderá contemplar mais de um produto e mais de uma UP.
§ 5º ­ A PTV será emitida preenchendo­se sem rasuras cada campo existente, não sendo permitida a utilização do verso do documento.
§ 6º ­ Os campos não utilizados devem ser anulados de forma a evitar a adulteração do documento.
§ 7º ­ O Anexo I­A será utilizado para informações complementares dos campos da PTV, quando for necessário.

Art. 19 ­ A legislação específica da praga ou o acordo bilateral firmado pelo Mapa poderá estabelecer a
exigência do uso de lacre no ato da emissão da PTV.
Parágrafo único ­ O número do lacre da partida certificada ou do meio de transporte deverá constar do campo específico da PTV.

Art. 20 ­ Não poderá ser delegada a emissão da PTV a profissional de instituições estaduais que atuem na área
de assistência técnica, extensão rural, fomento ou pesquisa agropecuária ou de competência profissional não prevista por esta Instrução Normativa.
Parágrafo único ­ Após autorização do Mapa, em casos especiais e a pedido do OEDSV, a PTV poderá ser emitida por FFA, designado por um período determinado.
CAPÍTULO IV
DAS OBRIGAÇÕES PARA O USO DA PTV

Art. 21 ­ O OEDSV deverá encaminhar relatório semestral consolidado à SFA na UF, conforme Anexo III, até
o último dia do mês subsequente ao semestre respectivo.

Art. 22 ­ O OEDSV não emitirá a PTV para o trânsito de partida de plantas, ou produtos vegetais, que se
encontrar em desacordo com o previsto nesta Instrução Normativa.

Art. 23 ­ O OEDSV não exigirá a PTV para o trânsito interestadual de vegetais, em desacordo com legislação
federal.
§ 1º ­ A inobservância a este artigo deverá ser comunicada ao Mapa, o qual, como instância central e superior do Suasa, averiguará a não conformidade no prazo de 10 (dez) dias.
§ 2º ­ O descumprimento do previsto no caput inviabilizará repasses de recursos financeiros pelo Mapa ao
OEDSV.

Art. 24 ­ O Mapa realizará auditoria nos procedimentos adotados pelos OEDSV na emissão da PTV nas
Unidades da Federação.

Art. 25 ­ Aprovar o modelo da PTV e os demais modelos, conforme os Anexos I a III.

Art. 26 ­ Esta Instrução Normativa entra em vigor na data de sua publicação.

Art. 27 ­ Fica revogada a Instrução Normativa nº 54, de 4 de novembro de 2007.
BLAIRO MAGGI
ANEXO I
ANEXO I­A
ANEXO II
ANEXO III`,id:"IN28-2016"},{id:"IN34-2017",texto:`ÓRGÃO: MINISTÉRIO DA AGRICULTURA, PECUÁRIA E ABASTECIMENTO/SECRETARIA DE DEFESA AGROPECUÁRIA

INSTRUÇÃO NORMATIVA Nº 34, DE 5 DE SETEMBRO DE 2017
Decreto nº 5.759, de17 de abril de 2006, na Instrução Normativa nº 52, de 20 de novembrode 2007, alterada pela Instrução Normativa

nº 41, de 1º dejulho de 2008, e o que consta do Processo nº 21000.014390/2017-21,resolve:

Art. 1º Reconhecer, para fins de controle interno, a detecçãoda praga quarentenária ausente *Sternochetus mangiferae*, que tem como hospedeiro exclusivo a mangueira (*Mangifera indica*), em frutosde manga de áreas não comerciais localizadas nos municípios de Belford Roxo, Duque de Caxias, Magé, Mesquita, Nilópolis, Niterói, Paracambi, Rio de Janeiro e Seropédica, pertencentes à região metropolitanada cidade do Rio de Janeiro, do Estado do Rio de Janeiro.

Art.2º Declarar os municípios indicados no Art. 1º como zona interditada e proibir o trânsito de frutos de manga produzidosnaqueles municípios para áreas indenes.

Art.3º. O trânsito interestadual de frutos de manga produzidosno Estado do Rio de Janeiro fica condicionado à apresentaçãode Permissão de Trânsito de Vegetais (PTV) devidamente embasadaem Certificado Fitossanitário de Origem (CFO) ou Certificado Fitossanitáriode Origem Consolidado (CFOC) com a seguinte Declaração Adicional: "A partida foi produzida fora da zona interditadae encontra-se livre de *Sternochetus mangiferae*".

Art. 4º Fica o Departamento de Sanidade Vegetal autorizadoa editar instruções complementares para os trabalhos de erradicaçãoda praga na zona interditada.

Art. 5º Esta Instrução Normativa entra em vigor na data desua publicação.

LUIS EDUARDO PACIFICI RANGEL
Este conteúdo não substitui o publicado na versão certificada (pdf).`},{id:"IN38-2008",texto:`| Ministério da Agricultura, Pecuária e Abastecimento | BINAGRI - SISLEGIS |

GABINETE DO MINISTRO

INSTRUÇÃO NORMATIVA Nº 38, DE 23 DE JUNHO DE 2008

O MINISTRO DE ESTADO DA AGRICULTURA, PECUÁRIA E ABASTECIMENTO, no uso da atribuição que lhe confere o art. 87, Parágrafo único, inciso II, da Constituição, tendo em vista o disposto na Lei nº 9.972, de 25 de maio de 2000, no Decreto nº 6.268, de 22 de novembro de 2007, no Decreto nº 5.741, de 30 de março de 2006, e o que consta do Processo nº 21000.013771/2005 50, resolve:

Art. 1º Estabelecer o Regulamento Técnico da Amêndoa de Cacau, definindo o seu padrão
oficial de classificação, com os requisitos de identidade e qualidade, a amostragem, o modo de apresentação e a marcação ou rotulagem, na forma do Anexo à presente Instrução Normativa.

Art. 2º Esta Instrução Normativa entra em vigor após decorridos 120 (cento e vinte) dias de
sua publicação.
REINHOLD STEPHANES
REGULAMENTO TÉCNICO DA AMÊNDOA DE CACAU

Art. 1º O presente Regulamento Técnico tem por objetivo definir o padrão oficial de
classificação da amêndoa de cacau, considerando seus requisitos de identidade e qualidade, a amostragem, o modo de apresentação e a marcação ou rotulagem, nos aspectos referentes à classificação do produto.

Art. 2º Para efeito deste Regulamento Técnico, considerase:
I - amêndoa de cacau: amêndoas provenientes da espécie *Theobroma cacao* L.;
II - achatadas ou chochas: as amêndoas que apresentam ausência de cotilédones ou que são
tão finas que não permitam o corte;
III - amêndoas fermentadas: as amêndoas que, entre a colheita e a secagem, passaram por
um processamento via fermentação;
IV - amêndoas secas: aquelas que apresentam teor de umidade dentro do limite
recomendado neste Regulamento Técnico;
V - ardósia: as amêndoas não fermentadas, de coloração cinzento-escura (cor de ardósia) ou
roxas, com embrião branco ou marfim e que podem se apresentar compactas;
VI - danificadas por insetos: as amêndoas que se apresentam avariadas, em razão de ataques
de insetos, visíveis a olho nu, em qualquer de seus estágios evolutivos;
VII - fora de tipo: o produto que ultrapassar o limite máximo de tolerância de defeitos
estabelecido para o Tipo 3, na Tabela 1, deste Regulamento Técnico;
VIII - fumaça: o aroma percebido nas amêndoas de cacau com características de defumado
ou de presunto;
IX - germinadas: as amêndoas que apresentam a casca furada pelo desenvolvimento do
embrião;
X - impurezas: todas as partículas oriundas do cacau, tais como: restos de polpa, fragmentos
da placenta ou cordão central e de casca do fruto, entre outros;

XI - matérias estranhas: todas as partículas não oriundas do cacau, tais como: fragmentos
vegetais, sementes de outras espécies, pedra, terra, entre outras;
XII - matérias macroscópicas: aquelas estranhas ao produto, que podem ser detectadas por
observação direta (olho nu), sem auxílio de instrumentos ópticos e que estão relacionadas ao risco à saúde humana, segundo legislação específica vigente;
XIII - matérias microscópicas: aquelas estranhas ao produto, que podem ser detectadas com
auxílio de instrumentos ópticos e que estão relacionadas ao risco à saúde humana, segundo legislação específica vigente;
XIV - mofadas: as amêndoas que apresentam, internamente, desenvolvimento miceliar de
fungos, visíveis a olho nu;
XV - partícula com toxicidade desconhecida: as partículas estranhas, amêndoas ou partes
destas, diferentes de sua condição natural, com suspeita de toxicidade;
XVI - quebradas: as amêndoas que se apresentam partidas ou fragmentadas;
XVII - substâncias nocivas à saúde: substâncias ou agentes estranhos de origem biológica,
química ou física, que sejam nocivos à saúde, tais como: as micotoxinas, os resíduos de produtos fitossanitários ou outros contaminantes, previstos em legislação específica vigente, não sendo assim considerados aqueles cujo valor se verifica dentro dos limites máximos previstos;
XVIII - umidade" : o percentual de água encontrado na amostra do produto, isenta de
matérias estranhas e impurezas, determinado por um método oficial ou por aparelho que dê resultado equivalente; e *(Alterado(a) pelo(a) Instrução Normativa 57/2008/MAPA)*
XIX - violeta: a amêndoa de coloração violeta ou púrpura brilhante, que pode se apresentar
compacta, oriunda de fruto colhido imaturo ou resultante do processo de fermentação insuficiente.

Art. 3º O requisito de identidade da amêndoa de cacau é definido pela própria espécie do
produto, na forma disposta no inciso I, do art. 2º, deste Regulamento Técnico.

Art. 4º Os requisitos de qualidade da amêndoa de cacau serão definidos em função dos
limites máximos de tolerância de defeitos estabelecidos na Tabela 1 deste Regulamento Técnico.

Art. 5º A amêndoa de cacau será classificada em Tipos de acordo com os percentuais de
tolerância de defeitos previstos na Tabela 1 deste Regulamento Técnico, podendo ainda ser enquadrada como Fora de Tipo ou Desclassificada.
Tabela 1 - Amêndoa de cacau - Tolerância de defeitos, expressa em % e respectivo enquadramento do produto. *(Alterado(a) pelo(a) Instrução Normativa 57/2008/MAPA)*
- Amêndoa de cacau - Tolerância de defeitos, expressa em % e respectivo enquadramento do
produto. (*)

| Enquadramento do Produto | Defeitos |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
|  | Mofadas | Fumaça | Danificadas por insetos | Ardósia | Germinadas | Achatadas |
| Tipo 1 | De zero até 4,0% | De zero até 1,0% | De zero até 4,0% | De zero até 5,0% | De zero até 5,0% | De zero até 5,0% |
| Tipo 2 | Acima de 4,0% até 6,0% | Acima de 1,0% até 4,0% | Acima de 4,0% até 6,0% | Acima de 5,0% até 10,0% | Acima de 5,0% até 6,0% | Acima de 5,0% até 6,0% |
| Tipo 3 | Acima de 6,0% até 12,0% | Acima de 4,0% até 6,0% | Acima de 6,0% até 8,0% | Acima de 10,0% até 15,0% | Acima de 6,0% até 7,0% | Acima de 6,0% até 7,0% |

| Fora de Tipo | Acima de 12,0% até 25,0% | Acima de 6,0% | Acima de 8,0% | Acima de 15,0% | Acima de 7,0% | Acima de 7,0% |
| --- | --- | --- | --- | --- | --- | --- |

(*) N. da COEJO: Republicada no DOU DE 30/06/2008, Seção 1.
§ 1º O limite máximo de tolerância admitido para matérias estranhas é de 0,3%; para impurezas é de 1,0% e para amêndoas quebradas é de 5,0%; acima desses respectivos limites, o produto deverá ser rebeneficiado, desdobrado, recomposto ou mesclado.
§ 2º A amêndoa de cacau enquadrada como Fora de Tipo deverá ser rebeneficiada, desdobrada, recomposta ou mesclada para efeito de enquadramento em tipo.
§ 3º A amêndoa de cacau que exceder o limite de 25,0% (vinte e cinco por cento) de mofadas (mofo interno) não poderá ser rebeneficiada, desdobrada, recomposta ou mesclada para efeito de enquadramento em tipo; acima desse limite, será enquadrada como desclassificada, não podendo entrar no país ou ser comercializada. *(Redação dada pelo(a)* *Instrução Normativa 57/2008/MAPA)* _______________________________________________ *Redação(ões) Anterior(es)* § 4º Será desclassificada e terá a sua comercialização proibida a amêndoa de cacau que apresentar uma ou mais das características indicadas a seguir:
I - mau estado de conservação, dentre os quais:
a) percentual de amêndoas de cacau mofadas (mofo interno) superior a 25,0% (vinte e cinco por cento);
b) odor estranho de qualquer natureza, impróprio ao produto, que inviabilize a sua utilização para o uso proposto; e c) presença de sementes tóxicas na amostra, na carga ou no lote amostrado; e
II - em caso de importação, fica proibida a entrada no País de amêndoa de cacau
desclassificada, e os procedimentos legais e administrativos devem ser adotados em conjunto com a Vigilância Agropecuária do Ministério da Agricultura, Pecuária e Abastecimento (MAPA), conforme a causa da desclassificação do produto.

Art. 6º Sempre que julgar necessário, o MAPA ou a entidade credenciada por este Órgão
para a execução da classificação poderá exigir análise de substâncias nocivas à saúde, matérias macroscópicas, microscópicas e microbiológicas relacionadas ao risco à saúde humana, de acordo com legislação específica vigente, independentemente do resultado da classificação do produto.
Parágrafo único. O lote de amêndoa de cacau será desclassificado quando da análise de que trata o caput deste artigo, se constatar a presença das referidas substâncias em limites superiores ao máximo estabelecido na legislação específica vigente.

Art. 7º No caso de constatação de produto desclassificado, a entidade credenciada deverá
emitir o correspondente Documento de Classificação, desclassificando o produto, bem como comunicar o fato ao Setor Técnico competente da Superintendência Federal de Agricultura, Pecuária e Abastecimento (SFA), da Unidade da Federação onde o produto se encontra estocado, para as providências cabíveis.

Art. 8º Caberá ao Setor Técnico competente da SFA da Unidade da Federação adotar as
providências cabíveis quanto ao produto desclassificado, podendo para isso articular-se, onde couber, com outros órgãos oficiais.

Art. 9º No caso específico da utilização do produto desclassificado para outros fins que não
seja o uso proposto, o Setor Técnico competente da SFA da Unidade da Federação deverá estabelecer todos os procedimentos necessários ao acompanhamento do produto até a sua completa descaracterização como alimento ou matéria prima para elaboração de produto destinado ao consumo humano ou a sua destruição, cabendo ao proprietário do produto ou ao seu preposto, além de arcar com os custos

pertinentes à operação, ser o seu depositário.

Art. 10. A amêndoa de cacau deverá se apresentar fisiologicamente desenvolvida, sã, limpa
e seca, observadas as tolerâncias previstas neste Regulamento Técnico.

Art. 11. A umidade deverá ser obrigatoriamente determinada, mas não será considerada para
efeito de enquadramento do produto em Tipo, sendo recomendado para fins de comercialização da amêndoa de cacau o percentual máximo de 8,00% (oito por cento) para os Tipos 1 e 2; e 9,00% (nove por cento) para o Tipo 3 e Fora de Tipo.

Art. 12. A amostragem da amêndoa de cacau deverá observar o que segue:
I - as amostras coletadas, que servirão de base à realização da classificação, deverão conter
os dados necessários à identificação do interessado ou solicitante da classificação do produto, e conter ainda a informação relativa à identificação do lote ou volume do produto do qual se originaram;
II - caberá ao proprietário, possuidor, detentor ou transportador da amêndoa de cacau arcar
com a identificação e com a movimentação do produto, independentemente da forma em que se encontre, propiciando as condições necessárias à sua adequada amostragem;
III - responderá pela representatividade da amostra, em relação ao lote ou volume do qual se
originou, a pessoa física ou jurídica que a coletou, mediante apresentação do documento comprobatório correspondente; e
IV - na classificação de produtos importados e na classificação de fiscalização, o detentor da
mercadoria fiscalizada, seu representante legal, seu transportador ou seu armazenador devem propiciar as condições necessárias aos trabalhos de amostragem exigidas pela autoridade fiscalizadora.
§ 1º A amostragem em produto ensacado deverá observar a seguinte metodologia:
I - a coleta de amostras para classificação deve ser feita em, no mínimo, 10,00% (dez por
cento) do total de sacos que compõem o lote, escolhidos ao acaso, com um calador apropriado; *(Alterado(a) pelo(a) Instrução Normativa 57/2008/MAPA)* e II - a quantidade de produto coletada deverá ser homogeneizada, quarteada e reduzida em, no mínimo, 4 kg (quatro quilogramas) para compor, no mínimo, 4 (quatro) vias de amostras, constituídas de, no mínimo, 1 kg (um quilograma) cada uma, que serão representativas do lote.
§ 2º A amostragem em produto a granel deverá observar a seguinte metodologia:
I - as amostras serão retiradas utilizando-se um coletor de amostras e realizando-se várias
repetições em pontos uniformemente distribuídos no lote, de modo que essa amostra represente fielmente a totalidade do mesmo; e *(Alterado(a) pelo(a) Instrução Normativa*
*57/2008/MAPA)*
II - as amostras coletadas serão homogeneizadas, reduzidas e acondicionadas em, no
mínimo, 4 (quatro) vias, com peso de, no mínimo, 1 kg (um quilograma) cada uma, que serão representativas do lote.
§ 3º A amostragem em produto embalado deverá observar o que segue:
I - a amêndoa de cacau embalada e classificada deve apresentar
se homogênea quanto às suas especificações de qualidade, apresentação e identificação; e
II - a amostragem no produto embalado será realizada retirando- se um número de pacotes
ou embalagens em quantidade suficiente para compor, no mínimo, 4 (quatro) vias de amostra de, no mínimo, 1 kg (um quilograma) cada uma, observando, ainda, que o conteúdo dos pacotes ou embalagens extraído deverá ser homogeneizado, quarteado e reduzido a, no mínimo 4 kg (quatro quilogramas) para compor, no mínimo, 4 (quatro) amostras de, no mínimo, 1 kg (um quilograma) cada uma, que serão representativas do lote.

§ 4º O MAPA poderá aprovar regras específicas para amostragem da amêndoa de cacau oriunda de importação, para fins de classificação com vistas a sua entrada no País.
§ 5º As amostras para classificação extraídas conforme os procedimentos descritos anteriormente deverão ser devidamente acondicionadas, lacradas, identificadas e autenticadas, e terão a seguinte destinação:
I - uma amostra de trabalho para a realização da classificação;
II - uma amostra que será colocada à disposição do interessado;
III - uma amostra para atender a eventual pedido de Arbitragem;
e IV - uma amostra destinada ao controle interno de qualidade por parte da Entidade Credenciada.
§ 6º Quando a amostra for coletada e enviada pelo interessado, deverão ser observados os mesmos critérios e procedimentos de amostragem previstos neste Regulamento Técnico.
§ 7º Na classificação de fiscalização, as amostras extraídas conforme os procedimentos descritos anteriormente deverão ser devidamente acondicionadas, lacradas, identificadas, autenticadas, e terão a seguinte destinação:
I - uma amostra de trabalho para a realização da classificação de fiscalização;
II - uma amostra que será colocada à disposição do fiscalizado;
III - uma amostra para atender a eventual pedido de perícia;
e IV - uma amostra de segurança, caso uma das vias anteriores seja inutilizada ou haja necessidade de análises complementares.
§ 8º A quantidade remanescente do processo de amostragem, homogeneização e quarteamento será recolocada no lote ou devolvida ao detentor do produto.
§ 9º O classificador, a entidade credenciada ou o órgão de fiscalização não serão obrigados a recompor ou ressarcir o produto porventura danificado em função da execução da amostragem e da classificação.

Art. 13. A classificação da amêndoa de cacau seguirá o seguinte roteiro ou procedimento
operacional:
I - previamente à homogeneização e quarteamento da amostra de, no mínimo, 1 kg (um
quilograma), verificar cuidadosamente se na amostra há presença de insetos vivos, sementes tóxicas, características desclassificantes ou outros fatores que dificultem ou impeçam a classificação da amêndoa de cacau, observando que, em caso positivo, deve-se emitir o Laudo de Classificação e recomendar, previamente à classificação, o expurgo, ou outra forma de controle ou beneficiamento do produto, conforme o caso, observando ainda os critérios definidos no § 4º, do art. 5º, deste Regulamento Técnico;
II - separar as matérias estranhas, as impurezas e as amêndoas quebradas utilizando uma
peneira de crivos circulares de 6,00 mm (seis milímetros) de diâmetro, executando movimentos contínuos e uniformes, completando o procedimento manualmente quando necessário; pesar separadamente as matérias estranhas, as impurezas e as amêndoas quebradas, calcular os respectivos percentuais e anotar os valores encontrados, separadamente, no Laudo de Classificação; *(Redação dada pelo(a) Instrução Normativa*
*57/2008/MAPA)*
_______________________________________________ *Redação(ões) Anterior(es)*
III - determinar o teor de umidade do produto em equipamento apropriado seguindo as
recomendações do fabricante e anotar o valor encontrado no Laudo de Classificação;
*(Redação dada pelo(a) Instrução Normativa 57/2008/MAPA)* _______________________________________________ *Redação(ões) Anterior(es)*

IV - a identificação e separação dos defeitos será efetuada da seguinte forma: as amêndoas
mofadas, fumaça, danificadas por insetos, ardósia, germinadas e achatadas serão verificadas em 300 (trezentas) amêndoas retiradas aleatoriamente; nessas 300 (trezentas) amêndoas, proceder a um corte longitudinal e realizar o teste de aroma; em seguida, identificar os defeitos colocando as amêndoas na tábua de classificação, calcular o percentual de cada defeito e anotar o valor encontrado no Laudo de Classificação;
V - caso a amêndoa de cacau apresente mais de um defeito, prevalecerá o defeito mais grave
para efeito de enquadramento em Tipo, considerando-se a seguinte escala de gravidade, em ordem decrescente:
mofadas, fumaça, danificadas por insetos, ardósia, germinadas e achatadas;
VI - com base nos percentuais de defeitos anotados no Laudo de Classificação, definir o
Tipo da amêndoa de cacau com base na Tabela 1 deste Regulamento Técnico, enquadrando o produto em função do pior Tipo encontrado;
VII - fazer constar, no Laudo e no Documento de Classificação, os motivos que levaram o
produto a ser considerado como Fora de Tipo e Desclassificado, quando for o caso; e
VIII - revisar, datar, carimbar e assinar o Laudo e o Documento de Classificação, devendo
constar obrigatoriamente o carimbo, o nome do classificador e o seu número de registro no
MAPA.

Art. 14. No acondicionamento e no modo de apresentação da amêndoa de cacau, deve ser
observado o estabelecido nos parágrafos seguintes.
§ 1º A amêndoa de cacau poderá apresentar-se a granel, ensacada ou embalada.
§ 2º As embalagens utilizadas no acondicionamento da amêndoa de cacau deverão ser de materiais apropriados.
§ 3º As especificações quanto à confecção e à capacidade das embalagens devem estar de acordo com a legislação específica vigente.

Art. 15. Na marcação ou rotulagem da amêndoa de cacau, deve ser observado o estabelecido
nos parágrafos seguintes.
§ 1º As especificações de qualidade do produto referente à marcação ou rotulagem deverão estar em consonância com o respectivo Documento de Classificação.
§ 2º No caso da amêndoa de cacau embalada para a venda direta à alimentação humana, a marcação ou rotulagem, uma vez observada a legislação específica vigente, deverá conter ainda as seguintes informações:
I - relativas à classificação do produto: tipo;
II - relativas ao produto e ao seu responsável:
a) denominação de venda do produto;
b) identificação do Lote, que será de responsabilidade do interessado; e c) nome empresarial, Cadastro Nacional de Pessoa Jurídica (CNPJ), endereço da empresa embaladora ou do responsável pelo produto.
§ 3º A marcação ou rotulagem da amêndoa de cacau importada deverá apresentar as seguintes informações:
I - país de origem;
II - lote; e
III - *(Excluído(a) pelo(a) Instrução Normativa 57/2008/MAPA)*
_______________________________________________ *Redação(ões) Anterior(es)*

§ 4º A marcação ou rotulagem deve ser de fácil visualização e de difícil remoção, assegurando informações corretas, claras, precisas, ostensivas e em língua portuguesa, cumprindo as exigências previstas em legislação específica vigente, devendo ainda atender o que segue:
I - a informação relativa ao Tipo deve ser grafada em algarismo arábico; e
II - a informação relativa ao Tipo deve ser grafada em caracteres do mesmo tamanho,
segundo as dimensões especificadas para o peso líquido, em legislação metrológica vigente.

Art. 16. Os casos omissos e as dúvidas porventura surgidas na aplicação deste Regulamento
Técnico serão resolvidos pelo MAPA.
D.O.U., 24/06/2008 - Seção 1`},{id:"IN46-2010",texto:`MINISTÉRIO DA AGRICULTURA, PECUÁRIA E ABASTECIMENTO

GABINETE DO MINISTRO

INSTRUÇÃO NORMATIVA Nº 46, DE 27 DE DEZEMBRO DE 2010

O MINISTRO DE ESTADO DA AGRICULTURA, PECUÁRIA E ABASTECIMENTO, no uso da atribuição que lhe confere o art. 87, parágrafo único, inciso II, da Constituição, tendo em vista o disposto no Decreto nº 24.114, de 12 de abril de 1934, na Lei nº 10.711, de 5 de agosto de 2003, no Decreto nº 5.153, de 23 de julho de 2004, no Decreto nº 5.741, de 30 de março de 2006, na Portaria MA nº 386, de 15 de dezembro de 1980, e o que consta do Processo no 21000.001356/2010-11, resolve:

Art. 1º Estabelecer os critérios e procedimentos de prevenção e controle das pragas Banana Streak Vírus -
BSV e Cucumber mosaic vírus - CMV em mudas de bananeira visando à certificação fitossanitária com vistas à sua comercialização, na forma desta Instrução Normativa.

Art. 2º As pragas Banana Streak Vírus - BSV (vírus das estrias da bananeira) e Cucumber mosaic vírus -
CMV (vírus do mosaico do pepino) em material de propagação de bananeira (*Musa spp.*) têm o status de Praga Não Quarentenária Regulamentada.
Parágrafo único. Considera-se Praga Não Quarentenária Regulamentada aquela não quarentenária cuja presença em plantas ou partes destas, para plantio, influi no seu uso proposto com impactos econômicos inaceitáveis.

Art. 3º As pessoas físicas e jurídicas que exerçam as atividades de produção, comércio, armazenamento,
importação e exportação de mudas de bananeira (*Musa spp.*) deverão estar inscritas no Registro Nacional de Sementes e Mudas - RENASEM.

Art. 4º O órgão estadual de defesa sanitária vegetal deverá inscrever os viveiros produtores de mudas de
bananeiras, a pedido do responsável técnico, habilitando-os à certificação fitossanitária de origem.

Art. 5º As plantas matrizes de bananeira deverão ser mantidas em ambientes protegidos do ataque de
insetos sugadores, como pulgões e cochonilhas, e isentos de espécies hospedeiras do *BSV e CMV*.

Art. 6º As plantas matrizes de bananeira deverão ser submetidas a exame de Polymerase Chain Reaction
(PCR) para a detecção de BSV e de Reverse Transcriptase - Polymerase Chain Reaction (RT-PCR) para
CMV.

Art. 7º As plantas matrizes de bananeira deverão ser identificadas com códigos alfanuméricos de que
constem obrigatoriamente a cultivar e um número identificador no âmbito do estabelecimento.

Art. 8º Os lotes de material de propagação produzidos deverão ser identificados com códigos
alfanuméricos de que constem obrigatoriamente o(s) código(s) da(s) planta(s) matriz(es) e a data da produção.
§ 1º As mudas deverão estar identificadas com, no mínimo, o código do lote e nome ou número do registro do estabelecimento produtor.
§ 2º A identificação de que trata o § 1º deste artigo poderá ser feita individualmente ou coletivamente quando acondicionadas em embalagens.

Art. 9º Cada lote deverá ser submetido a exame para a confirmação da isenção de infecção de BSV e
CMV por meio de teste de PCR e RT-PCR, respectivamente, observando-se o seguinte:
I - o responsável técnico pelo estabelecimento deverá realizar amostragem em, no mínimo, 0,25 % (zero
vírgula vinte e cinco por cento) das mudas do lote, observando-se o número mínimo de 3 (três) mudas;

II - deverá ser coletada parte das folhas mais novas da muda para a realização do exame;
III - os exames deverão ser realizados em laboratórios oficiais ou credenciados, pertencentes à Rede
Nacional de Laboratórios Agropecuários do Sistema Unificado de Atenção à Sanidade Agropecuária.

Art. 10. Para cada lote produzido e cujos exames tiverem resultados negativos, o responsável técnico pelo
estabelecimento deverá emitir um Certificado Fitossanitário de Origem (CFO) com as seguintes informações:
I - Declaração Adicional: "A partida encontra-se livre dos vírus Banana streak virus (BSV) e Cucumber
mosaic virus (CMV), de acordo com o laudo laboratorial [nº do laudo], [nome do laboratório] - [município e UF de localização do laboratório]";
II - código identificador do lote;
III - número do registro ou inscrição do estabelecimento produtor no órgão estadual de defesa sanitária
vegetal; e
IV - número de inscrição no RENASEM.

Art. 11. O estabelecimento produtor deverá manter registro, por 5 (cinco) anos, de todos os lotes
produzidos, bem como arquivo dos laudos laboratoriais e certificados fitossanitários de origem emitidos neste período.
§ 1º O registro deverá conter no mínimo as seguintes informações:
I - identificação do lote;
II - identificação da planta matriz;
III - tamanho do lote (número de mudas produzidas);
IV - número do laudo laboratorial e nome do laboratório que emitiu;
V - número do CFO e/ou CFOC;
VI - destino das mudas (nome e município do comprador);
VII - data da produção do lote.
§ 2º O registro poderá ser feito em meio eletrônico, desde que cópia em papel, assinada pelo responsável técnico, esteja disponível para a fiscalização quando solicitada.

Art. 12. O Ministério da Agricultura, Pecuária e Abastecimento (MAPA) deverá fiscalizar os viveiros
produtores de mudas de bananeira, pertencentes às pessoas físicas e jurídicas inscritas no RENASEM.
§ 1º O MAPA poderá descentralizar, por convênio ou acordo com entes públicos, a execução do serviço de fiscalização de que trata esta Instrução Normativa, desde que observado o procedimento descrito no art. 122 do Decreto nº 5.153, de 23 de julho de 2004.
§ 2º As ações decorrentes da delegação de competência prevista no § 1º deste artigo ficam sujeitas a auditorias regulares, a serem executadas pelo MAPA, nos termos do art. 123 do Decreto nº 5.153, de 2004 .
§ 3º Anualmente o órgão fiscalizador deverá coletar amostras, que serão enviadas para laboratório oficial ou credenciado pertencente à Rede Nacional de Laboratórios Agropecuários do Sistema Unificado de Atenção à Sanidade Agropecuária, para a realização de diagnóstico fitossanitário de infecção por BSV e

CMV, por meio de teste de PCR e RT-PCR, respectivamente.
§ 4º Os procedimentos para a realização de amostragem pelo MAPA serão os mesmos a serem adotados pelo responsável técnico do estabelecimento, estabelecidos no art. 9º desta Instrução Normativa.
§ 5º Os lotes e matrizes que apresentarem contaminação por qualquer dos vírus objeto desta Instrução Normativa serão apreendidos e condenados, conforme previsto no art. 195, incisos III e IV, do Decreto nº 5.153, de 2004.

Art. 13. Somente será permitido o trânsito de mudas de bananeira quando emitida a Permissão de Trânsito
de Vegetais.
§ 1º A Declaração Adicional do Certificado Fitossanitário de Origem ou Certificado Fitossanitário de Origem Consolidado deverá constar da Permissão de Trânsito de Vegetais.
§ 2º As mudas de bananeira que transitarem em desrespeito às determinações deste artigo ficam sujeitas à interceptação, caso em que será determinado o retorno das mesmas ao local de origem e comunicado ao órgão fiscalizador da produção e comércio, para adoção das providências cabíveis.

Art. 14. Fica proibido o comércio de mudas de bananeira produzidas com inobservância do estabelecido
nesta Instrução Normativa.

Art. 15. Esta Instrução Normativa entra em vigor 120 (cento e vinte) dias após a data de sua publicação.
WAGNER ROSSI
D.O.U., 28/12/2010 - Seção 1`},{id:"PORT1257-2025",texto:`ÓRGÃO: MINISTÉRIO DA AGRICULTURA E PECUÁRIA/SECRETARIA DE DEFESA AGROPECUÁRIA

PORTARIA SDA/MAPA Nº 1.257, DE 19 DE MARÇO DE 2025

20/03/2025, 11:43 PORTARIA SDA/MAPA Nº 1.257, DE 19 DE MARÇO DE 2025 - PORTARIA SDA/MAPA Nº 1.257, DE 19 DE MARÇO DE 2025 - DOU - Imprensa Nacional

abril de 2006, e o que consta do Processo nº 21008.000419/2024-47, resolve:

Art. 1º Fica instituído o Programa Nacional de Prevenção e Controle da Vassoura-de-Bruxa da Mandioca - Ceratobasidium theobromae Rhizoctonia theobromae - PVBM.

Art. 2º O Programa Nacional de Prevenção e Controle da Vassoura-de-Bruxa da Mandioca -
PVBM visa ao fortalecimento da cadeia produtiva da mandioca, estabelecendo os critérios e procedimentos para a prevenção e o controle da praga Rhizoctonia theobromae.

Art. 3º Deverão ser realizados levantamentos de detecção anuais nas Unidades Federativas sem a ocorrência da praga, pelo Órgão Estadual ou Distrital de Defesa Sanitária Vegetal, conforme procedimentos e metas estipulados pelo Departamento de Sanidade Vegetal e Insumos Agrícolas da SECRETARIA DE DEFESA AGROPECUÁRIA DO MINISTÉRIO DA AGRICULTURA E PECUÁRIA.
§ 1º Os levantamentos de detecção nas Unidades Federativas com a ocorrência da praga, em municípios sem ocorrência, devem seguir os procedimentos e metas estipulados pelo Departamento de Sanidade Vegetal e Insumos Agrícolas.
§ 2º O Departamento de Sanidade Vegetal e Insumos Agrícolas publicará, em Manual de Procedimentos específico, ações adicionais para o cumprimento do programa.

Art. 4º Os levantamentos de delimitação deverão ser realizados em caso de detecção de
Rhizoctonia theobromae, pelo Órgão Estadual ou Distrital de Defesa Sanitária Vegetal, em todos os municípios limítrofes àqueles com ocorrência da praga na mesma Unidade Federativa, conforme procedimentos e metas estipulados pelo Departamento de Sanidade Vegetal e Insumos Agrícolas.
Parágrafo único. No caso de detecção de novos focos, o levantamento será ampliado para os demais municípios limítrofes.

Art. 5º A certificação fitossanitária de origem de plantas e partes de plantas hospedeiras da praga é dispensada em unidades de produção e unidades de consolidação localizadas em Unidade Federativa sem ocorrência da praga.
§ 1º A Permissão de Trânsito de Vegetais - PTV fica dispensada quando as plantas e partes de plantas hospedeiras da praga se originarem de Unidade Federativa sem ocorrência de Rhizoctonia theobromae.
§ 2º A Permissão de Trânsito de Vegetais - PTV é necessária no caso de a partida de plantas e partes de plantas hospedeiras da praga transitar em áreas com ocorrência, devendo este:
I - ser transportado em embalagens lacradas; e
II - ser lacrado pelo Responsável Técnico ou pelo Órgão Estadual, ou Distrital de Defesa Sanitária Vegetal na Unidade Federativa de origem e o número do lacre informado na Permissão de Trânsito de Vegetais - PTV.

Art. 6º O trânsito interestadual de plantas e partes de plantas hospedeiras da praga, produzidas em Unidades Federativas com ocorrência da praga, oriundo de municípios sem ocorrência, deverá ser amparado por Permissão de Trânsito de Vegetais - PTV, baseada em Certificado Fitossanitário de Origem - CFO ou Certificado Fitossanitário de Origem Consolidado - CFOC.
§ 1º Na Permissão de Trânsito de Vegetais - PTV de que trata o caput deverá conter a seguinte declaração adicional "A partida é originária de município sem ocorrência de Rhizoctonia theobromae, em Unidade Federativa com ocorrência, e encontra-se livre da praga".
§ 2º A Permissão de Trânsito de Vegetais - PTV é necessária no caso de a partida de plantas e partes de plantas hospedeiras da praga transitar em áreas com ocorrência, devendo esta:
I - ser transportada em embalagens lacradas; e
II - ser lacrada pelo Responsável Técnico ou pelo Órgão Estadual, ou Distrital de Defesa Sanitária Vegetal no município de origem e o número do lacre informado na Permissão de Trânsito de Vegetais -
PTV.

Art. 7º Fica proibido o trânsito de plantas e partes de plantas de espécies hospedeiras da praga oriundas de municípios com ocorrência de Rhizoctonia theobromae.

Art. 8º O Ministério da Agricultura e Pecuária exercerá auditoria, supervisão, avaliação e coordenação das ações desenvolvidas pelo Órgão Estadual ou Distrital de Defesa Sanitária Vegetal.

Art. 9º O Órgão Estadual ou Distrital de Defesa Sanitária Vegetal deverá encaminhar à
Superintendência de Agricultura e Pecuária o relatório consolidado relativo ao Programa Nacional de Prevenção e Controle da Vassoura-de-Bruxa da Mandioca - PVBM contendo as ações realizadas e os resultados obtidos até o dia 31 de janeiro do ano subsequente ou quando solicitado pelo Departamento de Sanidade Vegetal e Insumos Agrícolas.
§ 1º O relatório consolidado de que trata o caput deverá discriminar os municípios com ocorrência de Rhizoctonia theobromae.
§ 2º A Superintendência de Agricultura e Pecuária deverá emitir parecer técnico conclusivo e encaminhá-lo ao Departamento de Sanidade Vegetal e Insumos Agrícolas em até trinta dias após o recebimento.

Art. 10. Esta Portaria entra em vigor na data de sua publicação.
ALLAN ROGÉRIO DE ALVARENGA
Este conteúdo não substitui o publicado na versão certificada.
https://www.in.gov.br/en/web/dou/-/portaria-sda/mapa-n-1.257-de-19-de-marco-de-2025-618705995 2/2`},{if:"PORT1326-2025",texto:`**Ministério da Agricultura e Pecuária**
**Secretaria de Defesa Agropecuária**
**PORTARIA SDA/MAPA Nº 1.326, DE 4 DE JULHO DE 2025**

*Institui o Programa Nacional de Prevenção e Controle à doença denominada Huanglongbing - PNCHLB e os critérios e procedimentos para classificação e manutenção do status fitossanitário das Unidades Federativas e as medidas de prevenção e controle da doença, no território nacional.*

O SECRETÁRIO DE DEFESA AGROPECUÁRIA, DO MINISTÉRIO DA AGRICULTURA E PECUÁRIA, no uso das atribuições que lhe conferem os art. 22 e 49 do Anexo I do Decreto nº 11.332, de 1º de janeiro de 2023, tendo em vista o disposto no Decreto nº 24.114, de 12 de abril de 1934, no Decreto nº 5.741, de 30 de março de 2006, no Decreto nº 5.759, de 17 de abril de 2006, e o que consta do Processo nº 21000.046036/2024-51, resolve:

### CAPÍTULO I
#### DAS DISPOSIÇÕES GERAIS

**Art. 1º** Fica instituído o Programa Nacional de Prevenção e Controle à doença denominada Huanglongbing - PNCHLB, no âmbito do Ministério da Agricultura e Pecuária.

**Art. 2º** O PNCHLB tem por objetivo estabelecer as medidas fitossanitárias relativas à vigilância, à contenção e ao controle da praga quarentenária presente *Candidatus* Liberibacter americanus e *Candidatus* Liberibacter asiaticus, bactérias causadoras da doença denominada Huanglongbing - HLB, e do seu inseto vetor *Diaphorina citri*.

**Art. 3º** As medidas de prevenção e controle do HLB e de seu inseto vetor, em todo o território nacional, em imóveis com presença de plantas hospedeiras, para fins comerciais ou não, situados em zona rural ou urbana, serão executadas conforme o disposto nesta Portaria.

**Art. 4º** Os critérios e procedimentos estabelecidos nesta Portaria constituem o padrão mínimo, podendo ser complementados pelos Órgãos Estaduais de Defesa Sanitária Vegetal - OEDSV das Unidades Federativas - UF.

**Art. 5º** Para efeito desta Portaria, entende-se por:
I - Unidade Federativa sem ocorrência de HLB: aquela na qual não há registro oficial da presença da praga *Candidatus* Liberibacter americanus ou *Candidatus* Liberibacter asiaticus;
II - Unidade Federativa com ocorrência de HLB: aquela na qual há registro oficial da presença da praga *Candidatus* Liberibacter americanus ou *Candidatus* Liberibacter asiaticus;
III - Estabelecimento produtor de material de propagação: local onde se produz mudas, borbulhas ou sementes de plantas hospedeiras de HLB;
IV - Planta hospedeira: todas as espécies e variedades botânicas da subfamília *Aurantioideae*, da família *Rutaceae*, que sejam susceptíveis ao HLB ou ao seu inseto vetor;
V - Vetor: inseto da espécie *Diaphorina citri*, capaz de transmitir as bactérias causadoras do HLB.

**Art. 6º** O PNCHLB é coordenado pelo Departamento de Sanidade Vegetal e Insumos Agrícolas da Secretaria de Defesa Agropecuária do Ministério da Agricultura e Pecuária e executado, com responsabilidades compartilhadas, pelos Órgãos Estaduais de Defesa Sanitária Vegetal - OEDSV, sob supervisão das Superintendências de Agricultura e Pecuária - SFA das Unidades Federativas.

### CAPÍTULO II
#### DO STATUS FITOSSANITÁRIO DAS UNIDADES FEDERATIVAS

**Art. 7º** O status fitossanitário de uma Unidade Federativa em relação ao HLB será declarado e atualizado pelo Departamento de Sanidade Vegetal e Insumos Agrícolas, com base nos resultados de levantamentos fitossanitários oficiais.

**Art. 8º** Para a manutenção do status fitossanitário de Unidade Federativa sem ocorrência de HLB, o OEDSV deverá:
I - realizar levantamentos fitossanitários anuais de detecção da praga em áreas representativas da produção de citros na UF;
II - realizar o monitoramento do inseto vetor *Diaphorina citri* em áreas de risco de introdução da praga;
III - manter atualizado o cadastro georreferenciado de propriedades produtoras de citros e de estabelecimentos produtores de material de propagação;
IV - fiscalizar o trânsito de plantas hospedeiras e seus produtos.

**Art. 9º** A confirmação oficial da ocorrência de HLB em Unidade Federativa sem ocorrência implicará na alteração do seu status fitossanitário para Unidade Federativa com ocorrência de HLB.

### CAPÍTULO III
#### DAS MEDIDAS DE PREVENÇÃO E CONTROLE

**Art. 10.** Em Unidades Federativas com ocorrência de HLB, o OEDSV deverá delimitar as áreas com presença da praga e estabelecer medidas de contenção para evitar sua dispersão para áreas sem ocorrência.

**Art. 11.** É obrigatória a inspeção de pomares de citros, pelo produtor, para identificação e eliminação de plantas com sintomas de HLB.

**Art. 12.** O produtor deverá realizar o controle do inseto vetor *Diaphorina citri* nos pomares de citros, seguindo as recomendações técnicas de controle integrado.

### CAPÍTULO IV
#### DA PRODUÇÃO E TRÂNSITO DE MATERIAL DE PROPAGAÇÃO

**Art. 13.** A produção de material de propagação de plantas hospedeiras de HLB deverá ser realizada em ambiente protegido, em conformidade com as normas específicas estabelecidas pelo Ministério da Agricultura e Pecuária.

**Art. 14.** O trânsito de material de propagação de plantas hospedeiras de HLB entre Unidades Federativas deverá estar acompanhado da Permissão de Trânsito de Vegetais - PTV, fundamentada em Certificado Fitossanitário de Origem - CFO ou Certificado Fitossanitário de Origem Consolidado - CFOC.

**Art. 15.** O trânsito de mudas e borbulhas de citros de Unidade Federativa com ocorrência de HLB para Unidade Federativa sem ocorrência de HLB somente será permitido se o material for originário de estabelecimento produtor em ambiente protegido e apresentar laudo laboratorial negativo para HLB.

### CAPÍTULO V
#### DO TRÂNSITO DE FRUTOS

**Art. 16.** O trânsito de frutos de citros de Unidade Federativa com ocorrência de HLB para Unidade Federativa sem ocorrência de HLB é permitido, desde que os frutos estejam desprovidos de ramos e folhas e tenham passado por processo de beneficiamento e higienização.

### CAPÍTULO VI
#### DAS DISPOSIÇÕES FINAIS

**Art. 17.** O descumprimento das medidas estabelecidas nesta Portaria sujeitará o infrator às sanções administrativas, civis e penais cabíveis.

**Art. 18.** Fica revogada a Portaria SDA/MAPA nº 317, de 21 de maio de 2021.

**Art. 19.** Esta Portaria entra em vigor na data de sua publicação.

**CARLOS GOULART**

Publicado em: 07/07/2025 | Edição: 128 | Seção: 1 | Página: 45`},{id:"PORT1503-2025",texto:`## PORTARIA SDA/MAPA Nº 1.503, DE 19 DE DEZEMBRO DE 2025

Declara os municípios de Itacoatiara, Manaus e Rio Preto da Eva, no Amazonas, como Área Sob Quarentena para a praga quarentenária presente *Bactrocera carambolae* (mosca-da-carambola).

O SECRETÁRIO DE DEFESA AGROPECUÁRIA, DO MINISTÉRIO DA AGRICULTURA E PECUÁRIA, no uso das atribuições que lhe conferem o art. 23 e o art. 48 do anexo I ao Decreto nº 12.642, de 1º de outubro de 2025, e tendo em vista o disposto na Lei nº 1.283, de 18 de dezembro de 1950, na Lei nº 7.889, de 23 de novembro de 1989, no Decreto nº 9.013, de 29 de março de 2017, e o que consta do Processo nº 21000.091863/2025-14, resolve:

Art. 1º Fica declarada como Área Sob Quarentena para a praga quarentenária presente *Bactrocera carambolae*, no estado do Amazonas, os municípios de Itacoatiara, Manaus e Rio Preto da Eva.

Art. 2º Estabelecer como Zona Tampão para *Bactrocera carambolae*, no estado do Amazonas, os municípios de Manacapuru, Parintins, Tefé, Coari, Tabatinga, Iranduba, Maués, Humaitá, Manicoré, São Gabriel da Cachoeira, Lábrea, Autazes, Benjamin Constant, Boca do Acre, Eirunepé, São Paulo de Olivença, Borba, Barreirinha, Presidente Figueiredo, Careiro, Carauari, Santo Antônio do Içá, Fonte Boa, Jutaí, Nova Olinda do Norte, Boa Vista do Ramos, Urucurituba, Ipixuna, Novo Aripuanã, Codajás, Beruri, Apuí, Nhamundá, Tapauá, Careiro da Várzea, Tonantins, Pauini, Urucará, Barcelos, Canutama, Anori, Envira, Alvarães, Novo Airão, Manaquiri, Atalaia do Norte, Maraã, Uarini, Caapiranga, Guajará, Santa Isabel do Rio Negro, Silves, São Sebastião do Uatumã, Itamarati, Amaturá, Juruá, Itapiranga, Anamã e Japurá.

Art. 3º Esta Portaria entra em vigor na data da sua publicação.

Este conteúdo não substitui o publicado na versão certificada.

CARLOS GOULART

https://www.in.gov.br/en/web/dou/-/portaria-sda/mapa-n-1.503-de-19-de-dezembro-de-2025-676919455`},{id:"PORT1512-2026",texto:`ÓRGÃO: MINISTÉRIO DA AGRICULTURA E PECUÁRIA/SECRETARIA DE DEFESA AGROPECUÁRIA

PORTARIA SDA/MAPA Nº 1.512, DE 7 DE JANEIRO DE 2026

08/01/2026, 08:28 PORTARIA SDA/MAPA Nº 1.512, DE 7 DE JANEIRO DE 2026 - PORTARIA SDA/MAPA Nº 1.512, DE 7 DE JANEIRO DE 2026 - DOU - Imprensa Nacional

21000.036807/2018-98, resolve:

Art. 1º A Portaria SDA/MAPA nº 1.443, de 05 de novembro de 2025, passa a vigorar com as
seguintes alterações:
"Art. 1º Fica incluído o Estado do Pará, municípios de Almeirim, Óbidos e Oriximiná, na área da Terra Indígena do Parque do Tumucumaque, como Unidade da Federação com ocorrência da praga quarentenária presente Rhizoctonia theobromae ( Ceratobasidium theobromae )." (NR)

Art. 2º Esta Portaria entra em vigor na data de sua publicação.
CARLOS GOULART
Este conteúdo não substitui o publicado na versão certificada.
https://in.gov.br/web/dou/-/portaria-sda/mapa-n-1.512-de-7-de-janeiro-de-2026-679863714 1/1`},{id:"PORT627-2023",texto:`ÓRGÃO: MINISTÉRIO DA AGRICULTURA E PECUÁRIA/GABINETE DO MINISTRO

PORTARIA MAPA Nº 627, DE 10 DE NOVEMBRO DE 2023

02/05/2024, 15:42 PORTARIA MAPA Nº 627, DE 10 DE NOVEMBRO DE 2023 - PORTARIA MAPA Nº 627, DE 10 DE NOVEMBRO DE 2023 - DOU - Imprensa Nacional

O MINISTRO DE ESTADO DA AGRlCULTURA E PECUÁRIA, no uso da atribuição que lhe confere o art. 87, parágrafo único, inciso II, da Constituição, tendo em vista o disposto na Lei nº 12.873, de 24 de outubro de 2013, no Decreto nº 8.133, de 28 de outubro de 2013, no Decreto nº 5.741, de 30 de março de 2006, na Instrução Normativa nº 28, de 20 de julho de 2017, e o que consta do Processo nº 21000.077540/2023-56, resolve:

Art. 1º Declarar estado de emergência fitossanitária relativo ao risco iminente de dispersão da
praga quarentenária presente *Bactrocera carambolae* (mosca-da-carambola) nos estados do Amapá, Amazonas, Pará e Roraima.
Parágrafo único. As diretrizes e medidas a serem adotadas serão indicadas em Ato do Ministro da Agricultura e Pecuária.

Art. 2º O prazo de vigência da emergência fitossanitária previsto no art. 1º será de 1 (um) ano, a
contar da data de publicação desta Portaria.

Art. 3º Esta Portaria entra em vigor na data de sua publicação.
CARLOS FÁVARO
Este conteúdo não substitui o publicado na versão certificada.
https://www.in.gov.br/en/web/dou/-/portaria-mapa-n-627-de-10-de-novembro-de-2023-522497468 1/1`},{id:"PORT703-2022",texto:`ÓRGÃO: MINISTÉRIO DA AGRICULTURA, PECUÁRIA E ABASTECIMENTO/SECRETARIA DE DEFESA AGROPECUÁRIA

PORTARIA SDA Nº 703, DE 21 DE NOVEMBRO DE 2022

22/11/2022 09:17 PORTARIA SDA Nº 703, DE 21 DE NOVEMBRO DE 2022 - PORTARIA SDA Nº 703, DE 21 DE NOVEMBRO DE 2022 - DOU - Imprensa Nacional

112, de 11 de dezembro de 2020 e o que consta do Processo nº 21000.053542/2021-98, resolve:

Art. 1º Declarar os municípios de Cruzeiro do Sul, Mâncio Lima, Rodrigues Alves, Marechal
Thaumaturgo e Porto Walter no estado do Acre e todo o estado do Amazonas, como área sob quarentena para a praga quarentenária ausente *Moniliophthora roreri*.

Art. 2º Fica proibido o trânsito de materiais vegetais das espécies do gênero Theobroma e
Herrania e outras hospedeiras de *Moniliophthora roreri* provenientes da área sob quarentena para as demais unidades da federação até que seja declarada a erradicação dos focos confirmados da praga.

Art. 3º Fica revogada a Portaria SDA nº 535, de 18 de fevereiro de 2022, publicada no Diário
Oficial da União, Edição 36, Seção 1, pagina 4, de 21 de fevereiro de 2022.

Art. 4º Esta Portaria entra em vigor na data da sua publicação.
JOSÉ GUILHERME TOLLSTADIUS LEAL
Este conteúdo não substitui o publicado na versão certificada.
https://in.gov.br/web/dou/-/portaria-sda-n-703-de-21-de-novembro-de-2022-444937315 1/1`},{id:"PORT734-2024",texto:`MINISTÉRIO DA AGRICULTURA E PECUÁRIA

GABINETE DO MINISTRO

PORTARIA MAPA Nº 734, DE 13 DE NOVEMBRO DE 2024

O MINISTRO DE ESTADO DA AGRICULTURA E PECUÁRIA, no uso da atribuição que lhe confere o art. 87, parágrafo único, inciso II, da Constituição, e tendo em vista o disposto na Lei nº 12.873, de 24 de outubro de 2013, na Lei nº 14.989, de 25 de setembro de 2024, no Decreto nº 8.133, de 28 de outubro de 2013, no Decreto nº 5.741, de 30 de março de 2006, na Instrução Normativa nº 28, de 20 de julho de 2017, e o que consta do Processo nº 21000.077540/2023-56, resolve:

Art. 1º Fica prorrogado, por mais um ano, o estado de emergência fitossanitária, relativo ao risco iminente de dispersão da praga quarentenária
presente *Bactrocera carambolae* (mosca-dacarambola), nos estados do Amapá, Amazonas, Pará e Roraima, declarado pela Portaria MAPA nº 627, de 10 de novembro de 2023.

Art. 2º Esta Portaria entra em vigor na data de sua publicação.
CARLOS FÁVARO
D.O.U., 13/11/2024 - Edição Extra 1A`},{id:"PORT776-2025",texto:`MINISTÉRIO DA AGRICULTURA E PECUÁRIA

GABINETE DO MINISTRO

PORTARIA MAPA Nº 776, DE 12 DE MARÇO DE 2025

O MINISTRO DE ESTADO DA AGRICULTURA E PECUÁRIA, no uso da atribuição que lhe confere o art. 87, parágrafo único, inciso II, da Constituição, e tendo em vista o disposto na Lei nº 14.515, de 29 de dezembro de 2022, no Decreto nº 24.114, de 12 de abril de 1934, no Decreto nº 5.759, de 17 de abril de 2006, no Decreto nº 5.741, de 30 de março de 2006, na Instrução Normativa nº 24, de 8 de setembro de 2015, e o que consta do Processo nº 21000.078338/2023-41, resolve
CAPÍTULO I
DISPOSIÇÕES GERAIS

Art. 1º Fica instituído o Subprograma de *Bactrocera carambolae*, no âmbito do Programa Nacional de
Combate às Moscas-das-Frutas.

Art. 2º O Subprograma de *Bactrocera carambolae* tem por objetivo estabelecer as medidas fitossanitárias
relativas à vigilância, à contenção, à supressão e à erradicação da praga quarentenária presente *Bactrocera carambolae*.
§ 1º Os critérios e procedimentos de que trata esta Portaria estabelecem um padrão mínimo, que podem ser complementados pelo Órgão Estadual ou Distrital de Defesa Sanitária Vegetal da Unidade Federativa.
§ 2º As medidas fitossanitárias previstas englobam:
I - levantamentos fitossanitários de detecção, delimitação e monitoramento;
II - ações de controle, como:
a) técnica de aniquilamento de macho;
b) aplicação de iscas tóxicas;
c) coleta e destruição de frutos de hospedeiros;
d) poda de hospedeiros; e e) controle biológico; e
III - outras medidas tecnicamente justificadas.

Art. 3º O Subprograma de *Bactrocera carambolae* define os critérios e os procedimentos para
classificação e regulamentação de áreas e de zonas de atenção especial.
§ 1º Os status fitossanitários de que trata o caput são:
I - área erradicada;
II - área sob quarentena;
III - área transiente; e
IV - zona tampão.
§ 2º Em ato complementar, cabe ao Departamento de Sanidade Vegetal e Insumos Agrícolas formalizar:
I - áreas e zonas de atenção especial; e
II - medidas de erradicação e supressão.

Art. 4º Considerando os riscos de introdução da praga, as Unidades Federativas sem ocorrência serão
classificadas como:
I - baixo risco;
II - médio risco; e
III - alto risco.
Parágrafo único. A classificação de risco de que trata o caput é realizada pelo Departamento da Sanidade Vegetal e Insumos Agrícolas, com base nos seguintes critérios:
I - proximidade de outras áreas com ocorrência da praga;
II - movimento de pessoas, produtos, equipamentos e meios de transporte provenientes de áreas de
ocorrência da praga; e
III - outros critérios tecnicamente justificados.

Art. 5º O Subprograma *Bactrocera carambolae* é:
I - coordenado pelo Departamento de Sanidade Vegetal e Insumos Agrícolas da Secretaria de Defesa
Agropecuária do Ministério da Agricultura e Pecuária; e
II - executado, com responsabilidades compartilhadas, nos termos do disposto no Decreto nº 5.741, de 30
de março de 2006, pelos Órgãos Estaduais ou Distrital de Defesa Sanitária Vegetal, em articulação e sob supervisão das Superintendências de Agricultura e Pecuária.
CAPÍTULO II
DA VIGILÂNCIA E DA FISCALIZAÇÃO
Seção I Diretrizes gerais

Art. 6º As medidas de vigilância previstas são:
I - levantamentos fitossanitários de detecção;
II - elaboração e execução do Plano Nacional de Educação Fitossanitária para *Bactrocera carambolae*;

III - elaboração e execução do plano de contingência;
IV - controle do trânsito de frutos hospedeiros; e
V - capacitação dos agentes públicos e privados que atuam na identificação e reconhecimento da praga.

Art. 7º O reconhecimento e a manutenção do status fitossanitário de uma área ou Unidade Federativa,
com relação à praga *Bactrocera carambolae*, ficam condicionados à:
I - apresentação, com prazo a ser definido pelo Departamento de Sanidade Vegetal e Insumos Agrícolas,
de relatório do levantamento fitossanitário de detecção realizado pelos Órgãos Estaduais ou Distrital de Defesa Sanitária Vegetal; e
II - aprovação do relatório das ações de vigilância, realizadas pelo Órgão Estadual ou Distrital de Defesa
Sanitária Vegetal, pela Superintendência de Agricultura e Pecuária da Unidade Federativa.

Art. 8º Cabe ao Órgão Estadual ou Distrital de Defesa Sanitária Vegetal, em articulação com as
Superintendências de Agricultura e Pecuária, após a elaboração e publicação do Manual de Procedimentos para *Bactrocera carambolae*, estabelecer:
I - plano de contingência; e
II - outros documentos relacionados que produzam registros auditáveis e assegurem a efetividade de sua
atuação.
§ 1º No plano de contingência, de que trata o inciso I, do caput, deve constar:
I - a identificação das rotas de risco de introdução na Unidade Federativa;
II - a estratégia das ações, obedecendo às medidas fitossanitárias estabelecidas pelo Departamento da
Sanidade Vegetal e Insumos Agrícolas, a serem implementadas para contenção da praga e erradicação do foco;
III - a infraestrutura necessária para sua implantação e execução;
IV - as responsabilidades compartilhadas, devidamente formalizadas, entre os entes públicos ou privados;
e
V - outros critérios tecnicamente justificados.
§ 2º Os documentos de que tratam os incisos I e II do caput deverão ser atualizados sempre que necessário e quando ocorrerem mudanças nas condições sobre as quais eles foram concebidos.
§ 3º Todos os procedimentos e documentos estabelecidos no caput deverão ser aprovados pela Superintendência de Agricultura e Pecuária da Unidade Federativa.

Art. 9º A suspeita de ocorrência de *Bactrocera carambolae* deve ser investigada pelo Órgão Estadual ou
Distrital de Defesa Sanitária Vegetal, em articulação com a Superintendência de Agricultura e Pecuária da Unidade Federativa.
§ 1º A comunicação da suspeita de que trata o caput pode ser efetuada por entidades federais, estaduais ou municipais, agentes da iniciativa privada ou por qualquer cidadão.
§ 2º A partir da comunicação da suspeita de ocorrência, cabe ao Órgão Estadual ou Distrital de Defesa Sanitária Vegetal, em articulação e sob supervisão das Superintendências de Agricultura e Pecuária, implementar e executar as medidas fitossanitárias de monitoramento e controle contidas no plano de

contingência.
§ 3º Não confirmada a suspeita de ocorrência da praga, as medidas fitossanitárias de controle aplicadas deverão ser suspensas.
Seção II Das áreas sob quarentena

Art. 10. É considerada área sob quarentena para *Bactrocera carambolae* aquela com a presença da praga e
sob controle oficial, excetuando-se as áreas transientes.
§ 1º A delimitação da área considerada sob quarentena a que se refere o caput pode ser constituída por uma Unidade Federativa, parte de uma Unidade Federativa, um município ou parte de um município.
§ 2º A delimitação da área prevista no § 1º, realizada pelo Órgão Estadual ou Distrital de Defesa Sanitária Vegetal e aprovada pela Superintendência de Agricultura e Pecuária da Unidade Federativa, deve se basear nos seguintes critérios:
I - levantamentos de delimitação e de monitoramento realizados;
II - efetividade de postos de fiscalização fitossanitária, fixos ou volantes; e
III - outros critérios tecnicamente justificados.
§ 3º Até que sejam adotadas as medidas para delimitação previstas no § 2º, a área sob quarentena abrangerá a área total da Unidade Federativa onde foi constatada a praga.
§ 4º A partir da confirmação da praga, cabe ao Departamento de Sanidade Vegetal e Insumos Agrícolas, proibir, restringir ou estabelecer condições para o trânsito de frutos de espécies hospedeiras.
§ 5º Na área sob quarentena, deverão ser estabelecidas as áreas de foco quarentenário, sendo aquelas na qual são implementadas e mantidas ações de monitoramento e controle por, pelo menos, três ciclos da praga.
§ 6º A área de foco quarentenário, estabelecida pelo Órgão Estadual ou Distrital de Defesa Sanitária Vegetal e aprovada pela Superintendência de Agricultura e Pecuária da Unidade Federativa, por meio dos levantamentos de delimitação e presença de hospedeiros, poderá abranger parte ou a totalidade da área sob quarentena.
Seção III Das áreas transientes e transientes erradicadas

Art. 11. Fica estabelecida como área transiente para *Bactrocera carambolae* aquela na qual houver apenas
capturas de espécime macho da praga, desde que a primeira detecção seja confirmada por laudo oficial.
§ 1º O período de transiência da praga é de noventa dias após a data da última captura de espécime macho de *Bactrocera carambolae*.
§ 2º A área transiente é delimitada com um raio mínimo de cinco quilômetros, a partir do ponto em que foi confirmada a detecção, devendo abranger a totalidade de Unidades de Produção - UP, na qual não será permitida a certificação fitossanitária de origem de frutos de hospedeiros.
§ 3º A área transiente pode ser ampliada à medida que ocorrerem novas capturas de machos nas armadilhas instaladas.

§ 4º Na área transiente, deverão ser estabelecidas as áreas de foco transiente, sendo aquelas nas quais são implementadas e mantidas ações de monitoramento e controle por, pelo menos, noventa dias a partir da data da última detecção.
§ 5º A área de foco transiente, estabelecida pelo Órgão Estadual ou Distrital de Defesa Sanitária Vegetal e aprovada pela Superintendência de Agricultura e Pecuária da Unidade Federativa, por meio dos levantamentos de delimitação e presença de hospedeiros, poderá abranger parte ou a totalidade da área transiente.
§ 6º Decorrido o período definido no § 1º sem que haja nova captura e após avaliação e emissão de parecer técnico da Superintendência de Agricultura e Pecuária da Unidade Federativa, a área transiente torna-se área transiente erradicada.
§ 7º Após seis ciclos sem capturas da praga, as medidas aplicáveis são equivalentes àquelas realizadas em zona tampão, mantida a denominação de área transiente erradicada.
Seção IV Do Sistema de Mitigação de Risco para *Bactrocera carambolae*

Art. 12. É considerado Sistema de Mitigação de Risco a integração de diferentes medidas de manejo de
risco, sendo que pelo menos duas das quais atuam independentemente, e que, cumulativamente, atingem o nível apropriado de proteção contra a praga quarentenária presente *Bactrocera carambolae*.

Art. 13. Poderá ser estabelecido Sistema de Mitigação de Risco, como condição para saída de frutos de
Unidade Federativa com presença da praga, desde que seja aplicado tratamento quarentenário cientificamente comprovado para *Bactrocera carambolae* e reconhecido pelo Departamento de Sanidade Vegetal e Insumos Agrícolas.
§ 1º Além do tratamento quarentenário de que trata o caput, a Unidade de Produção - UP, deverá apresentar o Índice Mosca/Armadilha/Dia - MAD com valor igual a zero na semana prévia à comercialização.
§ 2º O Índice MAD deverá ser estabelecido por meio de monitoramento in loco, realizado pelo responsável técnico e supervisionado pelo Órgão Estadual ou Distrital de Defesa Sanitária Vegetal da Unidade Federativa.
§ 3º Os resultados do Índice MAD, por UP, devem ser enviados mensalmente pelo Órgão Estadual ou Distrital de Defesa Sanitária Vegetal, à Superintendência de Agricultura e Pecuária da Unidade Federativa, que fiscalizará e auditará o Sistema de Mitigação de Risco.
§ 4º A frequência e o número de armadilhas utilizados para obtenção do Índice MAD serão definidos pelo Manual de Procedimentos para *Bactrocera carambolae* publicado pelo Departamento de Sanidade Vegetal e Insumos Agrícolas.
Seção V Do local de produção livre de *Bactrocera carambolae*

Art. 14. É considerado local de produção livre de *Bactrocera carambolae* uma porção definida de um
lugar de produção onde não há ocorrência da praga, como demonstrado por evidência científica, e cuja condição é oficialmente mantida por um período definido.

Art. 15. Em áreas sob quarentena e em áreas transientes poderão ser inscritos locais de produção livres de
*Bactrocera carambolae*.
§ 1º Em local de produção livre de *Bactrocera carambolae*, a ausência de praga será estabelecida por

levantamentos e inspeções realizadas durante estações de cultivo e mantida por outras ações preventivas para evitar a entrada da praga no lugar de produção.
§ 2º Poderão ser comercializados, para outras Unidades Federativas, frutos produzidos em ambientes totalmente protegidos.
§ 3º O ambiente de produção deve ser lacrado com tela antiafídica de no máximo dois milímetros de abertura e deve ter uma segunda proteção, também, por tela antiafídica de no máximo dois milímetros de abertura, bem como possuir armadilhas Jackson e McPhail, que serão monitoradas pelo responsável técnico e supervisionadas pelo Órgão Estadual ou Distrital de Defesa Sanitária Vegetal da Unidade Federativa.
§ 4º Nos locais de produção livres de praga será exigido índice MAD com valor igual a zero na semana prévia à comercialização.
§ 5º A frequência e o número de armadilhas utilizados para os locais livres de *Bactrocera carambolae* serão definidos no Manual de Procedimentos para *Bactrocera carambolae*, publicado pelo Departamento de Sanidade Vegetal e Insumos Agrícolas.
§ 6º Os resultados do monitoramento realizado nos locais livres de *Bactrocera carambolae* devem ser enviados pelo Órgão Estadual ou Distrital de Defesa Sanitária Vegetal à Superintendência de Agricultura e Pecuária da Unidade Federativa, que fiscalizará e auditará os ambientes de produção.
§ 7º Os frutos produzidos em locais de produção livres de *Bactrocera carambolae* poderão ser submetidos a tratamento quarentenário, a critério do Departamento de Sanidade Vegetal e Insumos Agrícolas.
Seção VI Da zona tampão

Art. 16. Fica estabelecida como zona tampão, para *Bactrocera carambolae*, a área circundante ou
adjacente a uma área oficialmente delimitada para propósitos fitossanitários, visando a minimizar a probabilidade de disseminação da praga-alvo dentro ou fora da área delimitada e sujeita a medidas fitossanitárias ou outras medidas de controle, se apropriado.
Parágrafo único. A delimitação da área que constitui a zona tampão será realizada com base nos seguintes critérios:
I - garantia de segurança fitossanitária nos levantamentos de delimitação e de monitoramento realizados
pelo Órgão Estadual ou Distrital de Defesa Sanitária Vegetal e outros agentes responsáveis pela atividade, com avaliação favorável, por meio de relatório de supervisão, da Superintendência de Agricultura e Pecuária da Unidade Federativa;
II - garantias da existência e da qualidade de estrutura dos postos de fiscalização do trânsito de frutos
hospedeiros, avaliadas e aprovadas, por meio de relatórios de supervisão, pela Superintendência de Agricultura e Pecuária da Unidade Federativa, observando pontos essenciais como a segurança fitossanitária, o horário de funcionamento e o apoio policial oferecido aos respectivos postos de fiscalização; e
III - outras medidas fitossanitárias necessárias propostas pela Superintendência de Agricultura e Pecuária
da Unidade Federativa a que pertence a área.
Seção VII Das áreas erradicadas

Art. 17. Fica estabelecida como área erradicada a área sob vigilância contínua, caracterizada pela ausência

da praga, quando os registros indicarem sua ocorrência no passado e sua erradicação após a realização de programa documentado com essa finalidade.
§ 1º O reconhecimento de área erradicada ocorre quando os registros do levantamento de monitoramento indicarem a ausência de detecção de *Bactrocera carambolae* por um período de três ciclos biológicos completos da praga.
§ 2º O período de que trata o § 1º se inicia a partir do registro da última detecção da praga.
§ 3º O reconhecimento de área erradicada deverá ser confirmado pela realização do procedimento de amostragem de frutos, conforme orientação do Departamento de Sanidade Vegetal e Insumos Agrícolas.
§ 4º Após seis ciclos sem capturas da praga, o protocolo de monitoramento e controle, estabelecido pelo Departamento de Sanidade Vegetal e Insumos Agrícolas, voltará a ser o de zona tampão ou o de Unidade Federativa sem ocorrência, preservando-se a denominação de área erradicada.
CAPÍTULO III
DA CERTIFICAÇÃO FITOSSANITÁRIA E DO CONTROLE DO TRÂNSITO

Art. 18. O trânsito de frutos de espécies hospedeiras é livre entre Unidades Federativas sem ocorrência de
*Bactrocera carambolae*.

Art. 19. São proibidas a saída de frutos e a certificação fitossanitária de origem de frutos de hospedeiros,
excetuando-se locais em Sistema de Mitigação de Risco e locais livres de *Bactrocera carambolae*, reconhecidos pelo Departamento de Sanidade Vegetal e Insumos Agrícolas, nas seguintes áreas:
I - transientes; e
II - sob quarentena.

Art. 20. O trânsito de frutos de hospedeiros com origem em Unidades Federativas com a ocorrência de
praga será permitido, por meio de certificação fitossanitária de origem, em:
I - área erradicada;
II - área transiente erradicada;
III - zona tampão;
IV - áreas sob quarentena e áreas transientes, em Sistema de Mitigação de Risco, reconhecido pelo
Departamento de Sanidade Vegetal e Insumos Agrícolas, desde que aprovado tratamento quarentenário para *Bactrocera carambolae*; e
V - áreas sob quarentena, em locais livres de *Bactrocera carambolae*, nos ambientes cadastrados
aprovados pelo Órgão Estadual ou Distrital de Defesa Sanitária Vegetal, pela Superintendência de Agricultura e Pecuária da Unidade Federativa e reconhecidos pelo Departamento de Sanidade Vegetal e Insumos Agrícolas.

Art. 21. A certificação fitossanitária de origem de frutos de hospedeiros é dispensada em unidades de
produção e unidades de consolidação localizadas em Unidade Federativa sem ocorrência da praga.
§ 1º Nas Unidades Federativas sem ocorrência da praga, será exigida apenas a permissão de trânsito de vegetais quando:
I - for destinado a Unidade Federativa com ocorrência da praga;

II - transitar por área sob quarentena; ou
III - transitar por área transiente.
§ 2º O envio que transitar em áreas sob quarentena e em área transiente deverá:
I - estar acondicionado em embalagens que não permitam o contato do fruto de espécies hospedeiras com
a praga;
II - ser transportado em veículos fechados ou, quando abertos, protegidos com tela de malha de no
máximo dois milímetros;
III - ser lacrado, pelo Órgão Estadual ou Distrital de Defesa Sanitária Vegetal, na entrada da área sob
quarentena ou área transiente; e
IV - ter o lacre de sua embalagem removido somente na saída da área sob quarentena ou área transiente,
mediante inspeção pelo Órgão Estadual ou Distrital de Defesa Sanitária Vegetal.
CAPÍTULO IV
DA PESQUISA CIENTÍFICA

Art. 22. O transporte de espécimes vivos de *Bactrocera carambolae* para fora das áreas com ocorrência
dependerá de aprovação prévia do Departamento de Sanidade Vegetal e Insumos Agrícolas.

Art. 23. A pesquisa científica e a publicação de dados relacionados à *Bactrocera carambolae* devem ser
submetidas à análise e à aprovação do Departamento de Sanidade Vegetal e Insumos Agrícolas.
CAPÍTULO V
DA DIVULGAÇÃO DE FOCOS EM NOVOS MUNICÍPIOS

Art. 24. A divulgação em mídias privadas sobre a primeira detecção de *Bactrocera carambolae* em um
município fica condicionada ao resultado positivo do laudo oficial e à autorização do Departamento de Sanidade Vegetal e Insumos Agrícolas.
CAPÍTULO VI
DISPOSIÇÕES FINAIS

Art. 25. Os documentos previstos no art. 8º devem ser elaborados e executados em até cento e vinte dias,
a contar da data de publicação desta Portaria.

Art. 26. Fica revogada a Instrução Normativa nº 28, de 20 de julho de 2017.

Art. 27. Esta Portaria entra em vigor na data de sua publicação.
CARLOS FÁVARO
Publicado em: 14/03/2025 | Edição: 50 | Seção: 1 | Página: 37`},{id:"PORT780-2023",texto:`MINISTÉRIO DA AGRICULTURA E PECUÁRIA

SECRETARIA DE DEFESA AGROPECUÁRIA

PORTARIA SDA Nº 780, DE 6 DE ABRIL DE 2023

Art. 24, da Instrução Normativa nº 28, de 20 de julho de 2017, e o que consta do Processo nº
21048.001240/2018-92, resolve:

Art. 1º Declarar o estado de Roraima como Área Sob Quarentena para *Bactrocera carambolae*
(mosca-da-carambola).

Art. 2º A declaração constante no artigo 1º, desta Portaria, terá vigência por tempo indeterminado, desde
que não ocorra alteração de status fitossanitário e sejam observadas as exigências legais para sua manutenção.

Art. 3º Fica revogado a Portaria SDA nº 534, publicada no D.O.U. de 21 de fevereiro de 2022, Edição 36,
Seção 1, Página 4.

Art. 4º Esta Portaria entra em vigor na data da sua publicação.
CARLOS GOULART
Publicado em: 10/04/2023 | Edição: 68 | Seção: 1 | Página: 43`},{id:"PORT859-2023",texto:`ÓRGÃO: MINISTÉRIO DA AGRICULTURA E PECUÁRIA/SECRETARIA DE DEFESA AGROPECUÁRIA

PORTARIA SDA/MAPA Nº 859, DE 19 DE JULHO DE 2023

25/07/2023, 13:51 PORTARIA SDA/MAPA Nº 859, DE 19 DE JULHO DE 2023 - PORTARIA SDA/MAPA Nº 859, DE 19 DE JULHO DE 2023 - DOU - Imprensa Nacional

do Processo nº 21048.001240/2018-92, resolve:

Art. 1º Declarar como zona tampão para a mosca-da-carambola (*Bactrocera carambolae* ) , no
estado do Amazonas, a área localizada no município de Presidente Figueiredo, delimitada pelas seguintes coordenadas geográficas: S: -0,878003° e W: -60,531348°; S:-1,240389° e W: -60,452032°; S: -1,464697° e W:
-60,311264°; S:-1,698183° e W: -60,187180°; S: -1,825930° e W: -60,210970°; S:1,881566° e W: -60,083692°; S:
-2,126203° e W: -60,022037°; S: -2,097566° e W: -59,791695°; S:-2,011389° e W: -59,731692°; S: -2,032341° e W: -59,888861°; S:-1,703024° e W: -60,096583° e S:-1,573479° e W: -60,126909°; S: -1,271557° e W:
-60,358531°; S:-0,836236° e W:-60,501325°.

Art. 2º As demais áreas do estado do Amazonas permanecem com o status de alto risco em
Unidade da Federação sem ocorrência da praga.

Art. 3º As declarações constantes nos artigos 1º e 2º, desta Portaria, terão vigência por tempo
indeterminado, desde que não ocorra alteração de status fitossanitário e sejam observadas as exigências legais para sua manutenção.

Art. 4º Esta Portaria entra em vigor em 1º de agosto de 2023.
MÁRCIO REZENDE EVARISTO CARLOS
Este conteúdo não substitui o publicado na versão certificada.
https://www.in.gov.br/web/dou/-/portaria-sda/mapa-n-859-de-19-de-julho-de-2023-498428679 1/1`},{id:"PORT940-2023",texto:`ÓRGÃO: MINISTÉRIO DA AGRICULTURA E PECUÁRIA/SECRETARIA DE DEFESA AGROPECUÁRIA

PORTARIA SDA/MAPA Nº 940, DE 17 DE NOVEMBRO DE 2023

20/11/2023, 12:09 PORTARIA SDA/MAPA Nº 940, DE 17 DE NOVEMBRO DE 2023 - PORTARIA SDA/MAPA Nº 940, DE 17 DE NOVEMBRO DE 2023 - DOU - Imprensa Nacional

na Lei 14.515, de 29 de dezembro de 2022, e o que consta do Processo nº 21030.004616/2023-77, resolve:

Art. 1º Declarar como Área Sob Quarentena para a praga *Bactrocera carambolae* (mosca-da-
carambola), no estado do Pará, os municípios de Afuá, Almeirim, Anajás, Bagre, Breves, Cachoeira do Arari, Chaves, Curralinho, Faro, Gurupá, Juruti, Melgaço, Muaná, Óbidos, Oeiras do Pará, Oriximiná, Ponta de Pedras, Portel, Porto de Moz, Prainha, Salvaterra, Santa Cruz do Arari, São Sebastião da Boa Vista, Soure e Terra Santa.

Art. 2º A zona tampão abrange os municípios de Abaetetuba, Acará, Alenquer, Altamira,
Ananindeua, Anapu, Augusto Corrêa, Aurora do Pará, Aveiro, Baião, Barcarena, Belém, Belterra, Benevides, Bonito, Bragança, Brasil Novo, Bujaru, Cachoeira do Piriá, Cametá, Capanema, Capitão Poço, Castanhal, Colares, Concórdia do Pará, Curuá, Curuçá, Garrafão do Norte, Igarapé Açu, Igarapé Miri, Inhangapi, Ipixuna do Pará, Irituia, Limoeiro do Ajuru, Magalhães Barata, Maracanã, Marapanim, Marituba, Medicilândia, Mocajuba, Moju, Mojuí dos Campos, Monte Alegre, Nova Esperança do Piriá, Nova Timboteúa, Ourém, Pacajá, Peixe-Boi, Placas, Primavera, Quatipuru, Rurópolis, Salinópolis, Santa Bárbara do Pará, Santa Izabel do Pará, Santa Luzia do Pará, Santa Maria do Pará, Santo Antônio do Tauá, São Caetano de Odivelas, São Domingos do Capim, São Francisco do Pará, São João da Ponta, São João de Pirabas, São Miguel do Guamá, Santarém, Santarém Novo, Senador José Porfirio, Tailândia, Terra Alta, Tomé-Açu, Tracuateua, Uruará, Vigia, Viseu, e Vitória do Xingu.

Art. 3º Os demais municípios do estado são considerados como "Área Sem Ocorrência" para a
praga *Bactrocera carambolae* (mosca-da-carambola).

Art. 4º As declarações constantes nos artigos 1º, 2º e 3º, desta Portaria, terão vigência por tempo
indeterminado, desde que não ocorra alteração de status fitossanitário e sejam observadas as exigências legais para sua manutenção.

Art. 5º Fica revogada a Resolução DSV nº 04, de 29 de março de 2019.3, publicada no D.O.U. de
1 de abril de 2019, Edição 62, Seção 1, Página 15.

Art. 6º Esta Portaria entra em vigor na data da sua publicação.
CARLOS GOULART
Este conteúdo não substitui o publicado na versão certificada.
https://www.in.gov.br/web/dou/-/portaria-sda/mapa-n-940-de-17-de-novembro-de-2023-524269456 1/1`},{id:"RES04-2019",texto:`ÓRGÃO: MINISTÉRIO DA AGRICULTURA, PECUÁRIA E ABASTECIMENTO/SECRETARIA DE DEFESA AGROPECUÁRIA/DEPARTAMENTO DE SANIDADE

RESOLUÇÃO Nº 4, DE 29 DE MARÇO DE 2019

21030.000179/2018-55, resolve:

Art. 1º - Declarar como Área Sob Quarentena para a praga quarentenária presente *Bactrocera carambolae* (mosca-da-
carambola), no Estado do Pará, os municípios de Almeirim, Gurupá, Porto de Moz, Praínha, Afuá, Anajás, Bagre, Breves, Cachoeira do Arari, Chaves, Curralinho, Melgaço, Muaná, Oeiras do Pará, Ponta de Pedras, Portel, Salvaterra, São Sebastião da Boa Vista, Santa Cruz do Arari e Soure.

Art. 2º - Declarar como Zona Tampão para a praga quarentenária presente *Bactrocera carambolae* (mosca-da-
carambola), no Estado do Pará, os municípios de Abaetetuba, Acará, Baião, Barcarena, Bujaru, Cametá, Concórdia do Pará, Igarapé Miri, Limoeiro do Ajuru, Mocajuba, Moju, Tailândia, Tomé-Açu, Altamira, Anapu, Brasil Novo, Medicilândia, Placas, Senador José Porfirio, Uruará, Vitória do Xingu, Capanema, Augusto Corrêa, Bonito, Bragança, Cachoeira do Piriá, Nova Timboteúa, Peixe-Boi, Primavera, Quatipuru, Salinópolis, Santa Luzia do Pará, Santarém Novo, São João de Pirabas, Tracuateua, Viseu, Capitão Poço, Garrafão do Norte, Irituia, Nova Esperança do Piriá, Ourém, Sta. Maria do Pará, São Miguel do Guamá, Ananindeua, Benevides, Castanhal, Colares, Curuçá, Igarapé Açu, Inhangapi, Magalhães Barata, Maracanã, Marapanim, Marituba, Santa Bárbara do Pará, Santa Izabel do Pará, Santo Antônio do Tauá, São Caetano de Odivelas, São Domingos do Capim, São Francisco do Pará, São João da Ponta, Terra Alta, Vigia, Curuá, Faro, Juruti, Óbidos, Oriximiná, Terra Santa, Aurora do Pará, Ipixuna do Pará, Alenquer, Belterra, Mojuí dos Campos, Monte Alegre, Santarém, Belém e Pacajá.

Art. 3º - Declarar como Área Sem Detecção para a praga quarentenária presente *Bactrocera carambolae* (mosca-da-
carambola), no Estado do Pará, os municípios de Aveiro, Itaituba, Jacareacanga, Rurópolis, Trairão, Curionópolis, Eldorado dos Carajás, Itupiranga, Marabá, Nova Ipiuxuna, Parauapebas, Novo Progresso, Mãe do Rio, Paragominas, Ulianópolis, Conceição do Araguaia, Cumaru do Norte, Pau D´Árco, Redenção, Sta. Maria das Barreiras, Santana do Araguaia, Abel Figueiredo, Bom Jesus do Tocantins, Dom Elizeu, Rondon do Pará, Brejo Grande do Araguaia, Palestina do Pará, Piçarra, São Domingos do Araguaia, São Geraldo do Araguaia, São João do Araguaia, Água Azul do Norte, Ourilândia do Norte, São Felix do Xingu, Tucumã, Breu Branco, Goianésia do Pará, Jacundá, Novo Repartimento, Tucuruí, Bannach, Canaã dos Carajás, Floresta do Araguaia, Rio Maria, Sapucaia e Xinguara.

Art. 4º - As declarações constantes nos Arts. 1º, 2º e 3º terão vigência por tempo indeterminado, desde que não ocorra
alteração de status fitossanitário e sejam observadas as exigências legais para a sua manutenção.

Art. 5º - Esta Resolução entra em vigor na data de sua publicação.
CARLOS GOULART
Este conteúdo não substitui o publicado na versão certificada (pdf).`},{id:"RES05-2018",texto:`ÓRGÃO: MINISTÉRIO DA AGRICULTURA, PECUÁRIA E ABASTECIMENTO/SECRETARIA DE DEFESA AGROPECUÁRIA

RESOLUÇÃO Nº5, DE 31 DE OUTUBRO DE 2018 -IMPRENSA NACIONAL PÁGINA 1 DE 1
RESOLUÇÃO Nº 5, DE 31 DE OUTUBRO DE 2018

o que consta do Processo 21000.041727/2018-54 , resolve:

Art. 1º Declarar o Estado do Amapá como Área Sob Quarentena para a praga quarentenária presente
*Bactrocera carambolae* (mosca-da-carambola).

Art. 2º Esta Resolução entra em vigor na data de sua publicação.
GRACIANE GONÇALVES MAGALHÃES DE CASTRO
Este conteúdo não substitui o publicado na versão certificada.
http://www.in.gov.br/materia/-/asset_publisher/Kujrw0TZC2Mb/content/id/48228468 13/05/2019`}];var Ao=0;function $(a,e,o,i,r,n){e||(e={});var t,s,l=e;if("ref"in l)for(s in l={},e)s=="ref"?t=e[s]:l[s]=e[s];var d={type:a,props:l,key:o,ref:t,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Ao,__i:-1,__u:0,__source:r,__self:n};if(typeof a=="function"&&(t=a.defaultProps))for(s in t)l[s]===void 0&&(l[s]=t[s]);return O.vnode&&O.vnode(d),d}function go(){let e=new URLSearchParams(window.location.search).get("id");if(!e)return $("h3",{children:"ID da legislação não fornecido."});let o=ma.find(i=>i.id===e);return o?(document.title=`${e} - CEFiTI`,$("div",{dangerouslySetInnerHTML:{__html:I.parse(o.texto)}})):$("h3",{children:['Legislação com ID "',e,'" não encontrada.']})}var Ne=document.getElementById("root");Ne&&(Ne.textContent="",Xe($(go,{}),Ne));
//# sourceMappingURL=leg.js.map

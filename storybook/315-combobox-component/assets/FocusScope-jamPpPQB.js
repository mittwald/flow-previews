import{c as j,d as m,e as z}from"./useFocusRing-CT1maULe.js";import{c as g}from"./index-j_f0pOtZ.js";import{r as h,R as S}from"./index-Cs7sjTYM.js";function U(e){const t=j(e);if(!(e instanceof t.HTMLElement)&&!(e instanceof t.SVGElement))return!1;let{display:r,visibility:o}=e.style,n=r!=="none"&&o!=="hidden"&&o!=="collapse";if(n){const{getComputedStyle:i}=e.ownerDocument.defaultView;let{display:c,visibility:a}=i(e);n=c!=="none"&&a!=="hidden"&&a!=="collapse"}return n}function q(e,t){return!e.hasAttribute("hidden")&&!e.hasAttribute("data-react-aria-prevent-focus")&&(e.nodeName==="DETAILS"&&t&&t.nodeName!=="SUMMARY"?e.hasAttribute("open"):!0)}function P(e,t){return e.nodeName!=="#comment"&&U(e)&&q(e,t)&&(!e.parentElement||P(e.parentElement,e))}const D=S.createContext(null),C="react-aria-focus-scope-restore";let f=null;function re(e){let{children:t,contain:r,restoreFocus:o,autoFocus:n}=e,i=h.useRef(null),c=h.useRef(null),a=h.useRef([]),{parentNode:b}=h.useContext(D)||{},l=h.useMemo(()=>new k({scopeRef:a}),[a]);g(()=>{let v=b||p.root;if(p.getTreeNode(v.scopeRef)&&f&&!R(f,v.scopeRef)){let s=p.getTreeNode(f);s&&(v=s)}v.addChild(l),p.addNode(l)},[l,b]),g(()=>{let v=p.getTreeNode(a);v&&(v.contain=!!r)},[r]),g(()=>{var v;let s=(v=i.current)===null||v===void 0?void 0:v.nextSibling,$=[],x=F=>F.stopPropagation();for(;s&&s!==c.current;)$.push(s),s.addEventListener(C,x),s=s.nextSibling;return a.current=$,()=>{for(let F of $)F.removeEventListener(C,x)}},[t]),Q(a,o,r),J(a,r),Z(a,o,r),Y(a,n),h.useEffect(()=>{const v=m(a.current?a.current[0]:void 0).activeElement;let s=null;if(E(v,a.current)){for(let $ of p.traverse())$.scopeRef&&E(v,$.scopeRef.current)&&(s=$);s===p.getTreeNode(a)&&(f=s.scopeRef)}},[a]),g(()=>()=>{var v,s,$;let x=($=(s=p.getTreeNode(a))===null||s===void 0||(v=s.parent)===null||v===void 0?void 0:v.scopeRef)!==null&&$!==void 0?$:null;(a===f||R(a,f))&&(!x||p.getTreeNode(x))&&(f=x),p.removeTreeNode(a)},[a]);let u=h.useMemo(()=>H(a),[]),d=h.useMemo(()=>({focusManager:u,parentNode:l}),[l,u]);return S.createElement(D.Provider,{value:d},S.createElement("span",{"data-focus-scope-start":!0,hidden:!0,ref:i}),t,S.createElement("span",{"data-focus-scope-end":!0,hidden:!0,ref:c}))}function H(e){return{focusNext(t={}){let r=e.current,{from:o,tabbable:n,wrap:i,accept:c}=t,a=o||m(r[0]).activeElement,b=r[0].previousElementSibling,l=w(r),u=T(l,{tabbable:n,accept:c},r);u.currentNode=E(a,r)?a:b;let d=u.nextNode();return!d&&i&&(u.currentNode=b,d=u.nextNode()),d&&N(d,!0),d},focusPrevious(t={}){let r=e.current,{from:o,tabbable:n,wrap:i,accept:c}=t,a=o||m(r[0]).activeElement,b=r[r.length-1].nextElementSibling,l=w(r),u=T(l,{tabbable:n,accept:c},r);u.currentNode=E(a,r)?a:b;let d=u.previousNode();return!d&&i&&(u.currentNode=b,d=u.previousNode()),d&&N(d,!0),d},focusFirst(t={}){let r=e.current,{tabbable:o,accept:n}=t,i=w(r),c=T(i,{tabbable:o,accept:n},r);c.currentNode=r[0].previousElementSibling;let a=c.nextNode();return a&&N(a,!0),a},focusLast(t={}){let r=e.current,{tabbable:o,accept:n}=t,i=w(r),c=T(i,{tabbable:o,accept:n},r);c.currentNode=r[r.length-1].nextElementSibling;let a=c.previousNode();return a&&N(a,!0),a}}}const A=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"],W=A.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])";A.push('[tabindex]:not([tabindex="-1"]):not([disabled])');const G=A.join(':not([hidden]):not([tabindex="-1"]),');function w(e){return e[0].parentElement}function y(e){let t=p.getTreeNode(f);for(;t&&t.scopeRef!==e;){if(t.contain)return!1;t=t.parent}return!0}function J(e,t){let r=h.useRef(void 0),o=h.useRef(void 0);g(()=>{let n=e.current;if(!t){o.current&&(cancelAnimationFrame(o.current),o.current=void 0);return}const i=m(n?n[0]:void 0);let c=l=>{if(l.key!=="Tab"||l.altKey||l.ctrlKey||l.metaKey||!y(e)||l.isComposing)return;let u=i.activeElement,d=e.current;if(!d||!E(u,d))return;let v=w(d),s=T(v,{tabbable:!0},d);if(!u)return;s.currentNode=u;let $=l.shiftKey?s.previousNode():s.nextNode();$||(s.currentNode=l.shiftKey?d[d.length-1].nextElementSibling:d[0].previousElementSibling,$=l.shiftKey?s.previousNode():s.nextNode()),l.preventDefault(),$&&N($,!0)},a=l=>{(!f||R(f,e))&&E(l.target,e.current)?(f=e,r.current=l.target):y(e)&&!L(l.target,e)?r.current?r.current.focus():f&&f.current&&M(f.current):y(e)&&(r.current=l.target)},b=l=>{o.current&&cancelAnimationFrame(o.current),o.current=requestAnimationFrame(()=>{if(i.activeElement&&y(e)&&!L(i.activeElement,e))if(f=e,i.body.contains(l.target)){var u;r.current=l.target,(u=r.current)===null||u===void 0||u.focus()}else f.current&&M(f.current)})};return i.addEventListener("keydown",c,!1),i.addEventListener("focusin",a,!1),n==null||n.forEach(l=>l.addEventListener("focusin",a,!1)),n==null||n.forEach(l=>l.addEventListener("focusout",b,!1)),()=>{i.removeEventListener("keydown",c,!1),i.removeEventListener("focusin",a,!1),n==null||n.forEach(l=>l.removeEventListener("focusin",a,!1)),n==null||n.forEach(l=>l.removeEventListener("focusout",b,!1))}},[e,t]),g(()=>()=>{o.current&&cancelAnimationFrame(o.current)},[o])}function V(e){return L(e)}function E(e,t){return!e||!t?!1:t.some(r=>r.contains(e))}function L(e,t=null){if(e instanceof Element&&e.closest("[data-react-aria-top-layer]"))return!0;for(let{scopeRef:r}of p.traverse(p.getTreeNode(t)))if(r&&E(e,r.current))return!0;return!1}function ne(e){return L(e,f)}function R(e,t){var r;let o=(r=p.getTreeNode(t))===null||r===void 0?void 0:r.parent;for(;o;){if(o.scopeRef===e)return!0;o=o.parent}return!1}function N(e,t=!1){if(e!=null&&!t)try{z(e)}catch{}else if(e!=null)try{e.focus()}catch{}}function B(e,t=!0){let r=e[0].previousElementSibling,o=w(e),n=T(o,{tabbable:t},e);n.currentNode=r;let i=n.nextNode();return t&&!i&&(o=w(e),n=T(o,{tabbable:!1},e),n.currentNode=r,i=n.nextNode()),i}function M(e,t=!0){N(B(e,t))}function Y(e,t){const r=S.useRef(t);h.useEffect(()=>{if(r.current){f=e;const o=m(e.current?e.current[0]:void 0);!E(o.activeElement,f.current)&&e.current&&M(e.current)}r.current=!1},[e])}function Q(e,t,r){g(()=>{if(t||r)return;let o=e.current;const n=m(o?o[0]:void 0);let i=c=>{let a=c.target;E(a,e.current)?f=e:V(a)||(f=null)};return n.addEventListener("focusin",i,!1),o==null||o.forEach(c=>c.addEventListener("focusin",i,!1)),()=>{n.removeEventListener("focusin",i,!1),o==null||o.forEach(c=>c.removeEventListener("focusin",i,!1))}},[e,t,r])}function X(e){let t=p.getTreeNode(f);for(;t&&t.scopeRef!==e;){if(t.nodeToRestore)return!1;t=t.parent}return(t==null?void 0:t.scopeRef)===e}function Z(e,t,r){const o=h.useRef(typeof document<"u"?m(e.current?e.current[0]:void 0).activeElement:null);g(()=>{let n=e.current;const i=m(n?n[0]:void 0);if(!t||r)return;let c=()=>{(!f||R(f,e))&&E(i.activeElement,e.current)&&(f=e)};return i.addEventListener("focusin",c,!1),n==null||n.forEach(a=>a.addEventListener("focusin",c,!1)),()=>{i.removeEventListener("focusin",c,!1),n==null||n.forEach(a=>a.removeEventListener("focusin",c,!1))}},[e,r]),g(()=>{const n=m(e.current?e.current[0]:void 0);if(!t)return;let i=c=>{if(c.key!=="Tab"||c.altKey||c.ctrlKey||c.metaKey||!y(e)||c.isComposing)return;let a=n.activeElement;if(!E(a,e.current))return;let b=p.getTreeNode(e);if(!b)return;let l=b.nodeToRestore,u=T(n.body,{tabbable:!0});u.currentNode=a;let d=c.shiftKey?u.previousNode():u.nextNode();if((!l||!n.body.contains(l)||l===n.body)&&(l=void 0,b.nodeToRestore=void 0),(!d||!E(d,e.current))&&l){u.currentNode=l;do d=c.shiftKey?u.previousNode():u.nextNode();while(E(d,e.current));c.preventDefault(),c.stopPropagation(),d?N(d,!0):V(l)?N(l,!0):a.blur()}};return r||n.addEventListener("keydown",i,!0),()=>{r||n.removeEventListener("keydown",i,!0)}},[e,t,r]),g(()=>{const n=m(e.current?e.current[0]:void 0);if(!t)return;let i=p.getTreeNode(e);if(i){var c;return i.nodeToRestore=(c=o.current)!==null&&c!==void 0?c:void 0,()=>{let a=p.getTreeNode(e);if(!a)return;let b=a.nodeToRestore;if(t&&b&&(E(n.activeElement,e.current)||n.activeElement===n.body&&X(e))){let l=p.clone();requestAnimationFrame(()=>{if(n.activeElement===n.body){let u=l.getTreeNode(e);for(;u;){if(u.nodeToRestore&&u.nodeToRestore.isConnected){I(u.nodeToRestore);return}u=u.parent}for(u=l.getTreeNode(e);u;){if(u.scopeRef&&u.scopeRef.current&&p.getTreeNode(u.scopeRef)){let d=B(u.scopeRef.current,!0);I(d);return}u=u.parent}}})}}}},[e,t])}function I(e){e.dispatchEvent(new CustomEvent(C,{bubbles:!0,cancelable:!0}))&&N(e)}function T(e,t,r){let o=t!=null&&t.tabbable?G:W,n=m(e).createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode(i){var c;return!(t==null||(c=t.from)===null||c===void 0)&&c.contains(i)?NodeFilter.FILTER_REJECT:i.matches(o)&&P(i)&&(!r||E(i,r))&&(!(t!=null&&t.accept)||t.accept(i))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});return t!=null&&t.from&&(n.currentNode=t.from),n}function oe(e,t={}){return{focusNext(r={}){let o=e.current;if(!o)return null;let{from:n,tabbable:i=t.tabbable,wrap:c=t.wrap,accept:a=t.accept}=r,b=n||m(o).activeElement,l=T(o,{tabbable:i,accept:a});o.contains(b)&&(l.currentNode=b);let u=l.nextNode();return!u&&c&&(l.currentNode=o,u=l.nextNode()),u&&N(u,!0),u},focusPrevious(r=t){let o=e.current;if(!o)return null;let{from:n,tabbable:i=t.tabbable,wrap:c=t.wrap,accept:a=t.accept}=r,b=n||m(o).activeElement,l=T(o,{tabbable:i,accept:a});if(o.contains(b))l.currentNode=b;else{let d=_(l);return d&&N(d,!0),d??null}let u=l.previousNode();if(!u&&c){l.currentNode=o;let d=_(l);if(!d)return null;u=d}return u&&N(u,!0),u??null},focusFirst(r=t){let o=e.current;if(!o)return null;let{tabbable:n=t.tabbable,accept:i=t.accept}=r,a=T(o,{tabbable:n,accept:i}).nextNode();return a&&N(a,!0),a},focusLast(r=t){let o=e.current;if(!o)return null;let{tabbable:n=t.tabbable,accept:i=t.accept}=r,c=T(o,{tabbable:n,accept:i}),a=_(c);return a&&N(a,!0),a??null}}}function _(e){let t,r;do r=e.lastChild(),r&&(t=r);while(r);return t}class K{get size(){return this.fastMap.size}getTreeNode(t){return this.fastMap.get(t)}addTreeNode(t,r,o){let n=this.fastMap.get(r??null);if(!n)return;let i=new k({scopeRef:t});n.addChild(i),i.parent=n,this.fastMap.set(t,i),o&&(i.nodeToRestore=o)}addNode(t){this.fastMap.set(t.scopeRef,t)}removeTreeNode(t){if(t===null)return;let r=this.fastMap.get(t);if(!r)return;let o=r.parent;for(let i of this.traverse())i!==r&&r.nodeToRestore&&i.nodeToRestore&&r.scopeRef&&r.scopeRef.current&&E(i.nodeToRestore,r.scopeRef.current)&&(i.nodeToRestore=r.nodeToRestore);let n=r.children;o&&(o.removeChild(r),n.size>0&&n.forEach(i=>o&&o.addChild(i))),this.fastMap.delete(r.scopeRef)}*traverse(t=this.root){if(t.scopeRef!=null&&(yield t),t.children.size>0)for(let r of t.children)yield*this.traverse(r)}clone(){var t;let r=new K;var o;for(let n of this.traverse())r.addTreeNode(n.scopeRef,(o=(t=n.parent)===null||t===void 0?void 0:t.scopeRef)!==null&&o!==void 0?o:null,n.nodeToRestore);return r}constructor(){this.fastMap=new Map,this.root=new k({scopeRef:null}),this.fastMap.set(null,this.root)}}class k{addChild(t){this.children.add(t),t.parent=this}removeChild(t){this.children.delete(t),t.parent=void 0}constructor(t){this.children=new Set,this.contain=!1,this.scopeRef=t.scopeRef}}let p=new K;export{T as $,re as a,ne as b,oe as c};
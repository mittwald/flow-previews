import{$ as v}from"./getScrollParent-CcmJp979.js";import{a as h}from"./useLocalizedStringFormatter-A1OcE67O.js";function x(e,f){const t=[];for(;e&&e!==document.documentElement;)v(e,f)&&t.push(e),e=e.parentElement;return t}function P(e,f){let t=p(e,f,"left"),o=p(e,f,"top"),r=f.offsetWidth,l=f.offsetHeight,c=e.scrollLeft,i=e.scrollTop,{borderTopWidth:a,borderLeftWidth:d}=getComputedStyle(e),n=e.scrollLeft+parseInt(d,10),b=e.scrollTop+parseInt(a,10),u=n+e.clientWidth,$=b+e.clientHeight;t<=c?c=t-parseInt(d,10):t+r>u&&(c+=t+r-u),o<=b?i=o-parseInt(a,10):o+l>$&&(i+=o+l-$),e.scrollLeft=c,e.scrollTop=i}function p(e,f,t){const o=t==="left"?"offsetLeft":"offsetTop";let r=0;for(;f.offsetParent&&(r+=f[o],f.offsetParent!==e);){if(f.offsetParent.contains(e)){r-=e[o];break}f=f.offsetParent}return r}function W(e,f){if(document.contains(e)){let c=document.scrollingElement||document.documentElement;if(window.getComputedStyle(c).overflow==="hidden"){let a=x(e);for(let d of a)P(d,e)}else{var t;let{left:a,top:d}=e.getBoundingClientRect();e==null||(t=e.scrollIntoView)===null||t===void 0||t.call(e,{block:"nearest"});let{left:n,top:b}=e.getBoundingClientRect();if(Math.abs(a-n)>1||Math.abs(d-b)>1){var o,r,l;f==null||(r=f.containingElement)===null||r===void 0||(o=r.scrollIntoView)===null||o===void 0||o.call(r,{block:"center",inline:"center"}),(l=e.scrollIntoView)===null||l===void 0||l.call(e,{block:"nearest"})}}}}let s=new Map;function k(e){let{locale:f}=h(),t=f+(e?Object.entries(e).sort((r,l)=>r[0]<l[0]?-1:1).join():"");if(s.has(t))return s.get(t);let o=new Intl.Collator(f,e);return s.set(t,o),o}export{k as $,P as a,W as b};
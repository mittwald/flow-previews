import{r as l}from"./index-B-o1Wr-g.js";function V(o,p,s){let[b,i]=l.useState(o||p),u=l.useRef(o!==void 0),e=o!==void 0;l.useEffect(()=>{let t=u.current;t!==e&&console.warn(`WARN: A component changed from ${t?"controlled":"uncontrolled"} to ${e?"controlled":"uncontrolled"}.`),u.current=e},[e]);let n=e?o:b,m=l.useCallback((t,...f)=>{let a=(r,...c)=>{s&&(Object.is(n,r)||s(r,...c)),e||(n=r)};typeof t=="function"?(console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"),i((c,...$)=>{let d=t(e?n:c,...$);return a(d,...f),e?c:d})):(e||i(t),a(t,...f))},[e,n,s]);return[n,m]}export{V as $};
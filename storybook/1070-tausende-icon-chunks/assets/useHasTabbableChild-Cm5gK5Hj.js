import{$ as s}from"./FocusScope-Deam_7e8.js";import{c as u}from"./index-ynQ6n1pc.js";import{r as c}from"./index-B-o1Wr-g.js";function f(e,t){let r=t==null?void 0:t.isDisabled,[d,i]=c.useState(!1);return u(()=>{if(e!=null&&e.current&&!r){let a=()=>{if(e.current){let l=s(e.current,{tabbable:!0});i(!!l.nextNode())}};a();let b=new MutationObserver(a);return b.observe(e.current,{subtree:!0,childList:!0,attributes:!0,attributeFilter:["tabIndex","disabled"]}),()=>{b.disconnect()}}}),r?!1:d}export{f as $};
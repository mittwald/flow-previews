import{$ as f}from"./usePress-1fQJjpyE.js";import{a as i}from"./index-DKTAOSvX.js";import{a as d}from"./utils-BwYH5X3X.js";import{$}from"./useFocusRing-if03xCoO.js";import{R as c,r as t}from"./index-Cs7sjTYM.js";const x=c.forwardRef(({children:o,...a},r)=>{let s=t.useRef(!1),e=t.useContext(f);r=d(r||(e==null?void 0:e.ref));let n=i(e||{},{...a,ref:r,register(){s.current=!0,e&&e.register()}});return $(e,r),t.useEffect(()=>{s.current||(console.warn("A PressResponder was rendered without a pressable child. Either call the usePress hook, or wrap your DOM node with <Pressable> component."),s.current=!0)},[]),c.createElement(f.Provider,{value:n},o)});function h({children:o}){let a=t.useMemo(()=>({register:()=>{}}),[]);return c.createElement(f.Provider,{value:a},o)}export{x as $,h as a};
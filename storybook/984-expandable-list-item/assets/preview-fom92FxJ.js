const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DocsRenderer-CFRXHY34-Croklgqy.js","./iframe-DIOQDjx5.js","./index-Cs7sjTYM.js","./_commonjsHelpers-BosuxZz1.js","./jsx-runtime-BlAj40OV.js","./index-Cf-03bMR.js","./index-D-8MO0q_.js","./index-DF3CPj03.js","./index-DrFu-skq.js","./client-C5obWrzr.js"])))=>i.map(i=>d[i]);
import{_ as a}from"./iframe-DIOQDjx5.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),n={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-CFRXHY34-Croklgqy.js").then(r=>r.ak),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{n as parameters};
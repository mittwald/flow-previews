var v=Object.defineProperty;var y=(t,e,r)=>e in t?v(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var p=(t,e,r)=>y(t,typeof e!="symbol"?e+"":e,r);import{r as m,R as l}from"./index-BwDkhjyp.js";import{$ as F}from"./Input-Bxlqy7dR.js";import{$ as g}from"./filterDOMProps-CeZl_uWj.js";import{b as w}from"./utils-_0I8Kdxf.js";import{$ as E}from"./PressResponder-CS6YBkA6.js";import{m as x,o as R,b as d}from"./flowComponent-pf1ZT_RA.js";import{u as T}from"./useSelector-Pyc-engy.js";function S(t,e){let{onSelect:r,acceptedFileTypes:i,allowsMultiple:a,defaultCamera:o,children:f,acceptDirectory:c,...$}=t,n=w(e),h=g($);return l.createElement(l.Fragment,null,l.createElement(E,{onPress:()=>{var s,u;!((s=n.current)===null||s===void 0)&&s.value&&(n.current.value=""),(u=n.current)===null||u===void 0||u.click()}},f),l.createElement(F,{...h,type:"file",ref:n,style:{display:"none"},accept:i==null?void 0:i.toString(),onChange:s=>r==null?void 0:r(s.target.files),capture:o,multiple:a,webkitdirectory:c?"":void 0}))}const _=m.forwardRef(S),k=t=>{const{controller:e,children:r,...i}=t;return l.createElement(l.Fragment,null,l.createElement(_,{...i,onSelect:a=>e.selectFile(a,t.allowsMultiple)},r))};k.__docgenInfo={description:"",methods:[],displayName:"FileTrigger",props:{className:{required:!1,tsType:{name:"string"},description:""},controller:{required:!0,tsType:{name:"FileController"},description:""}}};class b{constructor(){p(this,"files",new Map);p(this,"id",0);x(this,{files:R.shallow,add:d.bound,clear:d.bound,dropFile:d.bound,selectFile:d.bound})}static useNew(){return m.useRef(new b).current}useFiles(){return T(()=>Array.from(this.files.values()))}add(e){const r=this.id++;this.files.set(r,e)}clear(){this.files.clear()}async dropFile(e,r,i){e.items.filter(o=>o.kind==="file").map(async(o,f)=>{const c=await o.getFile();if(r&&!r.includes(c.type))throw new Error("invalid file type");if(!i&&f>0)throw new Error("invalid file count");i||this.clear(),this.add(c)})}selectFile(e,r){(e?Array.from(e):[]).map(a=>{r||this.clear(),this.add(a)})}}export{b as F,k as a};
"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[256],{74415:function(e,t,n){n.d(t,{C:function(){return i}});var r=n(5595),l=n(84172);let i=e=>{let{children:t}=e;return r.createElement(l.p.Provider,{value:{}},t)}},88588:function(e,t,n){n.d(t,{s:function(){return r}});let r={contextMenu:"flow--context-menu",section:"flow--context-menu--section",popoverContent:"flow--context-menu--popover-content"}},35986:function(e,t,n){n.d(t,{E:function(){return i}});var r=n(5595),l=n(8229);let i=e=>{let{children:t,className:n,...i}=e,o=(0,l.Z)("flow--emulated-bold-text",n);return r.createElement("span",{className:o,...i},t,r.createElement("span",{"aria-hidden":"true",className:"flow--emulated-bold-text--bold-text"},t))}},6699:function(e,t,n){n.d(t,{H:function(){return d}});var r=n(5595),l=n(8229),i=n(74415),o=n(34414);n(84172);var a=n(18014),c=n(57924);let u={heading:"flow--heading",dark:"flow--heading--dark",light:"flow--heading--light",icon:"flow--heading--icon",headingContent:"flow--heading--heading-content",xs:"flow--heading--xs",s:"flow--heading--s",m:"flow--heading--m",l:"flow--heading--l",xl:"flow--heading--xl",xxl:"flow--heading--xxl"},d=(0,a.f)("Heading",e=>{let{children:t,className:n,level:a=2,color:d="primary",size:s,refProp:f,...m}=e,h=(0,l.Z)(u.heading,s&&u[s],u[d],n),p={Icon:{"aria-hidden":!0,className:u.icon},AlertBadge:{wrapWith:r.createElement("div",{className:u.headingContent})}};return r.createElement(i.C,null,r.createElement(c.X,{level:a,className:h,...m,ref:f},r.createElement(o.P,{props:p},t)))})},19680:function(e,t,n){n.r(t),n.d(t,{Heading:function(){return r.H},default:function(){return r.H}});var r=n(6699)},23083:function(e,t,n){n.d(t,{I:function(){return d}});var r=n(5595),l=n(8229),i=n(67952),o=n(74415);n(84172);var a=n(18014);let c={icon:"flow--icon","size-m":"flow--icon--size-m","size-s":"flow--icon--size-s","size-l":"flow--icon--size-l",light:"flow--icon--light",dark:"flow--icon--dark"},u=e=>{let t=r.Children.toArray((0,i.ZP)(e)).find(e=>"object"==typeof e&&"type"in e&&"svg"===e.type);if(!t)throw Error("Invalid SVG string (got ".concat(String(e),")"));return t},d=(0,a.f)("Icon",e=>{let{className:t,"aria-label":n,children:i,size:a="m",color:d,refProp:s,...f}=e,m={...f,focusable:"false",role:"img","aria-hidden":!n,"aria-label":n,className:(0,l.Z)(c.icon,t,c["size-".concat(a)],d&&c[d])},h="string"==typeof i,p=(0,r.useMemo)(()=>h?u(i):i,[h,i]);if(!r.isValidElement(p))throw Error("Expected children of Icon component to be a valid React element (got ".concat(String(p),")"));return r.createElement(o.C,null,r.cloneElement(p,m))})},75940:function(e,t,n){n.d(t,{I:function(){return o}});var r=n(5595),l=n(99384),i=n(23083);let o=e=>r.createElement(i.I,{...e},r.createElement(l.Z,null))},76890:function(e,t,n){n.d(t,{I:function(){return o}});var r=n(5595),l=n(44745),i=n(23083);let o=e=>r.createElement(i.I,{...e},r.createElement(l.Z,null))},14303:function(e,t,n){n.d(t,{I:function(){return a},a:function(){return c}});var r=n(5595),l=n(80511),i=n(41575),o=n(23083);let a=e=>r.createElement(o.I,{...e},r.createElement(l.Z,null)),c=e=>r.createElement(o.I,{...e},r.createElement(i.Z,null))},39157:function(e,t,n){n.r(t),n.d(t,{LayoutCard:function(){return a},default:function(){return a}});var r=n(5595),l=n(8229),i=n(18014);n(84172);var o=n(34414);let a=(0,i.f)("LayoutCard",e=>{let{children:t,className:n,elementType:i="div",refProp:a,...c}=e,u=(0,l.Z)("flow--layout-card",n);return r.createElement(i,{className:u,...c,ref:a},r.createElement(o.P,{props:{Tabs:{className:"flow--layout-card--tabs"}}},t))})},72903:function(e,t,n){n.d(t,{L:function(){return s}});var r=n(5595),l=n(48670),i=n(74415),o=n(34414);n(84172);var a=n(8229),c=n(18014),u=n(87563);let d={link:"flow--link",inline:"flow--link--inline",icon:"flow--link--icon",dark:"flow--link--dark",light:"flow--link--light"},s=(0,c.f)("Link",e=>{let{children:t,className:n,inline:c,linkComponent:s,color:f="primary",unstyled:m=!1,"aria-current":h,refProp:p,...g}=e,{linkComponent:v}=(0,r.useContext)(u.l),C=s||(e.href&&v?v:l.r),E=m?n:(0,a.Z)(d.link,c&&d.inline,d[f],n),w={Icon:{className:d.icon,size:"s"}};return r.createElement(i.C,null,r.createElement(C,{...g,"aria-current":h,className:E,ref:p},r.createElement(o.P,{props:w},t)))})},38289:function(e,t,n){n.r(t),n.d(t,{Link:function(){return r.L},default:function(){return r.L}});var r=n(72903)},34414:function(e,t,n){n.d(t,{P:function(){return d},m:function(){return u}});var r=n(5595),l=n(84172),i=n(87137),o=n(28790),a=n(24238);let c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];let{mergeClassNames:l=!0,mergeEventHandler:c=!0}=e,u=(0,i.d)(...n);if((0,o.a)(u)){if(!l)for(let e of n)(0,o.a)(e)&&"className"in u&&"className"in e&&(u.className=e.className);if(!c){for(let e of n)if((0,o.a)(e))for(let[t,n]of Object.entries(e))/^on[A-Z]/.test(t)&&(0,a.Hn)(u,t,n)}}return u}}({mergeClassNames:!1,mergeEventHandler:!1}),u=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.fromEntries(Object.keys({...e,...t}).map(n=>[n,c(e[n],t[n])]))},d=e=>{let{props:t,dependencies:n=[],mergeInParentContext:i=!1,children:o,...a}=e,c=(0,l.u)(),d=(0,r.useMemo)(()=>t,n),s=(0,r.useMemo)(()=>i?u(c,t):t,[d,c,i]),f=(0,r.isValidElement)(o)?{...a,...o.props}:a,m=[o,...Object.entries(f).flatMap(e=>e)],h=(0,r.useMemo)(()=>(0,r.isValidElement)(o)?(0,r.cloneElement)(o,f):o,m);return r.createElement(l.p.Provider,{value:s},h)}},81616:function(e,t,n){n.d(t,{S:function(){return f}});var r=n(5595),l=n(8229);n(84172);var i=n(34414),o=n(18014),a=n(68207),c=n(41280),u=n(88588);let d={section:"flow--section"},s=(0,o.f)("ContextMenuSection",e=>{let{children:t}=e,n={Heading:{level:5,wrapWith:r.createElement(a.h,null)}};return r.createElement(c.$0,{className:u.s.section},r.createElement(i.P,{props:n,mergeInParentContext:!0},t))}),f=(0,o.f)("Section",e=>{let{children:t,className:n,refProp:o,renderContextMenuSection:a,...c}=e;if(!t)return null;if(a)return r.createElement(s,null,t);let u=(0,l.Z)(d.section,n),f=(0,r.useId)();return r.createElement("section",{...c,className:u,ref:o},r.createElement(i.P,{props:{Heading:{level:2,id:f},Header:{renderSectionHeader:!0},List:{"aria-labelledby":f}},mergeInParentContext:!0},t))})},43573:function(e,t,n){n.d(t,{Section:function(){return r.S}});var r=n(81616)},88508:function(e,t,n){n.d(t,{T:function(){return m}});var r=n(5595),l=n(17300),i=n(74415),o=n(34414);n(84172);var a=n(77870),c=n(18014),u=n(35986),d=n(78909),s=n(8229);let f={text:"flow--text",light:"flow--text--light",dark:"flow--text--dark"},m=(0,c.f)("Text",e=>{let{children:t,className:n,elementType:c="span",emulateBoldWidth:m,refProp:h,color:p,...g}=e,v=(0,s.Z)(f.text,p&&f[p],n),C={...g,className:v},E=r.createElement(o.P,{props:{Link:{inline:!0}}},r.createElement(d.W,{if:m},r.createElement(u.E,null,t)));return e.slot?(a("string"==typeof c,"'elementType' in Text component must be of type string"),r.createElement(i.C,null,r.createElement(l.x,{...C,elementType:c,ref:h},E))):r.createElement(c,{...C,ref:h},E)})},78909:function(e,t,n){n.d(t,{W:function(){return r}});let r=e=>{let{if:t,children:n}=e;return t?n:n.props.children}},87563:function(e,t,n){n.d(t,{L:function(){return l},l:function(){return r}});let r=(0,n(5595).createContext)({}),l=r.Provider},18014:function(e,t,n){n.d(t,{f:function(){return w},u:function(){return C}});var r=n(5595),l=n(84172),i=n(87137),o=n(69505),a=n(55133),c=n(34414),u=n(20148);let d=["Action","ActionGroup","Avatar","Alert","AlertBadge","Badge","Button","Checkbox","CheckboxButton","CheckboxGroup","Content","ContextMenu","ContextMenuSection","ContextMenuTrigger","ContextualHelp","CopyButton","CounterBadge","DatePicker","DateRangePicker","FieldDescription","FieldError","Header","Heading","Icon","Image","Initials","Label","LayoutCard","Link","List","MenuItem","Modal","ModalTrigger","NumberField","Radio","Option","Popover","PopoverTrigger","RadioButton","RadioGroup","SearchField","Section","Select","Slider","Switch","Tabs","TabTitle","TestComponent","Text","TextArea","TextField","TimeField"];function s(e){return!!e&&"object"==typeof e&&"__dynamicProp"in e}function f(e){return"string"==typeof e&&d.includes(e)}let m=(e,t)=>{let n={};for(let r in e)if(!f(r)){let l=e[r];s(l)&&(n[r]=l.__dynamicProp(t))}return n},h=e=>(0,o.a)(e,(e,t)=>f(t)),p=(e,t)=>{if(!(t&&"object"==typeof t&&"children"in t&&t.children))return{};let n=t.children;if(!Array.isArray(n)&&!(0,r.isValidElement)(n))return{};let l=h(e);return 0===Object.keys(l).length?{}:{children:r.createElement(c.P,{props:l,mergeInParentContext:!0},n)}},g=(e,t)=>{let n=(0,l.u)()[e],r=n?m(n,t):void 0,o=n?p(n,t):void 0;return(0,i.d)(n&&(0,a.a)(n,(e,t)=>d.includes(t)||s(e)),t,r,o)},v=(0,r.createContext)({}),C=()=>(0,r.useContext)(v),E=e=>{let{slot:t,component:n,children:l}=e,i={...C(),[n]:t};return r.createElement(v.Provider,{value:i},l)};function w(e,t){return(0,r.forwardRef)((n,l)=>{let{tunnelId:i,wrapWith:o,...a}=g(e,n),c={refProp:l,...a},d=r.createElement(t,{...c});return"slot"in n&&n.slot&&(d=r.createElement(E,{slot:n.slot,component:e},d)),o&&(d=(0,r.cloneElement)(o,void 0,d)),i&&(d=r.createElement(u.fk,{id:i},d)),d})}},84172:function(e,t,n){n.d(t,{p:function(){return l},u:function(){return i}});var r=n(5595);let l=(0,r.createContext)({});l.Provider;let i=()=>(0,r.useContext)(l)},20148:function(e,t,n){n.d(t,{NN:function(){return f},Rz:function(){return p},fk:function(){return m}});var r=n(5595),l=n(7943),i=n(32579),o=Object.defineProperty,a=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t,n)=>a(e,"symbol"!=typeof t?t+"":t,n);let u="default";class d{static useNew(){return(0,r.useRef)(new d).current}setChildren(){var e,t;let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,r=arguments.length>1?arguments[1]:void 0,i=arguments.length>2?arguments[2]:void 0,o=null!==(t=this.children.get(n))&&void 0!==t?t:l.LO.map({},{deep:!1});o.set(r,i),null==(e=this.preparedChildren.get(n))||e.delete(r),this.children.set(n,o)}prepareChildren(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,l=null!==(e=this.preparedChildren.get(t))&&void 0!==e?e:new Map;l.set(n,r),this.preparedChildren.set(t,l)}deleteChildren(){var e,t;let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,r=arguments.length>1?arguments[1]:void 0;null==(e=this.children.get(n))||e.delete(r),null==(t=this.preparedChildren.get(n))||t.delete(r)}getChildren(){var e,t,n;let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,l=null!==(n=null==(e=this.children.get(r))?void 0:e.entries())&&void 0!==n?n:null==(t=this.preparedChildren.get(r))?void 0:t.entries();if(l)return Array.from(l)}constructor(){c(this,"children",l.LO.map({},{deep:!1})),c(this,"preparedChildren",new Map),(0,l.rC)(this,{deleteChildren:l.aD.bound,setChildren:l.aD.bound})}}let s=(0,r.createContext)(new d),f=e=>{let{children:t}=e;return r.createElement(s.Provider,{value:d.useNew()},t)},m=e=>{let{children:t,id:n,staticEntryId:l}=e,i=(0,r.useContext)(s),o=(0,r.useId)(),a=null!=l?l:o,c=(0,r.useRef)(!1);return c.current||i.prepareChildren(n,a,t),(0,r.useEffect)(()=>(c.current=!0,i.setChildren(n,a,t),()=>{i.deleteChildren(n,a)}),[t,n,a]),null},h=e=>{let{children:t}=e;return"function"==typeof t?t():t},p=(0,i.Pi)(e=>{let{children:t,id:n}=e,l=(0,r.useContext)(s).getChildren(n);return l?l.map(e=>{let[t,n]=e;return r.createElement(h,{key:t},n)}):t})}}]);
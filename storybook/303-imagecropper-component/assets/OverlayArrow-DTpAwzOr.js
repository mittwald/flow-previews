import{j as le}from"./useFocusRing-if03xCoO.js";import{c as j}from"./ProgressBar-AEPgO8_B.js";import{r as R,R as re}from"./index-Cs7sjTYM.js";import{b as Z}from"./index-DKTAOSvX.js";import{a as ne}from"./useLocalizedStringFormatter-A1OcE67O.js";import{$ as ae}from"./useControlledState-B7K2eYzO.js";import{$ as ie,b as ce}from"./utils-BwYH5X3X.js";function se(){return typeof window.ResizeObserver<"u"}function G(t){const{ref:e,box:l,onResize:r}=t;R.useEffect(()=>{let o=e==null?void 0:e.current;if(o)if(se()){const n=new window.ResizeObserver(i=>{i.length&&r()});return n.observe(o,{box:l}),()=>{o&&n.unobserve(o)}}else return window.addEventListener("resize",r,!1),()=>{window.removeEventListener("resize",r,!1)}},[r,e,l])}const H={top:"top",bottom:"top",left:"left",right:"left"},F={top:"bottom",bottom:"top",left:"right",right:"left"},fe={top:"left",left:"top"},U={top:"height",left:"width"},D={width:"totalWidth",height:"totalHeight"},N={};let C=typeof document<"u"&&window.visualViewport;function q(t){let e=0,l=0,r=0,o=0,n=0,i=0,a={},u=(C==null?void 0:C.scale)>1;if(t.tagName==="BODY"){let g=document.documentElement;r=g.clientWidth,o=g.clientHeight;var c;e=(c=C==null?void 0:C.width)!==null&&c!==void 0?c:r;var d;l=(d=C==null?void 0:C.height)!==null&&d!==void 0?d:o,a.top=g.scrollTop||t.scrollTop,a.left=g.scrollLeft||t.scrollLeft,C&&(n=C.offsetTop,i=C.offsetLeft)}else({width:e,height:l,top:n,left:i}=k(t)),a.top=t.scrollTop,a.left=t.scrollLeft,r=e,o=l;return le()&&(t.tagName==="BODY"||t.tagName==="HTML")&&u&&(a.top=0,a.left=0,n=C.pageTop,i=C.pageLeft),{width:e,height:l,totalWidth:r,totalHeight:o,scroll:a,top:n,left:i}}function pe(t){return{top:t.scrollTop,left:t.scrollLeft,width:t.scrollWidth,height:t.scrollHeight}}function J(t,e,l,r,o,n,i){let a=o.scroll[t],u=r[U[t]],c=r.scroll[H[t]]+n,d=u+r.scroll[H[t]]-n,g=e-a+i[t]-r[H[t]],b=e-a+l+i[t]-r[H[t]];return g<c?c-g:b>d?Math.max(d-b,c-g):0}function de(t){let e=window.getComputedStyle(t);return{top:parseInt(e.marginTop,10)||0,bottom:parseInt(e.marginBottom,10)||0,left:parseInt(e.marginLeft,10)||0,right:parseInt(e.marginRight,10)||0}}function K(t){if(N[t])return N[t];let[e,l]=t.split(" "),r=H[e]||"right",o=fe[r];H[l]||(l="center");let n=U[r],i=U[o];return N[t]={placement:e,crossPlacement:l,axis:r,crossAxis:o,size:n,crossSize:i},N[t]}function X(t,e,l,r,o,n,i,a,u,c){let{placement:d,crossPlacement:g,axis:b,crossAxis:s,size:w,crossSize:h}=r,f={};f[s]=t[s],g==="center"?f[s]+=(t[h]-l[h])/2:g!==s&&(f[s]+=t[h]-l[h]),f[s]+=n;const L=t[s]-l[h]+u+c,p=t[s]+t[h]-u-c;if(f[s]=j(f[s],L,p),d===b){const E=a?i[w]:e[D[w]];f[F[b]]=Math.floor(E-t[b]+o)}else f[b]=Math.floor(t[b]+t[w]+o);return f}function ue(t,e,l,r,o,n,i,a){const u=r?l.height:e[D.height];let c=t.top!=null?l.top+t.top:l.top+(u-t.bottom-i),d=a!=="top"?Math.max(0,e.height+e.top+e.scroll.top-c-(o.top+o.bottom+n)):Math.max(0,c+i-(e.top+e.scroll.top)-(o.top+o.bottom+n));return Math.min(e.height-n*2,d)}function Q(t,e,l,r,o,n){let{placement:i,axis:a,size:u}=n;return i===a?Math.max(0,l[a]-t[a]-t.scroll[a]+e[a]-r[a]-r[F[a]]-o):Math.max(0,t[u]+t[a]+t.scroll[a]-e[a]-l[a]-l[u]-r[a]-r[F[a]]-o)}function me(t,e,l,r,o,n,i,a,u,c,d,g,b,s,w,h){let f=K(t),{size:L,crossAxis:p,crossSize:E,placement:A,crossPlacement:P}=f,m=X(e,a,l,f,d,g,c,b,w,h),O=d,z=Q(a,c,e,o,n+d,f);if(i&&r[L]>z){let Y=K(`${F[A]} ${P}`),oe=X(e,a,l,Y,d,g,c,b,w,h);Q(a,c,e,o,n+d,Y)>z&&(f=Y,m=oe,O=d)}let v="bottom";f.axis==="top"?f.placement==="top"?v="top":f.placement==="bottom"&&(v="bottom"):f.crossAxis==="top"&&(f.crossPlacement==="top"?v="bottom":f.crossPlacement==="bottom"&&(v="top"));let x=J(p,m[p],l[E],a,u,n,c);m[p]+=x;let T=ue(m,a,c,b,o,n,l.height,v);s&&s<T&&(T=s),l.height=Math.min(l.height,T),m=X(e,a,l,f,O,g,c,b,w,h),x=J(p,m[p],l[E],a,u,n,c),m[p]+=x;let S={},M=e[p]+.5*e[E]-m[p]-o[H[p]];const I=w/2+h,y=H[p]==="left"?o.left+o.right:o.top+o.bottom,B=l[E]-y-w/2-h,_=e[p]+w/2-(m[p]+o[H[p]]),ee=e[p]+e[E]-w/2-(m[p]+o[H[p]]),te=j(M,_,ee);return S[p]=j(te,I,B),{position:m,maxHeight:T,arrowOffsetLeft:S.left,arrowOffsetTop:S.top,placement:f.placement}}function $e(t){let{placement:e,targetNode:l,overlayNode:r,scrollNode:o,padding:n,shouldFlip:i,boundaryElement:a,offset:u,crossOffset:c,maxHeight:d,arrowSize:g=0,arrowBoundaryOffset:b=0}=t,s=r instanceof HTMLElement?ge(r):document.documentElement,w=s===document.documentElement;const h=window.getComputedStyle(s).position;let f=!!h&&h!=="static",L=w?k(l):W(l,s);if(!w){let{marginTop:z,marginLeft:v}=window.getComputedStyle(l);L.top+=parseInt(z,10)||0,L.left+=parseInt(v,10)||0}let p=k(r),E=de(r);p.width+=E.left+E.right,p.height+=E.top+E.bottom;let A=pe(o),P=q(a),m=q(s),O=a.tagName==="BODY"?k(s):W(s,a);return s.tagName==="HTML"&&a.tagName==="BODY"&&(m.scroll.top=0,m.scroll.left=0),me(e,L,p,A,E,n,i,P,m,O,u,c,f,d,g,b)}function k(t){let{top:e,left:l,width:r,height:o}=t.getBoundingClientRect(),{scrollTop:n,scrollLeft:i,clientTop:a,clientLeft:u}=document.documentElement;return{top:e+n-a,left:l+i-u,width:r,height:o}}function W(t,e){let l=window.getComputedStyle(t),r;if(l.position==="fixed"){let{top:o,left:n,width:i,height:a}=t.getBoundingClientRect();r={top:o,left:n,width:i,height:a}}else{r=k(t);let o=k(e),n=window.getComputedStyle(e);o.top+=(parseInt(n.borderTopWidth,10)||0)-e.scrollTop,o.left+=(parseInt(n.borderLeftWidth,10)||0)-e.scrollLeft,r.top-=o.top,r.left-=o.left}return r.top-=parseInt(l.marginTop,10)||0,r.left-=parseInt(l.marginLeft,10)||0,r}function ge(t){let e=t.offsetParent;if(e&&e===document.body&&window.getComputedStyle(e).position==="static"&&!V(e)&&(e=document.documentElement),e==null)for(e=t.parentElement;e&&!V(e);)e=e.parentElement;return e||document.documentElement}function V(t){let e=window.getComputedStyle(t);return e.transform!=="none"||/transform|perspective/.test(e.willChange)||e.filter!=="none"||e.contain==="paint"||"backdropFilter"in e&&e.backdropFilter!=="none"||"WebkitBackdropFilter"in e&&e.WebkitBackdropFilter!=="none"}const he=new WeakMap;function ve(t){let{triggerRef:e,isOpen:l,onClose:r}=t;R.useEffect(()=>{if(!l||r===null)return;let o=n=>{let i=n.target;if(!e.current||i instanceof Node&&!i.contains(e.current)||n.target instanceof HTMLInputElement||n.target instanceof HTMLTextAreaElement)return;let a=r||he.get(e.current);a&&a()};return window.addEventListener("scroll",o,!0),()=>{window.removeEventListener("scroll",o,!0)}},[l,r,e])}let $=typeof document<"u"&&window.visualViewport;function Se(t){let{direction:e}=ne(),{arrowSize:l=0,targetRef:r,overlayRef:o,scrollRef:n=o,placement:i="bottom",containerPadding:a=12,shouldFlip:u=!0,boundaryElement:c=typeof document<"u"?document.body:null,offset:d=0,crossOffset:g=0,shouldUpdatePosition:b=!0,isOpen:s=!0,onClose:w,maxHeight:h,arrowBoundaryOffset:f=0}=t,[L,p]=R.useState({position:{},arrowOffsetLeft:void 0,arrowOffsetTop:void 0,maxHeight:void 0,placement:void 0}),E=[b,i,o.current,r.current,n.current,a,u,c,d,g,s,e,h,f,l],A=R.useRef($==null?void 0:$.scale);R.useEffect(()=>{s&&(A.current=$==null?void 0:$.scale)},[s]);let P=R.useCallback(()=>{if(b===!1||!s||!o.current||!r.current||!c||($==null?void 0:$.scale)!==A.current)return;let v=null;if(n.current&&n.current.contains(document.activeElement)){let I=document.activeElement.getBoundingClientRect(),y=n.current.getBoundingClientRect();v={type:"top",offset:I.top-y.top},v.offset>y.height/2&&(v.type="bottom",v.offset=I.bottom-y.bottom)}let x=o.current;if(!h&&o.current){var T;x.style.top="0px",x.style.bottom="";var S;x.style.maxHeight=((S=(T=window.visualViewport)===null||T===void 0?void 0:T.height)!==null&&S!==void 0?S:window.innerHeight)+"px"}let M=$e({placement:we(i,e),overlayNode:o.current,targetNode:r.current,scrollNode:n.current||o.current,padding:a,shouldFlip:u,boundaryElement:c,offset:d,crossOffset:g,maxHeight:h,arrowSize:l,arrowBoundaryOffset:f});if(x.style.top="",x.style.bottom="",x.style.left="",x.style.right="",Object.keys(M.position).forEach(I=>x.style[I]=M.position[I]+"px"),x.style.maxHeight=M.maxHeight!=null?M.maxHeight+"px":void 0,v){let I=document.activeElement.getBoundingClientRect(),y=n.current.getBoundingClientRect(),B=I[v.type]-y[v.type];n.current.scrollTop+=B-v.offset}p(M)},E);Z(P,E),be(P),G({ref:o,onResize:P}),G({ref:r,onResize:P});let m=R.useRef(!1);Z(()=>{let v,x=()=>{m.current=!0,clearTimeout(v),v=setTimeout(()=>{m.current=!1},500),P()},T=()=>{m.current&&x()};return $==null||$.addEventListener("resize",x),$==null||$.addEventListener("scroll",T),()=>{$==null||$.removeEventListener("resize",x),$==null||$.removeEventListener("scroll",T)}},[P]);let O=R.useCallback(()=>{m.current||w()},[w,m]);ve({triggerRef:r,isOpen:s,onClose:w&&O});var z;return{overlayProps:{style:{position:"absolute",zIndex:1e5,...L.position,maxHeight:(z=L.maxHeight)!==null&&z!==void 0?z:"100vh"}},placement:L.placement,arrowProps:{"aria-hidden":"true",role:"presentation",style:{left:L.arrowOffsetLeft,top:L.arrowOffsetTop}},updatePosition:P}}function be(t){Z(()=>(window.addEventListener("resize",t,!1),()=>{window.removeEventListener("resize",t,!1)}),[t])}function we(t,e){return e==="rtl"?t.replace("start","right").replace("end","left"):t.replace("start","left").replace("end","right")}function Me(t){let[e,l]=ae(t.isOpen,t.defaultOpen||!1,t.onOpenChange);const r=R.useCallback(()=>{l(!0)},[l]),o=R.useCallback(()=>{l(!1)},[l]),n=R.useCallback(()=>{l(!e)},[l,e]);return{isOpen:e,setOpen:l,open:r,close:o,toggle:n}}const xe=R.createContext({placement:"bottom"});function Ee(t,e){[t,e]=ie(t,e,xe);let l=t.placement,r={position:"absolute",[l]:"100%",transform:l==="top"||l==="bottom"?"translateX(-50%)":"translateY(-50%)"},o=ce({...t,defaultClassName:"react-aria-OverlayArrow",values:{placement:l}});return o.style&&Object.keys(o.style).forEach(n=>o.style[n]===void 0&&delete o.style[n]),re.createElement("div",{...t,...o,style:{...r,...o.style},ref:e,"data-placement":l})}const ye=R.forwardRef(Ee);export{ye as $,Me as a,Se as b,xe as c,G as d,he as e};
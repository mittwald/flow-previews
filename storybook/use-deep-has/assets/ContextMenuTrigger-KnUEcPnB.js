import{r as d,R as s}from"./index-Cs7sjTYM.js";import{s as Q}from"./ContextMenu.module-68N5lvfm.js";import{f as B}from"./flowComponent-aK1NJH1f.js";import{P as xe}from"./Popover-BHhrYwo0.js";import{C as ve,P as R}from"./PropsContextProvider-CRusYdr1.js";import{h as he,k as A,l as Pe,m as Ce,u as Me,b as Ke,O as Se}from"./OverlayTrigger-gwEYNro4.js";import{A as Ee}from"./Action-C08M7-Wx.js";import{c as Y}from"./clsx-B-dksMZM.js";import"./IconApp-Cq7w81Gv.js";import{B as ke,C as Ie,D as we,F as Fe}from"./IconWarning-CJaqzhMN.js";import{T as X}from"./Text-34Ntf1C-.js";import{d as Te}from"./deepHas-C3achdHB.js";import{W as _e}from"./Wrap-DQq6jo70.js";import{a as Z,b as De,c as Ne}from"./Collection-BdcdgcY_.js";import{g as H,$ as ee,e as Re,c as Ae,a as U,d as Oe}from"./utils-Cd8r7pc9.js";import{a as Be}from"./Header-3zDVqz72.js";import{a as He}from"./Separator-ZOqStrt8.js";import{a as Ue}from"./Text-Bnjm0IRl.js";import{b as Ve,c as ze,d as We}from"./CollectionBuilder-B4BE-ZOx.js";import{a as V,e as N,d as Le}from"./index-j_f0pOtZ.js";import{$ as k}from"./filterDOMProps-CeZl_uWj.js";import{a as qe,d as je}from"./OverlayArrow-BrbzJDKz.js";import{a as te,k as Ge,f as Je,b as Qe}from"./useFocusRing-CqFdZJbR.js";import{$ as Xe,a as Ye,b as Ze}from"./useMenuTrigger-VDhsuUiF.js";import{b as et,$ as tt,a as ot}from"./usePress-Dcn7RY69.js";import{b as nt}from"./useFocusable-CKybZYMg.js";import{c as at,$ as rt,a as st,b as lt}from"./SelectionManager-BkcLa_O0.js";import{a as it}from"./FocusScope-DxaEUeh1.js";import{$ as ct}from"./useControlledState-B7K2eYzO.js";const oe=new WeakMap;function dt(o,e,t){let{shouldFocusWrap:r=!0,onKeyDown:n,onKeyUp:l,...a}=o;!o["aria-label"]&&!o["aria-labelledby"]&&console.warn("An aria-label or aria-labelledby prop is required for accessibility.");let i=k(o,{labelable:!0}),{listProps:u}=Xe({...a,ref:t,selectionManager:e.selectionManager,collection:e.collection,disabledKeys:e.disabledKeys,shouldFocusWrap:r,linkBehavior:"override"});return oe.set(e,{onClose:o.onClose,onAction:o.onAction}),{menuProps:V(i,{onKeyDown:n,onKeyUp:l},{role:"menu",...u,onKeyDown:c=>{c.key!=="Escape"&&u.onKeyDown(c)}})}}function ut(o,e,t){let{id:r,key:n,closeOnSelect:l,isVirtualized:a,"aria-haspopup":i,onPressStart:u,onPressUp:c,onPress:p,onPressChange:b,onPressEnd:m,onHoverStart:$,onHoverChange:x,onHoverEnd:h,onKeyDown:y,onKeyUp:K,onFocus:I,onFocusChange:se,onBlur:le}=o,v=!!i;var w;let P=(w=o.isDisabled)!==null&&w!==void 0?w:e.selectionManager.isDisabled(n);var F;let W=(F=o.isSelected)!==null&&F!==void 0?F:e.selectionManager.isSelected(n),T=oe.get(e),g=e.collection.getItem(n),C=o.onClose||T.onClose,ie=et(),L=f=>{var D;if(!v){if(!(g==null||(D=g.props)===null||D===void 0)&&D.onAction?g.props.onAction():o.onAction&&o.onAction(n),T.onAction){let ge=T.onAction;ge(n)}f.target instanceof HTMLAnchorElement&&ie.open(f.target,f,g.props.href,g.props.routerOptions)}},_="menuitem";v||(e.selectionManager.selectionMode==="single"?_="menuitemradio":e.selectionManager.selectionMode==="multiple"&&(_="menuitemcheckbox"));let q=N(),j=N(),G=N(),S={id:r,"aria-disabled":P||void 0,role:_,"aria-label":o["aria-label"],"aria-labelledby":q,"aria-describedby":[j,G].filter(Boolean).join(" ")||void 0,"aria-controls":o["aria-controls"],"aria-haspopup":i,"aria-expanded":o["aria-expanded"]};e.selectionManager.selectionMode!=="none"&&!v&&(S["aria-checked"]=W),a&&(S["aria-posinset"]=g==null?void 0:g.index,S["aria-setsize"]=Ye(e.collection));let ce=f=>{f.pointerType==="keyboard"&&L(f),u==null||u(f)},de=f=>{f.pointerType!=="keyboard"&&(L(f),!v&&C&&(l??(e.selectionManager.selectionMode!=="multiple"||e.selectionManager.isLink(n)))&&C()),c==null||c(f)},{itemProps:E,isFocused:ue}=at({selectionManager:e.selectionManager,key:n,ref:t,shouldSelectOnPressUp:!0,allowsDifferentPressOrigin:!0,linkBehavior:"none"}),{pressProps:fe,isPressed:pe}=tt({onPressStart:ce,onPress:p,onPressUp:de,onPressChange:b,onPressEnd:m,isDisabled:P}),{hoverProps:be}=te({isDisabled:P,onHoverStart(f){Ge()||(e.selectionManager.setFocused(!0),e.selectionManager.setFocusedKey(n)),$==null||$(f)},onHoverChange:x,onHoverEnd:h}),{keyboardProps:me}=nt({onKeyDown:f=>{if(f.repeat){f.continuePropagation();return}switch(f.key){case" ":!P&&e.selectionManager.selectionMode==="none"&&!v&&l!==!1&&C&&C();break;case"Enter":!P&&l!==!1&&!v&&C&&C();break;default:v||f.continuePropagation(),y==null||y(f);break}},onKeyUp:K}),{focusProps:$e}=Je({onBlur:le,onFocus:I,onFocusChange:se}),J=k(g.props);delete J.id;let ye=ot(g.props);return{menuItemProps:{...S,...V(J,ye,v?{onFocus:E.onFocus,"data-key":E["data-key"]}:E,fe,be,me,$e),tabIndex:E.tabIndex!=null?-1:void 0},labelProps:{id:q},descriptionProps:{id:j},keyboardShortcutProps:{id:G},isFocused:ue,isSelected:W,isPressed:pe,isDisabled:P}}function ft(o){let{heading:e,"aria-label":t}=o,r=Le();return{itemProps:{role:"presentation"},headingProps:e?{id:r,role:"presentation"}:{},groupProps:{role:"group","aria-label":t,"aria-labelledby":e?r:void 0}}}function pt(o){let e=qe(o),[t,r]=d.useState(null),[n,l]=d.useState([]),a=()=>{l([]),e.close()};return{focusStrategy:t,...e,open(c=null){r(c),e.open()},toggle(c=null){r(c),e.toggle()},close(){a()},expandedKeysStack:n,openSubmenu:(c,p)=>{l(b=>p>b.length?b:[...b.slice(0,p),c])},closeSubmenu:(c,p)=>{l(b=>b[p]===c?b.slice(0,p):b)}}}class bt{*[Symbol.iterator](){yield*this.iterable}get size(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}getKeyBefore(e){let t=this.keyMap.get(e);return t?t.prevKey:null}getKeyAfter(e){let t=this.keyMap.get(e);return t?t.nextKey:null}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(e){return this.keyMap.get(e)}at(e){const t=[...this.getKeys()];return this.getItem(t[e])}constructor(e,{expandedKeys:t}={}){this.keyMap=new Map,this.iterable=e,t=t||new Set;let r=a=>{if(this.keyMap.set(a.key,a),a.childNodes&&(a.type==="section"||t.has(a.key)))for(let i of a.childNodes)r(i)};for(let a of e)r(a);let n,l=0;for(let[a,i]of this.keyMap)n?(n.nextKey=a,i.prevKey=n.key):(this.firstKey=a,i.prevKey=void 0),i.type==="item"&&(i.index=l++),n=i,n.nextKey=void 0;this.lastKey=n==null?void 0:n.key}}function mt(o){let{onExpandedChange:e}=o,[t,r]=ct(o.expandedKeys?new Set(o.expandedKeys):void 0,o.defaultExpandedKeys?new Set(o.defaultExpandedKeys):new Set,e),n=rt(o),l=d.useMemo(()=>o.disabledKeys?new Set(o.disabledKeys):new Set,[o.disabledKeys]),a=st(o,d.useCallback(u=>new bt(u,{expandedKeys:t}),[t]),null);return d.useEffect(()=>{n.focusedKey!=null&&!a.getItem(n.focusedKey)&&n.setFocusedKey(null)},[a,n.focusedKey]),{collection:a,expandedKeys:t,disabledKeys:l,toggleKey:u=>{r($t(t,u))},setExpandedKeys:r,selectionManager:new lt(a,n)}}function $t(o,e){let t=new Set(o);return t.has(e)?t.delete(e):t.add(e),t}const yt=d.createContext({}),ne=d.createContext(null),z=d.createContext(null),ae=d.createContext(null);function gt(o){let e=pt(o),t=d.useRef(null),{menuTriggerProps:r,menuProps:n}=Ze({...o,type:"menu"},e,t),[l,a]=d.useState(null),i=d.useCallback(()=>{t.current&&a(t.current.offsetWidth+"px")},[t]);je({ref:t,onResize:i});let u=d.useRef(null);return s.createElement(H,{values:[[ne,{...n,ref:u}],[he,e],[ae,e],[A,{trigger:"MenuTrigger",triggerRef:t,scrollRef:u,placement:"bottom start",style:{"--trigger-width":l}}]]},s.createElement(Pe,{...r,ref:t,isPressed:e.isOpen},o.children))}const xt=d.createContext(null);function vt(o,e){return[o,e]=ee(o,e,ne),s.createElement(ze,{content:s.createElement(We,o)},t=>t.size>0&&s.createElement(ht,{props:o,collection:t,menuRef:e}))}function ht({props:o,collection:e,menuRef:t}){let r=mt({...o,collection:e,children:void 0}),[n,l]=d.useState(null),{isVirtualized:a,CollectionRoot:i}=d.useContext(Z),{menuProps:u}=dt({...o,isVirtualized:a},r,t),c=d.useContext(ae),p=d.useContext(A),b=(p==null?void 0:p.trigger)==="SubmenuTrigger";Ce({ref:t,onInteractOutside:y=>{c&&!(n!=null&&n.contains(y.target))&&c.close()},isDisabled:b||(c==null?void 0:c.expandedKeysStack.length)===0});let m=d.useRef(null),[$,x]=d.useState({left:0});d.useEffect(()=>{if(n&&m.current!==n&&$.left===0){m.current=n;let{left:y}=n.getBoundingClientRect();x({left:-1*y})}},[$,n]);let h=U({defaultClassName:"react-aria-Menu",className:o.className,style:o.style,values:{}});return s.createElement(it,null,s.createElement("div",{...k(o),...u,...h,ref:t,slot:o.slot||void 0,onScroll:o.onScroll},s.createElement(H,{values:[[z,r],[He,{elementType:"div"}],[A,{UNSTABLE_portalContainer:n||void 0}],[De,{render:Ct}],[xt,{parentMenuRef:t}],[O,null]]},s.createElement(i,{collection:e,persistedKeys:Ne(r.selectionManager.focusedKey),scrollRef:t}))),s.createElement("div",{ref:l,style:{width:"100vw",position:"absolute",top:0,...$}}))}const Pt=d.forwardRef(vt);function Ct(o,e,t){var r,n;let l=d.useContext(z),{CollectionBranch:a}=d.useContext(Z),[i,u]=Oe();var c;let{headingProps:p,groupProps:b}=ft({heading:u,"aria-label":(c=t.props["aria-label"])!==null&&c!==void 0?c:void 0}),m=U({defaultClassName:"react-aria-Section",className:(r=t.props)===null||r===void 0?void 0:r.className,style:(n=t.props)===null||n===void 0?void 0:n.style,values:{}});return s.createElement("section",{...k(o),...b,...m,ref:e},s.createElement(Be.Provider,{value:{...p,ref:i}},s.createElement(a,{collection:l.collection,parent:t})))}const O=d.createContext(null),Mt=Ve("item",function(e,t,r){var n;[e,t]=ee(e,t,O);let l=(n=Re(O))===null||n===void 0?void 0:n.id,a=d.useContext(z),i=Ae(t),{menuItemProps:u,labelProps:c,descriptionProps:p,keyboardShortcutProps:b,...m}=ut({...e,id:l,key:r.key},a,i),{isFocusVisible:$,focusProps:x}=Qe(),{hoverProps:h,isHovered:y}=te({isDisabled:m.isDisabled}),K=U({...e,id:void 0,children:r.rendered,defaultClassName:"react-aria-MenuItem",values:{...m,isHovered:y,isFocusVisible:$,selectionMode:a.selectionManager.selectionMode,selectionBehavior:a.selectionManager.selectionBehavior,hasSubmenu:!!e["aria-haspopup"],isOpen:e["aria-expanded"]==="true"}}),I=e.href?"a":"div";return s.createElement(I,{...V(u,x,h),...K,ref:i,"data-disabled":m.isDisabled||void 0,"data-hovered":y||void 0,"data-focused":m.isFocused||void 0,"data-focus-visible":$||void 0,"data-pressed":m.isPressed||void 0,"data-selected":m.isSelected||void 0,"data-selection-mode":a.selectionManager.selectionMode==="none"?void 0:a.selectionManager.selectionMode,"data-has-submenu":!!e["aria-haspopup"]||void 0,"data-open":e["aria-expanded"]==="true"||void 0},s.createElement(H,{values:[[Ue,{slots:{label:c,description:p}}],[yt,b]]},K.children))}),Kt=B("ContextMenu",o=>{const{children:e,onAction:t,selectionMode:r,selectedKeys:n,defaultSelectedKeys:l,disabledKeys:a,onSelectionChange:i,refProp:u,controller:c,...p}=o,b=Me("ContextMenu",{reuseControllerFromContext:!0}),m=c??b,$=r==="navigation"?"none":r,x=r==="navigation"?"navigation":"control",h={MenuItem:{selectionVariant:x},Section:{MenuItem:{selectionVariant:x},renderContextMenuSection:!0}},y=r==="single"||r==="navigation"?"ContextMenu":void 0;return s.createElement(ve,null,s.createElement(xe,{...p,contentClassName:Q.popoverContent,controller:m,isDialogContent:!1},s.createElement(Ke,{type:"ContextMenu",controller:m},s.createElement(Pt,{className:Q.contextMenu,onAction:t,selectionMode:$,selectedKeys:n,defaultSelectedKeys:l,disabledKeys:a,onSelectionChange:i,ref:u},s.createElement(R,{props:h},s.createElement(Ee,{closeOverlay:y},e))))))});Kt.__docgenInfo={description:"",methods:[],displayName:"ContextMenu"};const St="flow--menu-item",Et="flow--menu-item--icon",kt="flow--menu-item--text",It="flow--menu-item--control-icon",M={menuItem:St,icon:Et,text:kt,controlIcon:It},re=o=>{const{selectionMode:e,isSelected:t,selectionVariant:r="control",children:n}=o,l={Icon:{className:M.icon},Text:{className:M.text}},a={Icon:{className:Y(M.controlIcon,M.icon)}},i=e==="none"||r==="navigation"?null:e==="single"&&t?s.createElement(ke,null):e==="single"&&!t?s.createElement(Ie,null):e==="multiple"&&t?s.createElement(we,null):s.createElement(Fe,null),u=Te(n,X);return s.createElement(s.Fragment,null,s.createElement(R,{props:a},i),s.createElement(R,{props:l},s.createElement(_e,{if:!u},s.createElement(X,null,n))))};re.__docgenInfo={description:"",methods:[],displayName:"MenuItemContent",props:{selectionVariant:{required:!1,tsType:{name:"union",raw:'"control" | "navigation"',elements:[{name:"literal",value:'"control"'},{name:"literal",value:'"navigation"'}]},description:""}},composes:["PropsWithChildren"]};const wt=B("MenuItem",o=>{const{children:e,className:t,selectionVariant:r,refProp:n,...l}=o,a=Y(M.menuItem,t);return s.createElement(Mt,{...l,className:a,ref:n},i=>s.createElement(re,{...i,selectionVariant:r},e))});wt.__docgenInfo={description:"",methods:[],displayName:"MenuItem"};const Ft=B("ContextMenuTrigger",o=>{const{children:e,...t}=o;return s.createElement(Se,{overlayType:"ContextMenu",...t,component:gt},e)});Ft.__docgenInfo={description:"",methods:[],displayName:"ContextMenuTrigger"};export{Kt as C,wt as M,Ft as a};
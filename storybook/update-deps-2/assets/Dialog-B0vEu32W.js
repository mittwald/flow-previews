import{a as xr}from"./Button-C4BByqx5.js";import{c as ie,$ as L,a as z,f as yr,b as R,g as ae,d as hr}from"./utils-D9H5ZYVa.js";import{$ as Pr}from"./RSPContexts-9nj2DFX_.js";import{h as Er,f as Cr,e as Dr,a as ke,b as Mr,c as Sr,g as Ar,d as kr}from"./OverlayArrow-DLYo5xVk.js";import{$ as Be,a as Br,c as wr}from"./Collection-DH8MVYRU.js";import{a as we,d as Fr,b as Kr,c as Rr}from"./CollectionBuilder-B62dxoFp.js";import{R as $,r as c}from"./index-CgfFrydU.js";import{a as Tr}from"./Separator-CJYrkcAH.js";import{a as Or}from"./Text-RYc5i20l.js";import{$ as T,a as xe,e as G,c as N,g as oe,b as Ir,f as V,d as Nr}from"./mergeRefs-CQveTfyF.js";import{$ as A}from"./filterDOMProps-CeZl_uWj.js";import{d as Lr,f as zr,g as Hr,i as _r,c as Ur,$ as Fe,a as Vr,b as Ke}from"./SelectionManager-Clajy7Q-.js";import{g as ne,b as jr,$ as Wr,a as Gr}from"./usePress--lgM-7rV.js";import{d as qr,h as Zr,y as Jr,v as ye,r as he,b as Yr,c as se}from"./useFocus-Dz5Sgz6F.js";import{$ as Xr,a as Re}from"./useFocusRing-VURPolDQ.js";import{c as Qr}from"./useFocusable-B6XldfNl.js";import{$ as Te,a as ea}from"./useLocalizedStringFormatter-2OBKXYKe.js";import{e as Oe,$ as ta}from"./useCollator-B5zTmuon.js";import{$ as ra}from"./useControlledState-YIijONQK.js";import{c as aa,a as Ie}from"./FocusScope-me2WFoLK.js";import{I as oa}from"./index-Brqd7pHr.js";import{b as na}from"./Hidden-DwT0szmK.js";import{a as sa}from"./useLabel-CVdsQLKm.js";import{$ as la}from"./VisuallyHidden-CNMq674x.js";const Ne=$.forwardRef(({children:t,...e},r)=>{let a=c.useRef(!1),o=c.useContext(ne);r=ie(r||(o==null?void 0:o.ref));let s=T(o||{},{...e,ref:r,register(){a.current=!0,o&&o.register()}});return qr(o,r),c.useEffect(()=>{a.current||(a.current=!0)},[]),$.createElement(ne.Provider,{value:s},t)});function ia({children:t}){let e=c.useMemo(()=>({register:()=>{}}),[]);return $.createElement(ne.Provider,{value:e},t)}function ua(t){let{ref:e,onInteractOutside:r,isDisabled:a,onInteractOutsideStart:o}=t,s=c.useRef({isPointerDown:!1,ignoreEmulatedMouseEvents:!1}),d=xe(n=>{r&&Pe(n,e)&&(o&&o(n),s.current.isPointerDown=!0)}),l=xe(n=>{r&&r(n)});c.useEffect(()=>{let n=s.current;if(a)return;const u=e.current,i=Zr(u);if(typeof PointerEvent<"u"){let p=g=>{n.isPointerDown&&Pe(g,e)&&l(g),n.isPointerDown=!1};return i.addEventListener("pointerdown",d,!0),i.addEventListener("pointerup",p,!0),()=>{i.removeEventListener("pointerdown",d,!0),i.removeEventListener("pointerup",p,!0)}}},[e,a,d,l])}function Pe(t,e){if(t.button>0)return!1;if(t.target){const r=t.target.ownerDocument;if(!r||!r.documentElement.contains(t.target)||t.target.closest("[data-react-aria-top-layer]"))return!1}return e.current?!t.composedPath().includes(e.current):!1}const C=[];function da(t,e){let{onClose:r,shouldCloseOnBlur:a,isOpen:o,isDismissable:s=!1,isKeyboardDismissDisabled:d=!1,shouldCloseOnInteractOutside:l}=t;c.useEffect(()=>{if(o&&!C.includes(e))return C.push(e),()=>{let b=C.indexOf(e);b>=0&&C.splice(b,1)}},[o,e]);let n=()=>{C[C.length-1]===e&&r&&r()},u=b=>{(!l||l(b.target))&&C[C.length-1]===e&&(b.stopPropagation(),b.preventDefault())},i=b=>{(!l||l(b.target))&&(C[C.length-1]===e&&(b.stopPropagation(),b.preventDefault()),n())},p=b=>{b.key==="Escape"&&!d&&!b.nativeEvent.isComposing&&(b.stopPropagation(),b.preventDefault(),n())};ua({ref:e,onInteractOutside:s&&o?i:void 0,onInteractOutsideStart:u});let{focusWithinProps:g}=Xr({isDisabled:!a,onBlurWithin:b=>{!b.relatedTarget||aa(b.relatedTarget)||(!l||l(b.relatedTarget))&&(r==null||r())}}),f=b=>{b.target===b.currentTarget&&b.preventDefault()};return{overlayProps:{onKeyDown:p,...g},underlayProps:{onPointerDown:f}}}function Le(t,e,r){let{type:a}=t,{isOpen:o}=e;c.useEffect(()=>{r&&r.current&&Er.set(r.current,e.close)});let s;a==="menu"?s=!0:a==="listbox"&&(s="listbox");let d=G();return{triggerProps:{"aria-haspopup":s,"aria-expanded":o,"aria-controls":o?d:void 0,onPress:e.toggle},overlayProps:{id:d}}}const te=typeof document<"u"&&window.visualViewport,ca=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);let U=0,re;function fa(t={}){let{isDisabled:e}=t;N(()=>{if(!e)return U++,U===1&&(Jr()?re=ba():re=$a()),()=>{U--,U===0&&re()}},[e])}function $a(){return oe(K(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),K(document.documentElement,"overflow","hidden"))}function ba(){let t,e,r=u=>{t=Oe(u.target,!0),!(t===document.documentElement&&t===document.body)&&t instanceof HTMLElement&&window.getComputedStyle(t).overscrollBehavior==="auto"&&(e=K(t,"overscrollBehavior","contain"))},a=u=>{if(!t||t===document.documentElement||t===document.body){u.preventDefault();return}t.scrollHeight===t.clientHeight&&t.scrollWidth===t.clientWidth&&u.preventDefault()},o=()=>{e&&e()},s=u=>{let i=u.target;pa(i)&&(l(),i.style.transform="translateY(-2000px)",requestAnimationFrame(()=>{i.style.transform="",te&&(te.height<window.innerHeight?requestAnimationFrame(()=>{Ee(i)}):te.addEventListener("resize",()=>Ee(i),{once:!0}))}))},d=null,l=()=>{if(d)return;let u=()=>{window.scrollTo(0,0)},i=window.pageXOffset,p=window.pageYOffset;d=oe(O(window,"scroll",u),K(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),K(document.documentElement,"overflow","hidden"),K(document.body,"marginTop",`-${p}px`),()=>{window.scrollTo(i,p)}),window.scrollTo(0,0)},n=oe(O(document,"touchstart",r,{passive:!1,capture:!0}),O(document,"touchmove",a,{passive:!1,capture:!0}),O(document,"touchend",o,{passive:!1,capture:!0}),O(document,"focus",s,!0));return()=>{e==null||e(),d==null||d(),n()}}function K(t,e,r){let a=t.style[e];return t.style[e]=r,()=>{t.style[e]=a}}function O(t,e,r,a){return t.addEventListener(e,r,a),()=>{t.removeEventListener(e,r,a)}}function Ee(t){let e=document.scrollingElement||document.documentElement,r=t;for(;r&&r!==e;){let a=Oe(r);if(a!==document.documentElement&&a!==document.body&&a!==r){let o=a.getBoundingClientRect().top,s=r.getBoundingClientRect().top;s>o+r.clientHeight&&(a.scrollTop+=s-o)}r=a.parentElement}}function pa(t){return t instanceof HTMLInputElement&&!ca.has(t.type)||t instanceof HTMLTextAreaElement||t instanceof HTMLElement&&t.isContentEditable}var ze={};ze={dismiss:"تجاهل"};var He={};He={dismiss:"Отхвърляне"};var _e={};_e={dismiss:"Odstranit"};var Ue={};Ue={dismiss:"Luk"};var Ve={};Ve={dismiss:"Schließen"};var je={};je={dismiss:"Απόρριψη"};var We={};We={dismiss:"Dismiss"};var Ge={};Ge={dismiss:"Descartar"};var qe={};qe={dismiss:"Lõpeta"};var Ze={};Ze={dismiss:"Hylkää"};var Je={};Je={dismiss:"Rejeter"};var Ye={};Ye={dismiss:"התעלם"};var Xe={};Xe={dismiss:"Odbaci"};var Qe={};Qe={dismiss:"Elutasítás"};var et={};et={dismiss:"Ignora"};var tt={};tt={dismiss:"閉じる"};var rt={};rt={dismiss:"무시"};var at={};at={dismiss:"Atmesti"};var ot={};ot={dismiss:"Nerādīt"};var nt={};nt={dismiss:"Lukk"};var st={};st={dismiss:"Negeren"};var lt={};lt={dismiss:"Zignoruj"};var it={};it={dismiss:"Descartar"};var ut={};ut={dismiss:"Dispensar"};var dt={};dt={dismiss:"Revocare"};var ct={};ct={dismiss:"Пропустить"};var ft={};ft={dismiss:"Zrušiť"};var $t={};$t={dismiss:"Opusti"};var bt={};bt={dismiss:"Odbaci"};var pt={};pt={dismiss:"Avvisa"};var gt={};gt={dismiss:"Kapat"};var mt={};mt={dismiss:"Скасувати"};var vt={};vt={dismiss:"取消"};var xt={};xt={dismiss:"關閉"};var yt={};yt={"ar-AE":ze,"bg-BG":He,"cs-CZ":_e,"da-DK":Ue,"de-DE":Ve,"el-GR":je,"en-US":We,"es-ES":Ge,"et-EE":qe,"fi-FI":Ze,"fr-FR":Je,"he-IL":Ye,"hr-HR":Xe,"hu-HU":Qe,"it-IT":et,"ja-JP":tt,"ko-KR":rt,"lt-LT":at,"lv-LV":ot,"nb-NO":nt,"nl-NL":st,"pl-PL":lt,"pt-BR":it,"pt-PT":ut,"ro-RO":dt,"ru-RU":ct,"sk-SK":ft,"sl-SI":$t,"sr-SP":bt,"sv-SE":pt,"tr-TR":gt,"uk-UA":mt,"zh-CN":vt,"zh-TW":xt};function ga(t){return t&&t.__esModule?t.default:t}function Ce(t){let{onDismiss:e,...r}=t,a=Te(ga(yt),"@react-aria/overlays"),o=sa(r,a.format("dismiss")),s=()=>{e&&e()};return $.createElement(la,null,$.createElement("button",{...o,tabIndex:-1,onClick:s,style:{width:1,height:1}}))}let I=new WeakMap,P=[];function ma(t,e=document.body){let r=new Set(t),a=new Set,o=n=>{for(let g of n.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]"))r.add(g);let u=g=>{if(r.has(g)||g.parentElement&&a.has(g.parentElement)&&g.parentElement.getAttribute("role")!=="row")return NodeFilter.FILTER_REJECT;for(let f of r)if(g.contains(f))return NodeFilter.FILTER_SKIP;return NodeFilter.FILTER_ACCEPT},i=document.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,{acceptNode:u}),p=u(n);if(p===NodeFilter.FILTER_ACCEPT&&s(n),p!==NodeFilter.FILTER_REJECT){let g=i.nextNode();for(;g!=null;)s(g),g=i.nextNode()}},s=n=>{var u;let i=(u=I.get(n))!==null&&u!==void 0?u:0;n.getAttribute("aria-hidden")==="true"&&i===0||(i===0&&n.setAttribute("aria-hidden","true"),a.add(n),I.set(n,i+1))};P.length&&P[P.length-1].disconnect(),o(e);let d=new MutationObserver(n=>{for(let u of n)if(!(u.type!=="childList"||u.addedNodes.length===0)&&![...r,...a].some(i=>i.contains(u.target))){for(let i of u.removedNodes)i instanceof Element&&(r.delete(i),a.delete(i));for(let i of u.addedNodes)(i instanceof HTMLElement||i instanceof SVGElement)&&(i.dataset.liveAnnouncer==="true"||i.dataset.reactAriaTopLayer==="true")?r.add(i):i instanceof Element&&o(i)}});d.observe(e,{childList:!0,subtree:!0});let l={visibleNodes:r,hiddenNodes:a,observe(){d.observe(e,{childList:!0,subtree:!0})},disconnect(){d.disconnect()}};return P.push(l),()=>{d.disconnect();for(let n of a){let u=I.get(n);u!=null&&(u===1?(n.removeAttribute("aria-hidden"),I.delete(n)):I.set(n,u-1))}l===P[P.length-1]?(P.pop(),P.length&&P[P.length-1].observe()):P.splice(P.indexOf(l),1)}}function va(t){let e=P[P.length-1];if(e&&!e.visibleNodes.has(t))return e.visibleNodes.add(t),()=>{e.visibleNodes.delete(t)}}function xa(t,e){let{triggerRef:r,popoverRef:a,groupRef:o,isNonModal:s,isKeyboardDismissDisabled:d,shouldCloseOnInteractOutside:l,...n}=t,u=n.trigger==="SubmenuTrigger",{overlayProps:i,underlayProps:p}=da({isOpen:e.isOpen,onClose:e.close,shouldCloseOnBlur:!0,isDismissable:!s||u,isKeyboardDismissDisabled:d,shouldCloseOnInteractOutside:l},o??a),{overlayProps:g,arrowProps:f,placement:b}=Cr({...n,targetRef:r,overlayRef:a,isOpen:e.isOpen,onClose:s&&!u?e.close:null});return fa({isDisabled:s||!e.isOpen}),N(()=>{if(e.isOpen&&a.current){var v,y;return s?va((v=o==null?void 0:o.current)!==null&&v!==void 0?v:a.current):ma([(y=o==null?void 0:o.current)!==null&&y!==void 0?y:a.current])}},[s,e.isOpen,a,o]),{popoverProps:T(i,g),arrowProps:f,underlayProps:p,placement:b}}const ht=$.createContext(null);function De(t){let e=Ir(),{portalContainer:r=e?null:document.body,isExiting:a}=t,[o,s]=c.useState(!1),d=c.useMemo(()=>({contain:o,setContain:s}),[o,s]),{getContainer:l}=Dr();if(!t.portalContainer&&l&&(r=l()),!r)return null;let n=t.children;return t.disableFocusManagement||(n=$.createElement(Ie,{restoreFocus:!0,contain:(t.shouldContainFocus||o)&&!a},n)),n=$.createElement(ht.Provider,{value:d},$.createElement(ia,null,n)),oa.createPortal(n,r)}function ya(){let t=c.useContext(ht),e=t==null?void 0:t.setContain;N(()=>{e==null||e(!0)},[e])}function ha(t){let{selectionManager:e,collection:r,disabledKeys:a,ref:o,keyboardDelegate:s,layoutDelegate:d}=t,l=ta({usage:"search",sensitivity:"base"}),n=e.disabledBehavior,u=c.useMemo(()=>s||new Lr({collection:r,disabledKeys:a,disabledBehavior:n,ref:o,collator:l,layoutDelegate:d}),[s,d,r,a,o,l,n]),{collectionProps:i}=zr({...t,ref:o,selectionManager:e,keyboardDelegate:u});return{listProps:i}}const Me=new WeakMap;function Pa(t){let e=Me.get(t);if(e!=null)return e;let r=0,a=o=>{for(let s of o)s.type==="section"?a(Hr(s,t)):r++};return a(t),Me.set(t,r),r}var Pt={};Pt={longPressMessage:"اضغط مطولاً أو اضغط على Alt + السهم لأسفل لفتح القائمة"};var Et={};Et={longPressMessage:"Натиснете продължително или натиснете Alt+ стрелка надолу, за да отворите менюто"};var Ct={};Ct={longPressMessage:"Dlouhým stiskem nebo stisknutím kláves Alt + šipka dolů otevřete nabídku"};var Dt={};Dt={longPressMessage:"Langt tryk eller tryk på Alt + pil ned for at åbne menuen"};var Mt={};Mt={longPressMessage:"Drücken Sie lange oder drücken Sie Alt + Nach-unten, um das Menü zu öffnen"};var St={};St={longPressMessage:"Πιέστε παρατεταμένα ή πατήστε Alt + κάτω βέλος για να ανοίξετε το μενού"};var At={};At={longPressMessage:"Long press or press Alt + ArrowDown to open menu"};var kt={};kt={longPressMessage:"Mantenga pulsado o pulse Alt + flecha abajo para abrir el menú"};var Bt={};Bt={longPressMessage:"Menüü avamiseks vajutage pikalt või vajutage klahve Alt + allanool"};var wt={};wt={longPressMessage:"Avaa valikko painamalla pohjassa tai näppäinyhdistelmällä Alt + Alanuoli"};var Ft={};Ft={longPressMessage:"Appuyez de manière prolongée ou appuyez sur Alt + Flèche vers le bas pour ouvrir le menu."};var Kt={};Kt={longPressMessage:"לחץ לחיצה ארוכה או הקש Alt + ArrowDown כדי לפתוח את התפריט"};var Rt={};Rt={longPressMessage:"Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika"};var Tt={};Tt={longPressMessage:"Nyomja meg hosszan, vagy nyomja meg az Alt + lefele nyíl gombot a menü megnyitásához"};var Ot={};Ot={longPressMessage:"Premere a lungo o premere Alt + Freccia giù per aprire il menu"};var It={};It={longPressMessage:"長押しまたは Alt+下矢印キーでメニューを開く"};var Nt={};Nt={longPressMessage:"길게 누르거나 Alt + 아래쪽 화살표를 눌러 메뉴 열기"};var Lt={};Lt={longPressMessage:"Norėdami atidaryti meniu, nuspaudę palaikykite arba paspauskite „Alt + ArrowDown“."};var zt={};zt={longPressMessage:"Lai atvērtu izvēlni, turiet nospiestu vai nospiediet taustiņu kombināciju Alt + lejupvērstā bultiņa"};var Ht={};Ht={longPressMessage:"Langt trykk eller trykk Alt + PilNed for å åpne menyen"};var _t={};_t={longPressMessage:"Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen"};var Ut={};Ut={longPressMessage:"Naciśnij i przytrzymaj lub naciśnij klawisze Alt + Strzałka w dół, aby otworzyć menu"};var Vt={};Vt={longPressMessage:"Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu"};var jt={};jt={longPressMessage:"Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu"};var Wt={};Wt={longPressMessage:"Apăsați lung sau apăsați pe Alt + săgeată în jos pentru a deschide meniul"};var Gt={};Gt={longPressMessage:"Нажмите и удерживайте или нажмите Alt + Стрелка вниз, чтобы открыть меню"};var qt={};qt={longPressMessage:"Ponuku otvoríte dlhým stlačením alebo stlačením klávesu Alt + klávesu so šípkou nadol"};var Zt={};Zt={longPressMessage:"Za odprtje menija pritisnite in držite gumb ali pritisnite Alt+puščica navzdol"};var Jt={};Jt={longPressMessage:"Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni"};var Yt={};Yt={longPressMessage:"Håll nedtryckt eller tryck på Alt + pil nedåt för att öppna menyn"};var Xt={};Xt={longPressMessage:"Menüyü açmak için uzun basın veya Alt + Aşağı Ok tuşuna basın"};var Qt={};Qt={longPressMessage:"Довго або звичайно натисніть комбінацію клавіш Alt і стрілка вниз, щоб відкрити меню"};var er={};er={longPressMessage:"长按或按 Alt + 向下方向键以打开菜单"};var tr={};tr={longPressMessage:"長按或按 Alt+向下鍵以開啟功能表"};var rr={};rr={"ar-AE":Pt,"bg-BG":Et,"cs-CZ":Ct,"da-DK":Dt,"de-DE":Mt,"el-GR":St,"en-US":At,"es-ES":kt,"et-EE":Bt,"fi-FI":wt,"fr-FR":Ft,"he-IL":Kt,"hr-HR":Rt,"hu-HU":Tt,"it-IT":Ot,"ja-JP":It,"ko-KR":Nt,"lt-LT":Lt,"lv-LV":zt,"nb-NO":Ht,"nl-NL":_t,"pl-PL":Ut,"pt-BR":Vt,"pt-PT":jt,"ro-RO":Wt,"ru-RU":Gt,"sk-SK":qt,"sl-SI":Zt,"sr-SP":Jt,"sv-SE":Yt,"tr-TR":Xt,"uk-UA":Qt,"zh-CN":er,"zh-TW":tr};function Ea(t){return t&&t.__esModule?t.default:t}function Ca(t,e,r){let{type:a="menu",isDisabled:o,trigger:s="press"}=t,d=G(),{triggerProps:l,overlayProps:n}=Le({type:a},e,r),u=f=>{if(!o&&!(s==="longPress"&&!f.altKey)&&r&&r.current)switch(f.key){case"Enter":case" ":if(s==="longPress")return;case"ArrowDown":"continuePropagation"in f||f.stopPropagation(),f.preventDefault(),e.toggle("first");break;case"ArrowUp":"continuePropagation"in f||f.stopPropagation(),f.preventDefault(),e.toggle("last");break;default:"continuePropagation"in f&&f.continuePropagation()}},i=Te(Ea(rr),"@react-aria/menu"),{longPressProps:p}=_r({isDisabled:o||s!=="longPress",accessibilityDescription:i.format("longPressMessage"),onLongPressStart(){e.close()},onLongPress(){e.open("first")}}),g={preventFocusOnPress:!0,onPressStart(f){f.pointerType!=="touch"&&f.pointerType!=="keyboard"&&!o&&(ye(f.target),e.open(f.pointerType==="virtual"?"first":null))},onPress(f){f.pointerType==="touch"&&!o&&(ye(f.target),e.toggle())}};return delete l.onPress,{menuTriggerProps:{...l,...s==="press"?g:p,id:d,onKeyDown:u},menuProps:{...n,"aria-labelledby":d,autoFocus:e.focusStrategy||!0,onClose:e.close}}}const ar=new WeakMap;function Da(t,e,r){let{shouldFocusWrap:a=!0,onKeyDown:o,onKeyUp:s,...d}=t;!t["aria-label"]&&t["aria-labelledby"];let l=A(t,{labelable:!0}),{listProps:n}=ha({...d,ref:r,selectionManager:e.selectionManager,collection:e.collection,disabledKeys:e.disabledKeys,shouldFocusWrap:a,linkBehavior:"override"});return ar.set(e,{onClose:t.onClose,onAction:t.onAction,shouldUseVirtualFocus:t.shouldUseVirtualFocus}),{menuProps:T(l,{onKeyDown:o,onKeyUp:s},{role:"menu",...n,onKeyDown:u=>{var i;(u.key!=="Escape"||t.shouldUseVirtualFocus)&&((i=n.onKeyDown)===null||i===void 0||i.call(n,u))}})}}function Ma(t,e,r){let{id:a,key:o,closeOnSelect:s,isVirtualized:d,"aria-haspopup":l,onPressStart:n,onPressUp:u,onPress:i,onPressChange:p,onPressEnd:g,onHoverStart:f,onHoverChange:b,onHoverEnd:v,onKeyDown:y,onKeyUp:M,onFocus:H,onFocusChange:D,onBlur:Z,selectionManager:h=e.selectionManager}=t,E=!!l,S=E&&t["aria-expanded"]==="true";var J;let k=(J=t.isDisabled)!==null&&J!==void 0?J:h.isDisabled(o);var Y;let fe=(Y=t.isSelected)!==null&&Y!==void 0?Y:h.isSelected(o),B=ar.get(e),x=e.collection.getItem(o),w=t.onClose||B.onClose,ir=jr(),X=m=>{var ee;if(!E){if(!(x==null||(ee=x.props)===null||ee===void 0)&&ee.onAction?x.props.onAction():t.onAction&&t.onAction(o),B.onAction){let vr=B.onAction;vr(o)}m.target instanceof HTMLAnchorElement&&x&&ir.open(m.target,m,x.props.href,x.props.routerOptions)}},Q="menuitem";E||(h.selectionMode==="single"?Q="menuitemradio":h.selectionMode==="multiple"&&(Q="menuitemcheckbox"));let $e=V(),be=V(),pe=V(),_={id:a,"aria-disabled":k||void 0,role:Q,"aria-label":t["aria-label"],"aria-labelledby":$e,"aria-describedby":[be,pe].filter(Boolean).join(" ")||void 0,"aria-controls":t["aria-controls"],"aria-haspopup":l,"aria-expanded":t["aria-expanded"]};h.selectionMode!=="none"&&!E&&(_["aria-checked"]=fe),d&&(_["aria-posinset"]=x==null?void 0:x.index,_["aria-setsize"]=Pa(e.collection));let ur=m=>{m.pointerType==="keyboard"&&X(m),n==null||n(m)},ge=()=>{!E&&w&&(s??(h.selectionMode!=="multiple"||h.isLink(o)))&&w()},dr=m=>{m.pointerType==="mouse"&&(X(m),ge()),u==null||u(m)},cr=m=>{m.pointerType!=="keyboard"&&m.pointerType!=="mouse"&&(X(m),ge()),i==null||i(m)},{itemProps:F,isFocused:me}=Ur({id:a,selectionManager:h,key:o,ref:r,shouldSelectOnPressUp:!0,allowsDifferentPressOrigin:!0,linkBehavior:"none",shouldUseVirtualFocus:B.shouldUseVirtualFocus}),{pressProps:fr,isPressed:$r}=Wr({onPressStart:ur,onPress:cr,onPressUp:dr,onPressChange:p,onPressEnd:g,isDisabled:k}),{hoverProps:br}=Re({isDisabled:k,onHoverStart(m){!he()&&!(S&&l)&&(h.setFocused(!0),h.setFocusedKey(o)),f==null||f(m)},onHoverChange:b,onHoverEnd:v}),{keyboardProps:pr}=Qr({onKeyDown:m=>{if(m.repeat){m.continuePropagation();return}switch(m.key){case" ":!k&&h.selectionMode==="none"&&!E&&s!==!1&&w&&w();break;case"Enter":!k&&s!==!1&&!E&&w&&w();break;default:E||m.continuePropagation(),y==null||y(m);break}},onKeyUp:M}),{focusProps:gr}=Yr({onBlur:Z,onFocus:H,onFocusChange:D}),ve=A(x==null?void 0:x.props);delete ve.id;let mr=Gr(x==null?void 0:x.props);return{menuItemProps:{..._,...T(ve,mr,E?{onFocus:F.onFocus,"data-collection":F["data-collection"],"data-key":F["data-key"]}:F,fr,br,pr,gr,B.shouldUseVirtualFocus||E?{onMouseDown:m=>m.preventDefault()}:void 0),tabIndex:F.tabIndex!=null&&S&&!B.shouldUseVirtualFocus?-1:F.tabIndex},labelProps:{id:$e},descriptionProps:{id:be},keyboardShortcutProps:{id:pe},isFocused:me,isFocusVisible:me&&h.isFocused&&he()&&!S,isSelected:fe,isPressed:$r,isDisabled:k}}function Sa(t){let{heading:e,"aria-label":r}=t,a=G();return{itemProps:{role:"presentation"},headingProps:e?{id:a,role:"presentation"}:{},groupProps:{role:"group","aria-label":r,"aria-labelledby":e?a:void 0}}}function Aa(t,e){let{role:r="dialog"}=t,a=V();a=t["aria-label"]?void 0:a;let o=c.useRef(!1);return c.useEffect(()=>{if(e.current&&!e.current.contains(document.activeElement)){se(e.current);let s=setTimeout(()=>{document.activeElement===e.current&&(o.current=!0,e.current&&(e.current.blur(),se(e.current)),o.current=!1)},500);return()=>{clearTimeout(s)}}},[e]),ya(),{dialogProps:{...A(t,{labelable:!0}),role:r,tabIndex:-1,"aria-labelledby":t["aria-labelledby"]||a,onBlur:s=>{o.current&&s.stopPropagation()}},titleProps:{id:a}}}function ue(t){let e=ke(t),[r,a]=c.useState(null),[o,s]=c.useState([]),d=()=>{s([]),e.close()};return{focusStrategy:r,...e,open(u=null){a(u),e.open()},toggle(u=null){a(u),e.toggle()},close(){d()},expandedKeysStack:o,openSubmenu:(u,i)=>{s(p=>i>p.length?p:[...p.slice(0,i),u])},closeSubmenu:(u,i)=>{s(p=>p[i]===u?p.slice(0,i):p)}}}class ka{*[Symbol.iterator](){yield*this.iterable}get size(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}getKeyBefore(e){let r=this.keyMap.get(e);var a;return r&&(a=r.prevKey)!==null&&a!==void 0?a:null}getKeyAfter(e){let r=this.keyMap.get(e);var a;return r&&(a=r.nextKey)!==null&&a!==void 0?a:null}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(e){var r;return(r=this.keyMap.get(e))!==null&&r!==void 0?r:null}at(e){const r=[...this.getKeys()];return this.getItem(r[e])}constructor(e,{expandedKeys:r}={}){this.keyMap=new Map,this.firstKey=null,this.lastKey=null,this.iterable=e,r=r||new Set;let a=l=>{if(this.keyMap.set(l.key,l),l.childNodes&&(l.type==="section"||r.has(l.key)))for(let n of l.childNodes)a(n)};for(let l of e)a(l);let o=null,s=0;for(let[l,n]of this.keyMap)o?(o.nextKey=l,n.prevKey=o.key):(this.firstKey=l,n.prevKey=void 0),n.type==="item"&&(n.index=s++),o=n,o.nextKey=void 0;var d;this.lastKey=(d=o==null?void 0:o.key)!==null&&d!==void 0?d:null}}function Ba(t){let{onExpandedChange:e}=t,[r,a]=ra(t.expandedKeys?new Set(t.expandedKeys):void 0,t.defaultExpandedKeys?new Set(t.defaultExpandedKeys):new Set,e),o=Fe(t),s=c.useMemo(()=>t.disabledKeys?new Set(t.disabledKeys):new Set,[t.disabledKeys]),d=Vr(t,c.useCallback(n=>new ka(n,{expandedKeys:r}),[r]),null);return c.useEffect(()=>{o.focusedKey!=null&&!d.getItem(o.focusedKey)&&o.setFocusedKey(null)},[d,o.focusedKey]),{collection:d,expandedKeys:r,disabledKeys:s,toggleKey:n=>{a(wa(r,n))},setExpandedKeys:a,selectionManager:new Ke(d,o)}}function wa(t,e){let r=new Set(t);return r.has(e)?r.delete(e):r.add(e),r}const Se=c.createContext(null),or=c.createContext({}),lo=we("header",function(e,r){return[e,r]=L(e,r,or),$.createElement("header",{className:"react-aria-Header",...e,ref:r},e.children)}),de=c.createContext(null),Ae=c.createContext(null),io=c.forwardRef(function(e,r){[e,r]=L(e,r,de);let a=c.useContext(q),o=ke(e),s=e.isOpen!=null||e.defaultOpen!=null||!a?o:a,d=Mr(r,s.isOpen)||e.isExiting||!1,l=na(),{direction:n}=ea();if(l){let u=e.children;return typeof u=="function"&&(u=u({trigger:e.trigger||null,placement:"bottom",isEntering:!1,isExiting:!1,defaultChildren:null})),$.createElement($.Fragment,null,u)}return s&&!s.isOpen&&!d?null:$.createElement(Fa,{...e,triggerRef:e.triggerRef,state:s,popoverRef:r,isExiting:d,dir:n})});function Fa({state:t,isExiting:e,UNSTABLE_portalContainer:r,...a}){let o=c.useRef(null),[s,d]=c.useState(0),l=c.useRef(null),n=c.useContext(Ae),u=n&&a.trigger==="SubmenuTrigger";N(()=>{o.current&&t.isOpen&&d(o.current.getBoundingClientRect().width)},[t.isOpen,o]);var i;let{popoverProps:p,underlayProps:g,arrowProps:f,placement:b}=xa({...a,offset:(i=a.offset)!==null&&i!==void 0?i:8,arrowSize:s,groupRef:u?n:l},t),v=a.popoverRef,y=Sr(v,!!b)||a.isEntering||!1,M=z({...a,defaultClassName:"react-aria-Popover",values:{trigger:a.trigger||null,placement:b,isEntering:y,isExiting:e}}),H=!a.isNonModal||a.trigger==="SubmenuTrigger",[D,Z]=c.useState(!1);N(()=>{v.current&&Z(H&&!v.current.querySelector("[role=dialog]"))},[v,H]),c.useEffect(()=>{D&&v.current&&!v.current.contains(document.activeElement)&&se(v.current)},[D,v]);let h={...p.style,...M.style},E=$.createElement("div",{...T(A(a),p),...M,role:D?"dialog":void 0,tabIndex:D?-1:void 0,"aria-label":a["aria-label"],"aria-labelledby":a["aria-labelledby"],ref:v,slot:a.slot||void 0,style:h,dir:a.dir,"data-trigger":a.trigger,"data-placement":b,"data-entering":y||void 0,"data-exiting":e||void 0},!a.isNonModal&&$.createElement(Ce,{onDismiss:t.close}),$.createElement(Ar.Provider,{value:{...f,placement:b,ref:o}},M.children),$.createElement(Ce,{onDismiss:t.close}));if(!u)return $.createElement(De,{...a,shouldContainFocus:D,isExiting:e,portalContainer:r},!a.isNonModal&&t.isOpen&&$.createElement("div",{"data-testid":"underlay",...g,style:{position:"fixed",inset:0}}),$.createElement("div",{ref:l,style:{display:"contents"}},$.createElement(Ae.Provider,{value:l},E)));var S;return $.createElement(De,{...a,shouldContainFocus:D,isExiting:e,portalContainer:(S=r??(n==null?void 0:n.current))!==null&&S!==void 0?S:void 0},E)}const Ka=c.createContext({}),nr=c.createContext(null),ce=c.createContext(null),j=c.createContext(null),W=c.createContext(null);function uo(t){let e=ue(t),r=c.useRef(null),{menuTriggerProps:a,menuProps:o}=Ca({...t,type:"menu"},e,r),[s,d]=c.useState(null),l=c.useCallback(()=>{r.current&&d(r.current.offsetWidth+"px")},[r]);kr({ref:r,onResize:l});let n=c.useRef(null);return $.createElement(R,{values:[[nr,{...o,ref:n}],[q,e],[j,e],[de,{trigger:"MenuTrigger",triggerRef:r,scrollRef:n,placement:"bottom start",style:{"--trigger-width":s},"aria-labelledby":o["aria-labelledby"]}]]},$.createElement(Ne,{...a,ref:r,isPressed:e.isOpen},t.children))}const Ra=c.createContext(null),co=c.forwardRef(function(e,r){return[e,r]=L(e,r,nr),$.createElement(Kr,{content:$.createElement(Rr,e)},a=>$.createElement(Ta,{props:e,collection:a,menuRef:r}))});function Ta({props:t,collection:e,menuRef:r}){let{filter:a,collectionProps:o,collectionRef:s}=c.useContext(Se)||{};r=ie(c.useMemo(()=>Nr(r,s!==void 0?s:null),[s,r]));let d=c.useMemo(()=>a?e.UNSTABLE_filter(a):e,[e,a]),l=Ba({...t,collection:d,children:void 0}),n=c.useContext(j),{isVirtualized:u,CollectionRoot:i}=c.useContext(Be),{menuProps:p}=Da({...t,...o,isVirtualized:u,onClose:t.onClose||(n==null?void 0:n.close)},l,r),g=z({defaultClassName:"react-aria-Menu",className:t.className,style:t.style,values:{isEmpty:l.collection.size===0}}),f=null;return l.collection.size===0&&t.renderEmptyState&&(f=$.createElement("div",{role:"menuitem",style:{display:"contents"}},t.renderEmptyState())),$.createElement(Ie,null,$.createElement("div",{...A(t),...p,...g,ref:r,slot:t.slot||void 0,"data-empty":l.collection.size===0||void 0,onScroll:t.onScroll},$.createElement(R,{values:[[ce,l],[Tr,{elementType:"div"}],[Br,{name:"MenuSection",render:sr}],[Ra,{parentMenuRef:r,shouldUseVirtualFocus:o==null?void 0:o.shouldUseVirtualFocus}],[le,null],[Se,null],[W,l.selectionManager],[j,n??ue({})]]},$.createElement(i,{collection:l.collection,persistedKeys:wr(l.selectionManager.focusedKey),scrollRef:r})),f))}class Oa extends Ke{get focusedKey(){return this.parent.focusedKey}get isFocused(){return this.parent.isFocused}setFocusedKey(e,r){return this.parent.setFocusedKey(e,r)}setFocused(e){this.parent.setFocused(e)}get childFocusStrategy(){return this.parent.childFocusStrategy}constructor(e,r){super(e.collection,r),this.parent=e}}function sr(t,e,r,a="react-aria-MenuSection"){var o,s;let d=c.useContext(ce),{CollectionBranch:l}=c.useContext(Be),[n,u]=hr();var i;let{headingProps:p,groupProps:g}=Sa({heading:u,"aria-label":(i=r.props["aria-label"])!==null&&i!==void 0?i:void 0}),f=z({defaultClassName:a,className:(o=r.props)===null||o===void 0?void 0:o.className,style:(s=r.props)===null||s===void 0?void 0:s.style,values:{}}),b=c.useContext(W),v=Fe(t),y=t.selectionMode!=null?new Oa(b,v):b;return $.createElement("section",{...A(t),...g,...f,ref:e},$.createElement(R,{values:[[or,{...p,ref:n}],[W,y]]},$.createElement(l,{collection:d.collection,parent:r})))}const fo=Fr("section",sr),le=c.createContext(null),$o=we("item",function(e,r,a){var o;[e,r]=L(e,r,le);let s=(o=yr(le))===null||o===void 0?void 0:o.id,d=c.useContext(ce),l=ie(r),n=c.useContext(W),{menuItemProps:u,labelProps:i,descriptionProps:p,keyboardShortcutProps:g,...f}=Ma({...e,id:s,key:a.key,selectionManager:n},d,l),{hoverProps:b,isHovered:v}=Re({isDisabled:f.isDisabled}),y=z({...e,id:void 0,children:a.rendered,defaultClassName:"react-aria-MenuItem",values:{...f,isHovered:v,isFocusVisible:f.isFocusVisible,selectionMode:n.selectionMode,selectionBehavior:n.selectionBehavior,hasSubmenu:!!e["aria-haspopup"],isOpen:e["aria-expanded"]==="true"}}),M=e.href?"a":"div";return $.createElement(M,{...T(u,b),...y,ref:l,"data-disabled":f.isDisabled||void 0,"data-hovered":v||void 0,"data-focused":f.isFocused||void 0,"data-focus-visible":f.isFocusVisible||void 0,"data-pressed":f.isPressed||void 0,"data-selected":f.isSelected||void 0,"data-selection-mode":n.selectionMode==="none"?void 0:n.selectionMode,"data-has-submenu":!!e["aria-haspopup"]||void 0,"data-open":e["aria-expanded"]==="true"||void 0},$.createElement(R,{values:[[Or,{slots:{[ae]:i,label:i,description:p}}],[Ka,g]]},y.children))}),lr=c.createContext(null),q=c.createContext(null);function bo(t){let e=ue(t),r=c.useRef(null),{triggerProps:a,overlayProps:o}=Le({type:"dialog"},e,r);return a.id=G(),o["aria-labelledby"]=a.id,$.createElement(R,{values:[[q,e],[j,e],[lr,o],[de,{trigger:"DialogTrigger",triggerRef:r,"aria-labelledby":o["aria-labelledby"]}]]},$.createElement(Ne,{...a,ref:r,isPressed:e.isOpen},t.children))}const po=c.forwardRef(function(e,r){let a=e["aria-labelledby"];[e,r]=L(e,r,lr);let{dialogProps:o,titleProps:s}=Aa({...e,"aria-labelledby":a},r),d=c.useContext(q);!o["aria-label"]&&!o["aria-labelledby"]&&e["aria-labelledby"]&&(o["aria-labelledby"]=e["aria-labelledby"]);let l=z({defaultClassName:"react-aria-Dialog",className:e.className,style:e.style,children:e.children,values:{close:(d==null?void 0:d.close)||(()=>{})}});return $.createElement("section",{...A(e),...o,...l,ref:r,slot:e.slot||void 0},$.createElement(R,{values:[[Pr,{slots:{[ae]:{},title:{...s,level:2}}}],[xr,{slots:{[ae]:{},close:{onPress:()=>d==null?void 0:d.close()}}}]]},l.children))});export{fo as $,lo as a,bo as b,uo as c,ha as d,Pa as e,Se as f,or as g,io as h,po as i,da as j,fa as k,ya as l,ma as m,q as n,Ce as o,De as p,Ca as q,de as r,$o as s,co as t,lr as u};

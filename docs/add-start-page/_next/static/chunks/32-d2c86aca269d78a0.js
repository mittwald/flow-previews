"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[32],{6420:function(e,t,n){n.d(t,{R:function(){return o}});var r=n(75781);class o{getTitle(){var e,t;return null!==(t=null!==(e=this.mdxSource.frontmatter.title)&&void 0!==e?e:this.mdxSource.frontmatter.component)&&void 0!==t?t:(0,r.Z)(this.slugs[this.slugs.length-1])}getGitHubUrl(){var e;let t=this.mdxSource.frontmatter.component,n=null!==(e=this.mdxSource.frontmatter.gitHubComponentPath)&&void 0!==e?e:"components/".concat(t);return"https://github.com/mittwald/flow/tree/main/packages/components/src/".concat(n)}getNavTitle(){var e;return null!==(e=this.mdxSource.frontmatter.navTitle)&&void 0!==e?e:this.getTitle()}matchesSlugs(e){return o.pathnameFromSlug(e)===this.pathname}static pathnameFromSlug(e){return["",...e].join("/")}getExample(e){let t=this.examples[e];if(void 0===t)throw Error("Could not find example ".concat(e," in ").concat(this.filename));return t}serialize(){return{mdxSource:this.mdxSource,examples:this.examples,slugs:this.slugs,filename:this.filename}}static deserialize(e){let{filename:t,mdxSource:n,examples:r,slugs:a}=e;return new o(t,a,n,r)}constructor(e,t,n,r){this.filename=e,this.slugs=t,this.pathname=o.pathnameFromSlug(t),this.id=e,this.mdxSource=n,this.examples=r}}},83999:function(e,t,n){n.d(t,{A:function(){return m}});var r=n(31311),o=n(86430);n(31810);var a=n(52432),l=n(37658),i=n(71108);n(13389);var c=n(16949),u=n(77328),s=n(48017);let d={accordion:"flow--accordion",header:"flow--accordion--header",headerButton:"flow--accordion--header-button",content:"flow--accordion--content",contentInner:"flow--accordion--content-inner",chevron:"flow--accordion--chevron",expanded:"flow--accordion--expanded"},m=e=>{let{children:t,className:n,defaultExpanded:m=!1,...f}=e,[h,E]=(0,r.useState)(m),I=(0,o.Z)(d.accordion,h&&d.expanded,n),p=(0,r.useId)(),v=(0,r.useId)(),g=e=>r.createElement(i.B,{unstyled:!0,"aria-expanded":h,className:d.headerButton,onPress:()=>E(e=>!e),"aria-controls":v},e,r.createElement(c.I,{className:d.chevron})),w={Content:{className:d.contentInner,tunnelId:"content"},Heading:{className:d.header,level:4,children:(0,l.d)(e=>g(e.children))},Label:{className:d.header,children:(0,l.d)(e=>g(e.children))}};return r.createElement("div",{...f,className:I},r.createElement(a.P,{mergeInParentContext:!0,props:w,dependencies:[h]},r.createElement(u.NN,null,t,r.createElement("div",{"aria-labelledby":p,id:v,role:"region",hidden:!h,className:d.content},r.createElement(s.A,{isActive:h,inactiveDelay:1e3},r.createElement(u.Rz,{id:"content"}))))))}},30762:function(e,t,n){n.d(t,{A:function(){return k},a:function(){return Z}});var r=n(31311),o=n(33022),a=n(39822),l=n(5728),i=n(21879),c=n(9655);n(31810);var u=n(52432),s=n(37658),d=n(98844),m=Object.defineProperty,f=(e,t,n)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t,n)=>f(e,"symbol"!=typeof t?t+"":t,n);let E=(0,r.createContext)(void 0),I=E.Provider,p=e=>new Promise(t=>setTimeout(t,e));class v{static useNew(){return(0,r.useRef)(new v).current}updateState(e){this.state=e}useValue(){return(0,i.u)(()=>this.state,[this])}useIsBusy(){return(0,i.u)(()=>this.isBusy,[this])}get isBusy(){return"isIdle"!==this.state}onAsyncStart(){this.isAsync=!0,this.updateState("isExecuting"),this.setPendingTimeout=window.setTimeout(()=>this.startPending(),1e3)}async onSucceeded(){await this.onDone()}async onFailed(e){this.error=null!=e?e:Error("Unknown error"),await this.onDone()}withFeedback(e){return this.showFeedback=e,this}async startFailedFeedback(){this.updateState("isFailed"),await p(2e3),this.resetAfterDone()}async startSucceededFeedback(){this.updateState("isSucceeded"),await p(1500),this.resetAfterDone()}resetAfterDone(){this.updateState("isIdle"),this.isAsync=!1,this.error=void 0}async onDone(){this.setPendingTimeout&&window.clearTimeout(this.setPendingTimeout),this.error?await this.startFailedFeedback():!1!==this.showFeedback&&(this.showFeedback||this.isAsync)?await this.startSucceededFeedback():this.resetAfterDone()}startPending(){this.updateState("isPending")}constructor(){h(this,"showFeedback"),h(this,"state","isIdle"),h(this,"setPendingTimeout"),h(this,"error"),h(this,"isAsync",!1),(0,l.rC)(this,{state:l.LO,updateState:l.aD,isBusy:l.Fl})}}let g=e=>function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];let o=[...e],a=o.shift();if(a){let e=a(...n),t=()=>0===o.length?e:g(o)(...n);return e instanceof Promise?e.then(t):t()}},w=()=>{},b=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{onSync:n=w,onAsync:r=w,then:o=w,catch:a=w,finally:l=w}=t;try{let t=e();return t instanceof Promise?(r(),t.then(o).catch(a).finally(l)):(n(),o(t),l(),t)}catch(e){n(),a(e),l()}},C=()=>{};class y{addAction(e){this.actions.push(e)}async executeBatch(e){let t;if(0===this.actions.length)return;let n=this.actions[this.actions.length-1].actionProps.showFeedback,r=this.baseAction.state.withFeedback(!this.baseAction.needsConfirmation&&n),o=g(this.actions.map(e=>(function(e){var t,n,r,o;if(e.needsConfirmation)return e.confirmationModalController.open;let a=t=>"string"==typeof t?e.getOverlayController(t):t,{action:l,toggleOverlay:i,closeOverlay:c,openOverlay:u}=e.actionProps;return null!==(o=l||(u?null==(t=a(u))?void 0:t.open:c?null==(n=a(c))?void 0:n.close:i?null==(r=a(i))?void 0:r.toggle:C))&&void 0!==o?o:C})(e)));if(await b(()=>o(...e),{onAsync:()=>r.onAsyncStart(),then:()=>r.onSucceeded(),catch:e=>{r.onFailed(e),t=e}}),t)throw t}constructor(e){h(this,"actions",[]),h(this,"baseAction"),this.baseAction=e}}class P{constructor(e){var t=this;h(this,"action"),h(this,"execute",function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];let o=t.getBatchedActions();(async()=>{for(let e of o)await e.executeBatch(n)})().catch(e=>console.error(e))}),h(this,"getBatchedActions",()=>{let e=this.action,t=[],n=new y(this.action),r=0;for(;e;){let{action:o,break:a,skip:l}=e.actionProps;if(e.needsConfirmation){n.addAction(e);break}if(l){r=!0===l?1:l,e=e.parentAction;continue}if(r>0){e=e.parentAction,r--;continue}if(a)break;o||(t.push(n),n=new y(this.action)),n.addAction(e),e=e.parentAction}return t.push(n),t}),this.action=e}}class Z{static useNew(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(0,r.useContext)(E);return new Z({parentAction:n,overlayContext:(0,o.u)(),confirmationModalController:o.O.useNew(),needsConfirmation:!1,actionProps:e,state:v.useNew(),...t})}static use(){let e=(0,r.useContext)(E);return a(!!e,"Action context is not defined"),c.a.useRegisterState(e.state),e}static useConfirmationAction(){let e=Z.use();return new Z({actionProps:e.actionProps,confirmationModalController:e.confirmationModalController,overlayContext:e.overlayContext,state:e.state,needsConfirmation:!1,parentAction:Z.useNew({closeOverlay:e.confirmationModalController},{parentAction:e.parentAction})})}getOverlayController(e){var t,n;let r=t=>void 0===t?void 0:t?this.overlayContext[e]:void 0;return null!==(n=null!==(t=r(this.actionProps.openOverlay))&&void 0!==t?t:r(this.actionProps.closeOverlay))&&void 0!==n?n:r(this.actionProps.toggleOverlay)}constructor(e){var t=this;h(this,"state"),h(this,"needsConfirmation"),h(this,"actionProps"),h(this,"parentAction"),h(this,"confirmationModalController"),h(this,"overlayContext"),h(this,"execute",function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];new P(t).execute(...n)});let{actionProps:n,needsConfirmation:r,parentAction:o,overlayContext:a,confirmationModalController:l,state:i}=e;this.actionProps=n,this.parentAction=o,this.confirmationModalController=l,this.needsConfirmation=r,this.overlayContext=a,this.state=i}}let N=e=>(0,d.u)()[e],x=e=>"actionConfirm"===N("Modal")?(0,c.g)(e):void 0,A=e=>{let t=Z.use(),n=t.state.useValue(),r="primary"===x(e),o=t.confirmationModalController.useIsOpen();return t.needsConfirmation&&o&&!r?"isIdle":n},S={onPress:(0,s.d)(e=>{let t=Z.use(),n=Z.useConfirmationAction(),r="primary"===x(e);return"abort"===x(e)?t.confirmationModalController.close:r?n.execute:t.execute}),isPending:(0,s.d)(e=>"isPending"===A(e)),isSucceeded:(0,s.d)(e=>"isSucceeded"===A(e)),isFailed:(0,s.d)(e=>"isFailed"===A(e)),"aria-disabled":(0,s.d)(e=>{let t=A(e),n=(0,c.u)().useIsBusy();return"isExecuting"===t||n})},k=(0,d.f)("Action",e=>{let{children:t,actionModel:n,...o}=e,a=Z.useNew(o),l={Button:S,Link:{onPress:(0,s.d)(()=>Z.use().execute)},MenuItem:{onAction:(0,s.d)(()=>Z.use().execute)},Modal:{slot:(0,s.d)(e=>{let{slot:t}=e;return Z.use().needsConfirmation="actionConfirm"===t,t}),isDismissable:(0,s.d)(e=>{let t=Z.use().state.useValue();return"isExecuting"!==t&&"isPending"!==t&&e.isDismissable}),controller:(0,s.d)(()=>{let e=Z.use();return e.needsConfirmation?e.confirmationModalController:e.getOverlayController("Modal")}),ActionGroup:{Button:S}}};return r.createElement(I,{value:null!=n?n:a},r.createElement(u.P,{props:l,mergeInParentContext:!0},t))})},71108:function(e,t,n){n.d(t,{B:function(){return g}});var r=n(31311),o=n(19324),a=n(86430),l=n(18426),i=n(52432);n(31810),n(13389);var c=n(71167),u=n(26735),s=n(85660),d=n(98844),m=n(23315),f=n(35592),h=n(45809);let E={button:"flow--button",content:"flow--button--content",stateIcon:"flow--button--state-icon",avatar:"flow--button--avatar",icon:"flow--button--icon",text:"flow--button--text",counterBadge:"flow--button--counter-badge",isSucceeded:"flow--button--is-succeeded",isFailed:"flow--button--is-failed",isPending:"flow--button--is-pending",plain:"flow--button--plain","size-s":"flow--button--size-s",primary:"flow--button--primary",solid:"flow--button--solid",ariaDisabled:"flow--button--aria-disabled",accent:"flow--button--accent",danger:"flow--button--danger",secondary:"flow--button--secondary",dark:"flow--button--dark",light:"flow--button--light",soft:"flow--button--soft"},I={"de-DE":{"action.isFailed":"Fehlgeschlagen","action.isPending":"Ausstehend...","action.isSucceeded":"Erfolgreich"},"en-EN":{"action.isFailed":"Failed","action.isPending":"Pending...","action.isSucceeded":"Succeeded"}},p=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(0,f.q)(I),{isPendingText:o=n.format("action.isPending"),isSucceededText:a=n.format("action.isSucceeded"),isFailedText:l=n.format("action.isFailed")}=t,i=(0,h.t)({"aria-live":"polite","aria-atomic":!1,"aria-relevant":"text additions",role:"status"});(0,r.useEffect)(()=>{"isPending"===e?i.speak(o):"isSucceeded"===e?i.speak(a):"isFailed"===e&&i.speak(l)},[e])},v=e=>((e.isPending||e.isSucceeded||e.isFailed||e["aria-disabled"])&&((e={...e}).onPress=void 0,e.onPressStart=void 0,e.onPressEnd=void 0,e.onPressChange=void 0,e.onPressUp=void 0,e.onKeyDown=void 0,e.onKeyUp=void 0),e),g=(0,d.f)("Button",e=>{let{color:t="primary",variant:n="solid",children:d,className:f,size:h="m",isPending:I,isSucceeded:g,isFailed:w,"aria-disabled":b,refProp:C,slot:y,ariaSlot:P,unstyled:Z,...N}=e=v(e),x=Z?f:(0,a.Z)(E.button,I&&E.isPending,g&&E.isSucceeded,w&&E.isFailed,E["size-".concat(h)],E[t],E[n],f,b&&E.ariaDisabled);p(I?"isPending":g?"isSucceeded":w?"isFailed":"isIdle");let A={Icon:{className:E.icon,"aria-hidden":!0,size:h},Text:{className:E.text},Avatar:{className:E.avatar},CounterBadge:{className:E.counterBadge}},S=g?c.I:w?c.a:I?m.L:void 0,k=S&&r.createElement(S,{size:h,className:E.stateIcon});return r.createElement(l.C,null,r.createElement(o.z,{className:x,ref:C,slot:P,...N},r.createElement(i.P,{props:A},r.createElement(u.W,{if:!Z},r.createElement("span",{className:E.content},r.createElement(u.W,{if:"string"==typeof d},r.createElement(s.T,null,d))))),k))})},87544:function(e,t,n){n.d(t,{Button:function(){return r.B}});var r=n(71108)},24457:function(e,t,n){n.d(t,{C:function(){return c}});var r=n(31311),o=n(18426);n(31810);var a=n(98844),l=n(26735),i=n(48017);let c=(0,a.f)("Content",e=>{let{children:t,elementType:n="div",refProp:a,clearPropsContext:c=!0,isActive:u=!0,...s}=e;return r.createElement(l.W,{if:c},r.createElement(o.C,null,r.createElement(i.A,{isActive:u},r.createElement(n,{ref:a,...s},t))))})},55634:function(e,t,n){n.d(t,{Content:function(){return r.C},Z:function(){return r.C}});var r=n(24457)},51356:function(e,t,n){n.d(t,{H:function(){return s}});var r=n(31311),o=n(98844),a=n(86430);n(31810);var l=n(52432),i=n(77328);let c={sectionHeader:"flow--section--section-header",actions:"flow--section--section-header--actions"},u=e=>{let{children:t,className:n}=e,o=(0,a.Z)(c.sectionHeader,n),u={Switch:{labelPosition:"leading",tunnelId:"actions"},Button:{size:"s",tunnelId:"actions"},ContextMenuTrigger:{tunnelId:"actions",Button:{tunnelId:null}},Action:{tunnelId:"actions",Button:{tunnelId:null}},Heading:{level:2,className:c.heading}};return r.createElement("header",{className:o},r.createElement(l.P,{props:u},r.createElement(i.NN,null,t,r.createElement("div",{className:c.actions},r.createElement(i.Rz,{id:"actions"})))))},s=(0,o.f)("Header",e=>{let{children:t,refProp:n,elementType:o="header",renderSectionHeader:a,className:l,...i}=e;return a?r.createElement(u,{className:l},t):r.createElement(o,{...i,className:l,ref:n},t)})},84646:function(e,t,n){n.d(t,{HeaderNavigation:function(){return u}});var r=n(31311);n(31810);var o=n(52432),a=n(37658),l=n(86430),i=n(13868);let c={headerNavigation:"flow--header-navigation",link:"flow--header-navigation--link",button:"flow--header-navigation--button",light:"flow--header-navigation--light",dark:"flow--header-navigation--dark"},u=e=>{let{children:t,className:n,color:u="primary",...s}=e,d=(0,l.Z)(c.headerNavigation,c[u],n),m={Link:{wrapWith:r.createElement("li",null),className:c.link,unstyled:!0,children:(0,a.d)(e=>r.createElement(i.E,null,e.children))},Button:{className:c.button,color:u,variant:"plain",wrapWith:r.createElement("li",null)}};return r.createElement("nav",{className:d,role:"navigation",...s},r.createElement("ul",null,r.createElement(o.P,{props:m},t)))}},85228:function(e,t,n){n.d(t,{I:function(){return l}});var r=n(31311),o=n(19400),a=n(13389);let l=e=>r.createElement(a.I,{...e},r.createElement(o.Z,null))},86860:function(e,t,n){n.d(t,{I:function(){return i},a:function(){return c}});var r=n(31311),o=n(97160),a=n(30085),l=n(13389);let i=e=>r.createElement(l.I,{...e},r.createElement(o.Z,null)),c=e=>r.createElement(l.I,{...e},r.createElement(a.Z,null))},35930:function(e,t,n){n.d(t,{I:function(){return l}});var r=n(31311),o=n(71938),a=n(13389);let l=e=>r.createElement(a.I,{...e},r.createElement(o.Z,null))},16949:function(e,t,n){n.d(t,{I:function(){return l}});var r=n(31311),o=n(99169),a=n(13389);let l=e=>r.createElement(a.I,{...e},r.createElement(o.Z,null))},69051:function(e,t,n){n.d(t,{I:function(){return l}});var r=n(31311),o=n(50500),a=n(13389);let l=e=>r.createElement(a.I,{...e},r.createElement(o.Z,null))},49025:function(e,t,n){n.d(t,{I:function(){return l}});var r=n(31311),o=n(748),a=n(13389);let l=e=>r.createElement(a.I,{...e},r.createElement(o.Z,null))},28427:function(e,t,n){n.d(t,{I:function(){return l}});var r=n(31311),o=n(19452),a=n(13389);let l=e=>r.createElement(a.I,{...e},r.createElement(o.Z,null))},17645:function(e,t,n){n.d(t,{I:function(){return l}});var r=n(31311),o=n(14349),a=n(13389);let l=e=>r.createElement(a.I,{...e},r.createElement(o.Z,null))},3929:function(e,t,n){n.d(t,{I:function(){return l}});var r=n(31311),o=n(5410),a=n(13389);let l=e=>r.createElement(a.I,{...e},r.createElement(o.Z,null))},83304:function(e,t,n){n.d(t,{I:function(){return l}});var r=n(31311),o=n(74401),a=n(13389);let l=e=>r.createElement(a.I,{...e},r.createElement(o.Z,null))},93829:function(e,t,n){n.d(t,{I:function(){return i},a:function(){return c}});var r=n(31311),o=n(52830),a=n(96275),l=n(13389);let i=e=>r.createElement(l.I,{...e},r.createElement(o.Z,null)),c=e=>r.createElement(l.I,{...e},r.createElement(a.Z,null))},5748:function(e,t,n){n.d(t,{I:function(){return c},a:function(){return i}});var r=n(31311),o=n(77052),a=n(86668),l=n(13389);let i=e=>r.createElement(l.I,{...e},r.createElement(o.Z,null)),c=e=>r.createElement(l.I,{...e},r.createElement(a.Z,null))},70400:function(e,t,n){n.d(t,{I:function(){return l}});var r=n(31311),o=n(48500),a=n(13389);let l=e=>r.createElement(a.I,{...e},r.createElement(o.Z,null))},71167:function(e,t,n){n.d(t,{I:function(){return c},a:function(){return i}});var r=n(31311),o=n(19452),a=n(19400),l=n(13389);let i=e=>r.createElement(l.I,{...e},r.createElement(o.Z,null)),c=e=>r.createElement(l.I,{...e},r.createElement(a.Z,null))},13647:function(e,t,n){n.r(t),n.d(t,{IconApp:function(){return ex},IconBackLink:function(){return eA},IconBackup:function(){return eS},IconCalendar:function(){return e_},IconCamera:function(){return ek},IconChangelog:function(){return eO},IconCheck:function(){return es.I},IconCheckboxChecked:function(){return ed.I},IconCheckboxEmpty:function(){return ed.a},IconCheckboxIndeterminate:function(){return em.I},IconChevronDown:function(){return ef.I},IconChevronLeft:function(){return eT},IconChevronRight:function(){return eh.I},IconChevronUp:function(){return eE.I},IconClock:function(){return eD},IconClose:function(){return eI.I},IconCode:function(){return eF},IconContextMenu:function(){return ep.I},IconContractPartner:function(){return eB},IconContractPosition:function(){return eM},IconCopy:function(){return ev.I},IconCronjob:function(){return eL},IconCustomer:function(){return ez},IconDanger:function(){return eg.I},IconDashboard:function(){return eR},IconDatabase:function(){return eH},IconDelete:function(){return eW},IconDomain:function(){return eV},IconEdit:function(){return ej},IconEmail:function(){return eG},IconExtension:function(){return eU},IconExternalLink:function(){return eq},IconFailed:function(){return ew.a},IconFilter:function(){return eK},IconGrid:function(){return eX},IconHide:function(){return eJ},IconHome:function(){return eQ},IconInbox:function(){return eY},IconInfo:function(){return eb.I},IconInvoice:function(){return e$},IconList:function(){return e1},IconLock:function(){return e0},IconLockOpen:function(){return e3},IconLogout:function(){return e2},IconMaximize:function(){return e8},IconMember:function(){return e4},IconMenu:function(){return e5},IconMinimize:function(){return e9},IconMinus:function(){return eC.I},IconMittwald:function(){return tC},IconNotification:function(){return e6},IconNumber:function(){return e7},IconOrder:function(){return te},IconPayment:function(){return tt},IconPending:function(){return ey.I},IconPerformance:function(){return tn},IconPlus:function(){return eC.a},IconProject:function(){return tr},IconRadioOff:function(){return eP.a},IconRadioOn:function(){return eP.I},IconRefresh:function(){return to},IconSave:function(){return ta},IconSearch:function(){return eZ.I},IconSearchEngine:function(){return tl},IconServer:function(){return ti},IconSettings:function(){return tc},IconShare:function(){return tu},IconShow:function(){return ts},IconSorting:function(){return td},IconSpamProtectionOff:function(){return tm},IconSpamProtectionOn:function(){return tf},IconSshSftp:function(){return th},IconStar:function(){return tE},IconStarFilled:function(){return tI},IconSubdomain:function(){return tp},IconSucceeded:function(){return ew.I},IconSuccess:function(){return eN.I},IconSupport:function(){return tv},IconTerminate:function(){return tg},IconTicket:function(){return tw},IconUser:function(){return tb},IconWarning:function(){return eN.a}});var r=n(31311),o=n(51306),a=n(52394),l=n(84607),i=n(25459),c=n(86880),u=n(74253),s=n(99693),d=n(64353),m=n(70575),f=n(3500),h=n(15608),E=n(16777),I=n(83402),p=n(39420),v=n(55520),g=n(51393),w=n(22340),b=n(10569),C=n(49308),y=n(63173),P=n(10195),Z=n(70993),N=n(80802),x=n(45793),A=n(90360),S=n(4513),k=n(78408),O=n(44746),T=n(68341),D=n(45711),F=n(61539),B=n(3620),M=n(60598),L=n(51651),z=n(91472),R=n(13907),H=n(4098),_=n(73744),W=n(20647),V=n(77226),j=n(97171),G=n(66210),U=n(56480),q=n(78254),K=n(32625),X=n(63216),J=n(51421),Q=n(66807),Y=n(64799),$=n(99574),ee=n(54816),et=n(75218),en=n(78018),er=n(94695),eo=n(75144),ea=n(12311),el=n(54514),ei=n(91357),ec=n(91460),eu=n(13389),es=n(85228),ed=n(86860),em=n(35930),ef=n(16949),eh=n(69051),eE=n(49025),eI=n(28427),ep=n(17645),ev=n(3929),eg=n(40889),ew=n(71167),eb=n(79350),eC=n(93829),ey=n(83304),eP=n(5748),eZ=n(70400),eN=n(9706);let ex=e=>r.createElement(eu.I,{...e},r.createElement(o.Z,null)),eA=e=>r.createElement(eu.I,{...e},r.createElement(a.Z,null)),eS=e=>r.createElement(eu.I,{...e},r.createElement(l.Z,null)),ek=e=>r.createElement(eu.I,{...e},r.createElement(i.Z,null)),eO=e=>r.createElement(eu.I,{...e},r.createElement(c.Z,null)),eT=e=>r.createElement(eu.I,{...e},r.createElement(u.Z,null)),eD=e=>r.createElement(eu.I,{...e},r.createElement(s.Z,null)),eF=e=>r.createElement(eu.I,{...e},r.createElement(d.Z,null)),eB=e=>r.createElement(eu.I,{...e},r.createElement(m.Z,null)),eM=e=>r.createElement(eu.I,{...e},r.createElement(f.Z,null)),eL=e=>r.createElement(eu.I,{...e},r.createElement(h.Z,null)),ez=e=>r.createElement(eu.I,{...e},r.createElement(E.Z,null)),eR=e=>r.createElement(eu.I,{...e},r.createElement(I.Z,null)),eH=e=>r.createElement(eu.I,{...e},r.createElement(p.Z,null)),e_=e=>r.createElement(eu.I,{...e},r.createElement(v.Z,null)),eW=e=>r.createElement(eu.I,{...e},r.createElement(g.Z,null)),eV=e=>r.createElement(eu.I,{...e},r.createElement(w.Z,null)),ej=e=>r.createElement(eu.I,{...e},r.createElement(b.Z,null)),eG=e=>r.createElement(eu.I,{...e},r.createElement(C.Z,null)),eU=e=>r.createElement(eu.I,{...e},r.createElement(y.Z,null)),eq=e=>r.createElement(eu.I,{...e},r.createElement(P.Z,null)),eK=e=>r.createElement(eu.I,{...e},r.createElement(Z.Z,null)),eX=e=>r.createElement(eu.I,{...e},r.createElement(N.Z,null)),eJ=e=>r.createElement(eu.I,{...e},r.createElement(x.Z,null)),eQ=e=>r.createElement(eu.I,{...e},r.createElement(A.Z,null)),eY=e=>r.createElement(eu.I,{...e},r.createElement(S.Z,null)),e$=e=>r.createElement(eu.I,{...e},r.createElement(k.Z,null)),e1=e=>r.createElement(eu.I,{...e},r.createElement(O.Z,null)),e0=e=>r.createElement(eu.I,{...e},r.createElement(T.Z,null)),e3=e=>r.createElement(eu.I,{...e},r.createElement(D.Z,null)),e2=e=>r.createElement(eu.I,{...e},r.createElement(F.Z,null)),e8=e=>r.createElement(eu.I,{...e},r.createElement(B.Z,null)),e4=e=>r.createElement(eu.I,{...e},r.createElement(M.Z,null)),e5=e=>r.createElement(eu.I,{...e},r.createElement(L.Z,null)),e9=e=>r.createElement(eu.I,{...e},r.createElement(z.Z,null)),e6=e=>r.createElement(eu.I,{...e},r.createElement(R.Z,null)),e7=e=>r.createElement(eu.I,{...e},r.createElement(H.Z,null)),te=e=>r.createElement(eu.I,{...e},r.createElement(_.Z,null)),tt=e=>r.createElement(eu.I,{...e},r.createElement(W.Z,null)),tn=e=>r.createElement(eu.I,{...e},r.createElement(V.Z,null)),tr=e=>r.createElement(eu.I,{...e},r.createElement(j.Z,null)),to=e=>r.createElement(eu.I,{...e},r.createElement(G.Z,null)),ta=e=>r.createElement(eu.I,{...e},r.createElement(U.Z,null)),tl=e=>r.createElement(eu.I,{...e},r.createElement(q.Z,null)),ti=e=>r.createElement(eu.I,{...e},r.createElement(K.Z,null)),tc=e=>r.createElement(eu.I,{...e},r.createElement(X.Z,null)),tu=e=>r.createElement(eu.I,{...e},r.createElement(J.Z,null)),ts=e=>r.createElement(eu.I,{...e},r.createElement(Q.Z,null)),td=e=>r.createElement(eu.I,{...e},r.createElement(Y.Z,null)),tm=e=>r.createElement(eu.I,{...e},r.createElement($.Z,null)),tf=e=>r.createElement(eu.I,{...e},r.createElement(ee.Z,null)),th=e=>r.createElement(eu.I,{...e},r.createElement(et.Z,null)),tE=e=>r.createElement(eu.I,{...e},r.createElement(en.Z,null)),tI=e=>r.createElement(eu.I,{...e},r.createElement(er.Z,null)),tp=e=>r.createElement(eu.I,{...e},r.createElement(eo.Z,null)),tv=e=>r.createElement(eu.I,{...e},r.createElement(ea.Z,null)),tg=e=>r.createElement(eu.I,{...e},r.createElement(el.Z,null)),tw=e=>r.createElement(eu.I,{...e},r.createElement(ei.Z,null)),tb=e=>r.createElement(eu.I,{...e},r.createElement(ec.Z,null)),tC=e=>r.createElement(eu.I,{...e},'<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 1746.7 1232" focusable="false" role="img" aria-hidden="true">\n  <path d="M1117.2,285.4c-102.5,0-226.5,52.1-291.3,160c-46.7-100.7-134.8-160-276.9-160 c-101.4,0-201.2,50.8-256.1,124.1l-29.8-151.3L17.4,306.3l29.9,152.2l0.1,2.4l-0.1,741.3h240.9V736.7 c0-118.7,61.1-222.9,183.4-222.9C601,513.8,628,601.9,628,720.6v481.8h240.9V727.7c0-118.7,64.7-213.9,183.4-213.9 c127.6,0,156.4,88.1,156.4,206.8v499.8l240.9-47.2V690C1449.8,459.8,1370.7,285.4,1117.2,285.4z"></path>\n  <path  d="M1569.2,23.7c-83,0-152.4,69.5-152.4,154.3c0,83,69.5,152.4,152.4,152.4c84.9,0,154.4-69.5,154.4-152.4 C1723.5,93.1,1654.1,23.7,1569.2,23.7z"></path>\n</svg>\n')},27912:function(e,t,n){n.d(t,{L:function(){return d}});var r=n(31311),o=n(68321),a=n(86430),l=n(18426);n(31810);var i=n(35592),c=n(98844);let u={label:"flow--label",disabled:"flow--label--disabled"},s={"de-DE":{"label.optional":"(optional)"},"en-EN":{"label.optional":"(optional)"}},d=(0,c.f)("Label",e=>{let{children:t,className:n,optional:c,isDisabled:d,refProp:m,unstyled:f=!1,...h}=e,E=(0,i.q)(s),I=f?n:(0,a.Z)(u.label,d&&u.disabled,n),p=" "+E.format("label.optional");return r.createElement(l.C,null,r.createElement(o._,{...h,className:I,ref:m},t,c&&p))})},38604:function(e,t,n){n.d(t,{_:function(){return r.L}});var r=n(27912)},23315:function(e,t,n){n.d(t,{L:function(){return l}});var r=n(31311);n(13389);var o=n(83304),a=n(86430);let l=e=>{let{className:t,...n}=e,l=(0,a.Z)("flow--loading-spinner",t);return r.createElement(o.I,{className:l,...n})}},6265:function(e,t,n){n.d(t,{Modal:function(){return g},ModalTrigger:function(){return w}});var r=n(31311),o=n(86430);n(31810);var a=n(52432),l=n(77328),i=n(98844),c=n(70882),u=n(66423),s=n(44157),d=n(13805),m=n(51356),f=n(30762),h=n(71108);n(13389);var E=n(28427),I=n(26986);let p={modal:"flow--modal",offCanvas:"flow--modal--off-canvas",header:"flow--modal--header",content:"flow--modal--content",actionGroup:"flow--modal--action-group","size-s":"flow--modal--size-s","size-m":"flow--modal--size-m","modal-zoom":"flow--modal--modal-zoom","modal-slide-in":"flow--modal--modal-slide-in","modal-slide-up":"flow--modal--modal-slide-up",closeButton:"flow--modal--close-button"},v=e=>{let{controller:t,children:n,isDismissable:a=!0,className:l}=e,i=(0,s.u)("Modal",{reuseControllerFromContext:!0}),m=null!=t?t:i,f=m.useIsOpen(),h=(0,o.Z)("flow--modal-overlay--overlay",l);return r.createElement(c.ZA,{className:h,isDismissable:a,isOpen:f,onOpenChange:e=>m.setOpen(e)},r.createElement(c.u_,null,r.createElement(u.Vq,null,r.createElement(d.O,{type:"Modal",controller:m},n))))},g=(0,i.f)("Modal",e=>{let{size:t="s",offCanvas:n,controller:i,children:c,refProp:u,className:s,...d}=e,I=(0,o.Z)(n?p.offCanvas:p.modal,p["size-".concat(t)],s),g={Content:{className:p.content},Heading:{level:2,slot:"title",tunnelId:"heading"},ActionGroup:{className:p.actionGroup}};return r.createElement(v,{className:I,controller:i,...d},r.createElement(a.P,{props:g},r.createElement(l.NN,null,r.createElement(m.H,{className:p.header},r.createElement(l.Rz,{id:"heading"}),n&&r.createElement(f.A,{closeOverlay:"Modal"},r.createElement(h.B,{variant:"plain",color:"secondary",className:p.closeButton},r.createElement(E.I,null)))),c)))}),w=e=>{let{children:t,...n}=e;return r.createElement(I.O,{overlayType:"Modal",...n,component:u.hg},t)}},61065:function(e,t,n){n.d(t,{KB:function(){return m},W_:function(){return d},ZP:function(){return d}});var r=n(31311),o=n(86430),a=n(86251),l=n(26735);n(31810);var i=n(52432),c=n(77328),u=n(83999),s=n(24457);let d=e=>{let{className:t,children:n,...c}=e,u=(0,o.Z)("flow--navigation",t),s=!!(0,a.d)(n,m),d={Link:{wrapWith:r.createElement("li",null),className:"flow--navigation--item",unstyled:!0,Text:{className:"flow--navigation--text"},Icon:{className:"flow--navigation--icon"}}};return r.createElement("nav",{className:u,role:"navigation",...c},r.createElement(i.P,{props:d,mergeInParentContext:!0},r.createElement(l.W,{if:!s},r.createElement("ul",null,n))))},m=e=>{let{children:t,className:n,collapsable:a,...l}=e,d=(0,o.Z)("flow--navigation--navigation-group",n),m=(0,r.useId)(),f={Label:{id:m,className:"flow--navigation--navigation-group--label","aria-hidden":!0},Link:{tunnelId:"links"}};return a?r.createElement(i.P,{mergeInParentContext:!0,props:f},r.createElement(c.NN,null,r.createElement(u.A,{defaultExpanded:!0,className:d},t,r.createElement(s.C,{clearPropsContext:!1},r.createElement("ul",null,r.createElement(c.Rz,{id:"links"})))))):r.createElement(i.P,{mergeInParentContext:!0,props:f},r.createElement(c.NN,null,r.createElement("section",{"aria-labelledby":m,className:d,...l},r.createElement(i.P,{mergeInParentContext:!0,props:f},t,r.createElement(c.Rz,{id:"Label"}),r.createElement("ul",null,r.createElement(c.Rz,{id:"links"}))))))}},65298:function(e,t,n){n.d(t,{NotificationProvider:function(){return y},S:function(){return C}});var r=n(31311),o=n(21879),a=n(5728),l=n(29738),i=n(54489),c=n(86430),u=n(69889),s=n(92171),d=n(87503),m=n(49097),f=n(78292),h=Object.defineProperty,E=(e,t,n)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,I=(e,t,n)=>E(e,"symbol"!=typeof t?t+"":t,n);class p{start(e,t){if(this.startedAt)throw Error("Timer already started");this.duration=l.nL.fromDurationLike(e),this.onDone=t,this.startTimeout(this.duration)}restart(){this.stop(),this.startTimeout(this.duration)}pause(){this.clearTimeout();let e=l.ou.now();this.pausedAt=e,this.startedAt||(this.startedAt=e)}resume(){if(this.startedAt){if(this.pausedAt){let e=this.pausedAt.diff(this.startedAt),t=this.duration.minus(e);this.startTimeout(t)}}else throw Error("Timer not paused")}stop(){this.clearTimeout(),this.startedAt=void 0,this.pausedAt=void 0}get state(){return this.pausedAt?"paused":this.startedAt?"running":"idle"}clearTimeout(){this.runningTimeoutId&&window.clearTimeout(this.runningTimeoutId),this.runningTimeoutId=void 0}startTimeout(e){this.startedAt=l.ou.now(),this.pausedAt=void 0,this.runningTimeoutId=window.setTimeout(()=>{this.stop(),this.onDone&&this.onDone()},e.toMillis())}constructor(){I(this,"duration",l.nL.fromDurationLike(0)),I(this,"onDone"),I(this,"startedAt"),I(this,"pausedAt"),I(this,"runningTimeoutId")}}class v{static useNew(){return(0,r.useRef)(new v).current}useNotifications(){return(0,o.u)(()=>Array.from(this.notificationsData.values()))}add(e){let t=this.id++,n={id:t,createdAt:Date.now(),autoCloseTimer:new p};this.notificationsData.set(t,{element:e,meta:n}),e.props.autoClose&&n.autoCloseTimer.start({seconds:10},()=>{this.remove(t)})}remove(e){this.notificationsData.delete(e)}constructor(){I(this,"notificationsData",new Map),I(this,"id",0),(0,a.rC)(this,{notificationsData:a.LO.shallow,add:a.aD.bound,remove:a.aD.bound})}}let g=e=>{let{notification:t,controller:n}=e;return(0,r.cloneElement)(t.element,{onMouseEnter:()=>{t.meta.autoCloseTimer.pause()},onMouseLeave:()=>{t.meta.autoCloseTimer.resume()},onClose:()=>{n.remove(t.meta.id)},onFocus:()=>{t.meta.autoCloseTimer.pause()},onBlur:()=>{t.meta.autoCloseTimer.resume()}})},w=e=>{let{className:t,...n}=e,o=C(),a=o.useNotifications(),l=(0,f.Av)(),h=(0,c.Z)("flow--notification-provider--notification-container",t),E=r.createElement(u.X,{features:s.H},r.createElement("div",{className:h,...n},r.createElement(d.M,null,a.map(e=>r.createElement(m.m.div,{className:"flow--notification-provider--notification",key:e.meta.id,initial:{opacity:0,x:200},animate:{opacity:1,x:0},exit:{opacity:0,x:200,height:0,paddingBottom:0},transition:{bounce:0}},r.createElement(g,{notification:e,controller:o}))))));return l?null:i.createPortal(E,document.body)},b=(0,r.createContext)(new v),C=()=>(0,r.useContext)(b),y=e=>{let{children:t,...n}=e,o=v.useNew();return r.createElement(b.Provider,{value:o},r.createElement(w,{...n}),t)}},13805:function(e,t,n){n.d(t,{O:function(){return a}});var r=n(31311),o=n(33022);let a=e=>{let{type:t,controller:n,children:a}=e,l=(0,o.u)();return r.createElement(o.o.Provider,{value:{...l,[t]:n}},a)}},26986:function(e,t,n){n.d(t,{O:function(){return i}});var r=n(31311),o=n(33022);n(31810);var a=n(52432),l=n(13805);let i=e=>{let{overlayType:t,isDefaultOpen:n=!1,component:i,children:c}=e,u=o.O.useNew(n),s=u.useIsOpen(),d={Button:{onPress:u.open}};return r.createElement(l.O,{type:t,controller:u},r.createElement(a.P,{props:d,mergeInParentContext:!0},r.createElement(i,{isOpen:s},c)))}},33022:function(e,t,n){n.d(t,{O:function(){return u},o:function(){return s},u:function(){return d}});var r=n(5728),o=n(21879),a=n(31311),l=Object.defineProperty,i=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t,n)=>i(e,"symbol"!=typeof t?t+"":t,n);class u{static useNew(e){return(0,a.useRef)(new u(e)).current}open(){this.isOpen=!0}close(){this.isOpen=!1}toggle(){this.isOpen=!this.isOpen}setOpen(e){this.isOpen=e}useIsOpen(){return(0,o.u)(()=>this.isOpen)}constructor(e=!1){c(this,"isOpen"),(0,r.rC)(this,{isOpen:r.LO,open:r.aD.bound,close:r.aD.bound,toggle:r.aD.bound,setOpen:r.aD.bound}),this.isOpen=e}}let s=(0,a.createContext)({}),d=()=>(0,a.useContext)(s)},11633:function(e,t,n){n.d(t,{p:function(){return r.u}}),n(33022);var r=n(44157)},86251:function(e,t,n){n.d(t,{a:function(){return c},d:function(){return i}});var r=n(31311),o=n(13672),a=n(83163);let l=(e,t)=>!!(0,r.isValidElement)(e)&&("string"==typeof t?"string"==typeof e.type&&e.type===t:e.type===t),i=(e,t)=>(0,o.Z)(e,e=>l(e,t)),c=(e,t)=>{let n=[];return(0,a.Z)(e,e=>{l(e,t)&&n.push(e)}),n}},37658:function(e,t,n){n.d(t,{d:function(){return r}});let r=e=>({__dynamicProp:e})},9655:function(e,t,n){n.d(t,{A:function(){return d},a:function(){return u},g:function(){return f},u:function(){return m}});var r=n(31311),o=n(5728),a=n(21879),l=Object.defineProperty,i=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t,n)=>i(e,"symbol"!=typeof t?t+"":t,n);class u{static useNew(){return(0,r.useRef)(new u).current}static useRegisterState(e){let t=m();(0,r.useEffect)(()=>(null==t||t.addState(e),()=>{null==t||t.removeState(e)}),[t,e])}addState(e){this.states.add(e)}removeState(e){this.states.delete(e)}useIsBusy(){return(0,a.u)(()=>this.isBusy)}get isBusy(){for(let e of this.states)if(e.isBusy)return!0;return!1}constructor(){c(this,"states",new Set),(0,o.rC)(this,{states:o.LO,addState:o.aD,removeState:o.aD,isBusy:o.Fl})}}let s=(0,r.createContext)(void 0),d=e=>{let{children:t}=e,n=u.useNew();return r.createElement(s.Provider,{value:n},t)},m=()=>{var e;let t=u.useNew();return null!==(e=(0,r.useContext)(s))&&void 0!==e?e:t},f=e=>{let{slot:t,...n}=e,r=void 0===n.color||"primary"===n.color||"danger"===n.color||"accent"===n.color?"primary":"abort";return null!=t?t:r}},92023:function(e,t,n){n.d(t,{LinkProvider:function(){return i}});var r=n(31311),o=n(1404),a=n(60739);let l=(0,r.forwardRef)(function(e,t){let{href:n,...a}=e;return r.createElement(o.default,{href:null!=n?n:"#",...a,ref:t})}),i=e=>r.createElement(a.L,{value:{linkComponent:l}},e.children)},44256:function(e,t,n){n.d(t,{u:function(){return o}});var r=n(31311);let o=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=(0,r.useRef)(e);(0,r.useEffect)(()=>{o.current!==e&&t(),o.current=e},[e,t,...n])}},44157:function(e,t,n){n.d(t,{u:function(){return o}});var r=n(33022);let o=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{reuseControllerFromContext:n=!0,defaultOpen:o}=t,a=r.O.useNew(o),l=(0,r.u)()[e];return n&&l?l:a}},21879:function(e,t,n){n.d(t,{u:function(){return a}});var r=n(5728),o=n(31311);let a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],[n,a]=(0,o.useState)(e());return(0,o.useEffect)(()=>(0,r.EH)(()=>{a(e())}),t),n}}}]);
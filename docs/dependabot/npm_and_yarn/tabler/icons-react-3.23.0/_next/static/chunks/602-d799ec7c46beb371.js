"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[602],{89567:(e,t,n)=>{n.d(t,{m:()=>a});var l=n(19135);class a{getTitle(){var e,t;return null!==(t=null!==(e=this.mdxSource.frontmatter.title)&&void 0!==e?e:this.mdxSource.frontmatter.component)&&void 0!==t?t:(0,l.A)(this.slugs[this.slugs.length-1])}getGitHubUrl(){var e;let t=this.mdxSource.frontmatter.component,n=null!==(e=this.mdxSource.frontmatter.gitHubComponentPath)&&void 0!==e?e:"components/".concat(t);return"https://github.com/mittwald/flow/tree/main/packages/components/src/".concat(n)}getNavTitle(){var e;return null!==(e=this.mdxSource.frontmatter.navTitle)&&void 0!==e?e:this.getTitle()}matchesSlugs(e){return a.pathnameFromSlug(e)===this.pathname}static pathnameFromSlug(e){return["",...e].join("/")}getExample(e){let t=this.examples[e];if(void 0===t)throw Error("Could not find example ".concat(e," in ").concat(this.filename));return t}serialize(){return{mdxSource:this.mdxSource,examples:this.examples,slugs:this.slugs,filename:this.filename}}static deserialize(e){let{filename:t,mdxSource:n,examples:l,slugs:r}=e;return new a(t,r,n,l)}constructor(e,t,n,l){this.filename=e,this.slugs=t,this.pathname=a.pathnameFromSlug(t),this.id=e,this.mdxSource=n,this.examples=l}}},13684:(e,t,n)=>{n.d(t,{A:()=>m});var l=n(58233),a=n(97668);n(3590);var r=n(6194),o=n(22703),i=n(76515);n(91004);var c=n(59374),s=n(5105),d=n(21892);let u={accordion:"flow--accordion",header:"flow--accordion--header",headerButton:"flow--accordion--header-button",content:"flow--accordion--content",contentInner:"flow--accordion--content-inner",chevron:"flow--accordion--chevron",outline:"flow--accordion--outline",expanded:"flow--accordion--expanded"},m=e=>{let{children:t,className:n,defaultExpanded:m=!1,variant:h="default",...f}=e,[E,p]=(0,l.useState)(m),I=(0,a.A)(u.accordion,E&&u.expanded,n,"outline"===h&&u.outline),v=(0,l.useId)(),g=(0,l.useId)(),A=e=>l.createElement(i.B,{unstyled:!0,"aria-expanded":E,className:u.headerButton,onPress:()=>p(e=>!e),"aria-controls":g},e,l.createElement(c.I,{className:u.chevron})),w={Content:{className:u.contentInner,tunnelId:"content"},Heading:{className:u.header,level:4,children:(0,o.d)(e=>A(e.children))},Label:{className:u.header,children:(0,o.d)(e=>A(e.children))}};return l.createElement("div",{...f,className:I},l.createElement(r.z,{mergeInParentContext:!0,props:w,dependencies:[E]},l.createElement(s.Eg,null,t,l.createElement("div",{"aria-labelledby":v,id:g,role:"region",hidden:!E,className:u.content},l.createElement(d.A,{isActive:E,inactiveDelay:1e3},l.createElement(s.dJ,{id:"content"}))))))}},78604:(e,t,n)=>{n.d(t,{A:()=>k,a:()=>N});var l=n(58233),a=n(63395),r=n(74508),o=n(28584),i=n(12904),c=n(50777);n(3590);var s=n(6194),d=n(22703),u=n(39905),m=Object.defineProperty,h=(e,t,n)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t,n)=>h(e,"symbol"!=typeof t?t+"":t,n);let E=(0,l.createContext)(void 0),p=E.Provider,I=e=>new Promise(t=>setTimeout(t,e)),v={pending:1e3,succeeded:1500,failed:2e3};class g{static useNew(){return(0,l.useRef)(new g).current}updateState(e){this.state=e}useValue(){return(0,i.u)(()=>this.state,[this])}useIsBusy(){return(0,i.u)(()=>this.isBusy,[this])}get isBusy(){return"isIdle"!==this.state}onAsyncStart(){this.isAsync=!0,this.updateState("isExecuting"),this.setPendingTimeout=window.setTimeout(()=>this.startPending(),v.pending)}async onSucceeded(){await this.onDone()}async onFailed(e){this.error=null!=e?e:Error("Unknown error"),await this.onDone()}withFeedback(e){return this.showFeedback=e,this}async startFailedFeedback(){this.updateState("isFailed"),await I(v.failed),this.resetAfterDone()}async startSucceededFeedback(){this.updateState("isSucceeded"),await I(v.succeeded),this.resetAfterDone()}resetAfterDone(){this.updateState("isIdle"),this.isAsync=!1,this.error=void 0}async onDone(){this.setPendingTimeout&&window.clearTimeout(this.setPendingTimeout),this.error?await this.startFailedFeedback():!1!==this.showFeedback&&(this.showFeedback||this.isAsync)?await this.startSucceededFeedback():this.resetAfterDone()}startPending(){this.updateState("isPending")}constructor(){f(this,"showFeedback"),f(this,"state","isIdle"),f(this,"setPendingTimeout"),f(this,"error"),f(this,"isAsync",!1),(0,o.Gn)(this,{state:o.sH,updateState:o.XI,isBusy:o.EW})}}let A=e=>function(){for(var t=arguments.length,n=Array(t),l=0;l<t;l++)n[l]=arguments[l];let a=[...e],r=a.shift();if(r){let e=r(...n),t=()=>0===a.length?e:A(a)(...n);return e instanceof Promise?e.then(t):t()}},w=()=>{},b=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{onSync:n=w,onAsync:l=w,then:a=w,catch:r=w,finally:o=w}=t;try{let t=e();return t instanceof Promise?(l(),t.then(a).catch(r).finally(o)):(n(),a(t),o(),t)}catch(e){n(),r(e),o()}},C=()=>{};class y{addAction(e){this.actions.push(e)}async executeBatch(e){let t;if(0===this.actions.length)return;let n=this.actions[this.actions.length-1].actionProps.showFeedback,l=this.baseAction.state.withFeedback(!this.baseAction.needsConfirmation&&n),a=A(this.actions.map(e=>(function(e){var t,n,l,a;if(e.needsConfirmation)return e.confirmationModalController.open;let r=t=>"string"==typeof t?e.getOverlayController(t):t,{action:o,toggleOverlay:i,closeOverlay:c,openOverlay:s}=e.actionProps;return null!==(a=o||(s?null==(t=r(s))?void 0:t.open:c?null==(n=r(c))?void 0:n.close:i?null==(l=r(i))?void 0:l.toggle:C))&&void 0!==a?a:C})(e)));if(await b(()=>a(...e),{onAsync:()=>l.onAsyncStart(),then:()=>l.onSucceeded(),catch:e=>{l.onFailed(e),t=e}}),t)throw t}constructor(e){f(this,"actions",[]),f(this,"baseAction"),this.baseAction=e}}class x{constructor(e){var t=this;f(this,"action"),f(this,"execute",function(){for(var e=arguments.length,n=Array(e),l=0;l<e;l++)n[l]=arguments[l];let a=t.getBatchedActions();(async()=>{for(let e of a)await e.executeBatch(n)})().catch(e=>console.error(e))}),f(this,"getBatchedActions",()=>{let e=this.action,t=[],n=new y(this.action),l=0;for(;e;){let{action:a,break:r,skip:o}=e.actionProps;if(e.needsConfirmation){n.addAction(e);break}if(o){l=!0===o?1:o,e=e.parentAction;continue}if(l>0){e=e.parentAction,l--;continue}if(r)break;a||(t.push(n),n=new y(this.action)),n.addAction(e),e=e.parentAction}return t.push(n),t}),this.action=e}}class N{static useNew(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(0,l.useContext)(E);return new N({parentAction:n,overlayContext:(0,a.u)(),confirmationModalController:a.O.useNew(),needsConfirmation:!1,actionProps:e,state:g.useNew(),...t})}static use(){let e=(0,l.useContext)(E);return r(!!e,"Action context is not defined"),c.a.useRegisterState(e.state),e}static useConfirmationAction(){let e=N.use();return new N({actionProps:e.actionProps,confirmationModalController:e.confirmationModalController,overlayContext:e.overlayContext,state:e.state,needsConfirmation:!1,parentAction:N.useNew({closeOverlay:e.confirmationModalController},{parentAction:e.parentAction})})}getOverlayController(e){var t,n;let l=t=>void 0===t?void 0:t?this.overlayContext[e]:void 0;return null!==(n=null!==(t=l(this.actionProps.openOverlay))&&void 0!==t?t:l(this.actionProps.closeOverlay))&&void 0!==n?n:l(this.actionProps.toggleOverlay)}constructor(e){var t=this;f(this,"state"),f(this,"needsConfirmation"),f(this,"actionProps"),f(this,"parentAction"),f(this,"confirmationModalController"),f(this,"overlayContext"),f(this,"execute",function(){for(var e=arguments.length,n=Array(e),l=0;l<e;l++)n[l]=arguments[l];new x(t).execute(...n)});let{actionProps:n,needsConfirmation:l,parentAction:a,overlayContext:r,confirmationModalController:o,state:i}=e;this.actionProps=n,this.parentAction=a,this.confirmationModalController=o,this.needsConfirmation=l,this.overlayContext=r,this.state=i}}let S=e=>(0,u.u)()[e],P=e=>"actionConfirm"===S("Modal")?(0,c.g)(e):void 0,O=e=>{let t=N.use(),n=t.state.useValue(),l="primary"===P(e),a=t.confirmationModalController.useIsOpen();return t.needsConfirmation&&a&&!l?"isIdle":n},F={onPress:(0,d.d)(e=>{let t=N.use(),n=N.useConfirmationAction(),l="primary"===P(e);return"abort"===P(e)?t.confirmationModalController.close:l?n.execute:t.execute}),isPending:(0,d.d)(e=>"isPending"===O(e)),isSucceeded:(0,d.d)(e=>"isSucceeded"===O(e)),isFailed:(0,d.d)(e=>"isFailed"===O(e)),"aria-disabled":(0,d.d)(e=>{let t=O(e),n=(0,c.u)().useIsBusy();return"isExecuting"===t||n})},k=(0,u.f)("Action",e=>{let{children:t,actionModel:n,...a}=e,r=N.useNew(a),o={Button:F,Link:{onPress:(0,d.d)(()=>N.use().execute)},MenuItem:{onAction:(0,d.d)(()=>N.use().execute)},Modal:{slot:(0,d.d)(e=>{let{slot:t}=e;return N.use().needsConfirmation="actionConfirm"===t,t}),isDismissable:(0,d.d)(e=>{let t=N.use().state.useValue();return"isExecuting"!==t&&"isPending"!==t&&e.isDismissable}),controller:(0,d.d)(()=>{let e=N.use();return e.needsConfirmation?e.confirmationModalController:e.getOverlayController("Modal")}),ActionGroup:{Button:F}}};return l.createElement(p,{value:null!=n?n:r},l.createElement(s.z,{props:o,mergeInParentContext:!0},t))})},21892:(e,t,n)=>{n.d(t,{A:()=>i});var l=n(58233),a=n(57204);let r=new Promise(()=>{}),o=(0,l.lazy)(()=>r),i=e=>{let{children:t,isActive:n=!0,inactiveDelay:r}=e,[i,c]=(0,l.useState)(n),s=(0,a.wR)();(0,l.useEffect)(()=>{if(r){if(n)c(!0);else{let e=setTimeout(()=>{c(!1)},r);return()=>{clearTimeout(e)}}}},[n,r]);let d=r?i:n;return s?d?t:null:l.createElement(l.Suspense,{fallback:null},!d&&l.createElement(o,null),t)}},76515:(e,t,n)=>{n.d(t,{B:()=>g});var l=n(58233),a=n(20771),r=n(97668),o=n(2581),i=n(6194);n(3590),n(91004);var c=n(59509),s=n(15742),d=n(46837),u=n(39905),m=n(92626),h=n(99898),f=n(67569);let E={button:"flow--button",outline:"flow--button--outline",content:"flow--button--content",stateIcon:"flow--button--state-icon",icon:"flow--button--icon",text:"flow--button--text",counterBadge:"flow--button--counter-badge",isSucceeded:"flow--button--is-succeeded",isFailed:"flow--button--is-failed",isPending:"flow--button--is-pending",plain:"flow--button--plain","size-s":"flow--button--size-s",primary:"flow--button--primary",solid:"flow--button--solid",ariaDisabled:"flow--button--aria-disabled",accent:"flow--button--accent",danger:"flow--button--danger",secondary:"flow--button--secondary",dark:"flow--button--dark",light:"flow--button--light",soft:"flow--button--soft",avatar:"flow--button--avatar"},p={"de-DE":{"action.isFailed":"Fehlgeschlagen","action.isPending":"Ausstehend...","action.isSucceeded":"Erfolgreich"},"en-EN":{"action.isFailed":"Failed","action.isPending":"Pending...","action.isSucceeded":"Succeeded"}},I=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(0,h.o)(p),{isPendingText:a=n.format("action.isPending"),isSucceededText:r=n.format("action.isSucceeded"),isFailedText:o=n.format("action.isFailed")}=t,i=(0,f.U)({"aria-live":"polite","aria-atomic":!1,"aria-relevant":"text additions",role:"status"});(0,l.useEffect)(()=>{"isPending"===e?i.speak(a):"isSucceeded"===e?i.speak(r):"isFailed"===e&&i.speak(o)},[e])},v=e=>((e.isPending||e.isSucceeded||e.isFailed||e["aria-disabled"])&&((e={...e}).onPress=void 0,e.onPressStart=void 0,e.onPressEnd=void 0,e.onPressChange=void 0,e.onPressUp=void 0,e.onKeyDown=void 0,e.onKeyUp=void 0),e),g=(0,u.f)("Button",e=>{let{color:t="primary",variant:n="solid",children:u,className:h,size:f="m",isPending:p,isSucceeded:g,isFailed:A,"aria-disabled":w,refProp:b,slot:C,ariaSlot:y,unstyled:x,...N}=e=v(e),S=x?h:(0,r.A)(E.button,p&&E.isPending,g&&E.isSucceeded,A&&E.isFailed,E["size-".concat(f)],E[t],E[n],h,w&&E.ariaDisabled);I(p?"isPending":g?"isSucceeded":A?"isFailed":"isIdle");let P={Icon:{className:E.icon,"aria-hidden":!0,size:f},Text:{className:E.text},Avatar:{className:E.avatar},CounterBadge:{className:E.counterBadge}},O=g?c.I:A?c.a:p?m.L:void 0,F=O&&l.createElement(O,{size:f,className:E.stateIcon});return l.createElement(o.C,null,l.createElement(a.$,{className:S,ref:b,slot:y,...N},l.createElement(i.z,{props:P},l.createElement(s.W,{if:!x},l.createElement("span",{className:E.content},l.createElement(s.W,{if:"string"==typeof u},l.createElement(d.T,{className:E.text},u))))),F))})},57502:(e,t,n)=>{n.d(t,{Button:()=>l.B});var l=n(76515)},94021:(e,t,n)=>{n.d(t,{C:()=>i});var l=n(58233),a=n(2581);n(3590);var r=n(39905),o=n(15742);let i=(0,r.f)("Content",e=>{let{children:t,elementType:n="div",refProp:r,clearPropsContext:i=!0,...c}=e;return l.createElement(o.W,{if:i},l.createElement(a.C,null,l.createElement(n,{ref:r,...c},t)))})},58907:(e,t,n)=>{n.d(t,{A:()=>l.C,Content:()=>l.C});var l=n(94021)},54498:(e,t,n)=>{n.d(t,{F:()=>d});var l=n(58233),a=n(12873),r=n(97668),o=n(2581);n(3590),n(91004);var i=n(17434),c=n(39905);let s={fieldError:"flow--field-error"},d=(0,c.f)("FieldError",e=>{let{children:t,className:n,refProp:c,...d}=e,u=(0,r.A)(s.fieldError,n);return l.createElement(o.C,null,l.createElement(a.b,{...d,className:u,ref:c},e=>{let{validationErrors:n}=e;return l.createElement(l.Fragment,null,l.createElement(i.I,{size:"s"}),l.createElement("span",null,t||n.join(" ")))}))})},42130:(e,t,n)=>{n.d(t,{f:()=>l});let l={formField:"flow--form-field",label:"flow--form-field--label",fieldError:"flow--form-field--field-error",customFieldError:"flow--form-field--custom-field-error",fieldDescription:"flow--form-field--field-description"}},91078:(e,t,n)=>{n.d(t,{H:()=>d});var l=n(58233),a=n(39905),r=n(97668);n(3590);var o=n(6194),i=n(5105);let c={sectionHeader:"flow--section--section-header",actions:"flow--section--section-header--actions"},s=e=>{let{children:t,className:n}=e,a=(0,r.A)(c.sectionHeader,n),s={Switch:{labelPosition:"leading",tunnelId:"actions"},Button:{size:"s",tunnelId:"actions"},ContextMenuTrigger:{tunnelId:"actions",Button:{tunnelId:null}},PopoverTrigger:{tunnelId:"actions",Button:{tunnelId:null}},ModalTrigger:{tunnelId:"actions",Button:{tunnelId:null}},ContextualHelpTrigger:{tunnelId:"actions",Button:{tunnelId:null}},Action:{tunnelId:"actions",Button:{tunnelId:null}},Heading:{level:2,className:c.heading},Link:{tunnelId:"actions"}};return l.createElement("header",{className:a},l.createElement(o.z,{props:s},l.createElement(i.Eg,null,t,l.createElement("div",{className:c.actions},l.createElement(i.dJ,{id:"actions"})))))},d=(0,a.f)("Header",e=>{let{children:t,refProp:n,elementType:a="header",renderSectionHeader:r,className:o,...i}=e;return r?l.createElement(s,{className:o},t):l.createElement(a,{...i,className:o,ref:n},t)})},61035:(e,t,n)=>{n.d(t,{Y:()=>l.H});var l=n(91078)},3373:(e,t,n)=>{n.d(t,{HeaderNavigation:()=>s});var l=n(58233);n(3590);var a=n(6194),r=n(22703),o=n(97668),i=n(46837);let c={headerNavigation:"flow--header-navigation",link:"flow--header-navigation--link",button:"flow--header-navigation--button",light:"flow--header-navigation--light",dark:"flow--header-navigation--dark"},s=e=>{let{children:t,className:n,color:s="primary",...d}=e,u=(0,o.A)(c.headerNavigation,c[s],n),m={Link:{wrapWith:l.createElement("li",null),className:c.link,unstyled:!0,children:(0,r.d)(e=>l.createElement(i.T,{emulateBoldWidth:!0},e.children))},Button:{className:c.button,color:s,variant:"plain",wrapWith:l.createElement("li",null)}};return l.createElement("nav",{className:u,role:"navigation",...d},l.createElement("ul",null,l.createElement(a.z,{props:m},t)))}},11831:(e,t,n)=>{n.d(t,{I:()=>i,a:()=>c});var l=n(58233),a=n(34638),r=n(35244),o=n(91004);let i=e=>l.createElement(o.I,{...e},l.createElement(a.A,null)),c=e=>l.createElement(o.I,{...e},l.createElement(r.A,null))},53952:(e,t,n)=>{n.d(t,{I:()=>o});var l=n(58233),a=n(79656),r=n(91004);let o=e=>l.createElement(r.I,{...e},l.createElement(a.A,null))},58658:(e,t,n)=>{n.d(t,{I:()=>i,a:()=>c});var l=n(58233),a=n(99163),r=n(11227),o=n(91004);let i=e=>l.createElement(o.I,{...e},l.createElement(a.A,null)),c=e=>l.createElement(o.I,{...e},l.createElement(r.A,null))},52211:(e,t,n)=>{n.d(t,{I:()=>o});var l=n(58233),a=n(97819),r=n(91004);let o=e=>l.createElement(r.I,{...e},l.createElement(a.A,null))},59374:(e,t,n)=>{n.d(t,{I:()=>o});var l=n(58233),a=n(83853),r=n(91004);let o=e=>l.createElement(r.I,{...e},l.createElement(a.A,null))},71878:(e,t,n)=>{n.d(t,{I:()=>o});var l=n(58233),a=n(35987),r=n(91004);let o=e=>l.createElement(r.I,{...e},l.createElement(a.A,null))},64153:(e,t,n)=>{n.d(t,{I:()=>o});var l=n(58233),a=n(19678),r=n(91004);let o=e=>l.createElement(r.I,{...e},l.createElement(a.A,null))},76034:(e,t,n)=>{n.d(t,{I:()=>o});var l=n(58233),a=n(94148),r=n(91004);let o=e=>l.createElement(r.I,{...e},l.createElement(a.A,null))},9571:(e,t,n)=>{n.d(t,{I:()=>o});var l=n(58233),a=n(73314),r=n(91004);let o=e=>l.createElement(r.I,{...e},l.createElement(a.A,null))},53783:(e,t,n)=>{n.d(t,{I:()=>o});var l=n(58233),a=n(88329),r=n(91004);let o=e=>l.createElement(r.I,{...e},l.createElement(a.A,null))},49275:(e,t,n)=>{n.d(t,{I:()=>c,a:()=>i});var l=n(58233),a=n(75656),r=n(67616),o=n(91004);let i=e=>l.createElement(o.I,{...e},l.createElement(a.A,null)),c=e=>l.createElement(o.I,{...e},l.createElement(r.A,null))},96489:(e,t,n)=>{n.d(t,{I:()=>o});var l=n(58233),a=n(74093),r=n(91004);let o=e=>l.createElement(r.I,{...e},l.createElement(a.A,null))},98801:(e,t,n)=>{n.d(t,{I:()=>i,a:()=>c});var l=n(58233),a=n(35604),r=n(31674),o=n(91004);let i=e=>l.createElement(o.I,{...e},l.createElement(a.A,null)),c=e=>l.createElement(o.I,{...e},l.createElement(r.A,null))},78806:(e,t,n)=>{n.d(t,{I:()=>c,a:()=>i});var l=n(58233),a=n(2694),r=n(5721),o=n(91004);let i=e=>l.createElement(o.I,{...e},l.createElement(a.A,null)),c=e=>l.createElement(o.I,{...e},l.createElement(r.A,null))},5929:(e,t,n)=>{n.d(t,{I:()=>o});var l=n(58233),a=n(10862),r=n(91004);let o=e=>l.createElement(r.I,{...e},l.createElement(a.A,null))},59509:(e,t,n)=>{n.d(t,{I:()=>c,a:()=>i});var l=n(58233),a=n(94148),r=n(79656),o=n(91004);let i=e=>l.createElement(o.I,{...e},l.createElement(a.A,null)),c=e=>l.createElement(o.I,{...e},l.createElement(r.A,null))},77806:(e,t,n)=>{n.d(t,{I:()=>d,a:()=>u,b:()=>m,c:()=>h,d:()=>f});var l=n(58233),a=n(69730),r=n(32880),o=n(25858),i=n(52943),c=n(5734),s=n(91004);let d=e=>l.createElement(s.I,{...e},l.createElement(a.A,null)),u=e=>l.createElement(s.I,{...e},l.createElement(r.A,null)),m=e=>l.createElement(s.I,{...e},l.createElement(o.A,null)),h=e=>l.createElement(s.I,{...e},l.createElement(i.A,null)),f=e=>l.createElement(s.I,{...e},l.createElement(c.A,null))},18420:(e,t,n)=>{n.r(t),n.d(t,{IconApp:()=>eO,IconAutoresponder:()=>eF,IconBackLink:()=>ek,IconBackup:()=>eT,IconCalendar:()=>em.a,IconCamera:()=>eD,IconChangelog:()=>eB,IconCheck:()=>ec.I,IconCheckboxChecked:()=>es.I,IconCheckboxEmpty:()=>es.a,IconCheckboxIndeterminate:()=>ed.I,IconChevronDown:()=>eu.I,IconChevronLeft:()=>em.I,IconChevronRight:()=>eh.I,IconChevronUp:()=>ef.I,IconClock:()=>eM,IconClose:()=>eE.I,IconCode:()=>ez,IconContextMenu:()=>ep.I,IconContract:()=>eL,IconContractPartner:()=>eH,IconCopy:()=>eI.I,IconCronjob:()=>eR,IconCustomer:()=>eG,IconDanger:()=>ev.I,IconDashboard:()=>eW,IconDatabase:()=>eV,IconDelete:()=>eg.I,IconDeliveryBox:()=>eX,IconDomain:()=>ej,IconDownload:()=>eA.I,IconEdit:()=>eJ,IconEmail:()=>eU,IconExtension:()=>e_,IconExternalLink:()=>eA.a,IconFailed:()=>ew.a,IconFile:()=>eb.a,IconFilter:()=>eg.a,IconForward:()=>eK,IconHide:()=>eq,IconHome:()=>eY,IconImage:()=>eb.I,IconInbox:()=>e$,IconInfo:()=>eC.I,IconInvoice:()=>eQ,IconLock:()=>eZ,IconLockOpen:()=>e0,IconLogout:()=>e1,IconMaximize:()=>e3,IconMember:()=>e5,IconMenu:()=>e9,IconMinimize:()=>e2,IconMinus:()=>ey.I,IconMittwald:()=>tb,IconNotification:()=>e8,IconNumber:()=>e4,IconOrder:()=>e6,IconPayment:()=>e7,IconPending:()=>ex.I,IconPerformance:()=>te,IconPlus:()=>ey.a,IconProject:()=>tt,IconRadioOff:()=>eN.a,IconRadioOn:()=>eN.I,IconRedo:()=>tn,IconRefresh:()=>tl,IconSave:()=>eg.b,IconSearch:()=>eS.I,IconSearchEngine:()=>ta,IconSecurity:()=>tr,IconServer:()=>to,IconSettings:()=>ti,IconShare:()=>tc,IconShow:()=>ts,IconSorting:()=>eg.c,IconSpamProtectionOff:()=>td,IconSpamProtectionOn:()=>tu,IconSshKey:()=>tm,IconSshSftp:()=>th,IconStar:()=>tf,IconStarFilled:()=>tE,IconSubdomain:()=>tp,IconSucceeded:()=>ew.I,IconSuccess:()=>eP.I,IconSupport:()=>tI,IconTerminate:()=>tv,IconTicket:()=>tg,IconUndo:()=>tA,IconUser:()=>tw,IconView:()=>eg.d,IconWarning:()=>eP.a});var l=n(58233),a=n(71425),r=n(8782),o=n(45516),i=n(34872),c=n(35203),s=n(80942),d=n(5522),u=n(69673),m=n(6676),h=n(92512),f=n(42366),E=n(32770),p=n(17875),I=n(87261),v=n(12394),g=n(35804),A=n(64490),w=n(36347),b=n(14774),C=n(96513),y=n(78900),x=n(39455),N=n(54764),S=n(22695),P=n(32299),O=n(25523),F=n(15587),k=n(20476),T=n(29471),D=n(31585),B=n(63822),M=n(35121),z=n(57614),H=n(85896),L=n(63639),R=n(38700),G=n(74286),W=n(54511),V=n(84309),X=n(43110),j=n(33840),J=n(46719),U=n(23621),_=n(77598),K=n(14979),q=n(22329),Y=n(36149),$=n(22593),Q=n(43510),Z=n(96250),ee=n(95610),et=n(18853),en=n(55482),el=n(84258),ea=n(4894),er=n(61333),eo=n(74679),ei=n(91004),ec=n(53952),es=n(58658),ed=n(52211),eu=n(59374),em=n(11831),eh=n(71878),ef=n(64153),eE=n(76034),ep=n(9571),eI=n(53783),ev=n(17434),eg=n(77806),eA=n(51967),ew=n(59509),eb=n(49275),eC=n(59267),ey=n(98801),ex=n(96489),eN=n(78806),eS=n(5929),eP=n(48363);let eO=e=>l.createElement(ei.I,{...e},l.createElement(a.A,null)),eF=e=>l.createElement(ei.I,{...e},l.createElement(r.A,null)),ek=e=>l.createElement(ei.I,{...e},l.createElement(o.A,null)),eT=e=>l.createElement(ei.I,{...e},l.createElement(i.A,null)),eD=e=>l.createElement(ei.I,{...e},l.createElement(c.A,null)),eB=e=>l.createElement(ei.I,{...e},l.createElement(s.A,null)),eM=e=>l.createElement(ei.I,{...e},l.createElement(d.A,null)),ez=e=>l.createElement(ei.I,{...e},l.createElement(u.A,null)),eH=e=>l.createElement(ei.I,{...e},l.createElement(m.A,null)),eL=e=>l.createElement(ei.I,{...e},l.createElement(h.A,null)),eR=e=>l.createElement(ei.I,{...e},l.createElement(f.A,null)),eG=e=>l.createElement(ei.I,{...e},l.createElement(E.A,null)),eW=e=>l.createElement(ei.I,{...e},l.createElement(p.A,null)),eV=e=>l.createElement(ei.I,{...e},l.createElement(I.A,null)),eX=e=>l.createElement(ei.I,{...e},l.createElement(v.A,null)),ej=e=>l.createElement(ei.I,{...e},l.createElement(g.A,null)),eJ=e=>l.createElement(ei.I,{...e},l.createElement(A.A,null)),eU=e=>l.createElement(ei.I,{...e},l.createElement(w.A,null)),e_=e=>l.createElement(ei.I,{...e},l.createElement(b.A,null)),eK=e=>l.createElement(ei.I,{...e},l.createElement(C.A,null)),eq=e=>l.createElement(ei.I,{...e},l.createElement(y.A,null)),eY=e=>l.createElement(ei.I,{...e},l.createElement(x.A,null)),e$=e=>l.createElement(ei.I,{...e},l.createElement(N.A,null)),eQ=e=>l.createElement(ei.I,{...e},l.createElement(S.A,null)),eZ=e=>l.createElement(ei.I,{...e},l.createElement(P.A,null)),e0=e=>l.createElement(ei.I,{...e},l.createElement(O.A,null)),e1=e=>l.createElement(ei.I,{...e},l.createElement(F.A,null)),e3=e=>l.createElement(ei.I,{...e},l.createElement(k.A,null)),e5=e=>l.createElement(ei.I,{...e},l.createElement(T.A,null)),e9=e=>l.createElement(ei.I,{...e},l.createElement(D.A,null)),e2=e=>l.createElement(ei.I,{...e},l.createElement(B.A,null)),e8=e=>l.createElement(ei.I,{...e},l.createElement(M.A,null)),e4=e=>l.createElement(ei.I,{...e},l.createElement(z.A,null)),e6=e=>l.createElement(ei.I,{...e},l.createElement(H.A,null)),e7=e=>l.createElement(ei.I,{...e},l.createElement(L.A,null)),te=e=>l.createElement(ei.I,{...e},l.createElement(R.A,null)),tt=e=>l.createElement(ei.I,{...e},l.createElement(G.A,null)),tn=e=>l.createElement(ei.I,{...e},l.createElement(W.A,null)),tl=e=>l.createElement(ei.I,{...e},l.createElement(V.A,null)),ta=e=>l.createElement(ei.I,{...e},l.createElement(X.A,null)),tr=e=>l.createElement(ei.I,{...e},l.createElement(j.A,null)),to=e=>l.createElement(ei.I,{...e},l.createElement(J.A,null)),ti=e=>l.createElement(ei.I,{...e},l.createElement(U.A,null)),tc=e=>l.createElement(ei.I,{...e},l.createElement(_.A,null)),ts=e=>l.createElement(ei.I,{...e},l.createElement(K.A,null)),td=e=>l.createElement(ei.I,{...e},l.createElement(q.A,null)),tu=e=>l.createElement(ei.I,{...e},l.createElement(Y.A,null)),tm=e=>l.createElement(ei.I,{...e},l.createElement($.A,null)),th=e=>l.createElement(ei.I,{...e},l.createElement(Q.A,null)),tf=e=>l.createElement(ei.I,{...e},l.createElement(Z.A,null)),tE=e=>l.createElement(ei.I,{...e},l.createElement(ee.A,null)),tp=e=>l.createElement(ei.I,{...e},l.createElement(et.A,null)),tI=e=>l.createElement(ei.I,{...e},l.createElement(en.A,null)),tv=e=>l.createElement(ei.I,{...e},l.createElement(el.A,null)),tg=e=>l.createElement(ei.I,{...e},l.createElement(ea.A,null)),tA=e=>l.createElement(ei.I,{...e},l.createElement(er.A,null)),tw=e=>l.createElement(ei.I,{...e},l.createElement(eo.A,null)),tb=e=>l.createElement(ei.I,{...e},'<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 1746.7 1232" focusable="false" role="img" aria-hidden="true">\n  <path d="M1117.2,285.4c-102.5,0-226.5,52.1-291.3,160c-46.7-100.7-134.8-160-276.9-160 c-101.4,0-201.2,50.8-256.1,124.1l-29.8-151.3L17.4,306.3l29.9,152.2l0.1,2.4l-0.1,741.3h240.9V736.7 c0-118.7,61.1-222.9,183.4-222.9C601,513.8,628,601.9,628,720.6v481.8h240.9V727.7c0-118.7,64.7-213.9,183.4-213.9 c127.6,0,156.4,88.1,156.4,206.8v499.8l240.9-47.2V690C1449.8,459.8,1370.7,285.4,1117.2,285.4z"></path>\n  <path  d="M1569.2,23.7c-83,0-152.4,69.5-152.4,154.3c0,83,69.5,152.4,152.4,152.4c84.9,0,154.4-69.5,154.4-152.4 C1723.5,93.1,1654.1,23.7,1569.2,23.7z"></path>\n</svg>\n')},47639:(e,t,n)=>{n.d(t,{L:()=>u});var l=n(58233),a=n(2789),r=n(97668),o=n(2581);n(3590);var i=n(99898),c=n(39905);let s={label:"flow--label",disabled:"flow--label--disabled"},d={"de-DE":{"label.optional":"(optional)"},"en-EN":{"label.optional":"(optional)"}},u=(0,c.f)("Label",e=>{let{children:t,className:n,optional:c,isDisabled:u,refProp:m,unstyled:h=!1,...f}=e,E=(0,i.o)(d),p=h?n:(0,r.A)(s.label,u&&s.disabled,n),I=" "+E.format("label.optional");return l.createElement(o.C,null,l.createElement(a.J,{...f,className:p,ref:m},t,c&&I))})},4468:(e,t,n)=>{n.d(t,{J:()=>l.L});var l=n(47639)},92626:(e,t,n)=>{n.d(t,{L:()=>i});var l=n(58233);n(91004);var a=n(96489),r=n(97668);let o={loadingSpinner:"flow--loading-spinner"},i=e=>{let{className:t,...n}=e,i=(0,r.A)(o.loadingSpinner,t);return l.createElement(a.I,{className:i,...n})}},80647:(e,t,n)=>{n.d(t,{Modal:()=>p,ModalTrigger:()=>I});var l=n(58233),a=n(97668);n(3590);var r=n(6194),o=n(5105),i=n(39905),c=n(42511),s=n(91078),d=n(78604),u=n(76515);n(91004);var m=n(76034),h=n(42315),f=n(18467);let E={modal:"flow--modal",offCanvas:"flow--modal--off-canvas",header:"flow--modal--header",content:"flow--modal--content",actionGroup:"flow--modal--action-group","size-s":"flow--modal--size-s","size-m":"flow--modal--size-m","modal-zoom":"flow--modal--modal-zoom","modal-slide-in-from-right":"flow--modal--modal-slide-in-from-right",left:"flow--modal--left","modal-slide-in-from-left":"flow--modal--modal-slide-in-from-left","modal-slide-up":"flow--modal--modal-slide-up"},p=(0,i.f)("Modal",e=>{let{size:t="s",offCanvas:n,controller:i,children:h,refProp:f,className:p,offCanvasOrientation:I="right",...v}=e,g=(0,a.A)(n?E.offCanvas:E.modal,E["size-".concat(t)],E[I],p),A={Content:{className:E.content,Section:{Heading:{level:3}}},Heading:{level:2,slot:"title",tunnelId:"heading"},ActionGroup:{className:E.actionGroup,spacing:"m"}};return l.createElement(c.O,{className:g,controller:i,...v},l.createElement(r.z,{props:A},l.createElement(o.Eg,null,l.createElement(s.H,{className:E.header},l.createElement(o.dJ,{id:"heading"}),l.createElement(d.A,{closeOverlay:"Modal"},l.createElement(u.B,{variant:"plain",color:"secondary",className:E.closeButton,onPress:null==i?void 0:i.close},l.createElement(m.I,null)))),h)))}),I=e=>{let{children:t,...n}=e;return l.createElement(f.a,{overlayType:"Modal",...n,component:h.zM},t)}},10800:(e,t,n)=>{n.d(t,{Ay:()=>m,Me:()=>f,Vx:()=>m});var l=n(58233),a=n(97668),r=n(15742);n(3590);var o=n(6194),i=n(87656),c=n(5105),s=n(13684),d=n(94021);let u={navigation:"flow--navigation",item:"flow--navigation--item",icon:"flow--navigation--icon",text:"flow--navigation--text"},m=e=>{let{className:t,children:n,...c}=e,s=(0,a.A)(u.navigation,t),d=(0,i.d)(n,f),m={Link:{wrapWith:l.createElement("li",null),className:u.item,unstyled:!0,Text:{className:u.text},Icon:{className:u.icon}}};return l.createElement("nav",{className:s,role:"navigation",...c},l.createElement(o.z,{props:m,mergeInParentContext:!0},l.createElement(r.W,{if:!d},l.createElement("ul",null,n))))},h={navigationGroup:"flow--navigation--navigation-group",collapsable:"flow--navigation--navigation-group--collapsable",label:"flow--navigation--navigation-group--label"},f=e=>{let{children:t,className:n,collapsable:r,...i}=e,u=(0,a.A)(h.navigationGroup,r&&h.collapsable,n),m=(0,l.useId)(),f={Label:{id:m,className:h.label,"aria-hidden":!0},Link:{tunnelId:"links"}};return r?l.createElement(o.z,{mergeInParentContext:!0,props:f},l.createElement(c.Eg,null,l.createElement(s.A,{defaultExpanded:!0,className:u},t,l.createElement(d.C,{clearPropsContext:!1},l.createElement("ul",null,l.createElement(c.dJ,{id:"links"})))))):l.createElement(o.z,{mergeInParentContext:!0,props:f},l.createElement(c.Eg,null,l.createElement("section",{"aria-labelledby":m,className:u,...i},l.createElement(o.z,{mergeInParentContext:!0,props:f},t,l.createElement(c.dJ,{id:"Label"}),l.createElement("ul",null,l.createElement(c.dJ,{id:"links"}))))))}},13980:(e,t,n)=>{n.d(t,{NotificationProvider:()=>y,d7:()=>C});var l=n(58233),a=n(12904),r=n(28584),o=n(80500),i=n(71788),c=n(97668),s=n(67829),d=n(19295),u=n(76098),m=n(67923),h=n(57204),f=Object.defineProperty,E=(e,t,n)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t,n)=>E(e,"symbol"!=typeof t?t+"":t,n);class I{start(e,t){if(this.startedAt)throw Error("Timer already started");this.duration=o.dw.fromDurationLike(e),this.onDone=t,this.startTimeout(this.duration)}restart(){this.stop(),this.startTimeout(this.duration)}pause(){this.clearTimeout();let e=o.c9.now();this.pausedAt=e,this.startedAt||(this.startedAt=e)}resume(){if(this.startedAt){if(this.pausedAt){let e=this.pausedAt.diff(this.startedAt),t=this.duration.minus(e);this.startTimeout(t)}}else throw Error("Timer not paused")}stop(){this.clearTimeout(),this.startedAt=void 0,this.pausedAt=void 0}get state(){return this.pausedAt?"paused":this.startedAt?"running":"idle"}clearTimeout(){this.runningTimeoutId&&window.clearTimeout(this.runningTimeoutId),this.runningTimeoutId=void 0}startTimeout(e){this.startedAt=o.c9.now(),this.pausedAt=void 0,this.runningTimeoutId=window.setTimeout(()=>{this.stop(),this.onDone&&this.onDone()},e.toMillis())}constructor(){p(this,"duration",o.dw.fromDurationLike(0)),p(this,"onDone"),p(this,"startedAt"),p(this,"pausedAt"),p(this,"runningTimeoutId")}}class v{static useNew(){return(0,l.useRef)(new v).current}useNotifications(){return(0,a.u)(()=>Array.from(this.notificationsData.values()))}add(e){let t=this.id++,n={id:t,createdAt:Date.now(),autoCloseTimer:new I};this.notificationsData.set(t,{element:e,meta:n}),e.props.autoClose&&n.autoCloseTimer.start({seconds:10},()=>{this.remove(t)})}remove(e){this.notificationsData.delete(e)}constructor(){p(this,"notificationsData",new Map),p(this,"id",0),(0,r.Gn)(this,{notificationsData:r.sH.shallow,add:r.XI.bound,remove:r.XI.bound})}}let g={notificationContainer:"flow--notification-provider--notification-container",notification:"flow--notification-provider--notification"},A=e=>{let{notification:t,controller:n}=e;return(0,l.cloneElement)(t.element,{onMouseEnter:()=>{t.meta.autoCloseTimer.pause()},onMouseLeave:()=>{t.meta.autoCloseTimer.resume()},onClose:()=>{var e,l;n.remove(t.meta.id),null==(l=(e=t.element.props).onClose)||l.call(e)},onFocus:()=>{t.meta.autoCloseTimer.pause()},onBlur:()=>{t.meta.autoCloseTimer.resume()}})},w=e=>{let{className:t,...n}=e,a=C(),r=a.useNotifications(),o=(0,h.wR)(),f=(0,c.A)(g.notificationContainer,t),E=l.createElement(s.F,{features:d.l},l.createElement("div",{className:f,...n},l.createElement(u.N,null,r.map(e=>l.createElement(m.m.div,{className:g.notification,key:e.meta.id,initial:{opacity:0,x:200},animate:{opacity:1,x:0},exit:{opacity:0,x:200,height:0,paddingBottom:0},transition:{bounce:0}},l.createElement(l.Suspense,null,l.createElement(A,{notification:e,controller:a})))))));return o?null:i.createPortal(E,document.body)},b=(0,l.createContext)(new v),C=()=>(0,l.useContext)(b),y=e=>{let{children:t,...n}=e,a=v.useNew();return l.createElement(b.Provider,{value:a},l.createElement(w,{...n}),t)}},42511:(e,t,n)=>{n.d(t,{O:()=>d});var l=n(46674),a=n(42315),r=n(58233),o=n(97668),i=n(93473),c=n(18467);let s={overlay:"flow--overlay"},d=e=>{let{controller:t,children:n,isDismissable:d=!0,className:u,overlayType:m="Modal"}=e,h=(0,i.u)(m,{reuseControllerFromContext:!0}),f=null!=t?t:h,E=f.useIsOpen(),p=(0,o.A)(s.overlay,u);return r.createElement(l.mH,{className:p,isDismissable:d,isOpen:E,onOpenChange:e=>f.setOpen(e)},r.createElement(l.aF,null,r.createElement(a.lG,null,r.createElement(c.O,{type:"Modal",controller:f},n))))}},18467:(e,t,n)=>{n.d(t,{O:()=>o,a:()=>i});var l=n(58233),a=n(63395);n(3590);var r=n(6194);let o=e=>{let{type:t,controller:n,children:r}=e,o=(0,a.u)();return l.createElement(a.o.Provider,{value:{...o,[t]:n}},r)},i=e=>{let{overlayType:t,isDefaultOpen:n=!1,component:i,children:c,controller:s}=e,d=a.O.useNew({isDefaultOpen:n}),u=null!=s?s:d,m=u.useIsOpen(),h={Button:{onPress:u.open}};return l.createElement(o,{type:t,controller:u},l.createElement(r.z,{props:h,mergeInParentContext:!0},l.createElement(i,{isOpen:m},c)))}},98168:(e,t,n)=>{n.d(t,{S:()=>v});var l=n(58233),a=n(6995),r=n(94027),o=n(42130),i=n(97668),c=n(2581),s=n(6194);n(3590);var d=n(54498),u=n(39905),m=n(76515);n(91004);var h=n(76034),f=n(5929),E=n(99898);let p={searchField:"flow--search-field",clearButton:"flow--search-field--clear-button",searchIcon:"flow--search-field--search-icon",inputContainer:"flow--search-field--input-container",input:"flow--search-field--input"},I={"de-DE":{"searchField.search":"Suche"},"en-EN":{"searchField.search":"Search"}},v=(0,u.f)("SearchField",e=>{let{children:t,className:n,refProp:u,...v}=e,g=(0,i.A)(o.f.formField,p.searchField,n),A=(0,E.o)(I).format("searchField.search"),w={Label:{className:o.f.label,optional:!e.isRequired},FieldDescription:{className:o.f.fieldDescription},FieldError:{className:o.f.customFieldError}};return l.createElement(c.C,null,l.createElement(a.L,{"aria-label":A,...v,className:g},l.createElement(s.z,{props:w},t),l.createElement("div",{className:p.inputContainer},l.createElement(f.I,{className:p.searchIcon}),l.createElement(r.p,{placeholder:A,className:p.input,ref:u}),l.createElement(m.B,{className:p.clearButton,variant:"plain",color:"secondary"},l.createElement(h.I,null))),l.createElement(d.F,{className:o.f.fieldError})))})},48122:(e,t,n)=>{n.d(t,{L:()=>l.S});var l=n(98168)},63395:(e,t,n)=>{n.d(t,{O:()=>s,o:()=>d,u:()=>u});var l=n(28584),a=n(12904),r=n(58233),o=Object.defineProperty,i=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t,n)=>i(e,"symbol"!=typeof t?t+"":t,n);class s{static useNew(e){return(0,r.useRef)(new s(e)).current}addOnOpen(e){return this.onOpenHandlers.add(e),()=>{this.onOpenHandlers.delete(e)}}addOnClose(e){return this.onCloseHandlers.add(e),()=>{this.onCloseHandlers.delete(e)}}executeOnClose(){this.onCloseHandlers.forEach(e=>e())}executeOnOpen(){this.onOpenHandlers.forEach(e=>e())}open(){this.isOpen=!0,this.executeOnOpen()}close(){this.isOpen=!1,this.executeOnClose()}toggle(){this.isOpen=!this.isOpen,this.isOpen?this.executeOnOpen():this.executeOnClose()}setOpen(e){this.isOpen=e,e?this.executeOnOpen():this.executeOnClose()}useIsOpen(){return(0,a.u)(()=>this.isOpen)}constructor(e){var t;c(this,"isOpen"),c(this,"onOpenHandlers",new Set),c(this,"onCloseHandlers",new Set),(0,l.Gn)(this,{isOpen:l.sH,open:l.XI.bound,close:l.XI.bound,toggle:l.XI.bound,setOpen:l.XI.bound}),this.isOpen=null!==(t=null==e?void 0:e.isDefaultOpen)&&void 0!==t&&t,null!=e&&e.onOpen&&this.onOpenHandlers.add(e.onOpen),null!=e&&e.onClose&&this.onCloseHandlers.add(e.onClose)}}let d=(0,r.createContext)({}),u=()=>(0,r.useContext)(d)},43338:(e,t,n)=>{n.d(t,{m:()=>l.u}),n(63395);var l=n(93473)},87656:(e,t,n)=>{n.d(t,{a:()=>i,b:()=>c,d:()=>s});var l=n(58233),a=n(66858),r=n(76629);let o=(e,t)=>!!(0,l.isValidElement)(e)&&("string"==typeof t?"string"==typeof e.type&&e.type===t:e.type===t),i=(e,t)=>(0,a.A)(e,e=>o(e,t)),c=(e,t)=>{let n=[];return(0,r.A)(e,e=>{o(e,t)&&n.push(e)}),n},s=(e,t)=>!!i(e,t)},22703:(e,t,n)=>{n.d(t,{d:()=>l});let l=e=>({__dynamicProp:e})},50777:(e,t,n)=>{n.d(t,{A:()=>u,a:()=>s,g:()=>h,u:()=>m});var l=n(58233),a=n(28584),r=n(12904),o=Object.defineProperty,i=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t,n)=>i(e,"symbol"!=typeof t?t+"":t,n);class s{static useNew(){return(0,l.useRef)(new s).current}static useRegisterState(e){let t=m();(0,l.useEffect)(()=>(null==t||t.addState(e),()=>{null==t||t.removeState(e)}),[t,e])}addState(e){this.states.add(e)}removeState(e){this.states.delete(e)}useIsBusy(){return(0,r.u)(()=>this.isBusy)}get isBusy(){for(let e of this.states)if(e.isBusy)return!0;return!1}constructor(){c(this,"states",new Set),(0,a.Gn)(this,{states:a.sH,addState:a.XI,removeState:a.XI,isBusy:a.EW})}}let d=(0,l.createContext)(void 0),u=e=>{let{children:t}=e,n=s.useNew();return l.createElement(d.Provider,{value:n},t)},m=()=>{var e;let t=s.useNew();return null!==(e=(0,l.useContext)(d))&&void 0!==e?e:t},h=e=>{let{slot:t,...n}=e,l=void 0===n.color||"primary"===n.color||"danger"===n.color||"accent"===n.color?"primary":"abort";return null!=t?t:l}},55694:(e,t,n)=>{n.d(t,{T7:()=>a.u,aq:()=>r});var l=n(58233);n(93473);var a=n(55506);let r=()=>{let[e,t]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{t(!0)},[]),e}},65092:(e,t,n)=>{n.d(t,{LinkProvider:()=>i});var l=n(58233),a=n(28050),r=n(61528);let o=(0,l.forwardRef)(function(e,t){let{href:n,isDisabled:r,...o}=e;return console.log(e),l.createElement(a.default,{href:null!=n?n:"#","aria-disabled":r,...o,ref:t})}),i=e=>l.createElement(r.L,{value:{linkComponent:o}},e.children)},55506:(e,t,n)=>{n.d(t,{u:()=>a});var l=n(58233);let a=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=(0,l.useRef)(e);(0,l.useEffect)(()=>{a.current!==e&&t(),a.current=e},[e,t,...n])}},93473:(e,t,n)=>{n.d(t,{u:()=>r});var l=n(63395),a=n(58233);let r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{reuseControllerFromContext:n=!0,isDefaultOpen:r,onOpen:o,onClose:i}=t,c=l.O.useNew({isDefaultOpen:r,onOpen:o,onClose:i}),s=(0,l.u)()[e],d=n&&s?s:c;return(0,a.useEffect)(()=>{let e=[];return o&&e.push(d.addOnOpen(o)),i&&e.push(d.addOnClose(i)),()=>{e.forEach(e=>e())}},[o,i]),d}},12904:(e,t,n)=>{n.d(t,{u:()=>r});var l=n(28584),a=n(58233);let r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],[n,r]=(0,a.useState)(e());return(0,a.useEffect)(()=>(0,l.fm)(()=>{r(e())}),t),n}}}]);
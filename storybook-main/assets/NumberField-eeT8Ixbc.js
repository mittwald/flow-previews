import{r as f,R as D}from"./index-BwDkhjyp.js";import{f as K,F as tt}from"./FormField.module-CNlZpOkK.js";import{c as rt}from"./clsx-B-dksMZM.js";import{C as it,P as nt}from"./PropsContextProvider-DwTel3aB.js";import{B as pe}from"./Button-DWl6SRuO.js";import"./IconApp-DGeSE4ad.js";import{I as lt,A as st,G as ot,a as ut}from"./IconWarning-DyJIeaqs.js";import{f as dt}from"./flowComponent-CbDEtdyo.js";import{a as ct}from"./Button-BTMfZQLF.js";import{a as Pe,b as Ee,c as ft,d as mt,e as bt,f as pt}from"./utils-B-mS0hjG.js";import{h as $t,a as vt,e as xt,f as ht}from"./Form-Dmkgi1d-.js";import{w as yt,$ as gt,y as Pt,z as Et,q as Dt,c as Nt,b as Ft}from"./useFocusable-CKMlalor.js";import{c as re,b as H,a as Q,f as St}from"./index-DVe9vSxq.js";import{a as Lt,b as Bt,$ as Ct}from"./Input-DNo_oYh5.js";import{a as Vt}from"./Label-DwL17Jrp.js";import{a as wt}from"./Text-C_suByGF.js";import{$ as De}from"./filterDOMProps-CeZl_uWj.js";import{a as Ne,$ as It}from"./useLocalizedStringFormatter-BNeRQeib.js";import{$ as Mt}from"./useControlledState-C0C-dzuH.js";import{a as w,$ as ee}from"./number-nHrFdSb-.js";import{a as ie,$ as $e}from"./useNumberFormatter-DEpQvdBY.js";import{$ as Rt}from"./useFormReset-CfqvoD0r.js";import{$ as Tt}from"./useEvent-m5sATXdH.js";import{$ as kt,a as At}from"./LiveAnnouncer-AIgN_avV.js";import{d as Ot}from"./usePress-YR3pmEr9.js";function _t(e,a){let{onScroll:t,isDisabled:r}=e,l=f.useCallback(n=>{n.ctrlKey||(n.preventDefault(),n.stopPropagation(),t&&t({deltaX:n.deltaX,deltaY:n.deltaY}))},[t]);Tt(a,"wheel",r?void 0:l)}const zt=new RegExp("^.*\\(.*\\).*$"),jt=["latn","arab","hanidec"];class Fe{parse(a){return ae(this.locale,this.options,a).parse(a)}isValidPartialNumber(a,t,r){return ae(this.locale,this.options,a).isValidPartialNumber(a,t,r)}getNumberingSystem(a){return ae(this.locale,this.options,a).options.numberingSystem}constructor(a,t={}){this.locale=a,this.options=t}}const ve=new Map;function ae(e,a,t){let r=xe(e,a);if(!e.includes("-nu-")&&!r.isValidPartialNumber(t)){for(let l of jt)if(l!==r.options.numberingSystem){let n=xe(e+(e.includes("-u-")?"-nu-":"-u-nu-")+l,a);if(n.isValidPartialNumber(t))return n}}return r}function xe(e,a){let t=e+(a?Object.entries(a).sort((l,n)=>l[0]<n[0]?-1:1).join():""),r=ve.get(t);return r||(r=new Kt(e,a),ve.set(t,r)),r}class Kt{parse(a){let t=this.sanitize(a);if(this.symbols.group&&(t=q(t,this.symbols.group,"")),this.symbols.decimal&&(t=t.replace(this.symbols.decimal,".")),this.symbols.minusSign&&(t=t.replace(this.symbols.minusSign,"-")),t=t.replace(this.symbols.numeral,this.symbols.index),this.options.style==="percent"){let o=t.indexOf("-");t=t.replace("-","");let d=t.indexOf(".");d===-1&&(d=t.length),t=t.replace(".",""),d-2===0?t=`0.${t}`:d-2===-1?t=`0.0${t}`:d-2===-2?t="0.00":t=`${t.slice(0,d-2)}.${t.slice(d-2)}`,o>-1&&(t=`-${t}`)}let r=t?+t:NaN;if(isNaN(r))return NaN;if(this.options.style==="percent"){var l,n;let o={...this.options,style:"decimal",minimumFractionDigits:Math.min(((l=this.options.minimumFractionDigits)!==null&&l!==void 0?l:0)+2,20),maximumFractionDigits:Math.min(((n=this.options.maximumFractionDigits)!==null&&n!==void 0?n:0)+2,20)};return new Fe(this.locale,o).parse(new ie(this.locale,o).format(r))}return this.options.currencySign==="accounting"&&zt.test(a)&&(r=-1*r),r}sanitize(a){return a=a.replace(this.symbols.literals,""),this.symbols.minusSign&&(a=a.replace("-",this.symbols.minusSign)),this.options.numberingSystem==="arab"&&(this.symbols.decimal&&(a=a.replace(",",this.symbols.decimal),a=a.replace("،",this.symbols.decimal)),this.symbols.group&&(a=q(a,".",this.symbols.group))),this.options.locale==="fr-FR"&&(a=q(a,"."," ")),a}isValidPartialNumber(a,t=-1/0,r=1/0){return a=this.sanitize(a),this.symbols.minusSign&&a.startsWith(this.symbols.minusSign)&&t<0?a=a.slice(this.symbols.minusSign.length):this.symbols.plusSign&&a.startsWith(this.symbols.plusSign)&&r>0&&(a=a.slice(this.symbols.plusSign.length)),this.symbols.group&&a.startsWith(this.symbols.group)||this.symbols.decimal&&a.indexOf(this.symbols.decimal)>-1&&this.options.maximumFractionDigits===0?!1:(this.symbols.group&&(a=q(a,this.symbols.group,"")),a=a.replace(this.symbols.numeral,""),this.symbols.decimal&&(a=a.replace(this.symbols.decimal,"")),a.length===0)}constructor(a,t={}){this.locale=a,this.formatter=new Intl.NumberFormat(a,t),this.options=this.formatter.resolvedOptions(),this.symbols=Ut(a,this.formatter,this.options,t);var r,l;this.options.style==="percent"&&(((r=this.options.minimumFractionDigits)!==null&&r!==void 0?r:0)>18||((l=this.options.maximumFractionDigits)!==null&&l!==void 0?l:0)>18)&&console.warn("NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.")}}const he=new Set(["decimal","fraction","integer","minusSign","plusSign","group"]),Ht=[0,4,2,1,11,20,3,7,100,21,.1,1.1];function Ut(e,a,t,r){var l,n,o,d;let m=new Intl.NumberFormat(e,{...t,minimumSignificantDigits:1,maximumSignificantDigits:21}),$=m.formatToParts(-10000.111),x=m.formatToParts(10000.111),s=Ht.map(b=>m.formatToParts(b));var i;let u=(i=(l=$.find(b=>b.type==="minusSign"))===null||l===void 0?void 0:l.value)!==null&&i!==void 0?i:"-",v=(n=x.find(b=>b.type==="plusSign"))===null||n===void 0?void 0:n.value;!v&&((r==null?void 0:r.signDisplay)==="exceptZero"||(r==null?void 0:r.signDisplay)==="always")&&(v="+");let N=(o=new Intl.NumberFormat(e,{...t,minimumFractionDigits:2,maximumFractionDigits:2}).formatToParts(.001).find(b=>b.type==="decimal"))===null||o===void 0?void 0:o.value,F=(d=$.find(b=>b.type==="group"))===null||d===void 0?void 0:d.value,S=$.filter(b=>!he.has(b.type)).map(b=>ye(b.value)),g=s.flatMap(b=>b.filter(c=>!he.has(c.type)).map(c=>ye(c.value))),P=[...new Set([...S,...g])].sort((b,c)=>c.length-b.length),h=P.length===0?new RegExp("[\\p{White_Space}]","gu"):new RegExp(`${P.join("|")}|[\\p{White_Space}]`,"gu"),C=[...new Intl.NumberFormat(t.locale,{useGrouping:!1}).format(9876543210)].reverse(),B=new Map(C.map((b,c)=>[b,c])),I=new RegExp(`[${C.join("")}]`,"g");return{minusSign:u,plusSign:v,decimal:N,group:F,literals:h,numeral:I,index:b=>String(B.get(b))}}function q(e,a,t){return e.replaceAll?e.replaceAll(a,t):e.split(a).join(t)}function ye(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function ge(){return typeof window<"u"&&window.InputEvent&&typeof InputEvent.prototype.getTargetRanges=="function"}function Wt(e,a,t){let r=re(s=>{let i=t.current,u;switch(s.inputType){case"historyUndo":case"historyRedo":return;case"insertLineBreak":return;case"deleteContent":case"deleteByCut":case"deleteByDrag":u=i.value.slice(0,i.selectionStart)+i.value.slice(i.selectionEnd);break;case"deleteContentForward":u=i.selectionEnd===i.selectionStart?i.value.slice(0,i.selectionStart)+i.value.slice(i.selectionEnd+1):i.value.slice(0,i.selectionStart)+i.value.slice(i.selectionEnd);break;case"deleteContentBackward":u=i.selectionEnd===i.selectionStart?i.value.slice(0,i.selectionStart-1)+i.value.slice(i.selectionStart):i.value.slice(0,i.selectionStart)+i.value.slice(i.selectionEnd);break;case"deleteSoftLineBackward":case"deleteHardLineBackward":u=i.value.slice(i.selectionStart);break;default:s.data!=null&&(u=i.value.slice(0,i.selectionStart)+s.data+i.value.slice(i.selectionEnd));break}(u==null||!a.validate(u))&&s.preventDefault()});f.useEffect(()=>{if(!ge())return;let s=t.current;return s.addEventListener("beforeinput",r,!1),()=>{s.removeEventListener("beforeinput",r,!1)}},[t,r]);let l=ge()?null:s=>{let i=s.target.value.slice(0,s.target.selectionStart)+s.data+s.target.value.slice(s.target.selectionEnd);a.validate(i)||s.preventDefault()},{labelProps:n,inputProps:o,descriptionProps:d,errorMessageProps:m,...$}=Lt(e,t),x=f.useRef(null);return{inputProps:H(o,{onBeforeInput:l,onCompositionStart(){let{value:s,selectionStart:i,selectionEnd:u}=t.current;x.current={value:s,selectionStart:i,selectionEnd:u}},onCompositionEnd(){if(!a.validate(t.current.value)){let{value:s,selectionStart:i,selectionEnd:u}=x.current;t.current.value=s,t.current.setSelectionRange(i,u),a.setInputValue(s)}}}),labelProps:n,descriptionProps:d,errorMessageProps:m,...$}}var Se={};Se={Empty:"فارغ"};var Le={};Le={Empty:"Изпразни"};var Be={};Be={Empty:"Prázdné"};var Ce={};Ce={Empty:"Tom"};var Ve={};Ve={Empty:"Leer"};var we={};we={Empty:"Άδειο"};var Ie={};Ie={Empty:"Empty"};var Me={};Me={Empty:"Vacío"};var Re={};Re={Empty:"Tühjenda"};var Te={};Te={Empty:"Tyhjä"};var ke={};ke={Empty:"Vide"};var Ae={};Ae={Empty:"ריק"};var Oe={};Oe={Empty:"Prazno"};var _e={};_e={Empty:"Üres"};var ze={};ze={Empty:"Vuoto"};var je={};je={Empty:"空"};var Ke={};Ke={Empty:"비어 있음"};var He={};He={Empty:"Tuščias"};var Ue={};Ue={Empty:"Tukšs"};var We={};We={Empty:"Tom"};var Ge={};Ge={Empty:"Leeg"};var qe={};qe={Empty:"Pusty"};var Ze={};Ze={Empty:"Vazio"};var Ye={};Ye={Empty:"Vazio"};var Xe={};Xe={Empty:"Gol"};var Je={};Je={Empty:"Не заполнено"};var Qe={};Qe={Empty:"Prázdne"};var ea={};ea={Empty:"Prazen"};var aa={};aa={Empty:"Prazno"};var ta={};ta={Empty:"Tomt"};var ra={};ra={Empty:"Boş"};var ia={};ia={Empty:"Пусто"};var na={};na={Empty:"空"};var la={};la={Empty:"空白"};var sa={};sa={"ar-AE":Se,"bg-BG":Le,"cs-CZ":Be,"da-DK":Ce,"de-DE":Ve,"el-GR":we,"en-US":Ie,"es-ES":Me,"et-EE":Re,"fi-FI":Te,"fr-FR":ke,"he-IL":Ae,"hr-HR":Oe,"hu-HU":_e,"it-IT":ze,"ja-JP":je,"ko-KR":Ke,"lt-LT":He,"lv-LV":Ue,"nb-NO":We,"nl-NL":Ge,"pl-PL":qe,"pt-BR":Ze,"pt-PT":Ye,"ro-RO":Xe,"ru-RU":Je,"sk-SK":Qe,"sl-SI":ea,"sr-SP":aa,"sv-SE":ta,"tr-TR":ra,"uk-UA":ia,"zh-CN":na,"zh-TW":la};function Gt(e){return e&&e.__esModule?e.default:e}function qt(e){const a=f.useRef();let{value:t,textValue:r,minValue:l,maxValue:n,isDisabled:o,isReadOnly:d,isRequired:m,onIncrement:$,onIncrementPage:x,onDecrement:s,onDecrementPage:i,onDecrementToMin:u,onIncrementToMax:v}=e;const y=Ne(Gt(sa),"@react-aria/spinbutton"),N=()=>clearTimeout(a.current);f.useEffect(()=>()=>N(),[]);let F=c=>{if(!(c.ctrlKey||c.metaKey||c.shiftKey||c.altKey||d))switch(c.key){case"PageUp":if(x){c.preventDefault(),x==null||x();break}case"ArrowUp":case"Up":$&&(c.preventDefault(),$==null||$());break;case"PageDown":if(i){c.preventDefault(),i==null||i();break}case"ArrowDown":case"Down":s&&(c.preventDefault(),s==null||s());break;case"Home":u&&(c.preventDefault(),u==null||u());break;case"End":v&&(c.preventDefault(),v==null||v());break}},S=f.useRef(!1),g=()=>{S.current=!0},P=()=>{S.current=!1},h=r===""?y.format("Empty"):(r||`${t}`).replace("-","−");f.useEffect(()=>{S.current&&(kt("assertive"),At(h,"assertive"))},[h]);const C=re(c=>{N(),$==null||$(),a.current=window.setTimeout(()=>{(n===void 0||isNaN(n)||t===void 0||isNaN(t)||t<n)&&C(60)},c)}),B=re(c=>{N(),s==null||s(),a.current=window.setTimeout(()=>{(l===void 0||isNaN(l)||t===void 0||isNaN(t)||t>l)&&B(60)},c)});let I=c=>{c.preventDefault()},{addGlobalListener:V,removeAllGlobalListeners:b}=Ot();return{spinButtonProps:{role:"spinbutton","aria-valuenow":t!==void 0&&!isNaN(t)?t:void 0,"aria-valuetext":h,"aria-valuemin":l,"aria-valuemax":n,"aria-disabled":o||void 0,"aria-readonly":d||void 0,"aria-required":m||void 0,onKeyDown:F,onFocus:g,onBlur:P},incrementButtonProps:{onPressStart:()=>{C(400),V(window,"contextmenu",I)},onPressEnd:()=>{N(),b()},onFocus:g,onBlur:P},decrementButtonProps:{onPressStart:()=>{B(400),V(window,"contextmenu",I)},onPressEnd:()=>{N(),b()},onFocus:g,onBlur:P}}}var oa={};oa={decrease:e=>`خفض ${e.fieldLabel}`,increase:e=>`زيادة ${e.fieldLabel}`,numberField:"حقل رقمي"};var ua={};ua={decrease:e=>`Намаляване ${e.fieldLabel}`,increase:e=>`Усилване ${e.fieldLabel}`,numberField:"Номер на полето"};var da={};da={decrease:e=>`Snížit ${e.fieldLabel}`,increase:e=>`Zvýšit ${e.fieldLabel}`,numberField:"Číselné pole"};var ca={};ca={decrease:e=>`Reducer ${e.fieldLabel}`,increase:e=>`Øg ${e.fieldLabel}`,numberField:"Talfelt"};var fa={};fa={decrease:e=>`${e.fieldLabel} verringern`,increase:e=>`${e.fieldLabel} erhöhen`,numberField:"Nummernfeld"};var ma={};ma={decrease:e=>`Μείωση ${e.fieldLabel}`,increase:e=>`Αύξηση ${e.fieldLabel}`,numberField:"Πεδίο αριθμού"};var ba={};ba={decrease:e=>`Decrease ${e.fieldLabel}`,increase:e=>`Increase ${e.fieldLabel}`,numberField:"Number field"};var pa={};pa={decrease:e=>`Reducir ${e.fieldLabel}`,increase:e=>`Aumentar ${e.fieldLabel}`,numberField:"Campo de número"};var $a={};$a={decrease:e=>`Vähenda ${e.fieldLabel}`,increase:e=>`Suurenda ${e.fieldLabel}`,numberField:"Numbri väli"};var va={};va={decrease:e=>`Vähennä ${e.fieldLabel}`,increase:e=>`Lisää ${e.fieldLabel}`,numberField:"Numerokenttä"};var xa={};xa={decrease:e=>`Diminuer ${e.fieldLabel}`,increase:e=>`Augmenter ${e.fieldLabel}`,numberField:"Champ de nombre"};var ha={};ha={decrease:e=>`הקטן ${e.fieldLabel}`,increase:e=>`הגדל ${e.fieldLabel}`,numberField:"שדה מספר"};var ya={};ya={decrease:e=>`Smanji ${e.fieldLabel}`,increase:e=>`Povećaj ${e.fieldLabel}`,numberField:"Polje broja"};var ga={};ga={decrease:e=>`${e.fieldLabel} csökkentése`,increase:e=>`${e.fieldLabel} növelése`,numberField:"Számmező"};var Pa={};Pa={decrease:e=>`Riduci ${e.fieldLabel}`,increase:e=>`Aumenta ${e.fieldLabel}`,numberField:"Campo numero"};var Ea={};Ea={decrease:e=>`${e.fieldLabel}を縮小`,increase:e=>`${e.fieldLabel}を拡大`,numberField:"数値フィールド"};var Da={};Da={decrease:e=>`${e.fieldLabel} 감소`,increase:e=>`${e.fieldLabel} 증가`,numberField:"번호 필드"};var Na={};Na={decrease:e=>`Sumažinti ${e.fieldLabel}`,increase:e=>`Padidinti ${e.fieldLabel}`,numberField:"Numerio laukas"};var Fa={};Fa={decrease:e=>`Samazināšana ${e.fieldLabel}`,increase:e=>`Palielināšana ${e.fieldLabel}`,numberField:"Skaitļu lauks"};var Sa={};Sa={decrease:e=>`Reduser ${e.fieldLabel}`,increase:e=>`Øk ${e.fieldLabel}`,numberField:"Tallfelt"};var La={};La={decrease:e=>`${e.fieldLabel} verlagen`,increase:e=>`${e.fieldLabel} verhogen`,numberField:"Getalveld"};var Ba={};Ba={decrease:e=>`Zmniejsz ${e.fieldLabel}`,increase:e=>`Zwiększ ${e.fieldLabel}`,numberField:"Pole numeru"};var Ca={};Ca={decrease:e=>`Diminuir ${e.fieldLabel}`,increase:e=>`Aumentar ${e.fieldLabel}`,numberField:"Campo de número"};var Va={};Va={decrease:e=>`Diminuir ${e.fieldLabel}`,increase:e=>`Aumentar ${e.fieldLabel}`,numberField:"Campo numérico"};var wa={};wa={decrease:e=>`Scădere ${e.fieldLabel}`,increase:e=>`Creștere ${e.fieldLabel}`,numberField:"Câmp numeric"};var Ia={};Ia={decrease:e=>`Уменьшение ${e.fieldLabel}`,increase:e=>`Увеличение ${e.fieldLabel}`,numberField:"Числовое поле"};var Ma={};Ma={decrease:e=>`Znížiť ${e.fieldLabel}`,increase:e=>`Zvýšiť ${e.fieldLabel}`,numberField:"Číselné pole"};var Ra={};Ra={decrease:e=>`Upadati ${e.fieldLabel}`,increase:e=>`Povečajte ${e.fieldLabel}`,numberField:"Številčno polje"};var Ta={};Ta={decrease:e=>`Smanji ${e.fieldLabel}`,increase:e=>`Povećaj ${e.fieldLabel}`,numberField:"Polje broja"};var ka={};ka={decrease:e=>`Minska ${e.fieldLabel}`,increase:e=>`Öka ${e.fieldLabel}`,numberField:"Nummerfält"};var Aa={};Aa={decrease:e=>`${e.fieldLabel} azalt`,increase:e=>`${e.fieldLabel} arttır`,numberField:"Sayı alanı"};var Oa={};Oa={decrease:e=>`Зменшити ${e.fieldLabel}`,increase:e=>`Збільшити ${e.fieldLabel}`,numberField:"Поле номера"};var _a={};_a={decrease:e=>`降低 ${e.fieldLabel}`,increase:e=>`提高 ${e.fieldLabel}`,numberField:"数字字段"};var za={};za={decrease:e=>`縮小 ${e.fieldLabel}`,increase:e=>`放大 ${e.fieldLabel}`,numberField:"數字欄位"};var ja={};ja={"ar-AE":oa,"bg-BG":ua,"cs-CZ":da,"da-DK":ca,"de-DE":fa,"el-GR":ma,"en-US":ba,"es-ES":pa,"et-EE":$a,"fi-FI":va,"fr-FR":xa,"he-IL":ha,"hr-HR":ya,"hu-HU":ga,"it-IT":Pa,"ja-JP":Ea,"ko-KR":Da,"lt-LT":Na,"lv-LV":Fa,"nb-NO":Sa,"nl-NL":La,"pl-PL":Ba,"pt-BR":Ca,"pt-PT":Va,"ro-RO":wa,"ru-RU":Ia,"sk-SK":Ma,"sl-SI":Ra,"sr-SP":Ta,"sv-SE":ka,"tr-TR":Aa,"uk-UA":Oa,"zh-CN":_a,"zh-TW":za};function Zt(e){return e&&e.__esModule?e.default:e}function Yt(e,a,t){let{id:r,decrementAriaLabel:l,incrementAriaLabel:n,isDisabled:o,isReadOnly:d,isRequired:m,minValue:$,maxValue:x,autoFocus:s,label:i,formatOptions:u,onBlur:v=()=>{},onFocus:y,onFocusChange:N,onKeyDown:F,onKeyUp:S,description:g,errorMessage:P,isWheelDisabled:h,...C}=e,{increment:B,incrementToMax:I,decrement:V,decrementToMin:b,numberValue:c,inputValue:E,commit:A,commitValidation:O}=a;const _=Ne(Zt(ja),"@react-aria/numberfield");let z=Q(r),{focusProps:Z}=yt({onBlur(){A()}}),U=$e(u),Y=f.useMemo(()=>U.resolvedOptions(),[U]),W=$e({...u,currencySign:void 0}),ne=f.useMemo(()=>isNaN(c)?"":W.format(c),[W,c]),{spinButtonProps:p,incrementButtonProps:G,decrementButtonProps:M}=qt({isDisabled:o,isReadOnly:d,isRequired:m,maxValue:x,minValue:$,onIncrement:B,onIncrementToMax:I,onDecrement:V,onDecrementToMin:b,value:c,textValue:ne}),[R,Ha]=f.useState(!1),{focusWithinProps:Ua}=gt({isDisabled:o,onFocusWithinChange:Ha}),Wa=f.useCallback(L=>{Math.abs(L.deltaY)<=Math.abs(L.deltaX)||(L.deltaY>0?B():L.deltaY<0&&V())},[V,B]);_t({onScroll:Wa,isDisabled:h||o||d||!R},t);let le=Y.maximumFractionDigits>0,se=a.minValue===void 0||isNaN(a.minValue)||a.minValue<0,j="numeric";Pt()?se?j="text":le&&(j="decimal"):Et()&&(se?j="numeric":le&&(j="decimal"));let Ga=L=>{a.validate(L)&&a.setInputValue(L)},qa=De(e),oe=f.useCallback(L=>{L.key==="Enter"?(A(),O()):L.continuePropagation()},[A,O]),{isInvalid:ue,validationErrors:Za,validationDetails:Ya}=a.displayValidation,{labelProps:de,inputProps:Xa,descriptionProps:Ja,errorMessageProps:Qa}=Wt({...C,...qa,name:void 0,label:i,autoFocus:s,isDisabled:o,isReadOnly:d,isRequired:m,validate:void 0,[$t]:a,value:E,defaultValue:void 0,autoComplete:"off","aria-label":e["aria-label"]||void 0,"aria-labelledby":e["aria-labelledby"]||void 0,id:z,type:"text",inputMode:j,onChange:Ga,onBlur:v,onFocus:y,onFocusChange:N,onKeyDown:f.useMemo(()=>St(oe,F),[oe,F]),onKeyUp:S,description:g,errorMessage:P},a,t);Rt(t,a.numberValue,a.setNumberValue);let ce=H(p,Z,Xa,{role:null,"aria-roledescription":Dt()?null:_.format("numberField"),"aria-valuemax":null,"aria-valuemin":null,"aria-valuenow":null,"aria-valuetext":null,autoCorrect:"off",spellCheck:"false"});e.validationBehavior==="native"&&(ce["aria-required"]=void 0);let fe=L=>{var J;document.activeElement!==t.current&&(L.pointerType==="mouse"?(J=t.current)===null||J===void 0||J.focus():L.target.focus())},X=e["aria-label"]||(typeof e.label=="string"?e.label:""),T;X||(T=e.label!=null?de.id:e["aria-labelledby"]);let me=Q(),be=Q(),et=H(G,{"aria-label":n||_.format("increase",{fieldLabel:X}).trim(),id:T&&!n?me:null,"aria-labelledby":T&&!n?`${me} ${T}`:null,"aria-controls":z,excludeFromTabOrder:!0,preventFocusOnPress:!0,allowFocusWhenDisabled:!0,isDisabled:!a.canIncrement,onPressStart:fe}),at=H(M,{"aria-label":l||_.format("decrease",{fieldLabel:X}).trim(),id:T&&!l?be:null,"aria-labelledby":T&&!l?`${be} ${T}`:null,"aria-controls":z,excludeFromTabOrder:!0,preventFocusOnPress:!0,allowFocusWhenDisabled:!0,isDisabled:!a.canDecrement,onPressStart:fe});return{groupProps:{...Ua,role:"group","aria-disabled":o,"aria-invalid":ue?"true":void 0},labelProps:de,inputProps:ce,incrementButtonProps:et,decrementButtonProps:at,errorMessageProps:Qa,descriptionProps:Ja,isInvalid:ue,validationErrors:Za,validationDetails:Ya}}function Xt(e){let{minValue:a,maxValue:t,step:r,formatOptions:l,value:n,defaultValue:o=NaN,onChange:d,locale:m,isDisabled:$,isReadOnly:x}=e;n===null&&(n=NaN),n!==void 0&&!isNaN(n)&&(r!==void 0&&!isNaN(r)?n=w(n,a,t,r):n=ee(n,a,t)),isNaN(o)||(r!==void 0&&!isNaN(r)?o=w(o,a,t,r):o=ee(o,a,t));let[s,i]=Mt(n,isNaN(o)?NaN:o,d),[u,v]=f.useState(()=>isNaN(s)?"":new ie(m,l).format(s)),y=f.useMemo(()=>new Fe(m,l),[m,l]),N=f.useMemo(()=>y.getNumberingSystem(u),[y,u]),F=f.useMemo(()=>new ie(m,{...l,numberingSystem:N}),[m,l,N]),S=f.useMemo(()=>F.resolvedOptions(),[F]),g=f.useCallback(p=>isNaN(p)||p===null?"":F.format(p),[F]),P=vt({...e,value:s}),h=r!==void 0&&!isNaN(r)?r:1;S.style==="percent"&&(r===void 0||isNaN(r))&&(h=.01);let[C,B]=f.useState(s),[I,V]=f.useState(m),[b,c]=f.useState(l);(!Object.is(s,C)||m!==I||l!==b)&&(v(g(s)),B(s),V(m),c(l));let E=f.useMemo(()=>y.parse(u),[y,u]),A=()=>{if(!u.length){i(NaN),v(n===void 0?"":g(s));return}if(isNaN(E)){v(g(s));return}let p;r===void 0||isNaN(r)?p=ee(E,a,t):p=w(E,a,t,r),p=y.parse(g(p)),i(p),v(g(n===void 0?p:s))},O=(p,G=0)=>{let M=E;if(isNaN(M)){let R=isNaN(G)?0:G;return w(R,a,t,h)}else{let R=w(M,a,t,h);return p==="+"&&R>M||p==="-"&&R<M?R:w(te(p,M,h),a,t,h)}},_=()=>{let p=O("+",a);p===s&&v(g(p)),i(p),P.commitValidation()},z=()=>{let p=O("-",t);p===s&&v(g(p)),i(p),P.commitValidation()},Z=()=>{t!=null&&(i(w(t,a,t,h)),P.commitValidation())},U=()=>{a!=null&&(i(a),P.commitValidation())},Y=f.useMemo(()=>!$&&!x&&(isNaN(E)||t===void 0||isNaN(t)||w(E,a,t,h)>E||te("+",E,h)<=t),[$,x,a,t,h,E]),W=f.useMemo(()=>!$&&!x&&(isNaN(E)||a===void 0||isNaN(a)||w(E,a,t,h)<E||te("-",E,h)>=a),[$,x,a,t,h,E]);return{...P,validate:p=>y.isValidPartialNumber(p,a,t),increment:_,incrementToMax:Z,decrement:z,decrementToMin:U,canIncrement:Y,canDecrement:W,minValue:a,maxValue:t,numberValue:E,setNumberValue:i,setInputValue:v,inputValue:u,commit:A}}function te(e,a,t){let r=e==="+"?a+t:a-t;if(a%1!==0||t%1!==0){const l=a.toString().split("."),n=t.toString().split("."),o=l[1]&&l[1].length||0,d=n[1]&&n[1].length||0,m=Math.pow(10,Math.max(o,d));a=Math.round(a*m),t=Math.round(t*m),r=e==="+"?a+t:a-t,r/=m}return r}const Ka=f.createContext({});function Jt(e,a){[e,a]=Pe(e,a,Ka);let{isDisabled:t,isInvalid:r,onHoverStart:l,onHoverChange:n,onHoverEnd:o,...d}=e,{hoverProps:m,isHovered:$}=Nt({onHoverStart:l,onHoverChange:n,onHoverEnd:o,isDisabled:t}),{isFocused:x,isFocusVisible:s,focusProps:i}=Ft({within:!0});t??(t=!!e["aria-disabled"]&&e["aria-disabled"]!=="false"),r??(r=!!e["aria-invalid"]&&e["aria-invalid"]!=="false");let u=Ee({...e,values:{isHovered:$,isFocusWithin:x,isFocusVisible:s,isDisabled:t,isInvalid:r},defaultClassName:"react-aria-Group"});var v,y;return D.createElement("div",{...H(d,i,m),...u,ref:a,role:(v=e.role)!==null&&v!==void 0?v:"group",slot:(y=e.slot)!==null&&y!==void 0?y:void 0,"data-focus-within":x||void 0,"data-hovered":$||void 0,"data-focus-visible":s||void 0,"data-disabled":t||void 0,"data-invalid":r||void 0},u.children)}const Qt=f.forwardRef(Jt),er=f.createContext(null),ar=f.createContext(null);function tr(e,a){[e,a]=Pe(e,a,er);let{validationBehavior:t}=ft(xt)||{};var r,l;let n=(l=(r=e.validationBehavior)!==null&&r!==void 0?r:t)!==null&&l!==void 0?l:"native",{locale:o}=It(),d=Xt({...e,locale:o,validationBehavior:n}),m=f.useRef(null),[$,x]=mt(),{labelProps:s,groupProps:i,inputProps:u,incrementButtonProps:v,decrementButtonProps:y,descriptionProps:N,errorMessageProps:F,...S}=Yt({...bt(e),label:x,validationBehavior:n},d,m),g=Ee({...e,values:{state:d,isDisabled:e.isDisabled||!1,isInvalid:S.isInvalid||!1},defaultClassName:"react-aria-NumberField"}),P=De(e);return delete P.id,D.createElement(pt,{values:[[ar,d],[Ka,i],[Bt,{...u,ref:m}],[Vt,{...s,ref:$}],[ct,{slots:{increment:v,decrement:y}}],[wt,{slots:{description:N,errorMessage:F}}],[ht,S]]},D.createElement("div",{...P,...g,ref:a,slot:e.slot||void 0,"data-disabled":e.isDisabled||void 0,"data-invalid":S.isInvalid||void 0}),e.name&&D.createElement("input",{type:"hidden",name:e.name,value:isNaN(d.numberValue)?"":d.numberValue}))}const rr=f.forwardRef(tr),ir="flow--number-field--group",nr="flow--number-field--input",lr="flow--number-field--decrement-button",sr="flow--number-field--increment-button",or="flow--number-field--coarse-pointer-icon",ur="flow--number-field--touch-icon",k={group:ir,input:nr,decrementButton:lr,incrementButton:sr,coarsePointerIcon:or,touchIcon:ur},dr=dt("NumberField",e=>{const{children:a,className:t,refProp:r,...l}=e,n=rt(K.formField,t),o={Label:{className:K.label,optional:!e.isRequired},FieldDescription:{className:K.fieldDescription},FieldError:{className:K.customFieldError}};return D.createElement(it,null,D.createElement(rr,{...l,className:n},D.createElement(Qt,{className:k.group},D.createElement(pe,{slot:"decrement",className:k.decrementButton,size:"s",variant:"plain",color:"secondary"},D.createElement(lt,null),D.createElement(st,{className:k.coarsePointerIcon})),D.createElement(Ct,{className:k.input,ref:r}),D.createElement(pe,{slot:"increment",className:k.incrementButton,size:"s",variant:"plain",color:"secondary"},D.createElement(ot,null),D.createElement(ut,{className:k.coarsePointerIcon}))),D.createElement(nt,{props:o},a),D.createElement(tt,{className:K.fieldError})))});dr.__docgenInfo={description:"",methods:[],displayName:"NumberField"};export{dr as N};
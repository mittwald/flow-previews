import{a as p}from"./useLocalizedStringFormatter-CbSA8sNn.js";import{r as m}from"./index-BwDkhjyp.js";let l=new Map,u=!1;try{u=new Intl.NumberFormat("de-DE",{signDisplay:"exceptZero"}).resolvedOptions().signDisplay==="exceptZero"}catch{}let f=!1;try{f=new Intl.NumberFormat("de-DE",{style:"unit",unit:"degree"}).resolvedOptions().style==="unit"}catch{}const c={degree:{narrow:{default:"°","ja-JP":" 度","zh-TW":"度","sl-SI":" °"}}};class d{format(t){let e="";if(!u&&this.options.signDisplay!=null?e=h(this.numberFormatter,this.options.signDisplay,t):e=this.numberFormatter.format(t),this.options.style==="unit"&&!f){var i;let{unit:a,unitDisplay:s="short",locale:o}=this.resolvedOptions();if(!a)return e;let n=(i=c[a])===null||i===void 0?void 0:i[s];e+=n[o]||n.default}return e}formatToParts(t){return this.numberFormatter.formatToParts(t)}formatRange(t,e){if(typeof this.numberFormatter.formatRange=="function")return this.numberFormatter.formatRange(t,e);if(e<t)throw new RangeError("End date must be >= start date");return`${this.format(t)} – ${this.format(e)}`}formatRangeToParts(t,e){if(typeof this.numberFormatter.formatRangeToParts=="function")return this.numberFormatter.formatRangeToParts(t,e);if(e<t)throw new RangeError("End date must be >= start date");let i=this.numberFormatter.formatToParts(t),a=this.numberFormatter.formatToParts(e);return[...i.map(s=>({...s,source:"startRange"})),{type:"literal",value:" – ",source:"shared"},...a.map(s=>({...s,source:"endRange"}))]}resolvedOptions(){let t=this.numberFormatter.resolvedOptions();return!u&&this.options.signDisplay!=null&&(t={...t,signDisplay:this.options.signDisplay}),!f&&this.options.style==="unit"&&(t={...t,style:"unit",unit:this.options.unit,unitDisplay:this.options.unitDisplay}),t}constructor(t,e={}){this.numberFormatter=b(t,e),this.options=e}}function b(r,t={}){let{numberingSystem:e}=t;if(e&&r.includes("-nu-")&&(r.includes("-u-")||(r+="-u-"),r+=`-nu-${e}`),t.style==="unit"&&!f){var i;let{unit:o,unitDisplay:n="short"}=t;if(!o)throw new Error('unit option must be provided with style: "unit"');if(!(!((i=c[o])===null||i===void 0)&&i[n]))throw new Error(`Unsupported unit ${o} with unitDisplay = ${n}`);t={...t,style:"decimal"}}let a=r+(t?Object.entries(t).sort((o,n)=>o[0]<n[0]?-1:1).join():"");if(l.has(a))return l.get(a);let s=new Intl.NumberFormat(r,t);return l.set(a,s),s}function h(r,t,e){if(t==="auto")return r.format(e);if(t==="never")return r.format(Math.abs(e));{let i=!1;if(t==="always"?i=e>0||Object.is(e,0):t==="exceptZero"&&(Object.is(e,-0)||Object.is(e,0)?e=Math.abs(e):i=e>0),i){let a=r.format(-e),s=r.format(e),o=a.replace(s,"").replace(/\u200e|\u061C/,"");return[...o].length!==1&&console.warn("@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case"),a.replace(s,"!!!").replace(o,"+").replace("!!!",s)}else return r.format(e)}}function g(r={}){let{locale:t}=p();return m.useMemo(()=>new d(t,r),[t,r])}export{g as $,d as a};
import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as C}from"./clsx-B-dksMZM.js";import"./index-BdpSHsi2.js";import{a as _,b as U}from"./ProgressBar-Dwuqfbjf.js";import{g as O}from"./getCategoricalColorByIndex-BIvTpnTO.js";import{W as B}from"./PropsContextProvider-C-b87vuo.js";import{L as E,a as R}from"./Legend-C5OiymJO.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BAMY2Nnw.js";import"./utils-q_Aud5Js.js";import"./mergeRefs-COuk0-v5.js";import"./Label-C5gSD-Mq.js";import"./Hidden-RoZfe91Z.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DtWExE0a.js";import"./context-C-2WHVw-.js";import"./NumberFormatter-DNR9MAW-.js";import"./iframe-ygCrKlO6.js";import"./index-DU8gk_nc.js";import"./index-lEnnwJps.js";import"./Text-BNig5f85.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-DOyoRrwd.js";import"./Text-DtGJyZhh.js";const M="flow--donut-chart",Z="flow--donut-chart--border",G="flow--donut-chart--background",H="flow--donut-chart--value",J="flow--donut-chart--info",K="flow--donut-chart--fill",Q="flow--donut-chart--success",X="flow--donut-chart--danger",Y="flow--donut-chart--warning",ee="flow--donut-chart--donut-chart-container",te="flow--donut-chart--bottom",re="flow--donut-chart--top",ae="flow--donut-chart--right",ne="flow--donut-chart--legend",oe="flow--donut-chart--left",c={donutChart:M,border:Z,background:G,value:H,"size-l":"flow--donut-chart--size-l",info:J,fill:K,success:Q,danger:X,warning:Y,donutChartContainer:ee,bottom:te,top:re,right:ae,legend:ne,left:oe},w=o=>{const{value:a=0,formatOptions:u,valueText:s}=o,l=_(u),r=s??(u?l.format(a):`${a} %`),n=r.trim().match(/^([\d.,]+)\s*([a-zA-Z]+)$/);return r.includes("%")||!n?e.jsx("span",{className:c.value,children:e.jsx("b",{children:r})}):e.jsxs("span",{className:c.value,children:[e.jsx("b",{children:n[1]}),e.jsx("small",{children:n[2]})]})};w.__docgenInfo={description:"",methods:[],displayName:"DonutChartValue",props:{value:{required:!1,tsType:{name:"number"},description:""},valueText:{required:!1,tsType:{name:"string"},description:""}},composes:["Pick"]};const S=o=>{const{center:a,value:u=0,radius:s,segments:l,maxValue:r}=o,n=2*s*Math.PI,m=100/r*u;if(!l)return e.jsx("circle",{className:c.fill,cx:a,cy:a,r:s,strokeDasharray:`${n} ${n}`,strokeDashoffset:n-m/100*n,transform:`rotate(-90 ${a} ${a})`});let i=0;return l.map((t,d)=>{const g=100/r*t.value,p=i;return i=i+360/100*g,e.jsx("circle",{cx:a,cy:a,r:s,strokeDasharray:`${n} ${n}`,strokeDashoffset:n-g/100*n,stroke:`var(--color--categorical--${t.color??O(d)})`,transform:`rotate(${-90+p} ${a} ${a})`})})};S.__docgenInfo={description:"",methods:[],displayName:"DonutChartFill",props:{center:{required:!0,tsType:{name:"number"},description:""},value:{required:!1,tsType:{name:"number"},description:""},radius:{required:!0,tsType:{name:"number"},description:""},maxValue:{required:!0,tsType:{name:"number"},description:""}},composes:["Pick"]};const P=o=>{const{value:a=0,segments:u,formatOptions:s,size:l,maxValue:r,valueText:n}=o,m=.5,i=l==="m"?8:12,t=i*4,d=t-i/2;return e.jsxs(e.Fragment,{children:[e.jsxs("svg",{width:t*4,height:t*4,viewBox:`0 0 ${t*2} ${t*2}`,fill:"none",strokeWidth:i,children:[e.jsx("circle",{className:c.background,cx:t,cy:t,r:d,strokeWidth:i}),e.jsx("circle",{className:c.border,cx:t,cy:t,r:t-m/2,strokeWidth:m}),e.jsx("circle",{className:c.border,cx:t,cy:t,r:t-i+m/2,strokeWidth:m}),e.jsx(S,{radius:d,center:t,value:a,segments:u,maxValue:r??100})]}),e.jsx(w,{value:a,formatOptions:s,valueText:n})]})};P.__docgenInfo={description:"",methods:[],displayName:"Donut",props:{value:{required:!1,tsType:{name:"number"},description:""}},composes:["Pick"]};const A=o=>{const{segments:a,showLegend:u,formatOptions:s}=o,l=_(s);return!a||!u?null:e.jsx(E,{className:c.legend,children:a.map((r,n)=>e.jsx(R,{color:r.color??O(n),children:`${r.title} (${r.valueText??(s?l.format(r.value):`${r.value} %`)})`}))})};A.__docgenInfo={description:"",methods:[],displayName:"DonutChartLegend"};const f=o=>{const{size:a="m",status:u="info",className:s,value:l,segments:r,maxValue:n,formatOptions:m,valueText:i,showLegend:t,...d}=o,g=C(c.donutChart,a==="l"&&c["size-l"],c[u],s),p=r?r.map(y=>y.value).reduce((y,F)=>y+F,0):void 0;return e.jsx(B,{if:t&&r,children:e.jsxs("div",{className:C(c.donutChartContainer,t&&c[t]),children:[e.jsxs(U,{className:g,value:p??l,...d,children:[e.jsx(P,{value:p??l,formatOptions:m,segments:r,size:a,maxValue:n,valueText:i}),e.jsx(w,{value:p??l,formatOptions:m,valueText:i})]}),t&&r&&e.jsx(A,{showLegend:t,segments:r,formatOptions:m})]})})};f.__docgenInfo={description:"@flr-generate all",methods:[],displayName:"DonutChart",props:{size:{required:!1,tsType:{name:"union",raw:'"m" | "l"',elements:[{name:"literal",value:'"m"'},{name:"literal",value:'"l"'}]},description:'The size variant of the donut chart. @default "m"'},segments:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: number;
  title: string;
  color?: CategoricalColors;
  valueText?: string;
}`,signature:{properties:[{key:"value",value:{name:"number",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"color",value:{name:"CategoricalColors",required:!1}},{key:"valueText",value:{name:"string",required:!1}}]}}],raw:`{
  value: number;
  title: string;
  color?: CategoricalColors;
  valueText?: string;
}[]`},description:"Divides the fill of the donut chart into segments"},valueText:{required:!1,tsType:{name:"string"},description:"An optional text to be displayed instead of the formatted value"},showLegend:{required:!1,tsType:{name:"union",raw:'"top" | "left" | "bottom" | "right" | false',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"left"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"right"'},{name:"literal",value:"false"}]},description:`The position of the legend, if set to false, the legend is hidden @default
false`}},composes:["Omit","PropsWithStatus"]};const qe={title:"Data Visualisation/DonutChart",component:f,args:{size:"m",status:"info"},argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]},size:{control:"inline-radio",options:["m","l"]},showLegend:{control:"inline-radio",options:["top","right","bottom","left",!1]}},parameters:{controls:{exclude:["segments"]}},render:o=>e.jsx(f,{value:30,...o})},h={},v={args:{formatOptions:{style:"unit",unit:"gigabyte"},maxValue:600,value:300}},x={args:{segments:[{title:"Item 1",value:50},{title:"Item 2",value:25},{title:"Item 3",value:12}],size:"l"},render:o=>e.jsx(f,{"aria-label":"storage",...o})},b={args:{segments:[{title:"Item 1",value:28},{title:"Item 2",value:24},{title:"Item 3",value:20},{title:"Item 4",value:10},{title:"Item 5",value:12},{title:"Item 6",value:6}],size:"l",showLegend:"top"},render:o=>e.jsx(f,{"aria-label":"storage",...o})};var j,I,T;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(T=(I=h.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var $,D,k;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    formatOptions: {
      style: "unit",
      unit: "gigabyte"
    },
    maxValue: 600,
    value: 300
  }
}`,...(k=(D=v.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var N,q,z;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    segments: [{
      title: "Item 1",
      value: 50
    }, {
      title: "Item 2",
      value: 25
    }, {
      title: "Item 3",
      value: 12
    }],
    size: "l"
  },
  render: props => <DonutChart aria-label="storage" {...props} />
}`,...(z=(q=x.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var L,W,V;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    segments: [{
      title: "Item 1",
      value: 28
    }, {
      title: "Item 2",
      value: 24
    }, {
      title: "Item 3",
      value: 20
    }, {
      title: "Item 4",
      value: 10
    }, {
      title: "Item 5",
      value: 12
    }, {
      title: "Item 6",
      value: 6
    }],
    size: "l",
    showLegend: "top"
  },
  render: props => <DonutChart aria-label="storage" {...props} />
}`,...(V=(W=b.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};const ze=["Default","WithUnit","WithSegments","WithLegend"];export{h as Default,b as WithLegend,x as WithSegments,v as WithUnit,ze as __namedExportsOrder,qe as default};

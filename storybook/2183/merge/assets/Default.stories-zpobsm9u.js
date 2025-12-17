import{r as N,j as e}from"./iframe-CQakcPxy.js";import{c as C}from"./clsx-B-dksMZM.js";import{c as D,d as k}from"./ProgressBar-Dp4X-EbZ.js";import{g as I}from"./getCategoricalColorByIndex-BIvTpnTO.js";import{a as z,L as P}from"./Legend-DErNzk32.js";import{W as L}from"./Text-BtxvTgzr.js";const S="flow--donut-chart",O="flow--donut-chart--border",q="flow--donut-chart--background",B="flow--donut-chart--value",E="flow--donut-chart--info",F="flow--donut-chart--fill",G="flow--donut-chart--success",M="flow--donut-chart--danger",R="flow--donut-chart--warning",U="flow--donut-chart--donut-chart-container",A="flow--donut-chart--bottom",H="flow--donut-chart--top",J="flow--donut-chart--right",K="flow--donut-chart--legend",Q="flow--donut-chart--left",i={donutChart:S,border:O,background:q,value:B,"size-l":"flow--donut-chart--size-l",info:E,fill:F,success:G,danger:M,warning:R,donutChartContainer:U,bottom:A,top:H,right:J,legend:K,left:Q},$=o=>{const{value:n=0,formatOptions:c,children:s}=o,l=D(c);if(N.Children.count(s)>0)return e.jsx("span",{className:i.value,children:s});const t=c?l.format(n):`${n} %`;return e.jsx("span",{className:i.value,children:e.jsx("strong",{children:t})})};$.__docgenInfo={description:"",methods:[],displayName:"DonutChartValue",props:{value:{required:!1,tsType:{name:"number"},description:""}},composes:["Pick"]};const T=o=>{const{center:n,value:c=0,radius:s,segments:l,maxValue:t}=o,a=2*s*Math.PI,r=100/t*c;if(!l)return e.jsx("circle",{className:i.fill,cx:n,cy:n,r:s,strokeDasharray:`${a} ${a}`,strokeDashoffset:a-r/100*a,transform:`rotate(-90 ${n} ${n})`});let u=0;return l.map((v,x)=>{const b=100/t*v.value,w=u;return u=u+360/100*b,e.jsx("circle",{cx:n,cy:n,r:s,strokeDasharray:`${a} ${a}`,strokeDashoffset:a-b/100*a,stroke:`var(--color--categorical--${v.color??I(x)})`,transform:`rotate(${-90+w} ${n} ${n})`},x)})};T.__docgenInfo={description:"",methods:[],displayName:"DonutChartFill",props:{center:{required:!0,tsType:{name:"number"},description:""},value:{required:!1,tsType:{name:"number"},description:""},radius:{required:!0,tsType:{name:"number"},description:""},maxValue:{required:!0,tsType:{name:"number"},description:""}},composes:["Pick"]};const V=o=>{const{value:n=0,segments:c,size:s,maxValue:l}=o,t=.5,a=s==="m"?8:12,r=a*4,u=r-a/2;return e.jsx(e.Fragment,{children:e.jsxs("svg",{width:r*4,height:r*4,viewBox:`0 0 ${r*2} ${r*2}`,fill:"none",strokeWidth:a,children:[e.jsx("circle",{className:i.background,cx:r,cy:r,r:u,strokeWidth:a}),e.jsx("circle",{className:i.border,cx:r,cy:r,r:r-t/2,strokeWidth:t}),e.jsx("circle",{className:i.border,cx:r,cy:r,r:r-a+t/2,strokeWidth:t}),e.jsx(T,{radius:u,center:r,value:n,segments:c,maxValue:l??100})]})})};V.__docgenInfo={description:"",methods:[],displayName:"Donut",props:{value:{required:!1,tsType:{name:"number"},description:""}},composes:["Pick"]};const W=o=>{const{segments:n,showLegend:c,formatOptions:s}=o,l=D(s);return!n||!c?null:e.jsx(z,{className:i.legend,children:n.map((t,a)=>{const r=s?l.format(t.value):`${t.value} %`;return e.jsx(P,{color:t.color??I(a),children:`${t.title} (${t.valueText??r})`},t.title)})})};W.__docgenInfo={description:"",methods:[],displayName:"DonutChartLegend"};const m=o=>{const{size:n="m",status:c="info",className:s,value:l,segments:t,maxValue:a,formatOptions:r,showLegend:u=!0,legendPosition:v="right",children:x,...b}=o,w=C(i.donutChart,n==="l"&&i["size-l"],i[c],s),y=t?t.map(j=>j.value).reduce((j,_)=>j+_,0):void 0;return e.jsx(L,{if:u&&t,children:e.jsxs("div",{className:C(i.donutChartContainer,i[v]),children:[e.jsxs(k,{className:w,value:y??l,...b,children:[e.jsx(V,{value:y??l,segments:t,size:n,maxValue:a}),e.jsx($,{value:y??l,formatOptions:r,children:x})]}),u&&t&&e.jsx(W,{showLegend:u,segments:t,formatOptions:r})]})})};m.__docgenInfo={description:"@flr-generate all",methods:[],displayName:"DonutChart",props:{size:{required:!1,tsType:{name:"union",raw:'"m" | "l"',elements:[{name:"literal",value:'"m"'},{name:"literal",value:'"l"'}]},description:'The size variant of the donut chart. @default "m"'},segments:{required:!1,tsType:{name:"Array",elements:[{name:"DonutChartSegment"}],raw:"DonutChartSegment[]"},description:"Divides the fill of the donut chart into segments"},showLegend:{required:!1,tsType:{name:"boolean"},description:`Whether the legend component is shown when segments are used. @default:
true`},legendPosition:{required:!1,tsType:{name:"union",raw:'"top" | "left" | "bottom" | "right"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"left"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"right"'}]},description:'The position of the legend. @default "right"'}},composes:["Omit","PropsWithStatus","PropsWithChildren"]};const X={title:"Data Visualisation/DonutChart",component:m,args:{size:"m",status:"info"},argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]},size:{control:"inline-radio",options:["m","l"]},legendPosition:{control:"inline-radio",options:["top","right","bottom","left"]}},parameters:{controls:{exclude:["segments"]}},render:o=>e.jsx(m,{value:30,...o})},d={},p={args:{formatOptions:{style:"unit",unit:"gigabyte"},maxValue:600,value:300}},h={args:{segments:[{title:"Item 1",value:50},{title:"Item 2",value:25},{title:"Item 3",value:12}],size:"l"},render:o=>e.jsx(m,{"aria-label":"storage",...o})},g={args:{segments:[{title:"Item 1",value:28},{title:"Item 2",value:24},{title:"Item 3",value:20},{title:"Item 4",value:10},{title:"Item 5",value:12},{title:"Item 6",value:6}],size:"l",showLegend:!0,legendPosition:"top"},render:o=>e.jsx(m,{"aria-label":"storage",...o})},f={args:{maxValue:600},render:o=>e.jsxs(m,{...o,value:300,children:[e.jsx("strong",{children:300}),e.jsx("small",{children:"GB"})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    formatOptions: {
      style: "unit",
      unit: "gigabyte"
    },
    maxValue: 600,
    value: 300
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
    showLegend: true,
    legendPosition: "top"
  },
  render: props => <DonutChart aria-label="storage" {...props} />
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    maxValue: 600
  },
  render: props => {
    const value = 300;
    return <DonutChart {...props} value={value}>
        <strong>{value}</strong>
        <small>GB</small>
      </DonutChart>;
  }
}`,...f.parameters?.docs?.source}}};const Y=["Default","WithUnit","WithSegments","WithLegend","WithTextValue"],oe=Object.freeze(Object.defineProperty({__proto__:null,Default:d,WithLegend:g,WithSegments:h,WithTextValue:f,WithUnit:p,__namedExportsOrder:Y,default:X},Symbol.toStringTag,{value:"Module"}));export{m as D,oe as a,X as m};

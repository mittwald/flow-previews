import{j as t}from"./iframe-Cb4Rgx0e.js";import{D as r}from"./DonutChart-DEgBQ_V0.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./ProgressBar-DhcjamRH.js";import"./utils-ClJ9kHS9.js";import"./mergeRefs-FGc6ILVF.js";import"./index-BCJuwVXE.js";import"./Label-BSwFIexW.js";import"./Hidden-WIE7yK1s.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-YUMynDBh.js";import"./context-CW2oe5vS.js";import"./NumberFormatter-DNR9MAW-.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Text-B7bLqwrq.js";import"./PropsContextProvider-CbnVRX13.js";import"./browser-GZXaf9ZM.js";import"./EmulatedBoldText-BOxB1C6V.js";import"./Text-U_OSpJmR.js";import"./Legend-9RZRYwP_.js";const J={title:"Data Visualisation/DonutChart",component:r,args:{size:"m",status:"info"},argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]},size:{control:"inline-radio",options:["m","l"]},legendPosition:{control:"inline-radio",options:["top","right","bottom","left"]}},parameters:{controls:{exclude:["segments"]}},render:e=>t.jsx(r,{value:30,...e})},a={},n={args:{formatOptions:{style:"unit",unit:"gigabyte"},maxValue:600,value:300}},s={args:{segments:[{title:"Item 1",value:50},{title:"Item 2",value:25},{title:"Item 3",value:12}],size:"l"},render:e=>t.jsx(r,{"aria-label":"storage",...e})},o={args:{segments:[{title:"Item 1",value:28},{title:"Item 2",value:24},{title:"Item 3",value:20},{title:"Item 4",value:10},{title:"Item 5",value:12},{title:"Item 6",value:6}],size:"l",showLegend:!0,legendPosition:"top"},render:e=>t.jsx(r,{"aria-label":"storage",...e})},i={args:{maxValue:600},render:e=>t.jsxs(r,{...e,value:300,children:[t.jsx("b",{children:300}),t.jsx("small",{children:"GB"})]})};var l,m,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,c,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    formatOptions: {
      style: "unit",
      unit: "gigabyte"
    },
    maxValue: 600,
    value: 300
  }
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var g,v,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(h=(v=s.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var I,x,b;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(b=(x=o.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var f,D,j;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    maxValue: 600
  },
  render: props => {
    const value = 300;
    return <DonutChart {...props} value={value}>
        <b>{value}</b>
        <small>GB</small>
      </DonutChart>;
  }
}`,...(j=(D=i.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};const K=["Default","WithUnit","WithSegments","WithLegend","WithTextValue"];export{a as Default,o as WithLegend,s as WithSegments,i as WithTextValue,n as WithUnit,K as __namedExportsOrder,J as default};

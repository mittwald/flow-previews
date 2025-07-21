import{j as t}from"./iframe-tng_7MnI.js";import{D as r}from"./DonutChart-Dyl8vhGy.js";import"./clsx-B-dksMZM.js";import"./ProgressBar-BKGN512w.js";import"./utils-5hQd1GPy.js";import"./mergeRefs--BPoweoc.js";import"./index-Drzl8fEc.js";import"./Label-CUv_itT5.js";import"./Hidden-DtL8MOne.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Xo2bW3MF.js";import"./context-DF7MMgfI.js";import"./NumberFormatter-DNR9MAW-.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./PropsContextProvider-DYtDUrj3.js";import"./Legend-DGRss7H-.js";import"./Text-D_jDO6uI.js";import"./browser-zPD-OImI.js";import"./EmulatedBoldText-d-Lx_bwT.js";import"./Text-CW9rRGi5.js";const H={title:"Data Visualisation/DonutChart",component:r,args:{size:"m",status:"info"},argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]},size:{control:"inline-radio",options:["m","l"]},legendPosition:{control:"inline-radio",options:["top","right","bottom","left"]}},parameters:{controls:{exclude:["segments"]}},render:e=>t.jsx(r,{value:30,...e})},a={},n={args:{formatOptions:{style:"unit",unit:"gigabyte"},maxValue:600,value:300}},s={args:{segments:[{title:"Item 1",value:50},{title:"Item 2",value:25},{title:"Item 3",value:12}],size:"l"},render:e=>t.jsx(r,{"aria-label":"storage",...e})},o={args:{segments:[{title:"Item 1",value:28},{title:"Item 2",value:24},{title:"Item 3",value:20},{title:"Item 4",value:10},{title:"Item 5",value:12},{title:"Item 6",value:6}],size:"l",showLegend:!0,legendPosition:"top"},render:e=>t.jsx(r,{"aria-label":"storage",...e})},i={args:{maxValue:600},render:e=>t.jsxs(r,{...e,value:300,children:[t.jsx("b",{children:300}),t.jsx("small",{children:"GB"})]})};var l,m,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,c,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(j=(D=i.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};const J=["Default","WithUnit","WithSegments","WithLegend","WithTextValue"];export{a as Default,o as WithLegend,s as WithSegments,i as WithTextValue,n as WithUnit,J as __namedExportsOrder,H as default};

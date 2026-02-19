import{j as t}from"./iframe-CDsKaBRg.js";import{D as r}from"./DonutChart-KV6MP4i3.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./ProgressBar-HELWPhB_.js";import"./utils-D_LVRUjq.js";import"./index-C6JQHEhq.js";import"./index-RjKRi-BV.js";import"./Label-PkZPP5nP.js";import"./Hidden-kPYjxK5s.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CIho-35Z.js";import"./context-BPMj9VV_.js";import"./NumberFormatter-DNR9MAW-.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-CFHuBL3c.js";import"./Text-BC05_GH2.js";import"./flowComponent-CuU7ZQj2.js";import"./browser-CeRuCCb_.js";import"./EmulatedBoldText-D5k4nusE.js";import"./Text-Ara-YSvE.js";const L={title:"Data Visualisation/DonutChart",component:r,args:{size:"m",status:"info"},argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]},size:{control:"inline-radio",options:["m","l"]},legendPosition:{control:"inline-radio",options:["top","right","bottom","left"]}},parameters:{controls:{exclude:["segments"]}},render:e=>t.jsx(r,{value:30,...e})},n={},a={args:{formatOptions:{style:"unit",unit:"gigabyte"},maxValue:600,value:300}},o={args:{segments:[{title:"Item 1",value:50},{title:"Item 2",value:25},{title:"Item 3",value:12}],size:"l"},render:e=>t.jsx(r,{"aria-label":"storage",...e})},s={args:{segments:[{title:"Item 1",value:28},{title:"Item 2",value:24},{title:"Item 3",value:20},{title:"Item 4",value:10},{title:"Item 5",value:12,color:"yellow"},{title:"Item 6",value:6,color:"#555"}],size:"l",showLegend:!0,legendPosition:"top"},render:e=>t.jsx(r,{"aria-label":"storage",...e})},i={args:{maxValue:600},render:e=>t.jsxs(r,{...e,value:300,children:[t.jsx("strong",{children:300}),t.jsx("small",{children:"GB"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    formatOptions: {
      style: "unit",
      unit: "gigabyte"
    },
    maxValue: 600,
    value: 300
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
      value: 12,
      color: "yellow"
    }, {
      title: "Item 6",
      value: 6,
      color: "#555"
    }],
    size: "l",
    showLegend: true,
    legendPosition: "top"
  },
  render: props => <DonutChart aria-label="storage" {...props} />
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const O=["Default","WithUnit","WithSegments","WithLegend","WithTextValue"];export{n as Default,s as WithLegend,o as WithSegments,i as WithTextValue,a as WithUnit,O as __namedExportsOrder,L as default};

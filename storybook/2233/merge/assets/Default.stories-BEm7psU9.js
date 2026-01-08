import{j as t}from"./iframe-BMquwUxp.js";import{D as r}from"./DonutChart-D8OBjCdD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./ProgressBar-ztA157SI.js";import"./utils-C54becjs.js";import"./index-BYK8miAY.js";import"./index-cAMRUrux.js";import"./Label-BA-uOG5q.js";import"./Hidden-DXpev5BT.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BNLCM250.js";import"./context-BcuHL9mG.js";import"./NumberFormatter-DNR9MAW-.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-EaNdDtop.js";import"./Text-EG4UQ_l2.js";import"./flowComponent-DgzAUF5h.js";import"./browser-CBlt42Oy.js";import"./EmulatedBoldText-CntJSrfE.js";import"./Text-CPXkgTZA.js";const L={title:"Data Visualisation/DonutChart",component:r,args:{size:"m",status:"info"},argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]},size:{control:"inline-radio",options:["m","l"]},legendPosition:{control:"inline-radio",options:["top","right","bottom","left"]}},parameters:{controls:{exclude:["segments"]}},render:e=>t.jsx(r,{value:30,...e})},n={},a={args:{formatOptions:{style:"unit",unit:"gigabyte"},maxValue:600,value:300}},o={args:{segments:[{title:"Item 1",value:50},{title:"Item 2",value:25},{title:"Item 3",value:12}],size:"l"},render:e=>t.jsx(r,{"aria-label":"storage",...e})},s={args:{segments:[{title:"Item 1",value:28},{title:"Item 2",value:24},{title:"Item 3",value:20},{title:"Item 4",value:10},{title:"Item 5",value:12,color:"yellow"},{title:"Item 6",value:6,color:"#555"}],size:"l",showLegend:!0,legendPosition:"top"},render:e=>t.jsx(r,{"aria-label":"storage",...e})},i={args:{maxValue:600},render:e=>t.jsxs(r,{...e,value:300,children:[t.jsx("strong",{children:300}),t.jsx("small",{children:"GB"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

import{j as t}from"./iframe-DyIQYB7R.js";import{D as r}from"./DonutChart-D8nHL8c5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./ProgressBar-BLYv6NCO.js";import"./utils-Br5k-T_U.js";import"./index-DNyY7P3f.js";import"./index-BAJQpnn3.js";import"./Label-DLjzrNJv.js";import"./Hidden-CjE_I8s3.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Cx64g9XI.js";import"./context-DQwa7-Zw.js";import"./NumberFormatter-DNR9MAW-.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Text-DP5VQe4y.js";import"./flowComponent-B46dTgZy.js";import"./browser-Dsy2EDmz.js";import"./EmulatedBoldText-B3WFDqoc.js";import"./Text--49tgveg.js";import"./Legend-HukOmAFb.js";const w={title:"Data Visualisation/DonutChart",component:r,args:{size:"m",status:"info"},argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]},size:{control:"inline-radio",options:["m","l"]},legendPosition:{control:"inline-radio",options:["top","right","bottom","left"]}},parameters:{controls:{exclude:["segments"]}},render:e=>t.jsx(r,{value:30,...e})},n={},a={args:{formatOptions:{style:"unit",unit:"gigabyte"},maxValue:600,value:300}},s={args:{segments:[{title:"Item 1",value:50},{title:"Item 2",value:25},{title:"Item 3",value:12}],size:"l"},render:e=>t.jsx(r,{"aria-label":"storage",...e})},o={args:{segments:[{title:"Item 1",value:28},{title:"Item 2",value:24},{title:"Item 3",value:20},{title:"Item 4",value:10},{title:"Item 5",value:12},{title:"Item 6",value:6}],size:"l",showLegend:!0,legendPosition:"top"},render:e=>t.jsx(r,{"aria-label":"storage",...e})},i={args:{maxValue:600},render:e=>t.jsxs(r,{...e,value:300,children:[t.jsx("strong",{children:300}),t.jsx("small",{children:"GB"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    formatOptions: {
      style: "unit",
      unit: "gigabyte"
    },
    maxValue: 600,
    value: 300
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const O=["Default","WithUnit","WithSegments","WithLegend","WithTextValue"];export{n as Default,o as WithLegend,s as WithSegments,i as WithTextValue,a as WithUnit,O as __namedExportsOrder,w as default};

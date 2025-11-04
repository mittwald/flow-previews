import{j as t}from"./iframe-Dy6b_FCP.js";import{D as r}from"./DonutChart-CGuu04ru.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./ProgressBar-BRblqXhL.js";import"./utils-Dr97TsDg.js";import"./index-CVEy0Z38.js";import"./index-DfVSRZN_.js";import"./Hidden-CO8a8gup.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-Cmxdn71P.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Text-1cPTkrsR.js";import"./flowComponent-DrrEN2JN.js";import"./browser-B3C2hSkY.js";import"./EmulatedBoldText-rn83c_he.js";import"./Legend-RNcg6gZr.js";const z={title:"Data Visualisation/DonutChart",component:r,args:{size:"m",status:"info"},argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]},size:{control:"inline-radio",options:["m","l"]},legendPosition:{control:"inline-radio",options:["top","right","bottom","left"]}},parameters:{controls:{exclude:["segments"]}},render:e=>t.jsx(r,{value:30,...e})},a={},n={args:{formatOptions:{style:"unit",unit:"gigabyte"},maxValue:600,value:300}},s={args:{segments:[{title:"Item 1",value:50},{title:"Item 2",value:25},{title:"Item 3",value:12}],size:"l"},render:e=>t.jsx(r,{"aria-label":"storage",...e})},o={args:{segments:[{title:"Item 1",value:28},{title:"Item 2",value:24},{title:"Item 3",value:20},{title:"Item 4",value:10},{title:"Item 5",value:12},{title:"Item 6",value:6}],size:"l",showLegend:!0,legendPosition:"top"},render:e=>t.jsx(r,{"aria-label":"storage",...e})},i={args:{maxValue:600},render:e=>t.jsxs(r,{...e,value:300,children:[t.jsx("b",{children:300}),t.jsx("small",{children:"GB"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    formatOptions: {
      style: "unit",
      unit: "gigabyte"
    },
    maxValue: 600,
    value: 300
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
        <b>{value}</b>
        <small>GB</small>
      </DonutChart>;
  }
}`,...i.parameters?.docs?.source}}};const C=["Default","WithUnit","WithSegments","WithLegend","WithTextValue"];export{a as Default,o as WithLegend,s as WithSegments,i as WithTextValue,n as WithUnit,C as __namedExportsOrder,z as default};

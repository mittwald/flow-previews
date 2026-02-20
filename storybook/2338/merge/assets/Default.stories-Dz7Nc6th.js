import{j as t}from"./iframe-BXGfha1q.js";import{D as a}from"./DonutChart-CcUj5m5y.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./ProgressBar-BSSI2Xkr.js";import"./utils-DDzB-hS3.js";import"./index-BUwCWycU.js";import"./index-D0PS_Jbm.js";import"./Label-B_ylra4b.js";import"./Hidden-CY2KAX5F.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DPznQWXv.js";import"./context-C9BhwF0E.js";import"./NumberFormatter-DNR9MAW-.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-De677q3l.js";import"./Text-BbFupL_Y.js";import"./flowComponent-C3bfeK4-.js";import"./browser-P6njm6Fr.js";import"./EmulatedBoldText-CFo8qKvb.js";import"./Text-B1oZgTuN.js";const b={title:"Data Visualisation/DonutChart",component:a,args:{size:"m",status:"info"},argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]},size:{control:"inline-radio",options:["m","l"]},legendPosition:{control:"inline-radio",options:["top","right","bottom","left"]}},parameters:{controls:{exclude:["segments"]}},render:e=>t.jsx(a,{value:30,...e})},n={parameters:{controls:{exclude:["segments","showLegend","legendPosition"]}}},r={args:{formatOptions:{style:"unit",unit:"gigabyte"},maxValue:600,value:300},parameters:{controls:{exclude:["segments","showLegend","legendPosition","formatOptions","maxValue","value"]}}},o={args:{segments:[{title:"Item 1",value:28},{title:"Item 2",value:24},{title:"Item 3",value:8},{title:"Item 4",value:10},{title:"Item 5",value:12,color:"yellow"},{title:"Item 6",value:6,color:"#555"}],legendPosition:"right",showLegend:!0},parameters:{controls:{exclude:["segments","status"]}},render:e=>t.jsx(a,{"aria-label":"storage",...e})},s={parameters:{controls:{exclude:["segments","showLegend","legendPosition"]}},render:e=>t.jsxs(a,{...e,value:300,maxValue:600,children:[t.jsx("strong",{children:300}),t.jsx("small",{children:"GB"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ["segments", "showLegend", "legendPosition"]
    }
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    formatOptions: {
      style: "unit",
      unit: "gigabyte"
    },
    maxValue: 600,
    value: 300
  },
  parameters: {
    controls: {
      exclude: ["segments", "showLegend", "legendPosition", "formatOptions", "maxValue", "value"]
    }
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    segments: [{
      title: "Item 1",
      value: 28
    }, {
      title: "Item 2",
      value: 24
    }, {
      title: "Item 3",
      value: 8
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
    legendPosition: "right",
    showLegend: true
  },
  parameters: {
    controls: {
      exclude: ["segments", "status"]
    }
  },
  render: props => <DonutChart aria-label="storage" {...props} />
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ["segments", "showLegend", "legendPosition"]
    }
  },
  render: props => {
    const value = 300;
    return <DonutChart {...props} value={value} maxValue={600}>
        <strong>{value}</strong>
        <small>GB</small>
      </DonutChart>;
  }
}`,...s.parameters?.docs?.source}}};const C=["Default","WithUnit","WithSegments","WithTextValue"];export{n as Default,o as WithSegments,s as WithTextValue,r as WithUnit,C as __namedExportsOrder,b as default};

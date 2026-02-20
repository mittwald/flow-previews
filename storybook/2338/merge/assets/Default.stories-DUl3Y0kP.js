import{j as e}from"./iframe-BXGfha1q.js";import{P as t}from"./ProgressBar-BVZldw_3.js";import{L as a}from"./Label-DmvSuQEb.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C3bfeK4-.js";import"./index-BUwCWycU.js";import"./index-D0PS_Jbm.js";import"./ProgressBar-BSSI2Xkr.js";import"./utils-DDzB-hS3.js";import"./Label-B_ylra4b.js";import"./Hidden-CY2KAX5F.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DPznQWXv.js";import"./context-C9BhwF0E.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-txuUwehO.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-De677q3l.js";import"./Text-BbFupL_Y.js";import"./browser-P6njm6Fr.js";import"./EmulatedBoldText-CFo8qKvb.js";import"./Text-B1oZgTuN.js";import"./Label.module-CUYTf9Jc.js";const A={title:"Status/ProgressBar",component:t,args:{showMaxValue:!1,size:"m",status:"info"},argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]},size:{control:"inline-radio",options:["s","m","l"]}},render:r=>e.jsx(t,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...r,children:e.jsx(a,{children:"Storage"})})},s={},n={render:r=>e.jsx(t,{value:50,...r,children:e.jsx(a,{children:"Storage"})})},o={render:r=>e.jsx(t,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"decimal"},...r,children:e.jsx(a,{children:"Storage"})})},l={parameters:{controls:{exclude:["status"]}},render:r=>e.jsx(t,{...r,segments:[{title:"Item 1",value:5},{title:"Item 2",value:10},{title:"Item 3",value:4},{title:"Item 4",value:7},{title:"Item 5",value:12},{title:"Item 6",value:24},{title:"Item 7",value:5},{title:"Item 8",value:8}],children:e.jsx(a,{children:"Storage"})})},i={parameters:{controls:{exclude:["status"]}},render:r=>e.jsx(t,{...r,formatOptions:{style:"unit",unit:"gigabyte"},maxValue:60,segments:[{title:"Backups",value:20},{title:"Databases",value:30}],children:e.jsx(a,{children:"Storage"})})},m={render:r=>e.jsx(t,{value:500,maxValue:1e3,minValue:0,valueLabel:"500 / 1000 GB",...r,children:e.jsx(a,{children:"Storage"})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <ProgressBar value={50} {...props}>
      <Label>Storage</Label>
    </ProgressBar>
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: props => <ProgressBar value={500} maxValue={1000} minValue={0} formatOptions={{
    style: "decimal"
  }} {...props}>
      <Label>Storage</Label>
    </ProgressBar>
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ["status"]
    }
  },
  render: props => <ProgressBar {...props} segments={[{
    title: "Item 1",
    value: 5
  }, {
    title: "Item 2",
    value: 10
  }, {
    title: "Item 3",
    value: 4
  }, {
    title: "Item 4",
    value: 7
  }, {
    title: "Item 5",
    value: 12
  }, {
    title: "Item 6",
    value: 24
  }, {
    title: "Item 7",
    value: 5
  }, {
    title: "Item 8",
    value: 8
  }]}>
      <Label>Storage</Label>
    </ProgressBar>
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ["status"]
    }
  },
  render: props => <ProgressBar {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} maxValue={60} segments={[{
    title: "Backups",
    value: 20
  }, {
    title: "Databases",
    value: 30
  }]}>
      <Label>Storage</Label>
    </ProgressBar>
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const value = 500;
    const maxValue = 1000;
    return <ProgressBar value={value} maxValue={maxValue} minValue={0} valueLabel={\`\${value} / \${maxValue} GB\`} {...props}>
        <Label>Storage</Label>
      </ProgressBar>;
  }
}`,...m.parameters?.docs?.source}}};const E=["Default","WithPercentage","WithoutUnit","WithSegments","WithSegmentsAndUnit","WithValueLabel"];export{s as Default,n as WithPercentage,l as WithSegments,i as WithSegmentsAndUnit,m as WithValueLabel,o as WithoutUnit,E as __namedExportsOrder,A as default};

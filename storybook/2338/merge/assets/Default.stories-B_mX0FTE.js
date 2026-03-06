import{j as e}from"./iframe-DBOgS3cI.js";import{P as t}from"./ProgressBar-BRzTlxVb.js";import{L as a}from"./Label-DEbA9P8V.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D2rRGmRJ.js";import"./index-Swo0Tmsl.js";import"./index-2oGrDlIx.js";import"./ProgressBar-CW3L6DbF.js";import"./utils-BhJeINWq.js";import"./Label-DiLXicnZ.js";import"./Hidden-DDnoFhwK.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ClWLYl61.js";import"./context-BFw_9KSH.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-BAHslQ_i.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-2Uoc8zMb.js";import"./Text-V6WF8rgy.js";import"./browser-aVPMedyb.js";import"./EmulatedBoldText-DZYRdmWA.js";import"./Text-TZlAM5yA.js";import"./Label.module-CUYTf9Jc.js";const A={title:"Status/ProgressBar",component:t,args:{showMaxValue:!1,size:"m",status:"info"},argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]},size:{control:"inline-radio",options:["s","m","l"]}},render:r=>e.jsx(t,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...r,children:e.jsx(a,{children:"Storage"})})},s={},n={render:r=>e.jsx(t,{value:50,...r,children:e.jsx(a,{children:"Storage"})})},o={render:r=>e.jsx(t,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"decimal"},...r,children:e.jsx(a,{children:"Storage"})})},l={parameters:{controls:{exclude:["status"]}},render:r=>e.jsx(t,{...r,segments:[{title:"Item 1",value:5},{title:"Item 2",value:10},{title:"Item 3",value:4},{title:"Item 4",value:7},{title:"Item 5",value:12},{title:"Item 6",value:24},{title:"Item 7",value:5},{title:"Item 8",value:8}],children:e.jsx(a,{children:"Storage"})})},i={parameters:{controls:{exclude:["status"]}},render:r=>e.jsx(t,{...r,formatOptions:{style:"unit",unit:"gigabyte"},maxValue:60,segments:[{title:"Backups",value:20},{title:"Databases",value:30}],children:e.jsx(a,{children:"Storage"})})},m={render:r=>e.jsx(t,{value:500,maxValue:1e3,minValue:0,valueLabel:"500 / 1000 GB",...r,children:e.jsx(a,{children:"Storage"})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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

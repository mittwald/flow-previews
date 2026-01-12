import{j as e}from"./iframe-Ca6Y6Qbd.js";import{P as m}from"./ProgressBar-C0n6dH8W.js";import o from"./Default.stories-Bv0Iqanj.js";import{L as s}from"./Label-BiOSulbp.js";import{d as i}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D9fMwVbm.js";import"./index-Dtyg9OU-.js";import"./index-dqS1_mS3.js";import"./ProgressBar-CbWR67C5.js";import"./utils-CgPiupY7.js";import"./Label-oMJsQOKa.js";import"./Hidden-B5n9q6va.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DSKkVaVQ.js";import"./context-BSVjMcq9.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-DPFID8Bg.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-_31lqoeG.js";import"./Text-BEUemzSa.js";import"./browser-CbMIui3y.js";import"./EmulatedBoldText-B497YwdM.js";import"./Text-XI5tIYL5.js";import"./Label.module-CUYTf9Jc.js";const _={...o,title:"Status/ProgressBar/Edge Cases"},r={render:t=>e.jsx(m,{value:500,maxValue:1e3,minValue:0,showMaxValue:!0,formatOptions:{style:"unit",unit:"gigabyte"},...t,children:e.jsx(s,{children:i.medium})})},a={args:{segments:[{title:"Item 1",value:5},{title:"Item 2",value:10},{title:"Item 3",value:4},{title:"Item 4",value:7},{title:"Item 5",value:12},{title:"Item 6",value:24},{title:"Item 7",value:5},{title:"Item 8",value:8},{title:"Item 9",value:3},{title:"Item 10",value:6},{title:"Item 11",value:16}]},render:t=>e.jsx(m,{...t,children:e.jsx(s,{children:"Storage"})})},n={args:{segments:[{title:"Item 1",value:0},{title:"Item 2",value:0}]},render:t=>e.jsx(m,{...t,children:e.jsx(s,{children:"Storage"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: props => <ProgressBar value={500} maxValue={1000} minValue={0} showMaxValue formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} {...props}>
      <Label>{dummyText.medium}</Label>
    </ProgressBar>
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    segments: [{
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
    }, {
      title: "Item 9",
      value: 3
    }, {
      title: "Item 10",
      value: 6
    }, {
      title: "Item 11",
      value: 16
    }]
  },
  render: props => <ProgressBar {...props}>
      <Label>Storage</Label>
    </ProgressBar>
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    segments: [{
      title: "Item 1",
      value: 0
    }, {
      title: "Item 2",
      value: 0
    }]
  },
  render: props => <ProgressBar {...props}>
      <Label>Storage</Label>
    </ProgressBar>
}`,...n.parameters?.docs?.source}}};const C=["LongText","WithManySegments","WithZeroValueSegments"];export{r as LongText,a as WithManySegments,n as WithZeroValueSegments,C as __namedExportsOrder,_ as default};

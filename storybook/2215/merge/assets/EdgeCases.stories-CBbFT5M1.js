import{j as e}from"./iframe-FgJ_J-H0.js";import{P as s}from"./ProgressBar-DUshVboI.js";import o from"./Default.stories-LTCI4iiI.js";import{L as m}from"./Label-dIFs3d3H.js";import{d as l}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D4ZDxBE5.js";import"./mergeRefs-B0SFCKpc.js";import"./index-D5Q5r0EQ.js";import"./ProgressBar-C9bgo184.js";import"./utils-CpAt2MQ0.js";import"./Hidden-fZuF_gJA.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BdkCFUfw.js";import"./useLocalizedStringFormatter-T_wC2jpb.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-D3LNNeFG.js";import"./Text-DFL3SoXQ.js";import"./browser-DUTkZfBO.js";import"./EmulatedBoldText-B0xGhkgA.js";const W={...o,title:"Status/ProgressBar/Edge Cases"},r={render:t=>e.jsx(s,{value:500,maxValue:1e3,minValue:0,showMaxValue:!0,formatOptions:{style:"unit",unit:"gigabyte"},...t,children:e.jsx(m,{children:l.medium})})},a={args:{segments:[{title:"Item 1",value:5},{title:"Item 2",value:10},{title:"Item 3",value:4},{title:"Item 4",value:7},{title:"Item 5",value:12},{title:"Item 6",value:24},{title:"Item 7",value:5},{title:"Item 8",value:8},{title:"Item 9",value:3},{title:"Item 10",value:6},{title:"Item 11",value:16}]},render:t=>e.jsx(s,{...t,children:e.jsx(m,{children:"Storage"})})},n={args:{segments:[{title:"Item 1",value:0},{title:"Item 2",value:0}]},render:t=>e.jsx(s,{...t,children:e.jsx(m,{children:"Storage"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const E=["LongText","WithManySegments","WithZeroValueSegments"];export{r as LongText,a as WithManySegments,n as WithZeroValueSegments,E as __namedExportsOrder,W as default};

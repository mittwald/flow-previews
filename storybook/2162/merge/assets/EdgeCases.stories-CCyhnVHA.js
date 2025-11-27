import{j as e}from"./iframe-CW_1kzn8.js";import{P as s}from"./ProgressBar-CKvf8kaJ.js";import o from"./Default.stories-n2x_SECA.js";import{L as m}from"./Label-C6A80iGS.js";import{d as l}from"./dummyText-CX_I_Wpl.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BDCYw1pg.js";import"./mergeRefs-Y3najUVW.js";import"./index-Bd-98hnG.js";import"./ProgressBar-BTbyCbiz.js";import"./utils-DECz7q9i.js";import"./Hidden-CnRTwBiV.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-g9M5CTWm.js";import"./useLocalizedStringFormatter-EKrbiiaf.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-Dv9medtK.js";import"./Text-Bt12Aiuy.js";import"./browser-DYjBW3Mh.js";import"./EmulatedBoldText-CjYCMvu1.js";const W={...o,title:"Status/ProgressBar/Edge Cases"},r={render:t=>e.jsx(s,{value:500,maxValue:1e3,minValue:0,showMaxValue:!0,formatOptions:{style:"unit",unit:"gigabyte"},...t,children:e.jsx(m,{children:l.medium})})},a={args:{segments:[{title:"Item 1",value:5},{title:"Item 2",value:10},{title:"Item 3",value:4},{title:"Item 4",value:7},{title:"Item 5",value:12},{title:"Item 6",value:24},{title:"Item 7",value:5},{title:"Item 8",value:8},{title:"Item 9",value:3},{title:"Item 10",value:6},{title:"Item 11",value:16}]},render:t=>e.jsx(s,{...t,children:e.jsx(m,{children:"Storage"})})},n={args:{segments:[{title:"Item 1",value:0},{title:"Item 2",value:0}]},render:t=>e.jsx(s,{...t,children:e.jsx(m,{children:"Storage"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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

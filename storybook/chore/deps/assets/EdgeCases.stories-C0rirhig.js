import{j as r}from"./iframe-DdrpCK7O.js";import{P as m}from"./ProgressBar-Ca1kswtm.js";import i from"./Default.stories-c4TxzKQ_.js";import{L as n}from"./Label-icuqrMlJ.js";import{d as o}from"./dummyText-CX_I_Wpl.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B-M9Ok3D.js";import"./mergeRefs-Bbw3w7Zz.js";import"./index-7qYBiH1_.js";import"./ProgressBar-DX53PXke.js";import"./utils-jbl8fYpp.js";import"./Label-q6ExZamY.js";import"./Hidden-YoIeoCE-.js";import"./filterDOMProps-CrrfCvhk.js";import"./useLabel-BGrVe235.js";import"./context-BHbmanCt.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-DTJzl0HQ.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-BEqzYrur.js";import"./Text-CaSL42bb.js";import"./browser-CJKA82in.js";import"./EmulatedBoldText-BlAgkMNP.js";import"./Text-Diya8EQq.js";const w={...i,title:"Status/ProgressBar/Edge Cases"},e={render:a=>r.jsx(m,{value:500,maxValue:1e3,minValue:0,showMaxValue:!0,formatOptions:{style:"unit",unit:"gigabyte"},...a,children:r.jsx(n,{children:o.medium})})},t={args:{segments:[{title:"Item 1",value:5},{title:"Item 2",value:10},{title:"Item 3",value:4},{title:"Item 4",value:7},{title:"Item 5",value:12},{title:"Item 6",value:24},{title:"Item 7",value:5},{title:"Item 8",value:8},{title:"Item 9",value:3},{title:"Item 10",value:6},{title:"Item 11",value:16}]},render:a=>r.jsx(m,{...a,children:r.jsx(n,{children:"Storage"})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: props => <ProgressBar value={500} maxValue={1000} minValue={0} showMaxValue formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} {...props}>
      <Label>{dummyText.medium}</Label>
    </ProgressBar>
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const W=["LongText","WithManySegments"];export{e as LongText,t as WithManySegments,W as __namedExportsOrder,w as default};

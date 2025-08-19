import{j as e}from"./iframe-CqOqoVaP.js";import{P as m}from"./ProgressBar-Vrkw79T4.js";import I from"./Default.stories-CO1eB9H0.js";import{L as s}from"./Label-CXX9Ul6V.js";import{d as x}from"./dummyText-CX_I_Wpl.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-1TKyLHhH.js";import"./mergeRefs-CelTEQRC.js";import"./index-OFJ9qM8_.js";import"./ProgressBar-C7nzlf9n.js";import"./utils-CLjii6jw.js";import"./Label-DmkwH-X_.js";import"./Hidden-G9XKC0s_.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BbxdwBsw.js";import"./context-V257UCTc.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-Cmj_M29U.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-XIKBaXmR.js";import"./Text-B3-X_MJa.js";import"./browser-5vSgihvA.js";import"./EmulatedBoldText-CUXBtHhG.js";import"./Text-cqx9MXzt.js";const A={...I,title:"Status/ProgressBar/Edge Cases"},r={render:t=>e.jsx(m,{value:500,maxValue:1e3,minValue:0,showMaxValue:!0,formatOptions:{style:"unit",unit:"gigabyte"},...t,children:e.jsx(s,{children:x.medium})})},a={args:{segments:[{title:"Item 1",value:5},{title:"Item 2",value:10},{title:"Item 3",value:4},{title:"Item 4",value:7},{title:"Item 5",value:12},{title:"Item 6",value:24},{title:"Item 7",value:5},{title:"Item 8",value:8},{title:"Item 9",value:3},{title:"Item 10",value:6},{title:"Item 11",value:16}]},render:t=>e.jsx(m,{...t,children:e.jsx(s,{children:"Storage"})})},n={args:{segments:[{title:"Item 1",value:0},{title:"Item 2",value:0}]},render:t=>e.jsx(m,{...t,children:e.jsx(s,{children:"Storage"})})};var o,l,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: props => <ProgressBar value={500} maxValue={1000} minValue={0} showMaxValue formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} {...props}>
      <Label>{dummyText.medium}</Label>
    </ProgressBar>
}`,...(i=(l=r.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var u,p,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var d,c,v;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(v=(c=n.parameters)==null?void 0:c.docs)==null?void 0:v.source}}};const D=["LongText","WithManySegments","WithZeroValueSegments"];export{r as LongText,a as WithManySegments,n as WithZeroValueSegments,D as __namedExportsOrder,A as default};

import{j as e}from"./iframe-CB_IvR8I.js";import{P as m}from"./ProgressBar-BLtNJOH7.js";import I from"./Default.stories-CC1KEfdp.js";import{L as s}from"./Label-DQjiInKi.js";import{d as x}from"./dummyText-CX_I_Wpl.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CQ73sAu4.js";import"./mergeRefs-CSVQQCMz.js";import"./index-dvXJvLk3.js";import"./ProgressBar-DB_rXcaP.js";import"./utils-g_K47B_Q.js";import"./Label-kjSyRRrG.js";import"./Hidden-jmCIdXP6.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DNzpHOuu.js";import"./context-CQpLcUPr.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-BKMvXLmW.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-D0hwQE8j.js";import"./Text-C_h1oOw9.js";import"./browser-CyPw7Cgt.js";import"./EmulatedBoldText-B-vVao8K.js";import"./Text-B8w1c0_W.js";const A={...I,title:"Status/ProgressBar/Edge Cases"},r={render:t=>e.jsx(m,{value:500,maxValue:1e3,minValue:0,showMaxValue:!0,formatOptions:{style:"unit",unit:"gigabyte"},...t,children:e.jsx(s,{children:x.medium})})},a={args:{segments:[{title:"Item 1",value:5},{title:"Item 2",value:10},{title:"Item 3",value:4},{title:"Item 4",value:7},{title:"Item 5",value:12},{title:"Item 6",value:24},{title:"Item 7",value:5},{title:"Item 8",value:8},{title:"Item 9",value:3},{title:"Item 10",value:6},{title:"Item 11",value:16}]},render:t=>e.jsx(m,{...t,children:e.jsx(s,{children:"Storage"})})},n={args:{segments:[{title:"Item 1",value:0},{title:"Item 2",value:0}]},render:t=>e.jsx(m,{...t,children:e.jsx(s,{children:"Storage"})})};var o,l,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

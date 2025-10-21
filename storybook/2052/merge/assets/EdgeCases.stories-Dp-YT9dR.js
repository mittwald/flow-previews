import{j as e}from"./iframe-DTheBFqg.js";import{P as m}from"./ProgressBar-DCbACdmL.js";import I from"./Default.stories-DcXCNCf5.js";import{L as s}from"./Label-DS5MocSE.js";import{d as x}from"./dummyText-CX_I_Wpl.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-gCUS5Qd-.js";import"./index-ulNAr9WE.js";import"./index-C24gQbls.js";import"./ProgressBar-Dr6zks-A.js";import"./utils-CIVb4-pA.js";import"./Label-DaxiHPCi.js";import"./Hidden-BUnkE8VR.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DE7AINdt.js";import"./context-BBJsvWP1.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-CvDaoHpN.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-DULDCQbl.js";import"./Text-DVaBUvZL.js";import"./browser-BqPz5wcV.js";import"./EmulatedBoldText-P0d28SeQ.js";import"./Text-C48huDBb.js";import"./Label.module-CUYTf9Jc.js";const F={...I,title:"Status/ProgressBar/Edge Cases"},r={render:t=>e.jsx(m,{value:500,maxValue:1e3,minValue:0,showMaxValue:!0,formatOptions:{style:"unit",unit:"gigabyte"},...t,children:e.jsx(s,{children:x.medium})})},a={args:{segments:[{title:"Item 1",value:5},{title:"Item 2",value:10},{title:"Item 3",value:4},{title:"Item 4",value:7},{title:"Item 5",value:12},{title:"Item 6",value:24},{title:"Item 7",value:5},{title:"Item 8",value:8},{title:"Item 9",value:3},{title:"Item 10",value:6},{title:"Item 11",value:16}]},render:t=>e.jsx(m,{...t,children:e.jsx(s,{children:"Storage"})})},n={args:{segments:[{title:"Item 1",value:0},{title:"Item 2",value:0}]},render:t=>e.jsx(m,{...t,children:e.jsx(s,{children:"Storage"})})};var o,i,l;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: props => <ProgressBar value={500} maxValue={1000} minValue={0} showMaxValue formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} {...props}>
      <Label>{dummyText.medium}</Label>
    </ProgressBar>
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var u,p,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(v=(c=n.parameters)==null?void 0:c.docs)==null?void 0:v.source}}};const G=["LongText","WithManySegments","WithZeroValueSegments"];export{r as LongText,a as WithManySegments,n as WithZeroValueSegments,G as __namedExportsOrder,F as default};

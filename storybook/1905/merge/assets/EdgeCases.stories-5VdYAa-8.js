import{j as e}from"./iframe-BBU8Vi5z.js";import{P as m}from"./ProgressBar-B0-xx1md.js";import I from"./Default.stories-CmUtnfEm.js";import{L as s}from"./Label-C0WPThdc.js";import{d as x}from"./dummyText-CX_I_Wpl.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Dh-an_RK.js";import"./mergeRefs-0pGj6C_j.js";import"./index-NZtYUN4c.js";import"./ProgressBar-BVefmcd6.js";import"./utils-Bl0beZ_h.js";import"./Label-DtosUGK-.js";import"./Hidden-BzeT6TXj.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Dhqi6uDE.js";import"./context-LLBgjHpi.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-Dev9EnbH.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-Dddn0UL5.js";import"./Text-Dmx06jI1.js";import"./browser-ZEfsbAUe.js";import"./EmulatedBoldText-CqafDXFr.js";import"./Text-DKRByA_e.js";const A={...I,title:"Status/ProgressBar/Edge Cases"},r={render:t=>e.jsx(m,{value:500,maxValue:1e3,minValue:0,showMaxValue:!0,formatOptions:{style:"unit",unit:"gigabyte"},...t,children:e.jsx(s,{children:x.medium})})},a={args:{segments:[{title:"Item 1",value:5},{title:"Item 2",value:10},{title:"Item 3",value:4},{title:"Item 4",value:7},{title:"Item 5",value:12},{title:"Item 6",value:24},{title:"Item 7",value:5},{title:"Item 8",value:8},{title:"Item 9",value:3},{title:"Item 10",value:6},{title:"Item 11",value:16}]},render:t=>e.jsx(m,{...t,children:e.jsx(s,{children:"Storage"})})},n={args:{segments:[{title:"Item 1",value:0},{title:"Item 2",value:0}]},render:t=>e.jsx(m,{...t,children:e.jsx(s,{children:"Storage"})})};var o,l,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

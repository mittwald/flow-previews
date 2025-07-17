import{j as r}from"./iframe-ioB74BFE.js";import{P as u}from"./ProgressBar-CnHZG3Y0.js";import v from"./Default.stories-Cta_oJjf.js";import{L as p}from"./Label-Bf-bWzV0.js";import{d}from"./dummyText-CX_I_Wpl.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DIQ-3Z-W.js";import"./mergeRefs-Bc9_QzvA.js";import"./index-DxUCKuoS.js";import"./ProgressBar-6K_Q5ytM.js";import"./utils-B4cCkl7w.js";import"./Label-Ci4HPtMl.js";import"./Hidden-BUUKH5FE.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-CB1mDCyy.js";import"./context-BPL8pm8m.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-aWkOtTsz.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-C8NDLR1f.js";import"./Text-BZaQwICB.js";import"./browser-BI2T8H6c.js";import"./EmulatedBoldText-C5-k4pIu.js";import"./Text-CCXZaIsU.js";const k={...v,title:"Status/ProgressBar/Edge Cases"},e={render:a=>r.jsx(u,{value:500,maxValue:1e3,minValue:0,showMaxValue:!0,formatOptions:{style:"unit",unit:"gigabyte"},...a,children:r.jsx(p,{children:d.medium})})},t={args:{segments:[{title:"Item 1",value:5},{title:"Item 2",value:10},{title:"Item 3",value:4},{title:"Item 4",value:7},{title:"Item 5",value:12},{title:"Item 6",value:24},{title:"Item 7",value:5},{title:"Item 8",value:8},{title:"Item 9",value:3},{title:"Item 10",value:6},{title:"Item 11",value:16}]},render:a=>r.jsx(u,{...a,children:r.jsx(p,{children:"Storage"})})};var m,n,i;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: props => <ProgressBar value={500} maxValue={1000} minValue={0} showMaxValue formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} {...props}>
      <Label>{dummyText.medium}</Label>
    </ProgressBar>
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var o,l,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(s=(l=t.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const q=["LongText","WithManySegments"];export{e as LongText,t as WithManySegments,q as __namedExportsOrder,k as default};

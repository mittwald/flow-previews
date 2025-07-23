import{j as r}from"./iframe-CIziUxb4.js";import{P as u}from"./ProgressBar-YzuIRYro.js";import v from"./Default.stories-C7rmAZXI.js";import{L as p}from"./Label-CDKeaBWT.js";import{d}from"./dummyText-CX_I_Wpl.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CTHa5A9a.js";import"./mergeRefs-BWd0MHpr.js";import"./index-BCb4M8Mf.js";import"./ProgressBar-Cyf_qqmn.js";import"./utils-CDtaCsrA.js";import"./Label-CjcM3hPV.js";import"./Hidden-FsuglVKe.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-xKHqVDKV.js";import"./context-COqsJpPE.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-CeVTCw4Y.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-B-ynY6q3.js";import"./Text-BbvPR7fy.js";import"./browser-Do2MbvKV.js";import"./EmulatedBoldText-DYFJL8XT.js";import"./Text-CgaJS0Gc.js";const k={...v,title:"Status/ProgressBar/Edge Cases"},e={render:a=>r.jsx(u,{value:500,maxValue:1e3,minValue:0,showMaxValue:!0,formatOptions:{style:"unit",unit:"gigabyte"},...a,children:r.jsx(p,{children:d.medium})})},t={args:{segments:[{title:"Item 1",value:5},{title:"Item 2",value:10},{title:"Item 3",value:4},{title:"Item 4",value:7},{title:"Item 5",value:12},{title:"Item 6",value:24},{title:"Item 7",value:5},{title:"Item 8",value:8},{title:"Item 9",value:3},{title:"Item 10",value:6},{title:"Item 11",value:16}]},render:a=>r.jsx(u,{...a,children:r.jsx(p,{children:"Storage"})})};var m,n,i;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

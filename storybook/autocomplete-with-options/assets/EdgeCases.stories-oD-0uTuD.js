import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{P as p}from"./ProgressBar-CfsOdRtV.js";import v from"./Default.stories-Yp4atl5l.js";import{L as u}from"./Label-CI4xEwfN.js";import"./index-BdpSHsi2.js";import{d}from"./dummyText-CX_I_Wpl.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Dx838hur.js";import"./mergeRefs-f9wmNE8z.js";import"./iframe-CRUmVK58.js";import"./index-DU8gk_nc.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-lEnnwJps.js";import"./ProgressBar-BKoZZ6mR.js";import"./utils-CNUJJGcD.js";import"./Label-DsLtIi5U.js";import"./Hidden-RoZfe91Z.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-XC8v3O7U.js";import"./context-b6TG5uw0.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-DnyHa0G6.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-CARBL9I7.js";import"./Text-BvHt_4Ei.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-DOyoRrwd.js";import"./Text-BJ9sUP_l.js";import"./index-BAMY2Nnw.js";const F={...v,title:"Status/ProgressBar/Edge Cases"},e={render:m=>r.jsx(p,{value:500,maxValue:1e3,minValue:0,showMaxValue:!0,formatOptions:{style:"unit",unit:"gigabyte"},...m,children:r.jsx(u,{children:d.medium})})},t={args:{segments:[{title:"Item 1",value:5},{title:"Item 2",value:10},{title:"Item 3",value:4},{title:"Item 4",value:7},{title:"Item 5",value:12},{title:"Item 6",value:24},{title:"Item 7",value:5},{title:"Item 8",value:8},{title:"Item 9",value:3},{title:"Item 10",value:6},{title:"Item 11",value:16}]},render:m=>r.jsx(p,{...m,children:r.jsx(u,{children:"Storage"})})};var a,n,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(s=(l=t.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const G=["LongText","WithManySegments"];export{e as LongText,t as WithManySegments,G as __namedExportsOrder,F as default};

import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{P as u}from"./ProgressBar-DhGbWUj4.js";import v from"./Default.stories-Bmr3j_dB.js";import{L as p}from"./Label-C3GsNgl3.js";import"./index-CtQTiInQ.js";import{d}from"./dummyText-CX_I_Wpl.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CcavWj25.js";import"./mergeProps-BKLeaOo7.js";import"./index-DTllGi7h.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Cdp0xV4M.js";import"./ProgressBar-DPPT7aTs.js";import"./utils-D0CTRpvX.js";import"./Label-BZrcB42p.js";import"./Hidden-Dd0lSYNZ.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BhTOAlCQ.js";import"./useLocalizedStringFormatter-DpLhROVm.js";import"./NumberFormatter-DNR9MAW-.js";import"./Legend-B_OX09bK.js";import"./Text-VF_oP7nB.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-D1jUzRoU.js";import"./Text-oMr6ueMZ.js";const q={...v,title:"Status/ProgressBar/Edge Cases"},e={render:a=>r.jsx(u,{value:500,maxValue:1e3,minValue:0,showMaxValue:!0,formatOptions:{style:"unit",unit:"gigabyte"},...a,children:r.jsx(p,{children:d.medium})})},t={args:{segments:[{title:"Item 1",value:5},{title:"Item 2",value:10},{title:"Item 3",value:4},{title:"Item 4",value:7},{title:"Item 5",value:12},{title:"Item 6",value:24},{title:"Item 7",value:5},{title:"Item 8",value:8},{title:"Item 9",value:3},{title:"Item 10",value:6},{title:"Item 11",value:16}]},render:a=>r.jsx(u,{...a,children:r.jsx(p,{children:"Storage"})})};var m,n,i;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(l=t.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const z=["LongText","WithManySegments"];export{e as LongText,t as WithManySegments,z as __namedExportsOrder,q as default};

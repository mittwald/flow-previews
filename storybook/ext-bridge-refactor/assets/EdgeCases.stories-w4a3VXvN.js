import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{P as u}from"./ProgressBar-DuG0lWcj.js";import v from"./Default.stories-CbFrAiqt.js";import{L as p}from"./Label-DuWaARVY.js";import"./index-n-xcLTj3.js";import{d}from"./dummyText-CX_I_Wpl.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-xVdmcuMS.js";import"./mergeProps-JAG8EIhT.js";import"./index-jVogklOU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-7o24Rkki.js";import"./ProgressBar-5MBhZmuX.js";import"./utils-CHEN54dH.js";import"./Label-CnZl9U2I.js";import"./Hidden-B-9naaqD.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DBnsbNrv.js";import"./useLocalizedStringFormatter-q0ERVXX8.js";import"./NumberFormatter-DNR9MAW-.js";import"./Legend-Y0Gzx-65.js";import"./Text-CvWN1dQn.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-bRyCqTVk.js";import"./Text-DatuNbZl.js";const q={...v,title:"Status/ProgressBar/Edge Cases"},e={render:a=>r.jsx(u,{value:500,maxValue:1e3,minValue:0,showMaxValue:!0,formatOptions:{style:"unit",unit:"gigabyte"},...a,children:r.jsx(p,{children:d.medium})})},t={args:{segments:[{title:"Item 1",value:5},{title:"Item 2",value:10},{title:"Item 3",value:4},{title:"Item 4",value:7},{title:"Item 5",value:12},{title:"Item 6",value:24},{title:"Item 7",value:5},{title:"Item 8",value:8},{title:"Item 9",value:3},{title:"Item 10",value:6},{title:"Item 11",value:16}]},render:a=>r.jsx(u,{...a,children:r.jsx(p,{children:"Storage"})})};var m,n,i;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

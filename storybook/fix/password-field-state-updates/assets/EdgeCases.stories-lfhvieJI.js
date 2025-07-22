import{j as r}from"./iframe-RyyXbGrI.js";import{P as u}from"./ProgressBar-EI1N1O4Z.js";import v from"./Default.stories-ZN53TTAE.js";import{L as p}from"./Label-CFvtJK4g.js";import{d}from"./dummyText-CX_I_Wpl.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B1uYDNh0.js";import"./mergeRefs-TzEeC_ny.js";import"./index-CkUh_6WG.js";import"./ProgressBar-C1MhwVHg.js";import"./utils-CSApR2SK.js";import"./Label-DyZcxK1e.js";import"./Hidden-CBQwCv0D.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DfsiheSh.js";import"./context-CVBx-lw8.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-D3yp90gU.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-Bo0Lm1bj.js";import"./Text-Bwgmr3xm.js";import"./browser-DZnqvRXk.js";import"./EmulatedBoldText-BGBtIkEw.js";import"./Text-BimzKAGJ.js";const k={...v,title:"Status/ProgressBar/Edge Cases"},e={render:a=>r.jsx(u,{value:500,maxValue:1e3,minValue:0,showMaxValue:!0,formatOptions:{style:"unit",unit:"gigabyte"},...a,children:r.jsx(p,{children:d.medium})})},t={args:{segments:[{title:"Item 1",value:5},{title:"Item 2",value:10},{title:"Item 3",value:4},{title:"Item 4",value:7},{title:"Item 5",value:12},{title:"Item 6",value:24},{title:"Item 7",value:5},{title:"Item 8",value:8},{title:"Item 9",value:3},{title:"Item 10",value:6},{title:"Item 11",value:16}]},render:a=>r.jsx(u,{...a,children:r.jsx(p,{children:"Storage"})})};var m,n,i;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

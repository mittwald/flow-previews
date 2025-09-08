import{j as r}from"./iframe-xv1hkYrp.js";import{S as s}from"./Slider-DM1ik_z3.js";import{L as m}from"./Label-DC7JJJSp.js";import"./PropsContextProvider-B9OcsNR0.js";import"./mergeRefs-BFH3kKHm.js";import"./index-Dm2Ajy-S.js";import"./clsx-B-dksMZM.js";import"./Button-CxiqmFwG.js";import"./IconWarning-0FGrLhxS.js";import"./Text-DbY3Cuep.js";import"./browser-lwEiR5fW.js";import"./EmulatedBoldText-CmD3aEdd.js";import"./Text-B_3Y_Nze.js";import"./utils-CpTHh5rs.js";import"./LoadingSpinner-DFWWTIAT.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-UiX65Yuj.js";import"./context-D4r7bTNU.js";import"./Button-BusXuZI0.js";import"./ProgressBar-DjfrTOAa.js";import"./Label-mG8fBsu4.js";import"./Hidden-BDDDKiVs.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BR4zi6f8.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-o1s-vRpH.js";import"./useFocus-CfLpRQBT.js";import"./useFocusRing-CU0aNGGs.js";import"./useFocusable-CwWDG3DW.js";import"./useControlledState-BbRhH2Ee.js";import"./useFormReset-B-Mz2laO.js";import"./VisuallyHidden-CfqgoXLS.js";const Z={title:"Form Controls/Slider",component:s,render:e=>r.jsx(s,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={render:e=>r.jsx(s,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},a={args:{isDisabled:!0}},i={render:e=>r.jsx(s,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,n,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: props => <Slider {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} minValue={20} maxValue={2000} defaultValue={200} step={20}>
      <Label>Storage</Label>
    </Slider>
}`,...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var g,h,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var S,b,f;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: props => <Slider {...props} showInitialMarker>
      <Label>Amount</Label>
    </Slider>
}`,...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const $=["Default","WithUnit","Disabled","WithInitialMarker"];export{t as Default,a as Disabled,i as WithInitialMarker,o as WithUnit,$ as __namedExportsOrder,Z as default};

import{j as r}from"./iframe-BwuZESNl.js";import{S as s}from"./Slider-Cq1aRljK.js";import{L as m}from"./Label-Bp0IrURb.js";import"./PropsContextProvider-BusDQUVZ.js";import"./mergeRefs-Dzw8-qaC.js";import"./index-BsghocK6.js";import"./clsx-B-dksMZM.js";import"./Button-C-_knNCH.js";import"./IconWarning-WAZUP-Ct.js";import"./Text-DpTMi7Hm.js";import"./browser-BKpgmdP8.js";import"./EmulatedBoldText-CFTp_0vf.js";import"./Text-BwbgPKEG.js";import"./utils-DwFj3dGQ.js";import"./LoadingSpinner-Cad6y9w3.js";import"./useLocalizedStringFormatter-CzmxkLVc.js";import"./context-Bl9z0-Ez.js";import"./Button-DTlvpG2l.js";import"./ProgressBar-DWIeEB0n.js";import"./Label-Dt17YKxE.js";import"./Hidden-B4snL9ZX.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Cozlv_-X.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CLzpZvIT.js";import"./useFocus-Co7EWAzt.js";import"./useFocusRing-CS-U_0il.js";import"./useFocusable-CJY6BQME.js";import"./useControlledState-DDCrWfj9.js";import"./useFormReset-BKxc7BR_.js";import"./VisuallyHidden-H0mCENoD.js";const Z={title:"Form Controls/Slider",component:s,render:e=>r.jsx(s,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={render:e=>r.jsx(s,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},a={args:{isDisabled:!0}},i={render:e=>r.jsx(s,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,n,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-BGMqIB5E.js";import{S as s}from"./Slider-DOOfTMyq.js";import{L as m}from"./Label-ayGMhYtP.js";import"./PropsContextProvider-C4OPXOmf.js";import"./mergeRefs-CgaIg7wx.js";import"./index-C87vJZqt.js";import"./clsx-B-dksMZM.js";import"./Button-BFNUJ6Pn.js";import"./IconWarning-mDCCMBSQ.js";import"./Text-CM0LFMBt.js";import"./browser-BSs9Ljwu.js";import"./EmulatedBoldText-fvHudQk4.js";import"./Text-BM4jLh1h.js";import"./utils-DSJ2fpWd.js";import"./LoadingSpinner-CFmqrQ7U.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-B2NVTRrQ.js";import"./context-C9jpkMPH.js";import"./Button-C2r7IuQP.js";import"./ProgressBar-D-EmigOC.js";import"./Label-CQRoenrp.js";import"./Hidden-BlXCfqaN.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DEWKGCco.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DciW20d_.js";import"./useFocus-DimIAfL3.js";import"./useFocusRing-Ch_kecTs.js";import"./useFocusable-DsCZ72OQ.js";import"./useControlledState-CyFiZ_AX.js";import"./useFormReset-CGt1BQBC.js";import"./VisuallyHidden-C_NToHIT.js";const Z={title:"Form Controls/Slider",component:s,render:e=>r.jsx(s,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={render:e=>r.jsx(s,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},a={args:{isDisabled:!0}},i={render:e=>r.jsx(s,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,n,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

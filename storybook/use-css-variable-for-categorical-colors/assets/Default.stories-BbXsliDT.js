import{j as r}from"./iframe-DOyiym2O.js";import{S as s}from"./Slider-DT9hckrI.js";import{L as m}from"./Label-DGNkT8gh.js";import"./PropsContextProvider-BYw3-7_y.js";import"./mergeRefs-oR_2TdTx.js";import"./index-CmB0dnpi.js";import"./clsx-B-dksMZM.js";import"./Button-Dhe1yso8.js";import"./IconWarning-DM4ryx1N.js";import"./Text-DNTWXR5k.js";import"./browser-Cgs4Q9ZH.js";import"./EmulatedBoldText-npPiHGdu.js";import"./Text-Db2PSOfB.js";import"./utils-p6TFjs22.js";import"./LoadingSpinner-egM8r-vP.js";import"./useLocalizedStringFormatter-LAQIr2PZ.js";import"./context-DNMunrTn.js";import"./Button-lDf0mDtZ.js";import"./ProgressBar-DwMxj3po.js";import"./Label-gKLM5Ku1.js";import"./Hidden-BJphBd81.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DjTxglfT.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-U0v1W6r8.js";import"./useFocus-CRPlmaKe.js";import"./useFocusRing-wEjsdZUW.js";import"./useFocusable-CF6DJuo2.js";import"./useControlledState-CTI65F-h.js";import"./useFormReset-D392FMdG.js";import"./VisuallyHidden-DEjaPn8D.js";const Z={title:"Form Controls/Slider",component:s,render:e=>r.jsx(s,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={render:e=>r.jsx(s,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},a={args:{isDisabled:!0}},i={render:e=>r.jsx(s,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,n,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

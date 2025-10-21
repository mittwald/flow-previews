import{j as r}from"./iframe-EtTbRQoM.js";import{S as n}from"./Slider-DaLkrIFh.js";import{L as m}from"./Label-BHPxSoWd.js";import"./index-nuYtCEEu.js";import"./flowComponent-CRP3amPt.js";import"./index-DwnAt2PO.js";import"./clsx-B-dksMZM.js";import"./index-rMxpLDk9.js";import"./Button-DxuCaQyR.js";import"./IconWarning-CO-lUcxm.js";import"./Text-CAO-zPwU.js";import"./browser-Cob99Do9.js";import"./EmulatedBoldText-rZpq4XPn.js";import"./Text-CANjZEUs.js";import"./utils-C_hvyJpn.js";import"./LoadingSpinner-QwVO93wM.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-FAUwXJff.js";import"./context-HEbrZrvP.js";import"./Button-qX7xBgDX.js";import"./ProgressBar-C-f1QmIl.js";import"./Label-FPs7V2cE.js";import"./Hidden-BhWY_xu3.js";import"./filterDOMProps-i7L6S0l1.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-sAonsHdy.js";import"./useFocus-9RWBE5qv.js";import"./useFocusRing-hCmULEnE.js";import"./useFocusable-Do_2l7DI.js";import"./useMakeFocusable-qjH8k0Qb.js";import"./useControlledState-DmCe06Ai.js";import"./useFormReset-B1BZ1rNK.js";import"./VisuallyHidden-B8Lwuqmn.js";const G={title:"Form Controls/Slider",component:n,render:e=>r.jsx(n,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={args:{isReadOnly:!0}},a={render:e=>r.jsx(n,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},s={args:{isDisabled:!0}},i={render:e=>r.jsx(n,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => <Slider {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} minValue={20} maxValue={2000} defaultValue={200} step={20}>
      <Label>Storage</Label>
    </Slider>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <Slider {...props} showInitialMarker>
      <Label>Amount</Label>
    </Slider>
}`,...i.parameters?.docs?.source}}};const H=["Default","ReadOnly","WithUnit","Disabled","WithInitialMarker"];export{t as Default,s as Disabled,o as ReadOnly,i as WithInitialMarker,a as WithUnit,H as __namedExportsOrder,G as default};

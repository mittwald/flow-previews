import{j as r}from"./iframe-CzrbZwQa.js";import{S as m}from"./Slider-m58JztFH.js";import{L as p}from"./Label-Dk8Ae2gf.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-8nLM6u8z.js";import"./index-i1sq50ab.js";import"./clsx-B-dksMZM.js";import"./index-Qzp6tfP6.js";import"./Button-BnubCMUU.js";import"./IconApp-BPXZ8R19.js";import"./remote-q4LXxmI0.js";import"./IconX-C4Avmif2.js";import"./IconCheck-DAWvHQav.js";import"./Text-u_8Z_6lo.js";import"./browser-Q6zcHXxX.js";import"./EmulatedBoldText-DGVF2eKI.js";import"./Text-Bpo5VkCj.js";import"./utils-Ds7wxNIq.js";import"./LoadingSpinner-DKQ9WaFR.js";import"./ariaLive-D6gA1Cyb.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DkMEC5lK.js";import"./context-Dzfzncd2.js";import"./Button-Cr67WOIO.js";import"./ProgressBar-CBKtRO3f.js";import"./Label-DMBiwPLT.js";import"./Hidden-CPBzEaGa.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-FWCEqZCU.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Ck2a0me6.js";import"./useFocus-3xUusYsT.js";import"./useFocusRing-CcZAMLZr.js";import"./useFocusable-C0tTc1z6.js";import"./IconMinus-BgPkdCYo.js";import"./IconPlus-Bg7yxZ_O.js";import"./useFieldComponent-DOxHkWVS.js";import"./useControlledState-D-hIONgW.js";import"./useFormReset-DxatWkQF.js";import"./VisuallyHidden-CUes-LKT.js";import"./Label.module-CUYTf9Jc.js";const X={title:"Form Controls/Slider",component:m,render:e=>r.jsx(m,{...e,children:r.jsx(p,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={args:{isReadOnly:!0}},a={render:e=>r.jsx(m,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(p,{children:"Storage"})})},i={args:{isDisabled:!0}},s={render:e=>r.jsx(m,{...e,showInitialMarker:!0,children:r.jsx(p,{children:"Amount"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <Slider {...props} showInitialMarker>
      <Label>Amount</Label>
    </Slider>
}`,...s.parameters?.docs?.source}}};const Y=["Default","ReadOnly","WithUnit","Disabled","WithInitialMarker"];export{t as Default,i as Disabled,o as ReadOnly,s as WithInitialMarker,a as WithUnit,Y as __namedExportsOrder,X as default};

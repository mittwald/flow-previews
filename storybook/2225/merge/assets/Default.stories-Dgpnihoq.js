import{j as r}from"./iframe-DyIQYB7R.js";import{S as m}from"./Slider-BBK5J7hi.js";import{L as n}from"./Label-Bnl2XRS7.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-B46dTgZy.js";import"./index-DNyY7P3f.js";import"./clsx-B-dksMZM.js";import"./index-BAJQpnn3.js";import"./Button-C3sAJBlh.js";import"./IconWarning-BlqJF_wS.js";import"./remote-CduUCN7o.js";import"./Text-DP5VQe4y.js";import"./browser-Dsy2EDmz.js";import"./EmulatedBoldText-B3WFDqoc.js";import"./Text--49tgveg.js";import"./utils-Br5k-T_U.js";import"./LoadingSpinner-BJz_a5cm.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-C8zgnVvK.js";import"./context-DQwa7-Zw.js";import"./Button-BuUG1_MS.js";import"./ProgressBar-BLYv6NCO.js";import"./Label-DLjzrNJv.js";import"./Hidden-CjE_I8s3.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Cx64g9XI.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DBMxrrfH.js";import"./useFocus-MkZ0Yize.js";import"./useFocusRing-Dsvy8-H7.js";import"./useFocusable-BzRC0Akk.js";import"./useFieldComponent-BuMHMJdd.js";import"./useControlledState-C9rhpCZz.js";import"./useFormReset-DbNMnmkG.js";import"./VisuallyHidden-CpJBcPMb.js";import"./Label.module-CUYTf9Jc.js";const K={title:"Form Controls/Slider",component:m,render:e=>r.jsx(m,{...e,children:r.jsx(n,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={args:{isReadOnly:!0}},a={render:e=>r.jsx(m,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(n,{children:"Storage"})})},i={args:{isDisabled:!0}},s={render:e=>r.jsx(m,{...e,showInitialMarker:!0,children:r.jsx(n,{children:"Amount"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const N=["Default","ReadOnly","WithUnit","Disabled","WithInitialMarker"];export{t as Default,i as Disabled,o as ReadOnly,s as WithInitialMarker,a as WithUnit,N as __namedExportsOrder,K as default};

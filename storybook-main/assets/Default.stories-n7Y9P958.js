import{j as r}from"./iframe-Cnqm4lFy.js";import{S as s}from"./Slider-CPvgjxvr.js";import{L as m}from"./Label-DI5vbAp_.js";import"./PropsContextProvider-BxdbS27a.js";import"./mergeRefs-8x0kH2T_.js";import"./index-CsHwvL4C.js";import"./clsx-B-dksMZM.js";import"./Button-GqX5Ed_0.js";import"./IconWarning-BGJHeHvx.js";import"./Text-BEWqZmc4.js";import"./browser-B2d62Nc4.js";import"./EmulatedBoldText-DcBlvLGt.js";import"./Text-CzkkWfVE.js";import"./utils-CnzLW3AP.js";import"./LoadingSpinner-Bfw-PGOT.js";import"./useLocalizedStringFormatter-CQJQXq27.js";import"./context-CV4GK-7T.js";import"./Button-IuJiQec9.js";import"./ProgressBar-DvnI1q4y.js";import"./Label-DR_AMUCZ.js";import"./Hidden-Cs157XWu.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BaQUBcK6.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DsDytGfO.js";import"./useFocus-_F3heiAA.js";import"./useFocusRing-CPUfygMd.js";import"./useFocusable-BzgCWsb7.js";import"./useControlledState-BaDEj8YE.js";import"./useFormReset-eFY2_Wll.js";import"./VisuallyHidden-CPCVsxvc.js";const Z={title:"Form Controls/Slider",component:s,render:e=>r.jsx(s,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={render:e=>r.jsx(s,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},a={args:{isDisabled:!0}},i={render:e=>r.jsx(s,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,n,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

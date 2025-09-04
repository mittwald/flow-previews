import{j as r}from"./iframe-BuQIW6_u.js";import{S as s}from"./Slider-CBO3nT_A.js";import{L as m}from"./Label-_oW49-Il.js";import"./PropsContextProvider-tJtUwa6I.js";import"./mergeRefs-CL2E7ORH.js";import"./index-DWIiGEc3.js";import"./clsx-B-dksMZM.js";import"./Button-DlXaalMD.js";import"./IconWarning-CTHW-5ya.js";import"./Text-8TMWzlfF.js";import"./browser-DTjbbqmr.js";import"./EmulatedBoldText-jJ_haocf.js";import"./Text-CA4hy8xs.js";import"./utils-C3-2IFIX.js";import"./LoadingSpinner-BBuxslej.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-DGRnVYdA.js";import"./context-DHpT4jQ7.js";import"./Button-BKD05Onb.js";import"./ProgressBar-CnP9HTSN.js";import"./Label-Bj6uOgB2.js";import"./Hidden-kXch4Bq4.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-V7qiuXiw.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BKHC3-jq.js";import"./useFocus-CJRfh2Zc.js";import"./useFocusRing-DhNL4Zu8.js";import"./useFocusable-5iT1iM-_.js";import"./useControlledState-DeMfvYEX.js";import"./useFormReset-Cq5VWng9.js";import"./VisuallyHidden-Db59Lmwd.js";const Z={title:"Form Controls/Slider",component:s,render:e=>r.jsx(s,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={render:e=>r.jsx(s,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},a={args:{isDisabled:!0}},i={render:e=>r.jsx(s,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,n,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

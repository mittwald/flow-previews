import{j as r}from"./iframe-CIziUxb4.js";import{S as s}from"./Slider-D66NAFQz.js";import{L as m}from"./Label-CDKeaBWT.js";import"./PropsContextProvider-CTHa5A9a.js";import"./mergeRefs-BWd0MHpr.js";import"./index-BCb4M8Mf.js";import"./clsx-B-dksMZM.js";import"./Button-Bo5QyJiI.js";import"./IconWarning-Bo3R4dY7.js";import"./Text-BbvPR7fy.js";import"./browser-Do2MbvKV.js";import"./EmulatedBoldText-DYFJL8XT.js";import"./Text-CgaJS0Gc.js";import"./utils-CDtaCsrA.js";import"./LoadingSpinner-CF4f6GZw.js";import"./useLocalizedStringFormatter-CeVTCw4Y.js";import"./context-COqsJpPE.js";import"./Button-Cv6Z8Boo.js";import"./ProgressBar-Cyf_qqmn.js";import"./Label-CjcM3hPV.js";import"./Hidden-FsuglVKe.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-xKHqVDKV.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DBbw6zuw.js";import"./useFocus-C2EjpkOi.js";import"./useFocusRing-GixRvSCg.js";import"./useFocusable-CTkb3k3n.js";import"./useControlledState-DVvxwSwc.js";import"./useFormReset-TpB1RScY.js";import"./VisuallyHidden-D_XOb9iP.js";const Z={title:"Form Controls/Slider",component:s,render:e=>r.jsx(s,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={render:e=>r.jsx(s,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},a={args:{isDisabled:!0}},i={render:e=>r.jsx(s,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,n,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

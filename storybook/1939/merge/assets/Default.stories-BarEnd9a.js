import{j as r}from"./iframe-h8pIb5Kv.js";import{S as s}from"./Slider-CqUvVa0Q.js";import{L as m}from"./Label-B99siZxZ.js";import"./PropsContextProvider-Bz7r3WKV.js";import"./mergeRefs-lWAZUqj4.js";import"./index-BfqXMi3X.js";import"./clsx-B-dksMZM.js";import"./Button-BCd5wwjT.js";import"./IconWarning-sarICh-8.js";import"./Text-BnbJhuWd.js";import"./browser-f0s2BEP-.js";import"./EmulatedBoldText-D5nLjsiS.js";import"./Text-DqGJg9Bh.js";import"./utils-Cexs4pbb.js";import"./LoadingSpinner-D0_GuOvu.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-157cI7o6.js";import"./context-pcAEe7OC.js";import"./Button-CV7XsWAw.js";import"./ProgressBar-BoBEJuQ0.js";import"./Label-BakLPZbA.js";import"./Hidden-Dc9Kv2au.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DzpD0Vg0.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BeaeLWhg.js";import"./useFocus-B-etxL-K.js";import"./useFocusRing-7BAVz6YI.js";import"./useFocusable-CAY1QTdY.js";import"./useControlledState-BXC3uZfW.js";import"./useFormReset-BL-bWUrE.js";import"./VisuallyHidden-CByVy45C.js";const Z={title:"Form Controls/Slider",component:s,render:e=>r.jsx(s,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={render:e=>r.jsx(s,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},a={args:{isDisabled:!0}},i={render:e=>r.jsx(s,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,n,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

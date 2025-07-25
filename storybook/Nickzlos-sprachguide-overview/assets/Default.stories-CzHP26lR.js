import{j as r}from"./iframe-vEDY1jTX.js";import{S as s}from"./Slider-CUIxfF9A.js";import{L as m}from"./Label-DkEv0v7K.js";import"./PropsContextProvider-D1FW-2uj.js";import"./mergeRefs-CKsG1c36.js";import"./index-C6zHk2IC.js";import"./clsx-B-dksMZM.js";import"./Button-xQdRWtXu.js";import"./IconWarning-Br_z56yn.js";import"./Text-75grQ_r_.js";import"./browser-C6Q9Qk87.js";import"./EmulatedBoldText-CgqQYji0.js";import"./Text-C6tNNGeu.js";import"./utils-gfhUS_KB.js";import"./LoadingSpinner-DEOdZhCL.js";import"./useLocalizedStringFormatter-BqEHuk_G.js";import"./context-DTpTEKQR.js";import"./Button-CkK3LebK.js";import"./ProgressBar-9Fj4GJ2Q.js";import"./Label-DboWEm2w.js";import"./Hidden-Bejm4KRb.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DgiwqdF_.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-spwLqW3f.js";import"./useFocus-bOn2kcoo.js";import"./useFocusRing-VIyZvsiy.js";import"./useFocusable-ChYDg6I2.js";import"./useControlledState-CQf3r7ZL.js";import"./useFormReset-CgZBEhDH.js";import"./VisuallyHidden-Dyzng5Uc.js";const Z={title:"Form Controls/Slider",component:s,render:e=>r.jsx(s,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={render:e=>r.jsx(s,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},a={args:{isDisabled:!0}},i={render:e=>r.jsx(s,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,n,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

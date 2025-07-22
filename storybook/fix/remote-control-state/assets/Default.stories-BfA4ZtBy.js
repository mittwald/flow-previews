import{j as r}from"./iframe-C4UjBIAn.js";import{S as s}from"./Slider-D0XaGrZW.js";import{L as m}from"./Label-Dvf2CIG9.js";import"./PropsContextProvider-87DwQ7Go.js";import"./mergeRefs-COMEUDHn.js";import"./index-CmrBj9gN.js";import"./clsx-B-dksMZM.js";import"./Button-5hDgeu62.js";import"./IconWarning-CY0XRw6B.js";import"./Text-Cl3jjQuQ.js";import"./browser-DTcMqGMW.js";import"./EmulatedBoldText-CM9vl5us.js";import"./Text-CPgcCMNB.js";import"./utils-BLjaUoJs.js";import"./LoadingSpinner-BzraVxPM.js";import"./useLocalizedStringFormatter-Bj3RA7TV.js";import"./context-DFK0WUvU.js";import"./Button-5rCQqSRQ.js";import"./ProgressBar-BsRzG7g3.js";import"./Label-DUd9oGhN.js";import"./Hidden-DuKiE2Vy.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BsCfOrtV.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-B9Tj2Vkc.js";import"./useFocus-BmYsiZmy.js";import"./useFocusRing-D6tBYznr.js";import"./useFocusable-DY-8mdaw.js";import"./useControlledState-Cate5U5n.js";import"./useFormReset-DguyA7pD.js";import"./VisuallyHidden-DfrTtOS_.js";const Z={title:"Form Controls/Slider",component:s,render:e=>r.jsx(s,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={render:e=>r.jsx(s,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},a={args:{isDisabled:!0}},i={render:e=>r.jsx(s,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,n,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

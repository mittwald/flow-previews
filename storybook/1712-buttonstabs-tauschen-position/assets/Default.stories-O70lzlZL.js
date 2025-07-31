import{j as r}from"./iframe-DLPMA2Jy.js";import{S as s}from"./Slider-CPJlpqqa.js";import{L as m}from"./Label-njveXq1g.js";import"./PropsContextProvider-Cw3WmaAV.js";import"./mergeRefs-aO6HcVoY.js";import"./index-CivGAYnp.js";import"./clsx-B-dksMZM.js";import"./Button-Bg9EI6ke.js";import"./IconWarning-BZNHqQOv.js";import"./Text-BHcv_RSt.js";import"./browser-Bc43_gVJ.js";import"./EmulatedBoldText-BMpcVoTB.js";import"./Text-DL4PvoSo.js";import"./utils-b1QyYEgl.js";import"./LoadingSpinner-BpI0Au67.js";import"./useLocalizedStringFormatter-BX1Rg6Wn.js";import"./context-BFBvnlV1.js";import"./Button-D9zXVRa2.js";import"./ProgressBar-DSj6SBtF.js";import"./Label-tqYGMXcy.js";import"./Hidden-Ba5oTT5z.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-D3WVZ9yP.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DwtsQH2c.js";import"./useFocus-rX-PXuLl.js";import"./useFocusRing-DFqScG39.js";import"./useFocusable-CToQXnw-.js";import"./useControlledState-Btp8qCFq.js";import"./useFormReset-L6ko3eQg.js";import"./VisuallyHidden-C4Kk4Esh.js";const Z={title:"Form Controls/Slider",component:s,render:e=>r.jsx(s,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={render:e=>r.jsx(s,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},a={args:{isDisabled:!0}},i={render:e=>r.jsx(s,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,n,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

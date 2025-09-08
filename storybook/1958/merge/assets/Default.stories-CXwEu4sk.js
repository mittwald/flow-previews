import{j as r}from"./iframe-DIlFkKfe.js";import{S as s}from"./Slider-DUbC_UUW.js";import{L as m}from"./Label-BSjWh_q0.js";import"./PropsContextProvider-DpgT95xr.js";import"./mergeRefs-TbbaDpSF.js";import"./index-DOnHcB6O.js";import"./clsx-B-dksMZM.js";import"./Button-BvaN7Y-D.js";import"./IconWarning-BS6-kuBv.js";import"./Text-CG4Ucl9p.js";import"./browser-CN7RW_LC.js";import"./EmulatedBoldText-hH9OpyJt.js";import"./Text-DuUlrCBa.js";import"./utils-E_0WoXkF.js";import"./LoadingSpinner-wlCv7fWm.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-C2YSpIsm.js";import"./context-BIl-kujG.js";import"./Button-pHXSBUAI.js";import"./ProgressBar-CN0cToBP.js";import"./Label-op2mctQl.js";import"./Hidden-b1169DFL.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BtXixU_d.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D9JeOi6r.js";import"./useFocus-CiEitWNM.js";import"./useFocusRing-VlAoxJyj.js";import"./useFocusable-BKL1JWl8.js";import"./useControlledState-CWVlWyPG.js";import"./useFormReset-BM0i_QS2.js";import"./VisuallyHidden-DzVxkJhT.js";const Z={title:"Form Controls/Slider",component:s,render:e=>r.jsx(s,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={render:e=>r.jsx(s,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},a={args:{isDisabled:!0}},i={render:e=>r.jsx(s,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,n,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

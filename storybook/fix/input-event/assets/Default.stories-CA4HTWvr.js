import{j as r}from"./iframe-Dykv-siI.js";import{S as s}from"./Slider-B2lqu2Bf.js";import{L as m}from"./Label-BoJDi_AO.js";import"./PropsContextProvider-Bor3EKSO.js";import"./mergeRefs-D4l15LMa.js";import"./index-CUyX81Vk.js";import"./clsx-B-dksMZM.js";import"./Button-BwJxl8P2.js";import"./IconWarning-Dqgt16D-.js";import"./Text-D7_Ckqho.js";import"./browser-C-YjMasC.js";import"./EmulatedBoldText-CBoWsrrJ.js";import"./Text-CLEeB9ax.js";import"./utils-B-ceMMh2.js";import"./LoadingSpinner-C6ucKsq_.js";import"./useLocalizedStringFormatter-CQJsBQBp.js";import"./context-5SGg1gn7.js";import"./Button-BG4LaOh8.js";import"./ProgressBar-D9jVrFgv.js";import"./Label-DDTleg66.js";import"./Hidden-B1Iw_O48.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Cl2tFDz1.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-JMB6_eRB.js";import"./useFocus-DT_Sim8A.js";import"./useFocusRing-BLIO3-Um.js";import"./useFocusable-DsypMLKX.js";import"./useControlledState-C0gMHLaR.js";import"./useFormReset-ceBz3BPo.js";import"./VisuallyHidden-BglhDB6t.js";const Z={title:"Form Controls/Slider",component:s,render:e=>r.jsx(s,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={render:e=>r.jsx(s,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},a={args:{isDisabled:!0}},i={render:e=>r.jsx(s,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,n,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-DaUAgimo.js";import{S as s}from"./Slider-CqUvg6wb.js";import{L as m}from"./Label-BgV7ip1p.js";import"./PropsContextProvider-nbYVlS2U.js";import"./mergeRefs-tiTDQII5.js";import"./index-D-fn1bJu.js";import"./clsx-B-dksMZM.js";import"./Button-BNJyR7fn.js";import"./IconWarning-Jl_pbRrq.js";import"./Text-DqLl2XlR.js";import"./browser-DFc9RAYz.js";import"./EmulatedBoldText-B3KIlJpF.js";import"./Text-DKL0uLiC.js";import"./utils-Dv3HAiNW.js";import"./LoadingSpinner-MgjzVDHH.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-Dbj9oBzk.js";import"./context-DGmQszzG.js";import"./Button-CD_lBn7X.js";import"./ProgressBar-Cs4fjP5n.js";import"./Label-BA5dW2di.js";import"./Hidden-DmAVKgDo.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-4W4rDaLN.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BEu6_Qu_.js";import"./useFocus-DfmeJaC9.js";import"./useFocusRing-6fCWhHXp.js";import"./useFocusable-91Y8y3Dw.js";import"./useControlledState-HXI1EgZM.js";import"./useFormReset-CA4kI8bZ.js";import"./VisuallyHidden-BnUSGmEW.js";const Z={title:"Form Controls/Slider",component:s,render:e=>r.jsx(s,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={render:e=>r.jsx(s,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},a={args:{isDisabled:!0}},i={render:e=>r.jsx(s,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,n,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

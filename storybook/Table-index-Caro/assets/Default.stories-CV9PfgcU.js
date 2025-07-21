import{j as r}from"./iframe-D5s8HkwO.js";import{S as s}from"./Slider-B9LT1SRM.js";import{L as m}from"./Label-iSiMu1ip.js";import"./PropsContextProvider-BCJdYZuQ.js";import"./mergeRefs-vd2X_irL.js";import"./index-DQy1KAPI.js";import"./clsx-B-dksMZM.js";import"./Button-BqPne1ar.js";import"./IconWarning-BXD0iv1k.js";import"./Text-Cmu5-2wY.js";import"./browser-CypciHn-.js";import"./EmulatedBoldText-CCMYCjn2.js";import"./Text-BD_PegNR.js";import"./utils-CSEH-j9T.js";import"./LoadingSpinner-D7Ym_un6.js";import"./useLocalizedStringFormatter-Dib9oUr8.js";import"./context-BRoJySMC.js";import"./Button-DfwJ262K.js";import"./ProgressBar-D_TjSuLE.js";import"./Label-DFio2qHv.js";import"./Hidden-DtltZqKg.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Bmfvdk3t.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CLLKaLvj.js";import"./useFocus-ChgCHlwF.js";import"./useFocusRing-0N6EWJVX.js";import"./useFocusable-aHoAMXnZ.js";import"./useControlledState-Cw_CbRo5.js";import"./useFormReset-CQNUsXCF.js";import"./VisuallyHidden-WLO0QMJU.js";const Z={title:"Form Controls/Slider",component:s,render:e=>r.jsx(s,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={render:e=>r.jsx(s,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},a={args:{isDisabled:!0}},i={render:e=>r.jsx(s,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,n,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

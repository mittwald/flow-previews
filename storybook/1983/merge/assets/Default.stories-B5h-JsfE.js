import{j as r}from"./iframe-Bok6IQju.js";import{S as n}from"./Slider-CcOfI8u4.js";import{L as m}from"./Label-DIH0HQY4.js";import"./flowComponent-Cdbek8Wm.js";import"./index-DhUHiBWy.js";import"./clsx-B-dksMZM.js";import"./index-DYD8zkLA.js";import"./Button-I2NsynHm.js";import"./IconWarning-DqBq2uRB.js";import"./Text-BAsYg4gL.js";import"./browser-g58G47PZ.js";import"./EmulatedBoldText-DA_lKfqn.js";import"./Text-DU8LVe1i.js";import"./utils-Cq7OaFeW.js";import"./LoadingSpinner-CodmSJuG.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-CH2KfGTV.js";import"./context-BMAErJH4.js";import"./Button-CmhZDz7g.js";import"./ProgressBar-laJsJEaJ.js";import"./Label-JT-qzIPs.js";import"./Hidden-CFwqYs4-.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CF3vMWYC.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DGEniIzO.js";import"./useFocus-DQozoN0B.js";import"./useFocusRing-Crdxdr5c.js";import"./useFocusable-BDCwijNy.js";import"./useControlledState-B8rFPIj3.js";import"./useFormReset-BWLOy0Jx.js";import"./VisuallyHidden-C0tUvQRs.js";const tr={title:"Form Controls/Slider",component:n,render:e=>r.jsx(n,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={args:{isReadOnly:!0}},a={render:e=>r.jsx(n,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},s={args:{isDisabled:!0}},i={render:e=>r.jsx(n,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,l,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,u,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var S,h,x;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: props => <Slider {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} minValue={20} maxValue={2000} defaultValue={200} step={20}>
      <Label>Storage</Label>
    </Slider>
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var b,f,j;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(j=(f=s.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var y,O,V;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: props => <Slider {...props} showInitialMarker>
      <Label>Amount</Label>
    </Slider>
}`,...(V=(O=i.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};const or=["Default","ReadOnly","WithUnit","Disabled","WithInitialMarker"];export{t as Default,s as Disabled,o as ReadOnly,i as WithInitialMarker,a as WithUnit,or as __namedExportsOrder,tr as default};

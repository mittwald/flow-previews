import{j as r}from"./iframe-BwL5TE8j.js";import{S as n}from"./Slider-BKeiOH-U.js";import{L as m}from"./Label-DWj4cilU.js";import"./PropsContextProvider-CbKMeUzs.js";import"./mergeRefs-BHw4ks4u.js";import"./index-CZakacYE.js";import"./clsx-B-dksMZM.js";import"./Button-aac4MlcR.js";import"./IconWarning-CFzxGyJP.js";import"./Text-DGokGAz6.js";import"./browser-BFoEGF9u.js";import"./EmulatedBoldText-C4JMZ2uF.js";import"./Text-lZrUqOdv.js";import"./utils-D5K6eLjb.js";import"./LoadingSpinner-xuWixoMH.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-B8lu9hLL.js";import"./context-CLDbs9sm.js";import"./Button-BJbpMApz.js";import"./ProgressBar-BqBMnQMD.js";import"./Label-CyvFU2WD.js";import"./Hidden-Bk94MQHU.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-0Q5rWqkC.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-H2LW6Ly5.js";import"./useFocus-B2onYDnw.js";import"./useFocusRing-Dnm1Bceh.js";import"./useFocusable-DDKZ0z65.js";import"./useControlledState-B8vyFbA3.js";import"./useFormReset-BObq63rv.js";import"./VisuallyHidden-kWjY9XjT.js";const tr={title:"Form Controls/Slider",component:n,render:e=>r.jsx(n,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={args:{isReadOnly:!0}},a={render:e=>r.jsx(n,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},s={args:{isDisabled:!0}},i={render:e=>r.jsx(n,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,l,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,u,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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

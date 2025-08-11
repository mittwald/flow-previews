import{j as r}from"./iframe-D2buA_qM.js";import{S as s}from"./Slider-n-698Jrf.js";import{L as m}from"./Label-BBxZTNKD.js";import"./PropsContextProvider-NPJkLJf3.js";import"./mergeRefs-DQR1xYYS.js";import"./index-DJwKP2NW.js";import"./clsx-B-dksMZM.js";import"./Button-zVUpRv9Z.js";import"./IconWarning-IOoTZAJG.js";import"./Text-yAGEZlE0.js";import"./browser-CXT6LfEZ.js";import"./EmulatedBoldText-rwysn7dV.js";import"./Text-BCY1tMCR.js";import"./utils-C_LZ7m3D.js";import"./LoadingSpinner-ja7u21Ua.js";import"./useLocalizedStringFormatter-CCkIfvdA.js";import"./context-DqOuYBdO.js";import"./Button-U5ni6oS0.js";import"./ProgressBar-zFnSV5yo.js";import"./Label-N33FpYFY.js";import"./Hidden-avqQs3vJ.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CoFh3sW6.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BIlt6lCU.js";import"./useFocus-1B3Rl8Uo.js";import"./useFocusRing-k1804b6h.js";import"./useFocusable-B02zeCY6.js";import"./useControlledState-DPiym9a8.js";import"./useFormReset-Sc5in8RN.js";import"./VisuallyHidden-CgNpbGUk.js";const Z={title:"Form Controls/Slider",component:s,render:e=>r.jsx(s,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={render:e=>r.jsx(s,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},a={args:{isDisabled:!0}},i={render:e=>r.jsx(s,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,n,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

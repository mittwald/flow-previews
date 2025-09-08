import{j as r}from"./iframe-BAzLYubM.js";import{S as s}from"./Slider-Bdd72Caa.js";import{L as m}from"./Label-D53E6W3R.js";import"./PropsContextProvider-EavNE9If.js";import"./mergeRefs-AgJlHGVQ.js";import"./index-aIHf1-d_.js";import"./clsx-B-dksMZM.js";import"./Button-DJgbNtOP.js";import"./IconWarning-C8vW1cGr.js";import"./Text-CjPbBUZt.js";import"./browser-CzeCNbOa.js";import"./EmulatedBoldText-saOgMaUw.js";import"./Text-BrSTDiHS.js";import"./utils-b3dZQxDg.js";import"./LoadingSpinner-BkZn8ran.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-1HcLORhi.js";import"./context-dTk8Xbgu.js";import"./Button-DEcgbODe.js";import"./ProgressBar-B6A5wRyw.js";import"./Label-uX-YTZhO.js";import"./Hidden-CD1At3_Y.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Fj3twa-e.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DP_wKln7.js";import"./useFocus-DNlriqLN.js";import"./useFocusRing-BpLfAbDy.js";import"./useFocusable-B5cC5QAy.js";import"./useControlledState-Ca8ITVoa.js";import"./useFormReset-BLDHXQeI.js";import"./VisuallyHidden-sQyJVZKI.js";const Z={title:"Form Controls/Slider",component:s,render:e=>r.jsx(s,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={render:e=>r.jsx(s,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},a={args:{isDisabled:!0}},i={render:e=>r.jsx(s,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,n,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

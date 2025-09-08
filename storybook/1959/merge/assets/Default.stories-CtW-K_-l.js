import{j as r}from"./iframe-9NvHEEYX.js";import{S as s}from"./Slider-ChOR39wQ.js";import{L as m}from"./Label-Bp2WajZU.js";import"./PropsContextProvider-CqBUeMMu.js";import"./mergeRefs-C771JiYT.js";import"./index-CxV9xeMB.js";import"./clsx-B-dksMZM.js";import"./Button-DNkWV-Zy.js";import"./IconWarning-BrSB4tEd.js";import"./Text-DmCU-xjB.js";import"./browser-bwKj2ElG.js";import"./EmulatedBoldText-D0lgjAwv.js";import"./Text-BvWwS3Z5.js";import"./utils-phTOhdhB.js";import"./LoadingSpinner-8k09TVCC.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-DS1f0b9q.js";import"./context-1WNE-E4a.js";import"./Button-BcHYciFT.js";import"./ProgressBar-OiyktaR6.js";import"./Label-BnOBL7z7.js";import"./Hidden-yLzo_Xn1.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BM-ocsZo.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B41vbTz8.js";import"./useFocus-D6PAQN6n.js";import"./useFocusRing-B-QDi9By.js";import"./useFocusable-B9Hhp3CR.js";import"./useControlledState-QTuKyMuz.js";import"./useFormReset-CqIGJUAV.js";import"./VisuallyHidden-BMUrvrGU.js";const Z={title:"Form Controls/Slider",component:s,render:e=>r.jsx(s,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={render:e=>r.jsx(s,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},a={args:{isDisabled:!0}},i={render:e=>r.jsx(s,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,n,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

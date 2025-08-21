import{j as r}from"./iframe-B5f77The.js";import{S as s}from"./Slider-C4NXL6to.js";import{L as m}from"./Label-JDxcagIb.js";import"./PropsContextProvider-Cx_kWuOM.js";import"./mergeRefs-Yh0OJBs6.js";import"./index-CbjhMHv1.js";import"./clsx-B-dksMZM.js";import"./Button-C6w7hggk.js";import"./IconWarning-ljKjKfGj.js";import"./Text-C70_tpAy.js";import"./browser-DNIKTkzv.js";import"./EmulatedBoldText-D73guLBi.js";import"./Text-CRBsFpfB.js";import"./utils-DeVL3yHt.js";import"./LoadingSpinner-CEnOuMOV.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-DLcmNs79.js";import"./context-CDDYAalq.js";import"./Button-BJ8WzA2D.js";import"./ProgressBar-roFwkZNY.js";import"./Label-BtB0U_ml.js";import"./Hidden-DpLdfkk6.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BZo659VM.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C1oGQ4tq.js";import"./useFocus-CpnAUhj6.js";import"./useFocusRing-Dpk-O9NQ.js";import"./useFocusable-DVnwojtz.js";import"./useControlledState-BsCYAcFS.js";import"./useFormReset-CoVNXXZK.js";import"./VisuallyHidden-BRRdMKGS.js";const Z={title:"Form Controls/Slider",component:s,render:e=>r.jsx(s,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={render:e=>r.jsx(s,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},a={args:{isDisabled:!0}},i={render:e=>r.jsx(s,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,n,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

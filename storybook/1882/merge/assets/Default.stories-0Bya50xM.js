import{j as r}from"./iframe-BAtUELBR.js";import{S as s}from"./Slider-BxhfDwlu.js";import{L as m}from"./Label-QEHCu_aF.js";import"./PropsContextProvider-Cm-qlPij.js";import"./mergeRefs-CfY7cvkM.js";import"./index-CLr8lCXa.js";import"./clsx-B-dksMZM.js";import"./Button-BEq1XaV7.js";import"./IconWarning-h84dHhem.js";import"./Text-DzMLmIhZ.js";import"./browser-BVtPTxgw.js";import"./EmulatedBoldText-CosrpHXB.js";import"./Text-j2Uyll_5.js";import"./utils-UbQMFgd1.js";import"./LoadingSpinner-Bs-ckq2L.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-BRgbsD3G.js";import"./context-DbLHYHiQ.js";import"./Button-BiJPJvF0.js";import"./ProgressBar-BZ7qWBUr.js";import"./Label-DhaMlcU0.js";import"./Hidden-CDb1KA3j.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DmioRyAZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B88qu-VD.js";import"./useFocus-DJUZ2En4.js";import"./useFocusRing-BdUFZX00.js";import"./useFocusable-BuN38nX6.js";import"./useControlledState-Cdm8pC1T.js";import"./useFormReset-Cu48O1XS.js";import"./VisuallyHidden-CFnWwY81.js";const Z={title:"Form Controls/Slider",component:s,render:e=>r.jsx(s,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={render:e=>r.jsx(s,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},a={args:{isDisabled:!0}},i={render:e=>r.jsx(s,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,n,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

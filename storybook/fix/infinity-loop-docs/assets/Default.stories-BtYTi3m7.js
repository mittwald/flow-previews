import{j as r}from"./iframe-Cvd7_oGo.js";import{S as s}from"./Slider-BbBWMxVN.js";import{L as m}from"./Label-DZmXl-gv.js";import"./PropsContextProvider-CjZ8S_R8.js";import"./mergeRefs-CjEz_01H.js";import"./index-DRhNAo74.js";import"./clsx-B-dksMZM.js";import"./Button-sQLGDwHF.js";import"./IconWarning-x_Sg-cyk.js";import"./Text-hU5scIVG.js";import"./browser-Dthgcr78.js";import"./EmulatedBoldText-DDsUBT92.js";import"./Text-K3zhr9uI.js";import"./utils-DLoLmG8U.js";import"./LoadingSpinner-CO56yyEM.js";import"./useLocalizedStringFormatter-BeSMCKuR.js";import"./context-CPCW_rIy.js";import"./Button-DH0dq0mD.js";import"./ProgressBar-Cckw_t5H.js";import"./Label-CEN2LQcE.js";import"./Hidden-DIqvoFI_.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-C20I_MYv.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-dFXSg5ro.js";import"./useFocus-mBCJQH3P.js";import"./useFocusRing-BORhh_J0.js";import"./useFocusable-ow-zpXhZ.js";import"./useControlledState-BRJHAPjA.js";import"./useFormReset-TshWv7lU.js";import"./VisuallyHidden-ZBger3GJ.js";const Z={title:"Form Controls/Slider",component:s,render:e=>r.jsx(s,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={render:e=>r.jsx(s,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},a={args:{isDisabled:!0}},i={render:e=>r.jsx(s,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,n,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

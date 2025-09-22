import{j as r}from"./iframe-CqLmdNeC.js";import{S as n}from"./Slider-CqMw05Aa.js";import{L as m}from"./Label-B8Yu6jlZ.js";import"./PropsContextProvider-CftNG7hR.js";import"./mergeRefs-o29IfSv-.js";import"./index-DuAYVIUn.js";import"./clsx-B-dksMZM.js";import"./Button-Cck2R8d6.js";import"./IconWarning-CMS0_eHL.js";import"./Text-BZ3j-6fi.js";import"./browser-D8TwyJaY.js";import"./EmulatedBoldText-EL8QFNsm.js";import"./Text-BpEumjQQ.js";import"./utils-DVF3OaDc.js";import"./LoadingSpinner-CTcHqu9G.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-C4FReXuX.js";import"./context-DzYatHkR.js";import"./Button-D6TKDn6h.js";import"./ProgressBar-Bc_l3bRQ.js";import"./Label-DbnvS1ga.js";import"./Hidden-K4MIyCcS.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BygwjnmG.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CKz354k3.js";import"./useFocus-CLcOeBIv.js";import"./useFocusRing-B3V5UxLb.js";import"./useFocusable-zATjwRwW.js";import"./useControlledState-Blr5WM8A.js";import"./useFormReset-6nvbbxGv.js";import"./VisuallyHidden-DFEHY8aA.js";const tr={title:"Form Controls/Slider",component:n,render:e=>r.jsx(n,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={args:{isReadOnly:!0}},a={render:e=>r.jsx(n,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},s={args:{isDisabled:!0}},i={render:e=>r.jsx(n,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,l,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,u,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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

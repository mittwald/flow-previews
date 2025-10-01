import{j as r}from"./iframe-BA6fDn45.js";import{S as n}from"./Slider-BbtfVhyu.js";import{L as m}from"./Label-12Swj0ll.js";import"./index-Cun1SEai.js";import"./flowComponent-DAuYRjCP.js";import"./index-DovfTAQ1.js";import"./clsx-B-dksMZM.js";import"./index-DorRoXow.js";import"./Button-CMSL1MHe.js";import"./IconWarning-RvG5V2Gg.js";import"./Text-BB_jWM0A.js";import"./browser-BAFOwcQV.js";import"./EmulatedBoldText-Dom6ilWt.js";import"./Text-BlF9rzJU.js";import"./utils-B0PKDg6J.js";import"./LoadingSpinner-Dgd8j7jz.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-CoI3i-Zj.js";import"./context-D6O0cSe8.js";import"./Button-DSXpZTIL.js";import"./ProgressBar-BfpmuxQQ.js";import"./Label-CM7Rtudl.js";import"./Hidden-BWmE1vDO.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BQkI-aJ9.js";import"./useFocus-DSzhmy1b.js";import"./useFocusRing-BRVUU_95.js";import"./useFocusable-20QGmjfJ.js";import"./useMakeFocusable-BwZeESMO.js";import"./useControlledState-DgfMlGIn.js";import"./useFormReset-DffYIxF4.js";import"./VisuallyHidden-D1tpk_Z3.js";const or={title:"Form Controls/Slider",component:n,render:e=>r.jsx(n,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={args:{isReadOnly:!0}},a={render:e=>r.jsx(n,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},s={args:{isDisabled:!0}},i={render:e=>r.jsx(n,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,l,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,u,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(V=(O=i.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};const ar=["Default","ReadOnly","WithUnit","Disabled","WithInitialMarker"];export{t as Default,s as Disabled,o as ReadOnly,i as WithInitialMarker,a as WithUnit,ar as __namedExportsOrder,or as default};

import{j as r}from"./iframe-CR8Ddg53.js";import{S as s}from"./Slider-CECIhGJe.js";import{L as m}from"./Label-ZXYVd8nk.js";import"./PropsContextProvider-BqN4v3Py.js";import"./mergeRefs-mV7XR32G.js";import"./index-Kj0ypInV.js";import"./clsx-B-dksMZM.js";import"./Button-Dau4z8hc.js";import"./IconWarning-B_4O4CPt.js";import"./Text-BErvAADj.js";import"./browser-mRWe3g-L.js";import"./EmulatedBoldText-DQgoED4q.js";import"./Text-cGYhBKhC.js";import"./utils-CPU25MAw.js";import"./LoadingSpinner-CQuEQatc.js";import"./useLocalizedStringFormatter-CsImQUVf.js";import"./context-CK3Xzdoe.js";import"./Button-DYYTgRSY.js";import"./ProgressBar-BTwhL8hz.js";import"./Label-BGtqz6Va.js";import"./Hidden-CcFqVLpr.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Cs4Ke5Sw.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-_KFTzH0P.js";import"./useFocus-B62aW2Cd.js";import"./useFocusRing-RTREyv-v.js";import"./useFocusable-alsSoJVf.js";import"./useControlledState-C1vKNjS4.js";import"./useFormReset-CWiQQPlL.js";import"./VisuallyHidden-D_HRp7SG.js";const Z={title:"Form Controls/Slider",component:s,render:e=>r.jsx(s,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={render:e=>r.jsx(s,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},a={args:{isDisabled:!0}},i={render:e=>r.jsx(s,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,n,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-Czve8Ng1.js";import{S as s}from"./Slider-aYHF1Oi1.js";import{L as m}from"./Label-FUFGZTqe.js";import"./PropsContextProvider-DLHfSyo1.js";import"./mergeRefs-BkScJl_E.js";import"./index-SeEX-dzh.js";import"./clsx-B-dksMZM.js";import"./Button-D73APsNA.js";import"./IconWarning-YJtY_uKm.js";import"./Text-CMgn7hJq.js";import"./browser-C659BIXC.js";import"./EmulatedBoldText-CYlQsTFY.js";import"./Text-xUaxq5aV.js";import"./utils-C85tsJLi.js";import"./LoadingSpinner-B0jtDNpX.js";import"./useLocalizedStringFormatter-uQUw7qmu.js";import"./context-D03EQw3p.js";import"./Button-Cis11iQd.js";import"./ProgressBar-CQMCSPa7.js";import"./Label-BfVvFZj4.js";import"./Hidden-B3217TUg.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BFN45BzM.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-8K4_ozuW.js";import"./useFocus-DLNoddQ5.js";import"./useFocusRing-Bu3hVrpu.js";import"./useFocusable-DPi5-Rks.js";import"./useControlledState-BeXkP8kb.js";import"./useFormReset-BM4kigyU.js";import"./VisuallyHidden-DTvv8wPC.js";const Z={title:"Form Controls/Slider",component:s,render:e=>r.jsx(s,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={render:e=>r.jsx(s,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},a={args:{isDisabled:!0}},i={render:e=>r.jsx(s,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,n,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

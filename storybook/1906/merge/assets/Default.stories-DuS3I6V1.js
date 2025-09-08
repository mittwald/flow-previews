import{j as r}from"./iframe-CB_IvR8I.js";import{S as t}from"./Slider-CA6Me8La.js";import{L as m}from"./Label-DQjiInKi.js";import"./PropsContextProvider-CQ73sAu4.js";import"./mergeRefs-CSVQQCMz.js";import"./index-dvXJvLk3.js";import"./clsx-B-dksMZM.js";import"./Button-B6pH5E7T.js";import"./IconWarning-DHvxn9zQ.js";import"./Text-C_h1oOw9.js";import"./browser-CyPw7Cgt.js";import"./EmulatedBoldText-B-vVao8K.js";import"./Text-B8w1c0_W.js";import"./utils-g_K47B_Q.js";import"./LoadingSpinner-B018WmYG.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-BKMvXLmW.js";import"./context-CQpLcUPr.js";import"./Button-BNZImaSB.js";import"./ProgressBar-DB_rXcaP.js";import"./Label-kjSyRRrG.js";import"./Hidden-jmCIdXP6.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DNzpHOuu.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BSSkfFZ6.js";import"./useFocus-B0PqsM1A.js";import"./useFocusRing-gt8SzE7T.js";import"./useFocusable-B2StGM5o.js";import"./useControlledState-CS3WyH2d.js";import"./useFormReset-DVL0Bkgs.js";import"./VisuallyHidden-D4WM3JvY.js";const tr={title:"Form Controls/Slider",component:t,render:e=>r.jsx(t,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},o={},a={render:e=>r.jsx(t,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},i={render:e=>r.jsx(t,{...e,unit:"×",minValue:1,maxValue:3,defaultValue:2.5,step:.5,children:r.jsx(m,{children:"Zoom"})})},s={args:{isDisabled:!0}},n={render:e=>r.jsx(t,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,l,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,c,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: props => <Slider {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} minValue={20} maxValue={2000} defaultValue={200} step={20}>
      <Label>Storage</Label>
    </Slider>
}`,...(h=(c=a.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};var x,S,g;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: props => <Slider {...props} unit="×" minValue={1} maxValue={3} defaultValue={2.5} step={0.5}>
      <Label>Zoom</Label>
    </Slider>
}`,...(g=(S=i.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var b,f,V;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(V=(f=s.parameters)==null?void 0:f.docs)==null?void 0:V.source}}};var j,L,D;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: props => <Slider {...props} showInitialMarker>
      <Label>Amount</Label>
    </Slider>
}`,...(D=(L=n.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};const or=["Default","WithFormatOptions","WithUnit","Disabled","WithInitialMarker"];export{o as Default,s as Disabled,a as WithFormatOptions,n as WithInitialMarker,i as WithUnit,or as __namedExportsOrder,tr as default};

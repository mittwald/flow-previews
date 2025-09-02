import{j as r}from"./iframe-D8FrJ-CZ.js";import{S as t}from"./Slider-gbjJj2eD.js";import{L as m}from"./Label-Cw_HB0L8.js";import"./PropsContextProvider-EPA_0_Bo.js";import"./mergeRefs-utDOSA_8.js";import"./index-DO8-cvBB.js";import"./clsx-B-dksMZM.js";import"./Button-Cq__NSNu.js";import"./IconWarning-C11FXGxU.js";import"./Text-CijQgHlf.js";import"./browser-Df0WU9AE.js";import"./EmulatedBoldText-CzquwV9M.js";import"./Text-CjVOmJR3.js";import"./utils-DLru3qrQ.js";import"./LoadingSpinner-Cw9GFgG6.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-BJgvBQQo.js";import"./context-Dz2Qbbtu.js";import"./Button-DVdJDgqt.js";import"./ProgressBar-DaMaURS1.js";import"./Label-CJkrjybq.js";import"./Hidden-DLVb5zGs.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DAKRqT8J.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-mcSHbC1W.js";import"./useFocus-_KFCgimG.js";import"./useFocusRing-Dt7u0yDa.js";import"./useFocusable-BXg3nN8-.js";import"./useControlledState-Bhtz6D6k.js";import"./useFormReset-BMZp-ADn.js";import"./VisuallyHidden-HCxlUedB.js";const tr={title:"Form Controls/Slider",component:t,render:e=>r.jsx(t,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},o={},a={render:e=>r.jsx(t,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},i={render:e=>r.jsx(t,{...e,unit:"×",minValue:1,maxValue:3,defaultValue:2.5,step:.5,children:r.jsx(m,{children:"Zoom"})})},s={args:{isDisabled:!0}},n={render:e=>r.jsx(t,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,l,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,c,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

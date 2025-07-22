import{j as r}from"./iframe-CTS_vBBR.js";import{S as s}from"./Slider-DSZ1Nu4S.js";import{L as m}from"./Label-CTpKXefw.js";import"./PropsContextProvider-D42A7vMX.js";import"./mergeRefs-BwV9Bpf-.js";import"./index-CHVZ0_DR.js";import"./clsx-B-dksMZM.js";import"./Button-BCm6-QqX.js";import"./IconWarning-fu5B3ESI.js";import"./Text-BLj2iCUU.js";import"./browser-CAp200rL.js";import"./EmulatedBoldText-1BeNjxGF.js";import"./Text-obNOHtVo.js";import"./utils-jZBUW_kd.js";import"./LoadingSpinner-B_uSEYnz.js";import"./useLocalizedStringFormatter-PMR3uOGp.js";import"./context-bQBwJTVW.js";import"./Button-Ckv0OeVG.js";import"./ProgressBar-DhYw7mhF.js";import"./Label-Bn0NFPwe.js";import"./Hidden-BZmRwcL-.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-ByTznw_u.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Wiw2pSFm.js";import"./useFocus-TOgYA3QQ.js";import"./useFocusRing-BBi2D29q.js";import"./useFocusable-CKYlOhg9.js";import"./useControlledState-Bfc6Wiov.js";import"./useFormReset-CIT6qu5J.js";import"./VisuallyHidden-C7PlrqLT.js";const Z={title:"Form Controls/Slider",component:s,render:e=>r.jsx(s,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={render:e=>r.jsx(s,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},a={args:{isDisabled:!0}},i={render:e=>r.jsx(s,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,n,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

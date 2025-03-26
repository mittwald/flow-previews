import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-CXcpQZ5J.js";import{S as s}from"./Slider-zNycVB_K.js";import{L as m}from"./Label-BlFJqu_U.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./flowComponent-CxhHHjOl.js";import"./index-_FZDHFZo.js";import"./index-DJQWtO6Q.js";import"./index-sbGzhXso.js";import"./clsx-B-dksMZM.js";import"./Button-DoxNqpU5.js";import"./IconApp-C5KCAdlI.js";import"./IconWarning-C6q-vt44.js";import"./Wrap-DQq6jo70.js";import"./Text-Dr5MNJ9m.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-BPJW4PHD.js";import"./Text-BUuVncJZ.js";import"./utils-D_n-6U4k.js";import"./LoadingSpinner-C8RokD4H.js";import"./useLocalizedStringFormatter-BQtswni5.js";import"./Button-BcgzNVYq.js";import"./ProgressBar-8nsGDrqI.js";import"./Label-D7zTyyav.js";import"./Hidden-DtYLaSTT.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BoT2JKOr.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DKvzVrwU.js";import"./useFocus-DPMzGzIF.js";import"./useFocusRing-C5Ht9MUl.js";import"./useFocusable-C54KMRcY.js";import"./useControlledState-CHe-wEx1.js";import"./useFormReset-C7M_aUQL.js";import"./VisuallyHidden-nUs_Pnf6.js";const tr={title:"Form Controls/Slider",component:s,render:e=>r.jsx(s,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={render:e=>r.jsx(s,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},i={args:{isDisabled:!0}},a={render:e=>r.jsx(s,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,n,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: props => <Slider {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} minValue={20} maxValue={2000} defaultValue={200} step={20}>
      <Label>Storage</Label>
    </Slider>
}`,...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var g,h,x;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(x=(h=i.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var S,b,f;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: props => <Slider {...props} showInitialMarker>
      <Label>Amount</Label>
    </Slider>
}`,...(f=(b=a.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const or=["Default","WithUnit","Disabled","WithInitialMarker"];export{t as Default,i as Disabled,a as WithInitialMarker,o as WithUnit,or as __namedExportsOrder,tr as default};

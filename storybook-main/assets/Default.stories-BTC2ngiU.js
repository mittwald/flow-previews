import{j as r}from"./iframe-DzdsrO80.js";import{S as s}from"./Slider-BclaDjY9.js";import{L as m}from"./Label-Bm3Js6Mn.js";import"./PropsContextProvider-IX1SCoto.js";import"./mergeRefs-BURbbDf-.js";import"./index-Bdpzlu2x.js";import"./clsx-B-dksMZM.js";import"./Button-DVR7cX3i.js";import"./IconWarning-B3m6OsdH.js";import"./Text-DXUL7YAG.js";import"./browser-CWHi4dia.js";import"./EmulatedBoldText-BUyeaD_Y.js";import"./Text-CRTGmFuV.js";import"./utils-CvAakX2W.js";import"./LoadingSpinner-PW_7_s64.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-B09vxeO2.js";import"./context-DCkzppns.js";import"./Button-BCqDIvjf.js";import"./ProgressBar-LQ-fnBcd.js";import"./Label-DXfcpAFN.js";import"./Hidden-BVbf7n1G.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BtHrL8qq.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DskVbL7b.js";import"./useFocus-B0VC8u8k.js";import"./useFocusRing-CBIzKb6Q.js";import"./useFocusable-COvMPAb3.js";import"./useControlledState-D4aZ1p71.js";import"./useFormReset-B7pkU5Xm.js";import"./VisuallyHidden-BfQH1Q-z.js";const Z={title:"Form Controls/Slider",component:s,render:e=>r.jsx(s,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={render:e=>r.jsx(s,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},a={args:{isDisabled:!0}},i={render:e=>r.jsx(s,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,n,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

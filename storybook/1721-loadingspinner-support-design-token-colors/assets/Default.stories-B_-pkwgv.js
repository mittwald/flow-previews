import{j as r}from"./iframe-ZeYQaqTq.js";import{S as s}from"./Slider-CWi5mg9f.js";import{L as m}from"./Label-DaFn2Xmv.js";import"./PropsContextProvider-DGPQbSrl.js";import"./mergeRefs-C3tFkdTs.js";import"./index-BPBZxO2T.js";import"./clsx-B-dksMZM.js";import"./Button-CmxRhHKt.js";import"./IconWarning-Mt76M62l.js";import"./Text-ADEYgpsM.js";import"./browser-BE8-G2h8.js";import"./EmulatedBoldText-CNK-5iTs.js";import"./Text-CTESEC7p.js";import"./utils-CZSTTIRS.js";import"./LoadingSpinner-BsYGnIlm.js";import"./useLocalizedStringFormatter-DqAl4YCp.js";import"./context-BdRPu6tD.js";import"./Button-8lvA6fYu.js";import"./ProgressBar-y-6EHwAj.js";import"./Label-BCX0WWwJ.js";import"./Hidden-BCzOp-Gy.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-1QKgiZqr.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-C2f9EIPz.js";import"./useFocus-EvOFeEzd.js";import"./useFocusRing-D3GUo_QM.js";import"./useFocusable-_P_eC141.js";import"./useControlledState-fovAuXst.js";import"./useFormReset-DYMhoeZf.js";import"./VisuallyHidden-CW-y3tuT.js";const Z={title:"Form Controls/Slider",component:s,render:e=>r.jsx(s,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={render:e=>r.jsx(s,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},a={args:{isDisabled:!0}},i={render:e=>r.jsx(s,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,n,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

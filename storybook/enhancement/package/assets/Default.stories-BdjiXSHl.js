import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-CtQTiInQ.js";import{S as s}from"./Slider-CB6JwVg2.js";import{L as m}from"./Label-C3GsNgl3.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./PropsContextProvider-CcavWj25.js";import"./mergeProps-BKLeaOo7.js";import"./clsx-B-dksMZM.js";import"./index-DTllGi7h.js";import"./index-Cdp0xV4M.js";import"./Button-hygsiG4S.js";import"./IconApp-ZwiVKkvj.js";import"./IconWarning-ZndYkHab.js";import"./Text-DbOmKCPv.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-D1jUzRoU.js";import"./Text-oMr6ueMZ.js";import"./utils-D0CTRpvX.js";import"./LoadingSpinner-B1RDGRlO.js";import"./useLocalizedStringFormatter-DpLhROVm.js";import"./Button-BGa7Lue7.js";import"./ProgressBar-TBeTHm5P.js";import"./Label-BZrcB42p.js";import"./Hidden-Dd0lSYNZ.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BhTOAlCQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CEYeyB88.js";import"./useFocus-HZduNndM.js";import"./useFocusRing-HsOmCAqc.js";import"./useFocusable-43R3EC9q.js";import"./useControlledState-BKUqB07S.js";import"./useFormReset-Dt6BcYvw.js";import"./VisuallyHidden-p5Z0Rn92.js";const er={title:"Form Controls/Slider",component:s,render:e=>r.jsx(s,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={render:e=>r.jsx(s,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},i={args:{isDisabled:!0}},a={render:e=>r.jsx(s,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,n,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(f=(b=a.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const tr=["Default","WithUnit","Disabled","WithInitialMarker"];export{t as Default,i as Disabled,a as WithInitialMarker,o as WithUnit,tr as __namedExportsOrder,er as default};

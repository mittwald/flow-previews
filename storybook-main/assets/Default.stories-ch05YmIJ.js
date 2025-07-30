import{j as r}from"./iframe-5e2kPeup.js";import{S as s}from"./Slider-BiKPH65Q.js";import{L as m}from"./Label-rQ1K5PG1.js";import"./PropsContextProvider-DEH0t7hl.js";import"./mergeRefs-uY3blBsM.js";import"./index-lLG5KW4n.js";import"./clsx-B-dksMZM.js";import"./Button-BSAdG0Rb.js";import"./IconWarning-CAYwnCqi.js";import"./Text-CEKkIKYs.js";import"./browser-D35eJ3ID.js";import"./EmulatedBoldText-DjgxRs5N.js";import"./Text-DiRiFDT_.js";import"./utils-Bj-e-2L9.js";import"./LoadingSpinner-D5xWaFe2.js";import"./useLocalizedStringFormatter-BSu4az1l.js";import"./context-BlWBKAs5.js";import"./Button-DovRDHW7.js";import"./ProgressBar-Cw08Slz6.js";import"./Label-68vOnyUK.js";import"./Hidden-DMXZYlYz.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-uzLes6Tz.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CrwMQoq0.js";import"./useFocus-CgJ_pcIH.js";import"./useFocusRing-Xasmxdld.js";import"./useFocusable-Dvdn958o.js";import"./useControlledState-CITgxuHh.js";import"./useFormReset-SVEOBZG_.js";import"./VisuallyHidden-DW4vMZrD.js";const Z={title:"Form Controls/Slider",component:s,render:e=>r.jsx(s,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={render:e=>r.jsx(s,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},a={args:{isDisabled:!0}},i={render:e=>r.jsx(s,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,n,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

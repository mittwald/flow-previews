import{j as r}from"./iframe-BmZalVao.js";import{S as s}from"./Slider-D04hfMkq.js";import{L as m}from"./Label-Cd70f9RY.js";import"./PropsContextProvider-OSTZh0lU.js";import"./mergeRefs-CtwPOjS1.js";import"./index-srGqJPqU.js";import"./clsx-B-dksMZM.js";import"./Button-V4gWXU1O.js";import"./IconWarning-Uta2YDJP.js";import"./Text-1n2lmTX2.js";import"./browser-DJMeickF.js";import"./EmulatedBoldText-BKXMjbmY.js";import"./Text-fNTtgWDx.js";import"./utils-CAvZ88A2.js";import"./LoadingSpinner-D3X9xJLw.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-D1wGXel8.js";import"./context-CHBdcuz4.js";import"./Button-B7Mfw9fE.js";import"./ProgressBar-B81Zb8lf.js";import"./Label-BMWYWyxm.js";import"./Hidden-CVk6dJGe.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Dcdc4QL3.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-ceZxyZeS.js";import"./useFocus-CJp-zb5k.js";import"./useFocusRing-DYr6CdEu.js";import"./useFocusable-RaDIdBmD.js";import"./useControlledState-DkevdXcu.js";import"./useFormReset-BvOmhq3S.js";import"./VisuallyHidden-CzhjBb86.js";const Z={title:"Form Controls/Slider",component:s,render:e=>r.jsx(s,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={render:e=>r.jsx(s,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},a={args:{isDisabled:!0}},i={render:e=>r.jsx(s,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,n,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

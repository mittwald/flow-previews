import{j as r}from"./iframe-Ct0YhZ2w.js";import{S as s}from"./Slider-BG7RZM3Q.js";import{L as m}from"./Label-DV38Rr2k.js";import"./PropsContextProvider-DXGdmmnh.js";import"./mergeRefs-9fQ6ccEP.js";import"./index-DiPtFLdy.js";import"./clsx-B-dksMZM.js";import"./Button-DzWxEQls.js";import"./IconWarning-Nibz28Ko.js";import"./Text-c1auIdYf.js";import"./browser-DfqMGCP2.js";import"./EmulatedBoldText-BinEGydl.js";import"./Text-1hz8XXbQ.js";import"./utils-ZYq7i5E4.js";import"./LoadingSpinner-BsXh4HZo.js";import"./useLocalizedStringFormatter-Di8CJoIO.js";import"./context-C170bgop.js";import"./Button-BQqMUkU2.js";import"./ProgressBar-BerxnO-h.js";import"./Label-B9yUG6H3.js";import"./Hidden-B-UfVuqf.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CFRZWafb.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CCIxnJPX.js";import"./useFocus-BOvvpzaY.js";import"./useFocusRing-B79RLIIn.js";import"./useFocusable-Co66UmkD.js";import"./useControlledState-BKGcljyy.js";import"./useFormReset-B8uzDw4w.js";import"./VisuallyHidden-C2BGRztG.js";const Z={title:"Form Controls/Slider",component:s,render:e=>r.jsx(s,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={render:e=>r.jsx(s,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},a={args:{isDisabled:!0}},i={render:e=>r.jsx(s,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,n,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

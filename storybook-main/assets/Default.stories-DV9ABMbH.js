import{j as r}from"./iframe-CwjVVvSu.js";import{S as n}from"./Slider-CHuSJW4W.js";import{L as m}from"./Label-CmvTTYLZ.js";import"./index-Cun1SEai.js";import"./flowComponent-CL0EVs0o.js";import"./index-CVGQdXYt.js";import"./clsx-B-dksMZM.js";import"./index-Bxp7_DVb.js";import"./Button-BzxBG2HJ.js";import"./IconWarning-B6H6J5Pk.js";import"./Text-BOmlTVxc.js";import"./browser-DnOs_TEg.js";import"./EmulatedBoldText-pbz3Nf-x.js";import"./Text-lT5rhDYZ.js";import"./utils-OpG5u5ZF.js";import"./LoadingSpinner-BwQDbOwS.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-BEI6070A.js";import"./context-YbH8ssAd.js";import"./Button-ClXMkmVB.js";import"./ProgressBar-QC1O3iDd.js";import"./Label-BELpmtJQ.js";import"./Hidden-BrRDJs-s.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CTJZYj-E.js";import"./useFocus-YxLRULIL.js";import"./useFocusRing-DVoBnH5y.js";import"./useFocusable-CooOyqEQ.js";import"./useMakeFocusable-CgSnmY1U.js";import"./useControlledState-3R78iQB5.js";import"./useFormReset-BtU7PEqW.js";import"./VisuallyHidden-DYp4WZRH.js";const or={title:"Form Controls/Slider",component:n,render:e=>r.jsx(n,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={args:{isReadOnly:!0}},a={render:e=>r.jsx(n,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},s={args:{isDisabled:!0}},i={render:e=>r.jsx(n,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,l,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,u,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var S,h,x;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: props => <Slider {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} minValue={20} maxValue={2000} defaultValue={200} step={20}>
      <Label>Storage</Label>
    </Slider>
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var b,f,j;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(j=(f=s.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var y,O,V;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: props => <Slider {...props} showInitialMarker>
      <Label>Amount</Label>
    </Slider>
}`,...(V=(O=i.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};const ar=["Default","ReadOnly","WithUnit","Disabled","WithInitialMarker"];export{t as Default,s as Disabled,o as ReadOnly,i as WithInitialMarker,a as WithUnit,ar as __namedExportsOrder,or as default};

import{R as e}from"./index-BwDkhjyp.js";import{S as s}from"./Slider-D0KZiSwE.js";import{L as m}from"./Label-DmmpejK1.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-L8FZPC_o.js";import"./PropsContextProvider-DwTel3aB.js";import"./index-DVe9vSxq.js";import"./clsx-B-dksMZM.js";import"./index-B8XB3FuZ.js";import"./Button-CE1BCqF-.js";import"./IconApp-D9YGKrkS.js";import"./IconWarning-B77fLmlz.js";import"./Wrap-DQq6jo70.js";import"./Text-CKjZYOWy.js";import"./EmulatedBoldText-B1t6hs5E.js";import"./Text-C_suByGF.js";import"./utils-B-mS0hjG.js";import"./LoadingSpinner-WO6qy2zn.js";import"./useLocalizedStringFormatter-BNeRQeib.js";import"./Button-BTMfZQLF.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-CKMlalor.js";import"./usePress-YR3pmEr9.js";import"./Label-DwL17Jrp.js";import"./useNumberFormatter-DEpQvdBY.js";import"./useControlledState-C0C-dzuH.js";import"./number-nHrFdSb-.js";import"./useLabel-BaXqGmeE.js";import"./useLabels-kg7v6Afk.js";import"./useFormReset-CfqvoD0r.js";import"./VisuallyHidden-BSWHffzG.js";const Y={title:"Form Controls/Slider",component:s,render:r=>e.createElement(s,{...r},e.createElement(m,null,"Amount")),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}}},t={},a={render:r=>e.createElement(s,{...r,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20},e.createElement(m,null,"Storage"))},o={args:{isDisabled:!0}},i={render:r=>e.createElement(s,{...r,defaultValue:20,showInitialMarker:!0},e.createElement(m,null,"Amount"))};var n,p,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var u,c,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: props => <Slider {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} minValue={20} maxValue={2000} defaultValue={200} step={20}>
      <Label>Storage</Label>
    </Slider>
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var S,f,g;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var b,V,h;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: props => <Slider {...props} defaultValue={20} showInitialMarker>
      <Label>Amount</Label>
    </Slider>
}`,...(h=(V=i.parameters)==null?void 0:V.docs)==null?void 0:h.source}}};const Z=["Default","WithUnit","Disabled","WithInitialMarker"];export{t as Default,o as Disabled,i as WithInitialMarker,a as WithUnit,Z as __namedExportsOrder,Y as default};

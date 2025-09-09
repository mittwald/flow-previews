import{j as r}from"./iframe-DVH1JXtP.js";import{R as p,b as l,a as g}from"./RadioButton-DVFRD87n.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-DISB-lFt.js";import{T as y}from"./Text-D1P9H2_H.js";import{C as T}from"./Content-DYSaPFLh.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-FHPOrKi5.js";import"./mergeRefs-C62y_F-P.js";import"./index-CtJAiOn7.js";import"./FieldError-4LhCBGmq.js";import"./IconWarning-CU_Jn-Rh.js";import"./FieldError-DwXG4Veb.js";import"./utils-BK8baG-i.js";import"./Text-CBJ04nMy.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-1jmWvvVV.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-CYEd6Cav.js";import"./Form-BPwJmxNt.js";import"./useFocus-CQVh66mU.js";import"./useLabel-NP7-116U.js";import"./Label-CMyz7O-I.js";import"./Hidden-weVCu2TA.js";import"./useFormReset-rRCeDrNW.js";import"./usePress-BeW5A3Oi.js";import"./useFocusRing-DRg_t-7O.js";import"./useFocusable-T2p-jFMn.js";import"./FocusScope-BiiCP1_E.js";import"./context-CdYfmHmn.js";import"./VisuallyHidden-DtF4wZC2.js";import"./useControlledState-Urxw2XXp.js";import"./Label-CxrJqwXs.js";import"./useLocalizedStringFormatter-DaQD7sH9.js";import"./browser-C28Fm9d0.js";import"./EmulatedBoldText-Bdvunp4L.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="a" aria-label="Label">
      <Radio value="a">{dummyText.long} </Radio>
      <Radio value="b">{dummyText.long} </Radio>
      <Radio value="c">{dummyText.long}</Radio>
    </RadioGroup>
}`,...(s=(d=t.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};var u,c,x;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="0" aria-label="Label" l={[1, 1, 1, 1]}>
      {Array(6).fill("").map((value, index) => <RadioButton value={index.toString()} key={index}>
            <Text>{dummyText.medium}</Text>
            <Content>{dummyText.medium}</Content>
          </RadioButton>)}
    </RadioGroup>
}`,...(x=(c=i.parameters)==null?void 0:c.docs)==null?void 0:x.source}}};var R,f,b;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="0" aria-label="Label">
      {Array(3).fill("").map((value, index) => <RadioButton value={index.toString()} key={index}>
            Option {index + 1}
          </RadioButton>)}
    </RadioGroup>,
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...(b=(f=m.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const mr=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,mr as __namedExportsOrder,ir as default};

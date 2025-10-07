import{j as r}from"./iframe-D2Anwmct.js";import{R as l,b as p,a as g}from"./RadioButton-DKJ8-gT2.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-CraN50Fn.js";import{T as y}from"./Text-DtdPLjLU.js";import{C as T}from"./Content-ogo1gykC.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DKluqIHM.js";import"./index-f9td_37l.js";import"./index-Ch7RQrKi.js";import"./FieldError-BoPnTUuW.js";import"./IconWarning-DnpABaws.js";import"./FieldError-BxxGUPOn.js";import"./utils-BpjcCBEz.js";import"./Text-lRP8kqf1.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-CxbtdzVr.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-DLbAZGSO.js";import"./RadioGroup-C-x3ghoR.js";import"./Form-C_7tgvec.js";import"./Label-CyDLPDuC.js";import"./Hidden-C6VQoCGL.js";import"./useFormValidation-s-r8BMkB.js";import"./useFocus-CPbnM8zc.js";import"./useControlledState-CmSk5MJT.js";import"./FocusScope-B3f0Mp00.js";import"./useFocusRing-BsT1m1qa.js";import"./context--yho_VB2.js";import"./useFormReset-Bn-oECSu.js";import"./usePress-DkH4CmpU.js";import"./useFocusable-BPmxfIwz.js";import"./VisuallyHidden-Cz7LPiXA.js";import"./Label-CqHNa78s.js";import"./useLocalizedStringFormatter-BekYTjw8.js";import"./browser-CPuaporN.js";import"./EmulatedBoldText-C4J0xt-K.js";const pr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(l,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(b=(f=m.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const lr=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,lr as __namedExportsOrder,pr as default};

import{j as r}from"./iframe-BXWHolr7.js";import{R as p,b as l,a as g}from"./RadioButton-BHat36PQ.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-gNwmOkAO.js";import{T as y}from"./Text-cublDBL7.js";import{C as T}from"./Content-C_VJKyJ7.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Aeosf-s6.js";import"./mergeRefs-D5kad6xW.js";import"./index-BO_Ze_Is.js";import"./FieldError-Dg8tiTi9.js";import"./IconWarning-C9wAMmE4.js";import"./FieldError-kOzNSTVH.js";import"./utils-B2TamtWx.js";import"./Text-CshnnIVL.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-BetbcbHd.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-DcssesCv.js";import"./Form-C40WvtQf.js";import"./useFocus-BHj76f0r.js";import"./useLabel-CPYM8v3M.js";import"./Label-BCj8S481.js";import"./Hidden-BM-MvoWz.js";import"./useFormReset-D3PYmlJ_.js";import"./usePress-C1TcPoWb.js";import"./useFocusRing-C9RrD32J.js";import"./useFocusable-CA3YRohc.js";import"./FocusScope-Bq5J7cyD.js";import"./context-Dja7lVng.js";import"./VisuallyHidden-BHe7S0lR.js";import"./useControlledState-Dr1QSdOx.js";import"./Label-CRWIqmlk.js";import"./useLocalizedStringFormatter-7zHp9kQ3.js";import"./browser-tTf4FW93.js";import"./EmulatedBoldText-C4nbdyGF.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

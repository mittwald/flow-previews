import{j as r}from"./iframe-FeXPLmWJ.js";import{R as p,b as l,a as g}from"./RadioButton-DfRt9T-A.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-Ck4f8BPh.js";import{T as y}from"./Text-Bk-26kZZ.js";import{C as T}from"./Content-Ce-u-CD7.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DOQJhc0c.js";import"./mergeRefs-DBXayCo7.js";import"./index-Dw1iNfwN.js";import"./FieldError-kve_n9nq.js";import"./IconWarning-Bft-d4EJ.js";import"./FieldError-C1vR0UXv.js";import"./utils-CXtn_DQA.js";import"./Text-D-W6Oypd.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-BqxBVA2V.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-BWrLTP6j.js";import"./Form-1I64UDUq.js";import"./useFocus-utUwSX9z.js";import"./useLabel-DVVoN6WB.js";import"./Label-DaJTJCE8.js";import"./Hidden-5GhHzgiK.js";import"./useFormReset-Dq2F4z6p.js";import"./usePress-CiJ5VmDC.js";import"./useFocusRing-CtO3s9Jp.js";import"./useFocusable-DUk2eF1B.js";import"./FocusScope-D_yyKfql.js";import"./context-CdDLZW_F.js";import"./VisuallyHidden-BFgml7Em.js";import"./useControlledState-Bg7JB_7p.js";import"./Label-DeaIyOHa.js";import"./useLocalizedStringFormatter-SRxq75M0.js";import"./browser-oak4xKwc.js";import"./EmulatedBoldText-Dl2sTmnq.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

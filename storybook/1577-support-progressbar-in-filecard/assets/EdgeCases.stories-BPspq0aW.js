import{j as r}from"./iframe-DdApAMdB.js";import{R as p,b as l,a as g}from"./RadioButton-CiDs7TQn.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-4JMwUEU5.js";import{T as y}from"./Text-BwGnDMAi.js";import{C as T}from"./Content-DAGeg-gX.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CEuVt76S.js";import"./mergeRefs-BvD6XTJo.js";import"./index-CmLMHji9.js";import"./FieldError-D-Hf7sx5.js";import"./IconWarning-Cpaydhok.js";import"./FieldError-CIX9Q6F5.js";import"./utils-DAIXfBLw.js";import"./Text-CGWbxphN.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-DrP0EYW4.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-CUGgzN-y.js";import"./Form-EknBmRno.js";import"./useFocus-D5He2YFW.js";import"./useLabel-DpyWwSJM.js";import"./Label-kWZFrMix.js";import"./Hidden-BMg7stLw.js";import"./useFormReset-BHdeIf20.js";import"./usePress-DRRHPdfj.js";import"./useFocusRing-PbnZIDVe.js";import"./useFocusable-DBXoEHDs.js";import"./FocusScope-CMXbBALw.js";import"./context-DR2Fzh74.js";import"./VisuallyHidden-DyxmrKqh.js";import"./useControlledState-BEGJzQOc.js";import"./Label-Yw88ZPyv.js";import"./useLocalizedStringFormatter-TjZfQGwd.js";import"./browser-Bz93nYTI.js";import"./EmulatedBoldText-BU0UeOKO.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

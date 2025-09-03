import{j as r}from"./iframe-BPnb-8PC.js";import{R as p,b as l,a as g}from"./RadioButton-WAGfFF3U.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-BR7mGOon.js";import{T as y}from"./Text-Ba-uZw6F.js";import{C as T}from"./Content-5ZtyftWB.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Cb7EFbEI.js";import"./mergeRefs-CPe5M-5f.js";import"./index-CxYrBtXy.js";import"./FieldError-hQRdtdq8.js";import"./IconWarning-j0MoznR6.js";import"./FieldError-Dg8qbhsB.js";import"./utils-BNZdeyCH.js";import"./Text-KWqvWgwT.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-DC01nIq1.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-BaCi3Gf2.js";import"./Form-CLKe_oCF.js";import"./useFocus-CQt3VlDx.js";import"./useLabel-Mae_nSQP.js";import"./Label-V02MVWo9.js";import"./Hidden-Crd3-5R7.js";import"./useFormReset-BXLcPYzT.js";import"./usePress-DbV6qfru.js";import"./useFocusRing-uXaHHV-0.js";import"./useFocusable-DW9GZi2B.js";import"./FocusScope-CnAVXuaX.js";import"./context-Cvzu1MDH.js";import"./VisuallyHidden-BEucGg6b.js";import"./useControlledState-BZWp4i98.js";import"./Label-bLTq-ewh.js";import"./useLocalizedStringFormatter-CyshasSy.js";import"./browser-tQ-t1xxT.js";import"./EmulatedBoldText-B7r9Z-1q.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

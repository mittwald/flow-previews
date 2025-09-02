import{j as r}from"./iframe-DaUAgimo.js";import{R as p,b as l,a as g}from"./RadioButton-CLChMsW2.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-B9cSgMmk.js";import{T as y}from"./Text-DqLl2XlR.js";import{C as T}from"./Content-CvBR9FKj.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-nbYVlS2U.js";import"./mergeRefs-tiTDQII5.js";import"./index-D-fn1bJu.js";import"./FieldError-BvHufvs5.js";import"./IconWarning-Jl_pbRrq.js";import"./FieldError-CBWJBmz-.js";import"./utils-Dv3HAiNW.js";import"./Text-DKL0uLiC.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-BHylyjLZ.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-D1-nfPUN.js";import"./Form-StxO2YAG.js";import"./useFocus-DfmeJaC9.js";import"./useLabel-4W4rDaLN.js";import"./Label-BA5dW2di.js";import"./Hidden-DmAVKgDo.js";import"./useFormReset-CA4kI8bZ.js";import"./usePress-BEu6_Qu_.js";import"./useFocusRing-6fCWhHXp.js";import"./useFocusable-91Y8y3Dw.js";import"./FocusScope-Gc7sAVxN.js";import"./context-DGmQszzG.js";import"./VisuallyHidden-BnUSGmEW.js";import"./useControlledState-HXI1EgZM.js";import"./Label-BgV7ip1p.js";import"./useLocalizedStringFormatter-Dbj9oBzk.js";import"./browser-DFc9RAYz.js";import"./EmulatedBoldText-B3KIlJpF.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

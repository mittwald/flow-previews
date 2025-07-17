import{j as r}from"./iframe-ioB74BFE.js";import{R as p,b as l,a as g}from"./RadioButton-B3FLQYcv.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-DW6IEhB0.js";import{T as y}from"./Text-BZaQwICB.js";import{C as T}from"./Content-Df2Mozfo.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DIQ-3Z-W.js";import"./mergeRefs-Bc9_QzvA.js";import"./index-DxUCKuoS.js";import"./FieldError-JtFjK6bM.js";import"./IconWarning-DcmAhB0m.js";import"./FieldError-Z5j2ND32.js";import"./utils-B4cCkl7w.js";import"./Text-CCXZaIsU.js";import"./filterDOMProps-CeZl_uWj.js";import"./ColumnLayout-BtgxPphQ.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-Cfo1YJtU.js";import"./Form-u9b0IMfB.js";import"./useFocus-Cm5D2sPa.js";import"./useLabel-CB1mDCyy.js";import"./Label-Ci4HPtMl.js";import"./Hidden-BUUKH5FE.js";import"./useFormReset-Ik_MynpH.js";import"./usePress-D3I07Rsr.js";import"./useFocusRing-CU7EmQP7.js";import"./useFocusable-2c5mTAR9.js";import"./FocusScope-Dmal2fI9.js";import"./context-BPL8pm8m.js";import"./VisuallyHidden-BOO0yHnw.js";import"./useControlledState-DPunIX8S.js";import"./Label-Bf-bWzV0.js";import"./useLocalizedStringFormatter-aWkOtTsz.js";import"./browser-BI2T8H6c.js";import"./EmulatedBoldText-C5-k4pIu.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

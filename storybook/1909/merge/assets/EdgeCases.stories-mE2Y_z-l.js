import{j as r}from"./iframe-CbGYfYhl.js";import{R as p,b as l,a as g}from"./RadioButton-BbaQe_zq.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-DF56UXau.js";import{T as y}from"./Text-OS1-aGym.js";import{C as T}from"./Content-DTD-acN4.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-jqIHveb4.js";import"./mergeRefs-B7E9CKB8.js";import"./index-DUvIA6jy.js";import"./FieldError-DIOhoIE9.js";import"./IconWarning-DbjMP3z5.js";import"./FieldError-CCN5oAXI.js";import"./utils-Bta_km8V.js";import"./Text-B56mlhY7.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-D8G1VvNk.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-DDsPRzqg.js";import"./Form-dHMqMIPi.js";import"./useFocus-CgyMmhEU.js";import"./useLabel-D6vayTQl.js";import"./Label-CQ-8Wai_.js";import"./Hidden-CH7YYats.js";import"./useFormReset-knQsHZrP.js";import"./usePress-B6TDm-Ku.js";import"./useFocusRing-D3ulEQrZ.js";import"./useFocusable-CdHr2TzL.js";import"./FocusScope-CXp1mWOp.js";import"./context-DrN7EfSG.js";import"./VisuallyHidden-BDzAgjFk.js";import"./useControlledState-Ckf81dN5.js";import"./Label-ChSLebPR.js";import"./useLocalizedStringFormatter-CO6Ocor8.js";import"./browser-CJ8QzV59.js";import"./EmulatedBoldText-CQSaLX8r.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

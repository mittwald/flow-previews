import{j as r}from"./iframe-CMpsVwOM.js";import{R as p,b as l,a as g}from"./RadioButton-D65fbfRG.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-jI8pPgp1.js";import{T as y}from"./Text-BimBNWGT.js";import{C as T}from"./Content-B3J-4zPl.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BMeS3O6n.js";import"./mergeRefs-C92X0W_p.js";import"./index-CZ3QCY_v.js";import"./FieldError-DenvXdCo.js";import"./IconWarning-D8u_mAP3.js";import"./FieldError-Dnex0fXb.js";import"./utils-pWRi9foc.js";import"./Text-CCkfOTTF.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-C6TVlpVs.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-CJY699b6.js";import"./Form-BGZ-9vu8.js";import"./useFocus-C9MMrMar.js";import"./useLabel-BA3FU80w.js";import"./Label-CYx7L7HM.js";import"./Hidden-Cyo3M4hZ.js";import"./useFormReset-CrSG7MNm.js";import"./usePress-Dcm4Z-gf.js";import"./useFocusRing-DqD2BiAa.js";import"./useFocusable-FYb42PWO.js";import"./FocusScope-HNBnbjNF.js";import"./context-EPQ013pJ.js";import"./VisuallyHidden-Ctc-ZpYI.js";import"./useControlledState-BNxfrGT2.js";import"./Label-kjk-IWzA.js";import"./useLocalizedStringFormatter-BlPP9i8C.js";import"./browser-B-2It7Rx.js";import"./EmulatedBoldText-M-EPRI7w.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-Cwcli8hM.js";import{R as l,b as p,a as n}from"./RadioButton-BeGAP0hF.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-BW200cHE.js";import{T as u}from"./Text-D-waKGHU.js";import{C as c}from"./Content-CbaVdjzx.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B-m_iRlw.js";import"./index-CUAtZNjK.js";import"./index-CcWFAiT6.js";import"./ColumnLayout-DtfDxlKN.js";import"./useFieldComponent-DIqLhVln.js";import"./utils-C3qjWKVL.js";import"./useMakeFocusable-BUq9Ag8G.js";import"./RadioGroup-CC51GiqQ.js";import"./FieldError-CJJNrBrn.js";import"./Text-C18q6Xnm.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-BXllkstm.js";import"./useLabel-23O2EZ34.js";import"./Label-BInCCjcu.js";import"./Hidden-D2HOHB0p.js";import"./SelectionIndicator-BxaGM9C6.js";import"./useFormValidation-BcDhKfF3.js";import"./useFocus-CSHYTGFD.js";import"./useControlledState-ClHEyKKa.js";import"./FocusScope-Bznsa9g2.js";import"./useFocusRing-Dl7LqS86.js";import"./context-ChPy2xgW.js";import"./useFormReset-BDGa5C7A.js";import"./usePress-CMhi8zJA.js";import"./useFocusable-CLuaS2Z4.js";import"./VisuallyHidden-BpjAuZe7.js";import"./IconWarning-KJvMQc2O.js";import"./remote-wJ26wkpE.js";import"./Label-CdIP0Akw.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-Bgk77FUt.js";import"./FieldError-C_uRtYKD.js";import"./AlertText-BjBene4x.js";import"./AlertIcon-sG8HORuJ.js";import"./browser-Dim89v3O.js";import"./EmulatedBoldText-B6NHIM-L.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="a" aria-label="Label">
      <Radio value="a">{dummyText.long} </Radio>
      <Radio value="b">{dummyText.long} </Radio>
      <Radio value="c">{dummyText.long}</Radio>
    </RadioGroup>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="0" aria-label="Label" l={[1, 1, 1, 1]}>
      {Array(6).fill("").map((value, index) => <RadioButton value={index.toString()} key={index}>
            <Text>{dummyText.medium}</Text>
            <Content>{dummyText.medium}</Content>
          </RadioButton>)}
    </RadioGroup>
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ir=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,ir as __namedExportsOrder,tr as default};

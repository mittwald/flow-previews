import{j as r}from"./iframe-Dcjk2TLd.js";import{R as l,b as p,a as n}from"./RadioButton-DCR6CfLo.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-WJJDu5ZT.js";import{T as u}from"./Text-lyGbob8n.js";import{C as c}from"./Content-speImwih.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DUQvMGjf.js";import"./index-j2LaL0Dv.js";import"./index-DmOV_yi6.js";import"./ColumnLayout-Ch_jMXN-.js";import"./useFieldComponent-1tG_hIZF.js";import"./utils-C4npX7la.js";import"./useMakeFocusable-D2yJH4xu.js";import"./RadioGroup-BfizpJUH.js";import"./FieldError-B9deYV15.js";import"./Text-zDtUk3hp.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-C7OLtkZq.js";import"./useLabel-CKc5oqWD.js";import"./Label-BZUq_rhq.js";import"./Hidden-CKziqW6n.js";import"./SelectionIndicator-BH1NdgMT.js";import"./useFormValidation-ny_bco9C.js";import"./useFocus-B7gP7G3p.js";import"./useControlledState-DBXDF7mL.js";import"./FocusScope-CNP9Koh8.js";import"./useFocusRing-HFiDNYir.js";import"./context-pAIzfbng.js";import"./useFormReset-DcYsnWfg.js";import"./usePress-CbiP5Rr9.js";import"./useFocusable-K4tA3zQn.js";import"./VisuallyHidden-D01b8Wlz.js";import"./IconWarning-4NWKkNon.js";import"./remote-B1sU4u7F.js";import"./Label-BZxLRpn6.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DSXGmj0V.js";import"./FieldError-CGpcN3PS.js";import"./AlertText-PsTvKuCL.js";import"./AlertIcon-CZw-AcP9.js";import"./browser-B8c1tkp7.js";import"./EmulatedBoldText-CjCUgZSU.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

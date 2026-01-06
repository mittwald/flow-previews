import{j as r}from"./iframe-BAg_Vkif.js";import{R as l,b as p,a as n}from"./RadioButton-B1RNVYkj.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CGcOZtY_.js";import{T as u}from"./Text-Cv_CDcg6.js";import{C as c}from"./Content-DJ9loXLW.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Br_xtRU3.js";import"./index-DNdviT-s.js";import"./index-ClwrdcL8.js";import"./ColumnLayout-Dab4so_T.js";import"./useFieldComponent-B6Kjd1ej.js";import"./utils-BI8UFEcl.js";import"./useMakeFocusable-BQnkVbTu.js";import"./RadioGroup-BWUeI19l.js";import"./FieldError-CzfSrdz6.js";import"./Text-B1sdohWQ.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-YKM3tWZS.js";import"./useLabel-8b0YN0Pv.js";import"./Label-Bx8dS0aq.js";import"./Hidden-BiPkEj1j.js";import"./SelectionIndicator-zMpThTxY.js";import"./useFormValidation-2zAOI2ZU.js";import"./useFocus-L8RhZ1QR.js";import"./useControlledState-C63VSZxO.js";import"./FocusScope-CX8aMKJ8.js";import"./useFocusRing-D5C_zsQK.js";import"./context-Dr2F39lD.js";import"./useFormReset-cz3XyTOd.js";import"./usePress-BNrva4v9.js";import"./useFocusable-0NuZ-hi3.js";import"./VisuallyHidden-0Cja9mQD.js";import"./IconWarning-eOJWxr99.js";import"./remote-OUS6bpte.js";import"./Label-DDreQZVm.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BJUyDOOi.js";import"./FieldError-C6VlTPyB.js";import"./InlineAlert-mZj4wy81.js";import"./AlertIcon-Ce-Fu2Pm.js";import"./browser-CG8hIWrH.js";import"./EmulatedBoldText-Dzw3SPd4.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

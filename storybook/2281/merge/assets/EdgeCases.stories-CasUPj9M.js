import{j as r}from"./iframe-B-26223i.js";import{R as l,b as p,a as n}from"./RadioButton-DEtRx7TW.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-n2yffpAw.js";import{T as u}from"./Text-C25EED6m.js";import{C as c}from"./Content-Dzo2Ao94.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Cm2ULMwR.js";import"./index-C96xSvbi.js";import"./index-CMj-JRml.js";import"./ColumnLayout-BtTcbjxk.js";import"./useFieldComponent-eul3OsXk.js";import"./utils-CprJ_klo.js";import"./useMakeFocusable-_R8ioeyt.js";import"./RadioGroup-CFEsVfXT.js";import"./FieldError-B1RwUwkr.js";import"./Text-CrdzXlCc.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Vtk-UJSV.js";import"./useLabel-DUREvcwl.js";import"./Label-Ddb5Z1yf.js";import"./Hidden-BAuAU20u.js";import"./SelectionIndicator-DrGDjKtL.js";import"./useFormValidation-CodwuA9r.js";import"./useFocus-DYSsUR82.js";import"./useFocusRing-DATGHg9y.js";import"./useControlledState-CCY4nzRh.js";import"./FocusScope-BG92zKg5.js";import"./context-B9n95xcZ.js";import"./useFormReset-BQreYCpE.js";import"./usePress-BlwAXRn7.js";import"./useFocusable-CRgLtiVg.js";import"./VisuallyHidden-DpBOnOEH.js";import"./IconWarning-CfZm6euj.js";import"./remote-CUr3PG4h.js";import"./Label-htHf1MZ3.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CHKosLk9.js";import"./FieldError-DKJxt2u7.js";import"./AlertText-SDytihrL.js";import"./AlertIcon-Bi7YC7dH.js";import"./browser-DNWQphaZ.js";import"./EmulatedBoldText-Co4v7GV8.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

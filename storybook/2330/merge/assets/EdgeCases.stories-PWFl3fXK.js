import{j as r}from"./iframe-tDsAeGKm.js";import{R as l,a as p}from"./Radio-CjvaZ4zk.js";import{R as n}from"./RadioButton-DdeXfeag.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DkeFOn7Y.js";import{T as u}from"./Text-D5NMs6cZ.js";import{C as c}from"./Content-H2lGrUDb.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BfLM0c2n.js";import"./index-bKgupbLj.js";import"./index-B9moyWSs.js";import"./ColumnLayout-BNh45C-7.js";import"./useFieldComponent-CEijF59K.js";import"./utils-DhX5ITDy.js";import"./useMakeFocusable-CAhoTDzi.js";import"./RadioGroup-w8up6PUA.js";import"./FieldError-Duxf8Exl.js";import"./Text-B29urVwj.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DBzv0iBU.js";import"./useLabel-CvQ5_So8.js";import"./Label-CtdEoG3D.js";import"./Hidden-S5GeLDqu.js";import"./SelectionIndicator-DonQVrOH.js";import"./useFormValidation-CHyrMCXS.js";import"./useFocus-BJatrcMj.js";import"./useFocusRing-O-BrOcuV.js";import"./useControlledState-DJUoNOP3.js";import"./FocusScope-BLSD8gJZ.js";import"./context-B8HhXai5.js";import"./useFormReset-Bh0h9BrG.js";import"./usePress-DsHBwD0o.js";import"./useFocusable-Dhs_EAwV.js";import"./VisuallyHidden-BeYtKSfy.js";import"./IconWarning-DKvGabEh.js";import"./remote-Dyxf39S8.js";import"./Label-B4YMFJ8a.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-Ble8CxqU.js";import"./FieldError-CA1wZrT9.js";import"./AlertText-CRAaEbc-.js";import"./AlertIcon-BN6nSUvJ.js";import"./browser-CATpO6nC.js";import"./EmulatedBoldText-B_3WWRWD.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const mr=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,mr as __namedExportsOrder,ir as default};

import{j as r}from"./iframe-Bc-jwLWq.js";import{R as l,b as p,a as n}from"./RadioButton-BoVj3pJ-.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-BWgbYm29.js";import{T as u}from"./Text-Bs06tnQB.js";import{C as c}from"./Content-VTyHGzKq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DGcImTRM.js";import"./index-CElyulra.js";import"./index-Ct8kadYq.js";import"./ColumnLayout-CZcv2zjc.js";import"./useFieldComponent-ahSSNXad.js";import"./utils-BIv87FRG.js";import"./useMakeFocusable-BU1ogbRk.js";import"./RadioGroup-DGZTT39M.js";import"./FieldError-CGIyNVOV.js";import"./Text-DgSTzWgU.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-DqUF-Ufv.js";import"./useLabel-BfZDlGh7.js";import"./Label-B3yduWiM.js";import"./Hidden-BOhzI0oW.js";import"./SelectionIndicator-BwDlTF6c.js";import"./useFormValidation-DyPlpM72.js";import"./useFocus-C6ldElRQ.js";import"./useControlledState-IlB9I5Xo.js";import"./FocusScope-Bs4WKWZW.js";import"./useFocusRing-B0jLa-Vk.js";import"./context-BDmep644.js";import"./useFormReset-DFcj21LA.js";import"./usePress-NBjG5NMF.js";import"./useFocusable-DIXmUg59.js";import"./VisuallyHidden-CmlM99K4.js";import"./IconWarning-BPpigV-o.js";import"./remote-CficONz5.js";import"./Label-p4o9WkV1.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-C0QVYeul.js";import"./FieldError-Cp2fPOrN.js";import"./AlertText-COarWx13.js";import"./AlertIcon-DCb6GQr1.js";import"./browser-Cfl6H5sa.js";import"./EmulatedBoldText-CZY7LDuf.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

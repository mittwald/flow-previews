import{j as r}from"./iframe-B_TkxfTi.js";import{R as l,b as p,a as n}from"./RadioButton-CA4RDhLU.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CDtYpSo2.js";import{T as u}from"./Text-DZTN4U6B.js";import{C as c}from"./Content-BY3AvhYP.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BIniq_3P.js";import"./index-CrnjZTlk.js";import"./index-B6XMVbfI.js";import"./ColumnLayout-BXiZeNy2.js";import"./useFieldComponent-C57DTYPz.js";import"./utils-CEh0pYpN.js";import"./useMakeFocusable-BtSxmITj.js";import"./RadioGroup-CtEhDXmN.js";import"./FieldError-CJvsl-v5.js";import"./Text-CBbNcQAF.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-v3SuS94t.js";import"./useLabel-D2pyCI0i.js";import"./Label-CQzZBBgV.js";import"./Hidden-B4qu7a2v.js";import"./SelectionIndicator-SPKWDPFJ.js";import"./useFormValidation-CPzq_YrX.js";import"./useFocus-CWYeHEaO.js";import"./useFocusRing-Bb1Hz9wK.js";import"./useControlledState-CYdArkzJ.js";import"./FocusScope-BxLI0wxf.js";import"./context-Bqo0meff.js";import"./useFormReset-BlUfWbi8.js";import"./usePress-DqvJUCRP.js";import"./useFocusable-DUuU0sbS.js";import"./VisuallyHidden-BGokW8gm.js";import"./IconWarning-C-Vc31bm.js";import"./remote-BarzyRQ7.js";import"./Label-B2z_KUki.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BrZnZPcM.js";import"./FieldError-BTHn5en7.js";import"./AlertText-DZAkh8GI.js";import"./AlertIcon-DJdpqIO-.js";import"./browser-CLjLvoWS.js";import"./EmulatedBoldText-9YPP8018.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

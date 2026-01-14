import{j as r}from"./iframe-CF9WEugj.js";import{R as l,b as p,a as n}from"./RadioButton-Bbu63KE0.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DSK0zYFE.js";import{T as u}from"./Text-Czdsn8RZ.js";import{C as c}from"./Content-CUmeHkRk.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BxrvjkvO.js";import"./index-C69BrDNc.js";import"./index-DHfgQlLW.js";import"./ColumnLayout-D7fW2Pkt.js";import"./useFieldComponent-B3P2g6wY.js";import"./utils-B4BZttt0.js";import"./useMakeFocusable-BCa8qoV5.js";import"./RadioGroup-B0Wj9431.js";import"./FieldError-BfE9I5LY.js";import"./Text-wlSF0gym.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-Dv2vFItu.js";import"./useLabel-DF6AwuO5.js";import"./Label-DWGH1ubm.js";import"./Hidden-Dk3zZO8j.js";import"./SelectionIndicator-CwdThPwI.js";import"./useFormValidation-BLUWg_De.js";import"./useFocus-DZR1guyz.js";import"./useControlledState-C05rL349.js";import"./FocusScope-Dw5dGdxw.js";import"./useFocusRing-Ddjb8e7x.js";import"./context-Bi2P07EN.js";import"./useFormReset-w9h9-zRZ.js";import"./usePress-DuLNiG6M.js";import"./useFocusable-CSB6sBEJ.js";import"./VisuallyHidden-C66z9jQL.js";import"./IconWarning-DXWyAVP8.js";import"./remote-DKS26xip.js";import"./Label-ZZPbbDTF.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DYCIwR0v.js";import"./FieldError-D4UoR9vC.js";import"./AlertText-BTQfuEQp.js";import"./AlertIcon-Ck6cmA9H.js";import"./browser-CV2qUG2E.js";import"./EmulatedBoldText--WvdXsxT.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-DM7qDJWN.js";import{R as l,a as p}from"./Radio-BdUNVoyB.js";import{R as n}from"./RadioButton-Cv5w5TAO.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-xfIYfQBz.js";import{T as u}from"./Text-DFbMev3D.js";import{C as c}from"./Content-mjlQUtlj.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-3uYRoF3i.js";import"./index-BG9aTyNN.js";import"./index-Zik4_3jH.js";import"./ColumnLayout-BMA8F_Mm.js";import"./useFieldComponent-DWfL7CEw.js";import"./utils-DCh3KcEQ.js";import"./useMakeFocusable-CP3MgQIe.js";import"./RadioGroup-C6rGNhvx.js";import"./FieldError-CDF7zCEW.js";import"./Text-CqLEY5m0.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DD0plB0K.js";import"./useLabel-d_6Xjsvm.js";import"./Label-Bc5uyP9T.js";import"./Hidden-DVoaY9_q.js";import"./SelectionIndicator-DhuP4hb9.js";import"./useFormValidation-BjtvC6sH.js";import"./useFocus-V4g9fXxO.js";import"./useFocusRing-DKHg-pYg.js";import"./useControlledState-CGBhCpgz.js";import"./FocusScope-DcmRl2I0.js";import"./context-Bdkwq7qF.js";import"./useFormReset-DEHhMcAF.js";import"./usePress-DcE1V40F.js";import"./useFocusable-jnMsXBmm.js";import"./VisuallyHidden-Djcrj7d_.js";import"./IconWarning-Ck-PBl-h.js";import"./remote-CkIQ4maL.js";import"./Label-BIhRdzJz.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-aG_pngn7.js";import"./FieldError-yptSAddh.js";import"./AlertText-DuUjVJKd.js";import"./AlertIcon-B0QkWIB4.js";import"./browser-GV4Evxlh.js";import"./EmulatedBoldText-DY5AV1Fo.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

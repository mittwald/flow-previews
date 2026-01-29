import{j as r}from"./iframe-Bj8CIgLy.js";import{R as l,a as p}from"./Radio-oNhFj6Md.js";import{R as n}from"./RadioButton-D-nsI0ZB.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-BYDStP0b.js";import{T as u}from"./Text-BbFFlg8m.js";import{C as c}from"./Content-9dVrT01O.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BPltRtpV.js";import"./index-BeouMsqR.js";import"./index-DYakERwo.js";import"./ColumnLayout-C2Om1Els.js";import"./useFieldComponent-DFS7CEov.js";import"./utils-D41FTHpf.js";import"./useMakeFocusable-D2WqMYFi.js";import"./RadioGroup-COV71R1p.js";import"./FieldError-cTj-tlV1.js";import"./Text-CVMu3Bei.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-CdHdNrpC.js";import"./useLabel-j5JIlG5u.js";import"./Label-BAoc3jdD.js";import"./Hidden-DWJk28Vx.js";import"./SelectionIndicator-DBsPgOzp.js";import"./useFormValidation-CuYWsRMr.js";import"./useFocus-BJLP4kuV.js";import"./useFocusRing-0HtVE4-I.js";import"./useControlledState-C0IHmt74.js";import"./FocusScope-DNVRBXI-.js";import"./context-RK9vgtK2.js";import"./useFormReset-DPVe5t_C.js";import"./usePress-BLrqdZMB.js";import"./useFocusable-DNf9Dm0r.js";import"./VisuallyHidden-D10Fyvvv.js";import"./IconWarning-KvO0562x.js";import"./remote-ChNLl0N8.js";import"./Label-DCfOJgVU.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-B8a-qUY7.js";import"./FieldError-Dbjs-A5K.js";import"./AlertText-Bt0Daj0V.js";import"./AlertIcon-Bub-4wJk.js";import"./browser-Rl4DjN4H.js";import"./EmulatedBoldText-CYAzRgIu.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-DnKh_q8B.js";import{R as l,a as p}from"./Radio-NSi9QCZe.js";import{R as n}from"./RadioButton-BNY72vDo.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-YCpz4oAA.js";import{T as u}from"./Text-Drd9GdLo.js";import{C as c}from"./Content-Bf0HP8j5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-NsMUrrXI.js";import"./index-DEpWzVfg.js";import"./index-B5PweBHP.js";import"./ColumnLayout-Cr3ahIZD.js";import"./useFieldComponent-ClvUady3.js";import"./utils-BZc8lNcd.js";import"./useMakeFocusable-T1ifiVMu.js";import"./RadioGroup-Dzj9LLIw.js";import"./FieldError-ChpD0sIl.js";import"./Text-DobXAK13.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BQHEa3Zl.js";import"./useLabel-jAJMJRpZ.js";import"./Label-psEyVv54.js";import"./Hidden-qw9_5FuA.js";import"./SelectionIndicator-B7pzLsJc.js";import"./useFormValidation-C9ppbdC-.js";import"./useFocus-BUIY7lOc.js";import"./useFocusRing-CZAaR2ds.js";import"./useControlledState-Dx9tzWN_.js";import"./FocusScope-Ddw08eyC.js";import"./context-CXoyow8k.js";import"./useFormReset-BbinXmMH.js";import"./usePress-CFc3C1mq.js";import"./useFocusable-z3KWK7qq.js";import"./VisuallyHidden-DfZCukwF.js";import"./IconWarning-C-jbuAIx.js";import"./remote-k0GnUd79.js";import"./Label-_TjJj3W9.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-ClvwREm6.js";import"./FieldError-CQ45DqtA.js";import"./AlertText-DFrKGWVH.js";import"./AlertIcon-3p_Y3XqS.js";import"./browser-BUa4T4SN.js";import"./EmulatedBoldText-C0uufS8q.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-CDsKaBRg.js";import{R as l,a as p}from"./Radio-Qdl_nDej.js";import{R as n}from"./RadioButton-4HpfNdOD.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DJVDS1o8.js";import{T as u}from"./Text-BC05_GH2.js";import{C as c}from"./Content-hDAUdQXl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CuU7ZQj2.js";import"./index-C6JQHEhq.js";import"./index-RjKRi-BV.js";import"./ColumnLayout-32lJWWs1.js";import"./useFieldComponent-CC8SHRwT.js";import"./utils-D_LVRUjq.js";import"./useMakeFocusable-CMgfR4Fo.js";import"./RadioGroup-DPUzm_zz.js";import"./FieldError-CoNTUoG6.js";import"./Text-Ara-YSvE.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-CsNQY4H6.js";import"./useLabel-CIho-35Z.js";import"./Label-PkZPP5nP.js";import"./Hidden-kPYjxK5s.js";import"./SelectionIndicator-Dg52EWqk.js";import"./useFormValidation-B4cT2hyf.js";import"./useFocus-DLB8Ejx4.js";import"./useFocusRing-BBPUeOqt.js";import"./useControlledState-daUq4f0n.js";import"./FocusScope-BDZMZ6lz.js";import"./context-BPMj9VV_.js";import"./useFormReset-CxPQXG_K.js";import"./usePress-Dan0bPtD.js";import"./useFocusable-C6i2fSTk.js";import"./VisuallyHidden-BzY4kZPn.js";import"./IconWarning-BO7Rp0Xm.js";import"./remote-CceIEVln.js";import"./Label-D5EyKl2G.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-lsSx1U8y.js";import"./FieldError-CR7kl2wA.js";import"./AlertText-BdJT91v6.js";import"./AlertIcon-BRHbbzl7.js";import"./browser-CeRuCCb_.js";import"./EmulatedBoldText-D5k4nusE.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

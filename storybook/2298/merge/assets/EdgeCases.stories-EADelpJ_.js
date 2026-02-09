import{j as r}from"./iframe-CJFOFCad.js";import{R as l,a as p}from"./Radio-DFxohIUv.js";import{R as n}from"./RadioButton-CqAaQSeb.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-h8zQuah1.js";import{T as u}from"./Text-CI7VZqhd.js";import{C as c}from"./Content-CXBX9u75.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CJG1rMDz.js";import"./index-BSRN0wm6.js";import"./index-Cu9s0VFH.js";import"./ColumnLayout-BxBPXm11.js";import"./useFieldComponent-CVIwC-Yy.js";import"./utils-CsQ8IQtm.js";import"./useMakeFocusable-gLc_Rp5H.js";import"./RadioGroup-BFnxOhkd.js";import"./FieldError-B3-rgjm7.js";import"./Text-8vym_gVd.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-B3lCmY-S.js";import"./useLabel-Cb3KoAb3.js";import"./Label-Ce0MMouV.js";import"./Hidden-DmbQVkh7.js";import"./SelectionIndicator-BI4debiO.js";import"./useFormValidation-DcThlYcg.js";import"./useFocus-Cgy8euA9.js";import"./useFocusRing-wbIo7ugc.js";import"./useControlledState-DvHOpAD3.js";import"./FocusScope-BYRCsx--.js";import"./context-CMyux8LD.js";import"./useFormReset-DXleDB5s.js";import"./usePress-NyliDXf7.js";import"./useFocusable-13L7602I.js";import"./VisuallyHidden-CZLhXAB_.js";import"./IconWarning-1TKJLzWG.js";import"./remote-BxHvJS68.js";import"./Label-DpG9gbVN.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-cHnXWnWa.js";import"./FieldError-Dc2Z54jn.js";import"./AlertText-BB2MdEuH.js";import"./AlertIcon-BfQxSvrI.js";import"./browser-C8kWAWSZ.js";import"./EmulatedBoldText-BF5DLBnT.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-BbsOAs33.js";import{R as l,b as p,a as n}from"./RadioButton-BvNgy0n1.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CfAWqFAj.js";import{T as u}from"./Text-BYxWYBBY.js";import{C as c}from"./Content-DNaPbk0Q.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CnY6R6y_.js";import"./index-hsH483Jp.js";import"./index-32jMpZgo.js";import"./ColumnLayout-y1xD9Abm.js";import"./useFieldComponent-c0I5eEtM.js";import"./utils-d4vW56Wr.js";import"./useMakeFocusable-D3ZluHfM.js";import"./RadioGroup-g9xkwKts.js";import"./FieldError-3tWBh0vH.js";import"./Text-C1_k2kAR.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BubIOB2-.js";import"./useLabel-BZoz0BQC.js";import"./Label-jCbgdnWR.js";import"./Hidden-C9ZrqSun.js";import"./SelectionIndicator-Da0zjLKe.js";import"./useFormValidation-DyJaMlWv.js";import"./useFocus-8sJeBC00.js";import"./useFocusRing-B8FmEpoX.js";import"./useControlledState-QxMMjnNS.js";import"./FocusScope-tc_BWGmQ.js";import"./context-DDHwgpv7.js";import"./useFormReset-eAh5gylf.js";import"./usePress-CuEkD-Mt.js";import"./useFocusable-CRykt1O9.js";import"./VisuallyHidden-D-GMXsu-.js";import"./IconWarning-BG17vbyg.js";import"./remote-DIEpRnMd.js";import"./Label-DjvR0JzL.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-Cn9pdCjE.js";import"./FieldError-DSzt6ekN.js";import"./AlertText-xz7LDcmS.js";import"./AlertIcon-B34gK9Vj.js";import"./browser-6_CJeJSO.js";import"./EmulatedBoldText-Bt8Ku6uY.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

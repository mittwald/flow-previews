import{j as r}from"./iframe-BsZhBXal.js";import{R as l,a as p}from"./Radio-DE_7cjwy.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-tlNQv5FK.js";import{T as u}from"./Text-CWir5uzG.js";import{C as c}from"./Content-BWLj8u1w.js";import{R as n}from"./RadioButton-B89NXzI2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DISNxOrN.js";import"./index-lT5ImJcm.js";import"./index-Dw50_Btz.js";import"./ColumnLayout-D2Nhhm0T.js";import"./useFieldComponent-DadDOWX3.js";import"./utils-D7f3lHNi.js";import"./useMakeFocusable-CjO6NuRY.js";import"./RadioGroup-DYWsKyi2.js";import"./FieldError-Dpf9fLlc.js";import"./Text-CICvYdKp.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-CmE3z4DB.js";import"./useLabel-DMdE4zjY.js";import"./Label-Bdtu_aaV.js";import"./Hidden-B-7zzc6R.js";import"./SelectionIndicator-BYUqX36x.js";import"./useFormValidation-WNRR-_5g.js";import"./useFocus-DkItBW7w.js";import"./useControlledState-Bxg7VuAu.js";import"./FocusScope-qpEeXdaL.js";import"./useFocusRing-C7h1YZo7.js";import"./context-BsHlRP-r.js";import"./useFormReset-4DpQBagB.js";import"./usePress-BfmYyYbe.js";import"./useFocusable-CefaVcL6.js";import"./VisuallyHidden-W4tQCM8c.js";import"./IconApp-DFfFI-8B.js";import"./remote-C6zziWZe.js";import"./IconRadioOn-DoCHGTCF.js";import"./Label-XwOnxXzc.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DNPpU0EQ.js";import"./FieldError-CMRDgIJA.js";import"./IconDanger-D44A5Pyv.js";import"./browser-B5Kx9HDY.js";import"./EmulatedBoldText-72QMrXCW.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

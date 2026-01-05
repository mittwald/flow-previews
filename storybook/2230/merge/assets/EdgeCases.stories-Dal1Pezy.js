import{j as r}from"./iframe-CnrbHwTe.js";import{R as l,b as p,a as n}from"./RadioButton-C2aA2zVk.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CAmM6zhZ.js";import{T as u}from"./Text-eTz9hgbN.js";import{C as c}from"./Content-DtdIAKRG.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-aR3apKPq.js";import"./index-Cg95cP60.js";import"./index-CUZGjyPT.js";import"./ColumnLayout-CMlmamiQ.js";import"./useFieldComponent-DrIyQ-Oz.js";import"./utils-r4y_43wh.js";import"./useMakeFocusable-Bl-9qapR.js";import"./RadioGroup-B3B6-B62.js";import"./FieldError-DsDXGDD4.js";import"./Text-nMrjd92_.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-CpewxKmk.js";import"./useLabel-Dn56kI8F.js";import"./Label-BQw60TG0.js";import"./Hidden-kZWiQEu_.js";import"./SelectionIndicator-CTBQmwrG.js";import"./useFormValidation-C9gosTEe.js";import"./useFocus-CW3ebFsS.js";import"./useControlledState-CcfbhOaY.js";import"./FocusScope-CJbwLE5j.js";import"./useFocusRing-CRQTw2D7.js";import"./context-B7MLny9I.js";import"./useFormReset-n7eHOhOu.js";import"./usePress-DoQNUybf.js";import"./useFocusable-DrwEzR41.js";import"./VisuallyHidden-DYF5WgrZ.js";import"./IconWarning-DgLNPfaL.js";import"./remote-CmycR9zC.js";import"./Label-CIbW0Z8y.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CyCvm50e.js";import"./FieldError-BJU6XwC7.js";import"./browser-TZQakXKU.js";import"./EmulatedBoldText-B4gWqNJ7.js";const er={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ar=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,ar as __namedExportsOrder,er as default};

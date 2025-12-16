import{j as r}from"./iframe-V6WnBfM7.js";import{R as l,a as p}from"./Radio-MiGjYjSY.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-C1JGZQXx.js";import{T as u}from"./Text-BOvroeJC.js";import{C as c}from"./Content-CPEfQxYI.js";import{R as n}from"./RadioButton-Bg29XViW.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DFUX8R2_.js";import"./index-BKCF-LL0.js";import"./index-WvfsijJu.js";import"./ColumnLayout-sljoOvvN.js";import"./useFieldComponent-0Fzy9Tw8.js";import"./utils-XXCohoWw.js";import"./useMakeFocusable-RK-Ccjj9.js";import"./RadioGroup-DHaI5wsg.js";import"./FieldError-D586kEZH.js";import"./Text-D3RRQUEj.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-hCONeUH-.js";import"./useLabel-EvuRJYDK.js";import"./Label-CXxg3a67.js";import"./Hidden-CdYZU9wP.js";import"./SelectionIndicator-D4v-q-K9.js";import"./useFormValidation-sHnlqGhj.js";import"./useFocus-CBAz-6m6.js";import"./useControlledState-CthGvIJy.js";import"./FocusScope-CBJcWxYD.js";import"./useFocusRing-ffR2xJu-.js";import"./context-LYg4mQF7.js";import"./useFormReset-C3fVW2xK.js";import"./usePress-D8kRQmXV.js";import"./useFocusable-Cu8jcZF4.js";import"./VisuallyHidden-Cv44kzCG.js";import"./IconApp-Dy8CvIso.js";import"./remote-BEdoHpvj.js";import"./IconRadioOn-SJrqsMGn.js";import"./Label-DEwwG9Jt.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DNkPXAX_.js";import"./FieldError-CMIqd9eM.js";import"./IconDanger-XFGdJtLf.js";import"./browser-DYYNnrYB.js";import"./EmulatedBoldText-C80B2tZx.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

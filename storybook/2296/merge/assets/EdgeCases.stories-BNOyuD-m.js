import{j as r}from"./iframe-ByQojKkA.js";import{R as l,a as p}from"./Radio-Co4pHgJQ.js";import{R as n}from"./RadioButton-CqbJsaB5.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-u8o2nQ9M.js";import{T as u}from"./Text-B1R6GgBU.js";import{C as c}from"./Content-NEb2Y1ST.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-finO9fDl.js";import"./index-bUDX88mR.js";import"./index-DifIgMrD.js";import"./ColumnLayout-DhB0aDcL.js";import"./useFieldComponent-Blt-XhY9.js";import"./utils-D3Fm7Ut8.js";import"./useMakeFocusable-DnZdr2vs.js";import"./RadioGroup-C5EFmQ6c.js";import"./FieldError-DskIGmIg.js";import"./Text-BjqL4T8G.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Cffumk9C.js";import"./useLabel-BZ22SDLr.js";import"./Label-Ca-ZH_hh.js";import"./Hidden-B7m2oWRR.js";import"./SelectionIndicator-Bd5_QITD.js";import"./useFormValidation-DiyC9X3o.js";import"./useFocus-CIqVesE-.js";import"./useFocusRing-D8JCvm1f.js";import"./useControlledState-CdOFY_9U.js";import"./FocusScope-Df45VKi0.js";import"./context-B2MAxUi3.js";import"./useFormReset-CjuTJ3ym.js";import"./usePress-BwnADfjY.js";import"./useFocusable-BRqzZMJF.js";import"./VisuallyHidden-Bik_STlT.js";import"./IconWarning-tVGTIzEo.js";import"./remote-CpbK9d4g.js";import"./Label-zx0kmle1.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-EfbLvfF-.js";import"./FieldError-Dl1gROKX.js";import"./AlertText-C88MmDo3.js";import"./AlertIcon-C-5STchL.js";import"./browser-BgQK0KeO.js";import"./EmulatedBoldText-CozfSoiL.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

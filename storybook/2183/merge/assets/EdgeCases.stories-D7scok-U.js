import{j as r}from"./iframe-DlUIOFNy.js";import{R as l,a as p}from"./Radio-COTswkfK.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DPntjl1G.js";import{T as u}from"./Text-D41gwIdF.js";import{C as c}from"./Content-D0Tmknqg.js";import{R as n}from"./RadioButton-Cxm-BcSr.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Bt8pQ7Bg.js";import"./index-C6Pwmg9M.js";import"./index-DAMde4kY.js";import"./ColumnLayout-wfIvTCv3.js";import"./useFieldComponent-BCd2OtQE.js";import"./utils-D5WuX1D5.js";import"./useMakeFocusable-i3sy6Qrt.js";import"./RadioGroup-DIAYyIGW.js";import"./FieldError-D3SsQY4t.js";import"./Text-Cu4A8Hxa.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-BRPBFW97.js";import"./useLabel-DOyuB-7Y.js";import"./Label-BWWfC27r.js";import"./Hidden-DbzQNSr6.js";import"./SelectionIndicator-D7Xg-XgX.js";import"./useFormValidation-DSe2mHjT.js";import"./useFocus-CcXgUcDf.js";import"./useControlledState-UrSorjA0.js";import"./FocusScope-DE5dWl6n.js";import"./useFocusRing-DgmnIfdz.js";import"./context-Bx9FvdTc.js";import"./useFormReset-Bdg2NgY2.js";import"./usePress-BB8__CsB.js";import"./useFocusable-D3gWX53-.js";import"./VisuallyHidden-DYOAHIEH.js";import"./IconChevronDown-Bvah6r8d.js";import"./remote-CtPiqESW.js";import"./IconRadioOn-DjrLrKpN.js";import"./Label-CGwVPH1O.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BeLocyRD.js";import"./FieldError-C8EsLVOD.js";import"./IconDanger-BLbNCJeo.js";import"./browser-CY6W5xXv.js";import"./EmulatedBoldText-rrVMavtE.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

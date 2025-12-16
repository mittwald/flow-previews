import{j as r}from"./iframe-m11uA8ph.js";import{R as l,a as p}from"./Radio-3dD_pytt.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-BeFGMVXL.js";import{T as u}from"./Text-C8eG2T-4.js";import{C as c}from"./Content-BZoGENUI.js";import{R as n}from"./RadioButton-BY0BShYg.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BWpYHXve.js";import"./index-bz12lFZh.js";import"./index-Cy6hiSze.js";import"./ColumnLayout-BS_4SaeT.js";import"./useFieldComponent-BhKi7qXb.js";import"./utils-B2Atf1IZ.js";import"./useMakeFocusable-BB8VOvGJ.js";import"./RadioGroup-Da4WzL6E.js";import"./FieldError-BiQycVeh.js";import"./Text-CHaozABk.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-CFmmdLEh.js";import"./useLabel-BIKmTmt-.js";import"./Label-BUyu-zI1.js";import"./Hidden-BdAfB0qw.js";import"./SelectionIndicator-DxPJbj4p.js";import"./useFormValidation-dI-EyrI5.js";import"./useFocus-DtmXh1uW.js";import"./useControlledState-CQIt1v1r.js";import"./FocusScope-DjZtu4PZ.js";import"./useFocusRing-faXrGzgs.js";import"./context-CT-J1WHN.js";import"./useFormReset-CdvwVVbr.js";import"./usePress-D0Bh9t0W.js";import"./useFocusable-BsiT1idP.js";import"./VisuallyHidden-BQh9j932.js";import"./IconApp-DUFlag-8.js";import"./remote-D5wxRFjH.js";import"./IconRadioOn-CWTVet7R.js";import"./Label-C80bgPDj.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-D5x5gorP.js";import"./FieldError-DSWXJfK8.js";import"./IconDanger-BFD4weFl.js";import"./browser-BsJUI2_B.js";import"./EmulatedBoldText-Dm9yhtB7.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

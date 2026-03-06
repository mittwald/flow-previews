import{j as r}from"./iframe-1Z6hWL0q.js";import{R as l,a as p}from"./Radio-DNQcDY8e.js";import{R as n}from"./RadioButton-C0tr0ML7.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-wckBBCjl.js";import{T as u}from"./Text-NSg919ow.js";import{C as c}from"./Content-BI990Rgh.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CQSqsFz-.js";import"./index-CPV4-njg.js";import"./index-OoNE8c9e.js";import"./ColumnLayout-DV89zfIl.js";import"./useFieldComponent-DdzfuZRi.js";import"./utils-B0Ub4KXD.js";import"./useMakeFocusable-D9i7PqGJ.js";import"./RadioGroup-AMrsQ70U.js";import"./FieldError-CZQJbtEC.js";import"./Text-DPhytgE2.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DiZWQd7A.js";import"./useLabel-B8l-Wr5R.js";import"./Label-Berd7YBY.js";import"./Hidden-CX4T_I8z.js";import"./SelectionIndicator-CEn-3elL.js";import"./useFormValidation-B95RxpRV.js";import"./useFocus-MFE9JzzM.js";import"./useFocusRing-EnMEiTgA.js";import"./useControlledState-DfFBi8JJ.js";import"./FocusScope-Dlwlk6_J.js";import"./context-DCww6zBl.js";import"./useFormReset-BI-pxd56.js";import"./usePress-Bgz5j4W3.js";import"./useFocusable-BrwqamRV.js";import"./VisuallyHidden-CCJLIB7u.js";import"./IconWarning-CstRa6-6.js";import"./remote-BXzLQ_GS.js";import"./Label-BLX0X_A7.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-FfFR6yJN.js";import"./FieldError-CSszVQO8.js";import"./AlertText-BJ3sSdkZ.js";import"./AlertIcon-Blha7MMy.js";import"./browser-OyZXUgp8.js";import"./EmulatedBoldText-CsGTmPK_.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

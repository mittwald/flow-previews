import{j as r}from"./iframe-CcUuYubL.js";import{R as l,b as p,a as n}from"./RadioButton-BqmQ2zz5.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CfYTXDWg.js";import{T as u}from"./Text-DY9Wsurd.js";import{C as c}from"./Content-DB6Udo0c.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BzXwfnR4.js";import"./index-01_sGRec.js";import"./index-C6oVqO8J.js";import"./ColumnLayout-B0LT04EJ.js";import"./useFieldComponent-DfHGJXnI.js";import"./utils-B3A9CwVo.js";import"./useMakeFocusable-r8lDHb0m.js";import"./RadioGroup-DMpL-dhP.js";import"./FieldError-BzVPBYcu.js";import"./Text-B0FzOrzN.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-D1MNyHLC.js";import"./useLabel-4jeMa91n.js";import"./Label-ISSVaHBY.js";import"./Hidden-JctcoGsF.js";import"./SelectionIndicator-DgBShxS7.js";import"./useFormValidation-ey4MT9ZA.js";import"./useFocus-tKANsd5T.js";import"./useControlledState-Cd7zGKC9.js";import"./FocusScope-BV2sx_oo.js";import"./useFocusRing-CorDS6JG.js";import"./context-BiAKFHSE.js";import"./useFormReset-CtXF-ibf.js";import"./usePress-BQdte7r9.js";import"./useFocusable-D38UQMpJ.js";import"./VisuallyHidden-DlLFaNIr.js";import"./IconWarning-BDjC6xOL.js";import"./remote-DfJLRaxN.js";import"./Label-L2Rin-A2.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BCaxxAx_.js";import"./FieldError-BP_boiRG.js";import"./browser-DepVz5kj.js";import"./EmulatedBoldText-IgYc1KUF.js";const er={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

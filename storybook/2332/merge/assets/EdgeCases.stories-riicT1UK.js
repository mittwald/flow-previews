import{j as r}from"./iframe-PZSwL5UI.js";import{R as l,a as p}from"./Radio-CKIVFMXF.js";import{R as n}from"./RadioButton-D5eqctHK.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-D0FyAg9A.js";import{T as u}from"./Text-CkpR2hqn.js";import{C as c}from"./Content-DRuiMhgn.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B2U-3AiS.js";import"./index-xzvR7-Gw.js";import"./index-Da7vmrj1.js";import"./ColumnLayout-Blx4YVs9.js";import"./useFieldComponent-BUmkKSsK.js";import"./utils-lOj21ZD_.js";import"./useMakeFocusable-DMtEky_M.js";import"./RadioGroup-DjZYqbnZ.js";import"./FieldError-mE8Rrcl-.js";import"./Text-BG-2dzKS.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BblXnLIP.js";import"./useLabel-N6JTHu_p.js";import"./Label-e4m8Xdvz.js";import"./Hidden-0gux2v4t.js";import"./SelectionIndicator-CKNEQhdD.js";import"./useFormValidation-BFZ87yhB.js";import"./useFocus-BI7y428A.js";import"./useFocusRing-C-2IcVPM.js";import"./useControlledState-DIXXzqms.js";import"./FocusScope-BkNZ8LpG.js";import"./context-Ff7U_4vz.js";import"./useFormReset-DtrcblTn.js";import"./usePress-B1ZCcdw8.js";import"./useFocusable-B4WRTgkS.js";import"./VisuallyHidden-UxX7HzEl.js";import"./IconWarning-Brl3hUMe.js";import"./remote-mdYu2fN6.js";import"./Label-DHad4C3T.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DRymnkwE.js";import"./FieldError-DI2vGfZA.js";import"./AlertText-CY4BBxtN.js";import"./AlertIcon-BtM4zuia.js";import"./browser-Ds1bEyov.js";import"./EmulatedBoldText-CuqW50TP.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

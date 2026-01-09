import{j as r}from"./iframe-B6FtZzVw.js";import{R as l,b as p,a as n}from"./RadioButton-DuZACqqr.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-B-1daBaI.js";import{T as u}from"./Text-DPYEhwNL.js";import{C as c}from"./Content-C4jO2rE4.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dnsg7d7g.js";import"./index-Jha0zHxy.js";import"./index-DprtUoGy.js";import"./ColumnLayout-DnUtTAv8.js";import"./useFieldComponent-BNMXDSB6.js";import"./utils-B053wNrY.js";import"./useMakeFocusable-CrhaCYEc.js";import"./RadioGroup-CKaeCiOK.js";import"./FieldError-BtAF49NH.js";import"./Text-Dn3IEVOe.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-CujqqqIN.js";import"./useLabel-CPIz2b8c.js";import"./Label-BRHOOf6S.js";import"./Hidden-BRZRxZbR.js";import"./SelectionIndicator-DqsRzLxq.js";import"./useFormValidation-C7j9z4Fo.js";import"./useFocus-DnpGAVhn.js";import"./useControlledState-ByagjwsX.js";import"./FocusScope-Dv-pZR3t.js";import"./useFocusRing-C0rO9rWF.js";import"./context-D8VymAHE.js";import"./useFormReset-CRRhvvtY.js";import"./usePress-Bff_bCDv.js";import"./useFocusable-CPP8dzW4.js";import"./VisuallyHidden-kv_mk74c.js";import"./IconWarning-DEHpO9Uw.js";import"./remote-B6WYv1J0.js";import"./Label-gGsAWD9A.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-D6nkVQc6.js";import"./FieldError-CuRjPN5X.js";import"./browser-D2cTR9e8.js";import"./EmulatedBoldText-DD0WhK6h.js";const er={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

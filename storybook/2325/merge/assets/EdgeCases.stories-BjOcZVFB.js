import{j as r}from"./iframe-H3UGI_HB.js";import{R as l,a as p}from"./Radio-BhwUo2ti.js";import{R as n}from"./RadioButton-B4J5i2Tu.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-Bw7vilqK.js";import{T as u}from"./Text-B0lwY8q7.js";import{C as c}from"./Content-DCXa1KEI.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-RxwhG80E.js";import"./index-D6GAEjHP.js";import"./index-BJWFQYe5.js";import"./ColumnLayout-D4a00qc_.js";import"./useFieldComponent-Bj80Ne3v.js";import"./utils-DSogMYdc.js";import"./useMakeFocusable-B7D2LJCK.js";import"./RadioGroup-YarvdxEg.js";import"./FieldError-Be1mQ-cQ.js";import"./Text-UIHj6j-v.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BGaHvL5t.js";import"./useLabel-CtoVShGG.js";import"./Label-CZuC8vWV.js";import"./Hidden-DoBcQ2Eg.js";import"./SelectionIndicator-BgUtvt2H.js";import"./useFormValidation-DekRXblw.js";import"./useFocus-DQ3i5Klp.js";import"./useFocusRing-DrWQa_14.js";import"./useControlledState-DkMic-Ic.js";import"./FocusScope-DjcW1lzL.js";import"./context-BGVDv2KD.js";import"./useFormReset-CtKq0dbr.js";import"./usePress-CSCW4wCL.js";import"./useFocusable-BYwgOLI_.js";import"./VisuallyHidden-BGP1Ifbj.js";import"./IconWarning-D9BgjB6B.js";import"./remote-uffOWPGy.js";import"./Label-BgH6R3x8.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-w61_e3zI.js";import"./FieldError-wcTb1U2C.js";import"./AlertText-CQfakUvk.js";import"./AlertIcon-Cb5scZh6.js";import"./browser-xqq3Xy_w.js";import"./EmulatedBoldText-DRHBUbf1.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

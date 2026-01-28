import{j as r}from"./iframe-DXKyl4qq.js";import{R as l,b as p,a as n}from"./RadioButton-CQYtclym.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DVWEwBoB.js";import{T as u}from"./Text-DlQihciA.js";import{C as c}from"./Content-BykqaF3l.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CGVR20ME.js";import"./index-CGttF0w9.js";import"./index-CK0x1Z6h.js";import"./ColumnLayout-B6knVDhR.js";import"./useFieldComponent-DrLbNusb.js";import"./utils-Cgx1j8_A.js";import"./useMakeFocusable-l6suc7Fp.js";import"./RadioGroup-BZGZzjCH.js";import"./FieldError-CXwp2WFY.js";import"./Text-Dy69l_TS.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-VygiigBM.js";import"./useLabel-CXFTMfS2.js";import"./Label-Dkou43m_.js";import"./Hidden-CaezFR51.js";import"./SelectionIndicator-BncnqGmj.js";import"./useFormValidation-1Ohd4Vow.js";import"./useFocus-BAjbVDBz.js";import"./useFocusRing-DoixN5z_.js";import"./useControlledState-DW1EgN0_.js";import"./FocusScope-CeuTnAxx.js";import"./context-C5-138xc.js";import"./useFormReset-Cw-gwOYV.js";import"./usePress-MFF54RNh.js";import"./useFocusable-DAwaDAhU.js";import"./VisuallyHidden-XnRwWdWi.js";import"./IconWarning-BTtxekbk.js";import"./remote-5V97MXBJ.js";import"./Label-DJy_0fcC.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DsWoRU9M.js";import"./FieldError-hPaNUVVF.js";import"./AlertText-BbpMfzbs.js";import"./AlertIcon-BU8g3GYG.js";import"./browser-Q1FjFR8E.js";import"./EmulatedBoldText-Bw3TIL22.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ir=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,ir as __namedExportsOrder,tr as default};

import{j as r}from"./iframe-ZqGKWCd-.js";import{R as l,a as p}from"./Radio-Dxa_GsnS.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-B3Ae6UB1.js";import{T as u}from"./Text-fsbk1lYn.js";import{C as c}from"./Content-C6CAt2vI.js";import{R as n}from"./RadioButton-osXHl8Aq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DnG4Zld_.js";import"./index-CDScJNB3.js";import"./index-BS5rk3Xg.js";import"./ColumnLayout-CNsTuTMr.js";import"./useFieldComponent-B1bOh1KR.js";import"./utils-D141Jr51.js";import"./useMakeFocusable-7wNdYP6C.js";import"./RadioGroup-BJJTsx5s.js";import"./FieldError-D5ElVx7m.js";import"./Text-Csqi7mxP.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-CbKBfjBg.js";import"./useLabel-Cwc7cvIm.js";import"./Label-BUWbTNXS.js";import"./Hidden-DJANzhMQ.js";import"./SelectionIndicator-JiamtxED.js";import"./useFormValidation-EOc_OYLE.js";import"./useFocus-DhU9eZJ-.js";import"./useControlledState-CXUvh1Us.js";import"./FocusScope-CNoX19qM.js";import"./useFocusRing-DbADFAxV.js";import"./context-zCArMZyI.js";import"./useFormReset-L-nmEJr1.js";import"./usePress-_yC0x0cS.js";import"./useFocusable-BybslKHd.js";import"./VisuallyHidden-Izi45t00.js";import"./IconChevronDown-DOkopHOS.js";import"./remote-QKtGQrQi.js";import"./IconRadioOn-Ddjkxd3F.js";import"./Label-CJicQH7Q.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-B1HvX0bo.js";import"./FieldError-LLBE4o9B.js";import"./IconDanger-9fNDXdlu.js";import"./browser-BUvHTeNk.js";import"./EmulatedBoldText-Ro5KrcKA.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

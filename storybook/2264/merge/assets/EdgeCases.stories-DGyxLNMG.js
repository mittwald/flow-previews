import{j as r}from"./iframe-CL_XwmGn.js";import{R as l,b as p,a as n}from"./RadioButton-BGfBVB5M.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CM9Q3F5m.js";import{T as u}from"./Text-D6CnWJI6.js";import{C as c}from"./Content-C5rzNSdx.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BU0F8yOM.js";import"./index-5M68WWKF.js";import"./index-E9PNAIL6.js";import"./ColumnLayout-BvkFLY17.js";import"./useFieldComponent-CJlPbBit.js";import"./utils-pMOpDdKA.js";import"./useMakeFocusable-ChDb0J9H.js";import"./RadioGroup-DE1s33q7.js";import"./FieldError-B4bZwJpA.js";import"./Text-BoyMWt4b.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form--AezVwJ0.js";import"./useLabel-OokI145l.js";import"./Label-C9CEKXVd.js";import"./Hidden-D-ekfNfu.js";import"./SelectionIndicator-KxjlcYOr.js";import"./useFormValidation-B17WGe6J.js";import"./useFocus-BpR4SkFv.js";import"./useControlledState-CguvIA_y.js";import"./FocusScope-D2XVNmzA.js";import"./useFocusRing-vwKb8oQw.js";import"./context-BrZvYWUs.js";import"./useFormReset-Dt36AuVA.js";import"./usePress-BzQNsH-t.js";import"./useFocusable-CrdCOPEw.js";import"./VisuallyHidden-q4vxjiW8.js";import"./IconWarning-BJDkWSaD.js";import"./remote-vDvbK7RM.js";import"./Label-D8wjF5yZ.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-y3SF15d-.js";import"./FieldError-p9GwIgel.js";import"./AlertText-ClMe5xDD.js";import"./AlertIcon-DT_6S455.js";import"./browser-BUAGSuau.js";import"./EmulatedBoldText-T1o3Oddg.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

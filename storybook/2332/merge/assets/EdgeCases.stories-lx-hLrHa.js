import{j as r}from"./iframe-DG8PGYI2.js";import{R as l,a as p}from"./Radio-UWc8VTmY.js";import{R as n}from"./RadioButton-BYRVASke.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-ZpMnX1ZV.js";import{T as u}from"./Text-DXfg_t75.js";import{C as c}from"./Content-CXy-CNoO.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C4oSbM4F.js";import"./index-CkEHDxga.js";import"./index-LR7sdXL2.js";import"./ColumnLayout-DGhB9mq6.js";import"./useFieldComponent-CBicToer.js";import"./utils-07AIACoX.js";import"./useMakeFocusable-P3bVxZG5.js";import"./RadioGroup-XzNqd0cQ.js";import"./FieldError-bE1Vz7Na.js";import"./Text-0L-5i7aJ.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-COtDtsRb.js";import"./useLabel-D3O2Shqb.js";import"./Label-2cZ0Lvh6.js";import"./Hidden-DLF1ykG-.js";import"./SelectionIndicator-CS3Tqeow.js";import"./useFormValidation-DkNbsHEL.js";import"./useFocus-gEyTxYiG.js";import"./useFocusRing-CyfWRfC8.js";import"./useControlledState-CbmAXNAC.js";import"./FocusScope-By5yaDFE.js";import"./context-CRjwjO0_.js";import"./useFormReset-BIdGIAau.js";import"./usePress-Dy-OAjIk.js";import"./useFocusable-0ogj4vIM.js";import"./VisuallyHidden-DKQ2uWX5.js";import"./IconWarning-SSUZ9dob.js";import"./remote-DDSPySo3.js";import"./Label-BPpS4vmA.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DXFpyvRx.js";import"./FieldError-Cib7Ob9Y.js";import"./AlertText-BxN-Llvy.js";import"./AlertIcon-DlZAtoqh.js";import"./browser-CdVMgEWJ.js";import"./EmulatedBoldText-BysjcSz3.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

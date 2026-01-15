import{j as r}from"./iframe-C5hcdLE6.js";import{R as l,b as p,a as n}from"./RadioButton-DrCh2ceE.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CKiErJ_I.js";import{T as u}from"./Text-D8uazRXK.js";import{C as c}from"./Content-flaNMbvD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DfDzLOdb.js";import"./index-CrcBTJfi.js";import"./index-ClIq6yug.js";import"./ColumnLayout-DB0ermnn.js";import"./useFieldComponent-t_EOnv-a.js";import"./utils-B3GIFt3C.js";import"./useMakeFocusable-4hk7peMl.js";import"./RadioGroup-DkFXods5.js";import"./FieldError-CqTmSUdd.js";import"./Text-79_FySwa.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-Dgtv3yvc.js";import"./useLabel-DIyDpHH2.js";import"./Label-Cdw77YDw.js";import"./Hidden-CzLEuVYW.js";import"./SelectionIndicator-B5s74P3-.js";import"./useFormValidation-BJOScXHE.js";import"./useFocus-Fr_BfSOs.js";import"./useControlledState-C9jQ4AxE.js";import"./FocusScope-CQ3JVi5A.js";import"./useFocusRing-B86g4qKF.js";import"./context-E1uxYtQv.js";import"./useFormReset-BnJ7w8Tn.js";import"./usePress-CyQlFp9g.js";import"./useFocusable-xzWj-wm9.js";import"./VisuallyHidden-n5FPXG3E.js";import"./IconWarning-BGpxRwU-.js";import"./remote-DfH19er1.js";import"./Label-KhBIX57N.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DggJiG-V.js";import"./FieldError-CRlQMLVN.js";import"./AlertText-Dgs9QBLV.js";import"./AlertIcon-DM3zFbIf.js";import"./browser-BJ6k16eC.js";import"./EmulatedBoldText-G7OdIUUd.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

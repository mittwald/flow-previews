import{j as r}from"./iframe-Dnm846PF.js";import{R as l,b as p,a as n}from"./RadioButton-BiXpf7zs.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CeTjHVU_.js";import{T as u}from"./Text-DtZxu6g8.js";import{C as c}from"./Content-CMpus6H1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-S63Cq1sy.js";import"./index-Db1dbbsL.js";import"./index-sBHKlQZD.js";import"./ColumnLayout-254Oc0rn.js";import"./useFieldComponent-CW3QYPg0.js";import"./utils-VDIU0BnD.js";import"./useMakeFocusable-BbEQC8YI.js";import"./RadioGroup-DvgCw-uU.js";import"./FieldError-BJ4Wbc9z.js";import"./Text-1v5GZWlz.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-DyzgNsfN.js";import"./useLabel-pLNL7Cvk.js";import"./Label-B2apKb0w.js";import"./Hidden-1UUWpuD7.js";import"./SelectionIndicator-B7sCGTL_.js";import"./useFormValidation-CGpO-wMA.js";import"./useFocus-D-7SE4fF.js";import"./useControlledState-CkFAdRGn.js";import"./FocusScope-DH4o0wc_.js";import"./useFocusRing-CANRw9LC.js";import"./context-CoOH5oCy.js";import"./useFormReset-BiFYZY7a.js";import"./usePress-CU4gAXU4.js";import"./useFocusable-DgTTkttD.js";import"./VisuallyHidden-C6zUvnKf.js";import"./IconWarning-CExbEpDP.js";import"./remote-XcyFsW5Q.js";import"./Label-CfPB20lW.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BqtI09-_.js";import"./FieldError-Ze0pQjLj.js";import"./browser-DEiAhc6G.js";import"./EmulatedBoldText-DH6NWkOG.js";const er={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

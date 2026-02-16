import{j as r}from"./iframe-CIhdjqSz.js";import{R as l,a as p}from"./Radio-CEEA2Ybs.js";import{R as n}from"./RadioButton-D24OlTPL.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CCGI9u0b.js";import{T as u}from"./Text-DgrqnOua.js";import{C as c}from"./Content-C_lJcoxE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BeD38kgF.js";import"./index-OQlE9mt9.js";import"./index-D2Zvq_HV.js";import"./ColumnLayout-D6V36ZCl.js";import"./useFieldComponent-BDBEatho.js";import"./utils-3Ll5mTsj.js";import"./useMakeFocusable-UREXot88.js";import"./RadioGroup-DuWUGd8w.js";import"./FieldError-BrGZX-9W.js";import"./Text-BWZGL9q7.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-C-8UFtdt.js";import"./useLabel-wcYinYgg.js";import"./Label-D3zNzQRu.js";import"./Hidden-BpzDMW_9.js";import"./SelectionIndicator-BybBuRuw.js";import"./useFormValidation-kYNpgjw2.js";import"./useFocus-CB1MjZml.js";import"./useFocusRing-ChVqcxnp.js";import"./useControlledState-Bhs9bgfq.js";import"./FocusScope-DnRcaDs5.js";import"./context-C9Id__Ro.js";import"./useFormReset-CCc0UGFI.js";import"./usePress-BAXbDaCF.js";import"./useFocusable-DArPbii_.js";import"./VisuallyHidden-Szd7uPuS.js";import"./IconWarning-NrGPSND5.js";import"./remote-C6ukCFNy.js";import"./Label-DvNJKWaN.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BU74X8dt.js";import"./FieldError-C6Vi3jlh.js";import"./AlertText-DmXHc8ur.js";import"./AlertIcon-DlNCugjU.js";import"./browser-BTfojbbK.js";import"./EmulatedBoldText-DYoDUL8u.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-CdVpWnc8.js";import{R as l,a as p}from"./Radio-DvUT3ZtC.js";import{R as n}from"./RadioButton-D8aiwmNc.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CwXo6pO1.js";import{T as u}from"./Text-KDInGMjK.js";import{C as c}from"./Content-DBtWwWJq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BmLnRlWr.js";import"./index-CCZSieOH.js";import"./index-CPzHqOMO.js";import"./ColumnLayout-BCh6NKgi.js";import"./useFieldComponent-pH8UQhzW.js";import"./utils-ClIic5nH.js";import"./useMakeFocusable-DGHqaO07.js";import"./RadioGroup-BHMyij67.js";import"./FieldError-U_T6R5BY.js";import"./Text-DmePsxpx.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BAj6LeSM.js";import"./useLabel-BKXkodj0.js";import"./Label-BlSWZv6R.js";import"./Hidden-47TYSTIy.js";import"./SelectionIndicator-DTqsITpO.js";import"./useFormValidation-5isdk9bY.js";import"./useFocus-DZX-xW1t.js";import"./useFocusRing-dkAGsBkQ.js";import"./useControlledState-B7ztCH5k.js";import"./FocusScope-D5Cgd53Y.js";import"./context-Bg-StFGN.js";import"./useFormReset-D5EHipFr.js";import"./usePress-CCAUNqmr.js";import"./useFocusable-CzSEJZTE.js";import"./VisuallyHidden-Cqn4F1Sv.js";import"./IconWarning-Ba9_xFUh.js";import"./remote-BheCwFS8.js";import"./Label-CQQzXuOB.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-9E8dKOP5.js";import"./FieldError-0fRgmDO9.js";import"./AlertText-DPJNXYjA.js";import"./AlertIcon-DVQphOxP.js";import"./browser-CWGq_9Zm.js";import"./EmulatedBoldText-BFXdzchX.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

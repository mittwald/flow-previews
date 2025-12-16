import{j as r}from"./iframe-ChZoSAk9.js";import{R as l,a as p}from"./Radio-C2DR9ZB-.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-BXU9BBE9.js";import{T as u}from"./Text-DeId_uwd.js";import{C as c}from"./Content-D-Qpjw7t.js";import{R as n}from"./RadioButton-B_ZlTXdp.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CTDVwaga.js";import"./index-DWAP1jQp.js";import"./index-0x3bxhbi.js";import"./ColumnLayout-C7lkJ48l.js";import"./useFieldComponent-CTbZHLtq.js";import"./utils-3orXHcy8.js";import"./useMakeFocusable-DJCTQeTh.js";import"./RadioGroup-4tBeEaxl.js";import"./FieldError-krJUZi9_.js";import"./Text-DWCX6muZ.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-DiR4hcFZ.js";import"./useLabel-DwTIrFfL.js";import"./Label-8-s2XGsR.js";import"./Hidden-BToicrtl.js";import"./SelectionIndicator-BZmDBgq9.js";import"./useFormValidation-DrPCugNK.js";import"./useFocus-BEqWk0b2.js";import"./useControlledState-CXwLHBKW.js";import"./FocusScope-DTg-yLmD.js";import"./useFocusRing-sg_VmrXT.js";import"./context-CKHtHj1o.js";import"./useFormReset-DlW87ulD.js";import"./usePress-BEbKEOpz.js";import"./useFocusable-BQrvJ6Oj.js";import"./VisuallyHidden-TRsVH-0B.js";import"./IconApp-jg62nbZM.js";import"./remote-CMT6q-r_.js";import"./IconRadioOn-aeGiFNPR.js";import"./Label-BtQBKk3e.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-D3af8G-N.js";import"./FieldError-D0FcbU4f.js";import"./IconDanger-bNuP_yaN.js";import"./browser-B8p5n3S3.js";import"./EmulatedBoldText-D79YiaqZ.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

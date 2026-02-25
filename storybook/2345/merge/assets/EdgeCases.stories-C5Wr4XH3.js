import{j as r}from"./iframe-CAK8FS83.js";import{R as l,a as p}from"./Radio-RUHRauA9.js";import{R as n}from"./RadioButton-BsaDYPoM.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CDR8K6wg.js";import{T as u}from"./Text-DLuRhlhH.js";import{C as c}from"./Content-DIxZ35M2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BWp16SNy.js";import"./index-GWEfEQw2.js";import"./index-CbMMdC0j.js";import"./ColumnLayout-CWMxmaJ_.js";import"./useFieldComponent-DkAI1nDB.js";import"./utils-th26LVD6.js";import"./useMakeFocusable-ClulXj8L.js";import"./RadioGroup-PYrOjM13.js";import"./FieldError-W7aOon2A.js";import"./Text-BoinRLOA.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-CCLCpM-d.js";import"./useLabel-uRe61yXZ.js";import"./Label-f9ALmkld.js";import"./Hidden-Dit-znYS.js";import"./SelectionIndicator-D_639S3U.js";import"./useFormValidation-CCAHF_BW.js";import"./useFocus-CUz8YQ_V.js";import"./useFocusRing-Dri4WoMi.js";import"./useControlledState-ik7lpKJV.js";import"./FocusScope-B2Hz6ms7.js";import"./context-Cva5eEgc.js";import"./useFormReset-ClNM6Kah.js";import"./usePress-BYhFSapw.js";import"./useFocusable-wkYmEvUK.js";import"./VisuallyHidden-CgwkfWyQ.js";import"./IconWarning-EFpx-Gs1.js";import"./remote-BiZ00o_J.js";import"./Label-B8vv94Ak.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DFt6g5YR.js";import"./FieldError-Ijqs7ZUi.js";import"./AlertText-B2BWCbW6.js";import"./AlertIcon-DLSo9NlW.js";import"./browser-Bqr1AXz8.js";import"./EmulatedBoldText-C97iA6m9.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-l1bkuF5f.js";import{R as l,a as p}from"./Radio-wQhJ32eP.js";import{R as n}from"./RadioButton-DfGkS4en.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DhgQfNwC.js";import{T as u}from"./Text-BKhP8tr9.js";import{C as c}from"./Content-B7QSxMtH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CvyDVUQE.js";import"./index-BKxYFHxl.js";import"./index-BcUcgGWs.js";import"./ColumnLayout-GmcIjmxR.js";import"./useFieldComponent-C26zWsIy.js";import"./utils-DCQYs-TM.js";import"./useMakeFocusable-B3NqPQRX.js";import"./RadioGroup-Cm8k3FiQ.js";import"./FieldError-DlCb0goX.js";import"./Text-CmGzUVny.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-C3oxrYxL.js";import"./useLabel-Dw5Dmo8O.js";import"./Label-tW_cqKCA.js";import"./Hidden-xK_5A_TS.js";import"./SelectionIndicator-8EnZgCgK.js";import"./useFormValidation-CUmRTDZB.js";import"./useFocus-jq5Lg4Og.js";import"./useFocusRing-DvEP7g7r.js";import"./useControlledState-BZaI1cg9.js";import"./FocusScope-CXOryEg0.js";import"./context-C-s-FPG6.js";import"./useFormReset-B-5bGtDV.js";import"./usePress-CEqZlFux.js";import"./useFocusable-D4tCxmX8.js";import"./VisuallyHidden-GyOwAGCf.js";import"./IconWarning-rcKmWr_e.js";import"./remote-DAiDHcEq.js";import"./Label-DX1aPacI.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-F2xrId0k.js";import"./FieldError-mREW9pPY.js";import"./AlertText-Ck8xqn1I.js";import"./AlertIcon-DudqDlux.js";import"./browser-BVqvvpC_.js";import"./EmulatedBoldText-Cmh7SSTW.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

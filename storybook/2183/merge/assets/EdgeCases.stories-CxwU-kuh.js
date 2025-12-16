import{j as r}from"./iframe-C0Xzz6Xl.js";import{R as l,a as p}from"./Radio-BytyghCW.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-E4tqtGA2.js";import{T as u}from"./Text-BUGgmeAk.js";import{C as c}from"./Content-QG5E-Ocf.js";import{R as n}from"./RadioButton-DEQlLMrP.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Ds2Zpckn.js";import"./index-BvD-rn0f.js";import"./index-BkQRYDSQ.js";import"./ColumnLayout-B68ehsJz.js";import"./useFieldComponent-BRIXb0CQ.js";import"./utils-DFqauJju.js";import"./useMakeFocusable-DBt0HEUQ.js";import"./RadioGroup-Mly53Mc9.js";import"./FieldError-D1TN1uH_.js";import"./Text-DHURGNQD.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-DJAYx_sb.js";import"./useLabel-Zu9XfwEA.js";import"./Label-CKDZcwiZ.js";import"./Hidden-C5gaELfT.js";import"./SelectionIndicator-C8D-p8dY.js";import"./useFormValidation-D4H7vgpB.js";import"./useFocus-B1cKxXv-.js";import"./useControlledState-DnOVZzTA.js";import"./FocusScope-ClGhoguJ.js";import"./useFocusRing-Bftxxd_V.js";import"./context-D7OeR9su.js";import"./useFormReset-BXb8b3rI.js";import"./usePress-5FukuHow.js";import"./useFocusable-RbNM5_qn.js";import"./VisuallyHidden-DF-QcwIB.js";import"./IconChevronDown-CArgk7t7.js";import"./remote-Dsm2RjO6.js";import"./IconRadioOn-CvmJKFsz.js";import"./Label-B2dU-Foq.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-JxxzEpeY.js";import"./FieldError-COJQpxO2.js";import"./IconDanger-Dkbk0FFN.js";import"./browser-GRuvXKoj.js";import"./EmulatedBoldText-Bu7fFWiW.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

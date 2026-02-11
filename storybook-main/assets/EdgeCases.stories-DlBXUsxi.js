import{j as r}from"./iframe-DFKQ2QsC.js";import{R as l,a as p}from"./Radio-BurWdWNJ.js";import{R as n}from"./RadioButton-CEB2bOna.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CDuXGt1L.js";import{T as u}from"./Text-BEPoPMFj.js";import{C as c}from"./Content-DnbQ7SfQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BmrvfVYW.js";import"./index-BqwthJp6.js";import"./index-BLTW5Tcp.js";import"./ColumnLayout-D5Mqk4Dl.js";import"./useFieldComponent-R5E6D8Ic.js";import"./utils-BJXdD5he.js";import"./useMakeFocusable-C2WUydZC.js";import"./RadioGroup-DXfoxxvZ.js";import"./FieldError-Bmf3SAas.js";import"./Text-D27_pVCF.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DKz1zkHn.js";import"./useLabel-CurstbwI.js";import"./Label-ClB4vZMJ.js";import"./Hidden-RLwivX-P.js";import"./SelectionIndicator-BFMZIIpU.js";import"./useFormValidation-BX6OQ_jJ.js";import"./useFocus-BuPH9-PX.js";import"./useFocusRing-Dltr6KPm.js";import"./useControlledState-DUrZ8j4h.js";import"./FocusScope-B8-7lMpW.js";import"./context-m8OE0ddO.js";import"./useFormReset-DwR8gwPw.js";import"./usePress-CE-sEEB4.js";import"./useFocusable-C6PlbLtm.js";import"./VisuallyHidden-CKDTSDk1.js";import"./IconWarning-BuA9AHid.js";import"./remote-BP8uJVcU.js";import"./Label-DluzxSj2.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-Dbflc2pw.js";import"./FieldError-DdERfCze.js";import"./AlertText-BC9iPezU.js";import"./AlertIcon-D5_dS1m5.js";import"./browser-C3pjfYL0.js";import"./EmulatedBoldText-CZthuZwX.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

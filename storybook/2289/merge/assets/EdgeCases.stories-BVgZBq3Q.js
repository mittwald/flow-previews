import{j as r}from"./iframe-Ci26vI3B.js";import{R as l,b as p,a as n}from"./RadioButton-CveUsXgk.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-aipLCZzc.js";import{T as u}from"./Text-BThwDV_-.js";import{C as c}from"./Content-BA1aTXNk.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BCoZzahf.js";import"./index-3wEtqLOq.js";import"./index-BgjIHz1Y.js";import"./ColumnLayout-Cr7KbvBi.js";import"./useFieldComponent-DlKim18O.js";import"./utils-Prtw8tAI.js";import"./useMakeFocusable-QaQdEj0f.js";import"./RadioGroup-DKS-Mjhf.js";import"./FieldError-C8ji9kGw.js";import"./Text-BBkEKRDK.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DDqIZ7ds.js";import"./useLabel-D7Kjovyf.js";import"./Label-CzTNGA-w.js";import"./Hidden-Bh4pa2b3.js";import"./SelectionIndicator-DzwumZRP.js";import"./useFormValidation-DbMZQ9P7.js";import"./useFocus-BemMoN-v.js";import"./useFocusRing-IT4cpc8M.js";import"./useControlledState-B4ASThyn.js";import"./FocusScope-ByCQWjTm.js";import"./context-21njfTP5.js";import"./useFormReset-CoDGZCB3.js";import"./usePress-BIn545i6.js";import"./useFocusable-C470YARL.js";import"./VisuallyHidden-BSnmZ3mx.js";import"./IconWarning-CM9E6h9H.js";import"./remote-BeH756Ak.js";import"./Label-RXEJnYkv.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-D463xrfM.js";import"./FieldError-CpZGKwRg.js";import"./AlertText-CW-S-5R1.js";import"./AlertIcon-CQS_iHVq.js";import"./browser-CkG7QNAh.js";import"./EmulatedBoldText-TNvCnD2A.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-Bt_Ape3b.js";import{R as l,b as p,a as n}from"./RadioButton-zpWAbzh4.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DU3k1gQQ.js";import{T as u}from"./Text-Bs2hbxJA.js";import{C as c}from"./Content-CwIFb3RB.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CoHw3WqD.js";import"./index-DJTzXtHe.js";import"./index-gN6AAF3-.js";import"./ColumnLayout-DdKg9fzr.js";import"./useFieldComponent-QpDNRghi.js";import"./utils-DGGum7sG.js";import"./useMakeFocusable-BDeNc1uT.js";import"./RadioGroup-C74SVtL1.js";import"./FieldError-Cd4omKy3.js";import"./Text-DwU1R_Cs.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-E_SZdIUl.js";import"./useLabel-BAWBHbvC.js";import"./Label-Bfb_thp3.js";import"./Hidden-CJIrU941.js";import"./SelectionIndicator-7G59x11l.js";import"./useFormValidation-Gf9yhQ7S.js";import"./useFocus-C-togmBu.js";import"./useControlledState-Bw01eRXu.js";import"./FocusScope-BOag0uW3.js";import"./useFocusRing-Ba6s95SH.js";import"./context-BGqy3a6E.js";import"./useFormReset-BU_Yh1RY.js";import"./usePress-DErVZDbk.js";import"./useFocusable-BX_sV3cU.js";import"./VisuallyHidden-CM2m0J8e.js";import"./IconWarning-BQjeLTWb.js";import"./remote-C9NcRL_b.js";import"./Label-LBQHmcU0.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-Bayz7Ycu.js";import"./FieldError-DvZju2Cm.js";import"./browser-BI8hAkYP.js";import"./EmulatedBoldText-213nH2nf.js";const er={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

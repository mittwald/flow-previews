import{j as r}from"./iframe-BpfR1GYm.js";import{R as l,b as p,a as n}from"./RadioButton-KIFjRYr2.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CFAR1FZW.js";import{T as u}from"./Text-jE0jlBS1.js";import{C as c}from"./Content-J9b4UxrO.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-qov8JTe3.js";import"./index-SWV2Jto_.js";import"./index-BNT5TWiv.js";import"./ColumnLayout-e8fm_4Ce.js";import"./useFieldComponent-DI1dsoTY.js";import"./utils-z0hzRCNL.js";import"./useMakeFocusable-dIUaGRfR.js";import"./RadioGroup-CsPiFh4E.js";import"./FieldError-DbjIiGK3.js";import"./Text-DujklUHl.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-Dn5OdnSf.js";import"./useLabel-oNP935J_.js";import"./Label-TUuaFaku.js";import"./Hidden-DWXiMutX.js";import"./SelectionIndicator-n0OjLjyZ.js";import"./useFormValidation-DJqpOl9D.js";import"./useFocus-ZHbPEGRJ.js";import"./useControlledState-Bs2ReOE0.js";import"./FocusScope--j43gSQ5.js";import"./useFocusRing-lHZkZ90J.js";import"./context-BQnsf3fS.js";import"./useFormReset-LNCZiIDy.js";import"./usePress-VEcsoWoE.js";import"./useFocusable-CybXUwCv.js";import"./VisuallyHidden-Dk8KR5l4.js";import"./IconWarning-BOf1a1NO.js";import"./remote-Cr2dkfGH.js";import"./Label-DS3YgAXJ.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BHDvTpyt.js";import"./FieldError-CXRDkScB.js";import"./InlineAlert-Dumml4W9.js";import"./AlertIcon-BPm48GUQ.js";import"./browser-CJuVe1n5.js";import"./EmulatedBoldText-Ba7yrIZA.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

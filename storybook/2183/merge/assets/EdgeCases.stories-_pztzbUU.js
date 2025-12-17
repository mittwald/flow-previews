import{j as r}from"./iframe-DnYi-t8H.js";import{R as l,a as p}from"./Radio-Br42EbpL.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CmFxj9Pc.js";import{T as u}from"./Text-Bl1v2nei.js";import{C as c}from"./Content-Ctd6RYV-.js";import{R as n}from"./RadioButton-Dr91J5HV.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BiRXm_7W.js";import"./index-6rd6RhLs.js";import"./index-B9w1U9jw.js";import"./ColumnLayout-9aZLnELA.js";import"./useFieldComponent-BC1W_qCr.js";import"./utils-DErHybyt.js";import"./useMakeFocusable-BvqdDGUF.js";import"./RadioGroup-2AneWP6t.js";import"./FieldError-DFN_xfpl.js";import"./Text-CnHQzzWa.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-BNVSNvMr.js";import"./useLabel-CvNtERHu.js";import"./Label-DpP4Z3U4.js";import"./Hidden-D2dwjMI8.js";import"./SelectionIndicator-B3bHR6It.js";import"./useFormValidation-D4Tsj5aM.js";import"./useFocus-Cp5_bDzt.js";import"./useControlledState-CUB7XdW4.js";import"./FocusScope-CymXO5HE.js";import"./useFocusRing-DBOpxQ6c.js";import"./context-BormPWP-.js";import"./useFormReset-CY2BFsrw.js";import"./usePress-BSFKAxA8.js";import"./useFocusable-CJcfCTZ3.js";import"./VisuallyHidden-BnpIJKhq.js";import"./IconApp-C4H0Rmt2.js";import"./remote-BR657ewb.js";import"./IconRadioOn-D6m5eZdl.js";import"./Label-DliS2X1j.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-D1M6ycSH.js";import"./FieldError-9-oFldGv.js";import"./IconDanger-CDad_7H2.js";import"./browser-Cx51Q07l.js";import"./EmulatedBoldText-C_7kGQpM.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-CH-PGbIe.js";import{R as l,a as p}from"./Radio-BdAW05mx.js";import{R as n}from"./RadioButton-C0cvp5qE.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-zCaHpoxv.js";import{T as u}from"./Text-DUTVzyy5.js";import{C as c}from"./Content-JQRj5Ax7.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Cx8afA-p.js";import"./index-JjjT5_3a.js";import"./index-yvyiz2TD.js";import"./ColumnLayout-oQn4Qbp3.js";import"./useFieldComponent-R38s1k2Z.js";import"./utils-BUbYN1U7.js";import"./useMakeFocusable-C_9yLGWa.js";import"./RadioGroup-CopeWlka.js";import"./FieldError-PikikH1M.js";import"./Text-C_Kx-nbJ.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BPpqOWmF.js";import"./useLabel-BBwXLpG2.js";import"./Label-YvP3zR1_.js";import"./Hidden-BHNvmzaU.js";import"./SelectionIndicator-DFgYB22t.js";import"./useFormValidation-CGeoBpxY.js";import"./useFocus-C-u_ZFsP.js";import"./useFocusRing-CuUFHyYZ.js";import"./useControlledState-BQPo69mZ.js";import"./FocusScope-Com4Ovel.js";import"./context-BEPAk1pi.js";import"./useFormReset-DarrOQyz.js";import"./usePress-CjXzQGxt.js";import"./useFocusable-DX9jgPLa.js";import"./VisuallyHidden-BZmadp8e.js";import"./IconWarning-BrtiYPUm.js";import"./remote-NkxELaCk.js";import"./Label-BpHmIn39.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-UQrIwX21.js";import"./FieldError-9pLulNyY.js";import"./AlertText-lzhTm-Qc.js";import"./AlertIcon-Cf4_Rc8_.js";import"./browser-Bk_hun62.js";import"./EmulatedBoldText-DLXz_2Ie.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

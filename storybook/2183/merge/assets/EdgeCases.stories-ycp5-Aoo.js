import{j as r}from"./iframe-C9fRvTrj.js";import{R as l,a as p}from"./Radio-BQPUQjJY.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CYt2Ngmr.js";import{T as u}from"./Text-D323xmXD.js";import{C as c}from"./Content-DVMyzv2v.js";import{R as n}from"./RadioButton-GPUcj_v4.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B9iKHe4d.js";import"./index-BKw8uTi3.js";import"./index-CLvMUAwA.js";import"./ColumnLayout-DWUZslvL.js";import"./useFieldComponent-jGlg5Icl.js";import"./utils-CPkfOZj3.js";import"./useMakeFocusable-C_KKDFG4.js";import"./RadioGroup-By4Kw-Xo.js";import"./FieldError-BSiYpFWr.js";import"./Text-BRNikD3K.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-FOSkHwoF.js";import"./useLabel-KJitgciI.js";import"./Label-DetJ9FyC.js";import"./Hidden-D46P9k-k.js";import"./SelectionIndicator-Qi7XUyY0.js";import"./useFormValidation-BLFhZbJU.js";import"./useFocus-bSaDUtch.js";import"./useControlledState-BGzazcEz.js";import"./FocusScope-CuzzTLeS.js";import"./useFocusRing-cRMmIaF9.js";import"./context-Bv4btMDO.js";import"./useFormReset-CS_NLM25.js";import"./usePress-_4yw8jQQ.js";import"./useFocusable-BSBdu-8d.js";import"./VisuallyHidden-FzUX7Nba.js";import"./IconChevronDown-D_WjmewV.js";import"./remote-BH-MD2MY.js";import"./IconRadioOn-B2csJADA.js";import"./Label-BRzY6dIy.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-zNln5p4w.js";import"./FieldError-Bd58Epno.js";import"./IconDanger-Cax3VcTl.js";import"./browser-CUSAF5aW.js";import"./EmulatedBoldText-CPA2fMYQ.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-BoA7YzYm.js";import{R as l,b as p,a as n}from"./RadioButton-Cu_0Gm4K.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-C4SWfAaC.js";import{T as u}from"./Text-Dcujjsgx.js";import{C as c}from"./Content-DmZtnxaN.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-rXkph_fu.js";import"./index-DXjuNE_i.js";import"./index-C8IfwtBf.js";import"./ColumnLayout-DneT1EzW.js";import"./useFieldComponent-DkEUVrE8.js";import"./utils-CbCfmbCJ.js";import"./useMakeFocusable-7sfTEwK_.js";import"./RadioGroup-e7qeBvWt.js";import"./FieldError-DIrg2qiC.js";import"./Text-DzES3Axw.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-DOX3bg_5.js";import"./useLabel-BJjmJvn4.js";import"./Label-CIY5uMr1.js";import"./Hidden-COFYe48C.js";import"./SelectionIndicator-fGxLhP25.js";import"./useFormValidation-D99W395Z.js";import"./useFocus-0w8IxMP9.js";import"./useControlledState-Bptfp7LK.js";import"./FocusScope-ewaHP7Wk.js";import"./useFocusRing-QIpAUb-m.js";import"./context-Bl3IUlM5.js";import"./useFormReset-Lf5kfq5Z.js";import"./usePress-VWzB255U.js";import"./useFocusable-03sk398M.js";import"./VisuallyHidden-ulLndJxN.js";import"./IconWarning-Cm4x5FHH.js";import"./remote-W2BsjsJq.js";import"./Label-Cjbbehtk.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BmdJpMCj.js";import"./FieldError-CkVfHT3s.js";import"./browser--2iaZute.js";import"./EmulatedBoldText-B6CuOWoW.js";const er={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

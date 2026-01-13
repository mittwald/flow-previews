import{j as r}from"./iframe-S6a6IBGW.js";import{R as l,b as p,a as n}from"./RadioButton-CvKLT_6o.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-BwtEE-_C.js";import{T as u}from"./Text-CLecf1p6.js";import{C as c}from"./Content-BsEiLgTZ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BLLiPPDy.js";import"./index-l1wA_Qpp.js";import"./index-C8QsAo4A.js";import"./ColumnLayout-B6Wy8rnm.js";import"./useFieldComponent-C7YS4lAg.js";import"./utils-B8ercvf4.js";import"./useMakeFocusable-eWjwz86C.js";import"./RadioGroup-DnccSJNE.js";import"./FieldError-BRuAmhML.js";import"./Text-XPHoRcaC.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-n7Om2L0f.js";import"./useLabel-I1naabyM.js";import"./Label-DxhkDnS7.js";import"./Hidden-CVYoRnxj.js";import"./SelectionIndicator-DSvv5afS.js";import"./useFormValidation-DHFSk2Ol.js";import"./useFocus--oJxMCZo.js";import"./useControlledState-BHa0sYDq.js";import"./FocusScope-BEprXHob.js";import"./useFocusRing-pCPuJRtg.js";import"./context-CXquv49b.js";import"./useFormReset-DK3gdO9Q.js";import"./usePress-BUR3MtQf.js";import"./useFocusable-DTyt-kbS.js";import"./VisuallyHidden-BN0xrgav.js";import"./IconWarning-D0GzEl3K.js";import"./remote-CCjzztUh.js";import"./Label-caCQNiXZ.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DpHStB2_.js";import"./FieldError-BcgoZm7g.js";import"./AlertText-CIQFF9OC.js";import"./AlertIcon-DgqrgpKu.js";import"./browser-C6w_OiT9.js";import"./EmulatedBoldText-PjFBcLAJ.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

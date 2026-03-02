import{j as r}from"./iframe-Dx38AIDT.js";import{R as l,a as p}from"./Radio-D9MVmdJm.js";import{R as n}from"./RadioButton-CnH2gXmO.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DEQGs_Vz.js";import{T as u}from"./Text-stRMORLN.js";import{C as c}from"./Content-DSBqSoeM.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BwBSRBJY.js";import"./index-B3w7UL3m.js";import"./index-C4zw0wF6.js";import"./ColumnLayout-kDBHUEfW.js";import"./useFieldComponent-CxTx8kf3.js";import"./utils-uxa8p5vl.js";import"./useMakeFocusable-XCzcSU6p.js";import"./RadioGroup-bxaattIP.js";import"./FieldError-Cjk2dDkd.js";import"./Text-CN5O_J5f.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-CwkZdzbX.js";import"./useLabel--5Xg4_7C.js";import"./Label-CRhDhtUr.js";import"./Hidden-fCjHF3ey.js";import"./SelectionIndicator-D_Yc_rq7.js";import"./useFormValidation-Dn8WL8kF.js";import"./useFocus-C3KeEXKn.js";import"./useFocusRing-XbCssGNL.js";import"./useControlledState-BekZOXin.js";import"./FocusScope-eq4FNALu.js";import"./context-CRsgLXVa.js";import"./useFormReset-DiledHxM.js";import"./usePress-BU6JmZbW.js";import"./useFocusable-CIjhaoEP.js";import"./VisuallyHidden-ma9EryWn.js";import"./IconWarning-tem5fYZU.js";import"./remote-C7_Ru_dB.js";import"./Label-lvpVoRBR.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-D4oP4MPs.js";import"./FieldError-DY7Z21GR.js";import"./AlertText-BEiS7w5p.js";import"./AlertIcon-BbY5ij-p.js";import"./browser-Bgj4nWuI.js";import"./EmulatedBoldText-DkfYMVU4.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

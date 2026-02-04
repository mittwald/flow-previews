import{j as r}from"./iframe-CBdrHiu-.js";import{R as l,a as p}from"./Radio-DWMw5G_p.js";import{R as n}from"./RadioButton-Csa_nvcO.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-VhnK399M.js";import{T as u}from"./Text-vxOKNzxr.js";import{C as c}from"./Content-BKYQQ2Z2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-SJnnBAhb.js";import"./index-Dx3T5N_5.js";import"./index-DbZpFDe3.js";import"./ColumnLayout-CgvghhSi.js";import"./useFieldComponent-CkNNSE-6.js";import"./utils-DRjcKwJb.js";import"./useMakeFocusable-CauPXOGo.js";import"./RadioGroup-B_fC8v9V.js";import"./FieldError-hDU9I6ir.js";import"./Text-DKFtzua6.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Dpu47_EF.js";import"./useLabel-CJjwA-2F.js";import"./Label-Be9V6H5h.js";import"./Hidden-72868EZD.js";import"./SelectionIndicator-CeaIsc91.js";import"./useFormValidation-BxN5Q1uu.js";import"./useFocus-BOx7sVQU.js";import"./useFocusRing-CFSl2bW1.js";import"./useControlledState-H50OY390.js";import"./FocusScope-CTh9v3q6.js";import"./context-p6nKBAyO.js";import"./useFormReset-DzYWM4EU.js";import"./usePress-BNG00Dag.js";import"./useFocusable-DA2EU5Pw.js";import"./VisuallyHidden-DNW2U5ZQ.js";import"./IconWarning-B89fpQti.js";import"./remote-SRpD7Y2I.js";import"./Label-BnDRrnHY.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BCYddyWG.js";import"./FieldError-OVkxnP3X.js";import"./AlertText-Be6TgPnW.js";import"./AlertIcon-DkcKW-cj.js";import"./browser-DtunHlVO.js";import"./EmulatedBoldText-xhBM3BWX.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

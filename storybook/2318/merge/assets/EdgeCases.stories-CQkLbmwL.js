import{j as r}from"./iframe-CNIcTJYh.js";import{R as l,a as p}from"./Radio-TSnNLTd8.js";import{R as n}from"./RadioButton-DZWJ8yWi.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-Bte3lxb2.js";import{T as u}from"./Text-6t0QtAeQ.js";import{C as c}from"./Content-CQKC6vCa.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-60nesrge.js";import"./index-D3p32_5k.js";import"./index-UhPRO7XN.js";import"./ColumnLayout-CLtGV-wk.js";import"./useFieldComponent-BcSx3cQM.js";import"./utils-BMrW0rs-.js";import"./useMakeFocusable-CRnFMBmj.js";import"./RadioGroup-CysPN6QE.js";import"./FieldError-C-WtBUhj.js";import"./Text-D2vn8IUC.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DFzq_6cf.js";import"./useLabel-OR8aG57O.js";import"./Label-T_N4SAco.js";import"./Hidden-CRwhep7p.js";import"./SelectionIndicator-DvRn40OS.js";import"./useFormValidation-Cl_ELzYY.js";import"./useFocus-Z0zsAUPg.js";import"./useFocusRing-DW-rJUC8.js";import"./useControlledState-aVbBpOCK.js";import"./FocusScope-BYGRF7Vw.js";import"./context-C-_0n7Mf.js";import"./useFormReset-ClGEeDTe.js";import"./usePress-YapnYrtx.js";import"./useFocusable-pw23kKVy.js";import"./VisuallyHidden-BJLw9ne3.js";import"./IconWarning-DfNRCo5R.js";import"./remote-yIvwWX6j.js";import"./Label-Dk1BsiHf.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-Rr_25XDQ.js";import"./FieldError-CRJL1-ZW.js";import"./AlertText-C0QdtU2r.js";import"./AlertIcon-CQAKF3sa.js";import"./browser-e5gpn1Ib.js";import"./EmulatedBoldText-Cp_XieAh.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-CzrbZwQa.js";import{R as l,a as p}from"./Radio-DWxONW9g.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DHHaYBV1.js";import{T as u}from"./Text-u_8Z_6lo.js";import{C as c}from"./Content-6qOTyX4c.js";import{R as n}from"./RadioButton-BYDnaVb0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-8nLM6u8z.js";import"./index-i1sq50ab.js";import"./index-Qzp6tfP6.js";import"./ColumnLayout-C8O2dDPk.js";import"./useFieldComponent-DOxHkWVS.js";import"./utils-Ds7wxNIq.js";import"./useMakeFocusable-D8EBBDfl.js";import"./RadioGroup-_wvPXrtw.js";import"./FieldError-DojfZoQ1.js";import"./Text-Bpo5VkCj.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-AHU_2zi7.js";import"./useLabel-FWCEqZCU.js";import"./Label-DMBiwPLT.js";import"./Hidden-CPBzEaGa.js";import"./SelectionIndicator-BDndb0Ze.js";import"./useFormValidation-DWC0bBci.js";import"./useFocus-3xUusYsT.js";import"./useControlledState-D-hIONgW.js";import"./FocusScope-Ct7XodZT.js";import"./useFocusRing-CcZAMLZr.js";import"./context-Dzfzncd2.js";import"./useFormReset-DxatWkQF.js";import"./usePress-Ck2a0me6.js";import"./useFocusable-C0tTc1z6.js";import"./VisuallyHidden-CUes-LKT.js";import"./IconApp-BPXZ8R19.js";import"./remote-q4LXxmI0.js";import"./IconRadioOn-BA_22ZbK.js";import"./Label-Dk8Ae2gf.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DkMEC5lK.js";import"./FieldError-D0s122Ty.js";import"./IconDanger-BVqA44qH.js";import"./browser-Q6zcHXxX.js";import"./EmulatedBoldText-DGVF2eKI.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

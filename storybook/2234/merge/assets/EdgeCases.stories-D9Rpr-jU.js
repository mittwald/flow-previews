import{j as r}from"./iframe-Cz8_C8zY.js";import{R as l,b as p,a as n}from"./RadioButton-BnfcMcIK.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-D2we4sLn.js";import{T as u}from"./Text-YjLUuftS.js";import{C as c}from"./Content-CY4wCeYm.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BcPJG4Ua.js";import"./index-Cdfsiuxw.js";import"./index-SrORw6vN.js";import"./ColumnLayout-ROyZeNjU.js";import"./useFieldComponent--MNREdev.js";import"./utils-BAKlH2Lm.js";import"./useMakeFocusable-BAQFPRRR.js";import"./RadioGroup-Dol0ftpM.js";import"./FieldError-B254xHCi.js";import"./Text-Cr087Rh_.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-Bv3CSU0e.js";import"./useLabel-BFm9pXXT.js";import"./Label-2kcHPH94.js";import"./Hidden-CWAqagDm.js";import"./SelectionIndicator-DD4cK7So.js";import"./useFormValidation-DBiWbYgf.js";import"./useFocus-DFbFm1Xx.js";import"./useControlledState-C0o23ioH.js";import"./FocusScope-DR3pULV0.js";import"./useFocusRing-BDmU1dd9.js";import"./context-VkDhZA-x.js";import"./useFormReset-CSPeTQLr.js";import"./usePress-DcZz-lB5.js";import"./useFocusable-CJ-4fYj7.js";import"./VisuallyHidden-7uh1Rm92.js";import"./IconWarning-DLbRRuK1.js";import"./remote-D3nX27fk.js";import"./Label-gR0Y05hv.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-Bo3Sbs5c.js";import"./FieldError-CEw8HJGt.js";import"./browser-B6rfwAqc.js";import"./EmulatedBoldText-Dt-OzvRV.js";const er={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-CO_SbVCH.js";import{R as l,b as p,a as n}from"./RadioButton-DrQqSHTC.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-BSRNBXTa.js";import{T as u}from"./Text-DxwcuI28.js";import{C as c}from"./Content-DjWFYK1e.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CeLLqyNG.js";import"./index-BeUgZiCh.js";import"./index-CiuYSwxA.js";import"./ColumnLayout-DWCumkI4.js";import"./useFieldComponent-DVhqfPKz.js";import"./utils-D6Fob7yO.js";import"./useMakeFocusable-Blh4kf6e.js";import"./RadioGroup-Dw4wDVS-.js";import"./FieldError-C8I7NIV7.js";import"./Text-CKhrTn1e.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-BhtxhsPb.js";import"./useLabel-Dm4P9x_e.js";import"./Label-DuIRh-OA.js";import"./Hidden-ZdS7KL-c.js";import"./SelectionIndicator-Ca0su_yA.js";import"./useFormValidation-Cv-TUnys.js";import"./useFocus-CPWqIWXE.js";import"./useControlledState-BplPLiu_.js";import"./FocusScope-Ptf693hL.js";import"./useFocusRing-BEFuW2jQ.js";import"./context-CagKbUB8.js";import"./useFormReset-DQMHGRs0.js";import"./usePress-Dh95oJrl.js";import"./useFocusable-CMm0HKMh.js";import"./VisuallyHidden-DDIsYkXL.js";import"./IconWarning-DnAYmwAM.js";import"./remote-CpzHRyGl.js";import"./Label-CYi7f71w.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CAz6Kqbv.js";import"./FieldError-ApIzqFqI.js";import"./AlertText-BQJ0P8Cx.js";import"./AlertIcon-3Vdm-iqE.js";import"./browser-DqZUP5aL.js";import"./EmulatedBoldText-f0IFAvFk.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

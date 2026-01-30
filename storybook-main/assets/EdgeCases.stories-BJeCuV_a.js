import{j as r}from"./iframe-BBHdjMJ6.js";import{R as l,b as p,a as n}from"./RadioButton-BuwceTKx.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CTb0lbe-.js";import{T as u}from"./Text--O-2RTYx.js";import{C as c}from"./Content-DD-AonWb.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dr_ijNQm.js";import"./index-DnL9UocU.js";import"./index-FWsSj9e8.js";import"./ColumnLayout-VfEmg6ek.js";import"./useFieldComponent-DcHfvLKR.js";import"./utils-gePwv3Li.js";import"./useMakeFocusable-DtUBRIYm.js";import"./RadioGroup-DCdO6NqB.js";import"./FieldError-D_l7_28D.js";import"./Text-CkngT02A.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Dur_LiI2.js";import"./useLabel-CDbjeNSC.js";import"./Label-Cq91lcPj.js";import"./Hidden-DJEpRFXv.js";import"./SelectionIndicator-DJhqJXB-.js";import"./useFormValidation-jj6Fwru_.js";import"./useFocus-CRClO8Jv.js";import"./useFocusRing-ClLYF0Wy.js";import"./useControlledState-CTrYQ-In.js";import"./FocusScope-0pM5bnV4.js";import"./context-XjgBcoVm.js";import"./useFormReset-CMCffA9I.js";import"./usePress-BicAkDgM.js";import"./useFocusable-CfkxnlZA.js";import"./VisuallyHidden-D-7oSl-x.js";import"./IconWarning-CyXtdbqA.js";import"./remote-BykRkK4-.js";import"./Label-D4z-eNsD.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BwLVFU66.js";import"./FieldError-DdPPmb_Z.js";import"./AlertText-Du4ye3-W.js";import"./AlertIcon-BGgK2Oqf.js";import"./browser-BpCzgQab.js";import"./EmulatedBoldText-DKBJ0QzH.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

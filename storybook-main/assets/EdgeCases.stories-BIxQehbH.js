import{j as r}from"./iframe-BLisfkW1.js";import{R as l,a as p}from"./Radio-Cv6B-g1u.js";import{R as n}from"./RadioButton-DgT_Wtnn.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DGB43n3I.js";import{T as u}from"./Text-BzdTXRF7.js";import{C as c}from"./Content-B4EEZXPN.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DivMJame.js";import"./index-DOES4bKx.js";import"./index-CURFR8tK.js";import"./ColumnLayout-2i0lQ9Xe.js";import"./useFieldComponent-DG2srt-t.js";import"./utils-B2KexK2G.js";import"./useMakeFocusable-Coahnksm.js";import"./RadioGroup-B_bpkLLG.js";import"./FieldError-BmP7KZUf.js";import"./Text-CMQTkDl6.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-mlAsayVr.js";import"./useLabel-DktisoZ5.js";import"./Label-BayswAfQ.js";import"./Hidden-DTcX35LP.js";import"./SelectionIndicator-DkROylNb.js";import"./useFormValidation-BvwbNbVP.js";import"./useFocus-CasiJiIj.js";import"./useFocusRing-whNl8W73.js";import"./useControlledState-BzKS6zrg.js";import"./FocusScope-CH3eRbFP.js";import"./context-B09EtTwC.js";import"./useFormReset-fweVV-SC.js";import"./usePress-Bt2uh0Mh.js";import"./useFocusable-2bJXkpaN.js";import"./VisuallyHidden-y8IU71vp.js";import"./IconWarning-Chxh05Fa.js";import"./remote-fMZF2a4s.js";import"./Label-C4q0QTf_.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-vseb4VB2.js";import"./FieldError-ClH5zNHK.js";import"./AlertText-DXmhqwQY.js";import"./AlertIcon-BH2ywHIc.js";import"./browser-1YnzmFhG.js";import"./EmulatedBoldText-w1zEViUr.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-DiUxw81Q.js";import{R as l,a as p}from"./Radio-D72oni4T.js";import{R as n}from"./RadioButton-8GHZS8_g.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-C7BQPmLu.js";import{T as u}from"./Text-CMit6jNZ.js";import{C as c}from"./Content-NnbREJEj.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Doi79f5D.js";import"./index-DoB8i5PX.js";import"./index-2ROVwQvu.js";import"./ColumnLayout-CZcraziS.js";import"./useFieldComponent-BFiXxBQU.js";import"./utils-BhADjK-H.js";import"./useMakeFocusable-C0LM-TxG.js";import"./RadioGroup-Cbxj_Fjd.js";import"./FieldError-BKME6Hw5.js";import"./Text-CUd3ZjBr.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-kW4DkkVS.js";import"./useLabel-yn1VwYEU.js";import"./Label-Dt69EWuh.js";import"./Hidden-YWjhfZDI.js";import"./SelectionIndicator-BsyJ81fY.js";import"./useFormValidation-CsqhaN7Y.js";import"./useFocus-DSwjHrh5.js";import"./useFocusRing-BpbrWv_K.js";import"./useControlledState-DDLUXLOw.js";import"./FocusScope-moHWWkwF.js";import"./context-si8TSn1j.js";import"./useFormReset-Cz-LaBzR.js";import"./usePress-I-WC2YFt.js";import"./useFocusable-bbwyacvB.js";import"./VisuallyHidden-Bb1j3rfU.js";import"./IconWarning-DJftz4M-.js";import"./remote-dRe2-fx5.js";import"./Label-DpHnEhHE.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CjhcHHQc.js";import"./FieldError-DH3i7Cba.js";import"./AlertText-3B66Ly-F.js";import"./AlertIcon-C_aBYmlN.js";import"./browser-DhblGL2Q.js";import"./EmulatedBoldText-WmP9Wm83.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

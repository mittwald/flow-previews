import{j as r}from"./iframe-Cbm1tYQ5.js";import{R as l,a as p}from"./Radio-iEYTtJf3.js";import{R as n}from"./RadioButton-Bh-vBXwS.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CNHi--z_.js";import{T as u}from"./Text-K6yu7K7n.js";import{C as c}from"./Content-Bz7pLqo2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BdgFVdCI.js";import"./index-DnzctHoT.js";import"./index-cwYx15Z_.js";import"./ColumnLayout-MK4K5M_D.js";import"./useFieldComponent-BRiGBo1N.js";import"./utils-CwSfACxU.js";import"./useMakeFocusable-C4XeOx_r.js";import"./RadioGroup-CLF8O-kT.js";import"./FieldError-b__4rZn4.js";import"./Text-CRfwxtsq.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DE723K-l.js";import"./useLabel-BhJmZsby.js";import"./Label-z3gRbOqe.js";import"./Hidden-Ct3-vkmZ.js";import"./SelectionIndicator-oJF9tjaE.js";import"./useFormValidation-SL6QRRh_.js";import"./useFocus-DGTwh-gS.js";import"./useFocusRing-2ds-u5nI.js";import"./useControlledState-CcdBsJdv.js";import"./FocusScope-BGzNCZ_B.js";import"./context-CpUEkiXT.js";import"./useFormReset-DovDq4jf.js";import"./usePress-D-cWxohr.js";import"./useFocusable-DfxkJnS0.js";import"./VisuallyHidden--ZEPdGNY.js";import"./IconWarning-HRESMERf.js";import"./remote-CNywZcFz.js";import"./Label-C1u7fixG.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DOOHcy82.js";import"./FieldError-DdEKXl5v.js";import"./AlertText-JWgofNcm.js";import"./AlertIcon-CDhVv57V.js";import"./browser-BO2LE4a1.js";import"./EmulatedBoldText-DOwlcjUH.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

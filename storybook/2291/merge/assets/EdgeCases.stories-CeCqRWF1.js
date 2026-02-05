import{j as r}from"./iframe-BL1IY_6V.js";import{R as l,a as p}from"./Radio-CWrYzo3h.js";import{R as n}from"./RadioButton-LDSXENzT.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CUp7BJrP.js";import{T as u}from"./Text-BSlhLkmN.js";import{C as c}from"./Content-DMus_IIg.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C0J7Ul52.js";import"./index-DIrmHlIA.js";import"./index-Cr6jOlTO.js";import"./ColumnLayout-Z6rNe4Ir.js";import"./useFieldComponent-oZ5IqIdY.js";import"./utils-GyL2rjZN.js";import"./useMakeFocusable-Dv_qirCt.js";import"./RadioGroup-BeDUCU2r.js";import"./FieldError-CCCCRqJ9.js";import"./Text-B4yGITBG.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Ca3ASx7C.js";import"./useLabel-CyH2amP0.js";import"./Label-StE6sPfa.js";import"./Hidden-B9Rk5_3H.js";import"./SelectionIndicator-Dec13xxT.js";import"./useFormValidation-DCrH4OQY.js";import"./useFocus-D7_v9YO6.js";import"./useFocusRing-DEMWgzWY.js";import"./useControlledState-CA6yhcg7.js";import"./FocusScope-B7aMt2fO.js";import"./context-BeO7KH58.js";import"./useFormReset-C4J5P-lS.js";import"./usePress-CxRwZ9-L.js";import"./useFocusable-CUtc6O_Q.js";import"./VisuallyHidden-CgqIxBlU.js";import"./IconWarning-BTI7YBWG.js";import"./remote-BuZW91cH.js";import"./Label-8Io_X3px.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-QSIAvPJu.js";import"./FieldError-D0yWaYHs.js";import"./AlertText-BDrbtAj0.js";import"./AlertIcon-B2R_BHtC.js";import"./browser-DogRo3Wh.js";import"./EmulatedBoldText-UtdvjbkN.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

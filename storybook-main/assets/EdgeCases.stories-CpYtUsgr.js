import{j as r}from"./iframe-DCk1dltx.js";import{R as l,a as p}from"./Radio-CrnOgayy.js";import{R as n}from"./RadioButton--1rA_LEN.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-joHH4LaM.js";import{T as u}from"./Text-BrHbgyhX.js";import{C as c}from"./Content-DQaVAFu_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-T1oQuQvq.js";import"./index-Cq8zlQrR.js";import"./index-CPFdYWIc.js";import"./ColumnLayout-CpLZooOU.js";import"./useFieldComponent-DRONwAvB.js";import"./utils-dLBbTpD9.js";import"./useMakeFocusable-2sTaiVrN.js";import"./RadioGroup-CUPYk5tY.js";import"./FieldError-BprKDa8q.js";import"./Text-PmoJdoY5.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DaC80i58.js";import"./useLabel-DUKklMlK.js";import"./Label-D8gqX69D.js";import"./Hidden-DtfyHh-u.js";import"./SelectionIndicator-kCh5PEOZ.js";import"./useFormValidation-BQhs4ME7.js";import"./useFocus-Dg1ABCcr.js";import"./useFocusRing-CTkZzC5s.js";import"./useControlledState-8RsR_43b.js";import"./FocusScope-5MRFtdj_.js";import"./context-Dv1e9MPf.js";import"./useFormReset-BYlFqKoc.js";import"./usePress-BwKHWgOu.js";import"./useFocusable-CjQRw48Z.js";import"./VisuallyHidden-DsX3-BDW.js";import"./IconWarning-Dty0OPVS.js";import"./remote-DvlevvD7.js";import"./Label-CoyrnT1D.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-leVAnmF6.js";import"./FieldError-CH94tTsu.js";import"./AlertText-YVWNWcKU.js";import"./AlertIcon-fe496zUR.js";import"./browser-CviVsCbd.js";import"./EmulatedBoldText-BGXSZcaq.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

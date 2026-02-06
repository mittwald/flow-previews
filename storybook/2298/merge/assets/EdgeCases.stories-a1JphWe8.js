import{j as r}from"./iframe-Cs0JkT9Q.js";import{R as l,a as p}from"./Radio-BmClWnvK.js";import{R as n}from"./RadioButton-DUUbRjRy.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-BqW2c8lJ.js";import{T as u}from"./Text-l9LtklMs.js";import{C as c}from"./Content-CFjwqDHH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DnhH9c8U.js";import"./index-CF0rrQKO.js";import"./index-BDmaB34G.js";import"./ColumnLayout-ix96Nkmw.js";import"./useFieldComponent-BGOnrhQA.js";import"./utils-BvIIGzqK.js";import"./useMakeFocusable-3O9OP7eh.js";import"./RadioGroup-Bmdw4-Ow.js";import"./FieldError-zGZXG0KM.js";import"./Text-Dd1xy9_M.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-D-8VlTBZ.js";import"./useLabel-CfslMsP4.js";import"./Label-CQSgfv4f.js";import"./Hidden-BvtrxWwl.js";import"./SelectionIndicator-36GmvFRO.js";import"./useFormValidation-CaaIEsuY.js";import"./useFocus-DNqIDWYA.js";import"./useFocusRing-Cldy4Slr.js";import"./useControlledState-DrKGwN1m.js";import"./FocusScope-BXTpAFiu.js";import"./context-CtFpEE6p.js";import"./useFormReset-5IC1Q0ld.js";import"./usePress-y02TS-RC.js";import"./useFocusable-Cn5DQ2tI.js";import"./VisuallyHidden-BGmnCuXu.js";import"./IconWarning-wVjX2Q6D.js";import"./remote-bYaNzVPL.js";import"./Label-CHxievOH.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CQ-MJvxZ.js";import"./FieldError-BZN8rJUk.js";import"./AlertText-BA7qstOH.js";import"./AlertIcon-Dko-1oCR.js";import"./browser-Cphwy2_f.js";import"./EmulatedBoldText-C1XQaUUR.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-4vGjmvQN.js";import{R as l,b as p,a as n}from"./RadioButton-DygAyfUq.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-7-9GrRP9.js";import{T as u}from"./Text-D_m0UGXp.js";import{C as c}from"./Content-Drd5qEGz.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BTnwUX2e.js";import"./index-DFF4TtWB.js";import"./index--XKY9bK1.js";import"./ColumnLayout-CjfSDjxZ.js";import"./useFieldComponent-diqFBc0H.js";import"./utils-Cb3SeWCs.js";import"./useMakeFocusable-Fz4aUxTJ.js";import"./RadioGroup-B1tXmyYL.js";import"./FieldError-D1JCdJnN.js";import"./Text-DO-ESRpi.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-Bf7p1I1W.js";import"./useLabel-Dy2_qp8M.js";import"./Label-DRFrGBxg.js";import"./Hidden-DKOWGOBv.js";import"./SelectionIndicator-Cti1f0QF.js";import"./useFormValidation-BrUcW_b7.js";import"./useFocus-BGpJf3EA.js";import"./useControlledState-wPwtFL3G.js";import"./FocusScope-Blxz7JIY.js";import"./useFocusRing-ctZhab72.js";import"./context-Cugfl_gO.js";import"./useFormReset-BZ0fN7tZ.js";import"./usePress-SP29s-a6.js";import"./useFocusable-BvBcbeR1.js";import"./VisuallyHidden-C3YQx9t_.js";import"./IconWarning-CMo0ZXSb.js";import"./remote-BMVFgzCt.js";import"./Label-C8vmJ-_M.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-Ci5i2g9p.js";import"./FieldError-ZzdG0j41.js";import"./browser-BLim8y6B.js";import"./EmulatedBoldText-DOuKha2y.js";const er={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

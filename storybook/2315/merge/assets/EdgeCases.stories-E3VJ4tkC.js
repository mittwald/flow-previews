import{j as r}from"./iframe-BKpTcuej.js";import{R as l,a as p}from"./Radio-xNxjudvE.js";import{R as n}from"./RadioButton-C5cms7vE.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-B9aMg-mL.js";import{T as u}from"./Text-ChzZQXaT.js";import{C as c}from"./Content-BGbMzshL.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DoYqiHFv.js";import"./index-Dp43xhBx.js";import"./index-DwEhfHus.js";import"./ColumnLayout-H0xdtsX3.js";import"./useFieldComponent-AXq55mny.js";import"./utils-BuTqHWUg.js";import"./useMakeFocusable-Cy4wN83A.js";import"./RadioGroup-Z6YPzqOw.js";import"./FieldError-Bf7-_15k.js";import"./Text-_5F14b0c.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-fml-60gz.js";import"./useLabel-CLAZgdhb.js";import"./Label--Zf6jHty.js";import"./Hidden-B0ayokwD.js";import"./SelectionIndicator-CKzMTdaQ.js";import"./useFormValidation-6yUCZE8C.js";import"./useFocus-C4QXJ0i2.js";import"./useFocusRing-CL2qG9Ti.js";import"./useControlledState-C61mrJlx.js";import"./FocusScope-CaneGuiO.js";import"./context-Bt___W0l.js";import"./useFormReset-DjxTrJRS.js";import"./usePress-BwvZqs_N.js";import"./useFocusable-8gC31DNg.js";import"./VisuallyHidden-DjSqpFWl.js";import"./IconWarning-8R3XoFcV.js";import"./remote-nPMBb6wO.js";import"./Label-sjxWv79d.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BpUbvorC.js";import"./FieldError-BmJ7-crS.js";import"./AlertText-NjffNB6y.js";import"./AlertIcon-BxMTL622.js";import"./browser-DdR_cYXU.js";import"./EmulatedBoldText-DTp9riJA.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

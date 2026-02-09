import{j as r}from"./iframe-XxUhdOIM.js";import{R as l,a as p}from"./Radio-fpADupBq.js";import{R as n}from"./RadioButton-D-W6JQLs.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CZ9lxgOt.js";import{T as u}from"./Text-Cnwgd4MT.js";import{C as c}from"./Content-CP92qo3p.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CoC0P7KZ.js";import"./index-CHNtIY8f.js";import"./index-BSqFjc_t.js";import"./ColumnLayout-BYlEVS__.js";import"./useFieldComponent-DmQ0NGCO.js";import"./utils-BCq0Cvc3.js";import"./useMakeFocusable-DQ58jF_W.js";import"./RadioGroup-1npHvgfX.js";import"./FieldError-D3qoIyxA.js";import"./Text-CyqmbAxA.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-COPMshHH.js";import"./useLabel-BmkrUKzN.js";import"./Label-ChQ-hUoB.js";import"./Hidden-Bb8MHfhN.js";import"./SelectionIndicator-BvCJtDxS.js";import"./useFormValidation-nWIFBTgB.js";import"./useFocus-EZLK-muK.js";import"./useFocusRing-B4cqEnOC.js";import"./useControlledState-BjbUFAiJ.js";import"./FocusScope-Bd3CxSOo.js";import"./context-DoTCerLu.js";import"./useFormReset-CjY5_fDt.js";import"./usePress-C6bNQEHg.js";import"./useFocusable-BMaOCfpv.js";import"./VisuallyHidden-BH7c3L8h.js";import"./IconWarning-HmbpUhBv.js";import"./remote-6r6BNiZ9.js";import"./Label-C4UQ1ENb.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-C41xTvax.js";import"./FieldError-DsyIPYpb.js";import"./AlertText-D9H4kctD.js";import"./AlertIcon-B-eIAqAY.js";import"./browser-DmOXQPuo.js";import"./EmulatedBoldText-p9aRLsBg.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

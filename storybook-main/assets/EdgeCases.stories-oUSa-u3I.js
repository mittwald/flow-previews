import{j as r}from"./iframe-Q1VSciNm.js";import{R as l,b as p,a as n}from"./RadioButton-BImjY9r3.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-D-beiclF.js";import{T as u}from"./Text-1lLVDQct.js";import{C as c}from"./Content-D4uw9QMQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CPW7r7fk.js";import"./index-CfXDE0zj.js";import"./index-C3b6LhZY.js";import"./ColumnLayout-DuRoXoyo.js";import"./useFieldComponent-1pDy4PKz.js";import"./utils-Cfx54F97.js";import"./useMakeFocusable-DjYWrOdV.js";import"./RadioGroup-Cut_3elK.js";import"./FieldError-QjdNZ-FN.js";import"./Text-FwHfWGj4.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-rX7Gw7MM.js";import"./useLabel-B4QM81Mz.js";import"./Label-DHpNBk6c.js";import"./Hidden-XjRrgtIh.js";import"./SelectionIndicator-BJwzvmKN.js";import"./useFormValidation-DIYVKRGL.js";import"./useFocus-Dgy1zF73.js";import"./useControlledState-Cr50bzxN.js";import"./FocusScope-BLxdUf1u.js";import"./useFocusRing-oK86YNHq.js";import"./context-BLO98TmC.js";import"./useFormReset-C0YD-aRq.js";import"./usePress-CkY15rDX.js";import"./useFocusable-BFiW_6Mc.js";import"./VisuallyHidden-btJzxMJm.js";import"./IconWarning-Bp2wXPUs.js";import"./remote-B8jFwJ6r.js";import"./Label-CSNGUTYQ.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CLD0dVJV.js";import"./FieldError-RY9dMzjY.js";import"./AlertText-D1OEnaPR.js";import"./AlertIcon-C25ddq9s.js";import"./browser-DUAAaQNQ.js";import"./EmulatedBoldText-Bq17Dbi4.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-olJof__V.js";import{R as l,a as p}from"./Radio-pXTFSSoo.js";import{R as n}from"./RadioButton-G0LqzDNw.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DPKUlnOD.js";import{T as u}from"./Text-Dd-S15-B.js";import{C as c}from"./Content-BTv2gojb.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CoGNni0d.js";import"./index-DXuGOHKQ.js";import"./index-CQizCcaV.js";import"./ColumnLayout-BPvI-4gN.js";import"./useFieldComponent-BI2nSVzd.js";import"./utils-B7tchdhx.js";import"./useMakeFocusable-B2LuhDHE.js";import"./RadioGroup-CbhhHe1q.js";import"./FieldError-kWwHEGnK.js";import"./Text-PinZmeRI.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-C73O4P0Z.js";import"./useLabel-CtYRRhYq.js";import"./Label-DdZBH8rR.js";import"./Hidden-DoUj_dUj.js";import"./SelectionIndicator-D2HcZFFA.js";import"./useFormValidation-D5cIPr0y.js";import"./useFocus-C7qSpl6p.js";import"./useFocusRing-D32aTWMq.js";import"./useControlledState-CGGJ5ydn.js";import"./FocusScope-Db9L4ciT.js";import"./context-DOTF4vQp.js";import"./useFormReset-BYGWiUrU.js";import"./usePress-UZLq5kUQ.js";import"./useFocusable-3WtiVhvt.js";import"./VisuallyHidden-D0VqbVmf.js";import"./IconWarning-Dxqo3db7.js";import"./remote-BFSWQwUW.js";import"./Label-6dyeRQav.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DTXdFjR3.js";import"./FieldError-l4UC5eIi.js";import"./AlertText-DHxSCH5W.js";import"./AlertIcon-DL26tbpe.js";import"./browser-IACFT9IC.js";import"./EmulatedBoldText-BFx3xjvZ.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

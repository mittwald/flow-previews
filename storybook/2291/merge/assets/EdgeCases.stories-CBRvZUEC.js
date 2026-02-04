import{j as r}from"./iframe-BrRYKFNZ.js";import{R as l,a as p}from"./Radio-OnSJi4Kv.js";import{R as n}from"./RadioButton-DSa-1V53.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DRD5ZO5l.js";import{T as u}from"./Text-BQhotjr-.js";import{C as c}from"./Content-C6y28tdy.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D6MOqeSY.js";import"./index-Bwdm-eaA.js";import"./index--DYCSdQe.js";import"./ColumnLayout-D3bQCjP2.js";import"./useFieldComponent-D0nvFHA9.js";import"./utils-B1YhIU5r.js";import"./useMakeFocusable-BtUzaHNU.js";import"./RadioGroup-C50x5PpS.js";import"./FieldError-DMOv5TcV.js";import"./Text-C7DedtDs.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-C0F-7ONn.js";import"./useLabel-B8Txg4ii.js";import"./Label-D0rlaIi3.js";import"./Hidden-CpB89dfv.js";import"./SelectionIndicator-DkMRnaGM.js";import"./useFormValidation-vznVoA4Z.js";import"./useFocus-Br7iUm-k.js";import"./useFocusRing-DN4mDdXp.js";import"./useControlledState-BbGuTZMM.js";import"./FocusScope-C9Un_YW5.js";import"./context-CNZG124A.js";import"./useFormReset-9TaX9dD_.js";import"./usePress-fw0Lqzwn.js";import"./useFocusable-NfSEA2Af.js";import"./VisuallyHidden-VjzJwiBh.js";import"./IconWarning-BeyOYKIy.js";import"./remote-CSM401Gb.js";import"./Label-16dSI6nY.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BGu-vUkX.js";import"./FieldError-Ce69irxX.js";import"./AlertText-CUhcwM6U.js";import"./AlertIcon-B-O3oopm.js";import"./browser-rpb3JyGK.js";import"./EmulatedBoldText-DCPr9fyi.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

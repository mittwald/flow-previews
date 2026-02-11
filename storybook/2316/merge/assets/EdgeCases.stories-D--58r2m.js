import{j as r}from"./iframe-BBLgQM8W.js";import{R as l,a as p}from"./Radio-B-iuM5zH.js";import{R as n}from"./RadioButton-VX620k5t.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-BIpC1L-r.js";import{T as u}from"./Text-DyzGue3k.js";import{C as c}from"./Content-BVt5oRT8.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D-0ABlaS.js";import"./index-DIoQv3Yu.js";import"./index-CC4aSS2B.js";import"./ColumnLayout-Da6dv-pL.js";import"./useFieldComponent-BfDJ4pJf.js";import"./utils-Bzwl2RbX.js";import"./useMakeFocusable-DHFk8gCs.js";import"./RadioGroup-DFNZdgI0.js";import"./FieldError-CxkPyMXc.js";import"./Text-C-vmddAy.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-WOMIl9aS.js";import"./useLabel-65Ti_lew.js";import"./Label-DjOsKLLo.js";import"./Hidden-CcHv8P9l.js";import"./SelectionIndicator-CxHxHFYG.js";import"./useFormValidation-DAic1NnU.js";import"./useFocus-atMo-T8H.js";import"./useFocusRing-XNEcT-2-.js";import"./useControlledState-Cx-WZngS.js";import"./FocusScope-BuBo0u5V.js";import"./context-CbfWsJFN.js";import"./useFormReset-4n7xFzn-.js";import"./usePress-DXblhpXj.js";import"./useFocusable-BlOp3ek5.js";import"./VisuallyHidden-DReBsRIr.js";import"./IconWarning-CmmOPW6y.js";import"./remote-Vne7hGXH.js";import"./Label-BQdcxq0o.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-ndUPvi50.js";import"./FieldError-DAXPSsyp.js";import"./AlertText-B4ActtEe.js";import"./AlertIcon-CiXM2S_P.js";import"./browser-DI7yhJk5.js";import"./EmulatedBoldText-BZaUBYn6.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

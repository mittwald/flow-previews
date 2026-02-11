import{j as r}from"./iframe-BnHQGzj-.js";import{R as l,a as p}from"./Radio-BisK-Kv3.js";import{R as n}from"./RadioButton-BV2_zoiR.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-Dg2e1oyl.js";import{T as u}from"./Text-BWqTdGF3.js";import{C as c}from"./Content-CsNbWnd_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B3zgfniW.js";import"./index-B4eSx5RY.js";import"./index-CR3_Geu_.js";import"./ColumnLayout-dkwrOEv0.js";import"./useFieldComponent-BKOZgMTQ.js";import"./utils-B_drgFmA.js";import"./useMakeFocusable-BYAczGGo.js";import"./RadioGroup-YVtRIfBB.js";import"./FieldError-CfhVGgFS.js";import"./Text-CP9lFNhL.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-B5QWBDfx.js";import"./useLabel-DpMFroVF.js";import"./Label-C4kylnhO.js";import"./Hidden-DGNiPayS.js";import"./SelectionIndicator-Bje3agQK.js";import"./useFormValidation-CJa5Pm36.js";import"./useFocus-BQLqug8q.js";import"./useFocusRing-BtYlF30D.js";import"./useControlledState-ARGAgX5I.js";import"./FocusScope-BV-dArZv.js";import"./context-oT0KmQcZ.js";import"./useFormReset-C2cP98Fi.js";import"./usePress-DW43gzrd.js";import"./useFocusable-CpiznpYH.js";import"./VisuallyHidden-DN_pHWhj.js";import"./IconWarning-BD5ZgLZv.js";import"./remote-DzOTiMGq.js";import"./Label-u3CIBBS-.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DfUxbFDU.js";import"./FieldError-hA7hA6sK.js";import"./AlertText-BSsMj9jl.js";import"./AlertIcon-cpK7-VlX.js";import"./browser-Byd_T3zS.js";import"./EmulatedBoldText-B2gQbs-b.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

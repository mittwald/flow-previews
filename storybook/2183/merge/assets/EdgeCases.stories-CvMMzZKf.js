import{j as r}from"./iframe-BJ1-yygM.js";import{R as l,a as p}from"./Radio-8j3or9y8.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-oFJ99t1I.js";import{T as u}from"./Text-DheJl8Kj.js";import{C as c}from"./Content-CFpBjhPg.js";import{R as n}from"./RadioButton-BBsah8dx.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DQ1h1TR6.js";import"./index-Du7YS11i.js";import"./index-BJaBKPR5.js";import"./ColumnLayout-DGPcQavZ.js";import"./useFieldComponent-CZz1dHQJ.js";import"./utils-CcDDSJ_p.js";import"./useMakeFocusable-lpb2m21M.js";import"./RadioGroup-b2z7MKNt.js";import"./FieldError-6-KO0iYn.js";import"./Text-CgGmMVxG.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-BhOz7HsW.js";import"./useLabel-C_0uKhPF.js";import"./Label-CzmfrLRz.js";import"./Hidden-DoQenIIt.js";import"./SelectionIndicator-OOMR3Qmo.js";import"./useFormValidation-tUUfdeof.js";import"./useFocus-BC8nQK7S.js";import"./useControlledState-CbxGCAex.js";import"./FocusScope-CXPBJiEJ.js";import"./useFocusRing-D91RCqts.js";import"./context-CjOncL0b.js";import"./useFormReset-DyV6pE3E.js";import"./usePress-DqKRozC0.js";import"./useFocusable-CM2LayHg.js";import"./VisuallyHidden-BOLsTiDm.js";import"./IconChevronDown-CrWkAVaz.js";import"./remote-CmT8aojC.js";import"./IconRadioOn-D_-o6G0t.js";import"./Label-bQxZtSdp.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-C5JOLvkZ.js";import"./FieldError-lhJwSH7g.js";import"./IconDanger-CYKvK3jT.js";import"./browser-DT5Kx7EO.js";import"./EmulatedBoldText-DCklMUI5.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

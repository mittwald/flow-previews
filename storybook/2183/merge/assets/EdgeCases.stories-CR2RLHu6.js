import{j as r}from"./iframe-B7RREkGu.js";import{R as l,a as p}from"./Radio-CyMouLCJ.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DQ8t7jVG.js";import{T as u}from"./Text-DoQtsqjx.js";import{C as c}from"./Content-BjjUnL1J.js";import{R as n}from"./RadioButton-BY2D4m_J.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Ck0proso.js";import"./index-DRk3fGOo.js";import"./index-C8g7-GlJ.js";import"./ColumnLayout-DqIL_Jjc.js";import"./useFieldComponent-B2EVEjTj.js";import"./utils-IlafnyMI.js";import"./useMakeFocusable-BbdbRYQu.js";import"./RadioGroup-oIdipgEW.js";import"./FieldError-C0DtTLwc.js";import"./Text-CPOpiDMW.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-C5YY3R3J.js";import"./useLabel-Br_94_1T.js";import"./Label-B5AW6xg7.js";import"./Hidden-zIyTGZgm.js";import"./SelectionIndicator-BAdp0X2f.js";import"./useFormValidation-CU0n9v2w.js";import"./useFocus-BaUOkNoz.js";import"./useControlledState-CfgggjdY.js";import"./FocusScope-BWn7UZVq.js";import"./useFocusRing-BOQTp4b_.js";import"./context-Bh5Je-Bl.js";import"./useFormReset-OFQGg9Qq.js";import"./usePress-C4dOiegp.js";import"./useFocusable-BSgkjvKf.js";import"./VisuallyHidden-BevTIdSp.js";import"./IconChevronDown-D-2czTjO.js";import"./remote-Ba-TbkWY.js";import"./IconRadioOn-xa25KhDQ.js";import"./Label-DJkUDzdc.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DPy56mLw.js";import"./FieldError-CukmHJnZ.js";import"./IconDanger-DT-iZjBY.js";import"./browser-DkVC7uJT.js";import"./EmulatedBoldText-Coo_6hrl.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

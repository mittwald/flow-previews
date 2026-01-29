import{j as r}from"./iframe-B9oS1eAm.js";import{R as l,b as p,a as n}from"./RadioButton-CQlTzOo4.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-D1R1B7eH.js";import{T as u}from"./Text-D9DZPtYx.js";import{C as c}from"./Content-BYVWNdIq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B6AWm4S8.js";import"./index-HAVMN3jx.js";import"./index-CYuWkd4j.js";import"./ColumnLayout-BgKG0lrn.js";import"./useFieldComponent-BBgwgWHq.js";import"./utils-CkbQ6lDO.js";import"./useMakeFocusable-BMS2gRtA.js";import"./RadioGroup-DBPTqVHY.js";import"./FieldError-Dfuql1HI.js";import"./Text-DSVxOKBO.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DFtxLsB8.js";import"./useLabel-CLQlKL9C.js";import"./Label-DH9184nb.js";import"./Hidden-BXVpGb-m.js";import"./SelectionIndicator-CiC6xaeC.js";import"./useFormValidation-pe71fieX.js";import"./useFocus-BUMqhqrN.js";import"./useFocusRing-CD4YKl48.js";import"./useControlledState-BhPlyXsf.js";import"./FocusScope-BifOUh1d.js";import"./context-CSGUwiAp.js";import"./useFormReset-CfNbS0Tm.js";import"./usePress-CvAqmGGe.js";import"./useFocusable-DLbArD3q.js";import"./VisuallyHidden-D5FMvG_d.js";import"./IconWarning-CbErselp.js";import"./remote-B89JZTQ6.js";import"./Label-IJFVFDuP.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-Bpp7Jkjf.js";import"./FieldError-BkKW3wP7.js";import"./AlertText-D9s0hTSb.js";import"./AlertIcon-CyL6LR1b.js";import"./browser-DuZ3LDHb.js";import"./EmulatedBoldText-BYYx2Dxb.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

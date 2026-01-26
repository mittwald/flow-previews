import{j as r}from"./iframe-ICCBaEZ0.js";import{R as l,b as p,a as n}from"./RadioButton-DG1gIJqu.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-D-CVfV_g.js";import{T as u}from"./Text-wotACWdr.js";import{C as c}from"./Content-ByBqh0OQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BP2zunxu.js";import"./index-Bz_4mo81.js";import"./index-Dbcsq1pl.js";import"./ColumnLayout-B-kEP-Bk.js";import"./useFieldComponent-C2gLyH5u.js";import"./utils-Bdyed02U.js";import"./useMakeFocusable-1nTHUZwR.js";import"./RadioGroup-BAexjgDA.js";import"./FieldError-Uso8nKHu.js";import"./Text-6VRpzXYD.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-Dqb0_Mn-.js";import"./useLabel-CrekXyf_.js";import"./Label-AJl99fin.js";import"./Hidden-DZAoEMIQ.js";import"./SelectionIndicator-6JK-VVYS.js";import"./useFormValidation-BK0HiA-u.js";import"./useFocus-sIQn0Mmu.js";import"./useControlledState-0-xiytms.js";import"./FocusScope-BgxYME-V.js";import"./useFocusRing-C-l0oxpd.js";import"./context-BA_6GkxW.js";import"./useFormReset-mc9YwuWr.js";import"./usePress-Bkx3Up2v.js";import"./useFocusable-Da3kr2d3.js";import"./VisuallyHidden-CIUq3upT.js";import"./IconWarning-DNTau7lk.js";import"./remote-CrBsxa38.js";import"./Label-CdS4JTo9.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CSoJHnbm.js";import"./FieldError-CXiPiawI.js";import"./AlertText-CQRiaMTC.js";import"./AlertIcon-DVbl3jDT.js";import"./browser-BXZux_wF.js";import"./EmulatedBoldText-CJhsU2oU.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

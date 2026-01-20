import{j as r}from"./iframe-BB26x0WO.js";import{R as l,b as p,a as n}from"./RadioButton-CgHyPlbw.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-I1fEzBAB.js";import{T as u}from"./Text-CVJJy1PS.js";import{C as c}from"./Content-stq0oOLC.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-hUu8AB53.js";import"./index-DcuZ1z3T.js";import"./index-CQcoQf9d.js";import"./ColumnLayout-CioSlYbt.js";import"./useFieldComponent-uqIFFsha.js";import"./utils-B0cjT-cu.js";import"./useMakeFocusable-Dhhf5WXZ.js";import"./RadioGroup-9m0NhzB0.js";import"./FieldError-BdEQwJOQ.js";import"./Text-C-QQ-f-7.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-D-p_8RL3.js";import"./useLabel-CXkgZKB9.js";import"./Label-xrwNKiTo.js";import"./Hidden-Pwu5MO4E.js";import"./SelectionIndicator-eJ3IiPq5.js";import"./useFormValidation-CSSQUpRU.js";import"./useFocus-BTahgc6b.js";import"./useControlledState-Bi3RtZ50.js";import"./FocusScope-CBDPVkwa.js";import"./useFocusRing-3NylsfEU.js";import"./context-CFwMSK2D.js";import"./useFormReset-DftD3Tx4.js";import"./usePress-DgIl3AW_.js";import"./useFocusable-BCoGMlTE.js";import"./VisuallyHidden-GAE_mByz.js";import"./IconWarning-xtBRgQwR.js";import"./remote-BOIRgCVv.js";import"./Label-Dkznuq9f.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-C6TuZupA.js";import"./FieldError-EbPb3FIT.js";import"./AlertText-By5Jrr-P.js";import"./AlertIcon-8w60vasN.js";import"./browser-CM4yKXDn.js";import"./EmulatedBoldText-BMfkuJfp.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

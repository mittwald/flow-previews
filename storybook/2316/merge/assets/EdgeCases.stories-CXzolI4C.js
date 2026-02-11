import{j as r}from"./iframe-B___tkgA.js";import{R as l,a as p}from"./Radio-Cv7g2WD5.js";import{R as n}from"./RadioButton-jP8B2F_c.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CxHX8LF5.js";import{T as u}from"./Text-C5KW7r-3.js";import{C as c}from"./Content-C2QasWMk.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Bo9LBx3J.js";import"./index-CJe1Xv2T.js";import"./index-2yYueaxI.js";import"./ColumnLayout-OcaXHk7e.js";import"./useFieldComponent-vfbWFIJK.js";import"./utils-BoKG2kRw.js";import"./useMakeFocusable-EEa4YC-c.js";import"./RadioGroup-C6-pZtvo.js";import"./FieldError-Bxvpebgp.js";import"./Text-CbxRuAhG.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Bd7gFKVi.js";import"./useLabel-CH6QmtjC.js";import"./Label-BwlZgh8W.js";import"./Hidden-DKsxRYjN.js";import"./SelectionIndicator-D7aQ_5Xi.js";import"./useFormValidation-DPy8gvTm.js";import"./useFocus-x-GTmi1B.js";import"./useFocusRing-BdE9QsVo.js";import"./useControlledState-xG-Gpz3Z.js";import"./FocusScope-6XhI78W1.js";import"./context-CHjly9N5.js";import"./useFormReset-BMzMnmaN.js";import"./usePress-XNzvlEPV.js";import"./useFocusable-DdN6L3mC.js";import"./VisuallyHidden-feej_kfu.js";import"./IconWarning-DnK3ATSm.js";import"./remote-CwYVL4Pl.js";import"./Label-WD9nd_On.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BO-JJMTJ.js";import"./FieldError-DrmvSGqW.js";import"./AlertText-BYyQ41f3.js";import"./AlertIcon-COjYyYJX.js";import"./browser-C6gsgKxf.js";import"./EmulatedBoldText-BcNjSABl.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

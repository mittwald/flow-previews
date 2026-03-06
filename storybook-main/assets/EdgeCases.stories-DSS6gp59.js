import{j as r}from"./iframe-CCG9iH9q.js";import{R as l,a as p}from"./Radio-BwBaPLSz.js";import{R as n}from"./RadioButton-DSPW124-.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-Dx_n8HR9.js";import{T as u}from"./Text-CqiRKP9V.js";import{C as c}from"./Content-CtXh-1sB.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DtMp-09u.js";import"./index-rcZGBqb0.js";import"./index-DO8RY2JU.js";import"./ColumnLayout-ByNS1VhW.js";import"./useFieldComponent-BO1aRG8J.js";import"./utils-BqjYSsY0.js";import"./useMakeFocusable-aEs1MUdl.js";import"./RadioGroup-Bg2znveO.js";import"./FieldError-IbwLA4qq.js";import"./Text-CsZp0s5y.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-CaeCkx3f.js";import"./useLabel-CWkbOtE9.js";import"./Label-Bqehi3yR.js";import"./Hidden-DP_c1-uJ.js";import"./SelectionIndicator-CG-R7p16.js";import"./useFormValidation-Jbp24I-0.js";import"./useFocus-DQtiJNjW.js";import"./useFocusRing-DEew3vp8.js";import"./useControlledState-DQCduMNG.js";import"./FocusScope-CGp51FRM.js";import"./context-BOE3Zx9s.js";import"./useFormReset-DOloisqU.js";import"./usePress-C9nCYq1D.js";import"./useFocusable-C9iBP5e4.js";import"./VisuallyHidden-B8BDvwZm.js";import"./IconWarning-CKuAFgzi.js";import"./remote-BNVNDlip.js";import"./Label-ZsZ9_LuX.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BayblNF2.js";import"./FieldError-C6WCZxmP.js";import"./AlertText-BBv4eV07.js";import"./AlertIcon-BWG972Pn.js";import"./browser-DlPLk6Tx.js";import"./EmulatedBoldText-DGQ67tbz.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-BO07bPAa.js";import{R as l,a as p}from"./Radio-DMG5l6Qh.js";import{R as n}from"./RadioButton-PFaC8d-g.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-B-MdKosX.js";import{T as u}from"./Text-CwdryKSs.js";import{C as c}from"./Content-CPqmSZez.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BaceyrB2.js";import"./index-CQGDGAsD.js";import"./index-C__iODou.js";import"./ColumnLayout-Dvp2IRlA.js";import"./useFieldComponent-B5uAaQ_H.js";import"./utils-DpF9Snp1.js";import"./useMakeFocusable-BK3Pcda2.js";import"./RadioGroup-DoeVo_10.js";import"./FieldError-cxGJZPY3.js";import"./Text-sIV6FVOB.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BBekzR8e.js";import"./useLabel-Dans5Mom.js";import"./Label-DlbijyYq.js";import"./Hidden-Bl2ixnRR.js";import"./SelectionIndicator-Dw6-XKp3.js";import"./useFormValidation-CRjEiOmE.js";import"./useFocus-ntzScLPi.js";import"./useFocusRing-DXebh_G-.js";import"./useControlledState-DyIed2bM.js";import"./FocusScope-BA1MxA3e.js";import"./context-DKHz4OX0.js";import"./useFormReset-D6_s6z9R.js";import"./usePress-UbwEnmrk.js";import"./useFocusable-C66-pRTt.js";import"./VisuallyHidden-DCYSiy07.js";import"./IconWarning-ClLv5I07.js";import"./remote-C9jEPRv0.js";import"./Label-D0Lhb5Vq.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CYJTPAtB.js";import"./FieldError-DlyPLChi.js";import"./AlertText-Ca5jxNB-.js";import"./AlertIcon-CagNIYo0.js";import"./browser-B0pBncgx.js";import"./EmulatedBoldText-Bl01c38V.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

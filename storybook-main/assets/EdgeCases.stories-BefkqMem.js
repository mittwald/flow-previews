import{j as r}from"./iframe-BTP_Z9Sf.js";import{R as l,a as p}from"./Radio-Cuj0Yowb.js";import{R as n}from"./RadioButton-BZ-KLjDK.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-ByA9aORE.js";import{T as u}from"./Text-Cq5MQ8wu.js";import{C as c}from"./Content-DuShwU-I.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DvBALJVI.js";import"./index-z_6Cto56.js";import"./index-E_qagHnK.js";import"./ColumnLayout-i44GqQxi.js";import"./useFieldComponent-Da-vFXDP.js";import"./utils-DP1LA6WE.js";import"./useMakeFocusable-Cta3vNsb.js";import"./RadioGroup-B5CcaDWY.js";import"./FieldError-BvNBTK6b.js";import"./Text-CZ1YR4oj.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BB65cxFE.js";import"./useLabel-Cpmi3JfU.js";import"./Label-PTTOxDPw.js";import"./Hidden-7cYXeHtZ.js";import"./SelectionIndicator-Dze6faSJ.js";import"./useFormValidation-HNZmieSP.js";import"./useFocus-BU1lOliM.js";import"./useFocusRing-CQvdF7rp.js";import"./useControlledState-B5h2rUtG.js";import"./FocusScope-B2nLTMyD.js";import"./context-BBaC2IfM.js";import"./useFormReset-Bo1Ib9da.js";import"./usePress-BnZLj0Nc.js";import"./useFocusable-Hlf8Yc9h.js";import"./VisuallyHidden-BWM4WxkJ.js";import"./IconWarning-CwZb39At.js";import"./remote-BmAp8UvO.js";import"./Label-Cu7NRaqa.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DvZZD1YW.js";import"./FieldError-DnUQcxCL.js";import"./AlertText-CSpjF2dw.js";import"./AlertIcon-BLTDYNdz.js";import"./browser-eyJ8FPIK.js";import"./EmulatedBoldText-BkuV9i5t.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

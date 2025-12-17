import{j as r}from"./iframe-CxIv4jMu.js";import{R as l,a as p}from"./Radio-FqCw8iVl.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-B5kO5hUY.js";import{T as u}from"./Text-D7X_oIFw.js";import{C as c}from"./Content-32e_RuVd.js";import{R as n}from"./RadioButton-jKBYzCHp.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-40FWo67L.js";import"./index-B5A5s8TF.js";import"./index-4jtxG-aw.js";import"./ColumnLayout-BvaoAxGP.js";import"./useFieldComponent-gOqU5qjG.js";import"./utils-BWuSdLWz.js";import"./useMakeFocusable-Cl5TyGvP.js";import"./RadioGroup-B5rhjQeu.js";import"./FieldError-B56fKNUE.js";import"./Text-C4fvncMS.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-48q0jMI2.js";import"./useLabel-hxWbe3_X.js";import"./Label-V3_Oag-T.js";import"./Hidden-BIUsGAI2.js";import"./SelectionIndicator-BuBcSB3l.js";import"./useFormValidation-NfxZ5VuI.js";import"./useFocus-ng3bQXxT.js";import"./useControlledState-BE-Fn8Ja.js";import"./FocusScope-D8y0iQpb.js";import"./useFocusRing-DX51MXuJ.js";import"./context-XT4iJWgw.js";import"./useFormReset-BBuG3pIa.js";import"./usePress-CUBbufY7.js";import"./useFocusable-BUu5DuL9.js";import"./VisuallyHidden-UJJZphkq.js";import"./IconApp-DXeuriH2.js";import"./remote-BuINZUdg.js";import"./IconRadioOn-hs1EzoHY.js";import"./Label-B_OvHsx4.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-B-qTbUOV.js";import"./FieldError-DD8s_Iuw.js";import"./IconDanger-WvpDQ4XT.js";import"./browser-mUCbKcee.js";import"./EmulatedBoldText-CtDmIXSm.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

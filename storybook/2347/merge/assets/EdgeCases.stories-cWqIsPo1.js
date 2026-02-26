import{j as r}from"./iframe-teIxY4wP.js";import{R as l,a as p}from"./Radio-B4sxFltx.js";import{R as n}from"./RadioButton-DAkJ-7Bu.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-PbfJwkTF.js";import{T as u}from"./Text-CB74-0Ir.js";import{C as c}from"./Content-C4FtWXhl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B3BP6Vj1.js";import"./index-Ctx6H3Hx.js";import"./index-SbFVnFKt.js";import"./ColumnLayout-BbHxHfco.js";import"./useFieldComponent-DaZL5efl.js";import"./utils-C8wUhSun.js";import"./useMakeFocusable-DRoIWUXq.js";import"./RadioGroup-BkpJU9vX.js";import"./FieldError-HPfFKZ-Z.js";import"./Text-BEd6-Qqe.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BrsNngNz.js";import"./useLabel-BwGc14jy.js";import"./Label-CnpPAxdS.js";import"./Hidden-CVxq3czE.js";import"./SelectionIndicator-DFQRQ6iO.js";import"./useFormValidation-CRVUVzjp.js";import"./useFocus-Pnl5w-Ue.js";import"./useFocusRing-DM5Gti31.js";import"./useControlledState-Dnjkc9fO.js";import"./FocusScope-Crjq_ymp.js";import"./context-Bkxu1haQ.js";import"./useFormReset-DcLCq2Kv.js";import"./usePress-Znh85jsw.js";import"./useFocusable-C4kMCM88.js";import"./VisuallyHidden-BEOGf6u-.js";import"./IconWarning-C8c-iA3p.js";import"./remote-DC3yMzFm.js";import"./Label-CKh72PTo.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-cjXC4-Kw.js";import"./FieldError-4X4kCiGy.js";import"./AlertText-B6Az6kDS.js";import"./AlertIcon-nbGMee0S.js";import"./browser-ClA0f7pc.js";import"./EmulatedBoldText-C0BZfzN3.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-CV15FJMl.js";import{R as l,b as p,a as n}from"./RadioButton-BGl8tf61.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-Cv-rr7OM.js";import{T as u}from"./Text-DO3jYkuR.js";import{C as c}from"./Content-CZMc6tho.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-zkKbLiwJ.js";import"./index-BdI4bZr-.js";import"./index-DgyS9CYh.js";import"./ColumnLayout-DeqwkqYu.js";import"./useFieldComponent-4syZJMEs.js";import"./utils-B45PgFGd.js";import"./useMakeFocusable-BV2Jg7A8.js";import"./RadioGroup-CdSWKtav.js";import"./FieldError-CDBleeuN.js";import"./Text-Bk0CAvR5.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-B5_Ftb3l.js";import"./useLabel-DgTpLYXb.js";import"./Label-DnBvsshm.js";import"./Hidden-DbKTPC62.js";import"./SelectionIndicator-C649Jmr0.js";import"./useFormValidation-rdndu8q5.js";import"./useFocus-C3kMSW21.js";import"./useFocusRing-CoS5ESqQ.js";import"./useControlledState-Br5i43rk.js";import"./FocusScope-Da56m84L.js";import"./context-Is67_JkX.js";import"./useFormReset-DQt01LcM.js";import"./usePress-C9ebI84m.js";import"./useFocusable-DenRoGzb.js";import"./VisuallyHidden-DJ3SqDe0.js";import"./IconWarning-CS7d0V5Y.js";import"./remote-BYNvJzFU.js";import"./Label-BYiN1vfD.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DhOUTddD.js";import"./FieldError-e14SOUTJ.js";import"./AlertText-Dryg6b6V.js";import"./AlertIcon-BZ2qa2OA.js";import"./browser-8BNXX35r.js";import"./EmulatedBoldText-CKJb5Byw.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

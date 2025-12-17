import{j as r}from"./iframe-CQakcPxy.js";import{R as l,a as p}from"./Radio-CBrJg9N5.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CX_IwL7S.js";import{T as u}from"./Text-BtxvTgzr.js";import{C as c}from"./Content-DNuv7GRL.js";import{R as n}from"./RadioButton-CIrYDhrs.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CGl7t6Dn.js";import"./index-p-QrdfBe.js";import"./index-Cea8xGLH.js";import"./ColumnLayout-D1CdZ0Iw.js";import"./useFieldComponent-7TLC4lNV.js";import"./utils-kpK_hrRV.js";import"./useMakeFocusable-Ut6psFk5.js";import"./RadioGroup-BlitdA0c.js";import"./FieldError-CB5plbtQ.js";import"./Text-C-10tsQv.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-Cw0lrebL.js";import"./useLabel-Bql10b_o.js";import"./Label-CTPlNXVy.js";import"./Hidden-BPFiveoH.js";import"./SelectionIndicator-vLsFNsIa.js";import"./useFormValidation-8JnUx94A.js";import"./useFocus-DdJNefAV.js";import"./useControlledState-BdjUlaE2.js";import"./FocusScope-Bt02kxJY.js";import"./useFocusRing-DLxPKRwM.js";import"./context-CTwP8X6y.js";import"./useFormReset-DCX2Qfen.js";import"./usePress-CTHZkDu6.js";import"./useFocusable-Da5l0bUG.js";import"./VisuallyHidden-B_I1UO8l.js";import"./IconChevronDown-DRX1rHio.js";import"./remote-DEFV7i-V.js";import"./IconRadioOn-BU8-4ZbJ.js";import"./Label-Bciz4GF2.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BjsiUt0Q.js";import"./FieldError-8S-oU2Os.js";import"./IconDanger-BPWM_X_l.js";import"./browser-n5THB09p.js";import"./EmulatedBoldText-BugEiGRa.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

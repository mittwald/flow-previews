import{j as r}from"./iframe-BUwXHbLV.js";import{R as l,a as p}from"./Radio-B7HWMTnG.js";import{R as n}from"./RadioButton-DZmGlYez.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-k9EHHAbd.js";import{T as u}from"./Text-DQHJUI0D.js";import{C as c}from"./Content-BB0aPxBH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BccdMpKE.js";import"./index-hu2bK8ld.js";import"./index-B1fishDV.js";import"./ColumnLayout-XNzxGCrF.js";import"./useFieldComponent-NdCAuKiZ.js";import"./utils-JDwP1GoF.js";import"./useMakeFocusable-CTFUZp5i.js";import"./RadioGroup-BJE8EV9q.js";import"./FieldError-DDJD7LnR.js";import"./Text-foJVwDWR.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-D0DN8V4Z.js";import"./useLabel-DcLR3Pis.js";import"./Label-DCpzAobK.js";import"./Hidden-C60b8p3I.js";import"./SelectionIndicator-CP3BVA3N.js";import"./useFormValidation-GMJFkgaI.js";import"./useFocus-B6YbSr7t.js";import"./useFocusRing-DaHiZmYv.js";import"./useControlledState-DYrRTv7P.js";import"./FocusScope-l2gJymgt.js";import"./context-DM2fd8XH.js";import"./useFormReset-juEzhCU8.js";import"./usePress-BcgTA6VC.js";import"./useFocusable-Dbq66Fw_.js";import"./VisuallyHidden-Cs-P9S0b.js";import"./IconWarning-DpZLdH-i.js";import"./remote-DgECwzV4.js";import"./Label-VcTz9-oy.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CRJgNNZn.js";import"./FieldError-BFYCcyQ4.js";import"./AlertText-BJWw_2bk.js";import"./AlertIcon-Dx8NA4Z8.js";import"./browser-DgSxuaKY.js";import"./EmulatedBoldText-gevFAAZ0.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

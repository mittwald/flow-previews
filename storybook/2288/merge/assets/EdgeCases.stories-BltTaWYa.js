import{j as r}from"./iframe-BipmDVic.js";import{R as l,a as p}from"./Radio-B75Kh7Gh.js";import{R as n}from"./RadioButton-BZliAQI6.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-B7OuY01j.js";import{T as u}from"./Text-D0LSWbFT.js";import{C as c}from"./Content-C3tDFab4.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CqzOrDl2.js";import"./index-5IWmXg28.js";import"./index-DhRV0L_D.js";import"./ColumnLayout-JERwgJG9.js";import"./useFieldComponent-VycST_vs.js";import"./utils-BmvAbY6y.js";import"./useMakeFocusable-C2p-RMmT.js";import"./RadioGroup-xWDm92Xz.js";import"./FieldError-BYM5jSaa.js";import"./Text-Bx_sJIF1.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BQ1NzRsL.js";import"./useLabel-DZFs0BX7.js";import"./Label-CKCJMrcf.js";import"./Hidden-CaQYrS-R.js";import"./SelectionIndicator-DQakRxMT.js";import"./useFormValidation-DUx2L2VN.js";import"./useFocus-1VXHi-Mn.js";import"./useFocusRing-B8DUU0zm.js";import"./useControlledState-CTBxctZq.js";import"./FocusScope-BUuvBHJx.js";import"./context-Br1o_Gsv.js";import"./useFormReset-Bn-cpXjq.js";import"./usePress-BGUPUAq5.js";import"./useFocusable-CoJ_GBdx.js";import"./VisuallyHidden-CJz5Ez-_.js";import"./IconWarning-CGnZi41_.js";import"./remote-Bx5-otuG.js";import"./Label-D7pFsU69.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DMEYEfT-.js";import"./FieldError-CHo9rwLP.js";import"./AlertText-BpI_nGHQ.js";import"./AlertIcon-Cy_cDr6j.js";import"./browser-CR-oUB3P.js";import"./EmulatedBoldText-B1_mjQ_l.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-BeQWUZkN.js";import{R as l,b as p,a as n}from"./RadioButton-CH-Wb6a6.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-BSzNthFF.js";import{T as u}from"./Text-DBLOUBNs.js";import{C as c}from"./Content-CCCkXUnY.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C5zRFTyN.js";import"./index-1B1ExeLK.js";import"./index-C7QqpnOV.js";import"./ColumnLayout-lrgga088.js";import"./useFieldComponent-Df_LAOUO.js";import"./utils-DahaGO1Z.js";import"./useMakeFocusable-DnInN0Zr.js";import"./RadioGroup-C9OccJ6w.js";import"./FieldError-D83BnXEF.js";import"./Text-oRZAcHnn.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-Dldpy16s.js";import"./useLabel-Bej11zP_.js";import"./Label-CrwWIO9R.js";import"./Hidden-CGYC7LW_.js";import"./SelectionIndicator-CpkhsEOb.js";import"./useFormValidation-enT2NaDW.js";import"./useFocus-B8WX1wz4.js";import"./useControlledState-CVKu2BVA.js";import"./FocusScope-BFFCHkyv.js";import"./useFocusRing-plkuiMUL.js";import"./context-BW8umLlU.js";import"./useFormReset-C8CI0grL.js";import"./usePress-DC5PU-Mt.js";import"./useFocusable-5ZG33T1u.js";import"./VisuallyHidden-Dai9OIPt.js";import"./IconWarning-BINGtqrd.js";import"./remote-BjhB0wla.js";import"./Label-B2Ym8roL.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BinbCyOY.js";import"./FieldError-BcvtKrk-.js";import"./AlertText-zAJvVLJZ.js";import"./AlertIcon-Bvyhnsbm.js";import"./browser-CC8M21FF.js";import"./EmulatedBoldText-Ds4ybabF.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

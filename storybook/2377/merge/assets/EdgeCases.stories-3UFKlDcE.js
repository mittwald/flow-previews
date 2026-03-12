import{j as r}from"./iframe-JHVlk64D.js";import{R as l,a as p}from"./Radio-CkyykV42.js";import{R as n}from"./RadioButton-DeWxepLe.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DxAyL6-l.js";import{T as u}from"./Text-D35H-2yr.js";import{C as c}from"./Content-BX3eZD3n.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Ck8MmBsO.js";import"./index-w2uwoc3h.js";import"./index-BF-KrcKY.js";import"./ColumnLayout-BBxMV5f1.js";import"./useFieldComponent-Dm_EHwx7.js";import"./utils-D9FbIhNL.js";import"./useMakeFocusable-CHBR9WeV.js";import"./RadioGroup-Ds_fDZu1.js";import"./FieldError-CB6gvg8S.js";import"./Text-BPDMqDL5.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-C3MOdK6R.js";import"./useLabel-9l7svqw5.js";import"./Label-Bh1yg0KP.js";import"./Hidden-ChMS2Dui.js";import"./SelectionIndicator-D6El124b.js";import"./useFormValidation-BHVZgCg5.js";import"./useFocus-Cks5m45E.js";import"./platform-Dz8CwCz0.js";import"./useFocusRing-CHLeDkTy.js";import"./useControlledState-BK0dEcU9.js";import"./FocusScope-D4b0Moap.js";import"./context-ArJ603f0.js";import"./useFormReset-CuVjUJoL.js";import"./usePress-Dt-0MkOU.js";import"./useFocusable-vxzxlCI8.js";import"./VisuallyHidden-CJBb4HxH.js";import"./IconWarning-D57fWT31.js";import"./remote-CdnDmctD.js";import"./Label-BVSjd_Ef.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DDPtpUw9.js";import"./FieldError-DkKHEf-8.js";import"./AlertText-4rUPj4ZK.js";import"./AlertIcon-B-el1D17.js";import"./browser-CH4iE_n_.js";import"./EmulatedBoldText-DwNSiPCb.js";const mr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const pr=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,pr as __namedExportsOrder,mr as default};

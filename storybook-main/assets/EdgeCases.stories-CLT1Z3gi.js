import{j as r}from"./iframe-DQPKoo92.js";import{R as l,b as p,a as n}from"./RadioButton-M4mraMke.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-BJLosu9L.js";import{T as u}from"./Text-C51WlGhJ.js";import{C as c}from"./Content-BOD0dwE4.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DVIe49dZ.js";import"./index-B3Bpj3GD.js";import"./index-CnP3WCIP.js";import"./ColumnLayout-DoPlutD8.js";import"./useFieldComponent-BKiBq2W6.js";import"./utils-XAdJPTNp.js";import"./useMakeFocusable-CIadxyxn.js";import"./RadioGroup-tgdE5AQi.js";import"./FieldError-C-pwln9P.js";import"./Text-Y949w0K8.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-C06cTOQY.js";import"./useLabel-DkBHutKV.js";import"./Label-DrxyNCZO.js";import"./Hidden-BalHJt_t.js";import"./SelectionIndicator-DugKwRvD.js";import"./useFormValidation-B8bsM8-M.js";import"./useFocus-BE88ppMu.js";import"./useFocusRing-Cni30Eah.js";import"./useControlledState-CudIhSdL.js";import"./FocusScope-CJXytNJ4.js";import"./context-CJqjcP4U.js";import"./useFormReset-C7RuWveb.js";import"./usePress-ByCBMVLm.js";import"./useFocusable-DX4YK8A-.js";import"./VisuallyHidden-Dk42l2-2.js";import"./IconWarning-CpLICj99.js";import"./remote-BNYVvti7.js";import"./Label-Og-F06uZ.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CbBU4IdI.js";import"./FieldError-IxBtEnB-.js";import"./AlertText-C5_JXWa-.js";import"./AlertIcon-v4rlNZlK.js";import"./browser-ChlnFVHS.js";import"./EmulatedBoldText-ZCYLfeIO.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

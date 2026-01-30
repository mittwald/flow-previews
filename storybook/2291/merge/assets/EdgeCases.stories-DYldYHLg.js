import{j as r}from"./iframe-DSXKf9Qs.js";import{R as l,b as p,a as n}from"./RadioButton-DJjTkpoJ.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-BIjsdXp9.js";import{T as u}from"./Text-C7KW9wgf.js";import{C as c}from"./Content-BjKDi0K8.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-aTnVZ28_.js";import"./index-_ST8Xdbb.js";import"./index-xIXPquhv.js";import"./ColumnLayout-D1UDogBz.js";import"./useFieldComponent-CCab4n06.js";import"./utils-BkNrSrSW.js";import"./useMakeFocusable-BAbudFdS.js";import"./RadioGroup-BL4YSt8K.js";import"./FieldError-D2u-4343.js";import"./Text-BGc7dsTw.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-CmWGeahq.js";import"./useLabel-D2CXizlL.js";import"./Label-Dnlar29r.js";import"./Hidden-Bsr5uGtI.js";import"./SelectionIndicator-BtJjQV2B.js";import"./useFormValidation-CZFMPKAm.js";import"./useFocus-BkCMpCSs.js";import"./useFocusRing-9tutEJo4.js";import"./useControlledState-C8VBbj0I.js";import"./FocusScope-C1tZWIaN.js";import"./context-DU2DYbHB.js";import"./useFormReset-CY4Zdzy9.js";import"./usePress-D3-3tpV2.js";import"./useFocusable-BiabYp81.js";import"./VisuallyHidden-p8Ypb2KO.js";import"./IconWarning-CsaNdeaY.js";import"./remote-Gy-Ku51P.js";import"./Label-BZGX3mYQ.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DnMeMDV0.js";import"./FieldError-DyLpPvQc.js";import"./AlertText-ppaXibkF.js";import"./AlertIcon-Bx5_fWVD.js";import"./browser-zi1f_NHh.js";import"./EmulatedBoldText-CWbGlL7P.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

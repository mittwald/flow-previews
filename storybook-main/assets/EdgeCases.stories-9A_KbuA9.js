import{j as r}from"./iframe-B-_izELn.js";import{R as l,b as p,a as n}from"./RadioButton-CxefqvIw.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CvbPhv3Z.js";import{T as u}from"./Text-B9UK706u.js";import{C as c}from"./Content-C3BKvLsS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CP4SCJWM.js";import"./index-CcQr3Ju_.js";import"./index-C24wTi9Q.js";import"./ColumnLayout-DuNkZsJa.js";import"./useFieldComponent-Kyt2SdHG.js";import"./utils-CTzaLK4l.js";import"./useMakeFocusable-C5rWXAfk.js";import"./RadioGroup-C3xAOtgd.js";import"./FieldError-2QNeUIGm.js";import"./Text-Cbq-V_qs.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-CwweEOY6.js";import"./useLabel-DZiDffWU.js";import"./Label-DUJ6ba3Y.js";import"./Hidden-Ud3q5koP.js";import"./SelectionIndicator-ey4emqqq.js";import"./useFormValidation-d7hQTD7K.js";import"./useFocus-BKzgn786.js";import"./useControlledState-tdUQVzVH.js";import"./FocusScope-BQUCV4aX.js";import"./useFocusRing-DHjGYA3Q.js";import"./context-CP_ivtNk.js";import"./useFormReset-BUoUtOhQ.js";import"./usePress-CDCEcfQ2.js";import"./useFocusable-I-aSrCr_.js";import"./VisuallyHidden-DwaExAJM.js";import"./IconWarning-DXXSRvhn.js";import"./remote-DY2XWwFP.js";import"./Label-xN0BMhRq.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BEnL5M6A.js";import"./FieldError-C2OlbqQW.js";import"./AlertText-BdI1vJoj.js";import"./AlertIcon-DHh3kTXL.js";import"./browser-C9rDHpHO.js";import"./EmulatedBoldText-DO19SLv9.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

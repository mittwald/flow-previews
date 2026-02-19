import{j as r}from"./iframe-C9fwoqx7.js";import{R as l,a as p}from"./Radio-B3XZbkyM.js";import{R as n}from"./RadioButton-FdCFzDcR.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CkQhC8PZ.js";import{T as u}from"./Text-D7jvp7G5.js";import{C as c}from"./Content-CnNXJUgm.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BaaAZbNJ.js";import"./index-DH86ko7l.js";import"./index-CbFgIt9G.js";import"./ColumnLayout-DcmSq7EE.js";import"./useFieldComponent-HwWxBPXP.js";import"./utils-Cx2L-iDs.js";import"./useMakeFocusable-BKa3W_CX.js";import"./RadioGroup-CUOJMy1x.js";import"./FieldError-CEVb6xPQ.js";import"./Text-xqSfQxLT.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Dcg-_ctE.js";import"./useLabel-BNdvaiV7.js";import"./Label-CbDOwA25.js";import"./Hidden-CVIEiZ4o.js";import"./SelectionIndicator-nEc_xgxs.js";import"./useFormValidation-B19EocOE.js";import"./useFocus-CMKZ5vES.js";import"./useFocusRing-s7_3pCWo.js";import"./useControlledState-BJuMvqvK.js";import"./FocusScope-Ci8EWXmX.js";import"./context-C2ecxi5G.js";import"./useFormReset-Bm_Lqolg.js";import"./usePress-tgKXO9PL.js";import"./useFocusable-CQiYog1P.js";import"./VisuallyHidden-1IKUNS-e.js";import"./IconWarning-slnz76yl.js";import"./remote-B-ZPT6P_.js";import"./Label-DUuytyEq.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-G4KNW0M0.js";import"./FieldError-v5ZAFD64.js";import"./AlertText-GfFdH1ck.js";import"./AlertIcon-Bz6wfr4x.js";import"./browser-B4JTTu9h.js";import"./EmulatedBoldText-CtQh5tnB.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

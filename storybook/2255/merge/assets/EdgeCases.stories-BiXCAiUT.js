import{j as r}from"./iframe-DRxscI9O.js";import{R as l,b as p,a as n}from"./RadioButton-43FszB7P.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-2Uug0e2m.js";import{T as u}from"./Text-8YV9_ufN.js";import{C as c}from"./Content-COyljEy7.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-cRsKi5gV.js";import"./index-tYubnSWL.js";import"./index-1XGI-8ge.js";import"./ColumnLayout-BDLpqenI.js";import"./useFieldComponent-B2FoAAf9.js";import"./utils-CR6NBPUA.js";import"./useMakeFocusable-DPBHHPoU.js";import"./RadioGroup-D1qhe4Ya.js";import"./FieldError-qzmmAdqz.js";import"./Text-C61ezR9Z.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-Ct55O5fT.js";import"./useLabel-D6Iwc6BC.js";import"./Label-CmD6OfqR.js";import"./Hidden-B1W2VzXU.js";import"./SelectionIndicator-BPr02Xgn.js";import"./useFormValidation-BZc6xO6n.js";import"./useFocus-CSD6pEXF.js";import"./useControlledState-CvH2MSRC.js";import"./FocusScope-CRHoWMnL.js";import"./useFocusRing-Dd30mTT2.js";import"./context-B7-PA0L6.js";import"./useFormReset-Ewuleuhs.js";import"./usePress-87CEVAU1.js";import"./useFocusable-_DeXT1Pt.js";import"./VisuallyHidden-hMszIaj5.js";import"./IconWarning-B0GCVytt.js";import"./remote-5HtQVd9k.js";import"./Label-QYcCSLyK.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BVeqf5XE.js";import"./FieldError-DD28rleL.js";import"./AlertText-BjP2ge3Y.js";import"./AlertIcon-CLPvczjb.js";import"./browser-D6b-4R0j.js";import"./EmulatedBoldText-BJ7pd3K2.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

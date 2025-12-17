import{j as r}from"./iframe-B9uPShpw.js";import{R as l,a as p}from"./Radio-CxpT0MK9.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CU0v4XY6.js";import{T as u}from"./Text-CNAgZ6Gu.js";import{C as c}from"./Content-CzHMDGg2.js";import{R as n}from"./RadioButton-DlIr5azR.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DaNB93st.js";import"./index-BHigKFJv.js";import"./index-C-9nCgVF.js";import"./ColumnLayout-DPiASrN2.js";import"./useFieldComponent-BtkWQmwv.js";import"./utils-Daj4d2Cf.js";import"./useMakeFocusable-DgzdOzul.js";import"./RadioGroup-CxXoYiME.js";import"./FieldError-B2c6KACK.js";import"./Text-BY4f0OUC.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-CxeKG7IW.js";import"./useLabel-CcI46r6t.js";import"./Label-DMYXGfMz.js";import"./Hidden-DXuNaD-Y.js";import"./SelectionIndicator-C2YxFtZ5.js";import"./useFormValidation-Bgk2NLp4.js";import"./useFocus-BRHOSDKu.js";import"./useControlledState-DaoeHdVs.js";import"./FocusScope-DabbQPzk.js";import"./useFocusRing-kdNWDtkT.js";import"./context-C9xya_TD.js";import"./useFormReset-BDYhp5bc.js";import"./usePress-CIPi1cMp.js";import"./useFocusable-3eJpH5lU.js";import"./VisuallyHidden-C1crbJmY.js";import"./IconApp-Dlsy_N62.js";import"./remote-BWMO5jwH.js";import"./IconRadioOn-CkULDf1E.js";import"./Label-KwkmvcNF.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BoeFAG81.js";import"./FieldError-CWcQNDFm.js";import"./IconDanger-q09hWhBt.js";import"./browser-DkOndk9b.js";import"./EmulatedBoldText-CttSSL63.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

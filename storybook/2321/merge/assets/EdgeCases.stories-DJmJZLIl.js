import{j as r}from"./iframe-BYq2oLvG.js";import{R as l,a as p}from"./Radio-Ch0QzPeD.js";import{R as n}from"./RadioButton-BEazrtQj.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-BTZ0d4Xi.js";import{T as u}from"./Text-Df3o0vPg.js";import{C as c}from"./Content-Di7Z-14R.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DHneW8T1.js";import"./index-pVjII2WU.js";import"./index-BCX3_YU5.js";import"./ColumnLayout-HwzCr8jk.js";import"./useFieldComponent-C42pk4aC.js";import"./utils-Da-bhZeG.js";import"./useMakeFocusable-Rr4YSJCQ.js";import"./RadioGroup-C8xIUi85.js";import"./FieldError-3pauqY5q.js";import"./Text-BsD4qVoX.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BjhhXbaP.js";import"./useLabel-BBF67Bfk.js";import"./Label-onG8m68o.js";import"./Hidden-BEATyBSB.js";import"./SelectionIndicator-DxCQPmpp.js";import"./useFormValidation-DIPf7gSr.js";import"./useFocus-BosBzJqA.js";import"./useFocusRing-DoNt3T3i.js";import"./useControlledState-B-JkoIYX.js";import"./FocusScope-CUVzpEcF.js";import"./context-WfyLsYOo.js";import"./useFormReset-COvJ3vzl.js";import"./usePress-CABccGP2.js";import"./useFocusable-eOfLyRoH.js";import"./VisuallyHidden-4k4K_3kv.js";import"./IconWarning-l8NPf1u4.js";import"./remote-SGC31yDV.js";import"./Label-xDxAxXdC.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DFbS966t.js";import"./FieldError-Cq2wz6X1.js";import"./AlertText-BLnni9j6.js";import"./AlertIcon-DHHmiMC7.js";import"./browser-CRRI-wfh.js";import"./EmulatedBoldText-2hwPnQKV.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

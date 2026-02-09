import{j as r}from"./iframe-C-RKPwSE.js";import{R as l,a as p}from"./Radio-mSIyad-y.js";import{R as n}from"./RadioButton-imtVsMEd.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CeFGurAx.js";import{T as u}from"./Text-DceSOphz.js";import{C as c}from"./Content-E3I6lJAa.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-_zksvKqG.js";import"./index-ChFaffKJ.js";import"./index-NcfLMdM4.js";import"./ColumnLayout-CTChS9oN.js";import"./useFieldComponent-ILpXs27H.js";import"./utils-BNo7v4Co.js";import"./useMakeFocusable-C939AGID.js";import"./RadioGroup-DnKxtGmZ.js";import"./FieldError-BbtVOi4H.js";import"./Text-CWybMa0K.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BmIWUPX1.js";import"./useLabel-DvGejoW4.js";import"./Label-BVYBl4lk.js";import"./Hidden-0w5RaPP8.js";import"./SelectionIndicator-CCq6JAG-.js";import"./useFormValidation-BVV7LE3u.js";import"./useFocus-EK5CVku_.js";import"./useFocusRing-CPvrkvyz.js";import"./useControlledState-PGxEdwVp.js";import"./FocusScope-DV38vf4J.js";import"./context-CG0zmStT.js";import"./useFormReset-Bo6mTD_0.js";import"./usePress-D8JiKPWZ.js";import"./useFocusable-BqhdVXbn.js";import"./VisuallyHidden-lhIVNasT.js";import"./IconWarning-B9kpDIcu.js";import"./remote-Dp4k7gKv.js";import"./Label-BZ9U-QOK.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DtbvJlWC.js";import"./FieldError-Bk-w_c0r.js";import"./AlertText-F-sJ7jVx.js";import"./AlertIcon-EwQ99KQC.js";import"./browser-BU-qC_3h.js";import"./EmulatedBoldText-CGXBgVzv.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

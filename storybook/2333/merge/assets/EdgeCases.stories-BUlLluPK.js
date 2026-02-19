import{j as r}from"./iframe-DQkRMfo_.js";import{R as l,a as p}from"./Radio-DEOYw94A.js";import{R as n}from"./RadioButton-B6DNJku-.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CFu3k08W.js";import{T as u}from"./Text-DZXogYJp.js";import{C as c}from"./Content-o4sDFduR.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-COr712P3.js";import"./index-BIVF9xJy.js";import"./index-BmRrr2ih.js";import"./ColumnLayout-CZuVVkD3.js";import"./useFieldComponent-DKGKIVkH.js";import"./utils-Bfb5K-41.js";import"./useMakeFocusable-DViAzEe9.js";import"./RadioGroup-DNHibUjJ.js";import"./FieldError-BDV0g7vQ.js";import"./Text-BXxFgtol.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DMHoM5vs.js";import"./useLabel-BKmqgaQh.js";import"./Label-BXbqiwP4.js";import"./Hidden-xLATKa2n.js";import"./SelectionIndicator-D4WNQsp1.js";import"./useFormValidation-Baae3HaH.js";import"./useFocus-BSyQYzHK.js";import"./useFocusRing-CrR0o1Yj.js";import"./useControlledState-CA4wGiI1.js";import"./FocusScope-DAhxUr4_.js";import"./context-XfcuIoVT.js";import"./useFormReset-CbTvEeV3.js";import"./usePress-D8-KGEPi.js";import"./useFocusable-BWtjl4YZ.js";import"./VisuallyHidden-CreEQc-P.js";import"./IconWarning-D2qqMRrO.js";import"./remote-CkmXCgJk.js";import"./Label-CITwA187.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DNh09jdA.js";import"./FieldError-Bk57uQQs.js";import"./AlertText-CwnG_GRo.js";import"./AlertIcon-x4dcgk_u.js";import"./browser-BnHwZVCd.js";import"./EmulatedBoldText-BSCRafBI.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

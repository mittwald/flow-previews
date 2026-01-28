import{j as r}from"./iframe-BrcQhcwR.js";import{R as l,b as p,a as n}from"./RadioButton-Bx_oPyTt.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-BXLTYrei.js";import{T as u}from"./Text-PyhJCmvh.js";import{C as c}from"./Content-BlZY7L3B.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-m6SyqnPg.js";import"./index-Del26Dy4.js";import"./index-CSUT2NCR.js";import"./ColumnLayout-Dpb7FaN1.js";import"./useFieldComponent-CsbQ-7mY.js";import"./utils-DM5Jp8EX.js";import"./useMakeFocusable-BHFITXuo.js";import"./RadioGroup-C9EWsyzc.js";import"./FieldError-BZvulriJ.js";import"./Text-CzkXk5bL.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DI5rGqIO.js";import"./useLabel-0hwKkY3Z.js";import"./Label-ChTBNZrK.js";import"./Hidden-D0_rVqY-.js";import"./SelectionIndicator-Bi_ZzqWB.js";import"./useFormValidation-CstoYpvO.js";import"./useFocus-BKws8v7-.js";import"./useFocusRing-DEM6_VkF.js";import"./useControlledState-DsUZezc6.js";import"./FocusScope-CxLgpb_M.js";import"./context-DOSLHoOx.js";import"./useFormReset-BHDJFB5Q.js";import"./usePress-BBaWFJWg.js";import"./useFocusable-BcdgZhOs.js";import"./VisuallyHidden-CIPoghQB.js";import"./IconWarning-MWZFtagw.js";import"./remote-BHShYJ5P.js";import"./Label-eB0oKMGS.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-hxpvTBNb.js";import"./FieldError-D24voWaJ.js";import"./AlertText-BAa8Yse9.js";import"./AlertIcon-CzBRtVHG.js";import"./browser-BdJDgoMU.js";import"./EmulatedBoldText-Bbt3btdp.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

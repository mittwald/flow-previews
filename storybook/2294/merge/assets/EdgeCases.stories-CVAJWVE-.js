import{j as r}from"./iframe-RCf6-4YI.js";import{R as l,a as p}from"./Radio-DRBULxps.js";import{R as n}from"./RadioButton-CJQbjx2p.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-D3fVapIg.js";import{T as u}from"./Text-HaNR6yqL.js";import{C as c}from"./Content-DmnhNqJW.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-gpdQqKr8.js";import"./index-DOrHsa1U.js";import"./index-BOW2unrE.js";import"./ColumnLayout-C_flZEAQ.js";import"./useFieldComponent-C9VOsv8D.js";import"./utils-2Kt3K5yX.js";import"./useMakeFocusable-CfvKlLcw.js";import"./RadioGroup-33rIEYpo.js";import"./FieldError-C_jxYX-6.js";import"./Text-BGlg7n8N.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DuREI75N.js";import"./useLabel-6KWBnhoZ.js";import"./Label-DjMItCLE.js";import"./Hidden-C6k2LQ4g.js";import"./SelectionIndicator-H7CrMh-P.js";import"./useFormValidation-WgNojhOC.js";import"./useFocus-BlmWIWuz.js";import"./useFocusRing-DZgLoJPG.js";import"./useControlledState-BQGvOabU.js";import"./FocusScope-BrE8vcb4.js";import"./context-C_2cqKRl.js";import"./useFormReset-CpZDZfD6.js";import"./usePress--XVd0Ch5.js";import"./useFocusable-CGRcLUlH.js";import"./VisuallyHidden-I0X1hTaI.js";import"./IconWarning-B0h7osnB.js";import"./remote-B1M75xiP.js";import"./Label-BRnkJYm7.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BHr3YdQC.js";import"./FieldError-KQe80RuS.js";import"./AlertText-C7SuhXn-.js";import"./AlertIcon-C_s3bh0k.js";import"./browser-CrfZ_U78.js";import"./EmulatedBoldText-DexDNb3B.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

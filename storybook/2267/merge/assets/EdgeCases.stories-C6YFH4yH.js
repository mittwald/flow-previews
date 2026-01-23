import{j as r}from"./iframe-B_VLmVOf.js";import{R as l,b as p,a as n}from"./RadioButton-DlTHXpMA.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-BMB6-FE_.js";import{T as u}from"./Text-DLyTxpXl.js";import{C as c}from"./Content-BkidL2Y8.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Bc5-OX5Z.js";import"./index-GX3ioGoD.js";import"./index-Cpfd6Pim.js";import"./ColumnLayout-CtCqSKiC.js";import"./useFieldComponent-CG-gR-7X.js";import"./utils-C3gFrn3p.js";import"./useMakeFocusable-DPxlR9qd.js";import"./RadioGroup-C8VV44vP.js";import"./FieldError-DsHbeww2.js";import"./Text-Cz72Ll4P.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-Bzu1lHbY.js";import"./useLabel-3m37nTep.js";import"./Label-BcEUcVG2.js";import"./Hidden-BDeD6EhR.js";import"./SelectionIndicator-BccBPPpV.js";import"./useFormValidation-BmcsTB_W.js";import"./useFocus-BThPJxs2.js";import"./useControlledState-Cy2UyDQ-.js";import"./FocusScope-PhJ8RGzw.js";import"./useFocusRing-CqgXonXS.js";import"./context-x63-ahNn.js";import"./useFormReset-DzSH81mS.js";import"./usePress-dvDnySA_.js";import"./useFocusable-D136elhd.js";import"./VisuallyHidden-neYV3Owd.js";import"./IconWarning-COj126FB.js";import"./remote-D8h-jp0X.js";import"./Label-f9h1IAZy.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-HtYu0JJ-.js";import"./FieldError-Daf8utl3.js";import"./AlertText-DdDDd0bO.js";import"./AlertIcon-CQ3Ik0rE.js";import"./browser-BI-ei-gA.js";import"./EmulatedBoldText-C4lFh4eF.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

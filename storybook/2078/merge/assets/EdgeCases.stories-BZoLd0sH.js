import{j as r}from"./iframe-kP2HEfFS.js";import{R as l,b as p,a as n}from"./RadioButton-DAYz2K1J.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DzKiNlev.js";import{T as u}from"./Text-DmTsXHLN.js";import{C as c}from"./Content-C-6lFjS_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Cn3sZuxr.js";import"./index-Bh9kNCDS.js";import"./index-Gr0VxzdI.js";import"./ColumnLayout-B0WfyxdI.js";import"./useFieldComponent-D28HcwQQ.js";import"./utils-C12UPk0k.js";import"./useMakeFocusable-DTcEo_iv.js";import"./RadioGroup-NxAvrsy3.js";import"./FieldError-BL6ZnBFp.js";import"./Text-Bt0sFzeR.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-D51h5Mwy.js";import"./useLabel-07phmwB_.js";import"./Label-B6lEhZqq.js";import"./Hidden-6OIrW1CO.js";import"./SelectionIndicator-v5-gN0xn.js";import"./useFormValidation-CKIaBDhF.js";import"./useFocus-C5lTzrJh.js";import"./useControlledState-K2EmMrc1.js";import"./FocusScope-BDiazwAe.js";import"./useFocusRing-CKDLKfs4.js";import"./context-C1J5EAXU.js";import"./useFormReset-BTQYEics.js";import"./usePress-Zu3olfM4.js";import"./useFocusable-B7yvIBUC.js";import"./VisuallyHidden-BxKC931y.js";import"./IconWarning-3wMfkhbI.js";import"./remote-7RhInu5H.js";import"./Label-o-9raADe.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-C8FP4Fke.js";import"./FieldError-CJUuAB6W.js";import"./AlertText-Dm8o5yyE.js";import"./AlertIcon-BKaF02an.js";import"./browser-CLBqp6VR.js";import"./EmulatedBoldText-DuA7OeuM.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-CIXg2wml.js";import{R as l,b as p,a as n}from"./RadioButton-BkHLtgDZ.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-C4aBc8Me.js";import{T as u}from"./Text-ClE4EaJv.js";import{C as c}from"./Content-DaPzFeUo.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-2SDDcL6i.js";import"./index-stwZ4S38.js";import"./index-CUACQQJf.js";import"./ColumnLayout-CYLfrdcV.js";import"./useFieldComponent-D7V8J4vf.js";import"./utils-E3QCR4Ei.js";import"./useMakeFocusable-CIb-aO7q.js";import"./RadioGroup-CqXqpzSk.js";import"./FieldError-B2EiL9vq.js";import"./Text-BTcAnKOQ.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-AGjJK_iq.js";import"./useLabel-pvILaDrT.js";import"./Label-DkYkYhBQ.js";import"./Hidden-CGz-Nf89.js";import"./SelectionIndicator-Ck0MHypk.js";import"./useFormValidation-B5rYBS3I.js";import"./useFocus-Xgz2P1v-.js";import"./useControlledState-euBd3hty.js";import"./FocusScope-BVD53JA4.js";import"./useFocusRing-CJfArHTm.js";import"./context-TKY6ae7T.js";import"./useFormReset-BWhLZN3-.js";import"./usePress-C_LDf41x.js";import"./useFocusable-LSbGRyyR.js";import"./VisuallyHidden-XLC_SZ8x.js";import"./IconWarning-CiSujg9K.js";import"./remote-8tD3tcl0.js";import"./Label-qxc1gCGy.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DQ68Yc1-.js";import"./FieldError-BH2vnwI0.js";import"./AlertText-Cyx_yayU.js";import"./AlertIcon-DJUqjVOR.js";import"./browser-CYeJE0Iy.js";import"./EmulatedBoldText--LsvyM20.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

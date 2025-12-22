import{j as r}from"./iframe-a9513Vq6.js";import{R as l,b as p,a as n}from"./RadioButton-Z83y8M24.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-6bMGzThR.js";import{T as u}from"./Text-hxI3a1Rs.js";import{C as c}from"./Content-CZbosIDu.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-ClX3KjCn.js";import"./index-BqXFMVtG.js";import"./index-CgKgRbSB.js";import"./ColumnLayout-CN0TaETk.js";import"./useFieldComponent-DoOT3wm0.js";import"./utils-Q60aVnZq.js";import"./useMakeFocusable-DlfEKBd5.js";import"./RadioGroup-B1nSlIak.js";import"./FieldError-C3zvz5gI.js";import"./Text-KDVUHE9w.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-DpSLYLL6.js";import"./useLabel-nB2pk6qM.js";import"./Label-THT_xKrE.js";import"./Hidden-CBXUgXzH.js";import"./SelectionIndicator-ZvhngIUd.js";import"./useFormValidation-vP3SVKb2.js";import"./useFocus-CH_x6C_j.js";import"./useControlledState-CemUvUps.js";import"./FocusScope-BnHRmLRH.js";import"./useFocusRing-CmMhl12v.js";import"./context-CGjHIvvu.js";import"./useFormReset-CYu_Lr-z.js";import"./usePress-CyOdCqvu.js";import"./useFocusable-lL6lq36R.js";import"./VisuallyHidden-C2yGzMiQ.js";import"./IconWarning-BPr7HnMX.js";import"./remote-CGHUze9I.js";import"./Label-BZ3qOvYQ.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CqunH7JG.js";import"./FieldError-WoUSVR_n.js";import"./browser-CuCeyixq.js";import"./EmulatedBoldText-mDi0QmS0.js";const er={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ar=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,ar as __namedExportsOrder,er as default};

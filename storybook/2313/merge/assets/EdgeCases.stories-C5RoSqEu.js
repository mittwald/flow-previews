import{j as r}from"./iframe-HxmydubW.js";import{R as l,a as p}from"./Radio-DIG8t9I8.js";import{R as n}from"./RadioButton-B3n8DD-G.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-HEcUj4VJ.js";import{T as u}from"./Text-CUJOJiDD.js";import{C as c}from"./Content-D1Anq3Pf.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DGGyXaO_.js";import"./index-Ck9gKEcY.js";import"./index-CEuE-GZL.js";import"./ColumnLayout-BL0yItzL.js";import"./useFieldComponent-Bahj-THY.js";import"./utils-QtLN3P4K.js";import"./useMakeFocusable-HZxYU1Y8.js";import"./RadioGroup-CAIneYGH.js";import"./FieldError-BaqMj9An.js";import"./Text-CyO0jXov.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Di40r5ck.js";import"./useLabel-CkTRhQb0.js";import"./Label-DaNiLy_u.js";import"./Hidden-CAR-DQuE.js";import"./SelectionIndicator-dYnAwztx.js";import"./useFormValidation-BHp8DdfT.js";import"./useFocus-AF-IcVAt.js";import"./useFocusRing-CAJt6BJw.js";import"./useControlledState-N-j6hnQm.js";import"./FocusScope-D_FLL8Ht.js";import"./context-CAIZZp13.js";import"./useFormReset-C2bi11DR.js";import"./usePress-yluX3X-J.js";import"./useFocusable-H6SSWU_B.js";import"./VisuallyHidden-BPW-z4K2.js";import"./IconWarning-C9xwJqAl.js";import"./remote-fubbDoJI.js";import"./Label-Jo5QLCir.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-Bu1c0OhT.js";import"./FieldError-431GXjJZ.js";import"./AlertText-CJjUY60n.js";import"./AlertIcon-BFPz9yZd.js";import"./browser-XpDtWA4a.js";import"./EmulatedBoldText-tUaMuzLe.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

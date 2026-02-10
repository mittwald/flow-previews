import{j as r}from"./iframe-BAXQY30e.js";import{R as l,a as p}from"./Radio-CkuC2-X8.js";import{R as n}from"./RadioButton-CuUs3cwr.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-BlfJR4XA.js";import{T as u}from"./Text-CsFAJPGd.js";import{C as c}from"./Content-l8PG62lr.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BWoWQ3Dz.js";import"./index-D8IPWXYD.js";import"./index-BAu7LBGH.js";import"./ColumnLayout-D_MUxXPB.js";import"./useFieldComponent-RBMXOPsB.js";import"./utils-CPq9a2_3.js";import"./useMakeFocusable-4FeZN37B.js";import"./RadioGroup-gEmzYRSi.js";import"./FieldError-RUpMVejq.js";import"./Text-CgyRU_jx.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-CMcE9GN0.js";import"./useLabel-XkQiS-6W.js";import"./Label-CoIwZGGV.js";import"./Hidden-CaIV9czF.js";import"./SelectionIndicator-m0lWLhXd.js";import"./useFormValidation-DAvMLm6e.js";import"./useFocus-Bjv2U0Px.js";import"./useFocusRing-eOVByyHK.js";import"./useControlledState-BIans2ur.js";import"./FocusScope-PoiaPb2X.js";import"./context-Ch7cvv9N.js";import"./useFormReset-CqoQKslx.js";import"./usePress-0WoXV1eK.js";import"./useFocusable-B7f7k6Nb.js";import"./VisuallyHidden-qM1rInXZ.js";import"./IconWarning-NY-vs6K4.js";import"./remote-X8ibHJNw.js";import"./Label-DhF_BRrp.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-D2lE0ZvY.js";import"./FieldError-D1QPRlMW.js";import"./AlertText-Do_swE0s.js";import"./AlertIcon-C4A5rqth.js";import"./browser-7M05TLI2.js";import"./EmulatedBoldText-RGEYlPNA.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

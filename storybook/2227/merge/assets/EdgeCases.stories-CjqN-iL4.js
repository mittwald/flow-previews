import{j as r}from"./iframe-XJIuIQsX.js";import{R as l,b as p,a as n}from"./RadioButton-CofkgE_T.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-s4jwY_Ce.js";import{T as u}from"./Text-CrMkSLGe.js";import{C as c}from"./Content-DGwv7Ips.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BaQJj-Fe.js";import"./index-BFrTfb9P.js";import"./index-D1QpPuaY.js";import"./ColumnLayout-QeLmdom1.js";import"./useFieldComponent-HT5XfbIG.js";import"./utils-OSbsBMtV.js";import"./useMakeFocusable-J4mInuDL.js";import"./RadioGroup-tfvHli-q.js";import"./FieldError-oVAZyPGl.js";import"./Text-CQ_rpqob.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-BZYlLUUP.js";import"./useLabel-B1JuXYfT.js";import"./Label-1nVOodib.js";import"./Hidden-CYqdvOeA.js";import"./SelectionIndicator-rwMeyIsD.js";import"./useFormValidation-DwGL1Z7V.js";import"./useFocus-CATpB0h3.js";import"./useControlledState-B6b60Ty3.js";import"./FocusScope-XmTgMg9O.js";import"./useFocusRing-CeYeFZfu.js";import"./context-DW91oCRu.js";import"./useFormReset-_i9wmexA.js";import"./usePress-DEhEh88f.js";import"./useFocusable-DTUbS3BZ.js";import"./VisuallyHidden-ClcaDoKJ.js";import"./IconWarning-Dh1UuZN-.js";import"./remote-Ep0bJUq6.js";import"./Label-CRXdwP8g.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CdJGeOAf.js";import"./FieldError-CSSPElPx.js";import"./browser-BhoN5hvb.js";import"./EmulatedBoldText-CPYC_Ehx.js";const er={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

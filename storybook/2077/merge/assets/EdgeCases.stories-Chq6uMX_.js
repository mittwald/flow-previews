import{j as r}from"./iframe-BYlM8TfH.js";import{R as l,b as p,a as n}from"./RadioButton-BPuowHCA.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CraeIiFy.js";import{T as u}from"./Text-ZBSxG77c.js";import{C as c}from"./Content-B9Uvl7Ur.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CJQUzeBk.js";import"./index-Z9ghxMfX.js";import"./index-BpRuSIpR.js";import"./ColumnLayout-BRKYNcJT.js";import"./useFieldComponent-BoJq1S9B.js";import"./utils-BDqIfUE7.js";import"./Text-Dc8La0ek.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-WQ4wo7kP.js";import"./react-children-utilities-DxnuAJ4K.js";import"./ClearPropsContext-BpBo361K.js";import"./useMakeFocusable-BmfPg07G.js";import"./RadioGroup-rqfgzwPo.js";import"./Form-CqmUY9BV.js";import"./useLabel-IFSjtkUu.js";import"./Label-COiWxsLa.js";import"./Hidden-CSqzjE-Z.js";import"./SelectionIndicator-BFnOXggJ.js";import"./useFormValidation-wBqhYJyj.js";import"./useFocus-B9vfYs8K.js";import"./useControlledState-Bs4hSWnz.js";import"./FocusScope-ChlmKh1V.js";import"./useFocusRing-BaqqhOKG.js";import"./context-BxRqKeiD.js";import"./useFormReset-Bl4vFhC1.js";import"./usePress-kOJVCjd_.js";import"./useFocusable-SxOERRg1.js";import"./VisuallyHidden-D5yM91eE.js";import"./Label-CObvhZe8.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DNjkRVig.js";import"./browser-D2sPcOVM.js";import"./EmulatedBoldText-bM5QDT6k.js";const or={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const er=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,er as __namedExportsOrder,or as default};

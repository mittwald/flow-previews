import{j as r}from"./iframe-CnD5cTjE.js";import{R as l,a as p}from"./Radio-BkILDrmR.js";import{R as n}from"./RadioButton-D9leXJKg.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-BFJ_XZP3.js";import{T as u}from"./Text-Bqsx-GQX.js";import{C as c}from"./Content-CMeLkpWg.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C-pFyTgk.js";import"./index-CFIaHCYn.js";import"./index-DPBNH-jw.js";import"./ColumnLayout-BJ1mdLlj.js";import"./useFieldComponent-D1uM9aif.js";import"./utils-BYl_EWK3.js";import"./useMakeFocusable-DGsR1R_2.js";import"./RadioGroup-CTjrWTRc.js";import"./FieldError-CkgMvR4A.js";import"./Text-Bz5hHxMj.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Bj2UuDao.js";import"./useLabel-BEvZESWX.js";import"./Label-DvWkQRgL.js";import"./Hidden-BqUWSjHb.js";import"./SelectionIndicator-T6p8Rrnn.js";import"./useFormValidation-0N4lg69R.js";import"./useFocus-BZF2vaC7.js";import"./useFocusRing-a13YBJgG.js";import"./useControlledState-C-7lgoXp.js";import"./FocusScope-q9RNJ1I3.js";import"./context-uSq5N7U7.js";import"./useFormReset-DzGHPNTd.js";import"./usePress-DgDG_638.js";import"./useFocusable-DUJmCsdq.js";import"./VisuallyHidden-D2K60xua.js";import"./IconWarning-K8fT7_bQ.js";import"./remote-CRObq-IF.js";import"./Label-BZkRYtAq.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-C15HmRxb.js";import"./FieldError-D8deZX0S.js";import"./AlertText-9D-RaPUt.js";import"./AlertIcon-DEFExzLk.js";import"./browser-DH0afsgD.js";import"./EmulatedBoldText-czAo41Rl.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

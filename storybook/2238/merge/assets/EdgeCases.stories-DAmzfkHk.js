import{j as r}from"./iframe-DB4UlQ_F.js";import{R as l,b as p,a as n}from"./RadioButton-zehrjWnz.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DevajtzF.js";import{T as u}from"./Text-CvhufvNl.js";import{C as c}from"./Content-wOiAjeg1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BL-3GjRu.js";import"./index-DpDRS9kh.js";import"./index-BSqJ1-JW.js";import"./ColumnLayout-C-Ka8lDv.js";import"./useFieldComponent-Dp69OqtL.js";import"./utils-B6Q0cVYp.js";import"./useMakeFocusable-BDWeQO7c.js";import"./RadioGroup-5EDmqQBl.js";import"./FieldError-CegzLELq.js";import"./Text-De_rG2Pz.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-PeScrtUS.js";import"./useLabel-bn4O9qyi.js";import"./Label-CzwPVXKy.js";import"./Hidden-BofTzQhQ.js";import"./SelectionIndicator-D87wG6Zb.js";import"./useFormValidation-Bt0uBrAk.js";import"./useFocus-mLt6Jcka.js";import"./useControlledState-2lUl0kro.js";import"./FocusScope-D57vEPf5.js";import"./useFocusRing-BToYuWbv.js";import"./context-BeH9c2u_.js";import"./useFormReset-zmgaZOpR.js";import"./usePress-CDGll4uD.js";import"./useFocusable-BfPamkyW.js";import"./VisuallyHidden-C3r-i5Fv.js";import"./IconWarning-D6sMwWyV.js";import"./remote-DOdcl-CB.js";import"./Label-D60b9GFw.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DsWJPkCN.js";import"./FieldError-7mdFLW8I.js";import"./browser-CMEWPYW9.js";import"./EmulatedBoldText-1LQNM6BM.js";const er={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

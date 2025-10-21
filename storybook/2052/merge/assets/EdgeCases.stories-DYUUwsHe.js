import{j as r}from"./iframe-BziZnbbf.js";import{R as l,b as p,a as n}from"./RadioButton-C8PVqMhL.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-BsA1dTaf.js";import{T as u}from"./Text-C2tTVpcM.js";import{C as c}from"./Content-XC9Fvum2.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-JHIQPa02.js";import"./index-DKHZz9bz.js";import"./index-_EM7mgZk.js";import"./ColumnLayout-AMK63_Pj.js";import"./useFieldComponent-yHiwdZcU.js";import"./utils-C0RTyIHD.js";import"./Text-fJHWLREE.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CJvxfsrj.js";import"./react-children-utilities-gpYjsLoV.js";import"./ClearPropsContext-DUOPbXiH.js";import"./useMakeFocusable-BDpn2_Dk.js";import"./RadioGroup-CrY1gpGg.js";import"./Form-lya1P3V3.js";import"./useLabel-fjbW-LOk.js";import"./Label-SVpetMhq.js";import"./Hidden-Bnko_h1D.js";import"./SelectionIndicator-8CTToPIL.js";import"./useFormValidation-CTvaA84d.js";import"./useFocus-ycXwMZE-.js";import"./useControlledState-DwOoiAv5.js";import"./FocusScope-BuPYUVVd.js";import"./useFocusRing-CNOPmzHu.js";import"./context-BDhuSyDo.js";import"./useFormReset-CzU-0SyG.js";import"./usePress-D5emiALM.js";import"./useFocusable-KPf6K6gw.js";import"./VisuallyHidden-zje2lKRT.js";import"./Label-7ab3WcOE.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-Bzp87kLk.js";import"./browser-BTvp61GS.js";import"./EmulatedBoldText-BRsPLuIL.js";const or={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

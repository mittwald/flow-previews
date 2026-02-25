import{j as r}from"./iframe-COJ9RE48.js";import{R as l,a as p}from"./Radio-7GX3NBSV.js";import{R as n}from"./RadioButton-CPj1VKEb.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-BWOVMap8.js";import{T as u}from"./Text-Bzpr-GrC.js";import{C as c}from"./Content-CnaSOdl5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-X1hvA0Vg.js";import"./index-Dygvt5pN.js";import"./index-D5EZb4o9.js";import"./ColumnLayout-3Cvqfvmf.js";import"./useFieldComponent-C2vXV8Pm.js";import"./utils-mqorQ4Bj.js";import"./useMakeFocusable-DGR34_TP.js";import"./RadioGroup-B3maErmT.js";import"./FieldError-GKNsJ0Cn.js";import"./Text-De8BGzPh.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DdhXtOmH.js";import"./useLabel-CDG97Ijf.js";import"./Label-H5AVk4Tf.js";import"./Hidden-DYByFplp.js";import"./SelectionIndicator-D_pnQduh.js";import"./useFormValidation-DQ8UK_oB.js";import"./useFocus-C0sdQCtL.js";import"./useFocusRing-CTczndmn.js";import"./useControlledState-BKL31WKE.js";import"./FocusScope-BJ-yMckp.js";import"./context-6fEx4cd5.js";import"./useFormReset-BVeU8GRO.js";import"./usePress-CI06DRQW.js";import"./useFocusable-_fwbj2-b.js";import"./VisuallyHidden-DAPVNl2G.js";import"./IconWarning-BMwiqmvN.js";import"./remote-BHpqvLOn.js";import"./Label-B42D24b-.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-Cn0B0HDz.js";import"./FieldError-CCI4UyFC.js";import"./AlertText-DQ5OQX7v.js";import"./AlertIcon-BTDbiAGg.js";import"./browser-DOjt7J27.js";import"./EmulatedBoldText-DzXTkxYI.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

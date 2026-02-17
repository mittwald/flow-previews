import{j as r}from"./iframe-DwsGXJVG.js";import{R as l,a as p}from"./Radio-B_NrQh2y.js";import{R as n}from"./RadioButton-C4RrdrMP.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CAGvyEhh.js";import{T as u}from"./Text-BV6qM8pO.js";import{C as c}from"./Content-knY6EnXd.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-qxgtoIlH.js";import"./index-Bl29J3nk.js";import"./index-Z94wDe_B.js";import"./ColumnLayout-BKDLh7BH.js";import"./useFieldComponent-BobnjoTA.js";import"./utils-DRn9wprx.js";import"./useMakeFocusable-B87Yxjec.js";import"./RadioGroup-Bt3isvx9.js";import"./FieldError-BZQRredP.js";import"./Text-_i5SHi6c.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BVLfeGH7.js";import"./useLabel-DGPoQV-x.js";import"./Label-C5wfq0Kb.js";import"./Hidden-CJnCNBv0.js";import"./SelectionIndicator-BqSVIa4a.js";import"./useFormValidation-Bdpbh0WL.js";import"./useFocus-DIaiJ-NX.js";import"./useFocusRing-DdmspiUG.js";import"./useControlledState-CRB4bW25.js";import"./FocusScope-4Fd3tZfM.js";import"./context-aVGfmL8k.js";import"./useFormReset-hk4HwqV2.js";import"./usePress-CckbZpi5.js";import"./useFocusable-s83SGTZ-.js";import"./VisuallyHidden-Fvx90J8z.js";import"./IconWarning-Ci9l-8b2.js";import"./remote-Co6v5gQ1.js";import"./Label-DOR8D5QK.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-D7jMR4ny.js";import"./FieldError-BPT_klMb.js";import"./AlertText-D-LhYLA_.js";import"./AlertIcon-BhWII3Mz.js";import"./browser-Cz_VorJk.js";import"./EmulatedBoldText-C-itzyky.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

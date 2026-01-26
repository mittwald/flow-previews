import{j as r}from"./iframe-CBKKDtut.js";import{R as l,b as p,a as n}from"./RadioButton-C0NqMvKj.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DtHtxgcs.js";import{T as u}from"./Text-DXycmlPy.js";import{C as c}from"./Content-CvzUvF4H.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D-Qq6Xd6.js";import"./index-Q7U-5PA1.js";import"./index-fGZr3eAJ.js";import"./ColumnLayout-B_pjWKmU.js";import"./useFieldComponent-377eOR22.js";import"./utils-CzD9rXMA.js";import"./useMakeFocusable-CM_z2r36.js";import"./RadioGroup-DVd_CMHx.js";import"./FieldError-6zsCD2mI.js";import"./Text-BipkjXt2.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-CoRvbdVN.js";import"./useLabel-BGNrCt7d.js";import"./Label-BzrfGAM1.js";import"./Hidden-BMhHdfnU.js";import"./SelectionIndicator-D8RCowii.js";import"./useFormValidation-FH2NBgqd.js";import"./useFocus-BrZp4zBY.js";import"./useControlledState-1Ujh64WW.js";import"./FocusScope-Ds7_8mr5.js";import"./useFocusRing-CCYWTYc5.js";import"./context-Bvh_z46p.js";import"./useFormReset-tFiefpak.js";import"./usePress-CCG6AvGE.js";import"./useFocusable-DQlHlYMC.js";import"./VisuallyHidden-BTRh3ybS.js";import"./IconWarning-BGeLtjSH.js";import"./remote-d08GjPRF.js";import"./Label-YKVXUmct.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-Cg2HsiHj.js";import"./FieldError-ncR-D_4-.js";import"./AlertText-BqYQV5FR.js";import"./AlertIcon-R8qprUXz.js";import"./browser-C9q5kf03.js";import"./EmulatedBoldText-eA5g4YLr.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ir=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,ir as __namedExportsOrder,tr as default};

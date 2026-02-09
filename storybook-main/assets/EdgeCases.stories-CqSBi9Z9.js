import{j as r}from"./iframe-agbTJ2rk.js";import{R as l,a as p}from"./Radio-zE1ilJDF.js";import{R as n}from"./RadioButton-yfxS3nbr.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-BlcMpBgm.js";import{T as u}from"./Text-DmtEYLwi.js";import{C as c}from"./Content-v0RivIxF.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Tp6-knTL.js";import"./index-Ck1XmQF-.js";import"./index-DPEh44cd.js";import"./ColumnLayout-CaC9D5Ff.js";import"./useFieldComponent-Bdg-2oVH.js";import"./utils-Cg5Rmuuc.js";import"./useMakeFocusable-BdwcOc_T.js";import"./RadioGroup-Dfih21OT.js";import"./FieldError-D6XTyUhB.js";import"./Text-B3pB98UM.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-6HUwn4n1.js";import"./useLabel-COQ7NCDT.js";import"./Label-Da0PgXCv.js";import"./Hidden-DehNc1Kw.js";import"./SelectionIndicator-DWRc_aAr.js";import"./useFormValidation-DxAxZRFR.js";import"./useFocus-BFA9Y66r.js";import"./useFocusRing-Df3re3NP.js";import"./useControlledState-JGLxFfPu.js";import"./FocusScope-COCAXuyM.js";import"./context-DNnfn7OO.js";import"./useFormReset-DoFpeMzh.js";import"./usePress-DrXmkjxU.js";import"./useFocusable-Dcrl6Kh-.js";import"./VisuallyHidden-C-SP4JvM.js";import"./IconWarning-DBJeVzaP.js";import"./remote-zpHok2y4.js";import"./Label-BNNjDH32.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DfJx7LFE.js";import"./FieldError-BH2blnd1.js";import"./AlertText-CYEytDO3.js";import"./AlertIcon-DN21MApN.js";import"./browser-DcYn1DNE.js";import"./EmulatedBoldText-_6M-JboB.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

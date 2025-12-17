import{j as r}from"./iframe-CuoLN6Ak.js";import{R as l,a as p}from"./Radio-B7-5e1ED.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-5qoh0w24.js";import{T as u}from"./Text-DdChUKUI.js";import{C as c}from"./Content-Dm8EOkvh.js";import{R as n}from"./RadioButton-DwtegVZk.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-YDIBuGER.js";import"./index-BqbRGCsY.js";import"./index-BaIyL5kt.js";import"./ColumnLayout-C--J87Im.js";import"./useFieldComponent-CpAAuxDf.js";import"./utils-C2NHa3pd.js";import"./useMakeFocusable-1eZHHZPG.js";import"./RadioGroup-C3RAOpdW.js";import"./FieldError-zdBOb0_m.js";import"./Text-C8IviCt6.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-BoKLrbzS.js";import"./useLabel-BM4FNoAK.js";import"./Label-D3KIvHQC.js";import"./Hidden-DgR9vk0-.js";import"./SelectionIndicator-BHxJDckt.js";import"./useFormValidation-BeXwm1Ez.js";import"./useFocus-unZl_nfX.js";import"./useControlledState-ItXXMvHS.js";import"./FocusScope-Bhi-HXNo.js";import"./useFocusRing-DRMfEjpH.js";import"./context-DM2sT4iG.js";import"./useFormReset-Cj_2aRsw.js";import"./usePress-CIMCLJey.js";import"./useFocusable-DB5_4vgf.js";import"./VisuallyHidden-CBSg7tA6.js";import"./IconApp-BDJ8KTSO.js";import"./remote-JKpMdsKf.js";import"./IconRadioOn-ChLjvmWm.js";import"./Label-CaF-n4li.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-K1ERg2wQ.js";import"./FieldError-BXdT0ENq.js";import"./IconDanger-CxUQbc1u.js";import"./browser-t1e5k5Lt.js";import"./EmulatedBoldText-BNHG0Gfg.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

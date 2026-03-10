import{j as r}from"./iframe-EfPcFfHz.js";import{R as l,a as p}from"./Radio-BEIhr7Li.js";import{R as n}from"./RadioButton-hZWK_cFl.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-D2u_VEAl.js";import{T as u}from"./Text-CRFCcT-P.js";import{C as c}from"./Content-CoxcjBGV.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CIh5pHt4.js";import"./index-BiW-O58f.js";import"./index-BhGEUnhH.js";import"./ColumnLayout-C4tJttYd.js";import"./useFieldComponent-BpgXbjM-.js";import"./utils-Cnkpfm_P.js";import"./useMakeFocusable-T9aRVjyn.js";import"./RadioGroup-BEiLyLlk.js";import"./FieldError-DGjeovc7.js";import"./Text-B4oHPq8R.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DLgE0tCZ.js";import"./useLabel-DunHH7R3.js";import"./Label-BDpZ1WTb.js";import"./Hidden-B6ugZRtA.js";import"./SelectionIndicator-CeAI6QPx.js";import"./useFormValidation-DvOB0MQU.js";import"./useFocus-7edk4FfO.js";import"./useFocusRing-8P8y2KFJ.js";import"./useControlledState-WqoJm4pI.js";import"./FocusScope-CSvsVBha.js";import"./context-kn7lEdrW.js";import"./useFormReset-CDR6jl2x.js";import"./usePress-CzmE2CoS.js";import"./useFocusable-CT_qKlvn.js";import"./VisuallyHidden-CH2GsO1v.js";import"./IconWarning-73LpV07E.js";import"./remote-D3-8ROh8.js";import"./Label-DkribH7U.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CSMkY09C.js";import"./FieldError-Bm6xTrGY.js";import"./AlertText-BC8DinUo.js";import"./AlertIcon-CtDfui7q.js";import"./browser-hyQhTs1N.js";import"./EmulatedBoldText-DO_ezaQd.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

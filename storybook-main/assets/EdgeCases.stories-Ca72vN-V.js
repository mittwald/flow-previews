import{j as r}from"./iframe-B2CTi6cm.js";import{R as l,a as p}from"./Radio-cmvcB77e.js";import{R as n}from"./RadioButton-Cm30ssjp.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DJ3CxucX.js";import{T as u}from"./Text-4QTNuVgz.js";import{C as c}from"./Content-CXBi8j7T.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C7mc_ao_.js";import"./index-C6Xw33Ma.js";import"./index-DqADrqmd.js";import"./ColumnLayout-C2W5z5Dv.js";import"./useFieldComponent-DO-gEAYc.js";import"./utils-CFhs-kxq.js";import"./useMakeFocusable-CuEJFFls.js";import"./RadioGroup-CLyZk7Ya.js";import"./FieldError-Cj-zQd3o.js";import"./Text-CtUv1EPC.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Cx6Bm7Pi.js";import"./useLabel-DatykuNG.js";import"./Label-tk3Z2cvp.js";import"./Hidden-DPfyW1TC.js";import"./SelectionIndicator-BHeVA0_4.js";import"./useFormValidation-BDHhHN4L.js";import"./useFocus-iUa6wpVM.js";import"./useFocusRing-G6UDZPL7.js";import"./useControlledState-D4tpAkeT.js";import"./FocusScope-DAIUMiFj.js";import"./context-DlyTwf6g.js";import"./useFormReset-BMX0RNLQ.js";import"./usePress-CXOW9Qje.js";import"./useFocusable-DeW7JE_I.js";import"./VisuallyHidden-D844FGjJ.js";import"./IconWarning-hrUSNLB1.js";import"./remote-C6QTRNf9.js";import"./Label-DccH0oyj.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BgUQg2ov.js";import"./FieldError-Cpb_w0Fh.js";import"./AlertText-Dh_kjMlW.js";import"./AlertIcon-Bqwt-hqt.js";import"./browser-Cn-sjrEd.js";import"./EmulatedBoldText-B1qN59os.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

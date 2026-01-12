import{j as r}from"./iframe-DkC9HeFh.js";import{R as l,b as p,a as n}from"./RadioButton-CgJ05ndB.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-Dt1hmiBN.js";import{T as u}from"./Text-B-gx4bXK.js";import{C as c}from"./Content-CkVpucpm.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-1oYrvkPj.js";import"./index-DvyT4dL7.js";import"./index-84tLr-0T.js";import"./ColumnLayout-BSSyutkR.js";import"./useFieldComponent-eCPWR12U.js";import"./utils-CQbe0cgS.js";import"./useMakeFocusable-DHEcDkEu.js";import"./RadioGroup-Cmw-qd-l.js";import"./FieldError-CNoEBaIo.js";import"./Text-BZKGVCR5.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-D5R2a4m8.js";import"./useLabel-Yk9h4-sj.js";import"./Label-Dz_bjD6f.js";import"./Hidden-Dt8SDEzH.js";import"./SelectionIndicator-2dj1bxWN.js";import"./useFormValidation-DmYU2vdY.js";import"./useFocus-DkNOoSBL.js";import"./useControlledState-Ul0j90Sg.js";import"./FocusScope-Bsk9Ww9W.js";import"./useFocusRing-C9ROKOON.js";import"./context-FwWFVwDs.js";import"./useFormReset-BF2XnUgU.js";import"./usePress-zXWrYZpb.js";import"./useFocusable-CeYJrI7n.js";import"./VisuallyHidden-DWtp1z23.js";import"./IconWarning-6DY0-AAa.js";import"./remote-C2KQESr1.js";import"./Label-Bmyd95n1.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BMEualnj.js";import"./FieldError-Dbnkzdo1.js";import"./AlertText-DN8jvMhh.js";import"./AlertIcon-BRQK8hpu.js";import"./browser-tA6G_ksz.js";import"./EmulatedBoldText-ubSX6qOz.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

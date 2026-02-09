import{j as r}from"./iframe-DsvUdpXw.js";import{R as l,a as p}from"./Radio-Cz7pe62E.js";import{R as n}from"./RadioButton-D_m8GUr_.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-fLNYFJXo.js";import{T as u}from"./Text-DX5v3ksG.js";import{C as c}from"./Content-BVfNBqu9.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BHKkbUKe.js";import"./index-CAxJgE7t.js";import"./index-BOZmgZtE.js";import"./ColumnLayout-B--zbf6y.js";import"./useFieldComponent-CWVnpPPS.js";import"./utils-elFy1-Tx.js";import"./useMakeFocusable-CZXjAvHJ.js";import"./RadioGroup-CTpjzMEl.js";import"./FieldError-S3zhgpi7.js";import"./Text-qH9eQPgP.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-_ij7bXRe.js";import"./useLabel-CEPtaVyT.js";import"./Label-E9gf7XUf.js";import"./Hidden-CTz_rsXv.js";import"./SelectionIndicator-CDySPjGG.js";import"./useFormValidation-B3UJ98ri.js";import"./useFocus-DN2AExbL.js";import"./useFocusRing-DkxfWW5E.js";import"./useControlledState-HbpZAl0m.js";import"./FocusScope-eXu984DB.js";import"./context-BSJoRVhT.js";import"./useFormReset-BZPoHMi4.js";import"./usePress-BFT-1ljl.js";import"./useFocusable-CD1pLlOX.js";import"./VisuallyHidden-Ds80HbqR.js";import"./IconWarning-DeQxeoQB.js";import"./remote-Bzinmuoi.js";import"./Label-V0M08dzp.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CuRFYkX4.js";import"./FieldError-DMawyIiV.js";import"./AlertText-DtX3FOrI.js";import"./AlertIcon-C2Vz7YO6.js";import"./browser-BtOTkQbR.js";import"./EmulatedBoldText-7KsmeNIZ.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

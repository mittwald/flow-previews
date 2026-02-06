import{j as r}from"./iframe-DITN2CQJ.js";import{R as l,a as p}from"./Radio-CCpB8JDv.js";import{R as n}from"./RadioButton-C7f1nqeK.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-Cco5UcTA.js";import{T as u}from"./Text-CADg3_Hr.js";import{C as c}from"./Content-DDYIq-3j.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-dTWTX0ol.js";import"./index-DMvUg0Ng.js";import"./index-CwMYtruy.js";import"./ColumnLayout-C-8hNwT-.js";import"./useFieldComponent-CFjzq3ou.js";import"./utils-BKdkt1x6.js";import"./useMakeFocusable-B4ApSvkk.js";import"./RadioGroup-Cf0urrx4.js";import"./FieldError-DyUcL9VR.js";import"./Text-C3mpKQD6.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-CKWsALrB.js";import"./useLabel-DxgBaz-V.js";import"./Label-B4MEtlDn.js";import"./Hidden-C_aQw1AA.js";import"./SelectionIndicator-tBe1rngb.js";import"./useFormValidation-PWdhcFqO.js";import"./useFocus-jV9bksDI.js";import"./useFocusRing-DGbEI6JP.js";import"./useControlledState-CEL2ngQO.js";import"./FocusScope-1T1zyEBb.js";import"./context-DSmvJi-9.js";import"./useFormReset-DRsSvhwB.js";import"./usePress-Bo3aLfgI.js";import"./useFocusable-DLFLzCMb.js";import"./VisuallyHidden-Mqey0SE0.js";import"./IconWarning-CkCNWluG.js";import"./remote-C6sL0hfk.js";import"./Label-DJUexJHI.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-Bu36a-Wr.js";import"./FieldError-B_BzuzIl.js";import"./AlertText-Kmcv7hqN.js";import"./AlertIcon-C5wCr6jC.js";import"./browser-BAwbicjx.js";import"./EmulatedBoldText-BtAVmnSC.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

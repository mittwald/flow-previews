import{j as r}from"./iframe-BECefjM4.js";import{R as l,a as p}from"./Radio-ByEbhgy4.js";import{R as n}from"./RadioButton-DQNKlCDl.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-BVkptLu2.js";import{T as u}from"./Text-lZ2PbEqF.js";import{C as c}from"./Content-LSOtaIIS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BuliJvUF.js";import"./index-CR5wd-c8.js";import"./index-BGQ8HYEh.js";import"./ColumnLayout-BHRsL1Lq.js";import"./useFieldComponent-B5iNz-5m.js";import"./utils-bqUpXLHN.js";import"./useMakeFocusable-45bGOva1.js";import"./RadioGroup-DKnRPMb8.js";import"./FieldError-8R1qsZQS.js";import"./Text-IrzRAzMs.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-FdseNRzi.js";import"./useLabel-d0BVjP-J.js";import"./Label-DPandUgz.js";import"./Hidden-DMWiq0rX.js";import"./SelectionIndicator-B2vofSgQ.js";import"./useFormValidation-I8j-SbQp.js";import"./useFocus-CIRpkrn7.js";import"./useFocusRing-DIpVtkGc.js";import"./useControlledState-2Tdfwl5E.js";import"./FocusScope-CjCXh94P.js";import"./context-iJTSqlsV.js";import"./useFormReset-CDquwT_C.js";import"./usePress-427CihAL.js";import"./useFocusable-DTBBh1VF.js";import"./VisuallyHidden-GWiC-wFe.js";import"./IconWarning-CvVn1QxU.js";import"./remote-CqI4D0us.js";import"./Label-CVvbUjW4.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CcdVRlpp.js";import"./FieldError-B21MiKyw.js";import"./AlertText-DIDGLLaX.js";import"./AlertIcon-B57cAQNM.js";import"./browser-C9O3Z26r.js";import"./EmulatedBoldText-DVZs9jiX.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

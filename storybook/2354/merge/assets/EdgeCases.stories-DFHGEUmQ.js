import{j as r}from"./iframe-BLMVSPV3.js";import{R as l,a as p}from"./Radio-CCORpX8l.js";import{R as n}from"./RadioButton-CNT1DvTi.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-BSn7zZxq.js";import{T as u}from"./Text-CGLO_VNW.js";import{C as c}from"./Content-DUxgSWC5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B0rn9FTV.js";import"./index-YglXY0sG.js";import"./index-B-iUx4vd.js";import"./ColumnLayout-C3JAoHUD.js";import"./useFieldComponent-y-VnQdYS.js";import"./utils-je6Mfjnf.js";import"./useMakeFocusable-BZckWT91.js";import"./RadioGroup-CjRC_teq.js";import"./FieldError-CUXp9-J-.js";import"./Text-DPHxU6u7.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-CkFb-Mj9.js";import"./useLabel-DcRiwsCk.js";import"./Label-BuUunTyu.js";import"./Hidden-BcBJmzcB.js";import"./SelectionIndicator-MBj-w85S.js";import"./useFormValidation-CsmzuQo6.js";import"./useFocus-B92CKOsl.js";import"./useFocusRing-IVoDVSxb.js";import"./useControlledState-Bp8O9Zqw.js";import"./FocusScope-uhT9mVfL.js";import"./context-BPm1HUwp.js";import"./useFormReset-7ZGeCzym.js";import"./usePress-DgsdN2D5.js";import"./useFocusable-DsXmOaAq.js";import"./VisuallyHidden-DQ4qIwkH.js";import"./IconWarning-DFK0SIT3.js";import"./remote-B_iWR4WH.js";import"./Label-C8Rr5uKt.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CLP_FKMn.js";import"./FieldError-C9r0kVik.js";import"./AlertText-Btk8Ksd_.js";import"./AlertIcon-BrGMsY0L.js";import"./browser-CtcijgRV.js";import"./EmulatedBoldText-DNZQf_gm.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-DGnxviCN.js";import{R as l,a as p}from"./Radio-BXLWJ03w.js";import{R as n}from"./RadioButton-BmgddNKY.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-C7gpXtmD.js";import{T as u}from"./Text-VNnveGPv.js";import{C as c}from"./Content-7cyJH864.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BKDhK7wE.js";import"./index-BGEs2x-a.js";import"./index-CLLV6gyd.js";import"./ColumnLayout-BycTNC_Y.js";import"./useFieldComponent-YlKWY1fY.js";import"./utils-BkfS5ksp.js";import"./useMakeFocusable-BsT1WoXV.js";import"./RadioGroup-0JeUUmjM.js";import"./FieldError-er7nowFJ.js";import"./Text-DvHtl8Bn.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DxH8Icum.js";import"./useLabel-BPNr7xBu.js";import"./Label-5xK8AOcv.js";import"./Hidden-v-Wf_Hux.js";import"./SelectionIndicator-BVYQMpc5.js";import"./useFormValidation-Dta_Z6Hx.js";import"./useFocus--s-Wd8Ep.js";import"./useFocusRing-Bv9AUNti.js";import"./useControlledState-Tnf2yuXg.js";import"./FocusScope-CggPEhUf.js";import"./context-UPqYfqWR.js";import"./useFormReset-DURLcehp.js";import"./usePress-CyY11qHx.js";import"./useFocusable-Qpttz7ZN.js";import"./VisuallyHidden-BQzdTzN8.js";import"./IconWarning-B9r0STX6.js";import"./remote-B6BjMgpw.js";import"./Label-C_bFUpyc.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-ClYonFTS.js";import"./FieldError-D8VjacOs.js";import"./AlertText-CALscOJV.js";import"./AlertIcon-DgP01cQO.js";import"./browser-Cb_u6_6F.js";import"./EmulatedBoldText-DzMWb8wu.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

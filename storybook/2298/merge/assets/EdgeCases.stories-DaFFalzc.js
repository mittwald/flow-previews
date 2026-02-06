import{j as r}from"./iframe-CTX0Bv2_.js";import{R as l,a as p}from"./Radio-BU_LJE4i.js";import{R as n}from"./RadioButton-B2Qo3PH8.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-C7mK7d-D.js";import{T as u}from"./Text-DLhfgo2a.js";import{C as c}from"./Content-BZpMXzlS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CqO4Js9m.js";import"./index-BFwThDrE.js";import"./index-Cuy-twEi.js";import"./ColumnLayout-DXtVry1g.js";import"./useFieldComponent-mADlv6K1.js";import"./utils-DEP6wxfF.js";import"./useMakeFocusable-DqRzBHJp.js";import"./RadioGroup-BC8S0Ier.js";import"./FieldError-DPNf_GCP.js";import"./Text-CfE4Vxx5.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-CEQjTe99.js";import"./useLabel-CflB3N3A.js";import"./Label-B9GQQ3x4.js";import"./Hidden-LDMxuxmc.js";import"./SelectionIndicator-BIEwPYk3.js";import"./useFormValidation-CLweFpah.js";import"./useFocus-Brpf5vcF.js";import"./useFocusRing-jdOUMH5T.js";import"./useControlledState-BSzbNF-6.js";import"./FocusScope-Dney2d0V.js";import"./context-BlMA_qTH.js";import"./useFormReset-CFaexdLs.js";import"./usePress-BBVfaVqb.js";import"./useFocusable-C46UWCUq.js";import"./VisuallyHidden-DBqpLolF.js";import"./IconWarning-nHMyX661.js";import"./remote-Dp_KpE6s.js";import"./Label-Dhp6BO4i.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-Ci9fYHdG.js";import"./FieldError-BCaKsj_Z.js";import"./AlertText-CzATBvzT.js";import"./AlertIcon-CvLHNETq.js";import"./browser-NwcAgtgI.js";import"./EmulatedBoldText-EuanT-4h.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

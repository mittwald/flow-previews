import{j as r}from"./iframe-DJlgDtsR.js";import{R as l,a as p}from"./Radio-0jl2tjZq.js";import{R as n}from"./RadioButton-CBs98YYL.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-NtdTHxjH.js";import{T as u}from"./Text-B6SLv6do.js";import{C as c}from"./Content-CcvBERv_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-1zQAiLcC.js";import"./index-De4rcGI5.js";import"./index-Ds6_MS6L.js";import"./ColumnLayout-D9Szx4mp.js";import"./useFieldComponent-Bmr1JhS0.js";import"./utils-xFKhKznh.js";import"./useMakeFocusable-C5_Ia2qB.js";import"./RadioGroup-BqmhP1cc.js";import"./FieldError-Cpk3ITKU.js";import"./Text-DD0-81CT.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BUDe3usU.js";import"./useLabel-KImy5Ex-.js";import"./Label-BBNmyes_.js";import"./Hidden-4sLzj03B.js";import"./SelectionIndicator-DnAH24RP.js";import"./useFormValidation-Dup-Fz52.js";import"./useFocus-oMd_AJz-.js";import"./useFocusRing-BhR5IplG.js";import"./useControlledState-C0KUsyk2.js";import"./FocusScope-C9j0_60-.js";import"./context-XFPr5nuV.js";import"./useFormReset-yK5dVmLs.js";import"./usePress-CWKDBuw6.js";import"./useFocusable-CsEyjS4C.js";import"./VisuallyHidden-BJ_y0FNA.js";import"./IconWarning-Cyya3L9S.js";import"./remote-CayAs8X4.js";import"./Label-B-hN2Lzv.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-D9db5kL2.js";import"./FieldError-CeTb8jEt.js";import"./AlertText-DmRH4lNK.js";import"./AlertIcon-nCFQHvgi.js";import"./browser-C6YBs1UC.js";import"./EmulatedBoldText-BsjtvuiU.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-CLJtUSH1.js";import{R as l,a as p}from"./Radio-B2BnZeT3.js";import{R as n}from"./RadioButton-DrYezw58.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-B_lFV56s.js";import{T as u}from"./Text-B6Fe6olk.js";import{C as c}from"./Content-BdM4XkRz.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-ddZp4AYb.js";import"./index-CLGZrIuY.js";import"./index-C5KxKItK.js";import"./ColumnLayout-n_Jz4fiI.js";import"./useFieldComponent-BH0Y7qa0.js";import"./utils-DvtEjNbs.js";import"./useMakeFocusable-DnRdDxtz.js";import"./RadioGroup-DrjS93rv.js";import"./FieldError-DZmbq2tb.js";import"./Text-COsBjVJz.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DsvsQY6J.js";import"./useLabel-DV7QK5Z-.js";import"./Label-zeGTIhsR.js";import"./Hidden-BOcIw6_e.js";import"./SelectionIndicator-Dn3j6216.js";import"./useFormValidation-vO_E-FCH.js";import"./useFocus-CAJuP4TC.js";import"./useFocusRing-lsntDLZI.js";import"./useControlledState-BRozYY3l.js";import"./FocusScope-DhCz7nLk.js";import"./context-DZMEEftG.js";import"./useFormReset-3JYpIfMS.js";import"./usePress-bTiOWaRI.js";import"./useFocusable-DsRGTtrf.js";import"./VisuallyHidden-CPqjoTjm.js";import"./IconWarning-RoA_lEUP.js";import"./remote-B_1lzL7i.js";import"./Label-CL2lxKWa.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DOmCW1HP.js";import"./FieldError-DOHJV3_t.js";import"./AlertText-Cdx49GPM.js";import"./AlertIcon-Gt2BTk8C.js";import"./browser-BMt8iY1_.js";import"./EmulatedBoldText-BqLHzBf0.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

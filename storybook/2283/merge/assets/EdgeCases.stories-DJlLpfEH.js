import{j as r}from"./iframe-lb0QDBc2.js";import{R as l,b as p,a as n}from"./RadioButton-C0soQvrS.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-B_UmtcKf.js";import{T as u}from"./Text-Bvo-yLEA.js";import{C as c}from"./Content-DGSu-Ee-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CMLBvcrR.js";import"./index-B9b6xQ5S.js";import"./index-DLJvSM0l.js";import"./ColumnLayout-3kKJrHIZ.js";import"./useFieldComponent-DzHSa8uO.js";import"./utils-r2dAqIcX.js";import"./useMakeFocusable-BETcaVqe.js";import"./RadioGroup-DSP0KvwO.js";import"./FieldError-dmorJJtq.js";import"./Text-DV3fQztC.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DtivvrEr.js";import"./useLabel-DBnvm8X4.js";import"./Label-BdYNaN4j.js";import"./Hidden-DFHOpifw.js";import"./SelectionIndicator-DyUDH3aS.js";import"./useFormValidation-M5q2KkbC.js";import"./useFocus-B48NrLMU.js";import"./useFocusRing-J18h0CnC.js";import"./useControlledState-BS6Up44I.js";import"./FocusScope-BL38dLR2.js";import"./context-DKVhGweU.js";import"./useFormReset-BIwT2nL6.js";import"./usePress-CgYa4G9K.js";import"./useFocusable-BRnBN5zK.js";import"./VisuallyHidden-k_Pf5ETO.js";import"./IconWarning-BeH6azjz.js";import"./remote-HK64Xy28.js";import"./Label-DP_lb_cz.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DaeZ3M4_.js";import"./FieldError-BAOq6bLD.js";import"./AlertText-DpQCB0Tk.js";import"./AlertIcon-DWhGd_Tx.js";import"./browser-D6xfswL2.js";import"./EmulatedBoldText-CqgiFE-g.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

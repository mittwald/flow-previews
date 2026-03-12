import{j as r}from"./iframe-C8tsaODo.js";import{R as l,a as p}from"./Radio-CPL_6LB3.js";import{R as n}from"./RadioButton-CNHS8FaC.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-B_3BERYx.js";import{T as u}from"./Text-BE7lE0T8.js";import{C as c}from"./Content-Cp_HsIUT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BTZ0wFju.js";import"./index-CLgTDDI2.js";import"./index-BNoG6unV.js";import"./ColumnLayout-BQxifgw7.js";import"./useFieldComponent-FgbLRzY4.js";import"./utils-CdcYI7XL.js";import"./useMakeFocusable-z_gQmx2U.js";import"./RadioGroup-0qBdBUwr.js";import"./FieldError-DSXMmXMO.js";import"./Text-BkxlIu3p.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Ch0mipSV.js";import"./useLabel-oJhcJRxp.js";import"./Label-D1q-_ISO.js";import"./Hidden-BspDtBD-.js";import"./SelectionIndicator-5GEQvOaX.js";import"./useFormValidation-CZJdaAR2.js";import"./useFocus-D0DC1KKH.js";import"./platform-Dz8CwCz0.js";import"./useFocusRing-DauayxVe.js";import"./useControlledState-CN29789s.js";import"./FocusScope-DFjW_d09.js";import"./context-BwdmRhET.js";import"./useFormReset-BpTKK099.js";import"./usePress-vv50L64r.js";import"./useFocusable-BW2xec3w.js";import"./VisuallyHidden-hgCntKQk.js";import"./IconWarning-Up7WC4e0.js";import"./remote-Ckar2tK9.js";import"./Label-1oLHWqvU.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-Bu8yFg8Y.js";import"./FieldError-EQJdnOUU.js";import"./AlertText-BlUc9teP.js";import"./AlertIcon-DJlFLAIk.js";import"./browser-qgMJ3NzC.js";import"./EmulatedBoldText-RMBLGP7I.js";const mr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const pr=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,pr as __namedExportsOrder,mr as default};

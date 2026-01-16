import{j as r}from"./iframe-D2BYf5-g.js";import{R as l,b as p,a as n}from"./RadioButton-tS-uTy-x.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DdI2wLV3.js";import{T as u}from"./Text-D6N8Heh9.js";import{C as c}from"./Content-nwKCUjyy.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CbIDm01r.js";import"./index-CRlONQd4.js";import"./index-Bu8wVR5j.js";import"./ColumnLayout-netmLq3E.js";import"./useFieldComponent-BFOdLrJ8.js";import"./utils-DHZ51AFQ.js";import"./useMakeFocusable-COsgIBiI.js";import"./RadioGroup-B9Han-QL.js";import"./FieldError-RWcRHk2C.js";import"./Text-Dog52uMi.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-DfX8wS-B.js";import"./useLabel-DtwWh7yV.js";import"./Label-Be_gFKko.js";import"./Hidden-CfpJTou_.js";import"./SelectionIndicator-BJ_6aDpT.js";import"./useFormValidation-BTfq9KBg.js";import"./useFocus-ORvRv07U.js";import"./useControlledState-fyUF26L0.js";import"./FocusScope-4_J7OwCf.js";import"./useFocusRing-DGJLUvQM.js";import"./context-DWMR9XE1.js";import"./useFormReset-Dqz1EECq.js";import"./usePress-wVuL2i-g.js";import"./useFocusable-BL0hS6to.js";import"./VisuallyHidden-DcwEctQc.js";import"./IconWarning-BvAkc2LD.js";import"./remote-C9AuEG_9.js";import"./Label-DC-_uf6W.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-C9QysfdO.js";import"./FieldError-DX5_shM3.js";import"./AlertText-Ds9fEZFP.js";import"./AlertIcon-LWJoxW2P.js";import"./browser-CRHYBb-w.js";import"./EmulatedBoldText-BewoRcqC.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

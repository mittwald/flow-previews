import{j as r}from"./iframe-DU1OTSEW.js";import{R as l,a as p}from"./Radio-DSyC1CX-.js";import{R as n}from"./RadioButton-BLGGZgYD.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-BL3_T-02.js";import{T as u}from"./Text-BlwSaqXM.js";import{C as c}from"./Content-BXIdNakr.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C_TICRXM.js";import"./index-nIZOvY-k.js";import"./index-Ben_k6_D.js";import"./ColumnLayout-BNq0-N6F.js";import"./useFieldComponent-DAmXFBUF.js";import"./utils-Dj7KEBV3.js";import"./useMakeFocusable-7nPSjM8m.js";import"./RadioGroup-fsZuLWP9.js";import"./FieldError-C-1FXxCh.js";import"./Text-iBzBCpEi.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DFVlj26J.js";import"./useLabel-B3DB9qnR.js";import"./Label-BJoTK4AB.js";import"./Hidden-UY4SCaak.js";import"./SelectionIndicator-BBXAzCHo.js";import"./useFormValidation-Bnl6yMKM.js";import"./useFocus-u6Gylu9g.js";import"./useFocusRing-L_sy4AuI.js";import"./useControlledState-C4NYpY3o.js";import"./FocusScope-BR4Z_k_s.js";import"./context-MHXBCA58.js";import"./useFormReset-B6aj4tVR.js";import"./usePress-DCIqPyrL.js";import"./useFocusable-XjJjjkQd.js";import"./VisuallyHidden---d_BDnt.js";import"./IconWarning-BOLd-bsg.js";import"./remote-C4J6eDzq.js";import"./Label-BFsMAETu.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-npOcqoB_.js";import"./FieldError-lAQ6GllT.js";import"./AlertText-DRGtE0Z7.js";import"./AlertIcon-_4be_GIR.js";import"./browser-B-EQy8Zd.js";import"./EmulatedBoldText-IXPdWydI.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

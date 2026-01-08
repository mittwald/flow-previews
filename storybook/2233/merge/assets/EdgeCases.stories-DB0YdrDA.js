import{j as r}from"./iframe-BMquwUxp.js";import{R as l,b as p,a as n}from"./RadioButton-7Ge1hFmm.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-0wowDQ5U.js";import{T as u}from"./Text-EG4UQ_l2.js";import{C as c}from"./Content-D3dymt8s.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DgzAUF5h.js";import"./index-BYK8miAY.js";import"./index-cAMRUrux.js";import"./ColumnLayout-BBdxzWH-.js";import"./useFieldComponent-7OMeXUSU.js";import"./utils-C54becjs.js";import"./useMakeFocusable-C532WCsY.js";import"./RadioGroup-RKa8waun.js";import"./FieldError-D0s5eFn1.js";import"./Text-CPXkgTZA.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-i5hQHr5E.js";import"./useLabel-BNLCM250.js";import"./Label-BA-uOG5q.js";import"./Hidden-DXpev5BT.js";import"./SelectionIndicator-BIlCebKJ.js";import"./useFormValidation-BU69543b.js";import"./useFocus-DaRXVXg_.js";import"./useControlledState-C-7-yrsk.js";import"./FocusScope-BR9ShKUP.js";import"./useFocusRing-CjhJ1DIN.js";import"./context-BcuHL9mG.js";import"./useFormReset-DGUxmLDL.js";import"./usePress-B-RZvczw.js";import"./useFocusable-DNP9d3st.js";import"./VisuallyHidden-D31Z6xaf.js";import"./IconWarning-wcTYZTVE.js";import"./remote-CiXlw4PI.js";import"./Label-RP2jfdXb.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-C4X4wsGr.js";import"./FieldError-DmIKwRtH.js";import"./InlineAlert-AYUYuGXv.js";import"./AlertIcon-COvVg6Bc.js";import"./browser-CBlt42Oy.js";import"./EmulatedBoldText-CntJSrfE.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

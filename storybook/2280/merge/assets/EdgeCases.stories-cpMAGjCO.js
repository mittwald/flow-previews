import{j as r}from"./iframe-Cx5kJuuA.js";import{R as l,b as p,a as n}from"./RadioButton-DlEKUy4i.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-B6mCgN5P.js";import{T as u}from"./Text-C98Jvmov.js";import{C as c}from"./Content-CuMgqWLX.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CLOWDrbo.js";import"./index-DK83sfEz.js";import"./index-BqoyVlZ7.js";import"./ColumnLayout-CnDOjd85.js";import"./useFieldComponent-DpBpP7du.js";import"./utils-Nk4paMN-.js";import"./useMakeFocusable-CUyUw7BO.js";import"./RadioGroup-DTrxChwX.js";import"./FieldError-UHRLTLut.js";import"./Text-CA_aswYo.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BHxxWVUu.js";import"./useLabel-B4Wunpgz.js";import"./Label-DPB2sN32.js";import"./Hidden-BIWwaIRP.js";import"./SelectionIndicator-Dp8Rqhcc.js";import"./useFormValidation-CmFpdOnE.js";import"./useFocus-DbL3EqSH.js";import"./useFocusRing-idhb0ztA.js";import"./useControlledState-D1xezhK5.js";import"./FocusScope-wgzi2f-G.js";import"./context-CpMzWCEP.js";import"./useFormReset-roVUmu5c.js";import"./usePress-LbgF0OFY.js";import"./useFocusable-BtlUXhgP.js";import"./VisuallyHidden-i8gu61hs.js";import"./IconWarning-BDhnLpaV.js";import"./remote-C9UyjJTP.js";import"./Label-Da9GdDN8.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CIuieC62.js";import"./FieldError-BCxxTn6h.js";import"./AlertText-BwdeDomp.js";import"./AlertIcon-DvMPToF_.js";import"./browser-D-pbaBij.js";import"./EmulatedBoldText--C3vSC84.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

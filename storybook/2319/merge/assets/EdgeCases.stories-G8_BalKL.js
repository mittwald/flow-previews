import{j as r}from"./iframe-lFICOVMG.js";import{R as l,a as p}from"./Radio-By6xibRZ.js";import{R as n}from"./RadioButton-GMgYi8zZ.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-BiJ8IEd4.js";import{T as u}from"./Text-BQwiR71m.js";import{C as c}from"./Content-CcAghgec.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C618gI1l.js";import"./index-C8_VRp74.js";import"./index-DUpWbeKv.js";import"./ColumnLayout-CC3szLiF.js";import"./useFieldComponent-70N6l4jn.js";import"./utils-DhhSlmx9.js";import"./useMakeFocusable-crCL21XI.js";import"./RadioGroup-DTFiNMMn.js";import"./FieldError-DXs5idvC.js";import"./Text-CinvLCxd.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DIwrOEgx.js";import"./useLabel-A9ok_7_u.js";import"./Label-nxHLTLm-.js";import"./Hidden--bJJbaK3.js";import"./SelectionIndicator-CW-bKP1t.js";import"./useFormValidation-BdcfYetn.js";import"./useFocus-fqIQg8qR.js";import"./useFocusRing-DeOtkCiq.js";import"./useControlledState-BZJPMeD2.js";import"./FocusScope-CyJq-kGM.js";import"./context-Sy7BhgRt.js";import"./useFormReset-CPUmIViP.js";import"./usePress-BW_bFHXv.js";import"./useFocusable-ByJ0NNOg.js";import"./VisuallyHidden-BALX4uV5.js";import"./IconWarning-4K-DqIQK.js";import"./remote-CRPYY61Z.js";import"./Label-WsCexfXL.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-D7SPmL6j.js";import"./FieldError-Ba2n5nZe.js";import"./AlertText-D8XKoaWc.js";import"./AlertIcon-BTBT69bo.js";import"./browser-CN95VINd.js";import"./EmulatedBoldText-BsTUWTNh.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

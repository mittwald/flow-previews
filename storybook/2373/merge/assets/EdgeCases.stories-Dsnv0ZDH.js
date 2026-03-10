import{j as r}from"./iframe-BOfxQ126.js";import{R as l,a as p}from"./Radio-1HG3iTI8.js";import{R as n}from"./RadioButton-CvMZg4RW.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DRXuJPXE.js";import{T as u}from"./Text-kIO13lDY.js";import{C as c}from"./Content-C0CTBJnI.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-sv_DULJq.js";import"./index-BJ7B_kXa.js";import"./index-X6kmY2GD.js";import"./ColumnLayout-CDuuZ_Dc.js";import"./useFieldComponent-D5YpTCds.js";import"./utils-Ca0-H8MP.js";import"./useMakeFocusable-BtYLegqF.js";import"./RadioGroup-9HjWLEea.js";import"./FieldError-GcSEBXG9.js";import"./Text-OoL-eb0_.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-CRtfSpWI.js";import"./useLabel-5EK40Aa-.js";import"./Label-CbvEG18U.js";import"./Hidden-BUteoyFO.js";import"./SelectionIndicator-DVX-Gi0p.js";import"./useFormValidation-CxieGJiT.js";import"./useFocus-CUROCE8M.js";import"./useFocusRing-i6kyKwnh.js";import"./useControlledState-DE1u8yHr.js";import"./FocusScope-CCHjHw-t.js";import"./context-Bpmop-v_.js";import"./useFormReset-B-rsDa9Z.js";import"./usePress-up0eurfY.js";import"./useFocusable-C918yQby.js";import"./VisuallyHidden-DfBCvB4u.js";import"./IconWarning-BoBPkWIf.js";import"./remote-DjEyU7NV.js";import"./Label-CqRpIaXO.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DE5_GH3M.js";import"./FieldError-DCo5F_nc.js";import"./AlertText-DpLHter-.js";import"./AlertIcon-CIUnjm1o.js";import"./browser-Ch4oJYG9.js";import"./EmulatedBoldText-LIZTvG-s.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

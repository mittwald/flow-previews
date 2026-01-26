import{j as r}from"./iframe-DcHapM8k.js";import{R as l,b as p,a as n}from"./RadioButton-C9teMRaM.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-C69gibug.js";import{T as u}from"./Text-BqUUaAMX.js";import{C as c}from"./Content-BnZYVgku.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-F2rlWCYo.js";import"./index-DtEczAXX.js";import"./index-Ba4Wgmch.js";import"./ColumnLayout-IqTlqDXK.js";import"./useFieldComponent-DLXIz4kk.js";import"./utils-BN-Wf9GB.js";import"./useMakeFocusable-DvxdDS9-.js";import"./RadioGroup-D8NBji7r.js";import"./FieldError-DeohvbOn.js";import"./Text-KTnK0cez.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-N_ssJC2Q.js";import"./useLabel-DVAEGcEm.js";import"./Label-Cc29pwI9.js";import"./Hidden-BBxp_Bwo.js";import"./SelectionIndicator-nDWEY-Pb.js";import"./useFormValidation-C5Tej2mU.js";import"./useFocus-ZXD30Rmm.js";import"./useControlledState-CD18I4-6.js";import"./FocusScope-DwQWTV3n.js";import"./useFocusRing-Dt3gTaal.js";import"./context-Camfekg3.js";import"./useFormReset-DByFRxt8.js";import"./usePress-DRRwHOXQ.js";import"./useFocusable-CPQk5Kbw.js";import"./VisuallyHidden-ZuD5qc8D.js";import"./IconWarning-8t1q80cl.js";import"./remote-CrHpKc5j.js";import"./Label-C_3MZF40.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter--D1phWvd.js";import"./FieldError-BzyrakFb.js";import"./AlertText-CmRq4USe.js";import"./AlertIcon-aSf31ti-.js";import"./browser-BhJkGPhR.js";import"./EmulatedBoldText-BsmORSBd.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

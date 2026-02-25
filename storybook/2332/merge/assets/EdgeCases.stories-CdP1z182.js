import{j as r}from"./iframe-DCel2PhG.js";import{R as l,a as p}from"./Radio-B3dIIz2l.js";import{R as n}from"./RadioButton-CT9A1M5N.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CW9Y9pNt.js";import{T as u}from"./Text-CfcNN3C1.js";import{C as c}from"./Content-B1u41BWn.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DYf6GQMN.js";import"./index-BfJDZYeV.js";import"./index-DcvCSlSd.js";import"./ColumnLayout-Cd8kxTQb.js";import"./useFieldComponent-CWMmv0d5.js";import"./utils-jFfJrK0I.js";import"./useMakeFocusable-MNtgtyJ2.js";import"./RadioGroup-2lRcBj6e.js";import"./FieldError-QICB5hyW.js";import"./Text-H5k4jR7L.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BsISnRaP.js";import"./useLabel-V0mABmwM.js";import"./Label-CSZS-HnU.js";import"./Hidden-DZpZ88Vz.js";import"./SelectionIndicator-DYHfPyq2.js";import"./useFormValidation-CVEw0jVb.js";import"./useFocus-BSXyJlKK.js";import"./useFocusRing-D6latAqm.js";import"./useControlledState-uXSCouXp.js";import"./FocusScope-BrLtMtFa.js";import"./context-ChvTJ1gc.js";import"./useFormReset-DvzBERJE.js";import"./usePress-l6QeQysM.js";import"./useFocusable-CF_X-2Wu.js";import"./VisuallyHidden-giqV-lwH.js";import"./IconWarning-CNMqfC0c.js";import"./remote-MfAOzJwE.js";import"./Label-DVkF56bm.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CEBQqt_q.js";import"./FieldError-DI0hFked.js";import"./AlertText-CGICoaW7.js";import"./AlertIcon-C6GnHejw.js";import"./browser-ChoxEgkm.js";import"./EmulatedBoldText-6uMsyrU3.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

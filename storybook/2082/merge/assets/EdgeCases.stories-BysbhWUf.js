import{j as r}from"./iframe-D_6zdLny.js";import{R as l,b as p,a as n}from"./RadioButton-DSiV2gNq.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-UpRnSTg5.js";import{T as u}from"./Text-BucMQu3s.js";import{C as c}from"./Content-DOJo_TQq.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-OxdpfLz0.js";import"./index-BGrQFvII.js";import"./index-CT6ZSgMj.js";import"./FieldError-ojCue57q.js";import"./IconWarning-L8yPVfI5.js";import"./FieldError-DAmKGBgj.js";import"./utils-PQD-Pczy.js";import"./Text-YMXmaajA.js";import"./filterDOMProps-i7L6S0l1.js";import"./ColumnLayout-CjZJDwMA.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-CL_92pgO.js";import"./RadioGroup-Ci7JjXya.js";import"./Form-BEwxiqG9.js";import"./useLabel-BujF7oZS.js";import"./Label-iDSBX_9z.js";import"./Hidden-BN9nl5w0.js";import"./SelectionIndicator-aPzlcNCf.js";import"./useFormValidation-B8Bdwi3p.js";import"./useFocus-D07R-Di8.js";import"./useControlledState-G8Ia7XKM.js";import"./FocusScope-DgQ0PiWF.js";import"./useFocusRing-CwU_FKgG.js";import"./context-BMSZp_sq.js";import"./useFormReset-jO9kfZl0.js";import"./usePress-HrT7PLB3.js";import"./useFocusable-pGYT2QRf.js";import"./VisuallyHidden-NfEP0AbA.js";import"./Label-DYStaM4r.js";import"./useLocalizedStringFormatter-D5MFHXmv.js";import"./browser-D7xr6uHh.js";import"./EmulatedBoldText-BmP07Dnx.js";const rr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const or=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,or as __namedExportsOrder,rr as default};

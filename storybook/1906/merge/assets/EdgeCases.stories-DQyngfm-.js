import{j as r}from"./iframe-DBKYLzDC.js";import{R as l,b as p,a as n}from"./RadioButton-ByqDyRfY.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-C2LDGb00.js";import{T as u}from"./Text-gSr4j5A3.js";import{C as c}from"./Content-CZgnPo62.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B-1S5Ra8.js";import"./index-CYdVJgGQ.js";import"./index-Dr37f313.js";import"./ColumnLayout-7EHoS4QU.js";import"./useFieldComponent-DRt8IUS_.js";import"./utils-BUG9eo0Q.js";import"./useMakeFocusable-Bj0ez47p.js";import"./RadioGroup-CXShHvJD.js";import"./FieldError-DtV1i0Hc.js";import"./Text-D7rD6BG6.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-CPSCXeOA.js";import"./useLabel-BGvoAl80.js";import"./Label-B1DR540-.js";import"./Hidden-D_QywUVZ.js";import"./SelectionIndicator-DEY3TFv1.js";import"./useFormValidation-DNSyvwAg.js";import"./useFocus-TYDADYlM.js";import"./useFocusRing-BksqeYWz.js";import"./useControlledState-CAANpQPW.js";import"./FocusScope-D67WIeli.js";import"./context-DJBj5fN2.js";import"./useFormReset-BczjDhHV.js";import"./usePress-BZ5qqTtf.js";import"./useFocusable-C-cRLAom.js";import"./VisuallyHidden-BW797Lc5.js";import"./IconWarning-BvGiLcXk.js";import"./remote-CY71mNcv.js";import"./Label-Dsk_CpOI.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DY0sD44g.js";import"./FieldError-BpFJPqyd.js";import"./AlertText-DJvQ3Kk8.js";import"./AlertIcon-BOzLdeCm.js";import"./browser-DhKn1UU2.js";import"./EmulatedBoldText-BKkyEwwz.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

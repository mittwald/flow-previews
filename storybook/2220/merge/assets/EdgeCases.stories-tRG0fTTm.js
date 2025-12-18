import{j as r}from"./iframe-CywxDTj6.js";import{R as l,b as p,a as n}from"./RadioButton-fN5nAoY4.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DeVSmZcE.js";import{T as u}from"./Text-vlJOJK2L.js";import{C as c}from"./Content-J8ZeJdWr.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DIqRYGZg.js";import"./index-BVyD66xE.js";import"./index-CFicy-UB.js";import"./ColumnLayout-DcAEY6Le.js";import"./useFieldComponent-DA2iK2GC.js";import"./utils-JmAwA3ix.js";import"./useMakeFocusable-B7-g_W02.js";import"./RadioGroup-BVj3cZrE.js";import"./FieldError-fWQdbmrt.js";import"./Text-Dc57gZlo.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-B03hL8Gq.js";import"./useLabel-CtuLxX2S.js";import"./Label-B7but0VW.js";import"./Hidden-D_vom6ZC.js";import"./SelectionIndicator-B2WWcQye.js";import"./useFormValidation-CXUK0Gt0.js";import"./useFocus-DDJfJTZx.js";import"./useControlledState-CrIAtAXB.js";import"./FocusScope-CPNFfVyd.js";import"./useFocusRing-D1WKjA4v.js";import"./context-Wz-N3Tdz.js";import"./useFormReset-CCwx8s_G.js";import"./usePress-CStV9ujD.js";import"./useFocusable-D7CLIfGa.js";import"./VisuallyHidden-CBo5v6jz.js";import"./IconWarning-BQFONsdl.js";import"./remote-DxJecAWu.js";import"./Label-D6CHoy0y.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-OykjdJOp.js";import"./FieldError-zwomljJ3.js";import"./browser-CaezisB_.js";import"./EmulatedBoldText-Vtu08ir6.js";const er={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ar=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,ar as __namedExportsOrder,er as default};

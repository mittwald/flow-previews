import{j as r}from"./iframe-VTkEMv55.js";import{R as l,b as p,a as n}from"./RadioButton-DZbP7dVA.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-OJ0WUe_C.js";import{T as u}from"./Text-DlbRcSah.js";import{C as c}from"./Content-D0OZlkdg.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D-PEtegy.js";import"./index-DtZzACyH.js";import"./index-D_xlAiD1.js";import"./ColumnLayout-D7IWZP8T.js";import"./useFieldComponent-CicShoBh.js";import"./utils-DPKXOmt2.js";import"./useMakeFocusable-Rx2vAtv6.js";import"./RadioGroup-DYyNpQ_n.js";import"./FieldError-CFdAmcbB.js";import"./Text-DB2BTtqM.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-BAg9n-JE.js";import"./useLabel-C-geoXZs.js";import"./Label-BRaJlgoE.js";import"./Hidden-d-f11Ccs.js";import"./SelectionIndicator-CYSMLMH7.js";import"./useFormValidation-CNiU2G-p.js";import"./useFocus-JgmAf8eL.js";import"./useControlledState-CxodNXny.js";import"./FocusScope-CTtHroqL.js";import"./useFocusRing-BeV8_2Yg.js";import"./context-BVezW8pN.js";import"./useFormReset-DRm0nHwN.js";import"./usePress-Cb2XrqKT.js";import"./useFocusable-CzgiUJAu.js";import"./VisuallyHidden-DjbItwE4.js";import"./IconWarning-D408DR62.js";import"./remote-pRnbNSGs.js";import"./Label-DwQEy05E.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CUJ-Z77y.js";import"./FieldError-B1IV40_q.js";import"./browser-_Qir5MkB.js";import"./EmulatedBoldText-BYZc_oy6.js";const er={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

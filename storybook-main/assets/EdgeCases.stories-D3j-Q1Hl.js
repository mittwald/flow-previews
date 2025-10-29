import{j as r}from"./iframe-BFuSR0CY.js";import{R as l,b as p,a as n}from"./RadioButton-BgWmFJcP.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-BFMBxnYV.js";import{T as u}from"./Text-BXhKPUqX.js";import{C as c}from"./Content-CO929-fc.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Czyught-.js";import"./index-DyDKJP2K.js";import"./index-D8dET2XL.js";import"./ColumnLayout-C8ldVldH.js";import"./useFieldComponent-DvAk7ROg.js";import"./utils-CEuw8CkJ.js";import"./Text-CVe1O8QA.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BDLPxpKm.js";import"./react-children-utilities-705z1kI6.js";import"./ClearPropsContext-DVOTNhZJ.js";import"./useMakeFocusable-Begosg92.js";import"./RadioGroup-Bq8tx-lM.js";import"./Form-CopJ-XT2.js";import"./useLabel-DzVjSD7h.js";import"./Label-Dl8lfN0K.js";import"./Hidden-BoaT9a_j.js";import"./SelectionIndicator-DEvuKTnp.js";import"./useFormValidation-Dt4bKs4p.js";import"./useFocus-Dfi_0tQM.js";import"./useControlledState-Y8_jrThy.js";import"./FocusScope-Dzg120-u.js";import"./useFocusRing-CdpePOyD.js";import"./context-6pf_efel.js";import"./useFormReset-CMQHaKTN.js";import"./usePress-BYMimxLy.js";import"./useFocusable-Or0L-1Mb.js";import"./VisuallyHidden-_YfAavcM.js";import"./Label-Bzfu9tdI.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CXcIdBbj.js";import"./browser-h3r-jBf1.js";import"./EmulatedBoldText-BrOu3vHP.js";const or={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const er=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,er as __namedExportsOrder,or as default};

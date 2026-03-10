import{j as r}from"./iframe-BJFPIndf.js";import{R as l,a as p}from"./Radio-CJ-uUJth.js";import{R as n}from"./RadioButton-B5icbPMC.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-13XlzLQg.js";import{T as u}from"./Text-CGF68X8s.js";import{C as c}from"./Content-Dz9K6tbl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BKaxWUSl.js";import"./index-Bb49SoEB.js";import"./index-Bg9RtLBP.js";import"./ColumnLayout-DB8dEtQu.js";import"./useFieldComponent-gU-XMME4.js";import"./utils-WT8FFEB4.js";import"./useMakeFocusable-DkJzSv9O.js";import"./RadioGroup-B06-rOfa.js";import"./FieldError-Coj9-PqS.js";import"./Text-D3Y_kc1g.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-x5xxOUHd.js";import"./useLabel-lMRjDAnL.js";import"./Label-CeUzUCbC.js";import"./Hidden-CMdNoXJX.js";import"./SelectionIndicator-DE1Bz2O5.js";import"./useFormValidation-BhmC515N.js";import"./useFocus-DPdw3svt.js";import"./useFocusRing-BgEwvKKQ.js";import"./useControlledState-DywfuSZK.js";import"./FocusScope-shVJmAPD.js";import"./context-Dnh7V-Fy.js";import"./useFormReset-CwfjSagb.js";import"./usePress-BHGoooY9.js";import"./useFocusable-DGQMpBVb.js";import"./VisuallyHidden-DpM8Q2HK.js";import"./IconWarning-BUqpCqdO.js";import"./remote-BMkebNs4.js";import"./Label-CVJICKuL.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DgoEP7JS.js";import"./FieldError-CerVitTZ.js";import"./AlertText-BZJfsxKD.js";import"./AlertIcon-GZVP8WsI.js";import"./browser-DqcTc9Nr.js";import"./EmulatedBoldText-CbQqBSV_.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

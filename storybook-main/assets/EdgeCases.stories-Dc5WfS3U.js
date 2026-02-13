import{j as r}from"./iframe-C2cGCWBO.js";import{R as l,a as p}from"./Radio-B3V4R-VE.js";import{R as n}from"./RadioButton-C-doF-Bu.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CeENj2BR.js";import{T as u}from"./Text-D3xXIOyH.js";import{C as c}from"./Content-CCqXW7YM.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C6jxxEVz.js";import"./index-rbmoV-yM.js";import"./index-Du1kNfMe.js";import"./ColumnLayout-BEyytD2J.js";import"./useFieldComponent-D_KC3UxI.js";import"./utils-CPzpSZL2.js";import"./useMakeFocusable-HLZm40Hd.js";import"./RadioGroup-CbvYEHE0.js";import"./FieldError-DA6JIYnG.js";import"./Text-D1LgYL-c.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-C_NaUn2t.js";import"./useLabel-DicB4RC2.js";import"./Label-DeWWh5Nd.js";import"./Hidden-C_zHVHDn.js";import"./SelectionIndicator-vr7baVWi.js";import"./useFormValidation-DV5s_XV1.js";import"./useFocus-O4uYrVbU.js";import"./useFocusRing-wtbg8X8X.js";import"./useControlledState-MMDjipcl.js";import"./FocusScope-7k8F4i3d.js";import"./context-2EfdQWx2.js";import"./useFormReset-BdRaO3QH.js";import"./usePress-BrmD8Kf2.js";import"./useFocusable-DwbuT13T.js";import"./VisuallyHidden-C7EnMW_k.js";import"./IconWarning-C4LD0r9W.js";import"./remote-w8RrxnGT.js";import"./Label-DU1BG4Ln.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BAIjrI3d.js";import"./FieldError-DDTF9njD.js";import"./AlertText-DYOBaLM3.js";import"./AlertIcon-B9QySSBk.js";import"./browser-BGhQMCSV.js";import"./EmulatedBoldText-CQEy9dVT.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

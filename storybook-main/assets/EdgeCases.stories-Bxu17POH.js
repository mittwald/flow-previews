import{j as r}from"./iframe-Bz3NPU1o.js";import{R as l,a as p}from"./Radio-2DhAv_rD.js";import{R as n}from"./RadioButton-CaHMtcKS.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DbzGEYzC.js";import{T as u}from"./Text-ByJancxD.js";import{C as c}from"./Content-CjcJxOBw.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CjhBP1Cm.js";import"./index-4Y7PW7MZ.js";import"./index-FgoIhbmz.js";import"./ColumnLayout-DYbcJceg.js";import"./useFieldComponent-kW7iCi5m.js";import"./utils-DuUJF5nC.js";import"./useMakeFocusable-ClUHlkb8.js";import"./RadioGroup-CM-Faw9J.js";import"./FieldError-BDAUq_c5.js";import"./Text-ClD1r8b1.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DrqAye7f.js";import"./useLabel-C5lED9IT.js";import"./Label-QJAE-TAD.js";import"./Hidden-DRSFEG3Y.js";import"./SelectionIndicator-DWP2zhMc.js";import"./useFormValidation-itgD5oYf.js";import"./useFocus-DMRfkGw8.js";import"./useFocusRing-BLuP37PT.js";import"./useControlledState-e4YYsLZE.js";import"./FocusScope-Bk96q2B-.js";import"./context-pgk2HPHJ.js";import"./useFormReset-D4UcXUYp.js";import"./usePress-BmxXpscc.js";import"./useFocusable-DZRtaeEQ.js";import"./VisuallyHidden-DkJ66lZ_.js";import"./IconWarning-Cqqx4tMU.js";import"./remote-D_M7roLC.js";import"./Label-DJFgm5M0.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DZI71IG_.js";import"./FieldError-fbbECv40.js";import"./AlertText-yCfidByd.js";import"./AlertIcon-Csw_f8vF.js";import"./browser-BaNqvzaa.js";import"./EmulatedBoldText-DUXivwa1.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

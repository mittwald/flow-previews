import{j as r}from"./iframe-CLDMeli7.js";import{R as l,a as p}from"./Radio-DwduW5hG.js";import{R as n}from"./RadioButton-QcBOMq5_.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-kn10Zukb.js";import{T as u}from"./Text-CP7Ip6pC.js";import{C as c}from"./Content-B9gtWZMh.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-oV-3iEWg.js";import"./index-qO7MtLeC.js";import"./index-9eDA9WpJ.js";import"./ColumnLayout-Bd91huSi.js";import"./useFieldComponent-BtEJhhry.js";import"./utils-CeJP1xg2.js";import"./useMakeFocusable-D1PLeabQ.js";import"./RadioGroup-D-hatQor.js";import"./FieldError-DzENXQGA.js";import"./Text-Doo8ujkC.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BccCs6cg.js";import"./useLabel-BXv9j1Wx.js";import"./Label-CvZQpZvf.js";import"./Hidden-B_4q2AdF.js";import"./SelectionIndicator-DBZDkcHI.js";import"./useFormValidation-DfHAcEvH.js";import"./useFocus-DccW9XIs.js";import"./useFocusRing-D-0mJeTX.js";import"./useControlledState-DtGWcuCb.js";import"./FocusScope-CDi_kcpI.js";import"./context-CJeO-2nS.js";import"./useFormReset-BkQU1ELB.js";import"./usePress-5-cRdm9R.js";import"./useFocusable-B-HKy_Nj.js";import"./VisuallyHidden--NZ_Ses-.js";import"./IconWarning-p4W4x8Yn.js";import"./remote-B4IT0gy2.js";import"./Label-B6NnPYhK.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BL7vQ06a.js";import"./FieldError-DepvOCr4.js";import"./AlertText-tt9Tj7ZR.js";import"./AlertIcon-BgEbwDh4.js";import"./browser-DchrXhwC.js";import"./EmulatedBoldText-B7dHFZ_g.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

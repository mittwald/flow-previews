import{j as r}from"./iframe-DjKJp4LH.js";import{R as l,b as p,a as n}from"./RadioButton-Dm8unE1n.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DQkaxm7f.js";import{T as u}from"./Text-DIX_PQ8a.js";import{C as c}from"./Content-DZRc5l5O.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D6qVG3rB.js";import"./index-DwtlgCJu.js";import"./index-PXjpOTa6.js";import"./ColumnLayout-_4DGbEoY.js";import"./useFieldComponent-7yFtRUym.js";import"./utils-DyC1AhIW.js";import"./useMakeFocusable-C4DGD0sX.js";import"./RadioGroup-DJ97fMub.js";import"./FieldError-CRskrSrV.js";import"./Text-DDR-J2dK.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-DzoAzIf2.js";import"./useLabel--MzsjFNv.js";import"./Label-7z6Dpe4l.js";import"./Hidden-Cj7p_Cun.js";import"./SelectionIndicator-B0FAwcHG.js";import"./useFormValidation-D-rCh5i6.js";import"./useFocus-DfQL19Qh.js";import"./useControlledState-B7AKSDvs.js";import"./FocusScope-5Nl-wNMA.js";import"./useFocusRing-BGVhnkul.js";import"./context-CaWPG6rd.js";import"./useFormReset-BtBZQ9D7.js";import"./usePress-Cba7eTZL.js";import"./useFocusable-Cypk5WsB.js";import"./VisuallyHidden-BM-dzb4f.js";import"./IconWarning-6PZXNPQv.js";import"./remote-X6dXUxim.js";import"./Label-CIoe3s2x.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-Dnneor8b.js";import"./FieldError-DkeOn6Iq.js";import"./AlertText-B4kskhvn.js";import"./AlertIcon-DJ6AhYBh.js";import"./browser-DP-AFXYC.js";import"./EmulatedBoldText-CMQt-Xk-.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

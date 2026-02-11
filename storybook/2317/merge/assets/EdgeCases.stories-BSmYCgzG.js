import{j as r}from"./iframe-Czt-X4mt.js";import{R as l,a as p}from"./Radio-q1QLe4Dc.js";import{R as n}from"./RadioButton-C8_3gj2p.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-Y-UrbUNV.js";import{T as u}from"./Text-8ynHQhOY.js";import{C as c}from"./Content-jnZmEVum.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BEE6NzIR.js";import"./index-BvfwTKjZ.js";import"./index-Dtw36EGp.js";import"./ColumnLayout-CilOdNbR.js";import"./useFieldComponent-CjTkiSgD.js";import"./utils-CU6JriEK.js";import"./useMakeFocusable-rXKJcqCV.js";import"./RadioGroup-NyeX7Sfi.js";import"./FieldError-8b6ruGQE.js";import"./Text-t3MR2mNG.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BeS1FfjY.js";import"./useLabel-BR4TCRo_.js";import"./Label-Ddc2_N7O.js";import"./Hidden-B_4G05gn.js";import"./SelectionIndicator-8fZBRAhq.js";import"./useFormValidation-DyL1ZPxG.js";import"./useFocus-En_BVabG.js";import"./useFocusRing-DDb3Exp8.js";import"./useControlledState-DhgMObTD.js";import"./FocusScope-DGuUwoy_.js";import"./context-BsnVI305.js";import"./useFormReset-5KG7Gyo5.js";import"./usePress-DEVH16Jn.js";import"./useFocusable-DFLTBTxr.js";import"./VisuallyHidden-jSb2CZNn.js";import"./IconWarning-CEtgECHE.js";import"./remote-hRcAmPck.js";import"./Label-DRlzXm2g.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BDxrzy3H.js";import"./FieldError-BFQHJf6J.js";import"./AlertText-BfffkCAs.js";import"./AlertIcon-DBLlr2Uy.js";import"./browser-CPd8oh-y.js";import"./EmulatedBoldText-DRvUUCjd.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

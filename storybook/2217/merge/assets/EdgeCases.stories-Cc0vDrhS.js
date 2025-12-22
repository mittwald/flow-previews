import{j as r}from"./iframe-Du65Ph_c.js";import{R as l,b as p,a as n}from"./RadioButton-DlA7gdQp.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DhFuLQOI.js";import{T as u}from"./Text-CtX5enn3.js";import{C as c}from"./Content-BHLNKpqX.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CYbHZhXg.js";import"./index-XI88kJrR.js";import"./index-c0t27COx.js";import"./ColumnLayout-DRxeelUr.js";import"./useFieldComponent-XbdbUfvB.js";import"./utils-xIJEb5Gc.js";import"./useMakeFocusable-BEkPhqDc.js";import"./RadioGroup-CKUjiS_Q.js";import"./FieldError-cRzcLKxU.js";import"./Text-Cl831mKA.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-CLANTGFM.js";import"./useLabel-BdNff0XI.js";import"./Label-D_GXaE34.js";import"./Hidden-BV9iY75y.js";import"./SelectionIndicator-Cb43LM7W.js";import"./useFormValidation-DAWFGl74.js";import"./useFocus-mAbeDdRN.js";import"./useControlledState-Cdt3oZ6_.js";import"./FocusScope-DUOtKQcD.js";import"./useFocusRing-B7cLewIC.js";import"./context-BMDcuGwa.js";import"./useFormReset-D830YkJ7.js";import"./usePress-CyOin5iy.js";import"./useFocusable-RoNPbAVl.js";import"./VisuallyHidden-rhukFLga.js";import"./IconWarning-CGSd0Gik.js";import"./remote-D3fYDNUY.js";import"./Label-BClS0qAd.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-Dhvhyrh1.js";import"./FieldError-VBXyMAIR.js";import"./browser-57tL9X_d.js";import"./EmulatedBoldText-CITvecLd.js";const er={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-BZLAsPNC.js";import{R as l,b as p,a as n}from"./RadioButton-BwCWAB0u.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DaDZI7J0.js";import{T as u}from"./Text-oqqebshB.js";import{C as c}from"./Content-D_E52p9K.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DRacmL0k.js";import"./index-Cf3UYr17.js";import"./index-CYjhUmDO.js";import"./ColumnLayout-C-LSdX6O.js";import"./useFieldComponent-C5gewvzz.js";import"./utils-GBJhPEt0.js";import"./useMakeFocusable-ubcq2xSv.js";import"./RadioGroup-BlxH0B5H.js";import"./FieldError-B9G53mk8.js";import"./Text-C0MYo1gI.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-CDvikIHs.js";import"./useLabel-DAhF5fA-.js";import"./Label-BJwSQh0g.js";import"./Hidden-C94FXqZA.js";import"./SelectionIndicator--Gts2DGf.js";import"./useFormValidation-BLPWS9Vb.js";import"./useFocus-BAbXgSuO.js";import"./useControlledState-BdOl-nfx.js";import"./FocusScope-BleEWu6g.js";import"./useFocusRing-DUiko_nB.js";import"./context-B1QKiSyt.js";import"./useFormReset-B4usOE4z.js";import"./usePress-C3AJe8l0.js";import"./useFocusable-CJlLttAU.js";import"./VisuallyHidden-B55KrhOv.js";import"./IconWarning-BRgKnpuG.js";import"./remote-DD9qKW4I.js";import"./Label-DKRPZs6o.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DU9ffxga.js";import"./FieldError-D2O_dT2D.js";import"./AlertText-DgwQ_4kg.js";import"./AlertIcon-wpFTQr76.js";import"./browser-D75BLayN.js";import"./EmulatedBoldText-i2HM1out.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

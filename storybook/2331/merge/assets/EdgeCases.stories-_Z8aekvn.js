import{j as r}from"./iframe-BDFzVZbC.js";import{R as l,a as p}from"./Radio-Dc7kbaPM.js";import{R as n}from"./RadioButton-BLzTmlhH.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-OUwx3cQ_.js";import{T as u}from"./Text-DCO-oE1a.js";import{C as c}from"./Content-w-_DoZqM.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CcRyJRwo.js";import"./index-P1fb0se1.js";import"./index-CcbRX2xZ.js";import"./ColumnLayout-DfD0Foef.js";import"./useFieldComponent-DJTCy7fJ.js";import"./utils-DRqoG6OW.js";import"./useMakeFocusable-DKwQY4Iy.js";import"./RadioGroup-CXYIqULX.js";import"./FieldError-4UEPVceR.js";import"./Text-5CWdwzmY.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-MSkU5_70.js";import"./useLabel-D8fV0T39.js";import"./Label-CHSQ9cWG.js";import"./Hidden-HzHXzaYV.js";import"./SelectionIndicator-S2R90Jld.js";import"./useFormValidation-CtBJZQwA.js";import"./useFocus-BE-kuowd.js";import"./useFocusRing-CxM1MJ0B.js";import"./useControlledState-CxpqxoPE.js";import"./FocusScope-Djn4bjzo.js";import"./context-sVk6h2Ud.js";import"./useFormReset-CQpdwD5T.js";import"./usePress-DJEnnjGh.js";import"./useFocusable-nLh15Hem.js";import"./VisuallyHidden-DL89d0r2.js";import"./IconWarning-aDXn3__r.js";import"./remote-C6miTdu_.js";import"./Label-LyL-GXC8.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BejhQiE3.js";import"./FieldError-BgOx5Pdv.js";import"./AlertText-CJ-mVZBv.js";import"./AlertIcon-tKcNuTH2.js";import"./browser-D6pVd-JB.js";import"./EmulatedBoldText-qk6rk8uL.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

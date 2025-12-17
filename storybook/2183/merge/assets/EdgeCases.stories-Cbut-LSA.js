import{j as r}from"./iframe-D2Ryv2XM.js";import{R as l,a as p}from"./Radio-chr9Eirf.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-ILQP8UJw.js";import{T as u}from"./Text-BztGJEd5.js";import{C as c}from"./Content-jywu3Zso.js";import{R as n}from"./RadioButton-Dj393XdL.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-P0LvaFxL.js";import"./index-DQBbrLYy.js";import"./index-C63C9hiI.js";import"./ColumnLayout-BXv42SAF.js";import"./useFieldComponent-w9ZrCArw.js";import"./utils-BqLZYyR8.js";import"./useMakeFocusable-D-GGgbCE.js";import"./RadioGroup-DSTEeCbU.js";import"./FieldError-CWHVrlnl.js";import"./Text-D7v3tGEm.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-HDxy_CB-.js";import"./useLabel-xl5SJTPu.js";import"./Label-BRB94mKh.js";import"./Hidden-BS4L5nhJ.js";import"./SelectionIndicator-B0cJwLAx.js";import"./useFormValidation-DGXgC3JE.js";import"./useFocus-CHBEY2MC.js";import"./useControlledState-B1ZkKesc.js";import"./FocusScope-1u2Sr5XR.js";import"./useFocusRing-Bonkbq1h.js";import"./context-nMHmB_Zz.js";import"./useFormReset-BscIah2r.js";import"./usePress-oTeUo0kc.js";import"./useFocusable-DzubWnzm.js";import"./VisuallyHidden-CLaEN95T.js";import"./IconApp-D72ec8J0.js";import"./remote-c0PQzJc6.js";import"./IconRadioOn-SGsc91sW.js";import"./Label-Dm7SPIiB.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-D3q43d5z.js";import"./FieldError-Df9KKLMS.js";import"./IconDanger-DUFERqG9.js";import"./browser-k7JOs1GI.js";import"./EmulatedBoldText-j8ZSwmcB.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

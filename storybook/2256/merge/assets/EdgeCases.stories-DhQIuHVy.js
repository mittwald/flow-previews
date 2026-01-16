import{j as r}from"./iframe-W1iyoXhf.js";import{R as l,b as p,a as n}from"./RadioButton-DdD_ipgB.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-JQ_gy7i4.js";import{T as u}from"./Text-DcDEk3cp.js";import{C as c}from"./Content-G_M3w2OF.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DadfXi8i.js";import"./index-BH3DQIUR.js";import"./index-BUhRJiS3.js";import"./ColumnLayout-BdRXYGJA.js";import"./useFieldComponent-CeQ6dqWY.js";import"./utils-Co92dFN-.js";import"./useMakeFocusable-CYQPnU7y.js";import"./RadioGroup-CxEyWTUh.js";import"./FieldError-CaERYIVC.js";import"./Text-DMuz8jzh.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-BBVMks-l.js";import"./useLabel-C8GMPbyu.js";import"./Label-16XGOc-L.js";import"./Hidden-C0j9T0K5.js";import"./SelectionIndicator--NYjhiR7.js";import"./useFormValidation-aWhqwd0R.js";import"./useFocus-BF1azJZZ.js";import"./useControlledState-BeXX8b-c.js";import"./FocusScope-mUzTN5zH.js";import"./useFocusRing-D7D1hXRw.js";import"./context-Dx3ASvxi.js";import"./useFormReset-DYb2_5Lx.js";import"./usePress-DwtcUURT.js";import"./useFocusable-CYBapKrT.js";import"./VisuallyHidden-9GsfRhh1.js";import"./IconWarning-Cnnsa5dA.js";import"./remote-CbMcOagV.js";import"./Label-h36KWMeP.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-Be5s6ZhG.js";import"./FieldError-V9E4UopR.js";import"./AlertText-x_xx3UIw.js";import"./AlertIcon-Cyqu-_3z.js";import"./browser-D1HYvIQy.js";import"./EmulatedBoldText-BfE11w5D.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

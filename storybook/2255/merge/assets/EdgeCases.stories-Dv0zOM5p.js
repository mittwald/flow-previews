import{j as r}from"./iframe-BWhqP90_.js";import{R as l,b as p,a as n}from"./RadioButton-Dl6S6RE3.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DEH-KFOl.js";import{T as u}from"./Text-ClKyFsNf.js";import{C as c}from"./Content-CvRECO7T.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BryHmeuy.js";import"./index-8vPYdz_-.js";import"./index-BNCgjCzH.js";import"./ColumnLayout-BPRO3Z2T.js";import"./useFieldComponent-YclMbw8e.js";import"./utils-DDxNv25V.js";import"./useMakeFocusable-OX_9tuY9.js";import"./RadioGroup-CIulZlUD.js";import"./FieldError-DkQ7rf97.js";import"./Text-CjPzL55g.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-i2Ec1WLh.js";import"./useLabel-nvgQN0a7.js";import"./Label-CvmhHdNV.js";import"./Hidden-40YeYLOA.js";import"./SelectionIndicator-DZ2Xh4dp.js";import"./useFormValidation-Dk5h1IP2.js";import"./useFocus-DGysuqof.js";import"./useControlledState-hpfIa3L8.js";import"./FocusScope-D5dxNR-J.js";import"./useFocusRing-BFEab5f2.js";import"./context-D1O-Xc3I.js";import"./useFormReset-DqbCot7l.js";import"./usePress-CgTDaVBx.js";import"./useFocusable-BfSSliyg.js";import"./VisuallyHidden-DRs-AG4l.js";import"./IconWarning-HbBBXO9Y.js";import"./remote-veunNUGL.js";import"./Label-CkXiiFVS.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter--1i0kqLe.js";import"./FieldError-C6zkn6e8.js";import"./AlertText-Bb9-XBbW.js";import"./AlertIcon-DpUh0dNd.js";import"./browser-XxEUm-0T.js";import"./EmulatedBoldText-BA_Kyk9l.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-nUnY8CpM.js";import{R as l,a as p}from"./Radio-CUII-FXj.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-l5YPh_e2.js";import{T as u}from"./Text-CKSRxaE3.js";import{C as c}from"./Content-DrDhpEui.js";import{R as n}from"./RadioButton-Ca-21Zyf.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DiVWNePS.js";import"./index-Czo4z9CC.js";import"./index-D5rarCk0.js";import"./ColumnLayout-B-8HNdDb.js";import"./useFieldComponent-CwsJxGlb.js";import"./utils-DtyHAF7C.js";import"./useMakeFocusable-0PqtZIw6.js";import"./RadioGroup-BNxDhVuB.js";import"./FieldError-CG7ulvH_.js";import"./Text-4n54moM_.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-DX8kqEOp.js";import"./useLabel-ARnVSCS2.js";import"./Label-B7kFjMQQ.js";import"./Hidden-DuLhuFUb.js";import"./SelectionIndicator-Cj3HhkcP.js";import"./useFormValidation-BmCGlg1a.js";import"./useFocus-ik1bIJBj.js";import"./useControlledState-CaC4m18c.js";import"./FocusScope-CB6t9Dkj.js";import"./useFocusRing-FZMFjSRM.js";import"./context-B5Mk59jD.js";import"./useFormReset-B9MhH15U.js";import"./usePress-D0chnYNQ.js";import"./useFocusable-DICTyCVG.js";import"./VisuallyHidden-DJajrHPg.js";import"./IconChevronDown-C6KAqmcJ.js";import"./remote-Bcop36Tp.js";import"./IconRadioOn-Cw_1crdt.js";import"./Label-CarGuai1.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DxwRSSu1.js";import"./FieldError-Dl4XoXDz.js";import"./IconDanger-BtbJ86A5.js";import"./browser-vyiLhVPE.js";import"./EmulatedBoldText-CfkdfDH6.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

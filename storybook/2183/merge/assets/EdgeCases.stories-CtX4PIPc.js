import{j as r}from"./iframe-BoCc-iJU.js";import{R as l,a as p}from"./Radio-oFjLocEw.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-BhWxa5-j.js";import{T as u}from"./Text-CxsQklp2.js";import{C as c}from"./Content-XgYiWb_X.js";import{R as n}from"./RadioButton-BQ6ZJDVp.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-aIKmACWg.js";import"./index-U3eHMBln.js";import"./index-CpJJlR3B.js";import"./ColumnLayout-nATHw0J3.js";import"./useFieldComponent-BP-lIfvD.js";import"./utils-P0pc5_a9.js";import"./useMakeFocusable-BilPG0Yh.js";import"./RadioGroup--VjRF0gX.js";import"./FieldError-Cv1yZmyj.js";import"./Text-CwFr0z0b.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-AyX8lm4h.js";import"./useLabel-msUyYt71.js";import"./Label-E_BXoGJl.js";import"./Hidden-7MHP_c1E.js";import"./SelectionIndicator-DXYS_YB1.js";import"./useFormValidation-DSNLWRBM.js";import"./useFocus-Cge5HK5z.js";import"./useControlledState-Bp_HlHxi.js";import"./FocusScope-DAKoy3Tt.js";import"./useFocusRing-GN2tGneZ.js";import"./context-BrFrKL-P.js";import"./useFormReset-Bkd1XrYX.js";import"./usePress-C11Qnu-9.js";import"./useFocusable-C7xRBGe6.js";import"./VisuallyHidden-Dalv-eS5.js";import"./IconApp-C2RMdkv5.js";import"./remote-DSbtRD5R.js";import"./IconRadioOn-Bqi4xUNz.js";import"./Label-DGwnCcrv.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CGHFzKy5.js";import"./FieldError-gHUqbDM9.js";import"./IconDanger-CyJfzsCE.js";import"./browser-BzlHG3zD.js";import"./EmulatedBoldText-CBFTpxXk.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

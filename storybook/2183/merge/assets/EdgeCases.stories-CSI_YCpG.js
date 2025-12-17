import{j as r}from"./iframe-Eg8-wFCR.js";import{R as l,a as p}from"./Radio-DPtGA0o7.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-BKwnWrrz.js";import{T as u}from"./Text-cFe2oWr9.js";import{C as c}from"./Content-DdTjShza.js";import{R as n}from"./RadioButton-CySz7r64.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-8KVNBPc4.js";import"./index-BbsXAeQz.js";import"./index-7P9p2RDg.js";import"./ColumnLayout-CMi_PnML.js";import"./useFieldComponent-CePCnb_B.js";import"./utils-DpUmHG9o.js";import"./useMakeFocusable-cWpuR3FC.js";import"./RadioGroup-CWQ26Qfb.js";import"./FieldError-BwCFTN-W.js";import"./Text-CVQZ1Ff_.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-DkJGoq-X.js";import"./useLabel-CiQu3Cp5.js";import"./Label-ayphvmky.js";import"./Hidden-CPM5AGUb.js";import"./SelectionIndicator-LygQ_MIk.js";import"./useFormValidation-D_eOv9kq.js";import"./useFocus-BombNWQr.js";import"./useControlledState-B4vwiKN6.js";import"./FocusScope-BFrkZdE_.js";import"./useFocusRing-DXLUoCe1.js";import"./context-D30M243T.js";import"./useFormReset-BOxw_xUS.js";import"./usePress-eXiMCUEC.js";import"./useFocusable-CMi9d24v.js";import"./VisuallyHidden-B_EYeIgM.js";import"./IconChevronDown-CB7etEhV.js";import"./remote-DyWsWGYm.js";import"./IconRadioOn-BemFTLqF.js";import"./Label-1lc8IvKU.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DPRCgyho.js";import"./FieldError-D_RdlzA4.js";import"./IconDanger-Djal8A6_.js";import"./browser-CGaD3WbY.js";import"./EmulatedBoldText-BvL31EIC.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

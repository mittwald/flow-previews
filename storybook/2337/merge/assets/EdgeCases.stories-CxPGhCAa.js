import{j as r}from"./iframe-DYssR0ZO.js";import{R as l,a as p}from"./Radio-BuB1spb0.js";import{R as n}from"./RadioButton-sjtR7fNC.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DFohg3mK.js";import{T as u}from"./Text-S9F4vE2H.js";import{C as c}from"./Content-B3-6LeFE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DsQfvZ8R.js";import"./index-BiQ39dcD.js";import"./index-DD53_4h2.js";import"./ColumnLayout-CcDrzD9k.js";import"./useFieldComponent-MDeHyLVI.js";import"./utils-C3q1cDFY.js";import"./useMakeFocusable-Dyv8lb9u.js";import"./RadioGroup-CV1jt5Hh.js";import"./FieldError-Bq-6FZKj.js";import"./Text-C48KhL8P.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-C_ZwOWyd.js";import"./useLabel-BksUhJpA.js";import"./Label-DSpHRERt.js";import"./Hidden-CFJfk2M-.js";import"./SelectionIndicator-02MGjaw1.js";import"./useFormValidation-D1fghWFH.js";import"./useFocus-CQpADUyl.js";import"./useFocusRing-CMEZAWj2.js";import"./useControlledState-CDSB3NYp.js";import"./FocusScope-CNZRDNpk.js";import"./context-CUXiPoRo.js";import"./useFormReset-CxfaiCUr.js";import"./usePress-xSc99ptM.js";import"./useFocusable-CmCmEjiW.js";import"./VisuallyHidden-B8I9N7kv.js";import"./IconWarning-BhLXBIfL.js";import"./remote-cHYIdIzb.js";import"./Label-D9oETDcN.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-lpvT_cvb.js";import"./FieldError-BB68CtMB.js";import"./AlertText-rFllmFTn.js";import"./AlertIcon-AvW8zEgb.js";import"./browser-BciskJv3.js";import"./EmulatedBoldText-BT8wvojV.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-Bas3a7fO.js";import{R as l,a as p}from"./Radio-CAeH0MSG.js";import{R as n}from"./RadioButton-BitGXWlV.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-S9sVJcq7.js";import{T as u}from"./Text-D06q46lu.js";import{C as c}from"./Content-jsO27phX.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DM0zlvyg.js";import"./index-BsE7CccI.js";import"./index-CuTcGtc9.js";import"./ColumnLayout-JrbkDbpA.js";import"./useFieldComponent-CHbV_zSr.js";import"./utils-eswKxOcw.js";import"./useMakeFocusable-B_WH9QDK.js";import"./RadioGroup-B2fQSxI2.js";import"./FieldError-CYd-7Lc_.js";import"./Text-Di9JAG-3.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-C6AVvH4S.js";import"./useLabel-AX-jpDlX.js";import"./Label-CAS-GA4h.js";import"./Hidden-JsWJU2dF.js";import"./SelectionIndicator-C1UYqe1w.js";import"./useFormValidation-nso2YHkv.js";import"./useFocus-BpOhXbga.js";import"./useFocusRing--4ecJhRH.js";import"./useControlledState-DnKF_srQ.js";import"./FocusScope-yn2ZelXu.js";import"./context-C6ovHfpS.js";import"./useFormReset-C6M9OYlp.js";import"./usePress-BXALpkIT.js";import"./useFocusable-Dz64TW3s.js";import"./VisuallyHidden-DwReVjRm.js";import"./IconWarning-9FMOeqa7.js";import"./remote-CQRN9i7s.js";import"./Label-QWyaEZ02.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DWSvb_Dh.js";import"./FieldError-B_qklWB_.js";import"./AlertText-5S7f5h6L.js";import"./AlertIcon-CfXFBmoz.js";import"./browser-CI0OqVn7.js";import"./EmulatedBoldText-DWlWNctj.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

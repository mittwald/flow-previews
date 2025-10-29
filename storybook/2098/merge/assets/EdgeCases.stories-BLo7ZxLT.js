import{j as r}from"./iframe-M-00ByYr.js";import{R as l,b as p,a as n}from"./RadioButton-DtZ4UGUI.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-edEGrnr5.js";import{T as u}from"./Text-Bt5YA1vc.js";import{C as c}from"./Content-DgEPXUHV.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BSbRS4dW.js";import"./index-XTNpKnK3.js";import"./index-DpE53F72.js";import"./ColumnLayout-D7zEngzc.js";import"./useFieldComponent-CRgHa0Rs.js";import"./utils-CzeOq9Jp.js";import"./Text-C64HrAr0.js";import"./filterDOMProps-i7L6S0l1.js";import"./ClearPropsContext-DvyDrnsG.js";import"./useMakeFocusable-CCRsS2FG.js";import"./RadioGroup-C76qatrx.js";import"./Form-B5fCCfio.js";import"./useLabel-BqXrfkQs.js";import"./Label-2I2h4DuH.js";import"./Hidden-CcUUSr-p.js";import"./SelectionIndicator-BTUqWRGF.js";import"./useFormValidation-Co3-d3Vs.js";import"./useFocus-kTKNfC8f.js";import"./useControlledState-Cpz-s1gG.js";import"./FocusScope-CO5umuzV.js";import"./useFocusRing-BCZu56W_.js";import"./context-rdrdo5ux.js";import"./useFormReset-B1z61k1U.js";import"./usePress-ZYaxT06h.js";import"./useFocusable-Ck0hOZfS.js";import"./VisuallyHidden-DGulPIzL.js";import"./IconWarning-BKX4jvdo.js";import"./Label-DT1JZy6g.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DHEdj6fH.js";import"./FieldError-ZwGpCE6l.js";import"./browser-DuQo-X1z.js";import"./EmulatedBoldText-DX0gJz_T.js";const or={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const er=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,er as __namedExportsOrder,or as default};

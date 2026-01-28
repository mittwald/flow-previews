import{j as r}from"./iframe-DcJYxA4H.js";import{R as l,b as p,a as n}from"./RadioButton-EmtbtP-f.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CIvQkByp.js";import{T as u}from"./Text-DtgxB8-I.js";import{C as c}from"./Content-CMZGeW12.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BLRiscD5.js";import"./index-DqZIl2km.js";import"./index-BLaZpk-P.js";import"./ColumnLayout-BAJ4DEB0.js";import"./useFieldComponent-rnjT2dRC.js";import"./utils-DilzIpMR.js";import"./useMakeFocusable-DChHKHt6.js";import"./RadioGroup-D7H5D6cD.js";import"./FieldError-BmNSHu0e.js";import"./Text-CtAF_MdJ.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-C2ZrGthD.js";import"./useLabel-DpAfaget.js";import"./Label-C5pMaxrW.js";import"./Hidden-DfDLmmBw.js";import"./SelectionIndicator-DgZf9HEL.js";import"./useFormValidation-CxhT4ib7.js";import"./useFocus-CBKKPZUx.js";import"./useFocusRing-KHZvHeNt.js";import"./useControlledState-BqUYry3y.js";import"./FocusScope-CWIATeBq.js";import"./context-qV6jeEP3.js";import"./useFormReset-BxLymg31.js";import"./usePress-CoiuKGvm.js";import"./useFocusable-CBOZtalu.js";import"./VisuallyHidden-5QTr2j1N.js";import"./IconWarning-C1b-rglK.js";import"./remote-Bz3vE1W1.js";import"./Label-DYsIDPwe.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CF3rZOx1.js";import"./FieldError-B2Tu46Cr.js";import"./AlertText-DzwHJxKU.js";import"./AlertIcon-5jttAq4b.js";import"./browser-DuGwj8Dx.js";import"./EmulatedBoldText-B8m3SU7U.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

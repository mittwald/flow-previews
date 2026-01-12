import{j as r}from"./iframe-rOlqB43H.js";import{R as l,b as p,a as n}from"./RadioButton-elpc0gyW.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CJIyl8hO.js";import{T as u}from"./Text-CXuVairg.js";import{C as c}from"./Content-JdgygvO-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BTUHU9lP.js";import"./index-CsMmwq4Q.js";import"./index-DzmHy0yH.js";import"./ColumnLayout-DMq2Q6NG.js";import"./useFieldComponent-sAEQMV1g.js";import"./utils-Ccj3VlSZ.js";import"./useMakeFocusable-DW749c-R.js";import"./RadioGroup-CKGtPZrT.js";import"./FieldError-CnSkRhK3.js";import"./Text-CjxKuecI.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-C-fbNo1l.js";import"./useLabel-CbRIwZrE.js";import"./Label-Hp9JhiSo.js";import"./Hidden-DOKrBgVK.js";import"./SelectionIndicator-CrjLUeul.js";import"./useFormValidation-DWvRQI9h.js";import"./useFocus-B5EXjvsK.js";import"./useControlledState-BGrTDRws.js";import"./FocusScope-BxWeftc5.js";import"./useFocusRing-lBaj0PQL.js";import"./context-C0IlT2TZ.js";import"./useFormReset-BZ2QXIUx.js";import"./usePress-D4qdaxsz.js";import"./useFocusable-vYreZ1I2.js";import"./VisuallyHidden-CY9UiAKH.js";import"./IconWarning-Di5b70C_.js";import"./remote-DT0xwqhP.js";import"./Label-DjfUIXm4.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-UF0AsOfY.js";import"./FieldError-B7iskscN.js";import"./AlertText-DG4pRxN7.js";import"./AlertIcon-BISUoRMj.js";import"./browser-DeRtoS4T.js";import"./EmulatedBoldText-td0NnrMW.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-DAdEF_a9.js";import{R as l,a as p}from"./Radio-1qxfBuP2.js";import{R as n}from"./RadioButton-JjmlXRMS.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-Bi4pAlNl.js";import{T as u}from"./Text-BlXexclX.js";import{C as c}from"./Content-CJNhBNrl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CSaST_uw.js";import"./index-UhVc0W_W.js";import"./index-DqNUQeP9.js";import"./ColumnLayout-CpNdrcS0.js";import"./useFieldComponent-CLfspKSt.js";import"./utils-B1o5BDIk.js";import"./useMakeFocusable-CgWPsGDF.js";import"./RadioGroup-BEbGSTDU.js";import"./FieldError-Be27Lv36.js";import"./Text-ConA-l-E.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-B4U7K7S8.js";import"./useLabel-CcpSY4Um.js";import"./Label-DvwKTMzw.js";import"./Hidden-CcrF8gwt.js";import"./SelectionIndicator-BbyFO4Ic.js";import"./useFormValidation-CWgfw6QX.js";import"./useFocus-BHQGBA4R.js";import"./useFocusRing-5n4vvaIx.js";import"./useControlledState-D1JeUT3E.js";import"./FocusScope-Cya-_QqL.js";import"./context-DrtV74MG.js";import"./useFormReset-BoqlzNfE.js";import"./usePress-AnOXMqB9.js";import"./useFocusable-vdr5CzJ0.js";import"./VisuallyHidden-DtDztoAI.js";import"./IconWarning-B_QPuDoh.js";import"./remote-BQ_isGLI.js";import"./Label-D1h8c298.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DuO1Wowh.js";import"./FieldError-DAuD7Eqr.js";import"./AlertText-kiIxGYqF.js";import"./AlertIcon-DxXhtuAo.js";import"./browser-DTw6e149.js";import"./EmulatedBoldText-DRN0x44S.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

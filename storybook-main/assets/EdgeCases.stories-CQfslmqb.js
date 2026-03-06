import{j as r}from"./iframe-BgKMnsqP.js";import{R as l,a as p}from"./Radio-C1UOMxki.js";import{R as n}from"./RadioButton-CeLfFo0b.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-B42kiBMN.js";import{T as u}from"./Text-C3i_8DOD.js";import{C as c}from"./Content-CbjXc6mW.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-K5lY2cwd.js";import"./index-BfRfH9Zo.js";import"./index-Cjd0WNlk.js";import"./ColumnLayout-2O44tZq2.js";import"./useFieldComponent-BrPuybAK.js";import"./utils-DF7rIzyn.js";import"./useMakeFocusable-DrNDEFBk.js";import"./RadioGroup-BrY6XBh1.js";import"./FieldError-DrPRBP1_.js";import"./Text-DxRa_Q_m.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BeISznmy.js";import"./useLabel-cKqQKm7D.js";import"./Label-DB6i0Far.js";import"./Hidden-DjEbUam7.js";import"./SelectionIndicator-Uu23SvC3.js";import"./useFormValidation-BuWufY-j.js";import"./useFocus-rZbUMOOr.js";import"./useFocusRing-Do_SyrKm.js";import"./useControlledState-CIyJs2jp.js";import"./FocusScope-CnP7IT5L.js";import"./context-bU_PoVUz.js";import"./useFormReset-BD4Q_TlS.js";import"./usePress-BRD_gMdl.js";import"./useFocusable-D4mYKpyk.js";import"./VisuallyHidden-CtgyRlvv.js";import"./IconWarning-LAZRyVR3.js";import"./remote-BqVO6mjn.js";import"./Label-8eLvO5Vl.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-lbar_Hun.js";import"./FieldError-C-lZWEzn.js";import"./AlertText-bVfxlZAe.js";import"./AlertIcon-CcDG2G1r.js";import"./browser-CrtXW1Io.js";import"./EmulatedBoldText-CGtkaQmh.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

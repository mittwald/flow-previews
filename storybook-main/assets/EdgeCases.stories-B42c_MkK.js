import{j as r}from"./iframe-GtWYOLNc.js";import{R as l,b as p,a as n}from"./RadioButton-C3cmR_NB.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-B0CBvpPG.js";import{T as u}from"./Text-Bh_VtmGj.js";import{C as c}from"./Content-CMvc03iH.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BhbvfIbA.js";import"./index-DroEwyNc.js";import"./index-Do7K3gX4.js";import"./ColumnLayout-CH6EXEG9.js";import"./useFieldComponent-CFSDwBJf.js";import"./utils-DD5Sc9KY.js";import"./Text-CjcFKgn5.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-D3qu7dXh.js";import"./react-children-utilities-BE-u8eGk.js";import"./ClearPropsContext-DAA0VQnf.js";import"./useMakeFocusable-6t1tYcWi.js";import"./RadioGroup-CBD5LbJ0.js";import"./Form-CKR5JFnD.js";import"./useLabel-DTE1dj4A.js";import"./Label-CQFAMqNH.js";import"./Hidden-BU9Lcw6n.js";import"./SelectionIndicator-PIsyHCAq.js";import"./useFormValidation-BcoBpGbt.js";import"./useFocus-DFp-sRZK.js";import"./useControlledState-DlI3gMwx.js";import"./FocusScope-CmjH0BfW.js";import"./useFocusRing-DOaM9YXN.js";import"./context-D40YBGtd.js";import"./useFormReset-C8pOBnDM.js";import"./usePress-B3Z_0YqL.js";import"./useFocusable-jI0DLtpW.js";import"./VisuallyHidden-CMXGnTyG.js";import"./Label-rRCJof1T.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DE7ldODK.js";import"./browser-Dfdmz1Vs.js";import"./EmulatedBoldText-CB08elGP.js";const or={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

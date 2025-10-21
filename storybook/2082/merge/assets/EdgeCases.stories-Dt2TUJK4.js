import{j as r}from"./iframe-EtTbRQoM.js";import{R as l,b as p,a as n}from"./RadioButton-DjjQoAoa.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-C92Qemfq.js";import{T as u}from"./Text-CAO-zPwU.js";import{C as c}from"./Content-BwQ1EB4k.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CRP3amPt.js";import"./index-DwnAt2PO.js";import"./index-rMxpLDk9.js";import"./FieldError-Bx65Dx0T.js";import"./IconWarning-CO-lUcxm.js";import"./FieldError-Dm1dzE4u.js";import"./utils-C_hvyJpn.js";import"./Text-CANjZEUs.js";import"./filterDOMProps-i7L6S0l1.js";import"./ColumnLayout-siAwTZdH.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-qjH8k0Qb.js";import"./RadioGroup-DAkDGlY3.js";import"./Form-CyJo_kk3.js";import"./Label-FPs7V2cE.js";import"./Hidden-BhWY_xu3.js";import"./SelectionIndicator-BOzSayKJ.js";import"./useFormValidation-CisZkPpg.js";import"./useFocus-9RWBE5qv.js";import"./useControlledState-DmCe06Ai.js";import"./FocusScope-Dkurg4aB.js";import"./useFocusRing-hCmULEnE.js";import"./context-HEbrZrvP.js";import"./useFormReset-B1BZ1rNK.js";import"./usePress-sAonsHdy.js";import"./useFocusable-Do_2l7DI.js";import"./VisuallyHidden-B8Lwuqmn.js";import"./Label-BHPxSoWd.js";import"./useLocalizedStringFormatter-FAUwXJff.js";import"./browser-Cob99Do9.js";import"./EmulatedBoldText-rZpq4XPn.js";const Z={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:o=>r.jsxs(l,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,e)=>r.jsxs(n,{value:e.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},e))})},m={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,e)=>r.jsxs(n,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const rr=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,rr as __namedExportsOrder,Z as default};

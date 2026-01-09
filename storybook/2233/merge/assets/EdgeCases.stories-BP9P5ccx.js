import{j as r}from"./iframe-tI_lG94_.js";import{R as l,b as p,a as n}from"./RadioButton-DsnFguKA.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-Cq0hGn1H.js";import{T as u}from"./Text-DDIuCQxA.js";import{C as c}from"./Content-C33nzTY4.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C7r6bord.js";import"./index-Cx51kJJc.js";import"./index-CBk6rXlg.js";import"./ColumnLayout-CQyMv4yV.js";import"./useFieldComponent-_Dyiwxtg.js";import"./utils-bmh-HeLH.js";import"./useMakeFocusable-D27zQnKA.js";import"./RadioGroup-BJU8TaZP.js";import"./FieldError-CdG59lLT.js";import"./Text-Bx7ijqLX.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-B72YgAOe.js";import"./useLabel-dT-ksHYF.js";import"./Label-BRs8jfGQ.js";import"./Hidden-xjuSUFbD.js";import"./SelectionIndicator-uIlcbJnR.js";import"./useFormValidation--MR_E_GW.js";import"./useFocus-DCHopMY8.js";import"./useControlledState-BE5RFE46.js";import"./FocusScope-Brgrzlff.js";import"./useFocusRing-Dgbmnyxw.js";import"./context-CBF_EHvQ.js";import"./useFormReset-LNt8buNd.js";import"./usePress-C1ke7TUF.js";import"./useFocusable-BnM0ssdw.js";import"./VisuallyHidden-sfQiOa3Q.js";import"./IconWarning-BFYQkdin.js";import"./remote-CmKo-bli.js";import"./Label-CdVUwStZ.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BU5vto5x.js";import"./FieldError-DYW7UPuf.js";import"./InlineAlert-DC2W_zeL.js";import"./AlertIcon-BkNTScum.js";import"./browser-DuhBvQkx.js";import"./EmulatedBoldText-CqR-YL6D.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

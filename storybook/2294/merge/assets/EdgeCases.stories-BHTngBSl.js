import{j as r}from"./iframe-CvJspzLv.js";import{R as l,a as p}from"./Radio-D8Uk8nhg.js";import{R as n}from"./RadioButton-DCb94K1R.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-SwNo7HoE.js";import{T as u}from"./Text-QUQe3Lsq.js";import{C as c}from"./Content-CR9wDKeC.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BI37IbCZ.js";import"./index-FNnc6AUb.js";import"./index-Df150GVy.js";import"./ColumnLayout-BchoGxp0.js";import"./useFieldComponent-43Bszd6x.js";import"./utils-BL4G7l_u.js";import"./useMakeFocusable-trVLnprl.js";import"./RadioGroup-BQeJtRMF.js";import"./FieldError-DlX11YEn.js";import"./Text-DHLl2ajF.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-5NfLIR8x.js";import"./useLabel-DfL38sGR.js";import"./Label-BqmnG06H.js";import"./Hidden-Cc0JeUT8.js";import"./SelectionIndicator-DujQOkfZ.js";import"./useFormValidation-CwZe5cTQ.js";import"./useFocus-DbFf9Ktc.js";import"./useFocusRing-L-b3Tn9K.js";import"./useControlledState-DsktkqC9.js";import"./FocusScope-BaZaaiNh.js";import"./context-CQ77Qkvg.js";import"./useFormReset-ukaISav3.js";import"./usePress-DO5nHrqL.js";import"./useFocusable-C5zGZvV-.js";import"./VisuallyHidden-ksBWJgrQ.js";import"./IconWarning-BERZaob7.js";import"./remote-BqqZGE8h.js";import"./Label-DfZOYrgY.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-Clgc-XTf.js";import"./FieldError-DQmh2MYp.js";import"./AlertText-DgMbxot0.js";import"./AlertIcon-C15Ckg1B.js";import"./browser-CBUTrPGa.js";import"./EmulatedBoldText-DGmAuSbD.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

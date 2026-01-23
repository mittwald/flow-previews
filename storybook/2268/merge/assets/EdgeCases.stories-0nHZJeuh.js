import{j as r}from"./iframe-iY_Mn_oy.js";import{R as l,b as p,a as n}from"./RadioButton-CImJGD7N.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-JKLc8joh.js";import{T as u}from"./Text-C2ZCo6gl.js";import{C as c}from"./Content-D1mDgV5y.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DM--TRa4.js";import"./index-BDAsCxdA.js";import"./index-IKthRYIx.js";import"./ColumnLayout-BPed7D2x.js";import"./useFieldComponent-Cxjop7r-.js";import"./utils-C-pMCGM-.js";import"./useMakeFocusable-Bl79lDJ_.js";import"./RadioGroup-NsDgPRge.js";import"./FieldError-BP_EVNQV.js";import"./Text-CktBEW1F.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-2TpMp3Y3.js";import"./useLabel-8EVB-03H.js";import"./Label-DWRUfm9N.js";import"./Hidden-BMoxskLs.js";import"./SelectionIndicator-C9Y7msNP.js";import"./useFormValidation-B6OmY3vR.js";import"./useFocus-Nxno6ZgW.js";import"./useControlledState-DUH-ni6I.js";import"./FocusScope-Crvk_gLu.js";import"./useFocusRing-BNNZSKMh.js";import"./context-DIbVk5_z.js";import"./useFormReset-DJj-QXR5.js";import"./usePress-B5dXj1sU.js";import"./useFocusable-Bi19l3La.js";import"./VisuallyHidden-DEFkQEyo.js";import"./IconWarning-B803z1sh.js";import"./remote-CIrN4__o.js";import"./Label-3EuxSz5j.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DmQ_f8mX.js";import"./FieldError-rrdHjYdT.js";import"./AlertText-BLXtcQ-I.js";import"./AlertIcon-Dw605mNU.js";import"./browser-DK9hE6UN.js";import"./EmulatedBoldText-CHIJjbeg.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-B0qqkRSc.js";import{R as l,b as p,a as n}from"./RadioButton-DPZgXU7T.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DWCEo38e.js";import{T as u}from"./Text-BrTaOrXE.js";import{C as c}from"./Content-DY1XS3E5.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D28qUuL_.js";import"./index-Bw7Y8sX9.js";import"./index-ByDaWYpT.js";import"./ColumnLayout-DBYR3v1P.js";import"./useFieldComponent-BdE163vq.js";import"./utils-fD_u--Rs.js";import"./Text-Dr_aqSbj.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BPZvpYf1.js";import"./react-children-utilities-BymZuw_a.js";import"./ClearPropsContext-HA28kjj1.js";import"./useMakeFocusable-BKFtKrAv.js";import"./RadioGroup-Bo9hGN2l.js";import"./Form-Dg4UU0-2.js";import"./useLabel-sSRBc7PO.js";import"./Label-CSbZp_Tl.js";import"./Hidden-B-z-l7Br.js";import"./SelectionIndicator-BJvhD4qq.js";import"./useFormValidation-Vh8OxI1q.js";import"./useFocus-D6s77d5g.js";import"./useControlledState-CB1SzgEG.js";import"./FocusScope-8IhL3Eed.js";import"./useFocusRing-6YYb42D4.js";import"./context-D99v7Uqm.js";import"./useFormReset-CSVsou9A.js";import"./usePress-CRF7-NYn.js";import"./useFocusable-BBZGyB5D.js";import"./VisuallyHidden-CQaNZ-oY.js";import"./Label-Bathhgam.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-Hp5e5rkz.js";import"./browser-B1sj-_-y.js";import"./EmulatedBoldText-YngYColk.js";const or={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

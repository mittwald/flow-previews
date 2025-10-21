import{j as r}from"./iframe-BdeexEb8.js";import{R as l,b as p,a as n}from"./RadioButton-BwJ6nwH8.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories--kZuLg9P.js";import{T as u}from"./Text-G8amV_-h.js";import{C as c}from"./Content-ChABwawZ.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D9dNYku3.js";import"./index-D-gFJj9O.js";import"./index-DrTgVdtP.js";import"./ColumnLayout-s4aseBrg.js";import"./useFieldComponent-DdJyO0fC.js";import"./utils-BE4tcj7E.js";import"./Text-C7oFtPVp.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CtsbdbUA.js";import"./react-children-utilities-jctua2LA.js";import"./ClearPropsContext-C8aFsCZA.js";import"./useMakeFocusable-CQGMBShp.js";import"./RadioGroup-D-q4ET90.js";import"./Form-Ck-IBHt9.js";import"./useLabel-_lz56ByA.js";import"./Label-0GucTR7O.js";import"./Hidden-CQyoiK8N.js";import"./SelectionIndicator-0lfezkYj.js";import"./useFormValidation-wqB4x0T2.js";import"./useFocus-DOIh0B1Z.js";import"./useControlledState-lwDPvcY9.js";import"./FocusScope-BYBHw4Pm.js";import"./useFocusRing-rBTaS5qD.js";import"./context-D6yVr_mO.js";import"./useFormReset-BENrYz2J.js";import"./usePress-BF3KJpSX.js";import"./useFocusable-BJo0-JcZ.js";import"./VisuallyHidden-CRJbmMUG.js";import"./Label-B8MQOgYT.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BAYb9Fap.js";import"./browser-CYlNocNO.js";import"./EmulatedBoldText-ZcdE1rVE.js";const or={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

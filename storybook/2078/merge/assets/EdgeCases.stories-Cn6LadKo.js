import{j as r}from"./iframe-qTztDmQ9.js";import{R as l,b as p,a as n}from"./RadioButton-CdOEyZiQ.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-Cy-LOzlW.js";import{T as u}from"./Text-C9f0aLW8.js";import{C as c}from"./Content-ywzbsxyG.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Bak4HlW4.js";import"./index-P12icK_R.js";import"./index-_9O3yG_2.js";import"./ColumnLayout-BvgxRkj3.js";import"./useFieldComponent-DGEmXGQh.js";import"./utils-CdWUsvaa.js";import"./Text-B9fEov2V.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DPAJHOeD.js";import"./react-children-utilities-C8dGDy-T.js";import"./ClearPropsContext-CkWIpOjD.js";import"./useMakeFocusable-CCDaBvVW.js";import"./RadioGroup-CPbLrPsT.js";import"./Form-D5uPTAwc.js";import"./useLabel-uF6YmIyy.js";import"./Label-Bo8Flsc_.js";import"./Hidden-B1UrvXuA.js";import"./SelectionIndicator-gGCk-Q46.js";import"./useFormValidation-DR7MCNfC.js";import"./useFocus-CdJCReig.js";import"./useControlledState-tlJilXH9.js";import"./FocusScope-BLJU626h.js";import"./useFocusRing-hzSL5p2c.js";import"./context-bFJEZtp8.js";import"./useFormReset-CmjicI53.js";import"./usePress-Dljjmf_y.js";import"./useFocusable-Q1pEG0eK.js";import"./VisuallyHidden-DWMxxCWQ.js";import"./Label-B_HtseH-.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CIyKheH2.js";import"./browser-D-RoGxAl.js";import"./EmulatedBoldText-C04JDKuJ.js";const or={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-CcNHCKoB.js";import{R as l,a as p}from"./Radio-ClGAt9qF.js";import{R as n}from"./RadioButton-C0H-JLKf.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DZzmMpHJ.js";import{T as u}from"./Text-BmtlE-88.js";import{C as c}from"./Content-1twFUXOj.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dkj1vsN8.js";import"./index-CYttZVHR.js";import"./index-C0Ga1GvX.js";import"./ColumnLayout-BJTjCXOG.js";import"./useFieldComponent-DFvJ9Vd5.js";import"./utils-NnqZ9ZBK.js";import"./useMakeFocusable-DQdx0uvp.js";import"./RadioGroup-CvP7YEdx.js";import"./FieldError--IyvMZRA.js";import"./Text-BCtKE9i4.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DRLF_vg9.js";import"./useLabel-CyCYkDRj.js";import"./Label-BWg6WlKG.js";import"./Hidden-B3wID84r.js";import"./SelectionIndicator-CQiEQ8QD.js";import"./useFormValidation-PdvsTzHy.js";import"./useFocus-SYOVVSYu.js";import"./useFocusRing-C53Oh36V.js";import"./useControlledState-TVt6Qf5c.js";import"./FocusScope-_ikiXfPV.js";import"./context-LfQwLpL0.js";import"./useFormReset-CUbMVBNo.js";import"./usePress-eyc-LVl-.js";import"./useFocusable-Dm2HHW3t.js";import"./VisuallyHidden-FLGfwvrv.js";import"./IconWarning-DmrAmEd1.js";import"./remote-CVy042JL.js";import"./Label-F2VOWZsZ.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-COg8E6Vc.js";import"./FieldError-BlodrZIq.js";import"./AlertText-CklP5D4q.js";import"./AlertIcon-DM6j3Z28.js";import"./browser-C0P1LItQ.js";import"./EmulatedBoldText-BunH9Anl.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-d8TPt7Dq.js";import{R as l,b as p,a as n}from"./RadioButton-Bg8SaF5_.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories--UzrkoXh.js";import{T as u}from"./Text-B_83j2CJ.js";import{C as c}from"./Content-Dz547LVF.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-HcW5iDWG.js";import"./index-D-tXEbu6.js";import"./index-hNZo4M03.js";import"./ColumnLayout-BLd1dYby.js";import"./useFieldComponent-XccPD61N.js";import"./utils-CQWCrNEN.js";import"./useMakeFocusable-tI-i_MdT.js";import"./RadioGroup-navX-ETO.js";import"./FieldError-D74Rm1AJ.js";import"./Text-CbFZ93_1.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-bB72J6qo.js";import"./useLabel-CyX9DgZ-.js";import"./Label-Ddce6lPW.js";import"./Hidden-DwOTALl4.js";import"./SelectionIndicator-Tc2ddoNh.js";import"./useFormValidation-DzABwrGN.js";import"./useFocus-Dzzsimxq.js";import"./useControlledState-Du7Hq4ap.js";import"./FocusScope-TlUkqt74.js";import"./useFocusRing-Pl_83XSU.js";import"./context-s9WFa2xd.js";import"./useFormReset-AO5_sbxL.js";import"./usePress-DD6hZDmw.js";import"./useFocusable-Blyv-8JB.js";import"./VisuallyHidden-_OGl7ay2.js";import"./IconWarning-BBwUIuFu.js";import"./remote-DqOJ-OtV.js";import"./Label-DUZNK_N3.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-do7nMxiz.js";import"./FieldError-Z630sQ-Y.js";import"./browser-Cq89yPle.js";import"./EmulatedBoldText-Dx_IZKf8.js";const er={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ar=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,ar as __namedExportsOrder,er as default};

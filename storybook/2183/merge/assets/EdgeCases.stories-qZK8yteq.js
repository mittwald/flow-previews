import{j as r}from"./iframe-CgWIZppF.js";import{R as l,b as p,a as n}from"./RadioButton-8HukLZRw.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DjU66Nys.js";import{T as u}from"./Text-B7pZrZSG.js";import{C as c}from"./Content-cv5i1hOY.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-n6uWZ_Yk.js";import"./index-DK9ZOg9l.js";import"./index-D8vpbAff.js";import"./ColumnLayout-CWiDJsoh.js";import"./useFieldComponent-BZyKlvwh.js";import"./utils-CqFMFg3g.js";import"./useMakeFocusable-D1CyY86t.js";import"./RadioGroup-C0G4ZyRg.js";import"./FieldError-xtpbDfud.js";import"./Text-C3p6npBl.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-BaHtPP4t.js";import"./useLabel-DMBsm_3O.js";import"./Label-Bv5UhUCK.js";import"./Hidden-td7Ld2aU.js";import"./SelectionIndicator-xmkzz9vO.js";import"./useFormValidation-DKxVhdCK.js";import"./useFocus-ClWOKyYK.js";import"./useControlledState-ii3oWk08.js";import"./FocusScope-CYlUipby.js";import"./useFocusRing-pEE2Rwro.js";import"./context-DG5uy-SY.js";import"./useFormReset-BEtHvHxA.js";import"./usePress-CoCxa2CI.js";import"./useFocusable-Dp8viQw7.js";import"./VisuallyHidden-BDyUoc3v.js";import"./IconWarning-CJrmQcXC.js";import"./remote-DVGHPh_8.js";import"./Label-8Ls1PMPy.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-6cAQP3rP.js";import"./FieldError-Dr7a0W2N.js";import"./browser-C8d3FCf4.js";import"./EmulatedBoldText-iMswxomY.js";const er={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

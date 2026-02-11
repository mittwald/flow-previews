import{j as r}from"./iframe-lphi5Fln.js";import{R as l,a as p}from"./Radio-CID1XBQH.js";import{R as n}from"./RadioButton-C0EWVNIG.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DVRjOJ-n.js";import{T as u}from"./Text-DhRxTRp1.js";import{C as c}from"./Content--6HNEmw7.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D0jdWuAG.js";import"./index-BDdjr3yJ.js";import"./index-BirbEfWe.js";import"./ColumnLayout-BJbkd0vf.js";import"./useFieldComponent-6mmayeW0.js";import"./utils-Is-sFETw.js";import"./useMakeFocusable-6V6ke2-z.js";import"./RadioGroup-CyLLADK7.js";import"./FieldError-nA_6I3J3.js";import"./Text-CwPOMTFI.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BQ7FIPf4.js";import"./useLabel-B3jPjt5T.js";import"./Label-mBHJjPT6.js";import"./Hidden-B_Gq1hkl.js";import"./SelectionIndicator-Dfc-TPkO.js";import"./useFormValidation-fTAeqOxz.js";import"./useFocus-BYwX3hbJ.js";import"./useFocusRing-y2NKP0hv.js";import"./useControlledState-D2ulvinQ.js";import"./FocusScope-DRoVwcjL.js";import"./context-hul-JKEa.js";import"./useFormReset-CSRdRe02.js";import"./usePress-ByR9A8gc.js";import"./useFocusable-CWG73OOy.js";import"./VisuallyHidden-DjAmLvSg.js";import"./IconWarning-Dv_szZY_.js";import"./remote-B9VD8JHH.js";import"./Label-CqftOgdQ.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-ZZw30b7A.js";import"./FieldError-CHFlSzPg.js";import"./AlertText-BlI1Muxp.js";import"./AlertIcon-Tp_Bhr3n.js";import"./browser-DxP0Rs6D.js";import"./EmulatedBoldText-5wQJnzOA.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

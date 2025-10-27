import{j as r}from"./iframe-QQgxjfU-.js";import{R as l,b as p,a as n}from"./RadioButton-CzYZJDsf.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DEy3lwQE.js";import{T as u}from"./Text-CRs-OO-e.js";import{C as c}from"./Content-DjIa1yoA.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent--EocvfBi.js";import"./index-BLcKU5Vx.js";import"./index-3NdHptBj.js";import"./ColumnLayout-DJjt9-9Z.js";import"./useFieldComponent-B5mMljfV.js";import"./utils-DhA81qjX.js";import"./Text-D_WC5Uss.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CSQYjrC1.js";import"./react-children-utilities-2-HBtGkG.js";import"./ClearPropsContext-C1xOcMSE.js";import"./useMakeFocusable-DfOzNy-a.js";import"./RadioGroup-Dn0R-55i.js";import"./Form-w-Aai7lh.js";import"./useLabel-BVJbXyTi.js";import"./Label-0zOMPJ7B.js";import"./Hidden-4F2-2j_N.js";import"./SelectionIndicator-KO2l2gWQ.js";import"./useFormValidation-CrlfASAQ.js";import"./useFocus-0cMRA2DE.js";import"./useControlledState-CkoNAxF1.js";import"./FocusScope-Bg9evWjP.js";import"./useFocusRing-UOKs1Fh8.js";import"./context-CRx6Bs8B.js";import"./useFormReset-C3QpCCH-.js";import"./usePress-BIrX7kgo.js";import"./useFocusable-ClkP-4lm.js";import"./VisuallyHidden-B95C2FUL.js";import"./Label-TUk01fEf.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-B91t6rxR.js";import"./browser-CvCNE6Dh.js";import"./EmulatedBoldText-DL56_OWd.js";const or={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

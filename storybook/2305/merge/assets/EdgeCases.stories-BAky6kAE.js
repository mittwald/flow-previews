import{j as r}from"./iframe-nlVW-CPZ.js";import{R as l,a as p}from"./Radio-BxX441aE.js";import{R as n}from"./RadioButton-DVGRGv2M.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-Df9sJr3z.js";import{T as u}from"./Text-BzuDjaz9.js";import{C as c}from"./Content-DP-ooqyv.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-HOniYMNn.js";import"./index-C9GmpRgu.js";import"./index-DrBjklCk.js";import"./ColumnLayout-B86r7WOZ.js";import"./useFieldComponent-DOzg870F.js";import"./utils-CyuEFqip.js";import"./useMakeFocusable-CxUrmYH6.js";import"./RadioGroup-D37vSQ07.js";import"./FieldError-BpjEpOFY.js";import"./Text-sEy-KTn9.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DSPAlIu9.js";import"./useLabel-DUbax7la.js";import"./Label-txjD4aFE.js";import"./Hidden-B4CC7Km1.js";import"./SelectionIndicator-DdhOYUUY.js";import"./useFormValidation-DqSMo-uw.js";import"./useFocus-CD1ZzMvo.js";import"./useFocusRing-0Z36i33d.js";import"./useControlledState-ywoEmBU4.js";import"./FocusScope-DihhZg9P.js";import"./context-CIGB7i0H.js";import"./useFormReset-J8eUPjf8.js";import"./usePress-BSHzPeES.js";import"./useFocusable-DHxyzauV.js";import"./VisuallyHidden-44O2XzGD.js";import"./IconWarning-VZ7ITFqu.js";import"./remote-D3GclicH.js";import"./Label-BuWy1qrT.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CkS4VLgI.js";import"./FieldError-C-5FG0Dy.js";import"./AlertText-tAApf57I.js";import"./AlertIcon-Dr5phtoY.js";import"./browser-BoEfPalF.js";import"./EmulatedBoldText-DYHVi4jR.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

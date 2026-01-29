import{j as r}from"./iframe-CgeYxcj8.js";import{R as l,b as p,a as n}from"./RadioButton-DEzxeQzC.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DNN6HHn4.js";import{T as u}from"./Text-fEw-hlGn.js";import{C as c}from"./Content-CCJfbBVV.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dnk3jDHh.js";import"./index-DGuDz7oW.js";import"./index-SS9EXt6e.js";import"./ColumnLayout-Bz9VsjOe.js";import"./useFieldComponent-DjF7VplI.js";import"./utils-BH6Z59zo.js";import"./useMakeFocusable-SWUC0wbY.js";import"./RadioGroup-AJnP4BaB.js";import"./FieldError-BanRAUWl.js";import"./Text-D1ETBO0D.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DrrI3HBf.js";import"./useLabel-CNkOKuMy.js";import"./Label-DsJ6qzWh.js";import"./Hidden-kX7iUH63.js";import"./SelectionIndicator-BaQZNiQ3.js";import"./useFormValidation-CUbvhZHn.js";import"./useFocus-BDu45Ayq.js";import"./useFocusRing-BNw3vzKJ.js";import"./useControlledState-CjPSf5xo.js";import"./FocusScope-CGvyVacv.js";import"./context-CYaZBhkg.js";import"./useFormReset-CLCQkLzV.js";import"./usePress-DX014ZyL.js";import"./useFocusable-UxYwgi7z.js";import"./VisuallyHidden-ty8jLyKB.js";import"./IconWarning-CNkUjla4.js";import"./remote-CtdlUY7L.js";import"./Label-CIGJVOdR.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-C8PcX-p4.js";import"./FieldError-CDWzOCc-.js";import"./AlertText-BHVf3OWG.js";import"./AlertIcon-BVEvo4xP.js";import"./browser-DJjrqqpQ.js";import"./EmulatedBoldText-B9jRyhwt.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

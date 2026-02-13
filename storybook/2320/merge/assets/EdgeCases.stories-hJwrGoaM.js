import{j as r}from"./iframe-DYxqCFL4.js";import{R as l,a as p}from"./Radio-Cw2SFfli.js";import{R as n}from"./RadioButton-BEYhAzzX.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-B2d7X8XQ.js";import{T as u}from"./Text-BnII0mKt.js";import{C as c}from"./Content-DzIiqqqA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-SnxdO0ip.js";import"./index-CMV8c4GV.js";import"./index-DJ6wSCwd.js";import"./ColumnLayout-UiMhxA5X.js";import"./useFieldComponent-DjSvrfgm.js";import"./utils-C1fpOvwY.js";import"./useMakeFocusable-DjG4Rf0d.js";import"./RadioGroup-B3tlOCko.js";import"./FieldError-B9AV5Ok7.js";import"./Text-B3xsuc84.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-C4EYd143.js";import"./useLabel-mobDYg92.js";import"./Label-DwTYNUmc.js";import"./Hidden-B_geUQU0.js";import"./SelectionIndicator-D_wBgdeg.js";import"./useFormValidation-FkHTzTfc.js";import"./useFocus-C6GqelOx.js";import"./useFocusRing-Byzp35A7.js";import"./useControlledState-Co5SihOL.js";import"./FocusScope-BC21MQ9n.js";import"./context-CfMfa2C9.js";import"./useFormReset-VwcIZGsw.js";import"./usePress-DMR80VPZ.js";import"./useFocusable-8bvqGkWP.js";import"./VisuallyHidden-CZrO0U0i.js";import"./IconWarning-BGRYHRhg.js";import"./remote-WwxW7fyl.js";import"./Label-DuKZtpj_.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-B6u7Awnk.js";import"./FieldError-sWm_iZNp.js";import"./AlertText-D5ZV5CrS.js";import"./AlertIcon-B9fJ359s.js";import"./browser-CmbZy-PD.js";import"./EmulatedBoldText-D6xSemQT.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-n3VOiEf5.js";import{R as l,a as p}from"./Radio-DhbGQ2hO.js";import{R as n}from"./RadioButton-DKUW0x13.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-Hi4D6zEH.js";import{T as u}from"./Text-CwVjZxCT.js";import{C as c}from"./Content-D1DgylIT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-xlJ5dlMA.js";import"./index-Bqd_wUB4.js";import"./index-CHzAo02W.js";import"./ColumnLayout-DjHJEmmJ.js";import"./useFieldComponent-6hUMLoYk.js";import"./utils-BTX3Dk-t.js";import"./useMakeFocusable-BO09JXR2.js";import"./RadioGroup-AQiffJoY.js";import"./FieldError-IZ2wmqkG.js";import"./Text-BWj5dCJ1.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BfOiuDw8.js";import"./useLabel-DpN8AhZi.js";import"./Label-CZ6Ig0wh.js";import"./Hidden-8NzXPPVn.js";import"./SelectionIndicator-QXVr0AO7.js";import"./useFormValidation-0mLIssn1.js";import"./useFocus-Di5Kz97s.js";import"./useFocusRing-50iWl84k.js";import"./useControlledState-17a16_5D.js";import"./FocusScope-BBR4OeS8.js";import"./context-DhQskmxc.js";import"./useFormReset-C-KjP2af.js";import"./usePress-CVHN3NRW.js";import"./useFocusable-ZTBPsPh1.js";import"./VisuallyHidden-DCK-vxP3.js";import"./IconWarning-BKHoIgIa.js";import"./remote-CWx46e_E.js";import"./Label-B5oQkcZ-.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BFx8pFGn.js";import"./FieldError-DRCS1Gz9.js";import"./AlertText-BJDrahB4.js";import"./AlertIcon-DtfTxuVy.js";import"./browser-DXFXi5M2.js";import"./EmulatedBoldText-eIBSog0P.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

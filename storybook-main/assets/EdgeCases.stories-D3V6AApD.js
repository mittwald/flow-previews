import{j as r}from"./iframe-BoiTaxGN.js";import{R as l,a as p}from"./Radio-B-zPJXki.js";import{R as n}from"./RadioButton-Caki52QB.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CKCmi4dN.js";import{T as u}from"./Text-ClfpXeTF.js";import{C as c}from"./Content-Bi6LQS0I.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-5SfKf5nB.js";import"./index-CnTFVdv3.js";import"./index-B9o0n-vC.js";import"./ColumnLayout-CGK2mhyv.js";import"./useFieldComponent-DiiGd8t3.js";import"./utils-RetFhwyR.js";import"./useMakeFocusable-CJoufYRj.js";import"./RadioGroup-C7XIbyqI.js";import"./FieldError-C1wD6V1t.js";import"./Text-DnUg5-aR.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BMda5et4.js";import"./useLabel-B8QgbILE.js";import"./Label-eoW__4rU.js";import"./Hidden-BZRUsILE.js";import"./SelectionIndicator-BQPOHDPg.js";import"./useFormValidation-CX6eZKbg.js";import"./useFocus-BSOUAoQt.js";import"./useFocusRing-VutGkHGx.js";import"./useControlledState-DJPWuI7p.js";import"./FocusScope-p908I3Or.js";import"./context-hlBZKj-7.js";import"./useFormReset-DsmV2EC6.js";import"./usePress-DoLCzapA.js";import"./useFocusable-CNuWQ5Vu.js";import"./VisuallyHidden-CML_0Z6P.js";import"./IconWarning-DctWBCm0.js";import"./remote-C4jG3DXh.js";import"./Label-DgN2b341.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-jQztqgXA.js";import"./FieldError-DjT7Sc36.js";import"./AlertText-aAUEFisb.js";import"./AlertIcon-B1VBridV.js";import"./browser-zBSS86_h.js";import"./EmulatedBoldText-vFeun45o.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-BwTc9KkQ.js";import{R as l,a as p}from"./Radio-CvSnEoD7.js";import{R as n}from"./RadioButton-Chgnnyu5.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DDqV_3ZB.js";import{T as u}from"./Text-Gc4XBNKO.js";import{C as c}from"./Content-CHMk174c.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CVbdUxz2.js";import"./index-CGQkNtsL.js";import"./index-C6-tpPRF.js";import"./ColumnLayout-BP0LJvsC.js";import"./useFieldComponent-D1bp3yFp.js";import"./utils-CBQcEIVx.js";import"./useMakeFocusable-DEwr5FBt.js";import"./RadioGroup-CJmYWAzi.js";import"./FieldError-B40__s1G.js";import"./Text-DngMYAZH.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-CXxVDbS0.js";import"./useLabel-BSSuBv8C.js";import"./Label-123M7w93.js";import"./Hidden-DzSpzd_A.js";import"./SelectionIndicator-CWwUcpBG.js";import"./useFormValidation-BAeTIVc2.js";import"./useFocus-BpPHYutm.js";import"./useFocusRing-DolIE8eq.js";import"./useControlledState-DJoARPq6.js";import"./FocusScope-D13mvD2r.js";import"./context-BwyA9HG-.js";import"./useFormReset-38634gnl.js";import"./usePress-CJeMKVhz.js";import"./useFocusable-B00zaX18.js";import"./VisuallyHidden-BgOZVVaM.js";import"./IconWarning-CuEgZ9GS.js";import"./remote-B0txjFXx.js";import"./Label-BbbV6hPu.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-INCxkZRf.js";import"./FieldError-BhKB-hqh.js";import"./AlertText-tZCm05zF.js";import"./AlertIcon-B9dP4NVD.js";import"./browser-vKZ8hCbx.js";import"./EmulatedBoldText-nz1iuJug.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

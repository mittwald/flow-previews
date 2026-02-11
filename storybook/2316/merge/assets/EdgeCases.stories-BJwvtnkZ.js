import{j as r}from"./iframe-Cq8OhOqi.js";import{R as l,a as p}from"./Radio-Cy7wFXUZ.js";import{R as n}from"./RadioButton-BjXfuMld.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-Di3LYyGx.js";import{T as u}from"./Text-CeV8P7pg.js";import{C as c}from"./Content-Iwe82C8Z.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BPlAJrQX.js";import"./index-CDojQULy.js";import"./index-CtMt1etx.js";import"./ColumnLayout-DHjBcVOa.js";import"./useFieldComponent-BYb5VnRy.js";import"./utils-Bubk6yJw.js";import"./useMakeFocusable-DmOA8TBK.js";import"./RadioGroup-BSjYUsfT.js";import"./FieldError-BGnsbaLE.js";import"./Text-BrptySpj.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-B1CYZolU.js";import"./useLabel-Ddb4-Ews.js";import"./Label-BIWw7tEO.js";import"./Hidden-BxQeKZxe.js";import"./SelectionIndicator-LHAUO8nn.js";import"./useFormValidation-DYnqTuxD.js";import"./useFocus-hSjeZcP9.js";import"./useFocusRing-C66f8wZh.js";import"./useControlledState-DRmDoHXV.js";import"./FocusScope-B5Hy3UxH.js";import"./context-EUTE_30t.js";import"./useFormReset-B4zM24P8.js";import"./usePress-ChoIOqc4.js";import"./useFocusable-Cka2f_Hf.js";import"./VisuallyHidden-CN_7F8uI.js";import"./IconWarning-D6WB6H32.js";import"./remote-D-3bgxwF.js";import"./Label-D-4zWGkt.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-B4BWJZRT.js";import"./FieldError-2IpGOPbh.js";import"./AlertText-aZpP8wGh.js";import"./AlertIcon-4JwX6npd.js";import"./browser-D1jWek88.js";import"./EmulatedBoldText-CaDCAcie.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

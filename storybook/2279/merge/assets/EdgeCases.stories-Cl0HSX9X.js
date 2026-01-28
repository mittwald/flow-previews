import{j as r}from"./iframe-BbrP11p-.js";import{R as l,b as p,a as n}from"./RadioButton-BNllx7Yw.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-4ZSnbptK.js";import{T as u}from"./Text-BLzGfhm5.js";import{C as c}from"./Content-BciwZ-cK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Bjf10jjx.js";import"./index-l4GzuhKJ.js";import"./index-CvmJvI2t.js";import"./ColumnLayout-DhtCYTyE.js";import"./useFieldComponent-CnZp8uAU.js";import"./utils-CfXF9mMB.js";import"./useMakeFocusable-a5L8sTNv.js";import"./RadioGroup-tMXWqw-i.js";import"./FieldError-C0mMT85u.js";import"./Text-BmgQOLJ4.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Da-PMQ7G.js";import"./useLabel-ChwTXcaC.js";import"./Label-C8vxG_o1.js";import"./Hidden-6YtfGJCG.js";import"./SelectionIndicator-DLJIVGG7.js";import"./useFormValidation-dfDtwXtG.js";import"./useFocus-DdYA68cd.js";import"./useFocusRing-D-e5pHmS.js";import"./useControlledState-CrzzGVbO.js";import"./FocusScope-DtyxLM97.js";import"./context-Cg0av1qu.js";import"./useFormReset-VtyCL_TW.js";import"./usePress-VHqnVNy0.js";import"./useFocusable-ssdBLHPa.js";import"./VisuallyHidden-BCVFUf4T.js";import"./IconWarning-BeRGE0lU.js";import"./remote-BUE50-N_.js";import"./Label-DwqHoWx5.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-au7M1iG_.js";import"./FieldError-i_FUROXt.js";import"./AlertText-7tARt4Et.js";import"./AlertIcon-B3ByzjK4.js";import"./browser-CKsvW9Gw.js";import"./EmulatedBoldText-j9VeSllR.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-Bvl8-Rhq.js";import{R as l,a as p}from"./Radio-B0FBRumz.js";import{R as n}from"./RadioButton-CNHBzMQo.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CPi5KsZq.js";import{T as u}from"./Text-CBdBop4j.js";import{C as c}from"./Content-twBtn99c.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dyl-PKqx.js";import"./index-C9o18Dic.js";import"./index-uwiO8q01.js";import"./ColumnLayout-CtdBLSWX.js";import"./useFieldComponent-D4BbqCv_.js";import"./utils-D7QihGpD.js";import"./useMakeFocusable-DHL0QPQ5.js";import"./RadioGroup-Cstr-VTt.js";import"./FieldError-Du4MQwEm.js";import"./Text-BaIKemC9.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-D70wz7aV.js";import"./useLabel-B5hAF-sV.js";import"./Label-nFrsKobo.js";import"./Hidden-G2krlLtJ.js";import"./SelectionIndicator-i35HMeKk.js";import"./useFormValidation-Cl3HF3fr.js";import"./useFocus-DXNpHz9A.js";import"./useFocusRing-gQZwig4O.js";import"./useControlledState-B5E2fQyc.js";import"./FocusScope-DRyVjtRp.js";import"./context--xVWQ6Ca.js";import"./useFormReset-C0JkbMmh.js";import"./usePress-C7_C1qgD.js";import"./useFocusable-CNuLnnFg.js";import"./VisuallyHidden-ScIHpAUT.js";import"./IconWarning-_TKsX-mO.js";import"./remote-CTLFAioN.js";import"./Label-BVY1ryMc.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-Cg9GFE8r.js";import"./FieldError-BkA2bgrH.js";import"./AlertText-D17VFEKw.js";import"./AlertIcon-DxYeysTG.js";import"./browser-B1OJJ6Dj.js";import"./EmulatedBoldText-BoCe5muM.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

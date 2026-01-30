import{j as r}from"./iframe-DkT4d7Ot.js";import{R as l,a as p}from"./Radio-BzPeYTVu.js";import{R as n}from"./RadioButton-BWPnBXWP.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-jSTBX05Z.js";import{T as u}from"./Text-CN56Aq7p.js";import{C as c}from"./Content-CT1yXCjD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CHs1XVIh.js";import"./index-BIhgoFLA.js";import"./index-CA8YyeFM.js";import"./ColumnLayout-Bl1HlYyD.js";import"./useFieldComponent-FHnXwL7q.js";import"./utils-up3lG_mb.js";import"./useMakeFocusable-DLbl9rFj.js";import"./RadioGroup-Cx-yRr8y.js";import"./FieldError-BIqVWLlF.js";import"./Text-C_PPHbON.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-CweUcSb7.js";import"./useLabel-D_TjIfTk.js";import"./Label-Bfb68HPn.js";import"./Hidden-B_u69euq.js";import"./SelectionIndicator-B0xJhgeU.js";import"./useFormValidation-UULz_Uq_.js";import"./useFocus-Bn0bRGba.js";import"./useFocusRing-Bn6GFEBK.js";import"./useControlledState-B7-cf8QC.js";import"./FocusScope-D5JuRjyj.js";import"./context-BhNnKB4w.js";import"./useFormReset-DMhhuJvy.js";import"./usePress-loL-ySzv.js";import"./useFocusable-oFwI_mrj.js";import"./VisuallyHidden-BhWvypZu.js";import"./IconWarning-K6asu7lY.js";import"./remote-B8vjNxTl.js";import"./Label-BjxJIvYs.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-D2x8dv8x.js";import"./FieldError-BUQThHV3.js";import"./AlertText-n1a7254W.js";import"./AlertIcon-CGIGsQoy.js";import"./browser-CwBpRuL-.js";import"./EmulatedBoldText-Auc0aNAR.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

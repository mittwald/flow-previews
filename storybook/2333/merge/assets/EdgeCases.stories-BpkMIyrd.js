import{j as r}from"./iframe-ByHSJ7Zj.js";import{R as l,a as p}from"./Radio-piTKcUe6.js";import{R as n}from"./RadioButton-BLLMPKV0.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DE_8BH17.js";import{T as u}from"./Text-CE06l-7_.js";import{C as c}from"./Content-CmPZ5biX.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DJOvxh70.js";import"./index-Df7GZGOr.js";import"./index-Bsvsb8kg.js";import"./ColumnLayout-BpVh1gPt.js";import"./useFieldComponent-CBB8cMnJ.js";import"./utils-AuVRPQNE.js";import"./useMakeFocusable-DW7PayyY.js";import"./RadioGroup-DPNxmqhB.js";import"./FieldError-N78nigrI.js";import"./Text-CMdjYF8F.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-B6nfDOYR.js";import"./useLabel-DwarV1Dq.js";import"./Label-BGNexww0.js";import"./Hidden-BFoBdwRQ.js";import"./SelectionIndicator-B6Jii7Kf.js";import"./useFormValidation-BGcU6QC0.js";import"./useFocus-DXK20Yfh.js";import"./useFocusRing-lrSptqjQ.js";import"./useControlledState-CZXI0X0f.js";import"./FocusScope-CdPzSUjP.js";import"./context-ER57Z7kb.js";import"./useFormReset-BeZmi33v.js";import"./usePress-53w3WrUq.js";import"./useFocusable-CTHcGGNa.js";import"./VisuallyHidden-DjUeNVhy.js";import"./IconWarning-D57HRYjk.js";import"./remote-NqjFlPNq.js";import"./Label-tcy2V_mA.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-C3tZMmo1.js";import"./FieldError-C1ELgHYl.js";import"./AlertText-sxDaercD.js";import"./AlertIcon-CPipsjCC.js";import"./browser-CsRLC16Z.js";import"./EmulatedBoldText-Cuj2T5Fx.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

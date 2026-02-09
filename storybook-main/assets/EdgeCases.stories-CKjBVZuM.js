import{j as r}from"./iframe-BzN-GDSV.js";import{R as l,a as p}from"./Radio-p3BQNlgg.js";import{R as n}from"./RadioButton-BD2yRibM.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories--HGn22Km.js";import{T as u}from"./Text-w8Xk5tzh.js";import{C as c}from"./Content-0Z78E3Jo.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D-AbKxQ-.js";import"./index-B3p9ddxp.js";import"./index-jqMu6fsr.js";import"./ColumnLayout-CePOc278.js";import"./useFieldComponent-DWIvkE7m.js";import"./utils-DZiSZNRH.js";import"./useMakeFocusable-B1uOoKnt.js";import"./RadioGroup-DehbiROT.js";import"./FieldError-DErqUxVb.js";import"./Text-9Slz249r.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BzSZff5w.js";import"./useLabel-D4-tvGJV.js";import"./Label-CAj1yFiM.js";import"./Hidden-D9QDiB2Q.js";import"./SelectionIndicator-Clnr_8iz.js";import"./useFormValidation-Bm80HquG.js";import"./useFocus-CD9nXzJ_.js";import"./useFocusRing-DeK7XLS9.js";import"./useControlledState-VicJRSad.js";import"./FocusScope-BMhRfsbp.js";import"./context-CV01TaOS.js";import"./useFormReset-C_nKv_ku.js";import"./usePress-CKBw2syN.js";import"./useFocusable-CZxxukff.js";import"./VisuallyHidden-DwmcGrU0.js";import"./IconWarning-Dq5gBH8b.js";import"./remote-DmyBa_Y3.js";import"./Label-aAQCtXm8.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-yVJP6Ie4.js";import"./FieldError-C55-OsIs.js";import"./AlertText-_Zms_FAC.js";import"./AlertIcon-CN2JBdj6.js";import"./browser-BZan5p2Q.js";import"./EmulatedBoldText-Bg-XhDZU.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

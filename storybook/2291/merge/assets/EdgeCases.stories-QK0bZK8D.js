import{j as r}from"./iframe-CGL3Ztd8.js";import{R as l,b as p,a as n}from"./RadioButton-DO2BCF5e.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-Df8jAaZy.js";import{T as u}from"./Text-_sa0OuU0.js";import{C as c}from"./Content-CnEBeOqD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-WiCTTjdG.js";import"./index-P9tp8qCw.js";import"./index-eHspQkB2.js";import"./ColumnLayout-B2Q1WHnk.js";import"./useFieldComponent-CHIggLRE.js";import"./utils-BPLHaINM.js";import"./useMakeFocusable-Cue-GwYJ.js";import"./RadioGroup-BQDvw_ZI.js";import"./FieldError-CZz7QnF8.js";import"./Text-BKxs7Hdx.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Ba7VKjcY.js";import"./useLabel-Dh-HsBYa.js";import"./Label-BHYpf9e5.js";import"./Hidden-CROh8dKk.js";import"./SelectionIndicator-CKCmLDiO.js";import"./useFormValidation-DhAeSygX.js";import"./useFocus-XDda6gbt.js";import"./useFocusRing-BtxSiiWP.js";import"./useControlledState-DjoZo3jd.js";import"./FocusScope-CzHXyZUV.js";import"./context-BN4qQIb1.js";import"./useFormReset-C_UBUwcF.js";import"./usePress-BpWTOkQr.js";import"./useFocusable-MZ2jhLFm.js";import"./VisuallyHidden-DvGmoJqV.js";import"./IconWarning-CMBZCdTm.js";import"./remote-DEzwzibY.js";import"./Label-BdVzzMHl.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BjebV3sn.js";import"./FieldError-Bg6s6kv2.js";import"./AlertText-AGSpHO8N.js";import"./AlertIcon-DM1knw9_.js";import"./browser-Dk-cIrUN.js";import"./EmulatedBoldText-CAg0SlO2.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

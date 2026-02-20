import{j as r}from"./iframe-B-dt22EB.js";import{R as l,a as p}from"./Radio-D2HXI86C.js";import{R as n}from"./RadioButton-CVPX5T32.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-oQ-1PKow.js";import{T as u}from"./Text-BCqKdXYs.js";import{C as c}from"./Content-CkcxiEPO.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-etctvabC.js";import"./index-DAMyqNwe.js";import"./index-D5JlC3xK.js";import"./ColumnLayout-BrKqsvAf.js";import"./useFieldComponent-D2j3Q6-m.js";import"./utils-DoxtMd58.js";import"./useMakeFocusable-BohdreJR.js";import"./RadioGroup-BZsFQHJ6.js";import"./FieldError-BkuObk6W.js";import"./Text-vBmBwiIT.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DTBJD-53.js";import"./useLabel-BKpYilGg.js";import"./Label-FcJtXcx4.js";import"./Hidden-bM58ni_l.js";import"./SelectionIndicator-Di9XKJuy.js";import"./useFormValidation-Ds3P2hMN.js";import"./useFocus-9GLlZYuH.js";import"./useFocusRing-6FfHDt87.js";import"./useControlledState-jk51FjyI.js";import"./FocusScope-CfFOF-ar.js";import"./context--H9enp2q.js";import"./useFormReset-BwldCtpD.js";import"./usePress-CgYKrzfD.js";import"./useFocusable-C0Z9ZNeY.js";import"./VisuallyHidden-CZH0CwBW.js";import"./IconWarning-BbozUbXF.js";import"./remote-D6Q14pEz.js";import"./Label-DPQ9pprY.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CCZK-pLP.js";import"./FieldError-B26pZzZe.js";import"./AlertText-DjlqIQ0W.js";import"./AlertIcon-B1kQf0Ru.js";import"./browser-CJi_ki0i.js";import"./EmulatedBoldText-fVR6kGZs.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

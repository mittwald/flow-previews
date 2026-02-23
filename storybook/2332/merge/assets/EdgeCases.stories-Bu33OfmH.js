import{j as r}from"./iframe-DunzINT4.js";import{R as l,a as p}from"./Radio-CrnJF2ge.js";import{R as n}from"./RadioButton-DkRjCeDI.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-BER6bbmT.js";import{T as u}from"./Text-DTHO_DRR.js";import{C as c}from"./Content-C85uPduS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CeuyEBcJ.js";import"./index-eVQn7fN1.js";import"./index-Wl0ZfLjP.js";import"./ColumnLayout--RyVNOBQ.js";import"./useFieldComponent-mGz2JkQm.js";import"./utils-B66WPIWK.js";import"./useMakeFocusable-Du4il9hY.js";import"./RadioGroup-N7hXT6Pi.js";import"./FieldError-MxPTKBhw.js";import"./Text-CMXpTIb-.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Dp-IAcVR.js";import"./useLabel-ClizNTl4.js";import"./Label-BZPwsdxQ.js";import"./Hidden-B50LlJsW.js";import"./SelectionIndicator-BB6AU3Ia.js";import"./useFormValidation-CAKGNU-r.js";import"./useFocus-CLsD99Jd.js";import"./useFocusRing-BpLynkPU.js";import"./useControlledState-BzLfbFoS.js";import"./FocusScope-9vf2uR4m.js";import"./context-XFBu4tuG.js";import"./useFormReset-BCoUHfvE.js";import"./usePress-VDpDAbVy.js";import"./useFocusable-BqXitQDl.js";import"./VisuallyHidden-C85ONzQn.js";import"./IconWarning-kFcnfyhN.js";import"./remote-BHsosJBg.js";import"./Label-CAkB50pb.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DXa2M0xs.js";import"./FieldError-CxTapnNI.js";import"./AlertText-CXIp0I6q.js";import"./AlertIcon-Bju3yLvF.js";import"./browser-CUqULdV9.js";import"./EmulatedBoldText-Bdm-2WSs.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-BEQP9uXD.js";import{R as l,b as p,a as n}from"./RadioButton-CIrhwKgC.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-Bqzr2x53.js";import{T as u}from"./Text-BQmA_ZwI.js";import{C as c}from"./Content-DNRSI0xJ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-84Jhttbw.js";import"./index-CA9bKJEG.js";import"./index-COHhcPte.js";import"./ColumnLayout-uw0gFhJ1.js";import"./useFieldComponent-BKGW_bMF.js";import"./utils-CvsvUfaH.js";import"./useMakeFocusable-BnD6XRff.js";import"./RadioGroup-BhOr3YF0.js";import"./FieldError-WngkcyXU.js";import"./Text-Dh3KhDzI.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-BbvSEhBq.js";import"./useLabel-BaFA04Xw.js";import"./Label-DEkvlGAI.js";import"./Hidden-BRgRW0lF.js";import"./SelectionIndicator-Baqg4pYL.js";import"./useFormValidation-Kra5hQIO.js";import"./useFocus-DENBDZ81.js";import"./useControlledState-IAFCDfDW.js";import"./FocusScope-D5mGJCBF.js";import"./useFocusRing-QizZnVOy.js";import"./context-DjvYmnOm.js";import"./useFormReset-QF_OYRwm.js";import"./usePress-BjEuYOvC.js";import"./useFocusable-WQftMZYd.js";import"./VisuallyHidden-BLDMQ79k.js";import"./IconWarning-BArZWwdB.js";import"./remote-Ba3iobwA.js";import"./Label-ULyyAOQY.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CVsWWxAE.js";import"./FieldError-DcwQV8mK.js";import"./AlertText-J3TBTDdf.js";import"./AlertIcon-aU-KTTvT.js";import"./browser-D8S-En3T.js";import"./EmulatedBoldText-BYVdDx5b.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

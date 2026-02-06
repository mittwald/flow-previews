import{j as r}from"./iframe-C-IsL8qN.js";import{R as l,a as p}from"./Radio-g9E6BXMl.js";import{R as n}from"./RadioButton-FH-ZCNIQ.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DuMjdxxt.js";import{T as u}from"./Text-zEwe4Yc5.js";import{C as c}from"./Content-Dl7kxknV.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DS36iIr8.js";import"./index-D9sZegdt.js";import"./index-foeybvdq.js";import"./ColumnLayout-CJ9fYmaH.js";import"./useFieldComponent-neJhoipE.js";import"./utils-CdIT7ixS.js";import"./useMakeFocusable-IVMrk_PQ.js";import"./RadioGroup-BMZ9nNoQ.js";import"./FieldError-CqpMndtu.js";import"./Text-CQAUJHD3.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-4JRPVmTA.js";import"./useLabel-C05pQW9y.js";import"./Label-c2neL4nQ.js";import"./Hidden-BbPT9r2h.js";import"./SelectionIndicator-4Vq_x9qO.js";import"./useFormValidation-CE50eLV8.js";import"./useFocus-NxQ40LWx.js";import"./useFocusRing-DAQnos8V.js";import"./useControlledState-D6WUL5XM.js";import"./FocusScope-DMp-Wrqn.js";import"./context-D_ogfP81.js";import"./useFormReset-ovy8PPed.js";import"./usePress-Bg3iVugG.js";import"./useFocusable-9aQ0aONO.js";import"./VisuallyHidden-B09yhrQ-.js";import"./IconWarning-Dgpqm1wd.js";import"./remote-HwzzztjA.js";import"./Label-DkhLxI5s.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DvhvnQe6.js";import"./FieldError-B5Qpz102.js";import"./AlertText-DKiC9lQT.js";import"./AlertIcon-Dd6PrMrE.js";import"./browser-Dh90zeJL.js";import"./EmulatedBoldText-CbJEOPDL.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

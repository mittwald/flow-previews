import{j as r}from"./iframe-D8Xbwx9P.js";import{R as l,a as p}from"./Radio-DjBPZtUm.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DBg85jhL.js";import{T as u}from"./Text-ZHIm2izM.js";import{C as c}from"./Content-CCOnNFzG.js";import{R as n}from"./RadioButton-D-_Fvw8c.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CigogB48.js";import"./index-CYTinXvO.js";import"./index-BkN34slO.js";import"./ColumnLayout-DrUH1yC0.js";import"./useFieldComponent-BVJ72uhW.js";import"./utils-C3Tuzz6i.js";import"./useMakeFocusable-YwmtQXw3.js";import"./RadioGroup-CYHE4Nwh.js";import"./FieldError-BOU-ptKT.js";import"./Text-C0Eqp9FN.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-BSjJ02XH.js";import"./useLabel-DE67nUnP.js";import"./Label-rFd_FIkn.js";import"./Hidden-zhCtJ-LB.js";import"./SelectionIndicator-DvsfeWbh.js";import"./useFormValidation-Bi2FjDm7.js";import"./useFocus-D1eNONK1.js";import"./useControlledState-YZIEyxRh.js";import"./FocusScope-_ezdgzai.js";import"./useFocusRing-kQK9kbZa.js";import"./context-CMvcEg-k.js";import"./useFormReset-7Q0iJ7bt.js";import"./usePress-CvIVggVb.js";import"./useFocusable-CozNvSU7.js";import"./VisuallyHidden-0JTBVxma.js";import"./IconApp-Ch7b1vIu.js";import"./remote-BpFUxGPl.js";import"./IconRadioOn-D2KrbfGq.js";import"./Label-DAN_V0xJ.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CXsD6kYA.js";import"./FieldError-SqDTuGjU.js";import"./IconDanger-DO15Hi94.js";import"./browser-BEcu8ny4.js";import"./EmulatedBoldText-Cd0UPmPK.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

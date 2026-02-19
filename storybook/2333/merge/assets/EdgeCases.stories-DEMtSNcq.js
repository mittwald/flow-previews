import{j as r}from"./iframe-CaMmm6JB.js";import{R as l,a as p}from"./Radio-DjAapmDq.js";import{R as n}from"./RadioButton-b3FN8N7Q.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CMR0jj6v.js";import{T as u}from"./Text-BytpHB1v.js";import{C as c}from"./Content-D39bfGls.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-7fKv1TmI.js";import"./index-D879hO5r.js";import"./index-bUizOk6y.js";import"./ColumnLayout-BUBlGSDr.js";import"./useFieldComponent-l9GEjfOW.js";import"./utils-BWel_6vJ.js";import"./useMakeFocusable-CThcCwV5.js";import"./RadioGroup-DN-BoxQp.js";import"./FieldError-rN2a2i1l.js";import"./Text-DltKapPO.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DUaYRZYC.js";import"./useLabel-BlkmcG0L.js";import"./Label-GJfJgND5.js";import"./Hidden-_lt-y3bc.js";import"./SelectionIndicator-C8xVf-92.js";import"./useFormValidation-BBrrlMUS.js";import"./useFocus-CsmVawkN.js";import"./useFocusRing-D0nVGfyc.js";import"./useControlledState-DS3iWteE.js";import"./FocusScope-BSI7m-fZ.js";import"./context-COlkIlq2.js";import"./useFormReset-B22K348z.js";import"./usePress-Bq52eadg.js";import"./useFocusable-D5loONxI.js";import"./VisuallyHidden-CJ5e0jZZ.js";import"./IconWarning-CjIU5uAw.js";import"./remote-B2IWJRNM.js";import"./Label-7z5ZqOim.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DvVfJ2n5.js";import"./FieldError-gBRSHyIP.js";import"./AlertText-CvHTwf-C.js";import"./AlertIcon-CCMwGOFg.js";import"./browser-DBmSqQ-l.js";import"./EmulatedBoldText-Bldq9nM5.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

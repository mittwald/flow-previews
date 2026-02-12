import{j as r}from"./iframe-C_XCETJ4.js";import{R as l,a as p}from"./Radio-BJx_uGQU.js";import{R as n}from"./RadioButton-D_5xlmNQ.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-A2HEEGC_.js";import{T as u}from"./Text-l7AxHvJY.js";import{C as c}from"./Content-CJ88AoSP.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dc7MSmoT.js";import"./index-BDg420Zs.js";import"./index-BzhLFU3i.js";import"./ColumnLayout-DT0vB16y.js";import"./useFieldComponent-K9rhjMxn.js";import"./utils-Bso2FrGw.js";import"./useMakeFocusable-X7BVYo0o.js";import"./RadioGroup-D9jZi1Iu.js";import"./FieldError-5QFQIGqn.js";import"./Text-CpxVEUdG.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Bpra3FZF.js";import"./useLabel-DQxA1BA6.js";import"./Label-BzKkLHI6.js";import"./Hidden-D0LCwc-B.js";import"./SelectionIndicator-CpgeLwVt.js";import"./useFormValidation-CsbIfaDX.js";import"./useFocus-D-vzktAn.js";import"./useFocusRing-Dl1uWSge.js";import"./useControlledState-CeDypDyB.js";import"./FocusScope-f515rn4z.js";import"./context-CpOW4Kl4.js";import"./useFormReset-CmrFi5aC.js";import"./usePress-B-xR971w.js";import"./useFocusable-CMVXl80p.js";import"./VisuallyHidden-Bb8hL7UW.js";import"./IconWarning-D8ZYq2sU.js";import"./remote-BBIBCAlv.js";import"./Label-C05Lio9F.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BgkeYfOl.js";import"./FieldError-Cv_CJ9jj.js";import"./AlertText-B-9KJ9sd.js";import"./AlertIcon-Bo1DHsRX.js";import"./browser-BQl26QHV.js";import"./EmulatedBoldText-D4ZS6afz.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

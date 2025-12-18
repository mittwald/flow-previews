import{j as r}from"./iframe-BTx5vfX7.js";import{R as l,a as p}from"./Radio-C9JpCcVi.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-C6HrUHgT.js";import{T as u}from"./Text-DtYTBG7c.js";import{C as c}from"./Content-BWrV0yfQ.js";import{R as n}from"./RadioButton-DnypIqe1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BQbG36RI.js";import"./index-CD1bc2Uf.js";import"./index-Cy86CRop.js";import"./ColumnLayout-cZ2fN7M7.js";import"./useFieldComponent-a0kyTMto.js";import"./utils-Rd_MYUg3.js";import"./useMakeFocusable-BMACxuQn.js";import"./RadioGroup-DQQzGU0g.js";import"./FieldError-I1Bua9KH.js";import"./Text-LwG1QgpY.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-BpaxdIp-.js";import"./useLabel-CAHdnPVW.js";import"./Label-nt-Mf4T_.js";import"./Hidden-B6Npv2sL.js";import"./SelectionIndicator-BGe0ubEQ.js";import"./useFormValidation-CWpL65wq.js";import"./useFocus-DM7IXQDx.js";import"./useControlledState-DNSedTkS.js";import"./FocusScope-ConnSCr6.js";import"./useFocusRing-DjSlkPuN.js";import"./context-B8-2fWdM.js";import"./useFormReset-C2fqGBKA.js";import"./usePress-g9jBnoDE.js";import"./useFocusable-_zqulMQl.js";import"./VisuallyHidden-xosq-5v9.js";import"./IconChevronDown-Bn-1yhHQ.js";import"./remote-CDkUNGK4.js";import"./IconRadioOn-D5gxyiPM.js";import"./Label-D_U9lVoj.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BiBfXFe3.js";import"./FieldError-z-ClA5kd.js";import"./IconDanger-C580gt5j.js";import"./browser-D9-bvGMx.js";import"./EmulatedBoldText-B89XKop2.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-BN_dfUe_.js";import{R as p,b as l,a as g}from"./RadioButton-DEt0D6RC.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-C-iQlVkj.js";import{T as y}from"./Text-DzaqmzRj.js";import{C as T}from"./Content-BP-wxOwP.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BdWjLDJi.js";import"./mergeRefs-upl_BBo9.js";import"./index-C8Ff-wAx.js";import"./FieldError-DsWJyZ3N.js";import"./IconWarning-DNOLg4j3.js";import"./FieldError-CIdDbIOg.js";import"./utils-B0sx3Kyr.js";import"./Text-Bh7wF6OD.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-DsDWXuuR.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-B5a3yHm1.js";import"./Form-BI9DTP98.js";import"./useFocus-BPnQl8Vs.js";import"./useLabel-BVHoyGPi.js";import"./Label-DGLQk8oX.js";import"./Hidden-DymlCD5P.js";import"./useFormReset-DQe0b_9O.js";import"./usePress-D00Qk3ID.js";import"./useFocusRing-BbyZkAky.js";import"./useFocusable-CjxkNo9x.js";import"./FocusScope-DSvKVwGk.js";import"./context-dredv6-K.js";import"./VisuallyHidden-Cv7STolA.js";import"./useControlledState-B3OMKOuD.js";import"./Label-BSR54Ews.js";import"./useLocalizedStringFormatter-CxEOdw80.js";import"./browser-BV7EqxDV.js";import"./EmulatedBoldText-D3DsYnee.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="a" aria-label="Label">
      <Radio value="a">{dummyText.long} </Radio>
      <Radio value="b">{dummyText.long} </Radio>
      <Radio value="c">{dummyText.long}</Radio>
    </RadioGroup>
}`,...(s=(d=t.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};var u,c,x;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="0" aria-label="Label" l={[1, 1, 1, 1]}>
      {Array(6).fill("").map((value, index) => <RadioButton value={index.toString()} key={index}>
            <Text>{dummyText.medium}</Text>
            <Content>{dummyText.medium}</Content>
          </RadioButton>)}
    </RadioGroup>
}`,...(x=(c=i.parameters)==null?void 0:c.docs)==null?void 0:x.source}}};var R,f,b;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(b=(f=m.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const mr=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,mr as __namedExportsOrder,ir as default};

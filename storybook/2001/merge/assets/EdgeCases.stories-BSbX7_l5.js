import{j as r}from"./iframe-ct20Zc4_.js";import{R as p,b as l,a as g}from"./RadioButton-Dswq5rfu.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-DILmbtI3.js";import{T as y}from"./Text-DcjvjsPV.js";import{C as T}from"./Content-C3YpzuZQ.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CgsWNoxz.js";import"./mergeRefs-6DcqMVoC.js";import"./index-DEpD1rGL.js";import"./FieldError-3QHdAtoW.js";import"./IconWarning-CcsQkvTO.js";import"./FieldError-kSnIjzvs.js";import"./utils-DpMwq36_.js";import"./Text-BxKbsi5b.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-C4OhIUpL.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-BtgjqROO.js";import"./Form-BSds6g5P.js";import"./useFocus-BkH8qcCX.js";import"./useLabel-Cp6IFTTd.js";import"./Label-Acl7hQj6.js";import"./Hidden-B9i9z_Z9.js";import"./useFormReset-DrqvUx_9.js";import"./usePress-C5fNoyVy.js";import"./useFocusRing-D8miGa7N.js";import"./useFocusable-CQ8WqruE.js";import"./FocusScope-B8eJTcfl.js";import"./context-DnCGX3ZW.js";import"./VisuallyHidden-TqoC2igt.js";import"./useControlledState-CwKmYwnv.js";import"./Label-Dr2f8Urt.js";import"./useLocalizedStringFormatter-CzDXjL81.js";import"./browser-Cy4n9sSP.js";import"./EmulatedBoldText-CxSwZZv_.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-DhBjVFTT.js";import{R as p,b as l,a as g}from"./RadioButton-DmpuQZhn.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-A_nJEwvL.js";import{T as y}from"./Text-DF-6yo40.js";import{C as T}from"./Content-DA6nythj.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Ut4T4mCk.js";import"./mergeRefs-DgdJvSW3.js";import"./index-CE8kWNv6.js";import"./FieldError-B3yibmjV.js";import"./IconWarning-BnanZbEc.js";import"./FieldError-NbMb9-3J.js";import"./utils-BiTM62RC.js";import"./Text-BCOK263g.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-BuRWoCc8.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-Ng--ghAD.js";import"./Form-CStdbKj5.js";import"./useFocus-Boz126Wy.js";import"./useLabel-Cy7W7M25.js";import"./Label-9p36wJlw.js";import"./Hidden-CPEF8tx-.js";import"./useFormReset-CLUGxJas.js";import"./usePress-IeWuLCB9.js";import"./useFocusRing-CZOlFmxO.js";import"./useFocusable-t-PCv4_E.js";import"./FocusScope-Cxsex6N2.js";import"./context-BcZ3stI5.js";import"./VisuallyHidden-BaY3Aahk.js";import"./useControlledState-Cf0EFMq_.js";import"./Label-CYVPNsy_.js";import"./useLocalizedStringFormatter-Dqb82j34.js";import"./browser-C93HlYrv.js";import"./EmulatedBoldText-BWS0giPu.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

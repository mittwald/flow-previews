import{j as r}from"./iframe-BjkHoCV_.js";import{R as p,b as l,a as g}from"./RadioButton-DwNPqmiM.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-DI8zlB3f.js";import{T as y}from"./Text-eTJAYSJY.js";import{C as T}from"./Content-CHQWZmkp.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-C_mzLhgD.js";import"./mergeRefs-DrT8tsnG.js";import"./index-BhskFd1j.js";import"./FieldError-mxRvqHca.js";import"./IconWarning-CwiGKHoc.js";import"./FieldError-BxnpY5Jk.js";import"./utils-CGiEt-XO.js";import"./Text-C4ERGDAc.js";import"./filterDOMProps-CeZl_uWj.js";import"./ColumnLayout-CssdlHL2.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-D1ZUtqWw.js";import"./Form-PglXiK24.js";import"./useFocus-xSbgpmNE.js";import"./useLabel-1QSzRNK-.js";import"./Label-B_ZT4LJD.js";import"./Hidden-CDdp3qbI.js";import"./useFormReset-DzRnd0mU.js";import"./usePress-CEdNq8mA.js";import"./useFocusRing-Wt9DLJeW.js";import"./useFocusable-CXhBXWqP.js";import"./FocusScope-mH_5A_-I.js";import"./context-rlbqmEoV.js";import"./VisuallyHidden-DAjtA0IX.js";import"./useControlledState-DGwCCxzP.js";import"./Label-BYU6zcWR.js";import"./useLocalizedStringFormatter-dqhA2Nz0.js";import"./browser-D-wpRimX.js";import"./EmulatedBoldText-Bcu9u8Hb.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

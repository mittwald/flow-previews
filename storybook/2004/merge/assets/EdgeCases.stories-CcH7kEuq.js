import{j as r}from"./iframe-DOdCrrz9.js";import{R as p,b as l,a as g}from"./RadioButton-BiuecSa2.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-BjsPdyo3.js";import{T as y}from"./Text-BFGg7rBT.js";import{C as T}from"./Content-DgWd39t-.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BFFPDLjZ.js";import"./mergeRefs-VmgBpgq4.js";import"./index-CLjbgznf.js";import"./FieldError-ebeXoxd5.js";import"./IconWarning-B_Db9Y2d.js";import"./FieldError-Dz-HK9bS.js";import"./utils-BhoG2uU0.js";import"./Text-Cec-yt4l.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-ggSf8JjB.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-CDQ6iZUp.js";import"./Form-D1kKLxzM.js";import"./useFocus-D8b650dP.js";import"./useLabel-nPFfwg7P.js";import"./Label-CUfl9ZIc.js";import"./Hidden-Csx_ZN67.js";import"./useFormReset-BZL1wYkF.js";import"./usePress-Cgctm68w.js";import"./useFocusRing-DgTZQDGQ.js";import"./useFocusable-C6B3BW3Y.js";import"./FocusScope-BZjUyJi9.js";import"./context-B_SSW0HI.js";import"./VisuallyHidden-CbboIbzH.js";import"./useControlledState-DT9C-0RB.js";import"./Label-CdGOe_rR.js";import"./useLocalizedStringFormatter-D2q5K-i7.js";import"./browser-ChoqAG5f.js";import"./EmulatedBoldText-CTisuoOf.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

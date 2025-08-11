import{j as r}from"./iframe-CR8Ddg53.js";import{R as p,b as l,a as g}from"./RadioButton-DTVHZnn-.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-BB-t_Rct.js";import{T as y}from"./Text-BErvAADj.js";import{C as T}from"./Content-B6mP3Q4o.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BqN4v3Py.js";import"./mergeRefs-mV7XR32G.js";import"./index-Kj0ypInV.js";import"./FieldError-e25kDgdq.js";import"./IconWarning-B_4O4CPt.js";import"./FieldError-D80gKGFP.js";import"./utils-CPU25MAw.js";import"./Text-cGYhBKhC.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-krf-gjhA.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-dqd5vFTq.js";import"./Form-knrQXPF2.js";import"./useFocus-B62aW2Cd.js";import"./useLabel-Cs4Ke5Sw.js";import"./Label-BGtqz6Va.js";import"./Hidden-CcFqVLpr.js";import"./useFormReset-CWiQQPlL.js";import"./usePress-_KFTzH0P.js";import"./useFocusRing-RTREyv-v.js";import"./useFocusable-alsSoJVf.js";import"./FocusScope-BbJ4WC9_.js";import"./context-CK3Xzdoe.js";import"./VisuallyHidden-D_HRp7SG.js";import"./useControlledState-C1vKNjS4.js";import"./Label-ZXYVd8nk.js";import"./useLocalizedStringFormatter-CsImQUVf.js";import"./browser-mRWe3g-L.js";import"./EmulatedBoldText-DQgoED4q.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

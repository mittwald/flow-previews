import{j as r}from"./iframe-Nqcw2rDw.js";import{R as p,b as l,a as g}from"./RadioButton-Cpg35fSO.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-C6SKXjk6.js";import{T as y}from"./Text-xc4JCB-X.js";import{C as T}from"./Content-BvFEyHhR.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-ChoPgDKo.js";import"./mergeRefs-DwiHgjVG.js";import"./index-Cq0EiWeo.js";import"./FieldError-CQWwaXuw.js";import"./IconWarning-B5Ig4VhK.js";import"./FieldError-BpNobjrx.js";import"./utils-Bp1w5lkv.js";import"./Text-CIgQjC5i.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-WZKCLUaI.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-3LgQlNy6.js";import"./Form-DdlSQ4T5.js";import"./useFocus-C0d_BuOG.js";import"./useLabel-DV1Mt0Tl.js";import"./Label-CtCba6z0.js";import"./Hidden-CAJLdDr-.js";import"./useFormReset-CuLrpRbL.js";import"./usePress-CLwwvcX7.js";import"./useFocusRing-CuYhL92s.js";import"./useFocusable-C3WyBOJs.js";import"./FocusScope-BuhXHJsl.js";import"./context-Btv9vDKp.js";import"./VisuallyHidden-CR5lrquH.js";import"./useControlledState-Cj9ITNGF.js";import"./Label-fC6EmrAI.js";import"./useLocalizedStringFormatter-mfo6vHdn.js";import"./browser-BgnnD3cg.js";import"./EmulatedBoldText-Cwk1IhrY.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-Bcy3WBLD.js";import{R as p,b as l,a as g}from"./RadioButton-BB-mcnyE.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-CGi5SrOu.js";import{T as y}from"./Text-BKZvU2Ep.js";import{C as T}from"./Content-ClusjZsi.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BHhLw24a.js";import"./mergeRefs--VvJilNx.js";import"./index-DVYl39IU.js";import"./FieldError-ZqRA8FAO.js";import"./IconWarning-Vd06CvkA.js";import"./FieldError-l-G1_SjF.js";import"./utils-DWRY5rRS.js";import"./Text-B9FmTM8Z.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-C9_Jvgg5.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-B7j5orBs.js";import"./Form-PJgehRtv.js";import"./useFocus-Dgw0vV32.js";import"./useLabel-DJG08svr.js";import"./Label-mUSxsxBX.js";import"./Hidden-Dv6inJmm.js";import"./useFormReset-COOu3OXz.js";import"./usePress-CA9PIUpq.js";import"./useFocusRing-C3pUQ5cb.js";import"./useFocusable-C_MY2EQ_.js";import"./FocusScope-DTvTpHKs.js";import"./context-COJrQ54s.js";import"./VisuallyHidden-B7epvPUM.js";import"./useControlledState-gINmRHbE.js";import"./Label-BjUMecpn.js";import"./useLocalizedStringFormatter-DL2ol0cr.js";import"./browser-CGdqZmLM.js";import"./EmulatedBoldText-LLb9cW4a.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-BTcUxdaq.js";import{R as p,b as l,a as g}from"./RadioButton-BuD2SVjc.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-BcWOb18M.js";import{T as y}from"./Text-Cyud7aU0.js";import{C as T}from"./Content-BpG4JaHp.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BPMxDVmu.js";import"./mergeRefs-Cmhxncmf.js";import"./index-BEbRwPxl.js";import"./FieldError-BsnxNcFL.js";import"./IconWarning-DQhgAuti.js";import"./FieldError-CZwoNVbm.js";import"./utils-QQf7G53U.js";import"./Text-DQ5f9mUM.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-CxVGXlCX.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-BGNn4qDS.js";import"./Form-BWd8hqS-.js";import"./useFocus-BGyfOFlp.js";import"./useLabel-COrOgVB9.js";import"./Label-N2lNAPH4.js";import"./Hidden-C0wGKKFL.js";import"./useFormReset-WxrNhhec.js";import"./usePress-CFIgJOpO.js";import"./useFocusRing-C1MTD0-W.js";import"./useFocusable-BavwL0Gh.js";import"./FocusScope-_yP39RaH.js";import"./context-DPBkKLSs.js";import"./VisuallyHidden-17OXXq4D.js";import"./useControlledState-UFVvdmji.js";import"./Label-Bgrifxv0.js";import"./useLocalizedStringFormatter-CloaMtl1.js";import"./browser-B8OJoPhG.js";import"./EmulatedBoldText-CDVaFR1M.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

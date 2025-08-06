import{j as r}from"./iframe-CPpiztA9.js";import{R as p,b as l,a as g}from"./RadioButton-vzsoh_zO.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-Czh-L8_n.js";import{T as y}from"./Text-B9GDlRIl.js";import{C as T}from"./Content-DfYBXOgL.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CgD2VZvZ.js";import"./mergeRefs-CY9oKSjb.js";import"./index-CXr5LMa8.js";import"./FieldError-Ci8tQ9GY.js";import"./IconWarning-DGFg2xah.js";import"./FieldError-DNVX5F1U.js";import"./utils-DXg4ziAt.js";import"./Text-D73bWKdR.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-CR1Nv0-P.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-CM8ETjNw.js";import"./Form-BF7n3RGH.js";import"./useFocus-f0syXR1u.js";import"./useLabel-CbuGYTDm.js";import"./Label-DrzbYkyA.js";import"./Hidden-bVSOJLMB.js";import"./useFormReset-MeUe0mbs.js";import"./usePress-Bn1QFLmx.js";import"./useFocusRing-ryN7bem9.js";import"./useFocusable-BdzC7gBh.js";import"./FocusScope-mK0EKnGk.js";import"./context-Dtd4A8DJ.js";import"./VisuallyHidden-DQWk5n-D.js";import"./useControlledState-CvPFcFpa.js";import"./Label-BGSD1rhi.js";import"./useLocalizedStringFormatter-CcOUbIQp.js";import"./browser-CCSZxPxO.js";import"./EmulatedBoldText-49ZPQjyJ.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

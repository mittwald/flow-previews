import{j as r}from"./iframe-D9T-SQ_w.js";import{R as p,b as l,a as g}from"./RadioButton-DhcMv1jA.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-Cnvi-oDd.js";import{T as y}from"./Text-DV6mBCf8.js";import{C as T}from"./Content-BOAdbzg8.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DOfdVnxG.js";import"./mergeRefs-Dpt4nLOm.js";import"./index-MwhQmWus.js";import"./FieldError-Co5krp6V.js";import"./IconWarning-D9gb5D__.js";import"./FieldError-CZoysCXy.js";import"./utils-DnMOHCo2.js";import"./Text-ClgQ9ANO.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-DKcAJCp6.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-ChWpqbBp.js";import"./Form-CWxNV6uB.js";import"./useFocus-BzfdG_e6.js";import"./useLabel-DgmVUIzX.js";import"./Label-BiAaxhJ7.js";import"./Hidden-SV0U3IVR.js";import"./useFormReset-BokEu4v1.js";import"./usePress-DglIwZgS.js";import"./useFocusRing-ZVwQEQ-X.js";import"./useFocusable-BvY9usgM.js";import"./FocusScope-Bai1ujT7.js";import"./context-1X1M6th-.js";import"./VisuallyHidden-DQCLJ5yw.js";import"./useControlledState-iBkipCXW.js";import"./Label-BSTVZqJp.js";import"./useLocalizedStringFormatter-DPVccqQm.js";import"./browser-BxWBoSIU.js";import"./EmulatedBoldText-DAr7Y6gD.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

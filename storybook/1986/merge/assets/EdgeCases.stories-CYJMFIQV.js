import{j as r}from"./iframe-d9P-aV0W.js";import{R as p,b as l,a as g}from"./RadioButton-B2y1eyRz.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-CwUFeIe3.js";import{T as y}from"./Text-Be7zee3C.js";import{C as T}from"./Content-B0K4nHqM.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-COJEgxrC.js";import"./mergeRefs-COfeY-J9.js";import"./index-DNfeWXBl.js";import"./FieldError-Bx3miAuV.js";import"./IconWarning-BjZlRYlZ.js";import"./FieldError-DZyu-lh_.js";import"./utils-D3Cd9kCb.js";import"./Text-D1KGOeak.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-DBC7w0_b.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-DkZC-B_6.js";import"./Form-D0Rr0MG7.js";import"./useFocus-Db-Axcue.js";import"./useLabel-DJC774kJ.js";import"./Label-Dkt1SH7U.js";import"./Hidden-ATL9oYS4.js";import"./useFormReset-BRhy_R9s.js";import"./usePress-CdPHlHdZ.js";import"./useFocusRing-CufwTJs4.js";import"./useFocusable-CU14CpV2.js";import"./FocusScope-Bqouiiv6.js";import"./context-3d2O_dpD.js";import"./VisuallyHidden-D6ugaIjO.js";import"./useControlledState-CiRgye4r.js";import"./Label-Bkj4txtc.js";import"./useLocalizedStringFormatter-BD0NOEPb.js";import"./browser-7zjo9sS-.js";import"./EmulatedBoldText-DaFZXsc7.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

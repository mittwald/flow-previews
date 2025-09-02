import{j as r}from"./iframe-D8FrJ-CZ.js";import{R as p,b as l,a as g}from"./RadioButton-bBg-OsUn.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-D6ptxkxm.js";import{T as y}from"./Text-CijQgHlf.js";import{C as T}from"./Content-DHcl4KEo.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-EPA_0_Bo.js";import"./mergeRefs-utDOSA_8.js";import"./index-DO8-cvBB.js";import"./FieldError-6eoAimLP.js";import"./IconWarning-C11FXGxU.js";import"./FieldError-DUyd9_2U.js";import"./utils-DLru3qrQ.js";import"./Text-CjVOmJR3.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-DtHqW70L.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-BIC3yjIO.js";import"./Form-DsyloFzD.js";import"./useFocus-_KFCgimG.js";import"./useLabel-DAKRqT8J.js";import"./Label-CJkrjybq.js";import"./Hidden-DLVb5zGs.js";import"./useFormReset-BMZp-ADn.js";import"./usePress-mcSHbC1W.js";import"./useFocusRing-Dt7u0yDa.js";import"./useFocusable-BXg3nN8-.js";import"./FocusScope-BCf9GP_l.js";import"./context-Dz2Qbbtu.js";import"./VisuallyHidden-HCxlUedB.js";import"./useControlledState-Bhtz6D6k.js";import"./Label-Cw_HB0L8.js";import"./useLocalizedStringFormatter-BJgvBQQo.js";import"./browser-Df0WU9AE.js";import"./EmulatedBoldText-CzquwV9M.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

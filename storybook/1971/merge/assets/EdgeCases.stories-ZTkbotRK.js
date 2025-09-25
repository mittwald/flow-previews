import{j as r}from"./iframe-DaY0X55-.js";import{R as p,b as l,a as g}from"./RadioButton-B8cSNSWA.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-CIqdOPlE.js";import{T as y}from"./Text-ClBV1PzQ.js";import{C as T}from"./Content-B1xi1kX_.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BZ-4M9Xw.js";import"./mergeRefs-BGErXhtl.js";import"./index-BnzNbbtM.js";import"./FieldError-B-BsJ3J5.js";import"./IconWarning-DpKTVHID.js";import"./FieldError-B2eDKzT7.js";import"./utils-BNq2bbe-.js";import"./Text-CmOgQYod.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-BzUvuGVA.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-DMRUgWWS.js";import"./Form-C_YqGgE4.js";import"./useFocus-Bx9r-om_.js";import"./useLabel-5zgngJXY.js";import"./Label-Y108Eoku.js";import"./Hidden-BWevpR0h.js";import"./useFormReset-Cfy0Tx0G.js";import"./usePress-C0_kEahO.js";import"./useFocusRing-vJ8fdZaU.js";import"./useFocusable-DsZq_5Zr.js";import"./FocusScope-BkSA93dQ.js";import"./context-C83_ciAo.js";import"./VisuallyHidden-BYSFBZbq.js";import"./useControlledState-ChlOye-e.js";import"./Label-DBJBtDhT.js";import"./useLocalizedStringFormatter-D4QinFaA.js";import"./browser-DCXXMZF1.js";import"./EmulatedBoldText-NGGT27hA.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

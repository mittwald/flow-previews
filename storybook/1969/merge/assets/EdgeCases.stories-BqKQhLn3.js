import{j as r}from"./iframe-DxsUlawc.js";import{R as p,b as l,a as g}from"./RadioButton-CXFvVV7t.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-CBPoaysj.js";import{T as y}from"./Text-BghZAovJ.js";import{C as T}from"./Content-tR3aJZEn.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-xQDv9zm6.js";import"./mergeRefs-CIUzaBPj.js";import"./index-CXZ1ulCu.js";import"./FieldError-B5iG2Dx8.js";import"./IconWarning-CxX_lufW.js";import"./FieldError-BogjW8MC.js";import"./utils-anS-nfaS.js";import"./Text-w8QkFxXB.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-m95azp9e.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-BUbsfURX.js";import"./Form-DGyQGQrN.js";import"./useFocus-19elgRbR.js";import"./useLabel-CBxP0DvO.js";import"./Label-DR2p3ljL.js";import"./Hidden-DmCEYrWx.js";import"./useFormReset-C5585XYI.js";import"./usePress-CuZIkaGu.js";import"./useFocusRing-NqyRw62N.js";import"./useFocusable-Dsjl8uYb.js";import"./FocusScope-_FVys5dN.js";import"./context-Pme8S34O.js";import"./VisuallyHidden-DjzEMrNo.js";import"./useControlledState-BiaHUtte.js";import"./Label-B7Tx4Pgn.js";import"./useLocalizedStringFormatter-B7ecu7MW.js";import"./browser-GG2yXHGk.js";import"./EmulatedBoldText-HMke4BSZ.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

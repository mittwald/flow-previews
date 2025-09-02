import{j as r}from"./iframe-CPSqmfOl.js";import{R as p,b as l,a as g}from"./RadioButton-Cx6XORTw.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-EeMnxA31.js";import{T as y}from"./Text-CpNtEmk9.js";import{C as T}from"./Content-B-goNAV0.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BqWlcEyR.js";import"./mergeRefs-CG7T9kGm.js";import"./index-DVxNTjjY.js";import"./FieldError-Cgj32YS9.js";import"./IconWarning-Dz0_MR_L.js";import"./FieldError-CM7w-aUX.js";import"./utils-Bp4pxj2u.js";import"./Text-BvvdQ7EK.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-S5KpDKEY.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-BsXbxrDS.js";import"./Form-1yVZIEH7.js";import"./useFocus-BS8EzIP7.js";import"./useLabel-BkGlbpXp.js";import"./Label-CnzzRGNK.js";import"./Hidden-CX2yRk0H.js";import"./useFormReset-BUGG2d-X.js";import"./usePress-CIALPEwc.js";import"./useFocusRing-BjvWMKoG.js";import"./useFocusable-D7nBaAdw.js";import"./FocusScope-CjahwwK6.js";import"./context-DzKnIoVi.js";import"./VisuallyHidden-BiIsVZWt.js";import"./useControlledState-BlXvRNFY.js";import"./Label-Cm39Oetk.js";import"./useLocalizedStringFormatter-CCqX6hi3.js";import"./browser-CHMWQ9uX.js";import"./EmulatedBoldText-CFRYqLao.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

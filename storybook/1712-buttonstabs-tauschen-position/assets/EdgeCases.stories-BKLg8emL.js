import{j as r}from"./iframe-DLPMA2Jy.js";import{R as p,b as l,a as g}from"./RadioButton-BpDqgKH_.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-DPzbWvcJ.js";import{T as y}from"./Text-BHcv_RSt.js";import{C as T}from"./Content-COR8VKdr.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Cw3WmaAV.js";import"./mergeRefs-aO6HcVoY.js";import"./index-CivGAYnp.js";import"./FieldError-C4PtmRqe.js";import"./IconWarning-BZNHqQOv.js";import"./FieldError-Cgq9toxC.js";import"./utils-b1QyYEgl.js";import"./Text-DL4PvoSo.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-B_UrqkwO.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-CzSJNqUD.js";import"./Form-DfIg0xpy.js";import"./useFocus-rX-PXuLl.js";import"./useLabel-D3WVZ9yP.js";import"./Label-tqYGMXcy.js";import"./Hidden-Ba5oTT5z.js";import"./useFormReset-L6ko3eQg.js";import"./usePress-DwtsQH2c.js";import"./useFocusRing-DFqScG39.js";import"./useFocusable-CToQXnw-.js";import"./FocusScope-DA4TfNEK.js";import"./context-BFBvnlV1.js";import"./VisuallyHidden-C4Kk4Esh.js";import"./useControlledState-Btp8qCFq.js";import"./Label-njveXq1g.js";import"./useLocalizedStringFormatter-BX1Rg6Wn.js";import"./browser-Bc43_gVJ.js";import"./EmulatedBoldText-BMpcVoTB.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

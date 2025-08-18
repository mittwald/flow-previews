import{j as r}from"./iframe-giJ3PN41.js";import{R as p,b as l,a as g}from"./RadioButton-BthENqcV.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-DSMqSH84.js";import{T as y}from"./Text-unBq3m4E.js";import{C as T}from"./Content-GhLztKY1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BGOqO5Az.js";import"./mergeRefs-nfw7e1Ht.js";import"./index-HnR-1Gnf.js";import"./FieldError-BA6Xibs7.js";import"./IconWarning-Dj_wwKGm.js";import"./FieldError-nVLUoiBd.js";import"./utils-CXDqZ2sl.js";import"./Text-CPIeRDsX.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-BhKsZG2Y.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-CrFqpTLy.js";import"./Form-DPXxe_7V.js";import"./useFocus-CuIPz-Kl.js";import"./useLabel-DTs_WTOS.js";import"./Label-BWQQ3Esr.js";import"./Hidden-DRJxhyU2.js";import"./useFormReset-ChCBJkpa.js";import"./usePress-D1wL7cKS.js";import"./useFocusRing-DUik2Nk4.js";import"./useFocusable-Bp_JhFQV.js";import"./FocusScope-D6b4m46d.js";import"./context-B5VaUXEx.js";import"./VisuallyHidden-DL0JmpvH.js";import"./useControlledState-BdipClPW.js";import"./Label-DSQuszpE.js";import"./useLocalizedStringFormatter-B7e_o0Dw.js";import"./browser-DkEs9M37.js";import"./EmulatedBoldText-D-WMJ6En.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

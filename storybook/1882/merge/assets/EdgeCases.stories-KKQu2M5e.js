import{j as r}from"./iframe-sBvqvo7_.js";import{R as p,b as l,a as g}from"./RadioButton-BZ139H-z.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-C1RtT8wH.js";import{T as y}from"./Text-C6wVel0M.js";import{C as T}from"./Content-DvNFyQMV.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-TllVeCFj.js";import"./mergeRefs-5pXsIHJc.js";import"./index-7PGhSu6n.js";import"./FieldError-BOIuciEr.js";import"./IconWarning-BMngykPL.js";import"./FieldError-D_EBRzZI.js";import"./utils-B2LriU5l.js";import"./Text-CAc83Hwb.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-CwhiAala.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-NBMmcsvX.js";import"./Form-DRweiQ4m.js";import"./useFocus-CVs-BOzj.js";import"./useLabel-xAWuGzS8.js";import"./Label-CX5Sx3US.js";import"./Hidden-DkwdQ2ow.js";import"./useFormReset-CzZ7gXc_.js";import"./usePress-seZ0T8mb.js";import"./useFocusRing-B1VapAs-.js";import"./useFocusable-DA4OWrdg.js";import"./FocusScope-Emgqt3PD.js";import"./context-C3R-osbZ.js";import"./VisuallyHidden-DUx1qTAb.js";import"./useControlledState-B_tC48lN.js";import"./Label-DV1oDC-Q.js";import"./useLocalizedStringFormatter-ClADd5Z4.js";import"./browser-DLpa1UK_.js";import"./EmulatedBoldText-MyVSeX0t.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

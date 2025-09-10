import{j as r}from"./iframe-CRsb57af.js";import{R as p,b as l,a as g}from"./RadioButton-BM5BPJy6.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-D2bHVJYR.js";import{T as y}from"./Text-BeV7pvCv.js";import{C as T}from"./Content-DqGj4dif.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BR4-1agz.js";import"./mergeRefs-DplnSgkI.js";import"./index-CuZmym5e.js";import"./FieldError-Bqe2SFUH.js";import"./IconWarning-CcDYRP7s.js";import"./FieldError-B33IY45p.js";import"./utils-CwotMdLX.js";import"./Text-Dc62rOGI.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-DHB6t_gG.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-Czl-11DG.js";import"./Form-DcCFXF0q.js";import"./useFocus-DbNAjYIm.js";import"./useLabel-CtSNSJe6.js";import"./Label-ePem4EPa.js";import"./Hidden-CvrWtM-J.js";import"./useFormReset-Dz46-Gvc.js";import"./usePress-DBBuz-CW.js";import"./useFocusRing-UHNYZFwC.js";import"./useFocusable-YH2tkZSf.js";import"./FocusScope-B2MzAavW.js";import"./context-DoWLFUeS.js";import"./VisuallyHidden-zV1rhxGD.js";import"./useControlledState-DgD7b91N.js";import"./Label-sr3fNKeT.js";import"./useLocalizedStringFormatter-BRTflqfT.js";import"./browser-KjD5DeSR.js";import"./EmulatedBoldText-LP_9OJ0Q.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

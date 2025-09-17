import{j as r}from"./iframe-BAGTntfB.js";import{R as p,b as l,a as g}from"./RadioButton-C20wKcOv.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-Be3-oB5n.js";import{T as y}from"./Text-oSCAFhn5.js";import{C as T}from"./Content-D8d9t2gQ.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BVEq68NN.js";import"./mergeRefs-Ct4YEWrU.js";import"./index-TExY8AE4.js";import"./FieldError-CzxDQYV0.js";import"./IconWarning-SECJkQke.js";import"./FieldError-DwSlV6wI.js";import"./utils-DSdQ5U5C.js";import"./Text-CZggwRKM.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-Vc0GS06o.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-DAqXzgNp.js";import"./Form-BImra2vo.js";import"./useFocus-kqlw9bYS.js";import"./useLabel-jLc0StSH.js";import"./Label-CWJf374V.js";import"./Hidden-BFcGcOTS.js";import"./useFormReset-DMVQ-F_N.js";import"./usePress-BeTrTVD4.js";import"./useFocusRing-uRy9P7F2.js";import"./useFocusable-CvI8LjKe.js";import"./FocusScope-Dx9vsLFf.js";import"./context-C8vSVPtT.js";import"./VisuallyHidden-CCDJ4X70.js";import"./useControlledState-hqI-vqoJ.js";import"./Label-f9Yl8NxA.js";import"./useLocalizedStringFormatter-DdilTbMd.js";import"./browser-D8tJ8M3I.js";import"./EmulatedBoldText-hfJfJt2X.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

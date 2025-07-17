import{j as r}from"./iframe-DHE-6oks.js";import{R as p,b as l,a as g}from"./RadioButton-DMbhiVRb.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-D3GGq805.js";import{T as y}from"./Text-DvqkAO4K.js";import{C as T}from"./Content-D_Ddyzdn.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CehOxfFR.js";import"./mergeRefs-CXJw6JB3.js";import"./index-DuoRw6XS.js";import"./FieldError-cJslzypo.js";import"./IconWarning-Cic1MV-m.js";import"./FieldError-B9K2-GIk.js";import"./utils-x8BQYX4-.js";import"./Text-NjMLt3Ri.js";import"./filterDOMProps-CeZl_uWj.js";import"./ColumnLayout-BYg4fSgI.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-Bf4GG1cv.js";import"./Form-B4xkNDou.js";import"./useFocus-DYGSM8hG.js";import"./useLabel-DfuADmFb.js";import"./Label-CRHcOnwp.js";import"./Hidden-wM-8btK_.js";import"./useFormReset-BToKGHXS.js";import"./usePress-DKLIgAwR.js";import"./useFocusRing-OVXrKScL.js";import"./useFocusable-BqyWOhG-.js";import"./FocusScope-DduXebcv.js";import"./context-DFltFWpJ.js";import"./VisuallyHidden-JQCaE509.js";import"./useControlledState-DtNNEi2b.js";import"./Label-CsrQ8fuF.js";import"./useLocalizedStringFormatter-DWrFqDaN.js";import"./browser-DInQ8S6B.js";import"./EmulatedBoldText-h05YTKz1.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

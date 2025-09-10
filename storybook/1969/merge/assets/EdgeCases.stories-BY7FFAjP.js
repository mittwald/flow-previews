import{j as r}from"./iframe-B8noCUnE.js";import{R as p,b as l,a as g}from"./RadioButton-DYK1TjQm.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-D6vtl5v3.js";import{T as y}from"./Text-Da5wEoPX.js";import{C as T}from"./Content-AhHRiCex.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B9__2qg6.js";import"./mergeRefs-BTOy5cDw.js";import"./index-D9cNYuBB.js";import"./FieldError-wApA5Tvl.js";import"./IconWarning-CGV_Yvrm.js";import"./FieldError-DD6GhKc_.js";import"./utils-DycHSEAg.js";import"./Text-C0NfSVbg.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-oIDCbiez.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-BhuJ_dbl.js";import"./Form-BoGb9d1y.js";import"./useFocus-DSdjnAxu.js";import"./useLabel-CluaPz9W.js";import"./Label-DKLhlgli.js";import"./Hidden-CMD8PFZZ.js";import"./useFormReset-BTHbcpmM.js";import"./usePress-CGDWDrJK.js";import"./useFocusRing-BLe8ZvF0.js";import"./useFocusable-CKRftzjl.js";import"./FocusScope-b3Inwx6M.js";import"./context-Co6CbP9u.js";import"./VisuallyHidden-Dp1jIams.js";import"./useControlledState-Dup9xG7O.js";import"./Label-B1NlPlCA.js";import"./useLocalizedStringFormatter-D4YUkL9v.js";import"./browser-91muAEwH.js";import"./EmulatedBoldText-DHCsJE01.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

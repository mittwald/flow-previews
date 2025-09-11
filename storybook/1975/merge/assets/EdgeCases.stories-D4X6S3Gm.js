import{j as r}from"./iframe-CyjdJwA_.js";import{R as p,b as l,a as g}from"./RadioButton-CR4IhiS7.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-B_XrI5AF.js";import{T as y}from"./Text-usW35pyR.js";import{C as T}from"./Content-CO3vx8is.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Blii8gH5.js";import"./mergeRefs-C5H4AiTO.js";import"./index-Do1c4p-v.js";import"./FieldError-CxFSfXCR.js";import"./IconWarning-BNd_xcWu.js";import"./FieldError-FJXabK8a.js";import"./utils-BrA2SjLY.js";import"./Text-D5hkVXTt.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-C-YKd0P9.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-DRtAKKrM.js";import"./Form-CbzZ-2v4.js";import"./useFocus-kh_9V4VQ.js";import"./useLabel-CugdBF8m.js";import"./Label-CzrgQa8v.js";import"./Hidden-CYpTJoxS.js";import"./useFormReset-DhmyIfWL.js";import"./usePress-DeuQBFn_.js";import"./useFocusRing-CIRJex-W.js";import"./useFocusable-Bd5Kcxc9.js";import"./FocusScope-BgpQQFhh.js";import"./context-U2uVXE2j.js";import"./VisuallyHidden-DG_rebhq.js";import"./useControlledState-BMmGZgaN.js";import"./Label-C9WW8BSu.js";import"./useLocalizedStringFormatter-Dqj-tDTI.js";import"./browser-COCGQLuR.js";import"./EmulatedBoldText-Cm98uRnm.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

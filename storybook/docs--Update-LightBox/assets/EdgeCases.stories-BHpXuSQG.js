import{j as r}from"./iframe-DR0piQh8.js";import{R as p,b as l,a as g}from"./RadioButton-BXx81mMz.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-Bcvs3G-P.js";import{T as y}from"./Text-6uPYoec8.js";import{C as T}from"./Content-BnHjszQX.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B6cRF0tH.js";import"./mergeRefs-ZMps22uY.js";import"./index-t1lRf4w9.js";import"./FieldError-BkSA8Wen.js";import"./IconWarning-BgT_B94B.js";import"./FieldError-DwuKV3Gh.js";import"./utils-B_3T_k5x.js";import"./Text-Me8NF-Lu.js";import"./filterDOMProps-CeZl_uWj.js";import"./ColumnLayout-DHw6HVWy.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-Bo7Q_YyP.js";import"./Form-B6wqL0ga.js";import"./useFocus-Drlqt-a_.js";import"./useLabel-dFBcJ0PQ.js";import"./Label-DF_i3q4X.js";import"./Hidden-Ccv39zY0.js";import"./useFormReset-DGc_F2ms.js";import"./usePress-B4R9EPAI.js";import"./useFocusRing-DNATWZb5.js";import"./useFocusable-CKOeQoF-.js";import"./FocusScope-QqKO2Hp7.js";import"./context-BuOVuQqB.js";import"./VisuallyHidden-XA-B9eQQ.js";import"./useControlledState-DHSSOs10.js";import"./Label-BflZTkh8.js";import"./useLocalizedStringFormatter-M2t-zX-G.js";import"./browser-BcxJfz-7.js";import"./EmulatedBoldText-bwsNBgve.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

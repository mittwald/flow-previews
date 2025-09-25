import{j as r}from"./iframe-DSMxFmCo.js";import{R as l,b as p,a as g}from"./RadioButton-CcXreVcf.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-D6MU4FSf.js";import{T as y}from"./Text-D_0LfN4x.js";import{C as T}from"./Content-B4So6lz0.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DVyBiVg_.js";import"./mergeRefs-R9qg0vBI.js";import"./index-GrlXgZoZ.js";import"./FieldError-CcqfZkr-.js";import"./IconWarning-BVk6tlGE.js";import"./FieldError-BW2b_CY4.js";import"./utils-V6gMnCgM.js";import"./Text-CUE1Abh-.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-CTzIYbR0.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-BfcHT9i_.js";import"./Form-C9nVsKAF.js";import"./useLabel-CGRenFpR.js";import"./Label-BX8mTcFT.js";import"./Hidden-D2GOYXns.js";import"./useFormReset-BfhIxfM0.js";import"./usePress-CpWBfHNM.js";import"./useFocus-rqOLNBQE.js";import"./useFocusRing-B0fHsvyn.js";import"./useFocusable-CWTiV4pp.js";import"./useFormValidation-64eNngsb.js";import"./FocusScope-DaPMN8_C.js";import"./context-64LigRkb.js";import"./VisuallyHidden-D9pE8D_t.js";import"./useControlledState-Bd9qDCZc.js";import"./Label-BPw_TKwN.js";import"./useLocalizedStringFormatter-Dk8jStlZ.js";import"./browser-R7FwPwL5.js";import"./EmulatedBoldText-DCelI_Fa.js";const pr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(l,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(b=(f=m.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const lr=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,lr as __namedExportsOrder,pr as default};

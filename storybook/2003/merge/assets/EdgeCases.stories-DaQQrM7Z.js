import{j as r}from"./iframe-BJWngGl7.js";import{R as p,b as l,a as g}from"./RadioButton-Dj2gImjo.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-CV7Vn_cq.js";import{T as y}from"./Text-D-lw11hw.js";import{C as T}from"./Content-CrWm7FV2.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DxSnxty7.js";import"./mergeRefs-CeYupt5U.js";import"./index-CMnnMEF7.js";import"./FieldError-BQmnq4AI.js";import"./IconWarning-CLxGQCa2.js";import"./FieldError-RjUORd-P.js";import"./utils-BjLoxrER.js";import"./Text-zfbbvU9b.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-lKmAFXs6.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-xkQnK-IP.js";import"./Form-DRROzcFd.js";import"./useFocus-B52D3fzv.js";import"./useLabel-Lh8Q6d1O.js";import"./Label-jDh2Rcdd.js";import"./Hidden-cZZZgSgN.js";import"./useFormReset-BCaIB7JH.js";import"./usePress-Bx1Ga4ml.js";import"./useFocusRing-B_Jq-YSB.js";import"./useFocusable-jxsYQPZM.js";import"./FocusScope-DwCuMKHy.js";import"./context-ZX7huqtR.js";import"./VisuallyHidden-5aVnsY39.js";import"./useControlledState-DIKMvFKO.js";import"./Label-DuDbuPqK.js";import"./useLocalizedStringFormatter-DP6nHzmP.js";import"./browser-qhbVwDYR.js";import"./EmulatedBoldText-BDv3rega.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

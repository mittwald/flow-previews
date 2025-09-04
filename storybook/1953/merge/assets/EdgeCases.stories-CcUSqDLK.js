import{j as r}from"./iframe-Coh3lrZj.js";import{R as p,b as l,a as g}from"./RadioButton-DogM_uBf.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-C8i6S3rU.js";import{T as y}from"./Text-CXTmOKkL.js";import{C as T}from"./Content-CtAUq7NA.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CKV7yByX.js";import"./mergeRefs-DvQtY6ho.js";import"./index-CzajoHd7.js";import"./FieldError-BUIbxk7v.js";import"./IconWarning-B1v1dgwn.js";import"./FieldError-CZajLekn.js";import"./utils-CN3w8kPq.js";import"./Text-C-iBrm51.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-CCp9bR-F.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-8lDyUR9v.js";import"./Form-C7dJ7ChK.js";import"./useFocus-DOmsUoiU.js";import"./useLabel-BKRPYz_q.js";import"./Label-YsAq_uoV.js";import"./Hidden-DOaFp58p.js";import"./useFormReset-0zxdLi8h.js";import"./usePress-BU16hmOe.js";import"./useFocusRing-Bz5xuAjx.js";import"./useFocusable-D2foM-gB.js";import"./FocusScope-Cb054v9_.js";import"./context-BpLwYJWu.js";import"./VisuallyHidden-BFztPoj4.js";import"./useControlledState-C1ksr8rK.js";import"./Label-K_XjE_tx.js";import"./useLocalizedStringFormatter-CUiOVI_H.js";import"./browser-8tAA8o9s.js";import"./EmulatedBoldText-CrQvx5NB.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

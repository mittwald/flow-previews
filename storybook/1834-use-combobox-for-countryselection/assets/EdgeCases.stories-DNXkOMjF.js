import{j as r}from"./iframe-DL1Xk_TW.js";import{R as p,b as l,a as g}from"./RadioButton-BAhHMlqZ.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-CAM1QMLW.js";import{T as y}from"./Text-BarKc5iO.js";import{C as T}from"./Content-_R9hZMuc.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CiZc51HM.js";import"./mergeRefs-BSp0TNwj.js";import"./index-DqZKnEqd.js";import"./FieldError-Bwu7YAhf.js";import"./IconWarning-CDWDVN9t.js";import"./FieldError-BUlchV0X.js";import"./utils-CQ_zdhKT.js";import"./Text-hY-xwtRO.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-qWe5EGMY.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-roz8xDRH.js";import"./Form-DgOn25JB.js";import"./useFocus-XNeQty2s.js";import"./useLabel-W7XlL7TD.js";import"./Label-BAbeU0V_.js";import"./Hidden-DR9x0YX2.js";import"./useFormReset-BVtOSdS9.js";import"./usePress-DN8Ip39y.js";import"./useFocusRing-Ch_JF-Gz.js";import"./useFocusable-D0Knm-Aw.js";import"./FocusScope-CddfFBWs.js";import"./context-DL9YfZ-4.js";import"./VisuallyHidden-OD3rFgcd.js";import"./useControlledState-m-GoXsAY.js";import"./Label-SV9dpIxu.js";import"./useLocalizedStringFormatter-C3W1UUyM.js";import"./browser-DlWkPxXn.js";import"./EmulatedBoldText-Cuoo9C-B.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

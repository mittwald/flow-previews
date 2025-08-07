import{j as r}from"./iframe-DOyiym2O.js";import{R as p,b as l,a as g}from"./RadioButton-BIF_nHEn.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-D4ZElE21.js";import{T as y}from"./Text-DNTWXR5k.js";import{C as T}from"./Content-B35Efn1K.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BYw3-7_y.js";import"./mergeRefs-oR_2TdTx.js";import"./index-CmB0dnpi.js";import"./FieldError-gzY4_mEC.js";import"./IconWarning-DM4ryx1N.js";import"./FieldError-e9k0WgIs.js";import"./utils-p6TFjs22.js";import"./Text-Db2PSOfB.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-7jt1WOiv.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-CHvYPF9K.js";import"./Form-D7si9Qjh.js";import"./useFocus-CRPlmaKe.js";import"./useLabel-DjTxglfT.js";import"./Label-gKLM5Ku1.js";import"./Hidden-BJphBd81.js";import"./useFormReset-D392FMdG.js";import"./usePress-U0v1W6r8.js";import"./useFocusRing-wEjsdZUW.js";import"./useFocusable-CF6DJuo2.js";import"./FocusScope-BYeNXI2v.js";import"./context-DNMunrTn.js";import"./VisuallyHidden-DEjaPn8D.js";import"./useControlledState-CTI65F-h.js";import"./Label-DGNkT8gh.js";import"./useLocalizedStringFormatter-LAQIr2PZ.js";import"./browser-Cgs4Q9ZH.js";import"./EmulatedBoldText-npPiHGdu.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

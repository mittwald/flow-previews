import{j as r}from"./iframe-DRU2mvvl.js";import{R as l,b as p,a as g}from"./RadioButton-BjpkoC6C.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-d6JJClxx.js";import{T as y}from"./Text-CEDtxg_Y.js";import{C as T}from"./Content-BSQyoyk4.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dq3P4cwb.js";import"./index-CoBbVvoA.js";import"./index-BV-9eFwZ.js";import"./FieldError-DvrKLXyD.js";import"./IconWarning-Ns7aLDcg.js";import"./FieldError-C8YHk-IR.js";import"./utils-CFpcVBbf.js";import"./Text-Qj1KdidL.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-AwwNGJlI.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-BXp11O4i.js";import"./RadioGroup-CdnWnKuS.js";import"./Form-BR3m4Qab.js";import"./Label-DZZppM_K.js";import"./Hidden-CuastpsR.js";import"./useFormValidation-BPBMmZYe.js";import"./useFocus-WX08leiR.js";import"./useControlledState-B4CekZuY.js";import"./FocusScope-XgH7ylXa.js";import"./useFocusRing-Dvcn05WP.js";import"./context-WCWlHgyn.js";import"./useFormReset-BYiU13z5.js";import"./usePress-BqWNUUeu.js";import"./useFocusable-Bm6appxO.js";import"./VisuallyHidden-D2z1OxrB.js";import"./Label-BMa7ap8T.js";import"./useLocalizedStringFormatter-xAOMWzO_.js";import"./browser-DycDZ9Cy.js";import"./EmulatedBoldText-B-n-Sp9M.js";const pr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(l,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

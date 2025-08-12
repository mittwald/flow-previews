import{j as r}from"./iframe-DiTvlIx0.js";import{R as p,b as l,a as g}from"./RadioButton-_A0S_8Zk.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-DBxJr2mN.js";import{T as y}from"./Text-DI1PKUAj.js";import{C as T}from"./Content-K7QCmwvs.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CFcpYPaZ.js";import"./mergeRefs-B_ak7i-H.js";import"./index-BnnHP1pm.js";import"./FieldError-DWkDGB3S.js";import"./IconWarning-G89JjWcD.js";import"./FieldError-DCG_xqAH.js";import"./utils-BABRtEIC.js";import"./Text-Rz2GzXDH.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-XAi1WV6k.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-JGFF8T8x.js";import"./Form-BkiUDrTE.js";import"./useFocus-Csuog0QY.js";import"./useLabel-du6TudaG.js";import"./Label-DVhhRECd.js";import"./Hidden-Bpwwde4M.js";import"./useFormReset-DnAkrJEx.js";import"./usePress-gIhSeEMK.js";import"./useFocusRing-B2-Vw04x.js";import"./useFocusable-BMX7QfiV.js";import"./FocusScope-DA66A_td.js";import"./context-DGhDP4Fo.js";import"./VisuallyHidden-DqT0mP1T.js";import"./useControlledState-Cw5WssZN.js";import"./Label-M3UKHXXD.js";import"./useLocalizedStringFormatter-S2PSgqtc.js";import"./browser-BaahsGvK.js";import"./EmulatedBoldText-drbL--yb.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

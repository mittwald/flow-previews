import{j as r}from"./iframe-DcFGg16D.js";import{R as p,b as l,a as g}from"./RadioButton-CoMD7f3R.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-BYridJyC.js";import{T as y}from"./Text-DMVvzt3E.js";import{C as T}from"./Content-BihbH152.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BUogT5Xb.js";import"./mergeRefs-OVYq_ib7.js";import"./index-CDaG_HQK.js";import"./FieldError-CkYOPuvt.js";import"./IconWarning-CHPRxwlr.js";import"./FieldError-Dg2s55Gd.js";import"./utils-MGL4-aZB.js";import"./Text-Bo-pyWRw.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-KUFWMdL_.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-DX2hvS7N.js";import"./Form-67TyawWi.js";import"./useFocus-U4AMFjB6.js";import"./useLabel-BWfTCaKH.js";import"./Label-DA_WgLUG.js";import"./Hidden-Cmuw7QWn.js";import"./useFormReset-CHCY757v.js";import"./usePress-Dxku2mh7.js";import"./useFocusRing-C2kFO1mh.js";import"./useFocusable-CBHGItg9.js";import"./FocusScope-Csa5zz-0.js";import"./context-2JOSlQoN.js";import"./VisuallyHidden-MvD6uM4h.js";import"./useControlledState-ecFtZ1Px.js";import"./Label-DUWIrMUF.js";import"./useLocalizedStringFormatter-BA09CE4K.js";import"./browser-CVxrqIOh.js";import"./EmulatedBoldText-BLYaA1Bn.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-k0i0tSJI.js";import{R as l,b as p,a as g}from"./RadioButton-xlMLTKEV.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-C5SPQwbr.js";import{T as y}from"./Text-Cgxvqary.js";import{C as T}from"./Content-DPuPXqOp.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-tjPYyEf7.js";import"./mergeRefs-BRZ6RM1F.js";import"./index-C9Xz1mMc.js";import"./FieldError-DmBkReI5.js";import"./IconWarning-Dg2SDivU.js";import"./FieldError-9szde7-f.js";import"./utils-BgzpsI0V.js";import"./Text-BxPl3Uwa.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-B4E3Z2eB.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-BVRckiNW.js";import"./Form-Dqp5q8Rw.js";import"./useLabel-r92EfUV9.js";import"./Label-CrL1n18B.js";import"./Hidden-B4FAVo4g.js";import"./useFormValidation-CoaqJdcD.js";import"./useFocus-rEgPF8zF.js";import"./useControlledState-ydeueESl.js";import"./FocusScope-CCUvRh1k.js";import"./useFocusRing-CO9MadZb.js";import"./context-C6mYXPQf.js";import"./useFormReset-DpoZWz7L.js";import"./usePress-BmNwYdlA.js";import"./useFocusable-B3ABF-8R.js";import"./VisuallyHidden-DWX3G_l5.js";import"./Label-qKeJblmJ.js";import"./useLocalizedStringFormatter-D4FOu5sH.js";import"./browser-4UXY86st.js";import"./EmulatedBoldText-DDmG2Q6m.js";const pr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(l,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

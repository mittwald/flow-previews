import{j as r}from"./iframe-vEDY1jTX.js";import{R as p,b as l,a as g}from"./RadioButton-IKBCEYr5.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-uU5muSv9.js";import{T as y}from"./Text-75grQ_r_.js";import{C as T}from"./Content-ByUfIQZO.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D1FW-2uj.js";import"./mergeRefs-CKsG1c36.js";import"./index-C6zHk2IC.js";import"./FieldError-BpiRfXIY.js";import"./IconWarning-Br_z56yn.js";import"./FieldError-QhGTfIPV.js";import"./utils-gfhUS_KB.js";import"./Text-C6tNNGeu.js";import"./filterDOMProps-CeZl_uWj.js";import"./ColumnLayout-BDlZC0Ra.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-BRlgbAlt.js";import"./Form-CA3We__k.js";import"./useFocus-bOn2kcoo.js";import"./useLabel-DgiwqdF_.js";import"./Label-DboWEm2w.js";import"./Hidden-Bejm4KRb.js";import"./useFormReset-CgZBEhDH.js";import"./usePress-spwLqW3f.js";import"./useFocusRing-VIyZvsiy.js";import"./useFocusable-ChYDg6I2.js";import"./FocusScope-DqjTzzUX.js";import"./context-DTpTEKQR.js";import"./VisuallyHidden-Dyzng5Uc.js";import"./useControlledState-CQf3r7ZL.js";import"./Label-DkEv0v7K.js";import"./useLocalizedStringFormatter-BqEHuk_G.js";import"./browser-C6Q9Qk87.js";import"./EmulatedBoldText-CgqQYji0.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

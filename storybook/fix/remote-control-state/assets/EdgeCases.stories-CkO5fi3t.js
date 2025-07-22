import{j as r}from"./iframe-C4UjBIAn.js";import{R as p,b as l,a as g}from"./RadioButton-DaxinLkL.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-CJKh96tT.js";import{T as y}from"./Text-Cl3jjQuQ.js";import{C as T}from"./Content-WuRwZiCr.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-87DwQ7Go.js";import"./mergeRefs-COMEUDHn.js";import"./index-CmrBj9gN.js";import"./FieldError-CnWpy5EF.js";import"./IconWarning-CY0XRw6B.js";import"./FieldError-V3TTSJrT.js";import"./utils-BLjaUoJs.js";import"./Text-CPgcCMNB.js";import"./filterDOMProps-CeZl_uWj.js";import"./ColumnLayout-BARAwnzs.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-CkfKRMyy.js";import"./Form-DZkb495z.js";import"./useFocus-BmYsiZmy.js";import"./useLabel-BsCfOrtV.js";import"./Label-DUd9oGhN.js";import"./Hidden-DuKiE2Vy.js";import"./useFormReset-DguyA7pD.js";import"./usePress-B9Tj2Vkc.js";import"./useFocusRing-D6tBYznr.js";import"./useFocusable-DY-8mdaw.js";import"./FocusScope-BprNCpdJ.js";import"./context-DFK0WUvU.js";import"./VisuallyHidden-DfrTtOS_.js";import"./useControlledState-Cate5U5n.js";import"./Label-Dvf2CIG9.js";import"./useLocalizedStringFormatter-Bj3RA7TV.js";import"./browser-DTcMqGMW.js";import"./EmulatedBoldText-CM9vl5us.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

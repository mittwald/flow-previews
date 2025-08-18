import{j as r}from"./iframe-BAtUELBR.js";import{R as p,b as l,a as g}from"./RadioButton-B99EM_Bj.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-DQJLLmiV.js";import{T as y}from"./Text-DzMLmIhZ.js";import{C as T}from"./Content-thZDV1LU.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Cm-qlPij.js";import"./mergeRefs-CfY7cvkM.js";import"./index-CLr8lCXa.js";import"./FieldError-C6NpbvhG.js";import"./IconWarning-h84dHhem.js";import"./FieldError-D0SFQKR_.js";import"./utils-UbQMFgd1.js";import"./Text-j2Uyll_5.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-7fgRYgQ7.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-B9VuzlPx.js";import"./Form-D4YUCIIk.js";import"./useFocus-DJUZ2En4.js";import"./useLabel-DmioRyAZ.js";import"./Label-DhaMlcU0.js";import"./Hidden-CDb1KA3j.js";import"./useFormReset-Cu48O1XS.js";import"./usePress-B88qu-VD.js";import"./useFocusRing-BdUFZX00.js";import"./useFocusable-BuN38nX6.js";import"./FocusScope-CQU9T81i.js";import"./context-DbLHYHiQ.js";import"./VisuallyHidden-CFnWwY81.js";import"./useControlledState-Cdm8pC1T.js";import"./Label-QEHCu_aF.js";import"./useLocalizedStringFormatter-BRgbsD3G.js";import"./browser-BVtPTxgw.js";import"./EmulatedBoldText-CosrpHXB.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

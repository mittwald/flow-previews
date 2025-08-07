import{j as r}from"./iframe-Dykv-siI.js";import{R as p,b as l,a as g}from"./RadioButton-BCbATw4i.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-BfUzJw4i.js";import{T as y}from"./Text-D7_Ckqho.js";import{C as T}from"./Content-BRWc3bm8.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Bor3EKSO.js";import"./mergeRefs-D4l15LMa.js";import"./index-CUyX81Vk.js";import"./FieldError-SIkWpDB2.js";import"./IconWarning-Dqgt16D-.js";import"./FieldError-HMu3Fq7J.js";import"./utils-B-ceMMh2.js";import"./Text-CLEeB9ax.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-BXmFeNzX.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-BvIeHblI.js";import"./Form-CjGGxOiW.js";import"./useFocus-DT_Sim8A.js";import"./useLabel-Cl2tFDz1.js";import"./Label-DDTleg66.js";import"./Hidden-B1Iw_O48.js";import"./useFormReset-ceBz3BPo.js";import"./usePress-JMB6_eRB.js";import"./useFocusRing-BLIO3-Um.js";import"./useFocusable-DsypMLKX.js";import"./FocusScope-BSi0CMVM.js";import"./context-5SGg1gn7.js";import"./VisuallyHidden-BglhDB6t.js";import"./useControlledState-C0gMHLaR.js";import"./Label-BoJDi_AO.js";import"./useLocalizedStringFormatter-CQJsBQBp.js";import"./browser-C-YjMasC.js";import"./EmulatedBoldText-CBoWsrrJ.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

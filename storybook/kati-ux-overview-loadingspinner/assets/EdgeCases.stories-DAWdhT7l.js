import{j as r}from"./iframe-BBgxZ9_Z.js";import{R as p,b as l,a as g}from"./RadioButton-D104NNfg.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-_Aoz4m0w.js";import{T as y}from"./Text-DGcNKUf7.js";import{C as T}from"./Content-BMHWP12I.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-IdqCMJT1.js";import"./mergeRefs-BLmxAuNF.js";import"./index-BhvP9-i6.js";import"./FieldError-3nUx1gE4.js";import"./IconWarning-8HHOdEAt.js";import"./FieldError-W_6exYVC.js";import"./utils-MwuRBPAU.js";import"./Text-D0NxCgiz.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-DeyZTOHH.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-D4LtgwfS.js";import"./Form-CxmcAuRx.js";import"./useFocus-BbdsXgPj.js";import"./useLabel-CtD9pvoh.js";import"./Label-Di9QaZZ3.js";import"./Hidden-k-QU5_bv.js";import"./useFormReset-BmT_Xdgp.js";import"./usePress-DTZ5yxFT.js";import"./useFocusRing-LpVKnpiI.js";import"./useFocusable-CfVMEKsh.js";import"./FocusScope-CjT2Rvcj.js";import"./context-1V9oDOBq.js";import"./VisuallyHidden-DzvMb3_B.js";import"./useControlledState-DynQBW6H.js";import"./Label-CMgPNz6D.js";import"./useLocalizedStringFormatter-oXVl5QY8.js";import"./browser-XdNXsdMD.js";import"./EmulatedBoldText-Bf9Yi8oc.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

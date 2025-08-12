import{j as r}from"./iframe-BDw0JWSR.js";import{R as p,b as l,a as g}from"./RadioButton-DEO0H36g.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-b2XLfJNd.js";import{T as y}from"./Text-BXVMRRcn.js";import{C as T}from"./Content-DoOgfT7f.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BlgeDM1_.js";import"./mergeRefs-C1Ne00pv.js";import"./index-DchPcGun.js";import"./FieldError-D-ArndZL.js";import"./IconWarning-C4ko8TBx.js";import"./FieldError-ByToyRq3.js";import"./utils-D_w6CRD2.js";import"./Text-DEFEolTP.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-DJTkFHSb.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-BU22V6Q8.js";import"./Form-Q2KPI748.js";import"./useFocus-Dj2Ek65f.js";import"./useLabel-C5kEgDfJ.js";import"./Label-CUqrwqQ8.js";import"./Hidden-pH7w6Mtj.js";import"./useFormReset-JMYigv_3.js";import"./usePress-BNZPQqcG.js";import"./useFocusRing-52GqPzGX.js";import"./useFocusable-D3-cRXek.js";import"./FocusScope-CC9BsQaO.js";import"./context-D5nQNM7t.js";import"./VisuallyHidden-BSZ5GesV.js";import"./useControlledState-Cvl_BVXS.js";import"./Label-Be_-w5vU.js";import"./useLocalizedStringFormatter-CacwBwR0.js";import"./browser-BofL4XsS.js";import"./EmulatedBoldText-BcRlLsEq.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

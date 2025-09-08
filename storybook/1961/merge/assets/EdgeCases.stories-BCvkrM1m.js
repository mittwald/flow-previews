import{j as r}from"./iframe-xv1hkYrp.js";import{R as p,b as l,a as g}from"./RadioButton-rq1qFIkQ.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-BjzX6oGz.js";import{T as y}from"./Text-DbY3Cuep.js";import{C as T}from"./Content-CT3FCzns.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B9OcsNR0.js";import"./mergeRefs-BFH3kKHm.js";import"./index-Dm2Ajy-S.js";import"./FieldError-BheKx6KK.js";import"./IconWarning-0FGrLhxS.js";import"./FieldError-wrM_YjD9.js";import"./utils-CpTHh5rs.js";import"./Text-B_3Y_Nze.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-B0YFhCRu.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-D_tA2pXJ.js";import"./Form-B-L3i4zG.js";import"./useFocus-CfLpRQBT.js";import"./useLabel-BR4zi6f8.js";import"./Label-mG8fBsu4.js";import"./Hidden-BDDDKiVs.js";import"./useFormReset-B-Mz2laO.js";import"./usePress-o1s-vRpH.js";import"./useFocusRing-CU0aNGGs.js";import"./useFocusable-CwWDG3DW.js";import"./FocusScope-BxH26lbn.js";import"./context-D4r7bTNU.js";import"./VisuallyHidden-CfqgoXLS.js";import"./useControlledState-BbRhH2Ee.js";import"./Label-DC7JJJSp.js";import"./useLocalizedStringFormatter-UiX65Yuj.js";import"./browser-lwEiR5fW.js";import"./EmulatedBoldText-CmD3aEdd.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

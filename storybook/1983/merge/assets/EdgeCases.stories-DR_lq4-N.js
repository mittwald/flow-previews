import{j as r}from"./iframe-PPscN4tr.js";import{R as p,b as l,a as g}from"./RadioButton-BEDvRusg.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-dmVBPqAq.js";import{T as y}from"./Text-Cr4g403k.js";import{C as T}from"./Content-k_GJXKSd.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-cBval16A.js";import"./mergeRefs-DnJs-uwA.js";import"./index-DZCrbm-c.js";import"./FieldError-_wKjORAk.js";import"./IconWarning-DCjExedU.js";import"./FieldError-Ccwwr1FD.js";import"./utils-DsPiQVUE.js";import"./Text-DOZF1D9Q.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-CnLUtUMP.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-DjOLji2-.js";import"./Form-D8YNg8fo.js";import"./useFocus-C4zNlByO.js";import"./useLabel-BehMUX7z.js";import"./Label-CdjKXy54.js";import"./Hidden-BSzw0V8U.js";import"./useFormReset-CpR4G9FH.js";import"./usePress-BKGHEFGx.js";import"./useFocusRing-gcrQa-4U.js";import"./useFocusable-BzFu29N-.js";import"./FocusScope-DT8YcIVm.js";import"./context-BC4DP49M.js";import"./VisuallyHidden-DdPky-fR.js";import"./useControlledState-Bj7Ci1Bi.js";import"./Label-Bf1duK2q.js";import"./useLocalizedStringFormatter-DxKsOw5A.js";import"./browser-BBEx8dXu.js";import"./EmulatedBoldText-2c05oBpj.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

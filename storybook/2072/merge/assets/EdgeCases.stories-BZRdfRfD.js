import{j as r}from"./iframe-CqjcYzEy.js";import{R as l,b as p,a as g}from"./RadioButton-Vr9x2pPn.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-CsSz4OYy.js";import{T as y}from"./Text-C88kvj5Y.js";import{C as T}from"./Content-CrvHyPqR.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DQ6MTfU-.js";import"./index-D26L2zGu.js";import"./index-0TrhkGFb.js";import"./FieldError-BSbVK43F.js";import"./IconWarning-D54OF1fr.js";import"./FieldError-CvNEPKy0.js";import"./utils-CEH4bJOc.js";import"./Text-DBGfsT13.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-NaL3c8uY.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-Bo04lqU0.js";import"./RadioGroup-BEf1heCQ.js";import"./Form-DnnLWbpp.js";import"./Label-D2Nd0YkC.js";import"./Hidden-D7Skj8Od.js";import"./useFormValidation-Jq_wsvSc.js";import"./useFocus-BSqxszdS.js";import"./useControlledState-D11yMwJT.js";import"./FocusScope-BTKvvs_H.js";import"./useFocusRing-Cq8bWJ4k.js";import"./context-CVWMzqu0.js";import"./useFormReset-BSVvJl_b.js";import"./usePress-C-6OBS1L.js";import"./useFocusable-Cui5lI-x.js";import"./VisuallyHidden-l-GsqitC.js";import"./Label-To7Hive9.js";import"./useLocalizedStringFormatter-CfOyXNn0.js";import"./browser-BlhuXvad.js";import"./EmulatedBoldText-CpIdef6b.js";const pr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(l,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

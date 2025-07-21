import{j as r}from"./iframe-cREoqKkU.js";import{R as p,b as l,a as g}from"./RadioButton-OiSARPR7.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-Bn9kKzle.js";import{T as y}from"./Text-n81s0DiV.js";import{C as T}from"./Content-CdNEzGue.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CoBIOD9m.js";import"./mergeRefs-qT8HekK4.js";import"./index-sbMuRXJ-.js";import"./FieldError-B5o1ZaV9.js";import"./IconWarning-BZ0g_Se0.js";import"./FieldError-CvRuj6qL.js";import"./utils-yXINXq--.js";import"./Text-IBVIMvOc.js";import"./filterDOMProps-CeZl_uWj.js";import"./ColumnLayout-CTjoby71.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-K828u12V.js";import"./Form-FfGMTlZb.js";import"./useFocus-DdT7TrV6.js";import"./useLabel-lx63atcd.js";import"./Label-CiJ2ihSa.js";import"./Hidden-lwWUIJBj.js";import"./useFormReset-D4g7a1lX.js";import"./usePress-CDwaJuL4.js";import"./useFocusRing-BqHxEjMi.js";import"./useFocusable-6okJE7SL.js";import"./FocusScope-D9lXdOdd.js";import"./context-B2t2DGfo.js";import"./VisuallyHidden--yTRKci1.js";import"./useControlledState-CU5MoX31.js";import"./Label-DZvsfDgY.js";import"./useLocalizedStringFormatter-VGcwbP3j.js";import"./browser-DLud-_LN.js";import"./EmulatedBoldText-Do4ZwDP6.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

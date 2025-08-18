import{j as r}from"./iframe-ANbYZxYh.js";import{R as p,b as l,a as g}from"./RadioButton-BgRMkvtD.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-BTn_6AB_.js";import{T as y}from"./Text-M71Ue6Ol.js";import{C as T}from"./Content-wB_ZRHNn.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Bh9sJwp9.js";import"./mergeRefs-C7E84bFC.js";import"./index-sj9Kgwl7.js";import"./FieldError-CknxTZ0z.js";import"./IconWarning-DS7IkYNL.js";import"./FieldError-8FwQObi_.js";import"./utils-Cy_MvyB4.js";import"./Text-DtPhrSvp.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-Bpz0orEZ.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-YLppawhX.js";import"./Form-BzuKHEmj.js";import"./useFocus-TkuOvp2H.js";import"./useLabel-BSgApQcW.js";import"./Label-DHVn08UY.js";import"./Hidden-CKPTgp3M.js";import"./useFormReset-DK8My9j5.js";import"./usePress-YyV1OQc2.js";import"./useFocusRing-CdWhuOPm.js";import"./useFocusable-Do5j3Niz.js";import"./FocusScope-DrloOZeI.js";import"./context-C29UMt2a.js";import"./VisuallyHidden-Dkqu2xa7.js";import"./useControlledState-qP1KlDsL.js";import"./Label-BNGIQ-CZ.js";import"./useLocalizedStringFormatter-CwJnm8Gm.js";import"./browser-DiQDtMf4.js";import"./EmulatedBoldText-D7XMT75r.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

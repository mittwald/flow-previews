import{j as r}from"./iframe-Cs4u3jai.js";import{R as p,b as l,a as g}from"./RadioButton-CzwEFQZw.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-CZWF4Lhb.js";import{T as y}from"./Text-BBeTGXmh.js";import{C as T}from"./Content-B7mZcavN.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DyrLVIsu.js";import"./mergeRefs-DcFlLbGV.js";import"./index-DwmW63z3.js";import"./FieldError-Wsj8Agfe.js";import"./IconWarning-0BVBVXS4.js";import"./FieldError-3wBrWCfg.js";import"./utils-vclj1Qm2.js";import"./Text-B7UIaBOw.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-Cv094ATE.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-CVVqFmOn.js";import"./Form-D6x5jYca.js";import"./useFocus-ClAUtHT6.js";import"./useLabel-BkGcoVJa.js";import"./Label-S4RmJPV5.js";import"./Hidden-CdwQ6yqP.js";import"./useFormReset-u7ab4fFg.js";import"./usePress-BSD3tvTg.js";import"./useFocusRing-BLMln0L2.js";import"./useFocusable-BN_CcrEu.js";import"./FocusScope-FJ_dmtXb.js";import"./context-BvTQ7OVQ.js";import"./VisuallyHidden-BT36-Qvg.js";import"./useControlledState-D-JQKTrH.js";import"./Label-B0Y8PcLC.js";import"./useLocalizedStringFormatter-D4NA580S.js";import"./browser-BbmE0SWg.js";import"./EmulatedBoldText-Wf0lwtn6.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

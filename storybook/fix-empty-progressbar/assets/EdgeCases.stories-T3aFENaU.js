import{j as r}from"./iframe-BmySKFCq.js";import{R as p,b as l,a as g}from"./RadioButton-FBM0Ba7z.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-BtqOWH62.js";import{T as y}from"./Text-VzeX0aJg.js";import{C as T}from"./Content-DfScrz4g.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BOmyjk4c.js";import"./mergeRefs-B6V94bK_.js";import"./index-BzrGOqLm.js";import"./FieldError-DoR06PZF.js";import"./IconWarning-DwPTlpqV.js";import"./FieldError-l_dSmRSM.js";import"./utils-DoYwLUW3.js";import"./Text-DabCaf9H.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-0KeoAB1U.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-DojgGuom.js";import"./Form-mecE9jTR.js";import"./useFocus-XVtYQ6Ak.js";import"./useLabel-DH0aVX1E.js";import"./Label-BqzVWqzc.js";import"./Hidden-CRzIvDGy.js";import"./useFormReset-LQ-kKN_o.js";import"./usePress-DMuaLZjl.js";import"./useFocusRing-C4oIu2i3.js";import"./useFocusable-DwzVkHoA.js";import"./FocusScope-Bruj9SRJ.js";import"./context-CMcVAeGU.js";import"./VisuallyHidden-CTALs_-h.js";import"./useControlledState-CAYoIw9O.js";import"./Label-D07kElwt.js";import"./useLocalizedStringFormatter-DQn86H97.js";import"./browser-Bc8vbUyQ.js";import"./EmulatedBoldText-DPhJV8kT.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

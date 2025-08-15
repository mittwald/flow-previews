import{j as r}from"./iframe-XU38G95a.js";import{R as p,b as l,a as g}from"./RadioButton-q_RMVexz.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-Dl_S7Np4.js";import{T as y}from"./Text-BiCu62_D.js";import{C as T}from"./Content-Bz5o5KAq.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BGw8zKwk.js";import"./mergeRefs-qz3q4wY-.js";import"./index-C_0HZTPb.js";import"./FieldError-DDQ8jatw.js";import"./IconWarning-C4sgFplx.js";import"./FieldError-iHvRLgo5.js";import"./utils-CRMz2C-S.js";import"./Text-BOldZPQm.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-q_N7OkKo.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-uQyAxvi0.js";import"./Form-BwQPNTC6.js";import"./useFocus-BcwSg9Gz.js";import"./useLabel-DWzTJ_60.js";import"./Label-B-D8nJqg.js";import"./Hidden-CmYs0ax8.js";import"./useFormReset-CGohrCOb.js";import"./usePress-DmxXsmze.js";import"./useFocusRing-_ts8IeVv.js";import"./useFocusable-bB4ldgF4.js";import"./FocusScope-ng_yE7d5.js";import"./context-DoEtjPsM.js";import"./VisuallyHidden-DU3qZR-S.js";import"./useControlledState-D-ouz_Ia.js";import"./Label-ClqUqVil.js";import"./useLocalizedStringFormatter-CmG678Ry.js";import"./browser-DzHUdCJ5.js";import"./EmulatedBoldText-DgdtlBmQ.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

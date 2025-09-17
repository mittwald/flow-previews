import{j as r}from"./iframe-D_4x6qMj.js";import{R as p,b as l,a as g}from"./RadioButton-CIG2whnJ.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-CYyXiBqF.js";import{T as y}from"./Text-CweuBtPf.js";import{C as T}from"./Content-Bc7aC-a-.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CALK_gXH.js";import"./mergeRefs-D11WPw_n.js";import"./index-D_JTLils.js";import"./FieldError-B9c3ag_Q.js";import"./IconWarning-Dzi10vRl.js";import"./FieldError-DwM-vJJl.js";import"./utils-xe5YSam6.js";import"./Text-Cu7PdI7W.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-Ba68kgpu.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-C1paoZBH.js";import"./Form-D0g69-ep.js";import"./useFocus-Drnb5e9K.js";import"./useLabel-CiC867Ap.js";import"./Label-CCRaVzEI.js";import"./Hidden-B0gkrfj6.js";import"./useFormReset-Bck6lqok.js";import"./usePress-C9nt0YbM.js";import"./useFocusRing-TvNskxef.js";import"./useFocusable-B8Ri4aea.js";import"./FocusScope-CncZTdzF.js";import"./context-DM98rbVc.js";import"./VisuallyHidden-tZR9lL9G.js";import"./useControlledState-CYhMOmxg.js";import"./Label-DYejL5eD.js";import"./useLocalizedStringFormatter-BlYhncvt.js";import"./browser-CZBg7HNp.js";import"./EmulatedBoldText-B9kAgGNC.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

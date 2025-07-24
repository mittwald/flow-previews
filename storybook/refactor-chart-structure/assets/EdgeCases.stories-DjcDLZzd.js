import{j as r}from"./iframe-B14Hztna.js";import{R as p,b as l,a as g}from"./RadioButton-CFZ1XlDl.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-CzD5oSaR.js";import{T as y}from"./Text-CvN8mc0t.js";import{C as T}from"./Content-CkTQWYEw.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-uadcFCMp.js";import"./mergeRefs-Bv4UzjNV.js";import"./index-BavqP8B-.js";import"./FieldError-DMf0Tswo.js";import"./IconWarning-EXdx-O5E.js";import"./FieldError-Bx0_OVZy.js";import"./utils-DoVwnhJ7.js";import"./Text-CpIc-G8R.js";import"./filterDOMProps-CeZl_uWj.js";import"./ColumnLayout-BNvIN_7g.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-BZhgJ9ym.js";import"./Form-Dxjc7g8l.js";import"./useFocus-DUtc_xDc.js";import"./useLabel-BQ9idzkA.js";import"./Label-Dj1DBquH.js";import"./Hidden-DEGhv2S1.js";import"./useFormReset-C7VrIa_J.js";import"./usePress-CIDHtETH.js";import"./useFocusRing-BniRYtyP.js";import"./useFocusable-qJIKezDE.js";import"./FocusScope-GGet2N6d.js";import"./context-ClRpg4Pi.js";import"./VisuallyHidden-B90-554O.js";import"./useControlledState-ByF29kyY.js";import"./Label-zfejy0bC.js";import"./useLocalizedStringFormatter-Dv2L7e6J.js";import"./browser-DQtsHFqq.js";import"./EmulatedBoldText-CgkGARPI.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-tng_7MnI.js";import{R as p,b as l,a as g}from"./RadioButton-CytS55s-.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-C8oWp9d_.js";import{T as y}from"./Text-D_jDO6uI.js";import{C as T}from"./Content-1CgW7fun.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DYtDUrj3.js";import"./mergeRefs--BPoweoc.js";import"./index-Drzl8fEc.js";import"./FieldError-DfzpSzZW.js";import"./IconWarning-BPmu7WCe.js";import"./FieldError-DYaGdwvi.js";import"./utils-5hQd1GPy.js";import"./Text-CW9rRGi5.js";import"./filterDOMProps-CeZl_uWj.js";import"./ColumnLayout-CvsrOVTo.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-xU6niBa4.js";import"./Form-DwsjCjtf.js";import"./useFocus-DB2yX2jm.js";import"./useLabel-Xo2bW3MF.js";import"./Label-CUv_itT5.js";import"./Hidden-DtL8MOne.js";import"./useFormReset-xJzqPhqW.js";import"./usePress-GMQejvE6.js";import"./useFocusRing-DhOBCV_L.js";import"./useFocusable-DouN-Cym.js";import"./FocusScope-DGiBHAPP.js";import"./context-DF7MMgfI.js";import"./VisuallyHidden-_vEXP6Y8.js";import"./useControlledState-BUDKzFUA.js";import"./Label-Dv5kr7I4.js";import"./useLocalizedStringFormatter-CgARc_YB.js";import"./browser-zPD-OImI.js";import"./EmulatedBoldText-d-Lx_bwT.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

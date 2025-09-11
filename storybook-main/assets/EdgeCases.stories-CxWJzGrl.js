import{j as r}from"./iframe-DvGStSYQ.js";import{R as p,b as l,a as g}from"./RadioButton-Boiwhq55.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-RVFDBczb.js";import{T as y}from"./Text-aqY_knFC.js";import{C as T}from"./Content-DDtWEpEt.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CQyMUqli.js";import"./mergeRefs-D5I-7zq8.js";import"./index-vxu4sbw1.js";import"./FieldError-BtrW-4IP.js";import"./IconWarning-PCMncW0h.js";import"./FieldError-Cv8C3-Ec.js";import"./utils-BfKSOXmh.js";import"./Text-C8nQapVu.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-H-sGT-dF.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-CWHiDYh5.js";import"./Form-BeVzvFPG.js";import"./useFocus-Dk72H1bO.js";import"./useLabel-pezwcoCn.js";import"./Label-BsSwZl9V.js";import"./Hidden-D8kwZn2S.js";import"./useFormReset-CpcIO9Ob.js";import"./usePress-i0ws38c9.js";import"./useFocusRing-ldGrbWty.js";import"./useFocusable-51csEq1k.js";import"./FocusScope-Dv52udGl.js";import"./context-AtsIIwtl.js";import"./VisuallyHidden-BQiIpSgJ.js";import"./useControlledState-BCrcM4bM.js";import"./Label-DhM8XMbl.js";import"./useLocalizedStringFormatter-B959dniX.js";import"./browser-B7JgWknh.js";import"./EmulatedBoldText-CaZEOFKE.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

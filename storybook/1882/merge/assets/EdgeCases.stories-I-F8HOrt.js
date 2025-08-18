import{j as r}from"./iframe-DqL79zQf.js";import{R as p,b as l,a as g}from"./RadioButton-GEGsZ_8B.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-BOjXaC3P.js";import{T as y}from"./Text-M86zJQcf.js";import{C as T}from"./Content-C5dXUuda.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CyLvSquV.js";import"./mergeRefs-D6gEpmO4.js";import"./index-7IubYRC5.js";import"./FieldError-Bx1fPtVC.js";import"./IconWarning-B2WreSxS.js";import"./FieldError-DNlWKJE8.js";import"./utils-z68HW5Om.js";import"./Text-zdoGkENQ.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-_xnnIPRV.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-DgEw9v0a.js";import"./Form-R5LTMmOa.js";import"./useFocus-BD5ovWzl.js";import"./useLabel-BjvlKqLd.js";import"./Label-CMzThDyg.js";import"./Hidden-BIJxogKe.js";import"./useFormReset-CsKPjgKa.js";import"./usePress-CO3SG6lx.js";import"./useFocusRing-CbrFyu86.js";import"./useFocusable-B73WrcgM.js";import"./FocusScope-DbqtD9id.js";import"./context-CSgowZ2Z.js";import"./VisuallyHidden-BQckF0OS.js";import"./useControlledState--BvK6IW4.js";import"./Label-BLSzr0Yv.js";import"./useLocalizedStringFormatter-0rSYolxh.js";import"./browser-AVTBNrkm.js";import"./EmulatedBoldText-DYcpE2hW.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

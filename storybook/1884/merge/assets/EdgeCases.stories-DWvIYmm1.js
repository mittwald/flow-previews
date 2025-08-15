import{j as r}from"./iframe-Cnqm4lFy.js";import{R as p,b as l,a as g}from"./RadioButton-ByzPvTzO.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-CigMyjwh.js";import{T as y}from"./Text-BEWqZmc4.js";import{C as T}from"./Content-CytTbq4e.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BxdbS27a.js";import"./mergeRefs-8x0kH2T_.js";import"./index-CsHwvL4C.js";import"./FieldError-BShtxMou.js";import"./IconWarning-BGJHeHvx.js";import"./FieldError-CjkOwEOv.js";import"./utils-CnzLW3AP.js";import"./Text-CzkkWfVE.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-Co78cifa.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-CL4_pSIa.js";import"./Form-BSD4Q5fC.js";import"./useFocus-_F3heiAA.js";import"./useLabel-BaQUBcK6.js";import"./Label-DR_AMUCZ.js";import"./Hidden-Cs157XWu.js";import"./useFormReset-eFY2_Wll.js";import"./usePress-DsDytGfO.js";import"./useFocusRing-CPUfygMd.js";import"./useFocusable-BzgCWsb7.js";import"./FocusScope-BkqoV2HT.js";import"./context-CV4GK-7T.js";import"./VisuallyHidden-CPCVsxvc.js";import"./useControlledState-BaDEj8YE.js";import"./Label-DI5vbAp_.js";import"./useLocalizedStringFormatter-CQJQXq27.js";import"./browser-B2d62Nc4.js";import"./EmulatedBoldText-DcBlvLGt.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

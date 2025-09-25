import{j as r}from"./iframe-CQa7qTJa.js";import{R as p,b as l,a as g}from"./RadioButton-cnmdN6FS.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories--s64CQQU.js";import{T as y}from"./Text-CH2mDEXN.js";import{C as T}from"./Content-BsPJaXkt.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-C1od4eVS.js";import"./mergeRefs-Da4MPh46.js";import"./index-BsJVg0bb.js";import"./FieldError-j63R-YGj.js";import"./IconWarning-CeyZIf1V.js";import"./FieldError-D5-jV0S5.js";import"./utils-cYx4gHhD.js";import"./Text-BRoIiTz6.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-WTuYzAwd.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-CQQGiBMV.js";import"./Form-CF3ngYGn.js";import"./useFocus-C9JxIGDi.js";import"./useLabel-DGKdhdH_.js";import"./Label-DUJFwkpM.js";import"./Hidden-Xar3rui2.js";import"./useFormReset-DY9tf8Hl.js";import"./usePress-D-jgt3FH.js";import"./useFocusRing-DJ1LjUwE.js";import"./useFocusable-FCuKz-qE.js";import"./FocusScope-C4mxiVmq.js";import"./context-BU9KDZsm.js";import"./VisuallyHidden-CQfZ6AGe.js";import"./useControlledState-CFUYHrzm.js";import"./Label-DFElwRl3.js";import"./useLocalizedStringFormatter-DxdNJ3BP.js";import"./browser-BhSl0yCb.js";import"./EmulatedBoldText-Ce7b_D_t.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

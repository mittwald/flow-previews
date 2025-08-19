import{j as r}from"./iframe-TjmQ4-hc.js";import{R as p,b as l,a as g}from"./RadioButton-BpoMkXlL.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-CQd8tYWm.js";import{T as y}from"./Text-B1ccA9_H.js";import{C as T}from"./Content-CA8pedhb.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-mrDLBKOi.js";import"./mergeRefs-mF2yj4e0.js";import"./index-D7o1-TZH.js";import"./FieldError-DnzwKCtL.js";import"./IconWarning-1inC7auC.js";import"./FieldError-Bn62nal0.js";import"./utils-DD1RW9f4.js";import"./Text-C2aObJTh.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-DuAAkt3X.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-D91GWiNP.js";import"./Form-Bwnncz0S.js";import"./useFocus-Bp-EL3Xp.js";import"./useLabel-d8aoteAS.js";import"./Label-bbA9jqHU.js";import"./Hidden-30ERZiSw.js";import"./useFormReset-CwwzwEJM.js";import"./usePress-BK59oRjy.js";import"./useFocusRing-D7ZBK5Fy.js";import"./useFocusable-BjM2CItA.js";import"./FocusScope-DiLIjyrf.js";import"./context-R7iXnnvL.js";import"./VisuallyHidden-EAsiRlUn.js";import"./useControlledState-Cdf0eZg6.js";import"./Label-_xLVsaVJ.js";import"./useLocalizedStringFormatter-CDqIJOhp.js";import"./browser-CuXK39lt.js";import"./EmulatedBoldText-CMH1yXpY.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

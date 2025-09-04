import{j as r}from"./iframe-DT0a5lsj.js";import{R as p,b as l,a as g}from"./RadioButton-B0PSLj8i.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-CkIJglOc.js";import{T as y}from"./Text-CWVnGydc.js";import{C as T}from"./Content-CuZQKYJh.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BRdZcbMx.js";import"./mergeRefs-DYr4rTQb.js";import"./index-CAMy4aIT.js";import"./FieldError-xtdcz2l6.js";import"./IconWarning-CP_9phWh.js";import"./FieldError-Ccza_qSZ.js";import"./utils-BDe-fZfW.js";import"./Text-C8QSq9Z3.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-CpW9eZKX.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-BUn0Y4RQ.js";import"./Form-BqKRbvb9.js";import"./useFocus-BPGD2VLY.js";import"./useLabel-BMvlVo7d.js";import"./Label-RcZ5RumP.js";import"./Hidden-CjrJVhTe.js";import"./useFormReset-cUnmQGQz.js";import"./usePress-wu8eZQGI.js";import"./useFocusRing-_XF1QxIj.js";import"./useFocusable-DyoB_hOm.js";import"./FocusScope-BOmeY0Fa.js";import"./context-DtNWionw.js";import"./VisuallyHidden-DDMzvk-a.js";import"./useControlledState-C-X9sbbL.js";import"./Label-Dszv3nJ4.js";import"./useLocalizedStringFormatter-DjQQHvIW.js";import"./browser-C5BzL4Ah.js";import"./EmulatedBoldText-Clo2YvSu.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-DRNY0HV6.js";import{R as p,b as l,a as g}from"./RadioButton-DfRIdB3B.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-CFY6y_o5.js";import{T as y}from"./Text-oBJONlUH.js";import{C as T}from"./Content-4c99_QX-.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-fzQQ9o1S.js";import"./mergeRefs-BGrmltrg.js";import"./index-BKPaZinn.js";import"./FieldError-BR7j6BGO.js";import"./IconWarning-BbRR4ujq.js";import"./FieldError-WemdyPf5.js";import"./utils-BGYRLt27.js";import"./Text-laSnJE4K.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-BEBAxNgL.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-BxxMZtmq.js";import"./Form-DE2ohvFV.js";import"./useFocus-BhLRMKCW.js";import"./useLabel-DGx8VCK9.js";import"./Label-Ddh_b_TK.js";import"./Hidden-tTaWOvSZ.js";import"./useFormReset-CQ99iq-2.js";import"./usePress-CqeZb5V3.js";import"./useFocusRing-kW39cg4V.js";import"./useFocusable-BSwP4fZ7.js";import"./FocusScope-CchoPqp2.js";import"./context-wh02hEcl.js";import"./VisuallyHidden-B4EZo48X.js";import"./useControlledState-EC94ILpF.js";import"./Label-ByUmX-vC.js";import"./useLocalizedStringFormatter-BEg4k6Ev.js";import"./browser-D4tnjvnK.js";import"./EmulatedBoldText-B4cW62zw.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

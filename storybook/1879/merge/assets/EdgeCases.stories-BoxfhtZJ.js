import{j as r}from"./iframe-CxaV-_2O.js";import{R as p,b as l,a as g}from"./RadioButton-CiiDZ8OJ.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-BpGHMAdY.js";import{T as y}from"./Text-BIjq1xdd.js";import{C as T}from"./Content-DiNmmKk6.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-z-cWY8Dd.js";import"./mergeRefs-C1I7UQxo.js";import"./index-Bv-xhCU8.js";import"./FieldError-CYSu8c40.js";import"./IconWarning-D1KlvyS5.js";import"./FieldError-DeYp8bGg.js";import"./utils-DIYfzur0.js";import"./Text-CkN05LTG.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-CxnZQcSW.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-C_ytvaz3.js";import"./Form-Y2IMt8C-.js";import"./useFocus-IPoI70H0.js";import"./useLabel-CxTeeGsz.js";import"./Label-CMom07rS.js";import"./Hidden-ib7KOmtl.js";import"./useFormReset-CwuAQO3t.js";import"./usePress-C5E9TJvv.js";import"./useFocusRing-CW_TQqaA.js";import"./useFocusable-Y-_8tCBP.js";import"./FocusScope-COp4d16A.js";import"./context-Cj-dJZ3y.js";import"./VisuallyHidden-DPnP-D6J.js";import"./useControlledState-CfXHiewS.js";import"./Label-DeXHoAKG.js";import"./useLocalizedStringFormatter-z8DhIEVV.js";import"./browser-DOb4XPLl.js";import"./EmulatedBoldText-Dg2hewFF.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

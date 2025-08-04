import{j as r}from"./iframe-DycaE4yP.js";import{R as p,b as l,a as g}from"./RadioButton-O-hmLWjf.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-DbI0352M.js";import{T as y}from"./Text-D7PtYJH6.js";import{C as T}from"./Content-D34hNHu9.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-K6I7evOF.js";import"./mergeRefs-DRF5sLLW.js";import"./index-DZjp0r4-.js";import"./FieldError-DPl0RnJm.js";import"./IconWarning-CT1lcMza.js";import"./FieldError-BPjBaqMq.js";import"./utils-BKIW_WGl.js";import"./Text-Co__d8QG.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-CQARhu2O.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-1ZocJyLj.js";import"./Form-BeDIwDDj.js";import"./useFocus-V6VDc_9L.js";import"./useLabel-Dwjvyt4X.js";import"./Label-BzQKezRD.js";import"./Hidden-BOdEkm3m.js";import"./useFormReset-CJg24Tdt.js";import"./usePress-Bp56TFyM.js";import"./useFocusRing-DwXXK7Ot.js";import"./useFocusable-kod0IUYw.js";import"./FocusScope-DfGH1q4v.js";import"./context-CtP3BLUn.js";import"./VisuallyHidden-BS8Lf4nY.js";import"./useControlledState-Do7JB9n2.js";import"./Label-BhJAUeA3.js";import"./useLocalizedStringFormatter-D4Reb_cV.js";import"./browser-BH60Xdrt.js";import"./EmulatedBoldText-BQ7yahrw.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

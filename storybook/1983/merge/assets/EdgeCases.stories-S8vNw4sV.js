import{j as r}from"./iframe-CTVhNlXB.js";import{R as p,b as l,a as g}from"./RadioButton-DtP7S4-q.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-BhrV9cJP.js";import{T as y}from"./Text-BLo0dekR.js";import{C as T}from"./Content-CrQzmZqc.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BdKgywzy.js";import"./mergeRefs-HXCFtCCZ.js";import"./index-B0CJcMgs.js";import"./FieldError-CUzLiqhG.js";import"./IconWarning-DczNnEus.js";import"./FieldError-Db2L6cd5.js";import"./utils-DolbARJ8.js";import"./Text-Mnh5Jpbt.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-BiEejQvJ.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-Ct3mx8TB.js";import"./Form-BPrp3nIT.js";import"./useFocus-B_Alw_Kd.js";import"./useLabel-Cu4D06kD.js";import"./Label-BzU31htm.js";import"./Hidden-CCSOhlCd.js";import"./useFormReset-E2HVy4kF.js";import"./usePress-By95yFbD.js";import"./useFocusRing-BklgwE0b.js";import"./useFocusable-DI6rxpio.js";import"./FocusScope-DSxBaVHz.js";import"./context-OLvSZRNo.js";import"./VisuallyHidden-oOW_UkZ8.js";import"./useControlledState-L5KsJeFF.js";import"./Label-BH61eOAw.js";import"./useLocalizedStringFormatter-BRqbPR-6.js";import"./browser-DlHr08AR.js";import"./EmulatedBoldText-YiQdYmo2.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

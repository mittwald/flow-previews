import{j as r}from"./iframe-Czve8Ng1.js";import{R as p,b as l,a as g}from"./RadioButton-CWkqvKFO.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-Cf0YSqC3.js";import{T as y}from"./Text-CMgn7hJq.js";import{C as T}from"./Content-QknjP4JI.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DLHfSyo1.js";import"./mergeRefs-BkScJl_E.js";import"./index-SeEX-dzh.js";import"./FieldError-JfKFDbH2.js";import"./IconWarning-YJtY_uKm.js";import"./FieldError-CNai_82t.js";import"./utils-C85tsJLi.js";import"./Text-xUaxq5aV.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-eTrEY9Hp.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-DW7aFWwg.js";import"./Form-B2b0RBd7.js";import"./useFocus-DLNoddQ5.js";import"./useLabel-BFN45BzM.js";import"./Label-BfVvFZj4.js";import"./Hidden-B3217TUg.js";import"./useFormReset-BM4kigyU.js";import"./usePress-8K4_ozuW.js";import"./useFocusRing-Bu3hVrpu.js";import"./useFocusable-DPi5-Rks.js";import"./FocusScope-Cg_D6BEH.js";import"./context-D03EQw3p.js";import"./VisuallyHidden-DTvv8wPC.js";import"./useControlledState-BeXkP8kb.js";import"./Label-FUFGZTqe.js";import"./useLocalizedStringFormatter-uQUw7qmu.js";import"./browser-C659BIXC.js";import"./EmulatedBoldText-CYlQsTFY.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

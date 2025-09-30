import{j as r}from"./iframe-Cb4Rgx0e.js";import{R as l,b as p,a as g}from"./RadioButton-BOR18j7p.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-DTgJutrQ.js";import{T as y}from"./Text-B7bLqwrq.js";import{C as T}from"./Content-B6MoTXef.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CbnVRX13.js";import"./mergeRefs-FGc6ILVF.js";import"./index-BCJuwVXE.js";import"./FieldError-BQp9Q2iV.js";import"./IconWarning-BnvsEgCq.js";import"./FieldError-BgWprM1s.js";import"./utils-ClJ9kHS9.js";import"./Text-U_OSpJmR.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-CXX9uWRl.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-CX3xZc8G.js";import"./Form-Bg0W0weo.js";import"./useLabel-YUMynDBh.js";import"./Label-BSwFIexW.js";import"./Hidden-WIE7yK1s.js";import"./useFormValidation-CF7ZQkcY.js";import"./useFocus-DShqRyJ9.js";import"./useControlledState-CQK5P4gM.js";import"./FocusScope-soGnmPtw.js";import"./useFocusRing-BzqCweW_.js";import"./context-CW2oe5vS.js";import"./useFormReset-XDrOOyWm.js";import"./usePress-Q8MCvqvF.js";import"./useFocusable-Dx7vOlYc.js";import"./VisuallyHidden-CjQvb6dT.js";import"./Label-BaR_Jp0n.js";import"./useLocalizedStringFormatter-DhwOH6Jh.js";import"./browser-GZXaf9ZM.js";import"./EmulatedBoldText-BOxB1C6V.js";const pr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(l,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(b=(f=m.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const lr=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,lr as __namedExportsOrder,pr as default};

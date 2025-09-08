import{j as r}from"./iframe-DIlFkKfe.js";import{R as p,b as l,a as g}from"./RadioButton-KxNC_6A-.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-HlM97vu-.js";import{T as y}from"./Text-CG4Ucl9p.js";import{C as T}from"./Content-dOdSOWFt.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DpgT95xr.js";import"./mergeRefs-TbbaDpSF.js";import"./index-DOnHcB6O.js";import"./FieldError-D7S_o8t1.js";import"./IconWarning-BS6-kuBv.js";import"./FieldError-5aNzky8T.js";import"./utils-E_0WoXkF.js";import"./Text-DuUlrCBa.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-CkXU1CDW.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-B4qkG6cH.js";import"./Form-HyfIN8sB.js";import"./useFocus-CiEitWNM.js";import"./useLabel-BtXixU_d.js";import"./Label-op2mctQl.js";import"./Hidden-b1169DFL.js";import"./useFormReset-BM0i_QS2.js";import"./usePress-D9JeOi6r.js";import"./useFocusRing-VlAoxJyj.js";import"./useFocusable-BKL1JWl8.js";import"./FocusScope-C9n1sP7L.js";import"./context-BIl-kujG.js";import"./VisuallyHidden-DzVxkJhT.js";import"./useControlledState-CWVlWyPG.js";import"./Label-BSjWh_q0.js";import"./useLocalizedStringFormatter-C2YSpIsm.js";import"./browser-CN7RW_LC.js";import"./EmulatedBoldText-hH9OpyJt.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

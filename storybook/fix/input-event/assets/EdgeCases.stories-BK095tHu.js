import{j as r}from"./iframe-D5sJq8Pp.js";import{R as p,b as l,a as g}from"./RadioButton-Dj8QDWim.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-B8RUkYdQ.js";import{T as y}from"./Text-DSs6zbpd.js";import{C as T}from"./Content-BXtwV300.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Bv9cfvHt.js";import"./mergeRefs-9yWIebUE.js";import"./index-Cm1M_r0i.js";import"./FieldError-C_BRxZGF.js";import"./IconWarning-DOhF27zV.js";import"./FieldError-DPBRE9in.js";import"./utils-9AX_qn18.js";import"./Text-DkuK7F_5.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-B-dEgkrD.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-BFS33H4j.js";import"./Form-B6p3srko.js";import"./useFocus-RhB9nR94.js";import"./useLabel-Ch8Q4uqY.js";import"./Label-CqbD1Z1V.js";import"./Hidden-DQQQbJzb.js";import"./useFormReset-BYD-PEh4.js";import"./usePress-DXXMSHM3.js";import"./useFocusRing-DOEM_U6y.js";import"./useFocusable-DeL6Y164.js";import"./FocusScope-Rm6rMrw2.js";import"./context-C2iapZe2.js";import"./VisuallyHidden-BeWBbeMu.js";import"./useControlledState-BiqnvFAK.js";import"./Label-C9pkE3_l.js";import"./useLocalizedStringFormatter-BQN07ymD.js";import"./browser-Um_OLCfa.js";import"./EmulatedBoldText-DJswokg6.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

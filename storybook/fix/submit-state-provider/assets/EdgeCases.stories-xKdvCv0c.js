import{j as r}from"./iframe-Dg6UnhUn.js";import{R as p,b as l,a as g}from"./RadioButton-Ktk92Qxp.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-DIKl4y25.js";import{T as y}from"./Text-Da0TnBkn.js";import{C as T}from"./Content-CqWbGU23.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BmLe5W9r.js";import"./mergeRefs-C_sTBRSK.js";import"./index-Bnuwx5Sl.js";import"./FieldError-DgATZJMg.js";import"./IconWarning-CALSlVTn.js";import"./FieldError-CQt-JA7i.js";import"./utils-CHKT5qD6.js";import"./Text-5OPT84ek.js";import"./filterDOMProps-CeZl_uWj.js";import"./ColumnLayout-DK3bflwx.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-D4UEgrb_.js";import"./Form-Dab95gIe.js";import"./useFocus-DIqzHvRL.js";import"./useLabel-CSavvckB.js";import"./Label-CLbvuqlx.js";import"./Hidden-D5q0FBhK.js";import"./useFormReset-B8_ofs8-.js";import"./usePress-DRsXmFdU.js";import"./useFocusRing-CS-ydpKu.js";import"./useFocusable-ByYZ8WRR.js";import"./FocusScope-DgFR_sU-.js";import"./context-Ddln_640.js";import"./VisuallyHidden-BBKGK1WU.js";import"./useControlledState-BEdG5TcY.js";import"./Label-CHnnbTob.js";import"./useLocalizedStringFormatter-CYRoP_gw.js";import"./browser-BdsZB4yy.js";import"./EmulatedBoldText-BNa7EikO.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

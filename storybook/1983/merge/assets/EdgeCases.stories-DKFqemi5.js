import{j as r}from"./iframe-DUtcAVii.js";import{R as p,b as l,a as g}from"./RadioButton-DTXLKsSt.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-WKI5P_qv.js";import{T as y}from"./Text-CIiZgPf0.js";import{C as T}from"./Content-BIJjwH4a.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CwzFOg6G.js";import"./mergeRefs-DwJumFt0.js";import"./index-CKYZupSE.js";import"./FieldError-CldLJigO.js";import"./IconWarning-BDc9REUs.js";import"./FieldError-B_KU3Njk.js";import"./utils-BJK0bMVs.js";import"./Text-DD2-gbIJ.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-CJEd6N-A.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-B8LvSj6x.js";import"./Form-pelauJUP.js";import"./useFocus-BBGclxaJ.js";import"./useLabel-DY6IDqCz.js";import"./Label-Cx6s_AVf.js";import"./Hidden-nF8inpoX.js";import"./useFormReset-CnZg8poR.js";import"./usePress-DbIX1hOn.js";import"./useFocusRing-4VM8yV9h.js";import"./useFocusable-B2RmLQJm.js";import"./FocusScope-Bx_BpPkG.js";import"./context-DAjKPHt4.js";import"./VisuallyHidden-CsqdnZMW.js";import"./useControlledState-G4tJUSCb.js";import"./Label-D2FAkV6T.js";import"./useLocalizedStringFormatter-D3e_UDLJ.js";import"./browser-TyqKNGpG.js";import"./EmulatedBoldText-DtNQdD50.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

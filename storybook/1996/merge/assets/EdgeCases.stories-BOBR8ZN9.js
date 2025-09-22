import{j as r}from"./iframe-D6MXtoeF.js";import{R as p,b as l,a as g}from"./RadioButton-D5eq9nsw.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-Ds3JTqR-.js";import{T as y}from"./Text-BFMh0nyW.js";import{C as T}from"./Content-Tgu6re9P.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DKdwmELu.js";import"./mergeRefs-DOKhc8cj.js";import"./index-fKpd1sOg.js";import"./FieldError-y6YOgSXV.js";import"./IconWarning-BzCByWga.js";import"./FieldError-DNUFoHGF.js";import"./utils-B7M3k9FN.js";import"./Text-X88WQLD_.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-97y4G_vQ.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-DwH6Be9g.js";import"./Form-DWnjCikM.js";import"./useFocus-DFkM6utj.js";import"./useLabel-D8eXzRI6.js";import"./Label-BFW3y9SA.js";import"./Hidden-Cmo_PwmO.js";import"./useFormReset-a1QiC8fx.js";import"./usePress-Ct6Wvp4V.js";import"./useFocusRing-DiO0sb-8.js";import"./useFocusable-mpne-nRN.js";import"./FocusScope-NXX1qwdY.js";import"./context-Ck2zuvqd.js";import"./VisuallyHidden-B-VJ1Jd7.js";import"./useControlledState-CXEx0L1H.js";import"./Label-DskNCC55.js";import"./useLocalizedStringFormatter-lfwtdpdt.js";import"./browser-B8Nd9l3q.js";import"./EmulatedBoldText-238cra3f.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

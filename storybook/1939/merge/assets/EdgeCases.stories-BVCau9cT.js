import{j as r}from"./iframe-BmZalVao.js";import{R as p,b as l,a as g}from"./RadioButton-CjV4wSmm.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-CYNRYyHY.js";import{T as y}from"./Text-1n2lmTX2.js";import{C as T}from"./Content-BaCYY0jd.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-OSTZh0lU.js";import"./mergeRefs-CtwPOjS1.js";import"./index-srGqJPqU.js";import"./FieldError-bqAUw6AE.js";import"./IconWarning-Uta2YDJP.js";import"./FieldError-Bd-ukmcE.js";import"./utils-CAvZ88A2.js";import"./Text-fNTtgWDx.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-v9sMRu8A.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-BQedGSvx.js";import"./Form-B9rSyzAs.js";import"./useFocus-CJp-zb5k.js";import"./useLabel-Dcdc4QL3.js";import"./Label-BMWYWyxm.js";import"./Hidden-CVk6dJGe.js";import"./useFormReset-BvOmhq3S.js";import"./usePress-ceZxyZeS.js";import"./useFocusRing-DYr6CdEu.js";import"./useFocusable-RaDIdBmD.js";import"./FocusScope-H3r5uJpM.js";import"./context-CHBdcuz4.js";import"./VisuallyHidden-CzhjBb86.js";import"./useControlledState-DkevdXcu.js";import"./Label-Cd70f9RY.js";import"./useLocalizedStringFormatter-D1wGXel8.js";import"./browser-DJMeickF.js";import"./EmulatedBoldText-BKXMjbmY.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

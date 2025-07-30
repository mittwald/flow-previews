import{j as r}from"./iframe-Dx9XfaX_.js";import{R as p,b as l,a as g}from"./RadioButton-Dq89E0Hu.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-DeukZbCf.js";import{T as y}from"./Text-DiCJ_7I6.js";import{C as T}from"./Content-TZFEZRb-.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DO4Dnyvq.js";import"./mergeRefs-Do6vvZAc.js";import"./index-BXqdq2Ma.js";import"./FieldError-BkrOXECC.js";import"./IconWarning-BYDskjWX.js";import"./FieldError-DljPEn2l.js";import"./utils-CRV-JyXd.js";import"./Text-8Az0PCun.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-DXiXJ5ZI.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-DQX2jcI9.js";import"./Form-DItLtMsi.js";import"./useFocus-5jQbhqKe.js";import"./useLabel-B5pgN2NU.js";import"./Label-DwfrzMrM.js";import"./Hidden-Cf6kyMxF.js";import"./useFormReset-CJtNuDui.js";import"./usePress-CA1KERpG.js";import"./useFocusRing-Dq63eQZe.js";import"./useFocusable-B_6jRB6i.js";import"./FocusScope-eWFX0WV3.js";import"./context-CaqfYy9P.js";import"./VisuallyHidden-BktHc-NH.js";import"./useControlledState-B-pjTNcE.js";import"./Label-BC2AwvSS.js";import"./useLocalizedStringFormatter-DXL8o4sQ.js";import"./browser-vROwQYx1.js";import"./EmulatedBoldText-Bd1dp7Af.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

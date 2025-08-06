import{j as r}from"./iframe-BrFbgMdZ.js";import{R as p,b as l,a as g}from"./RadioButton-DYDfbcA7.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-CHAN57bs.js";import{T as y}from"./Text-C3YpUANr.js";import{C as T}from"./Content-D2cCCLJ6.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DlKSdUnj.js";import"./mergeRefs-CglpECzs.js";import"./index-CsZHFADM.js";import"./FieldError-BCnk_DY_.js";import"./IconWarning-aBCbZP3e.js";import"./FieldError-DSdi5gGz.js";import"./utils-uGt6lEHy.js";import"./Text-B3veiim8.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-DMmP5RJk.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-BAFq_LPW.js";import"./Form-DphLKB0O.js";import"./useFocus-D9Wd5vZ-.js";import"./useLabel-BY-hcXqn.js";import"./Label-Dtl4zIvG.js";import"./Hidden-UstvKMMQ.js";import"./useFormReset-UpbI-Wf0.js";import"./usePress-IpqNhXgC.js";import"./useFocusRing-Dpc6yEcL.js";import"./useFocusable-BzJo03Xl.js";import"./FocusScope-ksb906db.js";import"./context-B0-ElNi2.js";import"./VisuallyHidden-BzneT5H9.js";import"./useControlledState-n0b34ryi.js";import"./Label-BdYHzXib.js";import"./useLocalizedStringFormatter-BeYnnAMh.js";import"./browser-BeJxvhux.js";import"./EmulatedBoldText-CmWQu6L0.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

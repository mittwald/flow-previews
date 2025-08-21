import{j as r}from"./iframe-BvdD6qXg.js";import{R as p,b as l,a as g}from"./RadioButton-Bq-E54ia.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-B-cU6zp1.js";import{T as y}from"./Text-CCdgZxrm.js";import{C as T}from"./Content-DEuFI4xN.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BF7i2FhK.js";import"./mergeRefs-Dnf-Pw23.js";import"./index-DnH4257v.js";import"./FieldError-BU8vkL3I.js";import"./IconWarning-BNkxb_83.js";import"./FieldError-BhEhBaOS.js";import"./utils-DLyEFlgv.js";import"./Text-D84jcunx.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-DFVkeT-F.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-C47MlVRn.js";import"./Form-BShbB3hD.js";import"./useFocus-ByAGBV0g.js";import"./useLabel-qrx4I7MD.js";import"./Label-BA_GTzaI.js";import"./Hidden-DJ1F2YbP.js";import"./useFormReset-yMYSmHMi.js";import"./usePress-2QIW6EnW.js";import"./useFocusRing-CImSweUq.js";import"./useFocusable-0-dkSgyo.js";import"./FocusScope-D2M4fWVA.js";import"./context-CM85t4Ux.js";import"./VisuallyHidden-GD1ZdHbS.js";import"./useControlledState-9GcYGGux.js";import"./Label-BnuyVShl.js";import"./useLocalizedStringFormatter-CRa4f4Ro.js";import"./browser-D0kBFYzL.js";import"./EmulatedBoldText-DlBeGY0R.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

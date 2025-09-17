import{j as r}from"./iframe-BmaCy5vn.js";import{R as p,b as l,a as g}from"./RadioButton-CqMEUQq7.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-BNki-XzK.js";import{T as y}from"./Text-Bb5YosKE.js";import{C as T}from"./Content-BvqHKQR2.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Cdtu9ZvQ.js";import"./mergeRefs-B-jDhE92.js";import"./index-DPf4rLTQ.js";import"./FieldError-6Obb3s6p.js";import"./IconWarning-HxJndVZz.js";import"./FieldError-DrLNSIg1.js";import"./utils-BTcDldbE.js";import"./Text-DKW9AlZS.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-DJ0gVqUA.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-Ruc_BVPp.js";import"./Form-JYTBzchK.js";import"./useFocus-eJJI3D_B.js";import"./useLabel-aIW9IeHZ.js";import"./Label-v3v2JpRx.js";import"./Hidden-DFOfTeRc.js";import"./useFormReset-BOYVXvui.js";import"./usePress-D_L0SfOg.js";import"./useFocusRing-BIF3mfAv.js";import"./useFocusable-BZM-anb5.js";import"./FocusScope-BP1WICTq.js";import"./context-D74MXKTM.js";import"./VisuallyHidden-CbssR0xZ.js";import"./useControlledState-D7fTNmKi.js";import"./Label-C9e3OZeO.js";import"./useLocalizedStringFormatter-Bee7TgYK.js";import"./browser-CHe_8eCl.js";import"./EmulatedBoldText-6eMdCTCE.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

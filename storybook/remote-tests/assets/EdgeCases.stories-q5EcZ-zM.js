import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{R as l,a as p,b as g}from"./RadioButton-QKifVlbR.js";import"./index-CXcpQZ5J.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-Tm7HczKz.js";import{T as y}from"./Text-Dr5MNJ9m.js";import{C as T}from"./Content-D6QOl4b7.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CxhHHjOl.js";import"./index-_FZDHFZo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DJQWtO6Q.js";import"./index-sbGzhXso.js";import"./FieldError-B3rmrlTw.js";import"./IconApp-C5KCAdlI.js";import"./IconWarning-C6q-vt44.js";import"./FieldError-BGs8e4N-.js";import"./utils-D_n-6U4k.js";import"./Text-BUuVncJZ.js";import"./filterDOMProps-CeZl_uWj.js";import"./ColumnLayout-BhUO9y8z.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-BCk45fdc.js";import"./Form-czy9A9fl.js";import"./useLabel-BoT2JKOr.js";import"./Label-D7zTyyav.js";import"./Hidden-DtYLaSTT.js";import"./useFormReset-C7M_aUQL.js";import"./usePress-DKvzVrwU.js";import"./useFocus-DPMzGzIF.js";import"./useFocusRing-C5Ht9MUl.js";import"./useFocusable-C54KMRcY.js";import"./useFormValidation-xTAo0ZUA.js";import"./FocusScope-ienAdI6u.js";import"./useLocalizedStringFormatter-BQtswni5.js";import"./VisuallyHidden-nUs_Pnf6.js";import"./useControlledState-CHe-wEx1.js";import"./Label-BlFJqu_U.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-BPJW4PHD.js";import"./Wrap-DQq6jo70.js";const ur={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,o)=>r.jsxs(g,{value:o.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,o)=>r.jsxs(g,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(b=(f=m.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const cr=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,cr as __namedExportsOrder,ur as default};

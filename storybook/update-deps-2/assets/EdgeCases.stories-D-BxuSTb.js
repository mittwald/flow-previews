import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{R as l,b as p,a as g}from"./RadioButton-DdvTuuw8.js";import"./index-CgfFrydU.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-DZGySZoZ.js";import{T as y}from"./Text-DAta9oPQ.js";import{C as T}from"./Content-DNQBRsxt.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BLvIrsPJ.js";import"./mergeRefs-CQveTfyF.js";import"./index-Brqd7pHr.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-B2KKL2uI.js";import"./FieldError-Dbc2xQBL.js";import"./IconWarning-Dhqk9c5Q.js";import"./FieldError-CYJLgZCM.js";import"./utils-D9H5ZYVa.js";import"./Text-RYc5i20l.js";import"./filterDOMProps-CeZl_uWj.js";import"./ColumnLayout-aHo_Coxh.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-TDm6HWIE.js";import"./Form-BPgN4cN5.js";import"./useLabel-CVdsQLKm.js";import"./Label-nK1nmjBx.js";import"./Hidden-DwT0szmK.js";import"./useFormReset-wPtuGCA4.js";import"./usePress--lgM-7rV.js";import"./useFocus-Dz5Sgz6F.js";import"./useFocusRing-VURPolDQ.js";import"./useFocusable-B6XldfNl.js";import"./useFormValidation-BSu4mMLa.js";import"./FocusScope-me2WFoLK.js";import"./useLocalizedStringFormatter-2OBKXYKe.js";import"./VisuallyHidden-CNMq674x.js";import"./useControlledState-YIijONQK.js";import"./Label-BnZNwGkU.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-KnQ_Srvn.js";const dr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,o)=>r.jsxs(g,{value:o.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,o)=>r.jsxs(g,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(b=(f=m.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const sr=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,sr as __namedExportsOrder,dr as default};

import{j as r}from"./iframe-4Q3VdU3W.js";import{R as l,b as p,a as g}from"./RadioButton-DBtYj9dN.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-DzrN_aif.js";import{T as y}from"./Text-Dj8BftP4.js";import{C as T}from"./Content-np4UHTj8.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CWhymxNW.js";import"./index-D-slKUrQ.js";import"./index-PS7XpSls.js";import"./FieldError-BQ2VN50e.js";import"./IconWarning-C7969b2c.js";import"./FieldError-Bmwt53NP.js";import"./utils-BDqSegOF.js";import"./Text-CbQs5VbJ.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-CHaNIhxs.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-yVzA5tdL.js";import"./RadioGroup-b3IHoRaC.js";import"./Form-CQ3IrCNT.js";import"./Label-BPYRgbkp.js";import"./Hidden-B-Sfeo6e.js";import"./useFormValidation-QKBec53c.js";import"./useFocus-B23mYmqe.js";import"./useControlledState-DDubLIo_.js";import"./FocusScope-CdBaHhXi.js";import"./useFocusRing-JPznIV6A.js";import"./context-Ctn7vzaA.js";import"./useFormReset-DJaP_Vl0.js";import"./usePress-gN-0t-oA.js";import"./useFocusable-xMViE0rI.js";import"./VisuallyHidden-Bs3ruDlE.js";import"./Label-UJpqKaML.js";import"./useLocalizedStringFormatter-BfINV5Nx.js";import"./browser-BefUj7Q1.js";import"./EmulatedBoldText-VlnzXvNR.js";const pr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(l,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(b=(f=m.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const lr=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,lr as __namedExportsOrder,pr as default};

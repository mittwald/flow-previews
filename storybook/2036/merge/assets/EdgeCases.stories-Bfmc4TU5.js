import{j as r}from"./iframe-Co5olYEg.js";import{R as l,b as p,a as g}from"./RadioButton-DJ9PcHOl.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-BVCcCGkb.js";import{T as y}from"./Text-D64yDBkh.js";import{C as T}from"./Content-_C8y9w_p.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B3fcy-aZ.js";import"./mergeRefs-DCCfFRi5.js";import"./index-dJ4wby8j.js";import"./FieldError-ozznJ0Nd.js";import"./IconWarning-Deg5RPPa.js";import"./FieldError-Clh4ku1F.js";import"./utils-CfsHCmXQ.js";import"./Text-DL7aZegp.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-E094mniZ.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-DB3B4rem.js";import"./RadioGroup-CHmIW8zv.js";import"./Form-XAAYfRmY.js";import"./Label-z037IMCX.js";import"./Hidden-DTncj6eg.js";import"./useFormValidation-CpjqECXn.js";import"./useFocus-D_PcVBPO.js";import"./useControlledState-BLXlsrOK.js";import"./FocusScope-Dnc6FNOh.js";import"./useFocusRing-CNR6shO8.js";import"./context-VmB2ki6S.js";import"./useFormReset-CgjW6y2V.js";import"./usePress-BWYiyAlu.js";import"./useFocusable-CeUOSLWr.js";import"./VisuallyHidden-CTHGVqVW.js";import"./Label-BiorYBBr.js";import"./useLocalizedStringFormatter-CMxRm_Et.js";import"./browser-Lvchr8XH.js";import"./EmulatedBoldText-m8x9dOVA.js";const pr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(l,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

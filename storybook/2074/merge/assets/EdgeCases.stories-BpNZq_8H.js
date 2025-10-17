import{j as r}from"./iframe-CTxtjXon.js";import{R as l,b as p,a as g}from"./RadioButton-imN81zAI.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-BXI8NTQL.js";import{T as y}from"./Text-DQcec0AG.js";import{C as T}from"./Content-BiHEAKSe.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Cceoz8ap.js";import"./index-BzGnAInb.js";import"./index-BCkzqzEU.js";import"./FieldError-yMhB6vk6.js";import"./IconWarning-BCagwmXL.js";import"./FieldError-DPTagllN.js";import"./utils-Dyxd3-sq.js";import"./Text-DVSB2R1T.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-fRq8lLCW.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-CHy9hJsR.js";import"./RadioGroup-BoOSe6SJ.js";import"./Form-aYocGFK9.js";import"./Label-JOCFYh16.js";import"./Hidden-B6GGwvwy.js";import"./SelectionIndicator-DjYZoC83.js";import"./useFormValidation-PRBMAw7o.js";import"./useFocus-DHjekZqL.js";import"./useControlledState-CwLLr83F.js";import"./FocusScope-BV_8rP7c.js";import"./useFocusRing-w77Sy5gu.js";import"./context-OuuPOLWB.js";import"./useFormReset-dEYYJoAx.js";import"./usePress-7iMHywUA.js";import"./useFocusable-C9nsuFPZ.js";import"./VisuallyHidden-CZsUJsM2.js";import"./Label-DtGgIyZp.js";import"./useLocalizedStringFormatter-B51ecTCL.js";import"./browser-B97evyF-.js";import"./EmulatedBoldText-Da4iAST0.js";const lr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(l,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(b=(f=m.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const nr=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,nr as __namedExportsOrder,lr as default};

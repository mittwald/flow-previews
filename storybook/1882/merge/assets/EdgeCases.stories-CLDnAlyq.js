import{j as r}from"./iframe-ChOLfm48.js";import{R as p,b as l,a as g}from"./RadioButton-Cl6wPJ0l.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-Bki9QUWa.js";import{T as y}from"./Text-C5EipuV_.js";import{C as T}from"./Content-DxYLl_M6.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-bWieavHe.js";import"./mergeRefs-B21zPNPU.js";import"./index-GRCPXwug.js";import"./FieldError-CTDQW1k7.js";import"./IconWarning-BSUZvRGT.js";import"./FieldError-JlwACqz9.js";import"./utils-YDvgcPpP.js";import"./Text-Sl4cdtSO.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-B2oHrW-X.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-CxydPjwd.js";import"./Form-CA_oHzJs.js";import"./useFocus-DMe4XyoT.js";import"./useLabel-CsHZNL1P.js";import"./Label-DXrtAbBw.js";import"./Hidden-DmBctQal.js";import"./useFormReset-2KspnF8x.js";import"./usePress-CNl9HBfO.js";import"./useFocusRing-DPdWCN0f.js";import"./useFocusable-B1fc-Qnz.js";import"./FocusScope-DwqEaNE4.js";import"./context-DA6DtsVb.js";import"./VisuallyHidden-eytsr0lz.js";import"./useControlledState-Dmz-xjYt.js";import"./Label-BjFpMJsX.js";import"./useLocalizedStringFormatter-k197sm3v.js";import"./browser-DWi47IAH.js";import"./EmulatedBoldText-DdFIKcy_.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

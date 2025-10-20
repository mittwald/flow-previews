import{j as r}from"./iframe-CwuqIU3i.js";import{R as l,b as p,a as g}from"./RadioButton-DVk2IWTG.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-Bil39v2M.js";import{T as y}from"./Text-Dbs8GmZM.js";import{C as T}from"./Content-Dx_AziB_.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CW5hnf4o.js";import"./index-DCuX0QuH.js";import"./index-DdRMNQVP.js";import"./ColumnLayout--p4SGV_7.js";import"./useFieldComponent-eP2W8yne.js";import"./utils-BNUN6Z86.js";import"./Text-WRK6H0Wn.js";import"./filterDOMProps-CghfNOdR.js";import"./IconWarning-DfuZN-Hc.js";import"./react-children-utilities-BfKePjVo.js";import"./ClearPropsContext-DGTEyAkG.js";import"./useMakeFocusable-ChwytvWt.js";import"./RadioGroup-C3J8MfJX.js";import"./Form-C1wZYKgN.js";import"./Label-Ds7Yihzi.js";import"./Hidden-AzgHkXqa.js";import"./SelectionIndicator-pORsGxIs.js";import"./useFormValidation-DK6PIssV.js";import"./useFocus-JEz06IDi.js";import"./useControlledState-B3_Egg2G.js";import"./FocusScope-AJCIL371.js";import"./useFocusRing-Csjn1IfN.js";import"./context-Cr--o0Ww.js";import"./useFormReset-BLDFw02N.js";import"./usePress-CdaIPuHn.js";import"./useFocusable-CYb_RHOH.js";import"./VisuallyHidden-DO5WoARG.js";import"./Label-B0BiyK3O.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CenpEZM_.js";import"./browser-DUGYsxZ_.js";import"./EmulatedBoldText-DuSj7T8w.js";const nr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,o)=>r.jsxs(g,{value:o.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,o)=>r.jsxs(g,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(b=(f=m.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const dr=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,dr as __namedExportsOrder,nr as default};

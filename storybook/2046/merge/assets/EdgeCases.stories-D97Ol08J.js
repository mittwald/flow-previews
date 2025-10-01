import{j as r}from"./iframe-8Gn-cQAI.js";import{R as l,b as p,a as g}from"./RadioButton-DbGzlqcJ.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-Cr2mhS10.js";import{T as y}from"./Text-CaltWpnJ.js";import{C as T}from"./Content-CapX42MI.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DkmU8bZi.js";import"./index-AzFL6bUY.js";import"./index-UEc6MpK_.js";import"./FieldError-C-zSllwf.js";import"./IconWarning-D4orWaCC.js";import"./FieldError-BP_wpITZ.js";import"./utils-GVjct8zS.js";import"./Text-YtT3E9ZO.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-DWYRY5Co.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-DzdpYT79.js";import"./RadioGroup-BuVGIRWp.js";import"./Form-uqEItuxM.js";import"./Label-BTym8jb9.js";import"./Hidden-ClnO7J5u.js";import"./useFormValidation-CDT2yp15.js";import"./useFocus-B0X0Lu9Z.js";import"./useControlledState-CowCOuKH.js";import"./FocusScope-CFCh8ZEd.js";import"./useFocusRing-CitWdiPC.js";import"./context-BNiVp3am.js";import"./useFormReset-EWszKDPA.js";import"./usePress-ITUQCIPr.js";import"./useFocusable-D0eqHiUC.js";import"./VisuallyHidden-hAbnP3vK.js";import"./Label-BKQD2yp-.js";import"./useLocalizedStringFormatter-Bkj0giXD.js";import"./browser-BcQIid3c.js";import"./EmulatedBoldText-BFjU3iq0.js";const pr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(l,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

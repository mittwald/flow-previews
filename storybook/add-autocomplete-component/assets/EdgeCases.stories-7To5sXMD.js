import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{R as l,a as p,b as g}from"./RadioButton-CA472lCe.js";import"./index-BZISi7jw.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-CTrnSHFH.js";import{T as y}from"./Text-0kfk3I9S.js";import{C as T}from"./Content-Dcl2F0_Z.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B-ghCXY_.js";import"./index-BBXbSWyk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-C0qn59OO.js";import"./index-IBhSrjl6.js";import"./FieldError-CQ9RqGuN.js";import"./IconApp-vAs-LrT2.js";import"./IconWarning-DIwIHW1V.js";import"./Form-CFR8hFHG.js";import"./useFocusRing-DzGSygZM.js";import"./useLabel-Hju3pN3c.js";import"./utils-CoJ4Pv5P.js";import"./Text-CZDyhmV-.js";import"./filterDOMProps-CeZl_uWj.js";import"./ColumnLayout-D2F09HUz.js";import"./RadioGroup-Cm0VV1L4.js";import"./Label-CogRznyR.js";import"./Hidden-DBxI3g91.js";import"./useFormReset-CilIRCFg.js";import"./useFocusable-BAuzoEaO.js";import"./usePress-BZLMvQVL.js";import"./FocusScope-BnLtY9jQ.js";import"./useLocalizedStringFormatter-D6AjEcek.js";import"./VisuallyHidden-DJvehTyr.js";import"./useControlledState-4nfZ-XMX.js";import"./Label-vcyG9Kja.js";import"./chunk-D5ZWXAHU-Dm3eDOzv.js";import"./v4-CtRu48qb.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-BfYT5ZHF.js";import"./Wrap-DQq6jo70.js";const lr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(l,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

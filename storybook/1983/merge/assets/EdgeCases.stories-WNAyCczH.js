import{j as r}from"./iframe-C41GO6P6.js";import{R as p,b as l,a as g}from"./RadioButton-hwZJjYmj.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-XkKbumUo.js";import{T as y}from"./Text-BYSgteT5.js";import{C as T}from"./Content-B8Zf4MoW.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BlE6VFtE.js";import"./mergeRefs-Hgr2X06A.js";import"./index-D__hiUrI.js";import"./FieldError-DxG-LHoh.js";import"./IconWarning-C5RwbqDR.js";import"./FieldError-qUs-TTn2.js";import"./utils-Be5F4DcQ.js";import"./Text-Bnb73OL0.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-C3s3h48f.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-BwoBvSO5.js";import"./Form-DZUJdQjd.js";import"./useFocus-CcyM5uvG.js";import"./useLabel--RfYT5XW.js";import"./Label-I71uq1jB.js";import"./Hidden-COug4O8x.js";import"./useFormReset-DAlqRR2j.js";import"./usePress-DSqdD5KI.js";import"./useFocusRing-DXsfSaAZ.js";import"./useFocusable-DyjaqCu5.js";import"./FocusScope-V0DR1oSw.js";import"./context-Om8YW_Qo.js";import"./VisuallyHidden-D1Yd7fBj.js";import"./useControlledState-D2xxPiTl.js";import"./Label-BmUyaMI1.js";import"./useLocalizedStringFormatter-DK3NG-Ma.js";import"./browser-DspoMTVt.js";import"./EmulatedBoldText-CJIUXOgz.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

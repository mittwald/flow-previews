import{j as r}from"./iframe-QYa5fCvd.js";import{R as p,b as l,a as g}from"./RadioButton-DuRyr-7S.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-B6Xeonqy.js";import{T as y}from"./Text-D98HT4db.js";import{C as T}from"./Content-Dn1AUb70.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DqxlNqTv.js";import"./mergeRefs-CbLIukJ0.js";import"./index-Dd17el8U.js";import"./FieldError-DIhpKsfz.js";import"./IconWarning-DEqdDiS_.js";import"./FieldError-BGtuYqZa.js";import"./utils-lb8KrrIv.js";import"./Text-BD3o8xQb.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-Clf84fV1.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-CN06arS6.js";import"./Form-BOiG0M1T.js";import"./useFocus-D2QZKYlR.js";import"./useLabel-DR9sPTrv.js";import"./Label-fRERrzCf.js";import"./Hidden-Py6KbP61.js";import"./useControlledState-Bu1M14oY.js";import"./FocusScope-ByQquqFt.js";import"./useFocusRing-sLc_Aawe.js";import"./context-BsMul4n4.js";import"./useFormReset-DzIk_Opn.js";import"./usePress-BKI1i-pB.js";import"./useFocusable-DEca05gc.js";import"./VisuallyHidden-B3sifiz6.js";import"./Label-REb55_aV.js";import"./useLocalizedStringFormatter-CfiFtED0.js";import"./browser-BNaQCdYt.js";import"./EmulatedBoldText-BuggfMa1.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

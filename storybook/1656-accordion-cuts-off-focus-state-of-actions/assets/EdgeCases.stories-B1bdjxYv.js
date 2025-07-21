import{j as r}from"./iframe-B5D6Jy2e.js";import{R as p,b as l,a as g}from"./RadioButton-q_PCt1Mn.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-DBqRTuAn.js";import{T as y}from"./Text-Fuh2Ogih.js";import{C as T}from"./Content-CjHdYotV.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CnEOAU2e.js";import"./mergeRefs-C6bCzzs4.js";import"./index-98juzA4z.js";import"./FieldError-BGY0RJ8v.js";import"./IconWarning-DjYRPplk.js";import"./FieldError-DXJUVvju.js";import"./utils-Bs8Wqn-q.js";import"./Text-Bv7a287p.js";import"./filterDOMProps-CeZl_uWj.js";import"./ColumnLayout-BKtKcuzY.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-BTXNohLC.js";import"./Form-DGtlbNAt.js";import"./useFocus-CkjZAdJ6.js";import"./useLabel-DkjeIhDx.js";import"./Label-36rBC0g7.js";import"./Hidden-C8fkQIAB.js";import"./useFormReset-CFSg60RK.js";import"./usePress-CBvAjfyN.js";import"./useFocusRing-SK3yyEZg.js";import"./useFocusable-D_QF0Scb.js";import"./FocusScope-BljfDlo2.js";import"./context-Bj-w4NoV.js";import"./VisuallyHidden-1pt6eLog.js";import"./useControlledState-Yj7M3RjN.js";import"./Label-C5afoFui.js";import"./useLocalizedStringFormatter-BQI7yYKW.js";import"./browser-C-lA9C9Q.js";import"./EmulatedBoldText-bgj99tWG.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

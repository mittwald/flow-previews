import{j as r}from"./iframe-CwjVVvSu.js";import{R as l,b as p,a as g}from"./RadioButton--EdobVPG.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-JWOw6gJd.js";import{T as y}from"./Text-BOmlTVxc.js";import{C as T}from"./Content-CIaVmOJa.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CL0EVs0o.js";import"./index-CVGQdXYt.js";import"./index-Bxp7_DVb.js";import"./FieldError-XyqikU8N.js";import"./IconWarning-B6H6J5Pk.js";import"./FieldError-C3URs1EZ.js";import"./utils-OpG5u5ZF.js";import"./Text-lT5rhDYZ.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-CNSiw8_3.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-CgSnmY1U.js";import"./RadioGroup-911SJWon.js";import"./Form-BBcAxf0K.js";import"./Label-BELpmtJQ.js";import"./Hidden-BrRDJs-s.js";import"./useFormValidation-Z5AW4dUj.js";import"./useFocus-YxLRULIL.js";import"./useControlledState-3R78iQB5.js";import"./FocusScope-3UfsOkyw.js";import"./useFocusRing-DVoBnH5y.js";import"./context-YbH8ssAd.js";import"./useFormReset-BtU7PEqW.js";import"./usePress-CTJZYj-E.js";import"./useFocusable-CooOyqEQ.js";import"./VisuallyHidden-DYp4WZRH.js";import"./Label-CmvTTYLZ.js";import"./useLocalizedStringFormatter-BEI6070A.js";import"./browser-DnOs_TEg.js";import"./EmulatedBoldText-pbz3Nf-x.js";const pr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(l,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

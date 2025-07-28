import{j as r}from"./iframe-CXqVlE5o.js";import{R as p,b as l,a as g}from"./RadioButton-NVS4yU_E.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-BImH5qy5.js";import{T as y}from"./Text-CH29UKf3.js";import{C as T}from"./Content-DJ1EaDcX.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-NXXeTbsd.js";import"./mergeRefs-DQ42lkDZ.js";import"./index-ClGSVCJF.js";import"./FieldError-ClDhNlNJ.js";import"./IconWarning-DQKg17Kq.js";import"./FieldError-CFZuL0-a.js";import"./utils-DhntlPo5.js";import"./Text-Bve5DhhS.js";import"./filterDOMProps-CeZl_uWj.js";import"./ColumnLayout-x7PYjfRP.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-BnuBeRgh.js";import"./Form-WS4i-nO-.js";import"./useFocus-GvwPC70C.js";import"./useLabel-BoMX0OaP.js";import"./Label-CEgZ5zSu.js";import"./Hidden-DGVcGJhp.js";import"./useFormReset-BNnepUUT.js";import"./usePress-BIfqd23k.js";import"./useFocusRing-B7D_5WWT.js";import"./useFocusable-Be_5Opbr.js";import"./FocusScope-BugPP909.js";import"./context-b4vYPaxO.js";import"./VisuallyHidden-CCMgatrd.js";import"./useControlledState-CFQ9Vv_1.js";import"./Label-CVPCngVS.js";import"./useLocalizedStringFormatter-CWaF9vId.js";import"./browser-C-6Px3BF.js";import"./EmulatedBoldText-sAcZVeZh.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

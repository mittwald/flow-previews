import{j as r}from"./iframe-CSKx2DB9.js";import{R as p,b as l,a as g}from"./RadioButton-Dd2jiqnh.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-BotAcL8J.js";import{T as y}from"./Text-Bmwkohav.js";import{C as T}from"./Content-BSGTrznJ.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-C0bkGgAw.js";import"./mergeRefs-B1bHS3Lu.js";import"./index-CZyLPT9E.js";import"./FieldError-CbU9JYnr.js";import"./IconWarning-BzSjyCQK.js";import"./FieldError-BRs7GrZl.js";import"./utils-YOZNNe11.js";import"./Text-B7qxA7QU.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-DDAMKnuI.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-DyewBsgT.js";import"./Form-BMsmelnL.js";import"./useFocus-I-Zr9gNg.js";import"./useLabel-_rV78s5e.js";import"./Label-DAbN940v.js";import"./Hidden-DMi08SHV.js";import"./useFormReset-BnPXW2IT.js";import"./usePress-ecHooUdc.js";import"./useFocusRing-BU-rqxqA.js";import"./useFocusable-Bvlvgb30.js";import"./FocusScope-CQRCLCh1.js";import"./context-Bn01uWj8.js";import"./VisuallyHidden-BzxCqTVo.js";import"./useControlledState-C62hAHev.js";import"./Label-uvRQ_UBY.js";import"./useLocalizedStringFormatter-CVB2HXqz.js";import"./browser-Dat2Zw9G.js";import"./EmulatedBoldText-BvpVJXGr.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

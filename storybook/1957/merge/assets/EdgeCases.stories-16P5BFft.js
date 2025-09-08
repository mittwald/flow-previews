import{j as r}from"./iframe-CVONDZxG.js";import{R as p,b as l,a as g}from"./RadioButton-Cqn0P7ac.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-BL3HSij1.js";import{T as y}from"./Text-gWNENs-O.js";import{C as T}from"./Content-BRkB0x5E.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BHJ1i56Q.js";import"./mergeRefs-TXfZ5z39.js";import"./index-C4vkAaOo.js";import"./FieldError-uzL1sI7k.js";import"./IconWarning-CjssIWkt.js";import"./FieldError-D3nW9ApF.js";import"./utils-BSjfMHTl.js";import"./Text-Doa1PxMD.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-BO_xiLLW.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-BlFQdXJZ.js";import"./Form-BgCAIeRI.js";import"./useFocus-D78mW_re.js";import"./useLabel-jVeBX_ap.js";import"./Label-DJefMWg6.js";import"./Hidden-BwiNP3dS.js";import"./useFormReset-D4oFtU7p.js";import"./usePress-zhVroEZ0.js";import"./useFocusRing-B7s00iLq.js";import"./useFocusable-DkfZWGFH.js";import"./FocusScope-LX2k-wEc.js";import"./context-Bs2g7JPB.js";import"./VisuallyHidden-C8_ZT0Uw.js";import"./useControlledState-KXE4Dwqt.js";import"./Label-BrXx0WEV.js";import"./useLocalizedStringFormatter-CII2PiuM.js";import"./browser-BiAec6cY.js";import"./EmulatedBoldText-CnL_Am8U.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

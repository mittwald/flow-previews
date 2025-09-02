import{j as r}from"./iframe-cK4MHKim.js";import{R as p,b as l,a as g}from"./RadioButton-BUiR-9Yb.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-DcqLfis8.js";import{T as y}from"./Text-FUpRzF42.js";import{C as T}from"./Content-CdTrEtvW.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-OWbcmO7Y.js";import"./mergeRefs-CbouoeLx.js";import"./index-C0FnYpIX.js";import"./FieldError-lgMlex5D.js";import"./IconWarning-DC4_CpRf.js";import"./FieldError-DXq6AbFm.js";import"./utils-DNizpOE3.js";import"./Text-CdSAgC2T.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-DrUiSk4H.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-KIfpLVCK.js";import"./Form-Bkh8JfAF.js";import"./useFocus-PfRPzZF9.js";import"./useLabel-CcxHXXo7.js";import"./Label-0KSLZDSS.js";import"./Hidden-DPS3aF7x.js";import"./useFormReset-8LX1mmkH.js";import"./usePress-DxZYFGgJ.js";import"./useFocusRing-CfOQ7Cy2.js";import"./useFocusable-D26CMdgI.js";import"./FocusScope-D00_KgQG.js";import"./context-BROjSY2y.js";import"./VisuallyHidden-Bp326u91.js";import"./useControlledState-BIGan-OB.js";import"./Label-DBVrm7rf.js";import"./useLocalizedStringFormatter-yrbwHSL5.js";import"./browser-DLRwst_8.js";import"./EmulatedBoldText-DX7VDiw5.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

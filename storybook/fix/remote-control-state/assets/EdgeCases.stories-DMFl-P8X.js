import{j as r}from"./iframe-CTS_vBBR.js";import{R as p,b as l,a as g}from"./RadioButton-9WhfWOZJ.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-BIKSmNG7.js";import{T as y}from"./Text-BLj2iCUU.js";import{C as T}from"./Content-BiWbRb8w.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D42A7vMX.js";import"./mergeRefs-BwV9Bpf-.js";import"./index-CHVZ0_DR.js";import"./FieldError-B7bjxi-T.js";import"./IconWarning-fu5B3ESI.js";import"./FieldError-BrC_mw1K.js";import"./utils-jZBUW_kd.js";import"./Text-obNOHtVo.js";import"./filterDOMProps-CeZl_uWj.js";import"./ColumnLayout-DCQC6uuL.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-Byo6jrl7.js";import"./Form-CUREqm_L.js";import"./useFocus-TOgYA3QQ.js";import"./useLabel-ByTznw_u.js";import"./Label-Bn0NFPwe.js";import"./Hidden-BZmRwcL-.js";import"./useFormReset-CIT6qu5J.js";import"./usePress-Wiw2pSFm.js";import"./useFocusRing-BBi2D29q.js";import"./useFocusable-CKYlOhg9.js";import"./FocusScope-B79Zy1Lp.js";import"./context-bQBwJTVW.js";import"./VisuallyHidden-C7PlrqLT.js";import"./useControlledState-Bfc6Wiov.js";import"./Label-CTpKXefw.js";import"./useLocalizedStringFormatter-PMR3uOGp.js";import"./browser-CAp200rL.js";import"./EmulatedBoldText-1BeNjxGF.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

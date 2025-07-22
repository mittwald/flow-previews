import{j as r}from"./iframe-B7LyKmrW.js";import{R as p,b as l,a as g}from"./RadioButton-BvLEGIX6.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-gGgnM5tQ.js";import{T as y}from"./Text-DUoUD__5.js";import{C as T}from"./Content-DKvAAH_b.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BHFGowBc.js";import"./mergeRefs-DMoFTSBP.js";import"./index-DRIChXb_.js";import"./FieldError-CQSXAN4S.js";import"./IconWarning-B2C8hMVq.js";import"./FieldError-52nE40UF.js";import"./utils-C7pz24DF.js";import"./Text-54Sx_nhu.js";import"./filterDOMProps-CeZl_uWj.js";import"./ColumnLayout-CrhTJ6Pn.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-o0GOMn0C.js";import"./Form-DFMSXVCD.js";import"./useFocus-S4LYa827.js";import"./useLabel-B_uxGEkZ.js";import"./Label-DSgSzVuQ.js";import"./Hidden-DplB-rWb.js";import"./useFormReset-Cbj20zLi.js";import"./usePress-BUy08s3B.js";import"./useFocusRing-DxiExAh_.js";import"./useFocusable-UsZUFP92.js";import"./FocusScope-cqMoFFNL.js";import"./context-Bp1vmlVu.js";import"./VisuallyHidden-BpBET9_R.js";import"./useControlledState-QzhULpBn.js";import"./Label-GaOPpfpv.js";import"./useLocalizedStringFormatter-BSmgV4Fs.js";import"./browser-YA20U_IT.js";import"./EmulatedBoldText-CH7hguL6.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

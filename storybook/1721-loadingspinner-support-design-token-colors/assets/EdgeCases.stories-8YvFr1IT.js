import{j as r}from"./iframe-ZeYQaqTq.js";import{R as p,b as l,a as g}from"./RadioButton-BA3lL_vC.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-sFYPJv82.js";import{T as y}from"./Text-ADEYgpsM.js";import{C as T}from"./Content-DGVXZCl0.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DGPQbSrl.js";import"./mergeRefs-C3tFkdTs.js";import"./index-BPBZxO2T.js";import"./FieldError-DbdUr15j.js";import"./IconWarning-Mt76M62l.js";import"./FieldError-mFBw1lmq.js";import"./utils-CZSTTIRS.js";import"./Text-CTESEC7p.js";import"./filterDOMProps-CeZl_uWj.js";import"./ColumnLayout-Cve39KBe.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-BVza8DLu.js";import"./Form-MeaiSeb5.js";import"./useFocus-EvOFeEzd.js";import"./useLabel-1QKgiZqr.js";import"./Label-BCX0WWwJ.js";import"./Hidden-BCzOp-Gy.js";import"./useFormReset-DYMhoeZf.js";import"./usePress-C2f9EIPz.js";import"./useFocusRing-D3GUo_QM.js";import"./useFocusable-_P_eC141.js";import"./FocusScope-C_dTN5HC.js";import"./context-BdRPu6tD.js";import"./VisuallyHidden-CW-y3tuT.js";import"./useControlledState-fovAuXst.js";import"./Label-DaFn2Xmv.js";import"./useLocalizedStringFormatter-DqAl4YCp.js";import"./browser-BE8-G2h8.js";import"./EmulatedBoldText-CNK-5iTs.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

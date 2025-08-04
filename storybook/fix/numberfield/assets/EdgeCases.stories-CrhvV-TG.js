import{j as r}from"./iframe-CPZzz606.js";import{R as p,b as l,a as g}from"./RadioButton-KWdLlrjX.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-D_r31lhd.js";import{T as y}from"./Text-DzdHITqg.js";import{C as T}from"./Content-DoyYFKYI.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CRqwxMEv.js";import"./mergeRefs-C0rS3-iA.js";import"./index-DEYSJV5h.js";import"./FieldError-BAlZ7N7p.js";import"./IconWarning-BPgxt_jx.js";import"./FieldError-zYKEm-70.js";import"./utils-hIOiRbRa.js";import"./Text-BoUJhWX_.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-C60lDacJ.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-vvSXpux7.js";import"./Form-BILDQ_LX.js";import"./useFocus-C_gNEsKA.js";import"./useLabel-z4mqv1Jd.js";import"./Label-NfUS4-fW.js";import"./Hidden-Dc7FsRzF.js";import"./useFormReset-C84L7XAZ.js";import"./usePress-Cx1ggqha.js";import"./useFocusRing-B6XF-T5t.js";import"./useFocusable-Ci-OciRZ.js";import"./FocusScope-jLRXpVZJ.js";import"./context-CViJrtm-.js";import"./VisuallyHidden-CPq3vmdG.js";import"./useControlledState-9qfYMj22.js";import"./Label-B_64PqkQ.js";import"./useLocalizedStringFormatter-DPLafpGQ.js";import"./browser-CzF8oOuQ.js";import"./EmulatedBoldText-28L-LsQV.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

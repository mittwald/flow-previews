import{j as r}from"./iframe-p6Bp2Ow-.js";import{R as p,b as l,a as g}from"./RadioButton-BC33pcxK.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-BhCM4kXJ.js";import{T as y}from"./Text-BtmxEKoY.js";import{C as T}from"./Content-BJKPjitb.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BTW_bpGX.js";import"./mergeRefs-BhA_prJr.js";import"./index-CjBL_wgX.js";import"./FieldError-CUHeG-Uy.js";import"./IconWarning-_xRihr7t.js";import"./FieldError-Drz17t_W.js";import"./utils-CnAbB5du.js";import"./Text-Cx3sBrCD.js";import"./filterDOMProps-CeZl_uWj.js";import"./ColumnLayout-Bpk8tkMB.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-W-M4anX2.js";import"./Form-JnaaWtcr.js";import"./useFocus-DgSV50G0.js";import"./useLabel-Db1j6kak.js";import"./Label-zTn1BqTc.js";import"./Hidden-Bh_0QKLq.js";import"./useFormReset-BpxJN7m8.js";import"./usePress-Dx_e9Euk.js";import"./useFocusRing-BMw7ZmRN.js";import"./useFocusable-B_o37Ayh.js";import"./FocusScope-U7qUa4av.js";import"./context-BreHr6W7.js";import"./VisuallyHidden-DLIZ8dPS.js";import"./useControlledState-rcKaJ30A.js";import"./Label-BhgKcmWm.js";import"./useLocalizedStringFormatter-DIJ10SGn.js";import"./browser-B4AtpSGe.js";import"./EmulatedBoldText-DJP3uLZJ.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

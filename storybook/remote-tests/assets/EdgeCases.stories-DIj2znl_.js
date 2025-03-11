import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{R as l,a as p,b as g}from"./RadioButton-fNm6S0GO.js";import"./index-BZISi7jw.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-BRvDauN8.js";import{T as y}from"./Text-CiS2CEB-.js";import{C as T}from"./Content-PKkPRKcp.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BPJHi05H.js";import"./index-BBXbSWyk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-C0qn59OO.js";import"./index-DmntCNXg.js";import"./FieldError-DbNWEBso.js";import"./IconApp-W8-S6AAB.js";import"./IconWarning-BUA863Ku.js";import"./FieldError-CFxmzwuR.js";import"./useFocus-0lzzAyJ_.js";import"./utils-B8p6n-_S.js";import"./Text-CUmgXOYU.js";import"./filterDOMProps-CeZl_uWj.js";import"./ColumnLayout-BrFPtSnl.js";import"./RadioGroup-kATetHQf.js";import"./Form-CQcw_pbg.js";import"./useLabel-DjubqfyV.js";import"./Label-CRtDyyLG.js";import"./Hidden-kqRI_mPI.js";import"./useFormReset-m57alayF.js";import"./usePress-D_abas1X.js";import"./useFocusRing-C08ZnYSv.js";import"./useFocusable-dJayk3b7.js";import"./FocusScope-2Ar0PVcM.js";import"./useLocalizedStringFormatter-z2l0_8m0.js";import"./VisuallyHidden-DCnFJsId.js";import"./useControlledState-4nfZ-XMX.js";import"./Label-CzYjGm4V.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-BfYT5ZHF.js";import"./Wrap-DQq6jo70.js";const dr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,o)=>r.jsxs(g,{value:o.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,o)=>r.jsxs(g,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(b=(f=m.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const sr=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,sr as __namedExportsOrder,dr as default};

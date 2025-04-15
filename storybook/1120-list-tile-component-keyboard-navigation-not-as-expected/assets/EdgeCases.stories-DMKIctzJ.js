import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{R as l,b as p,a as g}from"./RadioButton-BsG4NRCT.js";import"./index-CtQTiInQ.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-DJt7EILa.js";import{T as y}from"./Text-VF_oP7nB.js";import{C as T}from"./Content-hpcy-Uta.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CcavWj25.js";import"./mergeProps-BKLeaOo7.js";import"./index-DTllGi7h.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Cdp0xV4M.js";import"./FieldError-D1V0yKtv.js";import"./IconWarning-QXks_Kv-.js";import"./FieldError-DHw7a52T.js";import"./utils-D0CTRpvX.js";import"./Text-oMr6ueMZ.js";import"./filterDOMProps-CeZl_uWj.js";import"./ColumnLayout-V6_UbH1_.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-GzxUY-Vm.js";import"./Form-DrDCrztH.js";import"./useLabel-BhTOAlCQ.js";import"./Label-BZrcB42p.js";import"./Hidden-Dd0lSYNZ.js";import"./useFormReset-Dt6BcYvw.js";import"./usePress-CEYeyB88.js";import"./useFocus-HZduNndM.js";import"./useFocusRing-HsOmCAqc.js";import"./useFocusable-43R3EC9q.js";import"./useFormValidation-CI5EZsou.js";import"./FocusScope-Cx-5Cw_n.js";import"./useLocalizedStringFormatter-DpLhROVm.js";import"./VisuallyHidden-p5Z0Rn92.js";import"./useControlledState-BKUqB07S.js";import"./Label-YolQAcjQ.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-D1jUzRoU.js";const dr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,o)=>r.jsxs(g,{value:o.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,o)=>r.jsxs(g,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

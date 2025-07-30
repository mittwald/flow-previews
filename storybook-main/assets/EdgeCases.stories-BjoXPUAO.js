import{j as r}from"./iframe-5e2kPeup.js";import{R as p,b as l,a as g}from"./RadioButton-CVVMEYHJ.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-BNSWXG72.js";import{T as y}from"./Text-CEKkIKYs.js";import{C as T}from"./Content--SD1n-wY.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DEH0t7hl.js";import"./mergeRefs-uY3blBsM.js";import"./index-lLG5KW4n.js";import"./FieldError-CL__YS6Z.js";import"./IconWarning-CAYwnCqi.js";import"./FieldError-CADLGuZ8.js";import"./utils-Bj-e-2L9.js";import"./Text-DiRiFDT_.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-DS9uzAz-.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-CBlu43Ea.js";import"./Form-Dy9v5K9J.js";import"./useFocus-CgJ_pcIH.js";import"./useLabel-uzLes6Tz.js";import"./Label-68vOnyUK.js";import"./Hidden-DMXZYlYz.js";import"./useFormReset-SVEOBZG_.js";import"./usePress-CrwMQoq0.js";import"./useFocusRing-Xasmxdld.js";import"./useFocusable-Dvdn958o.js";import"./FocusScope-BoeQH_qo.js";import"./context-BlWBKAs5.js";import"./VisuallyHidden-DW4vMZrD.js";import"./useControlledState-CITgxuHh.js";import"./Label-rQ1K5PG1.js";import"./useLocalizedStringFormatter-BSu4az1l.js";import"./browser-D35eJ3ID.js";import"./EmulatedBoldText-DjgxRs5N.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

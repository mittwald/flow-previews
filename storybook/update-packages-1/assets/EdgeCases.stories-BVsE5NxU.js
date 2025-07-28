import{j as r}from"./iframe-DkoDxfR2.js";import{R as p,b as l,a as g}from"./RadioButton-mlGh3wCj.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-N9QQzhC-.js";import{T as y}from"./Text-CnS74kup.js";import{C as T}from"./Content-B5YuFotN.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DL9J830y.js";import"./mergeRefs-Buk7y6lM.js";import"./index-DkP-SiYJ.js";import"./FieldError-lU0r29TM.js";import"./IconWarning-Ck0HvR0Q.js";import"./FieldError-X-QluTji.js";import"./utils-BOrYOV9F.js";import"./Text-Ctymnv7p.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-MdeEfwCz.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-CrNGUVx-.js";import"./Form-CnPMOS5f.js";import"./useFocus-Ca2dqt2u.js";import"./useLabel-BuM0FhpV.js";import"./Label-DRKfcyWW.js";import"./Hidden-De8D6e53.js";import"./useFormReset-BbPVrHjA.js";import"./usePress-DxrgSCNh.js";import"./useFocusRing-BDB7k6Pq.js";import"./useFocusable-BICMmXOk.js";import"./FocusScope-DjWdfa-n.js";import"./context-De-s_lIT.js";import"./VisuallyHidden-C20fNH5S.js";import"./useControlledState-JTLXT68E.js";import"./Label-XXLO5rpK.js";import"./useLocalizedStringFormatter-DJ33xXvN.js";import"./browser-Bh7wweWi.js";import"./EmulatedBoldText-CUhPQfrL.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

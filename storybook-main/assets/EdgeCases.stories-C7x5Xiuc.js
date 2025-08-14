import{j as r}from"./iframe-r2ISa6Vz.js";import{R as p,b as l,a as g}from"./RadioButton-BrBMaF2s.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-_bxH6ud3.js";import{T as y}from"./Text-DXIJD_mG.js";import{C as T}from"./Content-CMhFMTR-.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CNwGty8-.js";import"./mergeRefs-D4TwGOEw.js";import"./index-CwWOZNJb.js";import"./FieldError-CqMpihJO.js";import"./IconWarning-DfNEkDa-.js";import"./FieldError-h_DzRRQi.js";import"./utils-DwHpNHaD.js";import"./Text--yGrToJ3.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-BIznnEPa.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-DGIEToPq.js";import"./Form-BGPVVXS4.js";import"./useFocus-De90M8h7.js";import"./useLabel-C31-NaD3.js";import"./Label-D9vBeQ72.js";import"./Hidden-3Y5hF2-9.js";import"./useFormReset-Cehr99bh.js";import"./usePress-CIA34O1p.js";import"./useFocusRing-Dm8SMHzX.js";import"./useFocusable-BHAsUzIM.js";import"./FocusScope-C4ChjLNl.js";import"./context-AXeZ-4C7.js";import"./VisuallyHidden-DXZRkoBb.js";import"./useControlledState-DWYZHaxy.js";import"./Label-CqYrEG64.js";import"./useLocalizedStringFormatter-D6_Bns5v.js";import"./browser-vniJOv6A.js";import"./EmulatedBoldText-DORQB6U8.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-r9Fl_3r-.js";import{R as p,b as l,a as g}from"./RadioButton-CIyFHV92.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-Ckv4prjt.js";import{T as y}from"./Text-DD-b1p2M.js";import{C as T}from"./Content-CYxheAeS.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-_w1UeHmF.js";import"./mergeRefs-D6E7Ef6S.js";import"./index-CrBYWkM2.js";import"./FieldError-B_shqPON.js";import"./IconWarning-BUxpotmw.js";import"./FieldError-D3xuSMMg.js";import"./utils-DXh-iENK.js";import"./Text-DHfFA3io.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-B2Da09ub.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-5pU_qvwj.js";import"./Form-D9IRbY4n.js";import"./useFocus-DRS9ufOF.js";import"./useLabel-DoVt-K4x.js";import"./Label-C3TZzzex.js";import"./Hidden-BJHVOqWC.js";import"./useFormReset-DxbIlA0W.js";import"./usePress-CjAT5thu.js";import"./useFocusRing-C_G4oYuI.js";import"./useFocusable-DI-LrkzR.js";import"./FocusScope-C8ZyuACd.js";import"./context-B1eqcBF6.js";import"./VisuallyHidden-CHwjrWyl.js";import"./useControlledState-Bxg_NaN0.js";import"./Label-DgY637fA.js";import"./useLocalizedStringFormatter-BlChhJwn.js";import"./browser-tiRbxzJD.js";import"./EmulatedBoldText-CDsZBMJH.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

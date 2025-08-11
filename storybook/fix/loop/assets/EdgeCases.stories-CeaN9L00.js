import{j as r}from"./iframe-Cvd7_oGo.js";import{R as p,b as l,a as g}from"./RadioButton-BSn9DefK.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-BaeLUtUQ.js";import{T as y}from"./Text-hU5scIVG.js";import{C as T}from"./Content-CU-Mo_8z.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CjZ8S_R8.js";import"./mergeRefs-CjEz_01H.js";import"./index-DRhNAo74.js";import"./FieldError-Cucl0v59.js";import"./IconWarning-x_Sg-cyk.js";import"./FieldError-BOfQUrOF.js";import"./utils-DLoLmG8U.js";import"./Text-K3zhr9uI.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-BkO20SiE.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-CMClny0V.js";import"./Form-dIwvv5i0.js";import"./useFocus-mBCJQH3P.js";import"./useLabel-C20I_MYv.js";import"./Label-CEN2LQcE.js";import"./Hidden-DIqvoFI_.js";import"./useFormReset-TshWv7lU.js";import"./usePress-dFXSg5ro.js";import"./useFocusRing-BORhh_J0.js";import"./useFocusable-ow-zpXhZ.js";import"./FocusScope-_f1yOmDv.js";import"./context-CPCW_rIy.js";import"./VisuallyHidden-ZBger3GJ.js";import"./useControlledState-BRJHAPjA.js";import"./Label-DZmXl-gv.js";import"./useLocalizedStringFormatter-BeSMCKuR.js";import"./browser-Dthgcr78.js";import"./EmulatedBoldText-DDsUBT92.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

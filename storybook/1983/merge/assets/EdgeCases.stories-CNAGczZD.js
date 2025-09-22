import{j as r}from"./iframe-Iz-jrQ83.js";import{R as p,b as l,a as g}from"./RadioButton-BQ7MBZlu.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-DGLnsoqM.js";import{T as y}from"./Text-Dk41Q_nF.js";import{C as T}from"./Content-RTmtTjt0.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-qg-SXpsr.js";import"./mergeRefs-B-yJitBg.js";import"./index-BEFFWu2J.js";import"./FieldError-CRVd2q9t.js";import"./IconWarning-BfmxR99x.js";import"./FieldError-7b0XYa9_.js";import"./utils-Dydu0pBS.js";import"./Text-DcONEmQQ.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-wKTFrS6B.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-DPTVpsge.js";import"./Form-B2pzq79_.js";import"./useFocus-p13hF2Sk.js";import"./useLabel-BXusGe9W.js";import"./Label-BK3HXmgw.js";import"./Hidden-BljdK-_8.js";import"./useFormReset-Cl_PLqIc.js";import"./usePress-CAUR_6bc.js";import"./useFocusRing-DSCSSA3t.js";import"./useFocusable-D1JGAIsJ.js";import"./FocusScope-BuNHZGqL.js";import"./context-BdTRL7oB.js";import"./VisuallyHidden-BXR8MD6z.js";import"./useControlledState-C1EOK33K.js";import"./Label-BLFOHaT0.js";import"./useLocalizedStringFormatter-CutEnP0C.js";import"./browser-njf7oZ8k.js";import"./EmulatedBoldText-MtcJVW3r.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

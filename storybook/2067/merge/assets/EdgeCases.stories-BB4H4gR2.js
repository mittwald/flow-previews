import{j as r}from"./iframe-Dyev7uqQ.js";import{R as l,b as p,a as g}from"./RadioButton-DEVjMR5G.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-C8ZFT_LA.js";import{T as y}from"./Text-DCNvFKD8.js";import{C as T}from"./Content-CJ4ewXYQ.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CYF9F6TT.js";import"./index-Du7KBi6Z.js";import"./index-CvZL7rFv.js";import"./FieldError-BvGSOrPS.js";import"./IconWarning-Bsmw3ttA.js";import"./FieldError-Nbp5sqjA.js";import"./utils-xAJ0Toj9.js";import"./Text-s2lACfdw.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-B5-x1GCp.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-C9hlV0WZ.js";import"./RadioGroup-CgoRXZRl.js";import"./Form-DM5JENEN.js";import"./Label-DEHEOlON.js";import"./Hidden-D-qqENuK.js";import"./useFormValidation-BpwVeG4s.js";import"./useFocus-D9hOsqQc.js";import"./useControlledState-Cwb3iJ3d.js";import"./FocusScope-BBXHLeS0.js";import"./useFocusRing-Bh9Ki2YC.js";import"./context-z-HIZVd9.js";import"./useFormReset-CiUCuSgO.js";import"./usePress-DabLIItt.js";import"./useFocusable-uBBnOUX9.js";import"./VisuallyHidden-BtDNzz4I.js";import"./Label-DTUVPi2K.js";import"./useLocalizedStringFormatter-BxSCNYWk.js";import"./browser-ChaPEiup.js";import"./EmulatedBoldText-DLRRZTZj.js";const pr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(l,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(b=(f=m.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const lr=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,lr as __namedExportsOrder,pr as default};

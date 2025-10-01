import{j as r}from"./iframe-BA6fDn45.js";import{R as l,b as p,a as g}from"./RadioButton-WT0i0_Xb.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-Deo31dPl.js";import{T as y}from"./Text-BB_jWM0A.js";import{C as T}from"./Content-oJmiHMKX.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DAuYRjCP.js";import"./index-DovfTAQ1.js";import"./index-DorRoXow.js";import"./FieldError-C4B-9J1n.js";import"./IconWarning-RvG5V2Gg.js";import"./FieldError-DSSHPUap.js";import"./utils-B0PKDg6J.js";import"./Text-BlF9rzJU.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-FAYmoGjk.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-BwZeESMO.js";import"./RadioGroup-DClap2gc.js";import"./Form-BO5siFlo.js";import"./Label-CM7Rtudl.js";import"./Hidden-BWmE1vDO.js";import"./useFormValidation-Da1DrGKi.js";import"./useFocus-DSzhmy1b.js";import"./useControlledState-DgfMlGIn.js";import"./FocusScope-B1mU0Ypz.js";import"./useFocusRing-BRVUU_95.js";import"./context-D6O0cSe8.js";import"./useFormReset-DffYIxF4.js";import"./usePress-BQkI-aJ9.js";import"./useFocusable-20QGmjfJ.js";import"./VisuallyHidden-D1tpk_Z3.js";import"./Label-12Swj0ll.js";import"./useLocalizedStringFormatter-CoI3i-Zj.js";import"./browser-BAFOwcQV.js";import"./EmulatedBoldText-Dom6ilWt.js";const pr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(l,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

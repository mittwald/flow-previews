import{j as r}from"./iframe-woTOwd7_.js";import{R as l,b as p,a as g}from"./RadioButton-BA4zDkm1.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-B_D5vySx.js";import{T as y}from"./Text-BJYnGCYe.js";import{C as T}from"./Content-Gq5JAoHX.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B-uEZ_V3.js";import"./index-qiybc8_t.js";import"./index-C7RKIbtQ.js";import"./FieldError-cqKK9eum.js";import"./IconWarning-DjIAWUJ_.js";import"./FieldError-DhBue0La.js";import"./utils-D3yPsyL0.js";import"./Text-CI6uvf20.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-RJomsHci.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-CoPGrv-w.js";import"./RadioGroup-BooJs3Ei.js";import"./Form-B8f020lP.js";import"./Label-Cing85ZS.js";import"./Hidden-BDYhUzcR.js";import"./useFormValidation-BteaOxt3.js";import"./useFocus-BFXKtnCR.js";import"./useControlledState-BiOxSYVP.js";import"./FocusScope-CzW3cjLK.js";import"./useFocusRing-CTuyXOeV.js";import"./context-FI-dTyul.js";import"./useFormReset-DJCienz-.js";import"./usePress-DGvsG6co.js";import"./useFocusable-BkuBS6Cc.js";import"./VisuallyHidden-C2zuidlV.js";import"./Label-BMPYi4BS.js";import"./useLocalizedStringFormatter-D-GXZJS3.js";import"./browser-B4P6bty3.js";import"./EmulatedBoldText-BDnx0pnN.js";const pr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(l,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-DTi9QmA0.js";import{R as p,b as l,a as g}from"./RadioButton-BZ_FRbW5.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-BYUhg61t.js";import{T as y}from"./Text-rZE64TpZ.js";import{C as T}from"./Content-BZiplGzv.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-hsBezmuJ.js";import"./mergeRefs-CRQizX0M.js";import"./index-AIe693y_.js";import"./FieldError-GbuBlm-B.js";import"./IconWarning-DxYwd6KK.js";import"./FieldError-B9D2P1L5.js";import"./utils-CL7caOLd.js";import"./Text-uHJoYlsI.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-BdVryXnL.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-DEQW3J9W.js";import"./Form-MgZU7Vwa.js";import"./useFocus-ZZE_0lQ_.js";import"./useLabel-BsOHSad-.js";import"./Label-CZheX-BS.js";import"./Hidden-vKywT2Di.js";import"./useFormReset-BLacz0U5.js";import"./usePress-DGBc0zwK.js";import"./useFocusRing-DtGgtmUN.js";import"./useFocusable-C9TzKwDz.js";import"./FocusScope-Dyo2gp6z.js";import"./context-CCdZhs-h.js";import"./VisuallyHidden-vt7X_vEY.js";import"./useControlledState-plF7sQ7U.js";import"./Label-CQetSSMr.js";import"./useLocalizedStringFormatter-DlTJgtIJ.js";import"./browser-C8n4ubUN.js";import"./EmulatedBoldText-CvSsCxBp.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

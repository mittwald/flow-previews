import{j as r}from"./iframe-B9WJ5iKj.js";import{R as p,b as l,a as g}from"./RadioButton-47VAZC9x.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-BxLW1i-8.js";import{T as y}from"./Text-CSPzXI-q.js";import{C as T}from"./Content-CTaKYoy5.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CGbAkxa2.js";import"./mergeRefs-DdPqSpPT.js";import"./index-DKUVlu-x.js";import"./FieldError-BOUOKYBY.js";import"./IconWarning-iA3abBs4.js";import"./FieldError-DavyfSHK.js";import"./utils-DB8fltME.js";import"./Text-COQnmlIw.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-GyTsMqNm.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-C_WyB4HR.js";import"./Form-FBD95hlW.js";import"./useFocus-hMfli9CJ.js";import"./useLabel-oUVSUbln.js";import"./Label-D_4wO_RK.js";import"./Hidden-DsQKnrr0.js";import"./useFormReset-X7y3l5xq.js";import"./usePress-Cwd9gmzr.js";import"./useFocusRing-BfWSMilO.js";import"./useFocusable-uW0l0Nx0.js";import"./FocusScope-aIFO3fHs.js";import"./context-B6-GkfV2.js";import"./VisuallyHidden-BITg658c.js";import"./useControlledState-DqBsJvcb.js";import"./Label-Txm3TZUN.js";import"./useLocalizedStringFormatter-DFSg5pkm.js";import"./browser-BOk1fb3_.js";import"./EmulatedBoldText-C7rcw5Ry.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

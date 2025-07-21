import{j as r}from"./iframe-Bd70UBfQ.js";import{R as p,b as l,a as g}from"./RadioButton-DJ090iho.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-S3Jqd5X7.js";import{T as y}from"./Text-DDmCr0c3.js";import{C as T}from"./Content-BpazR6ts.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-i-IYwZFk.js";import"./mergeRefs-BlmmrTdi.js";import"./index-BXdiMNYx.js";import"./FieldError-Cn-PtrFI.js";import"./IconWarning-Dx4sU-j9.js";import"./FieldError-BoxMIPJS.js";import"./utils-BmyyYDYY.js";import"./Text-DnJtq-Ca.js";import"./filterDOMProps-CeZl_uWj.js";import"./ColumnLayout-CDou7TzZ.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-1s9zJW0L.js";import"./Form-hLedV1Ku.js";import"./useFocus-_CMpkysi.js";import"./useLabel-w4mzRly1.js";import"./Label-g6yaf0Tw.js";import"./Hidden-CvIRFHlC.js";import"./useFormReset-D2aXstqB.js";import"./usePress-Z-qLfgnH.js";import"./useFocusRing-DTBcK8mU.js";import"./useFocusable-rNBIEL3L.js";import"./FocusScope-Bx1kvcbQ.js";import"./context-C3LNBa76.js";import"./VisuallyHidden-CEaQSbTN.js";import"./useControlledState-ChZkaxon.js";import"./Label-2hW8G0Q4.js";import"./useLocalizedStringFormatter-CvG_jx-f.js";import"./browser-CDzL9dyN.js";import"./EmulatedBoldText-CROyqepx.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

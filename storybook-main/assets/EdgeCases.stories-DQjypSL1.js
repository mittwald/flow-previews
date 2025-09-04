import{j as r}from"./iframe--ZPVLz8g.js";import{R as p,b as l,a as g}from"./RadioButton-CtsKtJLB.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-DWjVEaGg.js";import{T as y}from"./Text-BWChA6Qp.js";import{C as T}from"./Content-BT8CXfL9.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-nWC3VOMj.js";import"./mergeRefs-VsgLfvv3.js";import"./index-CUxE1TYv.js";import"./FieldError-D2ZL0CC8.js";import"./IconWarning-4_E3WNTs.js";import"./FieldError-jq5pvDUD.js";import"./utils-CjuahFs2.js";import"./Text-du_1NL-y.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-DISukqyT.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-qcc4vOEc.js";import"./Form-CzoyYLrP.js";import"./useFocus-BI6mVvV1.js";import"./useLabel-rVnfHrLk.js";import"./Label-jWQ4-Gqi.js";import"./Hidden-F0y0p3A_.js";import"./useFormReset-B3ZybcNU.js";import"./usePress-BT12SUT-.js";import"./useFocusRing-CQfGGNBr.js";import"./useFocusable-CySdtwHN.js";import"./FocusScope-C9FAKDVz.js";import"./context-CYq-vfev.js";import"./VisuallyHidden-CbNFz2F0.js";import"./useControlledState-CTCa-DaJ.js";import"./Label-CEhk5YLt.js";import"./useLocalizedStringFormatter-D8nOtH8X.js";import"./browser-D6_kvesK.js";import"./EmulatedBoldText-Qqp8fG5V.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

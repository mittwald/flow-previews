import{j as r}from"./iframe-hiH37hms.js";import{R as l,b as p,a as g}from"./RadioButton-DPVTtMcd.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-Dxp50RYD.js";import{T as y}from"./Text-CsOmTVyE.js";import{C as T}from"./Content-1NKId6yP.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-00c8POVD.js";import"./index-CTy9APi5.js";import"./index-BJu77HCL.js";import"./FieldError-BChewV0h.js";import"./FormField.module-CapR5K3V.js";import"./utils-JHWv327y.js";import"./Text-UKwjxOKq.js";import"./filterDOMProps-CghfNOdR.js";import"./IconWarning-Cse0Xf0Q.js";import"./react-children-utilities-CYBZOoJV.js";import"./ColumnLayout-BM6Rfps9.js";import"./useMakeFocusable-CTKbAYTu.js";import"./RadioGroup-CZvQbV1z.js";import"./Form-stGXRgys.js";import"./Label-C0jnYKOc.js";import"./Hidden-XcASwwlw.js";import"./useFormValidation-DybUzXH7.js";import"./useFocus-B9-o-MIg.js";import"./useControlledState-BFPCb-Qt.js";import"./FocusScope-C5smDGs3.js";import"./useFocusRing-WUR2BD9e.js";import"./context-DRH00eGt.js";import"./useFormReset-BDeOlo8n.js";import"./usePress-BhsWghka.js";import"./useFocusable-C2_7lwWJ.js";import"./VisuallyHidden-C5VBpvXq.js";import"./Label-DzM9UWDP.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BRvamSQ7.js";import"./browser-BuBe5AKm.js";import"./EmulatedBoldText-BNkr3bPM.js";const lr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(l,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(b=(f=m.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const nr=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,nr as __namedExportsOrder,lr as default};

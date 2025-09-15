import{j as r}from"./iframe-BJ0F67WV.js";import{R as p,b as l,a as g}from"./RadioButton-C4xzoyOY.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-qUz5A5LC.js";import{T as y}from"./Text-DvcA_djt.js";import{C as T}from"./Content-Dmumbtey.js";import"./clsx-B-dksMZM.js";import"./flowComponent-3J-YZQgx.js";import"./index-DnTgiG27.js";import"./index-C5tuckEm.js";import"./FieldError-B5pU0GHC.js";import"./IconWarning-D8lhACCL.js";import"./FieldError-zuZgMzEa.js";import"./utils-CfdyWDg2.js";import"./Text-DUTh34WN.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-BgNpm4Hv.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-bOLafy65.js";import"./Form-aW46NXWl.js";import"./useFocus-N8Qk0gvU.js";import"./useLabel-CE1zHuYM.js";import"./Label-BZcf1Nsx.js";import"./Hidden-iBx55YDK.js";import"./useFormReset-5M8XX6CH.js";import"./usePress-C0-WYOlY.js";import"./useFocusRing-CZqmVUZk.js";import"./useFocusable-k7wU8KZy.js";import"./FocusScope-own16ieq.js";import"./context-DDk-RgEI.js";import"./VisuallyHidden-CST8zJDR.js";import"./useControlledState-g4NJV7ij.js";import"./Label-DdDrAhKV.js";import"./useLocalizedStringFormatter-CatcJgnD.js";import"./browser-ENr42WFT.js";import"./EmulatedBoldText-CK3yk5uQ.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

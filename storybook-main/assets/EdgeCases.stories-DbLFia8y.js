import{j as r}from"./iframe-CRCn_1k8.js";import{R as p,b as l,a as g}from"./RadioButton-DW0_smul.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-Bq5zSoKa.js";import{T as y}from"./Text-DcU8-VYF.js";import{C as T}from"./Content-CNFLj02P.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BubU3Kz3.js";import"./mergeRefs-Gw2OcT6Q.js";import"./index-7hVsDhMa.js";import"./FieldError-BF0ybVTQ.js";import"./IconWarning-DfyJ3u1O.js";import"./FieldError-Get8RxYf.js";import"./utils-BI2kd8b-.js";import"./Text-CnPg80ig.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-CGNWmVhJ.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-BNeh_MTA.js";import"./Form-BUDb6yDR.js";import"./useFocus-B3vm1A24.js";import"./useLabel-76mwt2Hf.js";import"./Label-DuoAXWP0.js";import"./Hidden-860WeEVo.js";import"./useFormReset-DT5J9yBd.js";import"./usePress-CPRYRx8p.js";import"./useFocusRing-CAd7IlbP.js";import"./useFocusable-BJ6918Tp.js";import"./FocusScope-B7tfNpBC.js";import"./context-fzWZoyLv.js";import"./VisuallyHidden-4OPl2Xdl.js";import"./useControlledState-gjMGbt2_.js";import"./Label-CTLOVe14.js";import"./useLocalizedStringFormatter-DT9CXOan.js";import"./browser-B1ctrq8_.js";import"./EmulatedBoldText-YLFM-K80.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

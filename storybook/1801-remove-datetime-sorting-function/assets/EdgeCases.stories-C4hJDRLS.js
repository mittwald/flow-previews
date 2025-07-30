import{j as r}from"./iframe-Cf8YTZ8I.js";import{R as p,b as l,a as g}from"./RadioButton-RkO2tEwQ.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-B6Bf5RjP.js";import{T as y}from"./Text-CzCYKR38.js";import{C as T}from"./Content-DbBI9msY.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DTkA4BUB.js";import"./mergeRefs-D3ggMSJr.js";import"./index-B8aDKTw0.js";import"./FieldError-rTkgz3KB.js";import"./IconWarning-qh9NwBsS.js";import"./FieldError-CCTqX3Np.js";import"./utils-mApyKjAg.js";import"./Text-CQanMjNI.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-DAymu3M6.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-BiPiocc8.js";import"./Form-C0YUiO3s.js";import"./useFocus-_Kohxctg.js";import"./useLabel-kBnuahGK.js";import"./Label-CYpSb4aj.js";import"./Hidden-CFe2gnmC.js";import"./useFormReset-Ctmxo4kM.js";import"./usePress-CjpkCDJv.js";import"./useFocusRing-WtizUsSm.js";import"./useFocusable-n963r6Th.js";import"./FocusScope-Bp1tS9Sq.js";import"./context-D-u3TSjV.js";import"./VisuallyHidden-CDGiYjfo.js";import"./useControlledState-J34_Aqnk.js";import"./Label-D1xaprCz.js";import"./useLocalizedStringFormatter-BO4NN1ph.js";import"./browser-DfZCu7HF.js";import"./EmulatedBoldText-5p9uCxGs.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

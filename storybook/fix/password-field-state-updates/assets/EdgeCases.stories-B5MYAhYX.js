import{j as r}from"./iframe-RyyXbGrI.js";import{R as p,b as l,a as g}from"./RadioButton-2-7vEvbU.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-DBJQeLdg.js";import{T as y}from"./Text-Bwgmr3xm.js";import{C as T}from"./Content-C0zK85YL.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B1uYDNh0.js";import"./mergeRefs-TzEeC_ny.js";import"./index-CkUh_6WG.js";import"./FieldError-BjHPKtj9.js";import"./IconWarning-C52r753T.js";import"./FieldError-BvyzplcM.js";import"./utils-CSApR2SK.js";import"./Text-BimzKAGJ.js";import"./filterDOMProps-CeZl_uWj.js";import"./ColumnLayout-DkMf6pMk.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-DFJnzLNT.js";import"./Form-BkhipvRR.js";import"./useFocus-CDHSIkFG.js";import"./useLabel-DfsiheSh.js";import"./Label-DyZcxK1e.js";import"./Hidden-CBQwCv0D.js";import"./useFormReset-BKdfKWXM.js";import"./usePress-BifiEpzl.js";import"./useFocusRing-Cp5tV9bB.js";import"./useFocusable-B1PzsIJa.js";import"./FocusScope-BOeRx0u7.js";import"./context-CVBx-lw8.js";import"./VisuallyHidden-BRg-FWnS.js";import"./useControlledState-BAW98GGA.js";import"./Label-CFvtJK4g.js";import"./useLocalizedStringFormatter-D3yp90gU.js";import"./browser-DZnqvRXk.js";import"./EmulatedBoldText-BGBtIkEw.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

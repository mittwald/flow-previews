import{j as r}from"./iframe-qMbEE3nZ.js";import{R as p,b as l,a as g}from"./RadioButton-n2UMVPhE.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-B7AvC-bJ.js";import{T as y}from"./Text-BBRqDbdK.js";import{C as T}from"./Content-DhUYe8Oo.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-GFGOiqrH.js";import"./mergeRefs-BuWec918.js";import"./index-HDYuzCzu.js";import"./FieldError-BKpgIzk8.js";import"./IconWarning-CQwCi0eF.js";import"./FieldError-BHMg81Vw.js";import"./utils-BD_t44OF.js";import"./Text-cBZJFSe0.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-CG0Mf2oq.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-BjmHH-e2.js";import"./Form-3qXBak_6.js";import"./useFocus-DS8qI1YX.js";import"./useLabel-Cq2dGHOX.js";import"./Label-D0MPEMQA.js";import"./Hidden-D7F7fo4_.js";import"./useFormReset-D9SBe6RC.js";import"./usePress-7HicN3cp.js";import"./useFocusRing-lD94xzjb.js";import"./useFocusable-D_wGn8G3.js";import"./FocusScope-phx_Kgk6.js";import"./context-DPxByHJI.js";import"./VisuallyHidden-BVlRlsah.js";import"./useControlledState-CNYZu0wD.js";import"./Label-Qwuh2gM1.js";import"./useLocalizedStringFormatter-D-75WDAr.js";import"./browser-CDpjXLqz.js";import"./EmulatedBoldText-DSEgcFLX.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-ybIflQI0.js";import{R as p,b as l,a as g}from"./RadioButton-CVvpSoYj.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-CsWiNNML.js";import{T as y}from"./Text-CrQihJYy.js";import{C as T}from"./Content-BabuvI2u.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Dby21Boo.js";import"./mergeRefs-CrLlo2X9.js";import"./index-DwvqtJ63.js";import"./FieldError-NwAdK0dF.js";import"./IconWarning-4calfh7J.js";import"./FieldError-C5asJdTF.js";import"./utils-DwLBuKNl.js";import"./Text-BtP71xLD.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-qFQs5Yqn.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-DwYTp3n3.js";import"./Form-CSA4Adn7.js";import"./useFocus-FOKKrJ32.js";import"./useLabel-OuLiew89.js";import"./Label-dqzpDUen.js";import"./Hidden-DQD7tqWN.js";import"./useFormReset-B-8-_0w7.js";import"./usePress-BBpVmfp-.js";import"./useFocusRing-DmeoHCon.js";import"./useFocusable-D9slAbEH.js";import"./FocusScope-Ogf1gBEU.js";import"./context-D69S0q1x.js";import"./VisuallyHidden-DZp-AQjS.js";import"./useControlledState-BVmYQtS6.js";import"./Label-D6VCnmf_.js";import"./useLocalizedStringFormatter-Dy9YCgnm.js";import"./browser-BlU6H4Cg.js";import"./EmulatedBoldText-Cg6573Jk.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

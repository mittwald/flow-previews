import{j as r}from"./iframe-CqLmdNeC.js";import{R as p,b as l,a as g}from"./RadioButton-B3GtdPRw.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-DVwmR4ib.js";import{T as y}from"./Text-BZ3j-6fi.js";import{C as T}from"./Content-kOwL46l3.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CftNG7hR.js";import"./mergeRefs-o29IfSv-.js";import"./index-DuAYVIUn.js";import"./FieldError-BPhKkw68.js";import"./IconWarning-CMS0_eHL.js";import"./FieldError-BRlNdIVM.js";import"./utils-DVF3OaDc.js";import"./Text-BpEumjQQ.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-DJitxdf0.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-B-OqeGsR.js";import"./Form-Dz9VUwD7.js";import"./useFocus-CLcOeBIv.js";import"./useLabel-BygwjnmG.js";import"./Label-DbnvS1ga.js";import"./Hidden-K4MIyCcS.js";import"./useFormReset-6nvbbxGv.js";import"./usePress-CKz354k3.js";import"./useFocusRing-B3V5UxLb.js";import"./useFocusable-zATjwRwW.js";import"./FocusScope-D6JShGuB.js";import"./context-DzYatHkR.js";import"./VisuallyHidden-DFEHY8aA.js";import"./useControlledState-Blr5WM8A.js";import"./Label-B8Yu6jlZ.js";import"./useLocalizedStringFormatter-C4FReXuX.js";import"./browser-D8TwyJaY.js";import"./EmulatedBoldText-EL8QFNsm.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

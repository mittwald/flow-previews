import{j as r}from"./iframe-DyMBbPqz.js";import{R as p,b as l,a as g}from"./RadioButton-D937LrT2.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-Ch8TtFD5.js";import{T as y}from"./Text-CukGSnAt.js";import{C as T}from"./Content-Vte2zaSU.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D5JFbFDv.js";import"./mergeRefs-DzqYcA-L.js";import"./index-DOr1CDfn.js";import"./FieldError-DTsDdte6.js";import"./IconWarning-ZZpE0RLv.js";import"./FieldError-rzK-dnZK.js";import"./utils-CVBG1xQY.js";import"./Text-CM2C2q3t.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-CT1FeNRv.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-CWyYANKs.js";import"./Form-XPOYZQVX.js";import"./useFocus-DU8oSjU-.js";import"./useLabel-_qDqqXns.js";import"./Label-BeoFpfOq.js";import"./Hidden-DDXBBs4Y.js";import"./useFormReset-BRpdsPso.js";import"./usePress-D3aMe8WM.js";import"./useFocusRing-vfzYXE-6.js";import"./useFocusable-DC8rXwC1.js";import"./FocusScope-D43MAOt-.js";import"./context-Da3l2mom.js";import"./VisuallyHidden-CSYVn4hw.js";import"./useControlledState-D80JYNPC.js";import"./Label-CTeGDG4_.js";import"./useLocalizedStringFormatter-Bkn65txD.js";import"./browser-n8MK_CxL.js";import"./EmulatedBoldText-xvO4zYSH.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

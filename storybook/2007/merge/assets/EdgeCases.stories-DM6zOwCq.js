import{j as r}from"./iframe-DkzCwCX4.js";import{R as p,b as l,a as g}from"./RadioButton-BRNB8NwZ.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-kfItVqiP.js";import{T as y}from"./Text-nAHNspGp.js";import{C as T}from"./Content-B4FCr92k.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-j536x9wb.js";import"./mergeRefs-T0LNBBZh.js";import"./index-BnjSe9nq.js";import"./FieldError-ZxrKxv-k.js";import"./IconWarning-DW3eva0Y.js";import"./FieldError-Jo1S5986.js";import"./utils-CLIXtwVU.js";import"./Text-lQk_ytCv.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-dWyCawEc.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-Cwstm9GA.js";import"./Form-Bd46is8r.js";import"./useFocus-ib9l0UKV.js";import"./useLabel-BJPqeoy6.js";import"./Label-CxXDsSed.js";import"./Hidden-Co6TepXZ.js";import"./useControlledState-BOJEDAaV.js";import"./FocusScope-DTdzqE55.js";import"./useFocusRing-D8oCWed-.js";import"./context-R4HBJhIj.js";import"./useFormReset-Dtav30sm.js";import"./usePress-Bo4yNuZG.js";import"./useFocusable-DGleC9_O.js";import"./VisuallyHidden-CyZzuY0Z.js";import"./Label-BxAVz1UC.js";import"./useLocalizedStringFormatter-D8Y9ojCx.js";import"./browser-Dj2wjmgz.js";import"./EmulatedBoldText-DFUvlzyn.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

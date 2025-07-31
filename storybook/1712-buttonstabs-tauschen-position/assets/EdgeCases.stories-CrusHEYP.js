import{j as r}from"./iframe-Ct0YhZ2w.js";import{R as p,b as l,a as g}from"./RadioButton-Df80hfiU.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-FXvvPpAV.js";import{T as y}from"./Text-c1auIdYf.js";import{C as T}from"./Content-ZuxXERS_.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DXGdmmnh.js";import"./mergeRefs-9fQ6ccEP.js";import"./index-DiPtFLdy.js";import"./FieldError-B73bAD-i.js";import"./IconWarning-Nibz28Ko.js";import"./FieldError-GfqWmPDy.js";import"./utils-ZYq7i5E4.js";import"./Text-1hz8XXbQ.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-DezfKa5_.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-CKrdVK_7.js";import"./Form-D5t9IVHW.js";import"./useFocus-BOvvpzaY.js";import"./useLabel-CFRZWafb.js";import"./Label-B9yUG6H3.js";import"./Hidden-B-UfVuqf.js";import"./useFormReset-B8uzDw4w.js";import"./usePress-CCIxnJPX.js";import"./useFocusRing-B79RLIIn.js";import"./useFocusable-Co66UmkD.js";import"./FocusScope-CiY9IOxE.js";import"./context-C170bgop.js";import"./VisuallyHidden-C2BGRztG.js";import"./useControlledState-BKGcljyy.js";import"./Label-DV38Rr2k.js";import"./useLocalizedStringFormatter-Di8CJoIO.js";import"./browser-DfqMGCP2.js";import"./EmulatedBoldText-BinEGydl.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

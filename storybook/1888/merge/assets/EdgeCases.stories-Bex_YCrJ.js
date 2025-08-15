import{j as r}from"./iframe-CHDu_H0e.js";import{R as p,b as l,a as g}from"./RadioButton-DQlyOBKv.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-ZMhMNDw9.js";import{T as y}from"./Text-mNtFSOkr.js";import{C as T}from"./Content-BjMDiXUP.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Z6o4UsMH.js";import"./mergeRefs-SbFyzkYd.js";import"./index-DtMG4pjF.js";import"./FieldError-CyvcfapH.js";import"./IconWarning-Cf1n4vGG.js";import"./FieldError-CKgwUKxI.js";import"./utils-DYZAD9ft.js";import"./Text-DpQKzoec.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-CAP5Ax6Q.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-BWnN1rry.js";import"./Form-BFPhVCnm.js";import"./useFocus-C89269kJ.js";import"./useLabel-1w2C-Jw1.js";import"./Label-LmJ-o8gi.js";import"./Hidden-Crmdv3RK.js";import"./useFormReset-Ct9qNa2Y.js";import"./usePress-UC_sG4c4.js";import"./useFocusRing-BOwbbtAH.js";import"./useFocusable-vuFpOsuk.js";import"./FocusScope-CpdigEHe.js";import"./context-Bzaz4S39.js";import"./VisuallyHidden-BP6BNrRi.js";import"./useControlledState-DzyFh4kD.js";import"./Label-C1IZgxKk.js";import"./useLocalizedStringFormatter-B31V_hT3.js";import"./browser-mouKiHlp.js";import"./EmulatedBoldText-Bkss-Gur.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

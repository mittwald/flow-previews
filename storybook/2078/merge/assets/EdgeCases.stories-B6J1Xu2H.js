import{j as r}from"./iframe-DW8JgK09.js";import{R as l,b as p,a as g}from"./RadioButton-YUeFuAJi.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-C6bB9DTF.js";import{T as y}from"./Text-DqrSOA-D.js";import{C as T}from"./Content-CP8616QJ.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DVStQUuA.js";import"./index-SxHndKnJ.js";import"./index-7zpoyBXT.js";import"./FieldError-DC6xH_3a.js";import"./IconWarning-Bj3cOyEj.js";import"./FieldError-D4VyS34i.js";import"./utils-qQbsMKok.js";import"./Text-Dj-iJoJL.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-Cevjkjv5.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-C5ORXLqM.js";import"./RadioGroup--lVImVMb.js";import"./Form-DQnvx-Rv.js";import"./Label-CI_LuAln.js";import"./Hidden-DtieFvyE.js";import"./SelectionIndicator-CLj4WkbT.js";import"./useFormValidation-BJNwWy_2.js";import"./useFocus-BeoGO6Gw.js";import"./useControlledState-BE2AOUIF.js";import"./FocusScope-BFAEdpe6.js";import"./useFocusRing-GKfEZ5du.js";import"./context-MVg0njeL.js";import"./useFormReset-DWeezvOC.js";import"./usePress-Gti5y3pG.js";import"./useFocusable-ClSVLyWP.js";import"./VisuallyHidden-Da3g07dP.js";import"./Label-DSYT14js.js";import"./useLocalizedStringFormatter-Dqx84O-E.js";import"./browser-Ddqyq5_4.js";import"./EmulatedBoldText-C-FDCcHS.js";const lr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(l,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(b=(f=m.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const nr=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,nr as __namedExportsOrder,lr as default};

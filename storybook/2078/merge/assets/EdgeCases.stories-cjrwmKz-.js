import{j as r}from"./iframe-DE21mSiE.js";import{R as l,b as p,a as g}from"./RadioButton-B0q_6vzL.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-qXHXXaMH.js";import{T as y}from"./Text-DOdVur7X.js";import{C as T}from"./Content-BrCT5_Tm.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CyATdwQg.js";import"./index-DVBAlOxg.js";import"./index-ssZEpx-s.js";import"./FieldError-B59qoisB.js";import"./IconWarning-iWnf9NI2.js";import"./FieldError-Bu_r-4G9.js";import"./utils-DqYJbNsI.js";import"./Text-CutbQTmF.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-_SaZ5Egw.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-BrvNHTGQ.js";import"./RadioGroup-B1uS2wqv.js";import"./Form-C4-mbjGM.js";import"./Label-C-oTvvPr.js";import"./Hidden-C98sYe40.js";import"./SelectionIndicator-Daa_H3OJ.js";import"./useFormValidation-B0vSubJ3.js";import"./useFocus-CRZNnr1R.js";import"./useControlledState-Bml9wY_-.js";import"./FocusScope-1KdfzaZh.js";import"./useFocusRing-pH6mNL0D.js";import"./context-Br9w7yZh.js";import"./useFormReset-BcRO7Ruj.js";import"./usePress-Dv9orCJu.js";import"./useFocusable-AVRnrAkJ.js";import"./VisuallyHidden-pa5WzvsI.js";import"./Label-D6jpl-Ee.js";import"./useLocalizedStringFormatter-Bn_AwxOr.js";import"./browser-BjU0tWvf.js";import"./EmulatedBoldText-BOQZ24Hi.js";const lr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(l,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-DzjGvN4s.js";import{R as l,a as p}from"./Radio-DoSvyQxn.js";import{R as n}from"./RadioButton-DT5DROBx.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CDVyial1.js";import{T as u}from"./Text--QhKw61r.js";import{C as c}from"./Content-Dmqb4m3D.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CmnGOp_t.js";import"./index-bYngC-Dz.js";import"./index-CvRHkpxf.js";import"./ColumnLayout-BqdcPCFc.js";import"./useFieldComponent-BsZ1NoTf.js";import"./utils-CaY6-C_T.js";import"./useMakeFocusable-zz1JSJ_e.js";import"./RadioGroup-BmeyXoHw.js";import"./FieldError-Cm2eS0Qx.js";import"./Text-CsTzsUsp.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-C7-6k5t9.js";import"./useLabel-7qQt_FP7.js";import"./Label-CJv7rcJv.js";import"./Hidden-CvDiJOD9.js";import"./SelectionIndicator-BO4ZIlru.js";import"./useFormValidation-CCaCqHBd.js";import"./useFocus-DFbK7vZ5.js";import"./useFocusRing-wMvVuuCP.js";import"./useControlledState-DSekeTPZ.js";import"./FocusScope-D_QyZTFZ.js";import"./context-kL1uqGsw.js";import"./useFormReset-lQZuuaDU.js";import"./usePress-D3so-j8A.js";import"./useFocusable-CvI9gOnC.js";import"./VisuallyHidden-SzhNhvGP.js";import"./IconWarning-s7NSVc-U.js";import"./remote-cWDQ0h3n.js";import"./Label-B3AoafTb.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-exeLKOxN.js";import"./FieldError-wOx9kOaR.js";import"./AlertText-cLdL_XpT.js";import"./AlertIcon-C0w0dGgz.js";import"./browser-DnRnaS9W.js";import"./EmulatedBoldText-DBPO29Lf.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="a" aria-label="Label">
      <Radio value="a">{dummyText.long} </Radio>
      <Radio value="b">{dummyText.long} </Radio>
      <Radio value="c">{dummyText.long}</Radio>
    </RadioGroup>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="0" aria-label="Label" l={[1, 1, 1, 1]}>
      {Array(6).fill("").map((value, index) => <RadioButton value={index.toString()} key={index}>
            <Text>{dummyText.medium}</Text>
            <Content>{dummyText.medium}</Content>
          </RadioButton>)}
    </RadioGroup>
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const mr=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,mr as __namedExportsOrder,ir as default};

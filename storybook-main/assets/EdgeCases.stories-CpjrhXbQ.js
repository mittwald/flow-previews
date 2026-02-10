import{j as r}from"./iframe-CKZ3lvbD.js";import{R as l,a as p}from"./Radio-CQzUGxDI.js";import{R as n}from"./RadioButton-mjVHHZnX.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-j-cfvp1z.js";import{T as u}from"./Text-C_6aanp2.js";import{C as c}from"./Content-BLRnLcGI.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CG3eh15W.js";import"./index-C7ZQKQyg.js";import"./index-4RPaTPNn.js";import"./ColumnLayout-CboKoTSD.js";import"./useFieldComponent-sXfPOyeP.js";import"./utils-BvJRIsTz.js";import"./useMakeFocusable-CGLp7rBI.js";import"./RadioGroup-COl7GLeL.js";import"./FieldError-BqwxYxeF.js";import"./Text-CCMj3K8Y.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-akuVNupd.js";import"./useLabel-GmF_fUr4.js";import"./Label-CNWA-9aF.js";import"./Hidden-CSZFPuze.js";import"./SelectionIndicator-Lac2coO-.js";import"./useFormValidation-BpwCrRY1.js";import"./useFocus-C_IvCZ_Q.js";import"./useFocusRing-BEfvRwzV.js";import"./useControlledState-DyEi02IX.js";import"./FocusScope-WJghiIyT.js";import"./context-C9x0o2NL.js";import"./useFormReset-C_HfEwX8.js";import"./usePress-BdqAXD8t.js";import"./useFocusable-C7EwfmGM.js";import"./VisuallyHidden-CqTmIJ-k.js";import"./IconWarning-C7p1kK8i.js";import"./remote-CtPArtkt.js";import"./Label-GTbkpoc2.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DIxPxHlf.js";import"./FieldError-BAXRdB0p.js";import"./AlertText-BzzQHSYi.js";import"./AlertIcon-DDOfYHUc.js";import"./browser-burL9SPa.js";import"./EmulatedBoldText-DqsKkhpE.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

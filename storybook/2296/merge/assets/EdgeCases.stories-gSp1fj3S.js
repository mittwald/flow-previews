import{j as r}from"./iframe-CJJ5mYnn.js";import{R as l,a as p}from"./Radio-BCigR0w1.js";import{R as n}from"./RadioButton-69pAORxD.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-Df5pZhws.js";import{T as u}from"./Text-DETIdekS.js";import{C as c}from"./Content-tG8cVCfJ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BiwmgULL.js";import"./index-BXYeEKBx.js";import"./index-BAQeQlIi.js";import"./ColumnLayout-Qx7NMkKb.js";import"./useFieldComponent-DJ8W8blY.js";import"./utils-CzEQVu_B.js";import"./useMakeFocusable-CzbMoYd9.js";import"./RadioGroup-BNfr1D5-.js";import"./FieldError-C22n8dTl.js";import"./Text-C_ulbvRg.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Di0BFhhp.js";import"./useLabel-x08fx3rG.js";import"./Label-Crm05hod.js";import"./Hidden-AXn-SW1d.js";import"./SelectionIndicator-t_QTWROb.js";import"./useFormValidation-DDUTP5mG.js";import"./useFocus-CcXCF9Et.js";import"./useFocusRing-DJCeTTlI.js";import"./useControlledState-Bk661CCw.js";import"./FocusScope-Bpw-7kqG.js";import"./context-DMBLfBJz.js";import"./useFormReset-Bwb9lNn2.js";import"./usePress-BjSa1aTn.js";import"./useFocusable-BrXzadpt.js";import"./VisuallyHidden-CdWE-b-g.js";import"./IconWarning-7VhmiBC1.js";import"./remote-__48vje9.js";import"./Label-KzCwLrnq.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DftyoPOP.js";import"./FieldError-DFjBSzci.js";import"./AlertText-DqO2-SeN.js";import"./AlertIcon-CvbzdPY4.js";import"./browser-Dno-4bzG.js";import"./EmulatedBoldText-Ddbav1xv.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

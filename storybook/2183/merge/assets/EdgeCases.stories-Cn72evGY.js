import{j as r}from"./iframe-BzW-9mMD.js";import{R as l,a as p}from"./Radio-CO9o3vbt.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-k-e1ZFnz.js";import{T as u}from"./Text-V56jcQh9.js";import{C as c}from"./Content-BTDfmSOV.js";import{R as n}from"./RadioButton-CG6M0zjl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-tWRCe5l6.js";import"./index-XmU95KIL.js";import"./index-DBI39Uex.js";import"./ColumnLayout-ykBG--7q.js";import"./useFieldComponent-CbusyouS.js";import"./utils-BrWwMsiw.js";import"./useMakeFocusable-BHZzRfa2.js";import"./RadioGroup-CIATfVJp.js";import"./FieldError-YIyLtRkF.js";import"./Text-lCB5Bcpt.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-DVsU3UIy.js";import"./useLabel-Fj4NeiZR.js";import"./Label-CGJ_PWGO.js";import"./Hidden-Dd9I5XIl.js";import"./SelectionIndicator-C_2dk6EH.js";import"./useFormValidation-CVoSAArr.js";import"./useFocus-dCAgOHv-.js";import"./useControlledState-Bv03b0O5.js";import"./FocusScope-CKC8wRja.js";import"./useFocusRing-g2ZbegJf.js";import"./context-42ert5Ah.js";import"./useFormReset-DSNp4f3d.js";import"./usePress-DuLlpULp.js";import"./useFocusable-CVjqM_08.js";import"./VisuallyHidden-BEoWdW55.js";import"./IconApp-BdfgmDZu.js";import"./remote-BEBWGiXy.js";import"./IconRadioOn-DfM97inG.js";import"./Label-BuckRFL6.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CwmxuNTv.js";import"./FieldError-CEOf2ovw.js";import"./IconDanger-BcSmAgIr.js";import"./browser-C2fMNT9-.js";import"./EmulatedBoldText-xlY4BdXR.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

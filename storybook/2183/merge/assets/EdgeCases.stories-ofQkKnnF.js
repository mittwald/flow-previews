import{j as r}from"./iframe-8dFSbqJz.js";import{R as l,a as p}from"./Radio-CUCsuGhX.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-Ci9f2-Fh.js";import{T as u}from"./Text-Bc5PmX1I.js";import{C as c}from"./Content-MqKiWSWQ.js";import{R as n}from"./RadioButton-BdVxDaTL.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-K_HgwY7e.js";import"./index-DdTsJ3wf.js";import"./index-QKd42-im.js";import"./ColumnLayout-ChM_L8u-.js";import"./useFieldComponent-Ch2X8LGy.js";import"./utils-CatxVoKl.js";import"./useMakeFocusable-ydsKztfn.js";import"./RadioGroup-E2DF4w9h.js";import"./FieldError-CAnV5-By.js";import"./Text-BVGarVrb.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-DGUlclkV.js";import"./useLabel-CKOrsKHI.js";import"./Label-BbJ0t0io.js";import"./Hidden-YN9d6EVo.js";import"./SelectionIndicator-BcqL5ZP5.js";import"./useFormValidation-BLhEH38g.js";import"./useFocus-BOo9d3Bd.js";import"./useControlledState-DYZXiDwW.js";import"./FocusScope-KuXCUz--.js";import"./useFocusRing-D1LOVY8w.js";import"./context-81xqWZ8H.js";import"./useFormReset-D0pwxFN1.js";import"./usePress-BOmL6f1-.js";import"./useFocusable-Bm2s2zNQ.js";import"./VisuallyHidden-PBFdwu-V.js";import"./IconChevronDown-BoB9X9Lx.js";import"./remote-D1_oWH-e.js";import"./IconRadioOn-ChwBZ8ar.js";import"./Label-B3-xaZya.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-YU3aOu6y.js";import"./FieldError-olPwxTHW.js";import"./IconDanger-D2WM-UH7.js";import"./browser-TJej2Zh2.js";import"./EmulatedBoldText-C5iTwKQF.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

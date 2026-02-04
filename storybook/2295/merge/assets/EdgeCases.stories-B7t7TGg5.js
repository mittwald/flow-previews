import{j as r}from"./iframe-D016uj-S.js";import{R as l,a as p}from"./Radio-erWOMWJS.js";import{R as n}from"./RadioButton-BfVPo_Pa.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-Cs6Silrk.js";import{T as u}from"./Text-BZY8Sc_P.js";import{C as c}from"./Content-Da5xEBET.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-wtQiCPfr.js";import"./index-CfkcKJZT.js";import"./index-BqMc4IgT.js";import"./ColumnLayout-CmmMxeys.js";import"./useFieldComponent-OnEMgUvv.js";import"./utils-DQASSsuC.js";import"./useMakeFocusable-zqzYwADm.js";import"./RadioGroup-s_wIOqSc.js";import"./FieldError-Db3WFp2b.js";import"./Text-DsGfukAy.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BRCZloZz.js";import"./useLabel-DeeX-PEx.js";import"./Label-LkWds508.js";import"./Hidden-DpSCwLxf.js";import"./SelectionIndicator-BhBccG1G.js";import"./useFormValidation-Cq6iPNGO.js";import"./useFocus-tZAxz16O.js";import"./useFocusRing-BdU2-3MK.js";import"./useControlledState-cpMkF7RC.js";import"./FocusScope-DtVgD18c.js";import"./context-CQQzrfiw.js";import"./useFormReset-BG0U5_Pu.js";import"./usePress-CVzN9kXH.js";import"./useFocusable-DeuIjFJe.js";import"./VisuallyHidden-D5-LZtaI.js";import"./IconWarning-BQBcHsun.js";import"./remote-CBH6kE0Y.js";import"./Label-CPn02_Ye.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CIw_JE4k.js";import"./FieldError-CW77VWgH.js";import"./AlertText-0Z7TF0Nn.js";import"./AlertIcon-DUg_mU1Z.js";import"./browser-DLaO_aqG.js";import"./EmulatedBoldText-CEIO41Nr.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

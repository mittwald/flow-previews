import{j as r}from"./iframe-Ca6Y6Qbd.js";import{R as l,b as p,a as n}from"./RadioButton-COVsorHQ.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CeFJS8IO.js";import{T as u}from"./Text-BEUemzSa.js";import{C as c}from"./Content-CbT8dvsA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D9fMwVbm.js";import"./index-Dtyg9OU-.js";import"./index-dqS1_mS3.js";import"./ColumnLayout-D5Q_My3I.js";import"./useFieldComponent-Drxg4ucu.js";import"./utils-CgPiupY7.js";import"./useMakeFocusable-563tR2pS.js";import"./RadioGroup-6CdKqKa1.js";import"./FieldError-DTh-affr.js";import"./Text-XI5tIYL5.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-DvyEl8-X.js";import"./useLabel-DSKkVaVQ.js";import"./Label-oMJsQOKa.js";import"./Hidden-B5n9q6va.js";import"./SelectionIndicator-Cqdhise0.js";import"./useFormValidation-CFRjiWi1.js";import"./useFocus-YlOppDM-.js";import"./useControlledState-CsFJYMR6.js";import"./FocusScope-g3u6sbgU.js";import"./useFocusRing-DB26dgIQ.js";import"./context-BSVjMcq9.js";import"./useFormReset-QXLzcWbc.js";import"./usePress-7njUzVdk.js";import"./useFocusable-DsA9Nlin.js";import"./VisuallyHidden-DA0DNDbd.js";import"./IconWarning-DE1Emhrq.js";import"./remote-B__m5VQE.js";import"./Label-BiOSulbp.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DPFID8Bg.js";import"./FieldError-Btuc_7Om.js";import"./AlertText-PH5mi2hk.js";import"./AlertIcon-CE0IjQiw.js";import"./browser-CbMIui3y.js";import"./EmulatedBoldText-B497YwdM.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ir=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,ir as __namedExportsOrder,tr as default};

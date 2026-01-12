import{j as r}from"./iframe-BUX4ZqHF.js";import{R as l,b as p,a as n}from"./RadioButton-KCAYnrHO.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-Cwe6v0-O.js";import{T as u}from"./Text-CCD2jWDE.js";import{C as c}from"./Content-CNAl-gN4.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CO2lzhPy.js";import"./index-DGSBrITf.js";import"./index-BP0Kc6JB.js";import"./ColumnLayout-BzZM9bnI.js";import"./useFieldComponent-L2xw4dQD.js";import"./utils-D9iTInv6.js";import"./useMakeFocusable-BUsvXOoL.js";import"./RadioGroup-Bg30ZgGM.js";import"./FieldError-DwISghd1.js";import"./Text-BG7MORzn.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-Dyklbi3v.js";import"./useLabel-DVc7LJa4.js";import"./Label-I8DqILoy.js";import"./Hidden-CmsGFsNY.js";import"./SelectionIndicator-C49t11ym.js";import"./useFormValidation-CdmTUY1H.js";import"./useFocus-CJRF0W0a.js";import"./useControlledState-CgyNYXn6.js";import"./FocusScope-CKMlMtX2.js";import"./useFocusRing-LYLGckDp.js";import"./context-DdyqVFXP.js";import"./useFormReset-DwYjTvSA.js";import"./usePress-DqXzXpsh.js";import"./useFocusable-CNxG1VTZ.js";import"./VisuallyHidden-CEZo4IbP.js";import"./IconWarning-CQ3vdTUk.js";import"./remote-CM65cF_Q.js";import"./Label-kgnV-RXM.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DBiOEglQ.js";import"./FieldError-BcNphJCj.js";import"./AlertText-C1IAOcr2.js";import"./AlertIcon-B17jmh6q.js";import"./browser-D0x3Xdqp.js";import"./EmulatedBoldText-B3B0n9A6.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-DzPnzOIh.js";import{R as l,b as p,a as n}from"./RadioButton-Ckl9gyBH.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CQ6-OqpS.js";import{T as u}from"./Text-CgXXsRbz.js";import{C as c}from"./Content-CAeaWyb5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DtgvO3oD.js";import"./index-DmmYMLHe.js";import"./index-nNa6hI3H.js";import"./ColumnLayout-BytaPVB3.js";import"./useFieldComponent-DttoHSbm.js";import"./utils-DdPADezN.js";import"./useMakeFocusable-DG7d7qOm.js";import"./RadioGroup-CjmWWWyO.js";import"./FieldError-BLx5YP6h.js";import"./Text-CKGruhzq.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-iisH2EsU.js";import"./useLabel-DAdMc5BC.js";import"./Label-BA4yL5_I.js";import"./Hidden-D_8gXEej.js";import"./SelectionIndicator-CD0MdUzw.js";import"./useFormValidation-DrH-jwNK.js";import"./useFocus-lCD3lNhC.js";import"./useFocusRing-h77ik7V4.js";import"./useControlledState-C5NVaprX.js";import"./FocusScope-Cit_E5zj.js";import"./context-D5QDMciq.js";import"./useFormReset-D5TocNhH.js";import"./usePress-COgw0Owx.js";import"./useFocusable-DMy60j_I.js";import"./VisuallyHidden-C2tKF7nl.js";import"./IconWarning-Dnclh3SV.js";import"./remote-Df33k4AK.js";import"./Label-Caopyz4i.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BZ1QP-fV.js";import"./FieldError-CliUFFQL.js";import"./AlertText-DawifhT6.js";import"./AlertIcon-BAMux0CS.js";import"./browser-DO1on-Lg.js";import"./EmulatedBoldText-Dcz9uFEQ.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

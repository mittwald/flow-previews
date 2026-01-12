import{j as r}from"./iframe-DpNCYkDX.js";import{R as l,b as p,a as n}from"./RadioButton-HEY5WdIv.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CGwlDphd.js";import{T as u}from"./Text-Bp6u83O8.js";import{C as c}from"./Content-BSJrgXoZ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DsLeaaVl.js";import"./index-C38UUpab.js";import"./index-lXFaKghW.js";import"./ColumnLayout-DGJJrAcK.js";import"./useFieldComponent-CtyBuaGz.js";import"./utils-YaT_C2bO.js";import"./useMakeFocusable-CMEHR1dt.js";import"./RadioGroup-CT8mlVJ3.js";import"./FieldError-DsNqYoam.js";import"./Text-B4MgbG6f.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-Ce-l7r4o.js";import"./useLabel-DtioSroH.js";import"./Label-DRXP2wjN.js";import"./Hidden-AzE2Q4X1.js";import"./SelectionIndicator-qbtLTFTY.js";import"./useFormValidation-Db_N1-Xt.js";import"./useFocus-CLy8_GQ0.js";import"./useControlledState-CFzFCELG.js";import"./FocusScope-DPz7ONOW.js";import"./useFocusRing-DWz_LOyJ.js";import"./context-Df7wrknH.js";import"./useFormReset-BsRaFjct.js";import"./usePress-OMCV4DY8.js";import"./useFocusable-BsZoANuz.js";import"./VisuallyHidden-BhiVW_d3.js";import"./IconWarning-CcmUiij-.js";import"./remote-FHZXAXl3.js";import"./Label-DxyEdRqz.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CJK7tFkI.js";import"./FieldError-CLVEK_uH.js";import"./AlertText-DNWtIllY.js";import"./AlertIcon-CnmOZB_U.js";import"./browser-BfCz5g6M.js";import"./EmulatedBoldText-DU1S0mM2.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

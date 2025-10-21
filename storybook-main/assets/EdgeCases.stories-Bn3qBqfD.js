import{j as r}from"./iframe-DALqHAyB.js";import{R as l,b as p,a as n}from"./RadioButton-N3ffTl_-.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-Cawy12ne.js";import{T as u}from"./Text-BxJmp77a.js";import{C as c}from"./Content-B2ZKSghG.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CvsgRxlP.js";import"./index-B4rQ27h-.js";import"./index-CPatoSxs.js";import"./ColumnLayout-BLUWfzns.js";import"./useFieldComponent-CuLkv2Wr.js";import"./utils-C0MA_VWy.js";import"./Text-vTixOjUz.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CcDUp5xj.js";import"./react-children-utilities-C1NF1MDP.js";import"./ClearPropsContext-frWmeUQW.js";import"./useMakeFocusable-D8hcpFKJ.js";import"./RadioGroup-Dq4sNq2w.js";import"./Form-DuNFHANS.js";import"./useLabel-85XHUWXZ.js";import"./Label-D28Pduqa.js";import"./Hidden-SLgE1qP8.js";import"./SelectionIndicator-D4RzQj7G.js";import"./useFormValidation-C14rVgab.js";import"./useFocus-CR3niFsF.js";import"./useControlledState-BAMCZ0BN.js";import"./FocusScope-7BxeDCH7.js";import"./useFocusRing-BpmoLA66.js";import"./context-aw0dYPtu.js";import"./useFormReset-C8DxwuW7.js";import"./usePress-RYFgUS1k.js";import"./useFocusable-UlymAToY.js";import"./VisuallyHidden-BkwE9NAp.js";import"./Label-DyIG2v27.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CC_Z0iQM.js";import"./browser-pVqjrops.js";import"./EmulatedBoldText-Dxvms5Wy.js";const or={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const er=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,er as __namedExportsOrder,or as default};

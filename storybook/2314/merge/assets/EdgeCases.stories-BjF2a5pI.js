import{j as r}from"./iframe-CtuK0rEJ.js";import{R as l,a as p}from"./Radio-CAcrtxDF.js";import{R as n}from"./RadioButton-DfqhQXDQ.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-6yLRINvR.js";import{T as u}from"./Text-CyAseKfN.js";import{C as c}from"./Content-Dair7L9H.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BsiSvDfm.js";import"./index-DyfnOEiT.js";import"./index-DPf65gvx.js";import"./ColumnLayout-CM3gAUW5.js";import"./useFieldComponent-CPjzSNK0.js";import"./utils-C1DNWP44.js";import"./useMakeFocusable-UqfX6KFQ.js";import"./RadioGroup-LZWZCAvs.js";import"./FieldError-AgjktxA6.js";import"./Text-DmIZo_mX.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-8SXxse9a.js";import"./useLabel-DJNpTGh1.js";import"./Label-BIhxl5Mj.js";import"./Hidden-lRNITHFC.js";import"./SelectionIndicator-Ds2JAiCA.js";import"./useFormValidation-uULaRcd4.js";import"./useFocus-N-Pc0sLJ.js";import"./useFocusRing-Dq2x8hiG.js";import"./useControlledState-Cc_BEFH0.js";import"./FocusScope-Cm3IhtBV.js";import"./context-BLHFXQwL.js";import"./useFormReset-C6F9Oqzr.js";import"./usePress-Da2cRPrr.js";import"./useFocusable-AhKszEdS.js";import"./VisuallyHidden-D1Q1E2fL.js";import"./IconWarning-BSe4G4Pm.js";import"./remote-DD8nhYq_.js";import"./Label-Cngj9T_J.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-C0fwd0wV.js";import"./FieldError-BKJxUnBZ.js";import"./AlertText-i0FuOWey.js";import"./AlertIcon-CPMEIwAr.js";import"./browser-Up8UMddv.js";import"./EmulatedBoldText-BeUk81Jn.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

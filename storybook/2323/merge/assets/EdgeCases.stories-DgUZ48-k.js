import{j as r}from"./iframe-Bq_dTdDz.js";import{R as l,a as p}from"./Radio-CoIe9nlW.js";import{R as n}from"./RadioButton-Ci4BX7FY.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DNYTs8aB.js";import{T as u}from"./Text-3w39UNLL.js";import{C as c}from"./Content-CIrJX21x.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BeJ1jrGf.js";import"./index-Dif5dzDL.js";import"./index-C2qM6Ecb.js";import"./ColumnLayout-DQHOSkp9.js";import"./useFieldComponent-C92nVZms.js";import"./utils-Dc83Zc3S.js";import"./useMakeFocusable-BdLOadfH.js";import"./RadioGroup-87QnrdZD.js";import"./FieldError-CB3_Y2qo.js";import"./Text-RESw6iu2.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Bm3_NoD-.js";import"./useLabel-BL_xrhrx.js";import"./Label-CPBWbyCv.js";import"./Hidden-CYUCWFXf.js";import"./SelectionIndicator-B0He5XEj.js";import"./useFormValidation-ofgJ0bTW.js";import"./useFocus-zY2zj5L9.js";import"./useFocusRing-C2_YEmjA.js";import"./useControlledState-DvV_L9jP.js";import"./FocusScope-jjJ71B2a.js";import"./context-DasT5rkr.js";import"./useFormReset-BNYkLVEo.js";import"./usePress-CxmEVb--.js";import"./useFocusable-B7WP4__g.js";import"./VisuallyHidden-6gUpRQYP.js";import"./IconWarning-AvRveFf8.js";import"./remote-BGgAcFUF.js";import"./Label-DlbZYBs5.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-jkyob1yB.js";import"./FieldError-ClLnELEE.js";import"./AlertText-DLrJVcTW.js";import"./AlertIcon-DR4HtAzR.js";import"./browser-D_Oin-6N.js";import"./EmulatedBoldText-D57I_Edz.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-HHIIuBER.js";import{R as l,b as p,a as n}from"./RadioButton-Dk-LmQW4.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CMlGOlrF.js";import{T as u}from"./Text-1gTdtZLR.js";import{C as c}from"./Content-Fx75tQH7.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Bj-yCW37.js";import"./index-GTbupaTN.js";import"./index-CXDCOpiF.js";import"./ColumnLayout-CCiluCHS.js";import"./useFieldComponent-DUw61_cc.js";import"./utils-Cg0Q0SJj.js";import"./useMakeFocusable-Dw3qKCJa.js";import"./RadioGroup-BUzi86eW.js";import"./FieldError-DxbTuNm9.js";import"./Text-XNblTka2.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-bxdneiGL.js";import"./useLabel-5SH0-wGx.js";import"./Label-DYUVUuL-.js";import"./Hidden-B0PUXGbF.js";import"./SelectionIndicator-D4-zI_jf.js";import"./useFormValidation-CzNeWdfJ.js";import"./useFocus--KWf2FGc.js";import"./useFocusRing-4HIuR3kq.js";import"./useControlledState-DbjjrDzt.js";import"./FocusScope-BRQqWTqz.js";import"./context-BwOS-W-N.js";import"./useFormReset-9uO05BU2.js";import"./usePress-DR7SsbUT.js";import"./useFocusable-CK9MQKQ0.js";import"./VisuallyHidden-W06uk0vU.js";import"./IconWarning-CPuUEZGY.js";import"./remote-MyOm1NIW.js";import"./Label-CBXKH6Tn.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BQVDI3r4.js";import"./FieldError-Fy3l3DO0.js";import"./AlertText-DlszfG1H.js";import"./AlertIcon-CK1OfGfa.js";import"./browser-BiwdkBmz.js";import"./EmulatedBoldText-DygQZkyN.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

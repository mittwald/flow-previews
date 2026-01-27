import{j as r}from"./iframe-COrLnxQ5.js";import{R as l,b as p,a as n}from"./RadioButton-B-PubK71.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CJIRn9KK.js";import{T as u}from"./Text-xUIxpGpZ.js";import{C as c}from"./Content-B4mAPZYH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Whsy6gdm.js";import"./index-B8mhWUvU.js";import"./index-C_Qn4vD5.js";import"./ColumnLayout-D-DgWvpX.js";import"./useFieldComponent-CTuZy_pY.js";import"./utils-VsjjISTT.js";import"./useMakeFocusable--RoBu-o0.js";import"./RadioGroup-DPNhdkqD.js";import"./FieldError-Ed5Dpq4f.js";import"./Text-DGq4TjGO.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-nqQow0mS.js";import"./useLabel-Dc-mlO3X.js";import"./Label-B0iAgBS9.js";import"./Hidden-JddfwHBV.js";import"./SelectionIndicator-DN8aDza5.js";import"./useFormValidation-Cve5G398.js";import"./useFocus-D07Nw9k2.js";import"./useFocusRing-DLXXvYqO.js";import"./useControlledState-B-eslxlj.js";import"./FocusScope-DyecdLbF.js";import"./context-BGD9bWhq.js";import"./useFormReset-CUYGlILL.js";import"./usePress-BYo5WNMt.js";import"./useFocusable-BKqCzfQc.js";import"./VisuallyHidden-DMXfMtnF.js";import"./IconWarning-CG-OJrgb.js";import"./remote-DmDOnO_p.js";import"./Label-D_znJf4n.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CnLjSwJ3.js";import"./FieldError-CF8bH68v.js";import"./AlertText-CPhKjMMj.js";import"./AlertIcon-DPoTsBR0.js";import"./browser-_tQTAo3E.js";import"./EmulatedBoldText-BCoG1WnK.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

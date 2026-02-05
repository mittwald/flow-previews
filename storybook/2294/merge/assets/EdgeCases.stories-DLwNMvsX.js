import{j as r}from"./iframe-BAsHckrK.js";import{R as l,a as p}from"./Radio-BmLdSt2A.js";import{R as n}from"./RadioButton-A9iununL.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-BFXa7MbJ.js";import{T as u}from"./Text-B__BY7tJ.js";import{C as c}from"./Content-DmirrWG5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B65nQAul.js";import"./index-CyIJxzCh.js";import"./index-Cf_R1xcK.js";import"./ColumnLayout-BpfPCUmd.js";import"./useFieldComponent-uzP_CJXZ.js";import"./utils-AcXTY-LA.js";import"./useMakeFocusable-m8iNb7YZ.js";import"./RadioGroup-CxQgMlVd.js";import"./FieldError-Ch8lYR65.js";import"./Text-CORhkzC6.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BEcGmyNR.js";import"./useLabel-Zs1yjNWV.js";import"./Label-Cla8ySRz.js";import"./Hidden-CitD2GXi.js";import"./SelectionIndicator-ClkIlDZY.js";import"./useFormValidation-l5tjlCjY.js";import"./useFocus-DSg5hzPG.js";import"./useFocusRing-PAL8hD_p.js";import"./useControlledState-DIA42IR3.js";import"./FocusScope-BSJXv8u1.js";import"./context-BKg0mO6Y.js";import"./useFormReset-BBc75pQ_.js";import"./usePress-BtuPSsUz.js";import"./useFocusable-DEw7yEFU.js";import"./VisuallyHidden-BIPiOxSh.js";import"./IconWarning-DHq1gdF3.js";import"./remote-5f3Q71VQ.js";import"./Label-DVOhOuhT.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CGl9WC2_.js";import"./FieldError-ZX2j7DJQ.js";import"./AlertText-CZdsx7H2.js";import"./AlertIcon-C2q1LJ0F.js";import"./browser-tZCM2k1B.js";import"./EmulatedBoldText-BuJbkCoS.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

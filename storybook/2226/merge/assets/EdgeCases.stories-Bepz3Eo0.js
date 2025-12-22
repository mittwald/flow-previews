import{j as r}from"./iframe-ChVCZzSM.js";import{R as l,b as p,a as n}from"./RadioButton-DsQaTM1H.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-lbuWcPkQ.js";import{T as u}from"./Text-CDV1KOVg.js";import{C as c}from"./Content-DYWJ1E0X.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CzVJsrSl.js";import"./index-AQkY3hEg.js";import"./index-B17aiXwm.js";import"./ColumnLayout-O6NRbhP0.js";import"./useFieldComponent--rNpfgQ4.js";import"./utils-D2Dbeo4Y.js";import"./useMakeFocusable-bUyn9rOf.js";import"./RadioGroup-BGZyFyw4.js";import"./FieldError-CO11AzDW.js";import"./Text-JkP9a4Kb.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-6QLzzpDB.js";import"./useLabel-DQfYHHHP.js";import"./Label-B7WWEN6i.js";import"./Hidden-CmNYW2sS.js";import"./SelectionIndicator-CB8Y-x_O.js";import"./useFormValidation-BwLvk9We.js";import"./useFocus-D0NBuExq.js";import"./useControlledState-BqHrqPJL.js";import"./FocusScope-BLCDYAIb.js";import"./useFocusRing-BKxozeV4.js";import"./context-DJbicbqJ.js";import"./useFormReset-BrkbasLl.js";import"./usePress-DJQIPi1Q.js";import"./useFocusable-DqNAAmsp.js";import"./VisuallyHidden-DGYqp_5z.js";import"./IconWarning-DiIA_Kv4.js";import"./remote-B9ld2KSn.js";import"./Label-CXZGfNo-.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CLU1Wmp0.js";import"./FieldError-DeqqVmMl.js";import"./browser-Drl1pS0o.js";import"./EmulatedBoldText-DJ1rAIrZ.js";const er={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ar=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,ar as __namedExportsOrder,er as default};

import{j as r}from"./iframe-ByN7k_Da.js";import{R as l,b as p,a as n}from"./RadioButton-BzKIT76n.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CefRO8Ue.js";import{T as u}from"./Text-Cb-8LAS5.js";import{C as c}from"./Content-B94SBwdF.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BgbG9tfm.js";import"./index-4o_WvcDw.js";import"./index-bUl7c0HC.js";import"./ColumnLayout-Db74S0nA.js";import"./useFieldComponent-DAKvP2zf.js";import"./utils-D8xEYOuW.js";import"./useMakeFocusable-BzZ2cP-Q.js";import"./RadioGroup-cowCLAfy.js";import"./FieldError-JBJ_RfAm.js";import"./Text-j0nufsIB.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-Ccgq6KTF.js";import"./useLabel-x0Vjylpp.js";import"./Label-BgjwP7On.js";import"./Hidden-LyHOqGkt.js";import"./SelectionIndicator-C44R85aV.js";import"./useFormValidation-C6EqEf55.js";import"./useFocus-CetkVqMR.js";import"./useControlledState-kSDz6lD9.js";import"./FocusScope-gvfOB4kd.js";import"./useFocusRing-BkJgNFf3.js";import"./context-rGL7bC8_.js";import"./useFormReset-Bc5cKrWY.js";import"./usePress-BphJYqm5.js";import"./useFocusable-D-qYSNYm.js";import"./VisuallyHidden-CV3OLvgc.js";import"./IconWarning-DZTSBBmw.js";import"./remote-DfUdRpIa.js";import"./Label-BBHPfwM0.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BD0UWBkN.js";import"./FieldError-Dqic_FOg.js";import"./AlertText-BchUExTw.js";import"./AlertIcon-5K33k8fm.js";import"./browser-Co1wUnJx.js";import"./EmulatedBoldText-BCkrp6N6.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

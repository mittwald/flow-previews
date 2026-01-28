import{j as r}from"./iframe-CFLRrV9_.js";import{R as l,b as p,a as n}from"./RadioButton-LutLjVs0.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DEA6JbtB.js";import{T as u}from"./Text-DEmvrg4f.js";import{C as c}from"./Content-DbOXgRPA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Cgcg4reG.js";import"./index-C9HjT8vY.js";import"./index-24zjo-Kb.js";import"./ColumnLayout-c_CudPq8.js";import"./useFieldComponent-CywuRKF5.js";import"./utils-9RAZgTTl.js";import"./useMakeFocusable-C4OBi2te.js";import"./RadioGroup-9A4BJZiK.js";import"./FieldError-D073kW89.js";import"./Text-DCjLwlBM.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-HxVpGshA.js";import"./useLabel-C42gu-3e.js";import"./Label-CRwaxTbk.js";import"./Hidden-DI4qxTyt.js";import"./SelectionIndicator-DLBwj5hd.js";import"./useFormValidation-Cm_zD3mV.js";import"./useFocus-DD1T6bJ4.js";import"./useFocusRing-DRVonXEI.js";import"./useControlledState-BS0DqA_d.js";import"./FocusScope-To3K9I_L.js";import"./context-bb3yZDI9.js";import"./useFormReset-BcY6_uyQ.js";import"./usePress-LdOf-GEu.js";import"./useFocusable-CQU1ZNCF.js";import"./VisuallyHidden-DH38u7VP.js";import"./IconWarning-DnD-gw4t.js";import"./remote-BB1QWzBE.js";import"./Label-DDweLn-B.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BTtlqG0g.js";import"./FieldError-BY_h0DzJ.js";import"./AlertText-BwXe_CUh.js";import"./AlertIcon-Dk-GLzZT.js";import"./browser-6ZyX-izP.js";import"./EmulatedBoldText-DW1BlzUv.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-BF3zk0it.js";import{R as l,a as p}from"./Radio-CupPNIDl.js";import{R as n}from"./RadioButton-BcLC4OgJ.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CJPluGN0.js";import{T as u}from"./Text-C9_U4GIb.js";import{C as c}from"./Content-DDW4skoa.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CmGrxW8D.js";import"./index-CYSNwget.js";import"./index-S59XLRls.js";import"./ColumnLayout-DYqYsNcJ.js";import"./useFieldComponent-Z2yLJYUo.js";import"./utils-Ds629Okb.js";import"./useMakeFocusable-CNDpUSUP.js";import"./RadioGroup-CMgaRnEi.js";import"./FieldError-WTvIa9hl.js";import"./Text-CwwNB0nU.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-r-oZJvOh.js";import"./useLabel-CnUcYl5P.js";import"./Label-Df1ayrWx.js";import"./Hidden-DHsUmrVt.js";import"./SelectionIndicator-DPkZaIrz.js";import"./useFormValidation-Clvn3NKc.js";import"./useFocus-BGqYFkhn.js";import"./useFocusRing-C8HzCuNM.js";import"./useControlledState-ChKdFYY_.js";import"./FocusScope-YXqkLzes.js";import"./context-B_W42rBs.js";import"./useFormReset-Dd7cUUSK.js";import"./usePress-DqnzUH3I.js";import"./useFocusable-BWie7cw6.js";import"./VisuallyHidden-P8G91P8h.js";import"./IconWarning-BmoaMC54.js";import"./remote-CJL-gtYq.js";import"./Label-DcRc8bay.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DvXTg0S-.js";import"./FieldError-C2kAtlyK.js";import"./AlertText-BB1yiwFt.js";import"./AlertIcon-CwrMzrhG.js";import"./browser-Cxel5Cqf.js";import"./EmulatedBoldText-tEygNJi1.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-CdHyQgwh.js";import{R as l,a as p}from"./Radio-C9hBkCLj.js";import{R as n}from"./RadioButton-CXss9h7t.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-BhvK19z1.js";import{T as u}from"./Text-CG9Jqgcw.js";import{C as c}from"./Content-CeVPKDmn.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C7-oBhxO.js";import"./index-C1bimC6f.js";import"./index--KyPRnlY.js";import"./ColumnLayout-CaV_2vby.js";import"./useFieldComponent-t62DY9AA.js";import"./utils-B0AChKxF.js";import"./useMakeFocusable-0wkkx8l8.js";import"./RadioGroup-DaVDAY5g.js";import"./FieldError-BTLVyZmC.js";import"./Text-CFtcNM5e.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BHZ6w-7V.js";import"./useLabel-DXx1BftH.js";import"./Label-Cm5GkE6R.js";import"./Hidden-DJi7BiD_.js";import"./SelectionIndicator-DV4fwApE.js";import"./useFormValidation-8M-A-L7s.js";import"./useFocus-D4xdQDkq.js";import"./useFocusRing-Ba3uGuMn.js";import"./useControlledState-D2jLiTCX.js";import"./FocusScope-OuWnR4TG.js";import"./context--lHaHpmz.js";import"./useFormReset-D88R_CF2.js";import"./usePress-DIa0iaS-.js";import"./useFocusable-CIZyv2_u.js";import"./VisuallyHidden-U7btBlyO.js";import"./IconWarning-DGc3SgEa.js";import"./remote-BRyh19SP.js";import"./Label-C70YwB90.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-UNvRhnZH.js";import"./FieldError-BmlEdUcT.js";import"./AlertText-DldHmlNs.js";import"./AlertIcon-yA83KE1p.js";import"./browser-CBJMDWdB.js";import"./EmulatedBoldText-C0e2olgf.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

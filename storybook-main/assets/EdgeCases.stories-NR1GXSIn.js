import{j as r}from"./iframe-DoVgBQr5.js";import{R as l,b as p,a as n}from"./RadioButton-CWDx3TkN.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CN3XHcya.js";import{T as u}from"./Text-DarT3iBq.js";import{C as c}from"./Content-CUixd5MO.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-KNPphWYF.js";import"./index-jEdNOdxF.js";import"./index-CnXLT15x.js";import"./ColumnLayout-0w58qLAQ.js";import"./useFieldComponent-Dl5zd8_u.js";import"./utils-BUNxWnYj.js";import"./Text-BnwT6LTw.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BITNguYJ.js";import"./react-children-utilities-NLX1q1W1.js";import"./ClearPropsContext-8Ai0JzP3.js";import"./useMakeFocusable-4hJKvVl2.js";import"./RadioGroup-hIexF6-A.js";import"./Form-ISVWAvzv.js";import"./useLabel-Dokwxw5N.js";import"./Label-8ulleTCg.js";import"./Hidden-VhCLrHg5.js";import"./SelectionIndicator-DHuWhUvH.js";import"./useFormValidation-BBVxENjx.js";import"./useFocus-DgyX4ANK.js";import"./useControlledState-JsyFwj7N.js";import"./FocusScope-DbQQ9osx.js";import"./useFocusRing-C7RfsB5U.js";import"./context-DKZO50eL.js";import"./useFormReset-DOuAY3sG.js";import"./usePress-CMEqlp6n.js";import"./useFocusable-CYiqpOWe.js";import"./VisuallyHidden-BzJhkBGh.js";import"./Label-B_iGOO1o.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-C282_ari.js";import"./browser-CTr_Jj6j.js";import"./EmulatedBoldText-Ck3zADpv.js";const or={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const er=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,er as __namedExportsOrder,or as default};

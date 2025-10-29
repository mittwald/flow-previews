import{j as r}from"./iframe-9LT5pwxo.js";import{R as l,b as p,a as n}from"./RadioButton-BHu1h0gr.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-C_SvRyGf.js";import{T as u}from"./Text-FZjxGLxv.js";import{C as c}from"./Content-B3h9p_Zt.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CmrMiIfZ.js";import"./index-CJEFfs1t.js";import"./index-B4OxUaac.js";import"./ColumnLayout-D148nTfF.js";import"./useFieldComponent-FBKhS2uw.js";import"./utils-C12iYS2x.js";import"./Text-cT0V7Crl.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BGmK8I3p.js";import"./react-children-utilities-CGBnGU1K.js";import"./ClearPropsContext-BgV1DGsr.js";import"./useMakeFocusable-3ac7XBnQ.js";import"./RadioGroup-BT_2DHoz.js";import"./Form-PBwv22gS.js";import"./useLabel-D0_ysNiP.js";import"./Label-B9A8CQ6N.js";import"./Hidden-Dc5yMvqI.js";import"./SelectionIndicator-CcfS7mad.js";import"./useFormValidation-gXwoIgM4.js";import"./useFocus-CGIGFm0L.js";import"./useControlledState-B0dx1ah2.js";import"./FocusScope-ahtwD87J.js";import"./useFocusRing-BpS4vJuf.js";import"./context-CZZdPtMN.js";import"./useFormReset-DsyYy3rG.js";import"./usePress-CYkWbbQS.js";import"./useFocusable-6Pd0pdJi.js";import"./VisuallyHidden-kbtTP9xl.js";import"./Label-Cy0HO6mF.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-Ay0utv6w.js";import"./browser-Be7wxfSs.js";import"./EmulatedBoldText-z8AdBhol.js";const or={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

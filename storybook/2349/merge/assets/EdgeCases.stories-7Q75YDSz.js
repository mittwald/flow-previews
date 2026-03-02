import{j as r}from"./iframe-uf-MKLgq.js";import{R as l,a as p}from"./Radio-XPdk-exk.js";import{R as n}from"./RadioButton-B7YZZzn1.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-BSPGqSuj.js";import{T as u}from"./Text-CwTgn3ty.js";import{C as c}from"./Content-BG_xlhhi.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CR1nBuBt.js";import"./index-B7owIbBs.js";import"./index-CTOYeHPx.js";import"./ColumnLayout-DmBOUz7P.js";import"./useFieldComponent-oiltg6td.js";import"./utils-DZ6AixXo.js";import"./useMakeFocusable-C7I8z0mP.js";import"./RadioGroup-BxPaHw_6.js";import"./FieldError-hMdCLiLA.js";import"./Text-DCWOF5Yr.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Clq2RMYH.js";import"./useLabel-CdaYwKww.js";import"./Label-Cdykpluf.js";import"./Hidden-lq-QDLcj.js";import"./SelectionIndicator-DxP3RRah.js";import"./useFormValidation-DWm9SC-U.js";import"./useFocus-BMvnG0Qw.js";import"./useFocusRing-190z59Bo.js";import"./useControlledState-BuF4aZkb.js";import"./FocusScope-1QvypY2n.js";import"./context-DqOu6PGu.js";import"./useFormReset-D43--mAD.js";import"./usePress-BdqiHW2G.js";import"./useFocusable-C3B5EmJ3.js";import"./VisuallyHidden-CibrapRB.js";import"./IconWarning-BGOvrRAj.js";import"./remote-7esdTMhw.js";import"./Label-CnhLMz3J.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-C1Nv7YrM.js";import"./FieldError-DuL8_ys6.js";import"./AlertText-CTyPJTrr.js";import"./AlertIcon-C9HYB2oh.js";import"./browser-CS6yJLU7.js";import"./EmulatedBoldText-BnnwN73K.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

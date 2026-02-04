import{j as r}from"./iframe-Da9Lw8R_.js";import{R as l,a as p}from"./Radio-BIImdXVO.js";import{R as n}from"./RadioButton-Cgv0l9i1.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-fHhPLjlv.js";import{T as u}from"./Text-l_fYsQ08.js";import{C as c}from"./Content-kEzQxQz5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DSxpIroI.js";import"./index-CM0YhoHL.js";import"./index-TT_JC2bB.js";import"./ColumnLayout-CsQ4TzDm.js";import"./useFieldComponent-yufHgNqa.js";import"./utils-Cwd4tFKX.js";import"./useMakeFocusable-CrspawdT.js";import"./RadioGroup-DLyQ-pHJ.js";import"./FieldError-DSdSdK3H.js";import"./Text-CpGlsQu3.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-D3ZAWear.js";import"./useLabel-CzV-HlgB.js";import"./Label-CkI4JdYz.js";import"./Hidden-BIMJR4Fs.js";import"./SelectionIndicator-DjHwUAme.js";import"./useFormValidation-DjSyrx87.js";import"./useFocus-BBVXnzgP.js";import"./useFocusRing-BItT14i_.js";import"./useControlledState-B4YxKAgg.js";import"./FocusScope-BpnzFkst.js";import"./context-CsdpTyhd.js";import"./useFormReset-4DR8Px1h.js";import"./usePress-BIogNAwh.js";import"./useFocusable-CwPW854N.js";import"./VisuallyHidden-gkajg-fe.js";import"./IconWarning-BYkwpstY.js";import"./remote-CsFbcl9r.js";import"./Label-D7d2SkgN.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BWd2uPhV.js";import"./FieldError-DXoqYbez.js";import"./AlertText-bxsLSC5L.js";import"./AlertIcon-Co0MJDJf.js";import"./browser-DDWH8I0V.js";import"./EmulatedBoldText-CVyVzJMR.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

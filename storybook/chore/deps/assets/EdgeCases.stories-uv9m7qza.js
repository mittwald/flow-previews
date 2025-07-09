import{j as r}from"./iframe-DdrpCK7O.js";import{R as p,b as l,a as n}from"./RadioButton-BQV2RGmr.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-D7vlZ2WC.js";import{T as u}from"./Text-CaSL42bb.js";import{C as c}from"./Content-DNXKTnJE.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B-M9Ok3D.js";import"./mergeRefs-Bbw3w7Zz.js";import"./index-7qYBiH1_.js";import"./FieldError-CvYAv6kd.js";import"./IconWarning-lf4U_i6L.js";import"./FieldError-ENGkQJvk.js";import"./utils-jbl8fYpp.js";import"./Text-Diya8EQq.js";import"./filterDOMProps-CrrfCvhk.js";import"./ColumnLayout-BvS02pFt.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-CsbZ-F58.js";import"./Form-BaMTKeVV.js";import"./useFocus-DysN_qPg.js";import"./useLabel-BGrVe235.js";import"./Label-q6ExZamY.js";import"./Hidden-YoIeoCE-.js";import"./useFormReset-CJ-aoIOb.js";import"./usePress-wge_TV6C.js";import"./useFocusRing-BnOgNpG6.js";import"./useFocusable-CpPH01B7.js";import"./FocusScope-DAuqHH8A.js";import"./context-BHbmanCt.js";import"./VisuallyHidden--_7cmU_k.js";import"./useControlledState-N3OdDP8Q.js";import"./Label-icuqrMlJ.js";import"./useLocalizedStringFormatter-DTJzl0HQ.js";import"./browser-CJKA82in.js";import"./EmulatedBoldText-BlAgkMNP.js";const W={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,e)=>r.jsxs(n,{value:e.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,e)=>r.jsxs(n,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const X=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,X as __namedExportsOrder,W as default};

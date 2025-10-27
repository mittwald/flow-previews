import{j as r}from"./iframe-C3YinX3s.js";import{R as l,b as p,a as n}from"./RadioButton-iDiNwfKM.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DNoFePzP.js";import{T as u}from"./Text-40KOd3GJ.js";import{C as c}from"./Content-nKB3Ih0q.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DbYaKppP.js";import"./index-PmbawSGG.js";import"./index-BppZCGPZ.js";import"./ColumnLayout-D2J7tdP1.js";import"./useFieldComponent-unfYr68o.js";import"./utils-CkQtaKCN.js";import"./Text-2o-hGpxv.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-6TASCfRR.js";import"./react-children-utilities-Tlnpa_z4.js";import"./ClearPropsContext-CJ1szkV5.js";import"./useMakeFocusable-DG0DAth_.js";import"./RadioGroup-upMBiahQ.js";import"./Form-BCJL5_dO.js";import"./useLabel-6oysTp78.js";import"./Label-uL4LTRYY.js";import"./Hidden-RtymAw99.js";import"./SelectionIndicator-CWOLS5ft.js";import"./useFormValidation-mKao3Dkx.js";import"./useFocus-DuIK45_5.js";import"./useControlledState-DTNxqflL.js";import"./FocusScope-fcPAzZ97.js";import"./useFocusRing-BT4tpo7d.js";import"./context-XadyItFl.js";import"./useFormReset-BgD1M5By.js";import"./usePress-CEE7eirG.js";import"./useFocusable-Cpx8bVI7.js";import"./VisuallyHidden-Bah8oUIC.js";import"./Label-vc6tDbdp.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-D8x_j-oY.js";import"./browser-DlgIuTl3.js";import"./EmulatedBoldText-DmHQDGMB.js";const or={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

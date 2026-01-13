import{j as r}from"./iframe-D5OSMSYj.js";import{R as l,b as p,a as n}from"./RadioButton-CuMwnXIs.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-Cz2QX2xq.js";import{T as u}from"./Text-DAhCT_ah.js";import{C as c}from"./Content-D98FgA3K.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CcKBrJMM.js";import"./index-B83pCPPs.js";import"./index-Bwk6EGM5.js";import"./ColumnLayout-t1PbuftC.js";import"./useFieldComponent-yQbkUBpw.js";import"./utils-B2fStg81.js";import"./useMakeFocusable-C0k3bIfg.js";import"./RadioGroup-B680Wedt.js";import"./FieldError-SdvWZoRR.js";import"./Text-DxpiEtGq.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-RJ7gT7dr.js";import"./useLabel-CQkx52KA.js";import"./Label-Bh0iBwH8.js";import"./Hidden-NmD_pG7l.js";import"./SelectionIndicator-BCMQtvaW.js";import"./useFormValidation-BzDFxNXO.js";import"./useFocus-C6h-AdFL.js";import"./useControlledState-BLX_f1Wx.js";import"./FocusScope-fzjvqtWs.js";import"./useFocusRing-D5zyjxEp.js";import"./context-CCC3vGzE.js";import"./useFormReset-C4H0cf_a.js";import"./usePress-Db_mMnan.js";import"./useFocusable-BBmYajA6.js";import"./VisuallyHidden-arLJjMse.js";import"./IconWarning-aBoV8v8e.js";import"./remote-DoBIDVY0.js";import"./Label-CF1-K3Zk.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BQCOTIex.js";import"./FieldError-DkXkFVgN.js";import"./AlertText-BnzdsAWE.js";import"./AlertIcon-CDVTToII.js";import"./browser-CPg_spJX.js";import"./EmulatedBoldText-Dm6vKeJS.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

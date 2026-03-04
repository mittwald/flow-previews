import{j as r}from"./iframe-CwpToEZy.js";import{R as l,a as p}from"./Radio-BI-Fs2Pf.js";import{R as n}from"./RadioButton-BzGv7srx.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DlWBw-IE.js";import{T as u}from"./Text-DRk3V-Fm.js";import{C as c}from"./Content-04TsN1VN.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Cp6ETj3c.js";import"./index-BxA-n0N3.js";import"./index-G1voh-81.js";import"./ColumnLayout-CCCmpUtK.js";import"./useFieldComponent-CneqxYGw.js";import"./utils-3nROwXn_.js";import"./useMakeFocusable-DYYj1boi.js";import"./RadioGroup-DDcTedqS.js";import"./FieldError-BoYVEB6S.js";import"./Text-Cb4d8n7F.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Di0COYqU.js";import"./useLabel-C-XdPLXI.js";import"./Label-CzzCYqTs.js";import"./Hidden-CMtZVdai.js";import"./SelectionIndicator-ByN8hOyY.js";import"./useFormValidation-pFRcrJM7.js";import"./useFocus-BFSvAolX.js";import"./useFocusRing-CJeIxJct.js";import"./useControlledState-BvlK1ysl.js";import"./FocusScope-CBNoFIyM.js";import"./context-DWVDZDUv.js";import"./useFormReset-BARG9uBg.js";import"./usePress-kUL6l53_.js";import"./useFocusable-ixEZOImu.js";import"./VisuallyHidden-CnggHClH.js";import"./IconWarning-BRui_VYo.js";import"./remote-DRomu556.js";import"./Label-BX1OHHkE.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BTLJGA-d.js";import"./FieldError-P_YSxT2d.js";import"./AlertText-B3iqZ-8C.js";import"./AlertIcon-DEQIepDy.js";import"./browser-DhIaf7O7.js";import"./EmulatedBoldText-YNefbpnq.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

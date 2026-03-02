import{j as r}from"./iframe-bYrN4iqU.js";import{R as l,a as p}from"./Radio-Bd1Wg62n.js";import{R as n}from"./RadioButton-Bgkw0s5c.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DwrsUURV.js";import{T as u}from"./Text-Ggj8lIEk.js";import{C as c}from"./Content-CMnar5EJ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DKWMiQh4.js";import"./index-BecUo0Hm.js";import"./index-ByZhX1CH.js";import"./ColumnLayout-BJE5PH3z.js";import"./useFieldComponent-CM1iSrAB.js";import"./utils-B3voqzat.js";import"./useMakeFocusable-DUScPtCl.js";import"./RadioGroup-C-ZU4Uqm.js";import"./FieldError-BBcT2nDa.js";import"./Text-Dj7c1Gq2.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-RNfZ8NGW.js";import"./useLabel-xelku7uN.js";import"./Label-BHh_gacH.js";import"./Hidden-kCI5Fish.js";import"./SelectionIndicator-MjQ5C6Rd.js";import"./useFormValidation-CAwH-_ip.js";import"./useFocus-DIDqk3LI.js";import"./useFocusRing-D4lo4_Zr.js";import"./useControlledState-hBcxnaS2.js";import"./FocusScope-DaLeJatZ.js";import"./context-Hrlbzros.js";import"./useFormReset-Cb31B_gj.js";import"./usePress-CHP3pRkH.js";import"./useFocusable-fXM7Y9pN.js";import"./VisuallyHidden-DAWjrZx-.js";import"./IconWarning-m_DFVeXI.js";import"./remote-zHy9wvpL.js";import"./Label-CPmhF0es.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-gsFqTt9C.js";import"./FieldError-DELvRCSS.js";import"./AlertText-BULPfvI7.js";import"./AlertIcon-fl_R2PKX.js";import"./browser-CHbB-bBA.js";import"./EmulatedBoldText-Dg0kR_8L.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-fd4MG1i8.js";import{R as l,b as p,a as n}from"./RadioButton-BT6xokxh.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DM4NftQ9.js";import{T as u}from"./Text-Dcd0JdvI.js";import{C as c}from"./Content-CX56arVC.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CuscKuFt.js";import"./index-CeLeQ-qQ.js";import"./index-DLSCOdFN.js";import"./ColumnLayout-BD_c0O62.js";import"./useFieldComponent-CTpQ-XZg.js";import"./utils-Cwcb_ph1.js";import"./Text-Ct_tO_6D.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-9sqw3U7E.js";import"./react-children-utilities-CIQCctRB.js";import"./ClearPropsContext-BW7itMIx.js";import"./useMakeFocusable-DLeuMSJI.js";import"./RadioGroup-DrS77rly.js";import"./Form-DF5wN6HS.js";import"./useLabel-DjhpIeNr.js";import"./Label-Cas_0aCA.js";import"./Hidden-DL9_D-g9.js";import"./SelectionIndicator-CThd_G6x.js";import"./useFormValidation-C8R7XiMh.js";import"./useFocus-BWTUKGe5.js";import"./useControlledState-oGGPnlEt.js";import"./FocusScope-29AKamG2.js";import"./useFocusRing-LifWKPgp.js";import"./context-Dbob8nST.js";import"./useFormReset-NfLpwngh.js";import"./usePress-P37V2JO8.js";import"./useFocusable-9_bYGa78.js";import"./VisuallyHidden-CO0qVHJy.js";import"./Label-DcZaDq0J.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CKY9Jmr8.js";import"./browser-Dh_0Zrut.js";import"./EmulatedBoldText-BOq1lZio.js";const or={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

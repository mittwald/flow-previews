import{j as r}from"./iframe-bJ_6fidF.js";import{R as l,b as p,a as n}from"./RadioButton-BnkDnfaJ.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-HGyx4BOA.js";import{T as u}from"./Text-38_GgC7q.js";import{C as c}from"./Content-CiAVQbFv.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dc3IE02E.js";import"./index-BiU4KtXW.js";import"./index-DZS8fxXA.js";import"./ColumnLayout-PaBNvAk_.js";import"./useFieldComponent-uPh6Au6A.js";import"./utils-2JACcOpK.js";import"./useMakeFocusable-Bc8NGf_b.js";import"./RadioGroup-MnWl8sCl.js";import"./FieldError-BXkLcNaX.js";import"./Text-BK6SVPNL.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-u1KpLyfA.js";import"./useLabel-DgCjbnqL.js";import"./Label-ITTSHdKZ.js";import"./Hidden-D-D3cT6t.js";import"./SelectionIndicator-smcarjhT.js";import"./useFormValidation-CfG5OslG.js";import"./useFocus-DCEJi5pX.js";import"./useControlledState-DiZTTo94.js";import"./FocusScope-C6rup_Tq.js";import"./useFocusRing-BfXNN7l5.js";import"./context-BRobVGip.js";import"./useFormReset-nMFTazsC.js";import"./usePress-DUWDHSym.js";import"./useFocusable-s9iArTw-.js";import"./VisuallyHidden-BLAg7qtf.js";import"./IconWarning-BRVy1IKm.js";import"./remote-BGnMaeOw.js";import"./Label-jHNg7W3d.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DVRf4Nef.js";import"./FieldError-D9NzXF8I.js";import"./browser-CDYbiXXK.js";import"./EmulatedBoldText-0Pd-4dNn.js";const er={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ar=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,ar as __namedExportsOrder,er as default};

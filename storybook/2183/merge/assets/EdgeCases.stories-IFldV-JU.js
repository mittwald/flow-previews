import{j as r}from"./iframe-B9O3ZODG.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-Dt3OqizV.js";import{T as u}from"./Text-BRHICk1_.js";import{C as c}from"./Content-CVCkQrpQ.js";import{R as l,a as p}from"./Radio-CV7v8cMp.js";import{R as n}from"./RadioButton-BRdQL2zX.js";import"./preload-helper-PPVm8Dsz.js";import"./Label-B_yUo08w.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dx9-gQDY.js";import"./index-Bk8h6op_.js";import"./index-CtGMuppQ.js";import"./useLocalizedStringFormatter-B-FlnnN8.js";import"./context-Dx2UXtP2.js";import"./Label-CUW7vXaw.js";import"./utils-B6bG5pl_.js";import"./Hidden-1Y6zqjHd.js";import"./FieldError-Kcym6Pi9.js";import"./FieldError-BrC6eHcT.js";import"./Text-Bex48AEt.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconApp-Bd3S2boz.js";import"./remote-BreErbqH.js";import"./IconDanger-Aj7LdC1h.js";import"./browser-B4_YLigQ.js";import"./EmulatedBoldText-Dpkb15Ba.js";import"./ColumnLayout-CA5Q0idG.js";import"./useFieldComponent-CRvrWckq.js";import"./useMakeFocusable-DQXJft12.js";import"./RadioGroup-W0BEtPcO.js";import"./Form-BpuzTWI4.js";import"./useLabel-BXmDULV_.js";import"./SelectionIndicator-DTYkM1Yz.js";import"./useFormValidation-Dlo1bwd1.js";import"./useFocus-CgajmM1R.js";import"./useControlledState-C-iuwE9o.js";import"./FocusScope-kRkt8xnH.js";import"./useFocusRing-DApHxXgU.js";import"./useFormReset-Cc2EXXxK.js";import"./usePress-CefnHgfW.js";import"./useFocusable-x8wHKSzm.js";import"./VisuallyHidden-C9d_MZuH.js";import"./IconRadioOn-aarK8iCs.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

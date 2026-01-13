import{j as r}from"./iframe-YnzBkBP1.js";import{R as l,b as p,a as n}from"./RadioButton-a1y63YUp.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-9AB-3Dmj.js";import{T as u}from"./Text-CErt044E.js";import{C as c}from"./Content-BBEV_Xj-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CxoafP0O.js";import"./index-CbL05fU3.js";import"./index-C9L7IfWC.js";import"./ColumnLayout-NaPxaokp.js";import"./useFieldComponent-BnDxVRXr.js";import"./utils-CRkRQkMM.js";import"./useMakeFocusable-s1Q13Oa-.js";import"./RadioGroup-DrEDQNaX.js";import"./FieldError-BIVQARwB.js";import"./Text-C_7kOqPJ.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-DTh0_D5U.js";import"./useLabel-DyCvkQuz.js";import"./Label-TsHYY7iw.js";import"./Hidden-Dq31wpMg.js";import"./SelectionIndicator-DnZvOIyV.js";import"./useFormValidation-MbSolyNi.js";import"./useFocus-CEJfh5Ox.js";import"./useControlledState-DwL8StHF.js";import"./FocusScope-D2Uy30lG.js";import"./useFocusRing-B9e_t0Os.js";import"./context-Dc351FW_.js";import"./useFormReset-3oD77Uyk.js";import"./usePress-NgaP4MvP.js";import"./useFocusable-BIzKoTBr.js";import"./VisuallyHidden-BsENeWhO.js";import"./IconWarning-CfrgrK5w.js";import"./remote-psJ_k7Km.js";import"./Label-F32H6fZQ.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-6QnOnkyA.js";import"./FieldError-CkABddBr.js";import"./AlertText-D2cGz-gI.js";import"./AlertIcon-DE5OYWVT.js";import"./browser-Sf85iaAd.js";import"./EmulatedBoldText-Dl4jMQ55.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

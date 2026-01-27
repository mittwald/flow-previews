import{j as r}from"./iframe-BK9Ry9wr.js";import{R as l,b as p,a as n}from"./RadioButton-DDmOLcZi.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-BpsB8jkN.js";import{T as u}from"./Text-kkda9Q25.js";import{C as c}from"./Content-C4_N8Xvq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DHXq45QP.js";import"./index-DN2_BW85.js";import"./index-DqsXJ4xp.js";import"./ColumnLayout-BJ0tfacp.js";import"./useFieldComponent-DnU67IFr.js";import"./utils-DO-BnPGQ.js";import"./useMakeFocusable-Bt_xvJUh.js";import"./RadioGroup-B7H09JaK.js";import"./FieldError-jtZpQJaz.js";import"./Text-Cq5Rc76r.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-DgYJKMgS.js";import"./useLabel-MQsZvy4I.js";import"./Label-BzCkyqHu.js";import"./Hidden-PKJk_aj-.js";import"./SelectionIndicator-D3Pxw9N-.js";import"./useFormValidation-4onogkfY.js";import"./useFocus-C5fN754a.js";import"./useControlledState-D5gBJyZQ.js";import"./FocusScope-Lcnwzjdv.js";import"./useFocusRing-Dknf048Z.js";import"./context-DsIoSqto.js";import"./useFormReset-CaS7VrAz.js";import"./usePress-DlcvFeQS.js";import"./useFocusable-CjhkSx1Q.js";import"./VisuallyHidden-D79PysQv.js";import"./IconWarning-ClqYagFF.js";import"./remote-BKPS1KcS.js";import"./Label-MHPgjcAC.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-C7EPZ_KA.js";import"./FieldError-Dlnwp2IY.js";import"./AlertText-Q3UmWydJ.js";import"./AlertIcon-CZTB9fHB.js";import"./browser-DDyWafud.js";import"./EmulatedBoldText-NOAnNUmj.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

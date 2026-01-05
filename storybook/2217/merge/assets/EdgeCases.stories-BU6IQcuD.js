import{j as r}from"./iframe-DITmTDde.js";import{R as l,b as p,a as n}from"./RadioButton-CNgtT-pS.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-KnrsYIKR.js";import{T as u}from"./Text-B4ALgTL8.js";import{C as c}from"./Content-DQo_AEjq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BIGGpSqP.js";import"./index-m2QHiCbK.js";import"./index-oEm39XqO.js";import"./ColumnLayout-DIbtHGGQ.js";import"./useFieldComponent-CR_sI6nz.js";import"./utils-C40myb20.js";import"./useMakeFocusable-Be_RJHQJ.js";import"./RadioGroup-DpWQ3RdZ.js";import"./FieldError-B8qSKLtD.js";import"./Text-rw4H23NJ.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-C6LPNxyn.js";import"./useLabel-DZbkZQ01.js";import"./Label-DJaUceky.js";import"./Hidden-8YgQRG2G.js";import"./SelectionIndicator-711mCjj0.js";import"./useFormValidation-gmIFw0Kx.js";import"./useFocus-DrnrNdFb.js";import"./useControlledState-D6UlgZp0.js";import"./FocusScope-zqNAAOXF.js";import"./useFocusRing-DXc99t-B.js";import"./context-CEC4U_pc.js";import"./useFormReset-vbhoemIT.js";import"./usePress-Cwz_fpS2.js";import"./useFocusable-m8WXVW9y.js";import"./VisuallyHidden-CcOPNtcw.js";import"./IconWarning-FbTim4wC.js";import"./remote-BYAMMrVX.js";import"./Label-DcnJ5Vhi.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-IPLp48A-.js";import"./FieldError-CBw2sGOe.js";import"./browser-wgtkTybB.js";import"./EmulatedBoldText-CTBn_63u.js";const er={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

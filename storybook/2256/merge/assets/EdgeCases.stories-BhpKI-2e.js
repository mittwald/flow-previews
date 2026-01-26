import{j as r}from"./iframe-DqoQz6HB.js";import{R as l,b as p,a as n}from"./RadioButton-CCw0CLVy.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-kxOcHshu.js";import{T as u}from"./Text-CYiIq5CT.js";import{C as c}from"./Content-BPgNqPVb.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D6vhYXOR.js";import"./index-DYypvI_A.js";import"./index-BvQFjuk4.js";import"./ColumnLayout-BEf9d53n.js";import"./useFieldComponent-X8YFoMoP.js";import"./utils-OqNg9teq.js";import"./useMakeFocusable-DI-smWK8.js";import"./RadioGroup-DkUEu1df.js";import"./FieldError-WaBW2_7-.js";import"./Text-78LD2Kdh.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-JBdB4aYd.js";import"./useLabel-CCbYr5fG.js";import"./Label-B_OqtZ_p.js";import"./Hidden-DWz6zm5D.js";import"./SelectionIndicator-CdYNTPNo.js";import"./useFormValidation-CMGs1DuG.js";import"./useFocus-zlQbWpmC.js";import"./useControlledState-CN54iNBt.js";import"./FocusScope-DUYZjiaL.js";import"./useFocusRing-B1e51Uuh.js";import"./context-BlYILeGE.js";import"./useFormReset-BpNr6OOM.js";import"./usePress-DK4IO0uy.js";import"./useFocusable-CZXIUH7h.js";import"./VisuallyHidden-BJ3P8dgA.js";import"./IconWarning-CoQAKsWX.js";import"./remote-BY0bWN8b.js";import"./Label-Bciq9MXz.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DTNQU4JA.js";import"./FieldError-eFMpVXMe.js";import"./AlertText-DJCCvPqw.js";import"./AlertIcon-DE1EJRfD.js";import"./browser-CwaVi4T-.js";import"./EmulatedBoldText-DhB0ijlY.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

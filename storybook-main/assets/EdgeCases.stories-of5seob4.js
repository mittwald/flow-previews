import{j as r}from"./iframe-DeaTJDua.js";import{R as l,a as p}from"./Radio-Dh6gF8Yv.js";import{R as n}from"./RadioButton-spVXII4h.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-ClAbmF6O.js";import{T as u}from"./Text-DmX-Z1ax.js";import{C as c}from"./Content-CLiYZXIJ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-De56C_b5.js";import"./index-6wTRmFp1.js";import"./index-BmNXFkrE.js";import"./ColumnLayout-HIE7v333.js";import"./useFieldComponent-Bk8CgTUl.js";import"./utils-DAn_19Le.js";import"./useMakeFocusable-DOYd7nHS.js";import"./RadioGroup-sjK7CaIU.js";import"./FieldError-BF0ggQ3i.js";import"./Text-D55T9z4A.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BdU1booJ.js";import"./useLabel-C4fGorSC.js";import"./Label-Cq9BvoI9.js";import"./Hidden-DSflBmUF.js";import"./SelectionIndicator-C0I4_uDy.js";import"./useFormValidation-Ca3G17wV.js";import"./useFocus-DwX8c8hl.js";import"./useFocusRing-CR3AbbfB.js";import"./useControlledState-CvKG4MPs.js";import"./FocusScope-CpKBh6MC.js";import"./context-DpHy2B7Z.js";import"./useFormReset-UTIDwNo9.js";import"./usePress-BGs6tBRd.js";import"./useFocusable-DXFTvAH_.js";import"./VisuallyHidden-BMpCP5yc.js";import"./IconWarning-Bnohnd1u.js";import"./remote-4WWdz0S_.js";import"./Label-DJdPs_mv.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DUet38b8.js";import"./FieldError-1N6EvFt7.js";import"./AlertText-CNiFry47.js";import"./AlertIcon-KKj1r8Dh.js";import"./browser-DgW11PhP.js";import"./EmulatedBoldText-cuvIuyGo.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

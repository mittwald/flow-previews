import{j as r}from"./iframe-jaoHr1AV.js";import{R as l,a as p}from"./Radio-DklmxwYk.js";import{R as n}from"./RadioButton-LciizKsv.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-B3j86zzZ.js";import{T as u}from"./Text-Cs3EhNpG.js";import{C as c}from"./Content-CP7dqr2s.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CrOXvTqi.js";import"./index-CR-YYcjl.js";import"./index-BFCtAlHX.js";import"./ColumnLayout-SdmPDUaF.js";import"./useFieldComponent-D-iYVveA.js";import"./utils-CQw042JL.js";import"./useMakeFocusable-v5bGfB-u.js";import"./RadioGroup-DZ3lMShE.js";import"./FieldError-D7CvISHf.js";import"./Text-DE-JOko8.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-B8e0R8nB.js";import"./useLabel-XwramTU6.js";import"./Label-Dvi8c8U4.js";import"./Hidden-BCtaYkH3.js";import"./SelectionIndicator-CFfIf2cB.js";import"./useFormValidation-B1svUyZM.js";import"./useFocus-GROhvItb.js";import"./useFocusRing-CA-tHgfv.js";import"./useControlledState-H8E68uKK.js";import"./FocusScope-B5Ctyl2K.js";import"./context-CW7DVTht.js";import"./useFormReset-B3LvCMGn.js";import"./usePress-WaW8O6jQ.js";import"./useFocusable-Bnc4O4Ay.js";import"./VisuallyHidden-DhIewZ3I.js";import"./IconWarning-DyIA4Uof.js";import"./remote-CF-AY8I2.js";import"./Label-Kdaxftsp.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-B75Dx9X1.js";import"./FieldError-SYu40l7i.js";import"./AlertText-C4ghe_z5.js";import"./AlertIcon-BkGbvGvC.js";import"./browser-gEDtR-OK.js";import"./EmulatedBoldText-DDNOwYGP.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

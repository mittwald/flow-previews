import{j as r}from"./iframe-DQCyQvTg.js";import{R as l,a as p}from"./Radio-nXI9g_Zj.js";import{R as n}from"./RadioButton-fbiWI6Ix.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-Va3QTgXh.js";import{T as u}from"./Text-Dy3rf6Sf.js";import{C as c}from"./Content-CqANV6cA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DZtWzeOa.js";import"./index-D_Y20Bq5.js";import"./index-vqo-_XTj.js";import"./ColumnLayout-CkLJexV6.js";import"./useFieldComponent-BQB8jFXR.js";import"./utils-B-47qEzM.js";import"./useMakeFocusable-bqVs19OG.js";import"./RadioGroup-Ciy9xEq3.js";import"./FieldError-BsUvM9FZ.js";import"./Text-dCr4PfuU.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Ca14id66.js";import"./useLabel-CgNKGrTG.js";import"./Label-CVwZ8mvh.js";import"./Hidden-B1onkdes.js";import"./SelectionIndicator-BqvLdNe9.js";import"./useFormValidation-DWTcfSBl.js";import"./useFocus-MHK9Bgmz.js";import"./useFocusRing-H28TAT4s.js";import"./useControlledState-CSGe32xq.js";import"./FocusScope-DgjO-P_8.js";import"./context-BVR1xsiE.js";import"./useFormReset-3qpl4kR-.js";import"./usePress-BDNCZxcv.js";import"./useFocusable-Bi17AcBv.js";import"./VisuallyHidden-DTZCmZoD.js";import"./IconWarning-BsBEN2i7.js";import"./remote-DwYKdEj8.js";import"./Label-Bpn5fam4.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DAmk2Bcz.js";import"./FieldError-Db3KB_ND.js";import"./AlertText-D-ZVlg04.js";import"./AlertIcon-BB94ofCu.js";import"./browser-NLzega1a.js";import"./EmulatedBoldText-BkRIKdgp.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

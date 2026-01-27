import{j as r}from"./iframe-EUG4rdOg.js";import{R as l,b as p,a as n}from"./RadioButton-DFN6FRHd.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-xiJU7tkx.js";import{T as u}from"./Text-DlICJI4S.js";import{C as c}from"./Content-QCAVaCkP.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C1dTLmWR.js";import"./index-DTdnl-5o.js";import"./index-Dmbpubym.js";import"./ColumnLayout-D55PSz29.js";import"./useFieldComponent-Bs969hQl.js";import"./utils-DJPQq0Ir.js";import"./useMakeFocusable-C1Hl-BRR.js";import"./RadioGroup-UdHUdszv.js";import"./FieldError-CVa256dc.js";import"./Text-BNRjjFE0.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DdP99ZP3.js";import"./useLabel-Ddt3ftMp.js";import"./Label-D6dDxJKJ.js";import"./Hidden-CsejW8LP.js";import"./SelectionIndicator-CBEc_uRa.js";import"./useFormValidation-OWtbzU_T.js";import"./useFocus-Ca80QzG_.js";import"./useFocusRing-pMATsfPY.js";import"./useControlledState-DorIVmrH.js";import"./FocusScope-BEv8tYIC.js";import"./context-DxYQrQkA.js";import"./useFormReset-BWBNxDQ8.js";import"./usePress-CyxS_pZ-.js";import"./useFocusable-YuTP7Rcp.js";import"./VisuallyHidden-DwLUyGt6.js";import"./IconWarning-CN_aXaJM.js";import"./remote-Bl5KctCq.js";import"./Label-CkXKJRQj.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-8TMbmljG.js";import"./FieldError-D_yigqvG.js";import"./AlertText-D2qcucoC.js";import"./AlertIcon-C4O6kAyM.js";import"./browser-Dr5hWFfi.js";import"./EmulatedBoldText-wvGqieyl.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

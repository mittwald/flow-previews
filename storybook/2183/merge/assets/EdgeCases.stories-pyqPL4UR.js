import{j as r}from"./iframe-BXRQqxRF.js";import{R as l,a as p}from"./Radio-T0H4bbDf.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-C-VJ-qlg.js";import{T as u}from"./Text-KdIVkcjD.js";import{C as c}from"./Content-BaHTMk9y.js";import{R as n}from"./RadioButton-9pv5pOsW.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-5zToaHXd.js";import"./index-BTygn0L6.js";import"./index-L-QBIyGf.js";import"./ColumnLayout-0Uv9W2jw.js";import"./useFieldComponent-y0XT-9Ew.js";import"./utils-W_wb_I6t.js";import"./useMakeFocusable-fYD9FP7v.js";import"./RadioGroup-DD_P41_Q.js";import"./FieldError-Cw_rtSeq.js";import"./Text-gjZ6zRux.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-k8rVjsdW.js";import"./useLabel-DwfjYi-F.js";import"./Label-x3iOqkWL.js";import"./Hidden-CXQdbF07.js";import"./SelectionIndicator-CTy77egS.js";import"./useFormValidation-tPOMEO92.js";import"./useFocus-BYFFuSzP.js";import"./useControlledState-DF5Prxi4.js";import"./FocusScope-CDou2-z6.js";import"./useFocusRing-mlfcq67k.js";import"./context-Cfx64TkI.js";import"./useFormReset-BZsjU1hv.js";import"./usePress-DljSeqhE.js";import"./useFocusable-Bn1h_ZhV.js";import"./VisuallyHidden-DvIs4LpA.js";import"./IconChevronDown-CrvlnwL_.js";import"./remote-B9tgrHbM.js";import"./IconRadioOn-eS1R5wkY.js";import"./Label-Dw-KVlkl.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-C8dyVGX6.js";import"./FieldError-B377POAw.js";import"./IconDanger-B1opIkZE.js";import"./browser-JidmR7ov.js";import"./EmulatedBoldText-DAyJKQWP.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

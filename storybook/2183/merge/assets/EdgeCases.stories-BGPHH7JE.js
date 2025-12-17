import{j as r}from"./iframe-D0TBPZEN.js";import{R as l,a as p}from"./Radio-DjpfrY_7.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-Bvnhib8P.js";import{T as u}from"./Text-eR7t4eab.js";import{C as c}from"./Content-DrzB-Ekv.js";import{R as n}from"./RadioButton-DVggAK4m.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BJZeh5dT.js";import"./index-BDPp8Owz.js";import"./index-Cimb1y_J.js";import"./ColumnLayout-CYjm6oSs.js";import"./useFieldComponent-DYlCWX6Y.js";import"./utils-D99Vyo1b.js";import"./useMakeFocusable-Bq-5sg91.js";import"./RadioGroup-C95oaf8I.js";import"./FieldError-Cjpxpmri.js";import"./Text-CculVWnY.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-D2JDP56m.js";import"./useLabel-BXxZPVNQ.js";import"./Label-B3MDDK1W.js";import"./Hidden-BgnID2na.js";import"./SelectionIndicator-BBQRBzIb.js";import"./useFormValidation-RMTjWMUG.js";import"./useFocus-DX98yPkU.js";import"./useControlledState-3iFUkpdV.js";import"./FocusScope-CRIWFmvd.js";import"./useFocusRing-BVlc85iC.js";import"./context-qsxormAC.js";import"./useFormReset-VuRi1k16.js";import"./usePress-Ccmkzzzz.js";import"./useFocusable-BcHjS_A6.js";import"./VisuallyHidden-C_1XSOyM.js";import"./IconChevronDown-Bbj4kj6E.js";import"./remote-Dx3xetcp.js";import"./IconRadioOn-BvGM5Ne9.js";import"./Label-CR6zfnlP.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-PXbfbnRK.js";import"./FieldError-DRFaZQOT.js";import"./IconDanger-CMO1pm9n.js";import"./browser-BxCdUhN6.js";import"./EmulatedBoldText-D0EAgwUh.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

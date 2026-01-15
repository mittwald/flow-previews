import{j as r}from"./iframe-DA37PzgD.js";import{R as l,b as p,a as n}from"./RadioButton-CasprwvJ.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-nAd4g5Jz.js";import{T as u}from"./Text-CKy5VQ2_.js";import{C as c}from"./Content-DCH2Iyi0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DxL-Dn0k.js";import"./index-BgSlp0g3.js";import"./index-CccRe4nm.js";import"./ColumnLayout-C4hSSwie.js";import"./useFieldComponent-DTrWN6Rf.js";import"./utils-DtYp6psM.js";import"./useMakeFocusable-CFXjDFQf.js";import"./RadioGroup-CzKwv6ds.js";import"./FieldError-jhFQ-VHV.js";import"./Text-VNYIIeBR.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-DXCSZa8G.js";import"./useLabel-CrQo68aR.js";import"./Label-D_nNHFmP.js";import"./Hidden-CyblAlwf.js";import"./SelectionIndicator-D-mCry-j.js";import"./useFormValidation-2Nc27zh7.js";import"./useFocus-Ck97lmu1.js";import"./useControlledState-izS5uoD6.js";import"./FocusScope-CIeecyJ9.js";import"./useFocusRing-GdKi_2te.js";import"./context-KzPqYKh3.js";import"./useFormReset-ChjOdAw3.js";import"./usePress--pFlH7xw.js";import"./useFocusable-_BBBrAx0.js";import"./VisuallyHidden-C_Tup-b1.js";import"./IconWarning-DMc9nDIB.js";import"./remote-BJWo5b31.js";import"./Label-DPj6ip94.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-C1YnvIwi.js";import"./FieldError-CnCGw98P.js";import"./AlertText-HBRlOgXf.js";import"./AlertIcon-BbDcA2fv.js";import"./browser-Tq-Ovndo.js";import"./EmulatedBoldText-CMCwPeqW.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

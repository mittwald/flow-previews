import{j as r}from"./iframe-y-Qy_Rwm.js";import{R as l,b as p,a as n}from"./RadioButton-BQ8UYU1o.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CywAzYjO.js";import{T as u}from"./Text-Dc6HCiIC.js";import{C as c}from"./Content-BhWKNhq-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-ChH3J7dR.js";import"./index-CyDBTnD6.js";import"./index-DHyBIfcz.js";import"./ColumnLayout-BeFUk18z.js";import"./useFieldComponent-BPtwnKvp.js";import"./utils-Ek_OXClQ.js";import"./useMakeFocusable-BQczmrTG.js";import"./RadioGroup-BOXWbo3m.js";import"./FieldError-B0Ilb29D.js";import"./Text-BUjonAbB.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-DvQjUgdb.js";import"./useLabel-oIpNFQLF.js";import"./Label-B71VVe9p.js";import"./Hidden-D2H3G8L4.js";import"./SelectionIndicator-Ccu7nnnp.js";import"./useFormValidation-49dCeNRi.js";import"./useFocus-L_xbSTvo.js";import"./useControlledState-BivKNDQQ.js";import"./FocusScope-GXsPqTvD.js";import"./useFocusRing-TFugmXCf.js";import"./context-ukqkFony.js";import"./useFormReset-DmoJehYX.js";import"./usePress-ginTfsZX.js";import"./useFocusable-BPLcErJ9.js";import"./VisuallyHidden-uuI_aPdk.js";import"./IconWarning-CSZkcfVi.js";import"./remote-DXSfp6Hy.js";import"./Label-DwZ1nY2p.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BuF0P38W.js";import"./FieldError-CHdxAWDK.js";import"./AlertText-CnTSLXpj.js";import"./AlertIcon-B-ySDH61.js";import"./browser-BkGSrLgH.js";import"./EmulatedBoldText-BWRuiDih.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

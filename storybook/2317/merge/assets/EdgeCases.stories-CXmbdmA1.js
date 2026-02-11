import{j as r}from"./iframe-C_YE0yRE.js";import{R as l,a as p}from"./Radio-CGoJsaz0.js";import{R as n}from"./RadioButton-QYTJNH-0.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-LpysM00P.js";import{T as u}from"./Text-DHPE0I2s.js";import{C as c}from"./Content-F3e3WkxK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BmGOFz_C.js";import"./index-ChMIoTzt.js";import"./index-C1o6XGyU.js";import"./ColumnLayout-BPX_plNf.js";import"./useFieldComponent-CWA258Fl.js";import"./utils-DHqPz2V6.js";import"./useMakeFocusable-gXOjzDrv.js";import"./RadioGroup-CUDDAvCz.js";import"./FieldError-C56-tCSc.js";import"./Text-BXWHLDC_.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-OCRgsrlm.js";import"./useLabel-C_Wx6KRi.js";import"./Label-F1_SF2kS.js";import"./Hidden-C0GYzrmR.js";import"./SelectionIndicator-DJtaN3Cu.js";import"./useFormValidation-CAUZ7uHC.js";import"./useFocus-CNnZns0Y.js";import"./useFocusRing-BwrpFxJK.js";import"./useControlledState-8IU_97yn.js";import"./FocusScope-DmUSx-ox.js";import"./context-BsGh4Cu8.js";import"./useFormReset-CEMPEkJX.js";import"./usePress-DNy1k_Tf.js";import"./useFocusable-CsoKnWSE.js";import"./VisuallyHidden-DZpEB13Q.js";import"./IconWarning-Cxe6oNxX.js";import"./remote-C68UFTqR.js";import"./Label-Bg9ChY99.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-D3Mabo4d.js";import"./FieldError-DnihSG5_.js";import"./AlertText-CldvHevT.js";import"./AlertIcon-ClTjLU4k.js";import"./browser-BLJ3u5oR.js";import"./EmulatedBoldText-CeaRH1vH.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

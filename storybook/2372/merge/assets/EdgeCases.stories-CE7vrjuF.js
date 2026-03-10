import{j as r}from"./iframe-C1IdntWq.js";import{R as l,a as p}from"./Radio-D3vO3FDG.js";import{R as n}from"./RadioButton-Bcdw6HQr.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DOSMWrda.js";import{T as u}from"./Text-W7h8_LNr.js";import{C as c}from"./Content-BSdmmpR7.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Bun1s6Mg.js";import"./index-BFORpPeP.js";import"./index-Coy6T-Pa.js";import"./ColumnLayout-CAKeDK8G.js";import"./useFieldComponent-o_u9PYdj.js";import"./utils-CNo0qaX0.js";import"./useMakeFocusable-C1xyaFac.js";import"./RadioGroup-BjGTDYZd.js";import"./FieldError-DgBT4dcF.js";import"./Text-CkLpWhuM.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-CijQ_R7m.js";import"./useLabel-CAzlzskU.js";import"./Label-D03EKzy1.js";import"./Hidden-MEHJLAG1.js";import"./SelectionIndicator-DffOr8wA.js";import"./useFormValidation-CloSy7V5.js";import"./useFocus-HLQCbRtK.js";import"./useFocusRing-DQuA22ZQ.js";import"./useControlledState-FuYpKfPj.js";import"./FocusScope-C2GkFJYp.js";import"./context-CuxmdylV.js";import"./useFormReset-CaX1fgpZ.js";import"./usePress-BIzz4kJt.js";import"./useFocusable-Z0Y9nSjp.js";import"./VisuallyHidden-709t6SxP.js";import"./IconWarning-BY-3yqWN.js";import"./remote-DdxKfasm.js";import"./Label-Be-SvMDa.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-X4lAHS4Q.js";import"./FieldError-DsJ8c-ZE.js";import"./AlertText-LATyc42T.js";import"./AlertIcon-CvmjcNLC.js";import"./browser-WXx3m9ky.js";import"./EmulatedBoldText-COIRRGWk.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

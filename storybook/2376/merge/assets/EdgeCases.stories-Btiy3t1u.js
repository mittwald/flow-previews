import{j as r}from"./iframe-DlWpeVbs.js";import{R as l,a as p}from"./Radio-TPvzc4I1.js";import{R as n}from"./RadioButton-DzWFFk-c.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-KFG7zFzB.js";import{T as u}from"./Text-BjwiRmws.js";import{C as c}from"./Content-opwEsj_c.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-e7OfeKLs.js";import"./index-CKa2CbgH.js";import"./index-Ci0KQ92C.js";import"./ColumnLayout-Ch_XhiCC.js";import"./useFieldComponent-CpDSJ5w8.js";import"./utils-BWqiCJWQ.js";import"./useMakeFocusable-C9tYngkj.js";import"./RadioGroup-Bu7wSG1O.js";import"./FieldError-CO2oyPLw.js";import"./Text-BEVTNZ1h.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-IYTHWqtc.js";import"./useLabel-BQqcwX0K.js";import"./Label-CEM-XGBZ.js";import"./Hidden-DSSLapPq.js";import"./SelectionIndicator-Cov2iNqV.js";import"./useFormValidation-7MNrcMSj.js";import"./useFocus-DZ2sW_Jx.js";import"./useFocusRing-BVQNDpKt.js";import"./useControlledState--75VKtTq.js";import"./FocusScope-Cd4jqLlg.js";import"./context-w6Z3dllt.js";import"./useFormReset-CZgOMFUA.js";import"./usePress-CW_WdW_p.js";import"./useFocusable-BrXdRr5r.js";import"./VisuallyHidden-tMd7tplK.js";import"./IconWarning-CwuMGyll.js";import"./remote-Hfn3BG4Y.js";import"./Label-BFCtbPkR.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BZrkd9Aw.js";import"./FieldError-wdxD7fJg.js";import"./AlertText-Bn9b-fyG.js";import"./AlertIcon-DyJmeCBc.js";import"./browser-CHTiPLC9.js";import"./EmulatedBoldText-aDVaHGl3.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-CFTqgbub.js";import{R as l,a as p}from"./Radio-DRII9ZWW.js";import{R as n}from"./RadioButton-Ce-ER1sp.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-Bh16h4R0.js";import{T as u}from"./Text-DGb4Yj-N.js";import{C as c}from"./Content-CuF6CEcC.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CsvuKB41.js";import"./index-CCt8Te2G.js";import"./index-B_-FfeBA.js";import"./ColumnLayout-CbQqBLvR.js";import"./useFieldComponent-CbaMz5aY.js";import"./utils-B4tY5r2S.js";import"./useMakeFocusable-BC3RzzjG.js";import"./RadioGroup-tHEFFAHL.js";import"./FieldError-DNv3qA2U.js";import"./Text-Djzy7Vo0.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-XRNm8_rd.js";import"./useLabel-BdtjZifw.js";import"./Label-zjHNWfOJ.js";import"./Hidden-0AMuGqxl.js";import"./SelectionIndicator-ex17VsHG.js";import"./useFormValidation-BPzjnfej.js";import"./useFocus-BOeBkWuf.js";import"./useFocusRing-Ck0KvK0z.js";import"./useControlledState-SUsbXgrM.js";import"./FocusScope-BtEv7ihW.js";import"./context-DrUKb0cF.js";import"./useFormReset-BbhAN2Ls.js";import"./usePress-DIXZ9Ppe.js";import"./useFocusable-Dm8xzBfk.js";import"./VisuallyHidden-CB7azLHp.js";import"./IconWarning-BmBcYBZE.js";import"./remote-BlniWp0j.js";import"./Label-GwGXhrLq.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DeSq1KSa.js";import"./FieldError-CYjuAiBI.js";import"./AlertText-CTc4Vkoh.js";import"./AlertIcon-DR1EaW6b.js";import"./browser-DzYF9AGw.js";import"./EmulatedBoldText-Dyut30RV.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-BwxXT37i.js";import{R as l,a as p}from"./Radio-DF34FkjO.js";import{R as n}from"./RadioButton-LiTTqB46.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CvIZq6YH.js";import{T as u}from"./Text-COIxE5M6.js";import{C as c}from"./Content-DSJl7gyc.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CuECaAUk.js";import"./index-DlX0XTQj.js";import"./index-DuE4n7_M.js";import"./ColumnLayout-Cp6zSh81.js";import"./useFieldComponent-CUBWvnpR.js";import"./utils-CJgL2cA6.js";import"./useMakeFocusable-CR-wBrtX.js";import"./RadioGroup-CASF4v91.js";import"./FieldError-BR2H8wuy.js";import"./Text-CMM9EMAj.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BRwB9VIC.js";import"./useLabel-ClAEan5N.js";import"./Label-tTpXQ0Np.js";import"./Hidden-DDJevZSF.js";import"./SelectionIndicator-D823LuT6.js";import"./useFormValidation-CcuhNi7t.js";import"./useFocus-Czv-Zofa.js";import"./useFocusRing-m35H4vh1.js";import"./useControlledState-NXAAE7WV.js";import"./FocusScope-DUfe_G21.js";import"./context-CQJLc664.js";import"./useFormReset-BZECQBSr.js";import"./usePress-Bm2JbU_T.js";import"./useFocusable-FNm71Fx1.js";import"./VisuallyHidden-BP4pgppw.js";import"./IconWarning-Dl-kSkvo.js";import"./remote-DESTNxfj.js";import"./Label-CT8SIJ3i.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CKZF_s44.js";import"./FieldError-D9vbHNcD.js";import"./AlertText-CHWpHdzt.js";import"./AlertIcon-DLpjaGh3.js";import"./browser-DWx5NGhf.js";import"./EmulatedBoldText-Cp5bM2Cx.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

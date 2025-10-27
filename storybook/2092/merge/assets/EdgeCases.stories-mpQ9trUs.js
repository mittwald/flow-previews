import{j as r}from"./iframe-DCa_XPw0.js";import{R as l,b as p,a as n}from"./RadioButton-D1_G33oq.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CacnOy4W.js";import{T as u}from"./Text-DnODaVEe.js";import{C as c}from"./Content-DFas5uY3.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CAToH-fj.js";import"./index-CMKGq9Xe.js";import"./index-d5hFVLIP.js";import"./ColumnLayout-Chk0XITp.js";import"./useFieldComponent-DnSwczmT.js";import"./utils-CHsRUe2b.js";import"./Text-I5qgKc0V.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-Q2oX1eiS.js";import"./react-children-utilities-BnxGKhPm.js";import"./ClearPropsContext-D7TWL38i.js";import"./useMakeFocusable-BoKUk5Zb.js";import"./RadioGroup-CHl06W-q.js";import"./Form-gH1nSwk6.js";import"./useLabel-Cxr0dS9W.js";import"./Label-DCh_0unC.js";import"./Hidden-DqzRERrR.js";import"./SelectionIndicator-VK3V8vC4.js";import"./useFormValidation-Dya2y-k8.js";import"./useFocus-m8lB89Ac.js";import"./useControlledState-CRVJv1rD.js";import"./FocusScope-D1UKu4WZ.js";import"./useFocusRing-fwjWpFlM.js";import"./context-CFo6-Xo4.js";import"./useFormReset-C_Ugenz9.js";import"./usePress-DoF43DDZ.js";import"./useFocusable-D6JtitxC.js";import"./VisuallyHidden-D3RYJYP2.js";import"./Label-vDm2WQu9.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DwWhxD93.js";import"./browser-2ZL6lgPg.js";import"./EmulatedBoldText-BxXSB0Xl.js";const or={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const er=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,er as __namedExportsOrder,or as default};

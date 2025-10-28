import{j as r}from"./iframe-DGdLAJHm.js";import{R as l,b as p,a as n}from"./RadioButton-CiEL4vtT.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CqxSur1L.js";import{T as u}from"./Text-DFxon6If.js";import{C as c}from"./Content-BFwogZ0y.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D7HGs2AA.js";import"./index-JbK8SDWv.js";import"./index-BZginMRh.js";import"./ColumnLayout-BIg2_9re.js";import"./useFieldComponent-sq1ZsD9O.js";import"./utils-DMxNMt2r.js";import"./Text-C5DwW8tZ.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BY1Q-g8P.js";import"./react-children-utilities-bPIN5y_s.js";import"./ClearPropsContext-DfqGN335.js";import"./useMakeFocusable-Cph4dqrb.js";import"./RadioGroup-Bki71oof.js";import"./Form-CiLoCuZS.js";import"./useLabel-DLeCNjtK.js";import"./Label-DCzhvZl0.js";import"./Hidden-DDvTcAlv.js";import"./SelectionIndicator-vtyMezuP.js";import"./useFormValidation-LOSvoqzJ.js";import"./useFocus-Cj45nHC3.js";import"./useControlledState-C-kX1e6O.js";import"./FocusScope-Bl39wWwG.js";import"./useFocusRing-Caix2y0_.js";import"./context-CokKTPHD.js";import"./useFormReset-DwdExnfa.js";import"./usePress-B2gRAimw.js";import"./useFocusable-DBd_8M_L.js";import"./VisuallyHidden-Cu1Uufsu.js";import"./Label-TWVsUPc0.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CSQJExWC.js";import"./browser-DtJMxQoE.js";import"./EmulatedBoldText-l3o70VD0.js";const or={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

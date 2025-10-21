import{j as r}from"./iframe-CPZmCQj-.js";import{R as l,b as p,a as n}from"./RadioButton-J9ZTpotg.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-BvHaPa96.js";import{T as u}from"./Text-cGw-MBFK.js";import{C as c}from"./Content-CcPX068H.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DZ7Ps0CL.js";import"./index-Ba68vLbY.js";import"./index-Dx50g0n6.js";import"./ColumnLayout-Bcb26NPk.js";import"./useFieldComponent-ZdrCImE8.js";import"./utils-DbTuSxgD.js";import"./Text-ev6zCoFy.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BHYwQlMQ.js";import"./react-children-utilities-BpPrmtLj.js";import"./ClearPropsContext-DZV6h8aR.js";import"./useMakeFocusable-BIcdpqxH.js";import"./RadioGroup-BblenIiZ.js";import"./Form-KkxpJ3qz.js";import"./useLabel-DeJHfKxc.js";import"./Label-DhGaeBi-.js";import"./Hidden-klXcLh_8.js";import"./SelectionIndicator-DWNXk9hr.js";import"./useFormValidation-D952ndYN.js";import"./useFocus-DSlim6kP.js";import"./useControlledState-BjliE2JI.js";import"./FocusScope-W4GOB1Wo.js";import"./useFocusRing-DtbYXXZs.js";import"./context-vwBy6rn7.js";import"./useFormReset-BZ0LqTvh.js";import"./usePress-6Qpgo4V0.js";import"./useFocusable-1MtRKrlE.js";import"./VisuallyHidden-m06vE6aQ.js";import"./Label-Cl3ovliO.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-c3k8SeMC.js";import"./browser-Vbuqg8Bp.js";import"./EmulatedBoldText-D8f43xv1.js";const or={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

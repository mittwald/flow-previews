import{R as p,a as n,b as T}from"./Radio-C_mF0-3x.js";import{R as e}from"./index-uCp2LrAq.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import V from"./Default.stories-Dw_yeoiA.js";import{T as C}from"./Text-Cf3enN5E.js";import{C as G}from"./Content-Cem-EE2P.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-RdMO5ekw.js";import"./index-CFQDndEx.js";import"./dynamic-DKDa4OpU.js";import"./FormField.module-DtTAfK2u.js";import"./IconApp-CqdsO7mM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-dvxR-0IS.js";import"./index-BOkhicXD.js";import"./IconWarning-BSZUxli_.js";import"./Form-BOwpWbru.js";import"./useFocusable-DpEA8Hsr.js";import"./utils-DZgOXw50.js";import"./useLabel-D9TuMkUI.js";import"./useLabels-POLqFEYE.js";import"./Text-D6Zjnbf0.js";import"./ColumnLayout-B78AueES.js";import"./deepFindOfType-CMLjW25q.js";import"./react-children-utilities-BZCIIV1H.js";import"./Label-BQk6lJ-q.js";import"./filterDOMProps-CeZl_uWj.js";import"./useControlledState-B8AA3oOY.js";import"./FocusScope-Bpk85l6Y.js";import"./useLocalizedStringFormatter-CHReNXSI.js";import"./useFormReset-Bt7ImmB-.js";import"./usePress-CaJD4Kpr.js";import"./VisuallyHidden-DWE0U9Im.js";import"./Label-DPTsjTUN.js";import"./chunk-MZXVCX43-CM0pFb8Z.js";import"./v4-CQkTLCs1.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Wrap-DQq6jo70.js";import"./Activity-Ck-RMSDT.js";const se={title:"Form Controls/RadioGroup/Edge Cases",...V},o={render:r=>e.createElement(p,{...r,defaultValue:"a","aria-label":"Label"},e.createElement(n,{value:"a"},t.long," "),e.createElement(n,{value:"b"},t.long," "),e.createElement(n,{value:"c"},t.long))},i={render:r=>e.createElement(p,{...r,defaultValue:"0","aria-label":"Label",l:[1,1,1,1]},Array(6).fill("").map((u,a)=>e.createElement(T,{value:a.toString(),key:a},e.createElement(C,null,t.medium),e.createElement(G,null,t.medium))))},l={render:r=>e.createElement(p,{...r,defaultValue:"0","aria-label":"Label"},Array(3).fill("").map((u,a)=>e.createElement(T,{value:a.toString(),key:a},"Option ",a+1))),parameters:{viewport:{defaultViewport:"mobile1"}}},m={render:r=>e.createElement(p,{...r,variant:"segmented",defaultValue:"0","aria-label":"Label",s:[1,1]},Array(2).fill("").map((u,a)=>e.createElement(n,{value:a.toString(),key:a},"Option ",a+1))),parameters:{viewport:{defaultViewport:"mobile1"}}};var d,s,c;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="a" aria-label="Label">
      <Radio value="a">{dummyText.long} </Radio>
      <Radio value="b">{dummyText.long} </Radio>
      <Radio value="c">{dummyText.long}</Radio>
    </RadioGroup>
}`,...(c=(s=o.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var R,f,v;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="0" aria-label="Label" l={[1, 1, 1, 1]}>
      {Array(6).fill("").map((value, index) => <RadioButton value={index.toString()} key={index}>
            <Text>{dummyText.medium}</Text>
            <Content>{dummyText.medium}</Content>
          </RadioButton>)}
    </RadioGroup>
}`,...(v=(f=i.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var b,g,S;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(S=(g=l.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var x,y,E;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} variant="segmented" defaultValue="0" aria-label="Label" s={[1, 1]}>
      {Array(2).fill("").map((value, index) => <Radio value={index.toString()} key={index}>
            Option {index + 1}
          </Radio>)}
    </RadioGroup>,
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...(E=(y=m.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};const ce=["LongTexts","MultipleRadioButtons","SmallSpace","SmallSpaceSegmentedCustomColumns"];export{o as LongTexts,i as MultipleRadioButtons,l as SmallSpace,m as SmallSpaceSegmentedCustomColumns,ce as __namedExportsOrder,se as default};

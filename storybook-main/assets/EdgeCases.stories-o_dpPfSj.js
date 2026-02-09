import{j as r}from"./iframe-D6IogGzN.js";import{R as l,a as p}from"./Radio-B1WzAxko.js";import{R as n}from"./RadioButton-DHB3c1fh.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-B4V8a0D6.js";import{T as u}from"./Text-DVEzKGc_.js";import{C as c}from"./Content-BWKpetnm.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-0X1Pg4gT.js";import"./index-dqlI56sj.js";import"./index-D5OmXbhN.js";import"./ColumnLayout-BXqAfec-.js";import"./useFieldComponent-DWOteHG6.js";import"./utils-DGVDGTqS.js";import"./useMakeFocusable-Cptiifns.js";import"./RadioGroup-B6kLuIv2.js";import"./FieldError-CQOrVEPx.js";import"./Text-CSz0hkcR.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DHrkWV8M.js";import"./useLabel--9PNzusi.js";import"./Label-DV4nkt-Z.js";import"./Hidden-Btv7BawI.js";import"./SelectionIndicator-C7krvdos.js";import"./useFormValidation-CGjfwGDf.js";import"./useFocus-JSiA5HpL.js";import"./useFocusRing-DeVFSene.js";import"./useControlledState-DoPmGGFu.js";import"./FocusScope-DPcfzn1G.js";import"./context-D_0iO3JE.js";import"./useFormReset-zYUel0fa.js";import"./usePress-OPUq1uX5.js";import"./useFocusable-CqeTIxtx.js";import"./VisuallyHidden-CtfXU_Om.js";import"./IconWarning-CDNOZZaQ.js";import"./remote-ByQLcsaA.js";import"./Label-CevfIrA7.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-HdnRlfeB.js";import"./FieldError-s9c2Hgmm.js";import"./AlertText-u5jFPjew.js";import"./AlertIcon-BzliTC0_.js";import"./browser-JB3DJ3rF.js";import"./EmulatedBoldText-DAiBlkMb.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

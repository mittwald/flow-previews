import{j as r}from"./iframe-1hZ9wzBW.js";import{R as l,b as p,a as n}from"./RadioButton-CWKeGBRn.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-1aUc1PM2.js";import{T as u}from"./Text-BF_GklVB.js";import{C as c}from"./Content-DJmjCiDz.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BAYinPoy.js";import"./index-BxkIN5dC.js";import"./index-dx0Fbu95.js";import"./ColumnLayout-Bg8yDoNJ.js";import"./useFieldComponent-B-hW6CDY.js";import"./utils-CnJx27u5.js";import"./useMakeFocusable-BFdEdOxW.js";import"./RadioGroup-DVxK5Xf4.js";import"./FieldError-y4Ibnc6j.js";import"./Text-B1mgaTQV.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BqoDw02I.js";import"./useLabel-CrikywT0.js";import"./Label-DD-nfl5_.js";import"./Hidden-YhZif3uI.js";import"./SelectionIndicator-22830iwM.js";import"./useFormValidation-yU8XYtwO.js";import"./useFocus-iMNco4FL.js";import"./useFocusRing-DJmPDLK7.js";import"./useControlledState-DAXJPifs.js";import"./FocusScope-Dxs6Wric.js";import"./context-Dx8Lg4Ma.js";import"./useFormReset-HcR3N4q2.js";import"./usePress-DNGT1V3C.js";import"./useFocusable-CvXOfqVX.js";import"./VisuallyHidden-UazS1TBU.js";import"./IconWarning-Bq_05zLs.js";import"./remote-CnwnRZPi.js";import"./Label-D0cGucr-.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DjDcrgZQ.js";import"./FieldError-BLPNRQRQ.js";import"./AlertText-D19RpsJk.js";import"./AlertIcon-fApV2-nR.js";import"./browser-jjcexMIs.js";import"./EmulatedBoldText-D3kC_v2V.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ir=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,ir as __namedExportsOrder,tr as default};

import{j as r}from"./iframe-BAzLYubM.js";import{R as p,b as l,a as g}from"./RadioButton-OLOseHev.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-DgdJl3DZ.js";import{T as y}from"./Text-CjPbBUZt.js";import{C as T}from"./Content-D-f0ZA8R.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-EavNE9If.js";import"./mergeRefs-AgJlHGVQ.js";import"./index-aIHf1-d_.js";import"./FieldError-Cejs8W8V.js";import"./IconWarning-C8vW1cGr.js";import"./FieldError-CY1AiRgy.js";import"./utils-b3dZQxDg.js";import"./Text-BrSTDiHS.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-BWcubzJB.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-C6j00LAA.js";import"./Form-VFHeLX6B.js";import"./useFocus-DNlriqLN.js";import"./useLabel-Fj3twa-e.js";import"./Label-uX-YTZhO.js";import"./Hidden-CD1At3_Y.js";import"./useFormReset-BLDHXQeI.js";import"./usePress-DP_wKln7.js";import"./useFocusRing-BpLfAbDy.js";import"./useFocusable-B5cC5QAy.js";import"./FocusScope-Bn06IbqX.js";import"./context-dTk8Xbgu.js";import"./VisuallyHidden-sQyJVZKI.js";import"./useControlledState-Ca8ITVoa.js";import"./Label-D53E6W3R.js";import"./useLocalizedStringFormatter-1HcLORhi.js";import"./browser-CzeCNbOa.js";import"./EmulatedBoldText-saOgMaUw.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="a" aria-label="Label">
      <Radio value="a">{dummyText.long} </Radio>
      <Radio value="b">{dummyText.long} </Radio>
      <Radio value="c">{dummyText.long}</Radio>
    </RadioGroup>
}`,...(s=(d=t.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};var u,c,x;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="0" aria-label="Label" l={[1, 1, 1, 1]}>
      {Array(6).fill("").map((value, index) => <RadioButton value={index.toString()} key={index}>
            <Text>{dummyText.medium}</Text>
            <Content>{dummyText.medium}</Content>
          </RadioButton>)}
    </RadioGroup>
}`,...(x=(c=i.parameters)==null?void 0:c.docs)==null?void 0:x.source}}};var R,f,b;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(b=(f=m.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const mr=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,mr as __namedExportsOrder,ir as default};

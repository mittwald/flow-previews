import{j as r}from"./iframe-CYUlilGp.js";import{R as p,b as l,a as g}from"./RadioButton-kr3NJ0ko.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-DmkGYBpd.js";import{T as y}from"./Text-ot4TW2RP.js";import{C as T}from"./Content-D9n0C2XY.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CDe6Qqh3.js";import"./mergeRefs-R35jcO_1.js";import"./index-BQ87YLqe.js";import"./FieldError-BBFKNZH-.js";import"./IconWarning-ghAEmGH8.js";import"./FieldError-BpkjstJ1.js";import"./utils-IwmXOWz0.js";import"./Text-DsFZoYY-.js";import"./filterDOMProps-CeZl_uWj.js";import"./ColumnLayout-zhRhZ53N.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-BpRhw8Rz.js";import"./Form-CJHBPzNS.js";import"./useFocus-6n3T7pEK.js";import"./useLabel-BQ0P6uHm.js";import"./Label-BzlJ5vcG.js";import"./Hidden-CtQ_5AUI.js";import"./useFormReset-BKFhzP-_.js";import"./usePress-JEo6mDJS.js";import"./useFocusRing-Bl1ft2NQ.js";import"./useFocusable-hSKUHOaq.js";import"./FocusScope-AdChhofX.js";import"./context-D26uRp-g.js";import"./VisuallyHidden-D7ZslAb9.js";import"./useControlledState-D9dJQ2qs.js";import"./Label-Ciz8t2Io.js";import"./useLocalizedStringFormatter-MUhpNbFs.js";import"./browser-BP1SPJnQ.js";import"./EmulatedBoldText-CMJy8lEl.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

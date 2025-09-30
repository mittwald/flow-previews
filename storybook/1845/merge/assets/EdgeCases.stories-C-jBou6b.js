import{j as r}from"./iframe-B7R3Cp0m.js";import{R as l,b as p,a as g}from"./RadioButton-By8qi652.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-Baaqk6NX.js";import{T as y}from"./Text-mmmtihIj.js";import{C as T}from"./Content-CGEsk7qv.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-W1sLmgeU.js";import"./index-DeoRyUxP.js";import"./index-DEEeTq16.js";import"./FieldError-C50u32vO.js";import"./IconWarning-CiDVbDUI.js";import"./FieldError-DSYDYeL4.js";import"./utils-Cx-QUl4i.js";import"./Text-Cq8XMVEi.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-C5z9VB7m.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-Co-fjfKM.js";import"./RadioGroup-8AkuHamw.js";import"./Form-zMs38ZCV.js";import"./Label-CciGw-jp.js";import"./Hidden-Cw4vRCn8.js";import"./useFormValidation-Dv3hg-yA.js";import"./useFocus-BfnX2cH5.js";import"./useControlledState-DvHwfOTB.js";import"./FocusScope-DeadHndu.js";import"./useFocusRing-KQNrYpLi.js";import"./context-DZWDYeWp.js";import"./useFormReset-ltvOIr7i.js";import"./usePress-CZzcdL0j.js";import"./useFocusable-gE9kDuNJ.js";import"./VisuallyHidden-7GIVT4u3.js";import"./Label-BwiLuc4D.js";import"./useLocalizedStringFormatter-BoxQ9ugt.js";import"./browser-D9qXvoab.js";import"./EmulatedBoldText-Bu0mLg2V.js";const pr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(l,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(b=(f=m.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const lr=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,lr as __namedExportsOrder,pr as default};

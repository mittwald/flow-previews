import{j as r}from"./iframe-CuW8Z7cC.js";import{R as p,b as l,a as g}from"./RadioButton-BOGjPhZP.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-O4CBwtLy.js";import{T as y}from"./Text-BVSFkmOJ.js";import{C as T}from"./Content-C5xMOAId.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Dp8IGOOw.js";import"./mergeRefs-B4ZkK10W.js";import"./index-GWM6ljsm.js";import"./FieldError-B4QQkVwM.js";import"./IconWarning-zrofpdfr.js";import"./FieldError-C4CBNnNe.js";import"./utils-CgS8DRaE.js";import"./Text-DWn8KR_S.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-DMFClxun.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-u9hoZ3YR.js";import"./Form-CVKq_8tp.js";import"./useFocus-D7WquFnz.js";import"./useLabel-C7dUje6t.js";import"./Label-CGUx7qQt.js";import"./Hidden-Cabgeqjz.js";import"./useFormReset-BUJ4pXgh.js";import"./usePress-ChUiq42t.js";import"./useFocusRing-DouDeddi.js";import"./useFocusable-GYH2Xp93.js";import"./FocusScope-C5C0qsLJ.js";import"./context-BYWbGN2W.js";import"./VisuallyHidden-DEeOB75f.js";import"./useControlledState-BloqaAdM.js";import"./Label-BtRITTXP.js";import"./useLocalizedStringFormatter-6gozqQnX.js";import"./browser-DxBOFXa_.js";import"./EmulatedBoldText-CK46MGsP.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

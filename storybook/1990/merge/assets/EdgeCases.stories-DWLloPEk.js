import{j as r}from"./iframe-Dmf5T25c.js";import{R as l,b as p,a as g}from"./RadioButton-CApchJ1S.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-BVfLPF-d.js";import{T as y}from"./Text-DLrkajvz.js";import{C as T}from"./Content-DBJwnKeq.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CPeLqOpb.js";import"./index-DqWAPupW.js";import"./index-C0-6kTd0.js";import"./FieldError-BrbRFqe2.js";import"./IconWarning-1UlzAmnA.js";import"./FieldError-osDHr7AF.js";import"./utils-DsML-bt_.js";import"./Text-DgEV6luH.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-BqeqDMKm.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-qiIWJ0kB.js";import"./RadioGroup-C6wI_FOp.js";import"./Form-CioSAe3u.js";import"./Label-D3KFpetT.js";import"./Hidden-ixkSnYSe.js";import"./useFormValidation-BlVKI6aj.js";import"./useFocus-DeIDhTP5.js";import"./useControlledState-ncLEgmHX.js";import"./FocusScope-XGh4Ynry.js";import"./useFocusRing-DUSzUYSL.js";import"./context-CfglF3Ge.js";import"./useFormReset-BQs2ByJh.js";import"./usePress-BaxinNTr.js";import"./useFocusable-Cm1AomQc.js";import"./VisuallyHidden-CtSvbpyT.js";import"./Label-CBoBMaMu.js";import"./useLocalizedStringFormatter-BKpY3AP6.js";import"./browser-DrFxiFmb.js";import"./EmulatedBoldText-B4ifPFjU.js";const pr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(l,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-DTheBFqg.js";import{R as l,b as p,a as g}from"./RadioButton-BN2wo6Rq.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-BaYzQrI_.js";import{T as y}from"./Text-DVaBUvZL.js";import{C as T}from"./Content-CCnffy7N.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-gCUS5Qd-.js";import"./index-ulNAr9WE.js";import"./index-C24gQbls.js";import"./ColumnLayout-B0a2sy_T.js";import"./useFieldComponent-mBN-j8SF.js";import"./utils-CIVb4-pA.js";import"./Text-C48huDBb.js";import"./filterDOMProps-CghfNOdR.js";import"./IconWarning-CXTS1Zmo.js";import"./react-children-utilities-g2QZgYrG.js";import"./ClearPropsContext-NW1-nYLP.js";import"./useMakeFocusable-DG-Ql63t.js";import"./RadioGroup-pPj_xytR.js";import"./Form-B9EEIYmx.js";import"./useLabel-DE7AINdt.js";import"./Label-DaxiHPCi.js";import"./Hidden-BUnkE8VR.js";import"./SelectionIndicator-CjHN0yDY.js";import"./useFormValidation-Bp-At_qz.js";import"./useFocus-gFMm1SVx.js";import"./useControlledState-CxM5G25q.js";import"./FocusScope-CHz78Q3h.js";import"./useFocusRing-Bw6jYcrF.js";import"./context-BBJsvWP1.js";import"./useFormReset-C6eFdCIy.js";import"./usePress-DWQVem_V.js";import"./useFocusable-CIkWBa0n.js";import"./VisuallyHidden-D3PBi60E.js";import"./Label-DS5MocSE.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CvDaoHpN.js";import"./browser-BqPz5wcV.js";import"./EmulatedBoldText-P0d28SeQ.js";const dr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,o)=>r.jsxs(g,{value:o.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,o)=>r.jsxs(g,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(b=(f=m.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const sr=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,sr as __namedExportsOrder,dr as default};
